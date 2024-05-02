// Check if payment amount exists in localStorage, if not, set it to 0
if (!localStorage.getItem('progressAmount4')) {
    localStorage.setItem('progressAmount4', 0);
}

// Update progress bar based on progress amount
function updateProgressBar4() {
    var progressAmount4 = parseFloat(localStorage.getItem('progressAmount4'));
    var progressBar4 = document.getElementById('progress4');
    var progressLabel4 = document.getElementById('progress-label4');
    var progressWidth4 = (progressAmount4 > 100) ? 100 : progressAmount4; // Ensure progress doesn't exceed 100%
    progressBar4.style.width = progressWidth4 + '%';
    progressLabel4.textContent = progressWidth4 + '%';
}

// Update progress bar on page load
window.onload = updateProgressBar4;

// Update progress amount and redirect to index.html
var payButton4 = document.getElementById('payButton4');
payButton4.addEventListener('click', function updateProgressBar4() {
    var paymentAmount4 = parseFloat(document.getElementById('paymentAmount4').value);
    if (isNaN(paymentAmount4) || paymentAmount4 <= 0) {
        // Display error if payment amount is not valid
        document.getElementById('paymentStatus4').textContent = 'Geçersiz ödeme miktarı!';
    } else {
        // Update progress amount
        var currentProgress4 = parseFloat(localStorage.getItem('progressAmount4'));
        var newProgress4 = currentProgress4 + paymentAmount4;
        localStorage.setItem('progressAmount4', newProgress4);
        // Redirect to index.html
        window.location.href = 'index.html';
    }
});
