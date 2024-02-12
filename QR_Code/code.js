const inputBox = document.getElementById("inputBox"); // Corrected id
const qrimg = document.getElementById("qrimg");

function generateQR(){
  qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(inputBox.value); 
}
