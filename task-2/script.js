// ======================================
// LOGIN PASSWORD SHOW / HIDE
// ======================================

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

if (togglePassword && password) {

    togglePassword.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";

            this.innerHTML = '<i class="bi bi-eye-slash"></i>';

        } else {

            password.type = "password";

            this.innerHTML = '<i class="bi bi-eye"></i>';
        }

    });
}


// ======================================
// LOGIN VALIDATION
// ======================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const loginPassword = document.getElementById("password").value.trim();

        if (email === "" || loginPassword === "") {

            alert("Please fill all fields!");

            return;
        }

        alert("Login Successful!");

    });
}


// ======================================
// REGISTER PASSWORD SHOW / HIDE
// ======================================

const toggleRegisterPassword =
    document.getElementById("toggleRegisterPassword");

const registerPassword =
    document.getElementById("registerPassword");

if (toggleRegisterPassword && registerPassword) {

    toggleRegisterPassword.addEventListener("click", function () {

        if (registerPassword.type === "password") {

            registerPassword.type = "text";

            this.innerHTML =
                '<i class="bi bi-eye-slash"></i>';

        } else {

            registerPassword.type = "password";

            this.innerHTML =
                '<i class="bi bi-eye"></i>';
        }

    });
}


// ======================================
// CONFIRM PASSWORD SHOW / HIDE
// ======================================

const toggleConfirmPassword =
    document.getElementById("toggleConfirmPassword");

const confirmPassword =
    document.getElementById("confirmPassword");

if (toggleConfirmPassword && confirmPassword) {

    toggleConfirmPassword.addEventListener("click", function () {

        if (confirmPassword.type === "password") {

            confirmPassword.type = "text";

            this.innerHTML =
                '<i class="bi bi-eye-slash"></i>';

        } else {

            confirmPassword.type = "password";

            this.innerHTML =
                '<i class="bi bi-eye"></i>';
        }

    });
}


// ======================================
// AJAX EMAIL CHECK
// ======================================

const registerEmail =
    document.getElementById("registerEmail");

const emailStatus =
    document.getElementById("emailStatus");


if (registerEmail && emailStatus) {

    registerEmail.addEventListener("blur", function () {

        const email = registerEmail.value.trim();

        if (email === "") {

            emailStatus.innerHTML = "";

            return;
        }


        emailStatus.innerHTML =
            '<span class="text-primary">Checking email...</span>';


        fetch("check_user.php?email=" + encodeURIComponent(email))

            .then(response => {

                if (!response.ok) {
                    throw new Error("Server error");
                }

                return response.json();

            })

            .then(data => {

                if (data.exists) {

                    emailStatus.innerHTML =
                        '<span class="text-danger fw-bold">' +
                        '❌ Email already exists!' +
                        '</span>';

                } else {

                    emailStatus.innerHTML =
                        '<span class="text-success fw-bold">' +
                        '✅ Email is available!' +
                        '</span>';
                }

            })

            .catch(error => {

                console.log(error);

                emailStatus.innerHTML =
                    '<span class="text-danger">' +
                    'Error checking email.' +
                    '</span>';

            });

    });

}


// ======================================
// REGISTRATION VALIDATION
// ======================================

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("fullName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const confirm =
            document.getElementById("confirmPassword").value;

        const terms =
            document.getElementById("terms").checked;


        // Empty fields
        if (
            name === "" ||
            email === "" ||
            password === "" ||
            confirm === ""
        ) {

            alert("Please fill all fields!");

            return;
        }


        // Password length
        if (password.length < 6) {

            alert("Password must be at least 6 characters!");

            return;
        }


        // Password match
        if (password !== confirm) {

            alert("Passwords do not match!");

            return;
        }


        // Terms
        if (!terms) {

            alert("Please accept the terms and conditions!");

            return;
        }


        // Check known existing emails
        const existingEmails = [
            "test@gmail.com",
            "admin@gmail.com"
        ];


        if (existingEmails.includes(email.toLowerCase())) {

            alert("This email already exists!");

            return;
        }


        // Success
        alert("Registration Successful!");

        registerForm.reset();

        emailStatus.innerHTML = "";

    });

}