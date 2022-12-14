import { throwError } from "./throwError.js";
const signIn = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const loginField = document.getElementById("login");
    const passwordField = document.getElementById("password");
    const login = loginField.value;
    const password = passwordField.value;
    const response = await fetch("/api/users/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
    }).then((res) => res.json()).then(data => {
        if (data.error) {
            throwError("Ошибка", data.error, "error", "signIn");
        }
        else {
            localStorage.setItem("id", data.id);
            localStorage.setItem("login", data.login);
            window.location.href = "/lk";
        }
    });
};
const signUp = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const emailField = document.getElementById("emailUp");
    const loginField = document.getElementById("loginUp");
    const passwordField = document.getElementById("passwordUp");
    const email = emailField.value;
    const login = loginField.value;
    const password = passwordField.value;
    if (email
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        fetch("/api/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, login, password }),
        }).then((res) => res.json()).then(data => {
            if (data.error) {
                throwError("Ошибка", data.error, "error", "sign_up");
            }
            else {
                localStorage.setItem("id", data.id);
                localStorage.setItem("login", data.login);
                localStorage.setItem("email", data.email);
                window.location.href = "/lk";
            }
        });
    }
    ;
};
document.getElementById("toUp").addEventListener("click", () => {
    document.getElementsByClassName("in")[0].classList.remove("active");
    document.getElementsByClassName("up")[0].classList.add("active");
});
document.getElementById("toIn").addEventListener("click", () => {
    document.getElementsByClassName("in")[0].classList.add("active");
    document.getElementsByClassName("up")[0].classList.remove("active");
});
document.getElementById("sign_in").addEventListener("click", signIn);
document.getElementById("sign_up").addEventListener("click", signUp);
