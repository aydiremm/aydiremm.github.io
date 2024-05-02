// Check if payment amount exists in localStorage, if not, set it to 0
if (!localStorage.getItem('progressAmount10')) {
    localStorage.setItem('progressAmount10', 0);
}

// Update progress bar based on progress amount
function updateProgressBar10() {
    var progressAmount10 = parseFloat(localStorage.getItem('progressAmount10'));
    var progressBar10 = document.getElementById('progress10');
    var progressLabel10 = document.getElementById('progress-label10');
    var progressWidth10 = (progressAmount10 > 100) ? 100 : progressAmount10; // Ensure progress doesn't exceed 100%
    progressBar10.style.width = progressWidth10 + '%';
    progressLabel10.textContent = progressWidth10 + '%';
}

// Update progress bar on page load
window.onload = updateProgressBar10;

// Update progress amount and redirect to index.html
var payButton10 = document.getElementById('payButton10');
payButton10.addEventListener('click', function updateProgressBar10() {
    var paymentAmount10 = parseFloat(document.getElementById('paymentAmount10').value);
    if (isNaN(paymentAmount10) || paymentAmount10 <= 0) {
        // Display error if payment amount is not valid
        document.getElementById('paymentStatus10').textContent = 'Geçersiz ödeme miktarı!';
    } else {
        // Update progress amount
        var currentProgress10 = parseFloat(localStorage.getItem('progressAmount10'));
        var newProgress10 = currentProgress10 + paymentAmount10;
        localStorage.setItem('progressAmount10', newProgress10);
        // Redirect to index.html
        window.location.href = 'index.html';
    }
});
