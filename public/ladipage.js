document.getElementById('btnClick').addEventListener('click', submitForm);

async function submitForm() {
    try {
        const response = await fetch('https://m-scan-payos.onrender.com/create_payment_link', { method: 'POST' });
        const payment = await response.json();
        console.log("Payment data:", payment);
        window.location.href = payment.checkoutUrl;


    } catch (error) {
        console.error('Error:', error);
    }
}
