const progressBar = document.getElementById('progressBar');
const progressIndicator = document.getElementById('progressIndicator');

const emailInput = document.getElementById('emailInput');


const inputFields = document.querySelectorAll("input.field");
const container1 = document.querySelector('.isi-container1');
const container2 = document.querySelector('.isi-container2');

function startVerification() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silahkan masukan email anda!"
      });
      return;
    }

    if (!emailRegex.test(emailInput.value)) {
      Swal.fire({
        icon: "warning",
        title: "Peringatan",
        text: "Format email tidak valid."
      });
      return;
    }

    const email = emailInput.value;
    progressBar.style.width = '100%';
    progressIndicator.style.left = 'calc(100% - 20px)';
    document.getElementById('emailTerkirim').textContent = email;


    container1.classList.remove('show');
    container2.classList.add('show');
}

function kembaliVerification() {
    progressBar.style.width = '0%';
    progressIndicator.style.left = '5px';
    emailInput.value = '';
    container2.classList.remove('show');
    container1.classList.add('show');

    inputFields.forEach(field => {
        field.value = '';
    });
}

//Bagian Kirim ulang kode
let isKirimCodeDisable = false;
let countdownInterval;
const cooldownTime = 60000;

function kirimCode(buttonElement){
  if (isKirimCodeDisable){
    return
  }

  Swal.fire({
    icon: "success",
    title: "Success",
    text: "Kode telah dikirim ulang!",
    showConfirmButton: false,
    timer: 1500
  });

  isKirimCodeDisable = true;
  buttonElement.disable = true;

  let remainingTime = cooldownTime / 1000;

  countdownInterval = setInterval(() => {
    const menit = Math.floor(remainingTime / 60);
    const detik = remainingTime % 60;
    const formatWaktu = `${String(menit).padStart(2, '0')}:${String(detik).padStart(2, '0')}`;
    buttonElement.textContent = `Mengirim Ulang (${formatWaktu})`;
    buttonElement.style.color = "#5d5d66";
    remainingTime--;

    if (remainingTime < 0){
      clearInterval(countdownInterval);
      isKirimCodeDisable = false;
      buttonElement.disable = false;
      buttonElement.textContent = "Kirim Ulang Kode";
      buttonElement.style.color = "#3DAFE1";
    }
  }, 1000);

}

function faqPendaftaran(){
  Swal.fire({
    title: "Bagaimana cara mendaftar Supercell ID?",
    html: `
    <ol style="text-align: left;">
      <li>Buka permainan Supercell di perangkat seluler Anda.</li>
      <li>Temukan <b>Pengaturan</b> dalam game.</li>
      <li>Ketuk "Terputus" di bawah Supercell ID.</li>
      <li>Ketuk "Daftar Sekarang."</li>
      <li>Ikuti petunjuk yang ditampilkan di layar.</li>
    </ol>
  `
  });
}

inputFields.forEach((field) => {
  field.addEventListener("input", handleInput);
  field.addEventListener("keydown", handleBackSpace);
});

function handleInput(e) {
  let inputField = e.target;
  if (inputField.value.length >= 1) {
    let nextField = inputField.nextElementSibling;
    return nextField && nextField.focus();
  }
}

function handleBackSpace(e){
  let inputField = e.target;
  if (e.key === 'Backspace' && inputField.value.length === 0){
    let previousField = inputField.previousElementSibling;
    if (previousField){
      previousField.focus();
    }
  }
}


function verifikasiCode(){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Kode Verifikasi Salah!"
  });
}
