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
