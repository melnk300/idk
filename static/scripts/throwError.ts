import { makeNotification } from "./components/notification.js";

export const throwError = (
  title: string,
  message: string,
  type: string,
  method: string
) => {
  makeNotification(title, message, type);
  const button = document.getElementById(method) as HTMLButtonElement;
  button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
  }, 3000);
};