// Check if payment amount exists in localStorage, if not, set it to 0
if (!localStorage.getItem('progressAmount8')) {
    localStorage.setItem('progressAmount8', 0);
}

// Update progress bar based on progress amount
function updateProgressBar8() {
    var progressAmount8 = parseFloat(localStorage.getItem('progressAmount8'));
    var progressBar8 = document.getElementById('progress8');
    var progressLabel8 = document.getElementById('progress-label8');
    var progressWidth8 = (progressAmount8 > 100) ? 100 : progressAmount8; // Ensure progress doesn't exceed 100%
    progressBar8.style.width = progressWidth8 + '%';
    progressLabel8.textContent = progressWidth8 + '%';
}

// Update progress bar on page load
window.onload = updateProgressBar8;

// Update progress amount and redirect to index.html
var payButton8 = document.getElementById('payButton8');
payButton8.addEventListener('click', function updateProgressBar8() {
    var paymentAmount8 = parseFloat(document.getElementById('paymentAmount8').value);
    if (isNaN(paymentAmount8) || paymentAmount8 <= 0) {
        // Display error if payment amount is not valid
        document.getElementById('paymentStatus8').textContent = 'Geçersiz ödeme miktarı!';
    } else {
        // Update progress amount
        var currentProgress8 = parseFloat(localStorage.getItem('progressAmount8'));
        var newProgress8 = currentProgress8 + paymentAmount8;
        localStorage.setItem('progressAmount8', newProgress8);
        // Redirect to index.html
        window.location.href = 'index.html';
    }
});
