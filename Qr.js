const qrCodeImg = document.getElementById("qrCode");
const user = localStorage.getItem("userEmail");
const emailText=`Email: ${user}`;
QRCode.toDataURL(emailText).then((data) => {
    qrCodeImg.src = data;

});