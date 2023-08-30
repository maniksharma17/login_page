document.querySelector("#login-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});

const overlay_login_btn = document.querySelector("#overlay-login-btn");
const overlay_signup_btn = document.querySelector("#overlay-signup-btn");
const overlay_right = document.querySelector(".overlay-right");
const overlay_left = document.querySelector(".overlay-left");

overlay_signup_btn.addEventListener("click", ()=> {
    overlay_left.classList.add("signup-mode");
    overlay_right.classList.add("signup-mode");

    overlay_left.classList.remove("login-mode");
    overlay_right.classList.remove("login-mode");
    console.log("Signup btn");
});

overlay_login_btn.addEventListener("click", ()=> {
    overlay_left.classList.add("login-mode");
    overlay_right.classList.add("login-mode");

    overlay_left.classList.remove("signup-mode");
    overlay_right.classList.remove("signup-mode");
    console.log("Login btn");
});













