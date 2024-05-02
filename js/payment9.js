// Check if payment amount exists in localStorage, if not, set it to 0
if (!localStorage.getItem('progressAmount9')) {
    localStorage.setItem('progressAmount9', 0);
}

// Update progress bar based on progress amount
function updateProgressBar9() {
    var progressAmount9 = parseFloat(localStorage.getItem('progressAmount9'));
    var progressBar9 = document.getElementById('progress9');
    var progressLabel9 = document.getElementById('progress-label9');
    var progressWidth9 = (progressAmount9 > 100) ? 100 : progressAmount9; // Ensure progress doesn't exceed 100%
    progressBar9.style.width = progressWidth9 + '%';
    progressLabel9.textContent = progressWidth9 + '%';
}

// Update progress bar on page load
window.onload = updateProgressBar9;

// Update progress amount and redirect to index.html
var payButton9 = document.getElementById('payButton9');
payButton9.addEventListener('click', function updateProgressBar9() {
    var paymentAmount9 = parseFloat(document.getElementById('paymentAmount9').value);
    if (isNaN(paymentAmount9) || paymentAmount9 <= 0) {
        // Display error if payment amount is not valid
        document.getElementById('paymentStatus9').textContent = 'Geçersiz ödeme miktarı!';
    } else {
        // Update progress amount
        var currentProgress9 = parseFloat(localStorage.getItem('progressAmount9'));
        var newProgress9 = currentProgress9 + paymentAmount9;
        localStorage.setItem('progressAmount9', newProgress9);
        // Redirect to index.html
        window.location.href = 'index.html';
    }
});
