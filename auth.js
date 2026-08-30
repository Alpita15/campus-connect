const signupForm =
    document.getElementById("signupForm");

const loginForm =
    document.getElementById("loginForm");


/* SIGNUP */

if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("signupName").value;

            const email =
                document.getElementById("signupEmail").value;

            const studentId =
                document.getElementById("studentId").value;

            const password =
                document.getElementById("signupPassword").value;


            const user = {

                name: name,

                email: email,

                studentId: studentId,

                password: password

            };


            localStorage.setItem(
                "campusUser",
                JSON.stringify(user)
            );


            alert(
                "Account created successfully!"
            );


            window.location.href =
                "profile.html";

        }
    );

}


/* LOGIN */

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById("loginEmail").value;

            const password =
                document.getElementById("loginPassword").value;


            const storedUser =
                JSON.parse(
                    localStorage.getItem("campusUser")
                );


            if (!storedUser) {

                alert(
                    "No account found. Please sign up first."
                );

                return;

            }


            if (
                email === storedUser.email &&
                password === storedUser.password
            ) {

                alert(
                    "Login successful!"
                );

                window.location.href =
                    "profile.html";

            } else {

                alert(
                    "Invalid email or password."
                );

            }

        }
    );

}




function logout() {

    // Remove logged-in user
    localStorage.removeItem("campusUser");

    // Go to login page
    window.location.href = "login.html";
}


// CHECK LOGIN STATUS

function checkLogin() {

    const user = localStorage.getItem("campusUser");

    if (!user) {
        window.location.href = "login.html";
    }

}
```
