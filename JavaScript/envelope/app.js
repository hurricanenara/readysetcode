
const envelope = document.querySelector(".env-image");

$('.env-image').on('click', () => {
    $('.closed-letter')[0].style.display = "none";
    $('.open-letter')[0].style.display = "block";

})