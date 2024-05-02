// Check if payment amount exists in localStorage, if not, set it to 0
if (!localStorage.getItem('progressAmount5')) {
    localStorage.setItem('progressAmount5', 0);
}

// Update progress bar based on progress amount
function updateProgressBar5() {
    var progressAmount5 = parseFloat(localStorage.getItem('progressAmount5'));
    var progressBar5 = document.getElementById('progress5');
    var progressLabel5 = document.getElementById('progress-label5');
    var progressWidth5 = (progressAmount5 > 100) ? 100 : progressAmount5; // Ensure progress doesn't exceed 100%
    progressBar5.style.width = progressWidth5 + '%';
    progressLabel5.textContent = progressWidth5 + '%';
}

// Update progress bar on page load
window.onload = updateProgressBar5;

// Update progress amount and redirect to index.html
var payButton5 = document.getElementById('payButton5');
payButton5.addEventListener('click', function updateProgressBar5() {
    var paymentAmount5 = parseFloat(document.getElementById('paymentAmount5').value);
    if (isNaN(paymentAmount5) || paymentAmount5 <= 0) {
        // Display error if payment amount is not valid
        document.getElementById('paymentStatus5').textContent = 'Geçersiz ödeme miktarı!';
    } else {
        // Update progress amount
        var currentProgress5 = parseFloat(localStorage.getItem('progressAmount5'));
        var newProgress5 = currentProgress5 + paymentAmount5;
        localStorage.setItem('progressAmount5', newProgress5);
        // Redirect to index.html
        window.location.href = 'index.html';
    }
});
