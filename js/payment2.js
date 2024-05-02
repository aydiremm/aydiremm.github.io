// Check if payment amount exists in localStorage, if not, set it to 0
if (!localStorage.getItem('progressAmount2')) {
    localStorage.setItem('progressAmount2', 0);
}

// Update progress bar based on progress amount
function updateProgressBar2() {
    var progressAmount2 = parseFloat(localStorage.getItem('progressAmount2'));
    var progressBar2 = document.getElementById('progress2');
    var progressLabel2 = document.getElementById('progress-label2');
    var progressWidth2 = (progressAmount2 > 100) ? 100 : progressAmount2; // Ensure progress doesn't exceed 100%
    progressBar2.style.width = progressWidth2 + '%';
    progressLabel2.textContent = progressWidth2 + '%';
}

// Update progress bar on page load
window.onload = updateProgressBar2;

// Update progress amount and redirect to index.html
var payButton2 = document.getElementById('payButton2');
payButton2.addEventListener('click', function updateProgressBar2() {
    var paymentAmount2 = parseFloat(document.getElementById('paymentAmount2').value);
    if (isNaN(paymentAmount2) || paymentAmount2 <= 0) {
        // Display error if payment amount is not valid
        document.getElementById('paymentStatus2').textContent = 'Geçersiz ödeme miktarı!';
    } else {
        // Update progress amount
        var currentProgress2 = parseFloat(localStorage.getItem('progressAmount2'));
        var newProgress2 = currentProgress2 + paymentAmount2;
        localStorage.setItem('progressAmount2', newProgress2);
        // Redirect to index.html
        window.location.href = 'index.html';
    }
});
