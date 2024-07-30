document.getElementById("btnClick").addEventListener("click", function() {
        window.location.replace("https://payos-msca-duthi.onrender.com/payment.html");
      });
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


