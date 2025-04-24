const progressBar = document.getElementById('progressBar');
const progressIndicator = document.getElementById('progressIndicator');
const emailInput = document.getElementById('emailInput');

const container1 = document.querySelector('.isi-container1');
const container2 = document.querySelector('.isi-container2');

function startVerification() {
    if (emailInput.value.trim() === '') {
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
}


