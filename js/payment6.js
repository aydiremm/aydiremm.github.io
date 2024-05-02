// Check if payment amount exists in localStorage, if not, set it to 0
if (!localStorage.getItem('progressAmount6')) {
    localStorage.setItem('progressAmount6', 0);
}

// Update progress bar based on progress amount
function updateProgressBar6() {
    var progressAmount6 = parseFloat(localStorage.getItem('progressAmount6'));
    var progressBar6 = document.getElementById('progress6');
    var progressLabel6 = document.getElementById('progress-label6');
    var progressWidth6 = (progressAmount6 > 100) ? 100 : progressAmount6; // Ensure progress doesn't exceed 100%
    progressBar6.style.width = progressWidth6 + '%';
    progressLabel6.textContent = progressWidth6 + '%';
}

// Update progress bar on page load
window.onload = updateProgressBar6;

// Update progress amount and redirect to index.html
var payButton6 = document.getElementById('payButton6');
payButton6.addEventListener('click', function updateProgressBar6() {
    var paymentAmount6 = parseFloat(document.getElementById('paymentAmount6').value);
    if (isNaN(paymentAmount6) || paymentAmount6 <= 0) {
        // Display error if payment amount is not valid
        document.getElementById('paymentStatus6').textContent = 'Geçersiz ödeme miktarı!';
    } else {
        // Update progress amount
        var currentProgress6 = parseFloat(localStorage.getItem('progressAmount6'));
        var newProgress6 = currentProgress6 + paymentAmount6;
        localStorage.setItem('progressAmount6', newProgress6);
        // Redirect to index.html
        window.location.href = 'index.html';
    }
});
