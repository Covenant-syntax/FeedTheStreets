// PAYMENT.HTML

var proceedBtn = document.getElementById("proceed");
var leftModal = document.getElementById("modalLeft");
var rightModal = document.getElementById("modalRight");

proceedBtn.onclick = function(){
    leftModal.style.display = "none"
    rightModal.style.display = "block"
}

//paystack integration
function payWithPaystack() {
    event.preventDefault();

        let handler = PaystackPop.setup({
        key: 'pk_live_cd25274fbeb5c29f44e93d60d3e91bdffe5f6de3', // Replace with your Paystack public key
        email: document.getElementById('email').value,
        amount: document.getElementById('amount').value * 100, // Amount in kobo
        currency: 'NGN',
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Generate a unique reference number
        callback: function(response) {
            // This happens after the payment is completed successfully
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
            // You can make an AJAX call here to verify the transaction with your server
        },
        onClose: function() {
            alert('Transaction was not completed, window closed.');
        },
        payment_options: "card, banktransfer, ussd, qr"
        });

        handler.openIframe();
        document.getElementById("paymentForm").reset();
     }