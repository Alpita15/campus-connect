console.log("Campus Connect loaded successfully.");


// Check if user is logged in

const user =
    JSON.parse(
        localStorage.getItem("campusUser")
    );


if (user) {

    console.log(
        "Logged in user:",
        user.name
    );

}