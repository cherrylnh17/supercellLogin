const progressBar = document.getElementById('progressBar');
const progressIndicator = document.getElementById('progressIndicator');

function startVerification() {
  progressBar.style.width = '100%';
  progressIndicator.style.left = 'calc(100% - 20px)'; // Adjust for indicator size
}

function kembaliVerification() {
    progressBar.style.width = '0%';
    progressIndicator.style.left = '5px';
}