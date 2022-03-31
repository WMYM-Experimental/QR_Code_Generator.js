const btn = document.getElementById("btn");
const favicon = Array.from(document.getElementsByClassName("icon"));
class QRcode {
  constructor(data) {
    if (data === "") {
      data = `https://github.com/WashingtonYandun`; // default qr code
    }
    this.data = data.trim();
  }
  build() {
    const targetImg = document.getElementById("qrcode");
    let newSrc = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${this.data}`;
    targetImg.src = newSrc;
    return newSrc;
  }
}

btn.addEventListener("click", async () => {
  const dataInput = document.getElementById("input");
  const qr = await new QRcode(dataInput.value);
  favicon.forEach((f) => {
    f.href = qr.build();
  });
  btn.textContent = `QR code was generated`;
});
