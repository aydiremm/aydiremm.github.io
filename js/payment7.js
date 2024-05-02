// Check if payment amount exists in localStorage, if not, set it to 0
if (!localStorage.getItem('progressAmount7')) {
    localStorage.setItem('progressAmount7', 0);
}

// Update progress bar based on progress amount
function updateProgressBar7() {
    var progressAmount7 = parseFloat(localStorage.getItem('progressAmount7'));
    var progressBar7 = document.getElementById('progress7');
    var progressLabel7 = document.getElementById('progress-label7');
    var progressWidth7 = (progressAmount7 > 100) ? 100 : progressAmount7; // Ensure progress doesn't exceed 100%
    progressBar7.style.width = progressWidth7 + '%';
    progressLabel7.textContent = progressWidth7 + '%';
}

// Update progress bar on page load
window.onload = updateProgressBar7;

// Update progress amount and redirect to index.html
var payButton7 = document.getElementById('payButton7');
payButton7.addEventListener('click', function updateProgressBar7() {
    var paymentAmount7 = parseFloat(document.getElementById('paymentAmount7').value);
    if (isNaN(paymentAmount7) || paymentAmount7 <= 0) {
        // Display error if payment amount is not valid
        document.getElementById('paymentStatus7').textContent = 'Geçersiz ödeme miktarı!';
    } else {
        // Update progress amount
        var currentProgress7 = parseFloat(localStorage.getItem('progressAmount7'));
        var newProgress7 = currentProgress7 + paymentAmount7;
        localStorage.setItem('progressAmount7', newProgress7);
        // Redirect to index.html
        window.location.href = 'index.html';
    }
});
