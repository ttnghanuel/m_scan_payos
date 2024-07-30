document.getElementById("btnClick").addEventListener("click", function() {
        window.location.replace("https://payos-msca-duthi.onrender.com/payment.html");
      });

document.getElementById('btnPayment').addEventListener('click', submitForm);

async function submitForm() {
    try {
        const response = await fetch('https://m-scan-payos.onrender.com/create_payment_link', { method: 'POST' });
        const payment = await response.json();
        console.log("Payment data:", payment);
        window.location.replace(payment.checkoutUrl);


    } catch (error) {
        console.error('Error:', error);
    }
}


