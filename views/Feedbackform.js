document.addEventListener("DOMContentLoaded", function() {
    const submitbtn = document.getElementById("btn-feedback-submit");
    const thankYouMessage = document.getElementById("thankyoumessage");

    submitbtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page

        // Hide the feedback form
        submitbtn.style.display = "none";

        // Show the "Thank you" message
        thankYouMessage.style.display = "block";
    });
});
<footer class="footer">
    <h4 class="footer-heading">FinanceCraft</h4>
    <hr class="footer-hr">
    <p class="footer-subheading">LEARN . ANALYSE . PREDICT</p>
    <p class="footer-txt">Stay ahead of the market trends, make informed decisions, and maximize your returns. Join us in shaping your financial success today.</p>
    <p class="footer-txt">. . .</p>
    <div class="footer-icon">
        <a target="_blank" href="https://accounts.google.com/InteractiveLogin/signinchooser?hl=en-gb&ifkv=AYZoVhcMBGRUCAY2xZqgLeMwwLpWNDmGlM9WCjVqPJcz_v1Gpks9sY8Ci299N40D5mQp41EJBHvKBA&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
        <img src="icons8-gmail-50.png">
        </a>
        <a target="_blank" href="https://www.linkedin.com/home"></a>
        <img src="icons8-linkedin-50.png">
        </a>
        <a href="#">
        <img src="/images/i.png">
        </a>
    </div>

</footer>