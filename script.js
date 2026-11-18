console.log("JavaScript подключен");
document.querySelector("#buy").addEventListener("click", function() {
    document.querySelector("#message").textContent = 
    "Наушники добавлены в вашу корзину!";
});
document.querySelector("#details").addEventListener("click", function() {
    document.querySelector("#info").textContent =
     "Гарантия: 24 месяца. Подключение: Bluetooth 5.3.";
});
document.querySelector("#delivery").addEventListener("click", function() {
    document.querySelector("#delivery-info").textContent =
    "Доставка по городу - 300 р";
});
document.querySelector("#clear").addEventListener("click", function() {
    document.querySelector("#message").textContent =
    "";
});