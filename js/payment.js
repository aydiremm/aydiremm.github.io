// Check if payment amount exists in localStorage, if not, set it to 0
if (!localStorage.getItem('progressAmount')) {
    localStorage.setItem('progressAmount', 0);
}

// Update progress bar based on progress amount
function updateProgressBar() {
    var progressAmount = parseFloat(localStorage.getItem('progressAmount'));
    var progressBar = document.getElementById('progress');
    var progressLabel = document.getElementById('progress-label');
    var progressWidth = (progressAmount > 100) ? 100 : progressAmount; // Ensure progress doesn't exceed 100%
    progressBar.style.width = progressWidth + '%';
    progressLabel.textContent = progressWidth + '%';
}

// Update progress bar on page load
window.onload = updateProgressBar;

// Update progress amount and redirect to index.html
var payButton = document.getElementById('payButton');
payButton.addEventListener('click', function updateProgressBar() {
    var paymentAmount = parseFloat(document.getElementById('paymentAmount').value);
    if (isNaN(paymentAmount) || paymentAmount <= 0) {
        // Display error if payment amount is not valid
        document.getElementById('paymentStatus').textContent = 'Geçersiz ödeme miktarı!';
    } else {
        // Update progress amount
        var currentProgress = parseFloat(localStorage.getItem('progressAmount'));
        var newProgress = currentProgress + paymentAmount;
        localStorage.setItem('progressAmount', newProgress);
        // Redirect to index.html
        window.location.href = 'index.html';
    }
});
