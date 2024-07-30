document.getElementById("btnClick").addEventListener("click", function() {
        window.location.replace("https://payos-msca-duthi.onrender.com/payment.html");
      });

 document.getElementById('sendButton').addEventListener('click', function() {
        this.textContent = 'Đã gửi email thành công';
        this.disabled = true; // Optional: Disable the button to prevent further clicks
      });

