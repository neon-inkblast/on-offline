const indicator = document.getElementById("indicator");
const message = document.getElementById("message");

const onlineFn = () => {
    message.classList.remove("error");
    message.classList.add("success");
    message.innerText = "You're online!"
    indicator.innerText = "🟢"
}
const offlineFn = () => {
    message.classList.remove("success");
    message.classList.add("error");
    message.innerText = "You've gone offline"
    indicator.innerText = "🔴"
}
window.addEventListener("online", onlineFn)
window.addEventListener("offline", offlineFn)

if (window.navigator.onLine) {
    onlineFn();
} else {
    offlineFn();
}