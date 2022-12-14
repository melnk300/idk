export const makeNotification = (title, message, type) => {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.classList.add(type);
    notification.innerHTML = /*html*/ `
        <div class="notification_title">${title}</div>
        <div class="notification_message">${message}</div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
};
