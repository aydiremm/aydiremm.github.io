// Check if payment amount exists in localStorage, if not, set it to 0
if (!localStorage.getItem('progressAmount3')) {
    localStorage.setItem('progressAmount3', 0);
}

// Update progress bar based on progress amount
function updateProgressBar3() {
    var progressAmount3 = parseFloat(localStorage.getItem('progressAmount3'));
    var progressBar3 = document.getElementById('progress3');
    var progressLabel3 = document.getElementById('progress-label3');
    var progressWidth3 = (progressAmount3 > 100) ? 100 : progressAmount3; // Ensure progress doesn't exceed 100%
    progressBar3.style.width = progressWidth3 + '%';
    progressLabel3.textContent = progressWidth3 + '%';
}

// Update progress bar on page load
window.onload = updateProgressBar3;

// Update progress amount and redirect to index.html
var payButton3 = document.getElementById('payButton3');
payButton3.addEventListener('click', function updateProgressBar3() {
    var paymentAmount3 = parseFloat(document.getElementById('paymentAmount3').value);
    if (isNaN(paymentAmount3) || paymentAmount3 <= 0) {
        // Display error if payment amount is not valid
        document.getElementById('paymentStatus3').textContent = 'Geçersiz ödeme miktarı!';
    } else {
        // Update progress amount
        var currentProgress3 = parseFloat(localStorage.getItem('progressAmount3'));
        var newProgress3 = currentProgress3 + paymentAmount3;
        localStorage.setItem('progressAmount3', newProgress3);
        // Redirect to index.html
        window.location.href = 'index.html';
    }
});
