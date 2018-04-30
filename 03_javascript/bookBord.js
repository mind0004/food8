// Get the modal
var modalBook = document.getElementById('bookModal');
// Get the button that opens the modal
var btnBook = document.getElementById("bookBtn");
// Get the <span> element that closes the modal
var spanBook = document.getElementsByClassName("closeBook")[0];
// When the user clicks the button, open the modal
btnBook.onclick = function () {
    modalBook.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanBook.onclick = function () {
    modalBook.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalBook) {
        modalBook.style.display = "none";
    }
}
