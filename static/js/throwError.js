import { makeNotification } from "./components/notification.js";
export const throwError = (title, message, type, method) => {
    makeNotification(title, message, type);
    const button = document.getElementById(method);
    button.disabled = true;
    setTimeout(() => {
        button.disabled = false;
    }, 3000);
};
