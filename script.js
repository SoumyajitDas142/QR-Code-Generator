const container = document.querySelector(".container"),
qrInput = document.querySelector(".form input"),
generateBtn = document.querySelector(".form button"),
qrImg= document.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generating QR...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        container.classList.add("active");
        generateBtn.innerText = "Generate QR";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        container.classList.remove("active");
    }
});