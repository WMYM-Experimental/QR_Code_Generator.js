const btn = document.getElementById("btn");
class QRcode {
  constructor(data) {
    if (data === "") {
      data = `https://github.com/WashingtonYandun`; // default qr code
    }
    this.data = data.trim();
    this.build();
  }
  async build() {
    const targetImg = document.getElementById("qrcode");
    let newSrc =
      await `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${this.data}`;
    targetImg.src = newSrc;
  }
}

btn.addEventListener("click", () => {
  const dataInput = document.getElementById("input");
  const qr = new QRcode(dataInput.value);
  btn.textContent = `QR code was generated`;
});
