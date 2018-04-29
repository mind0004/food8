// Get the modal
var modal = document.getElementById('bookModal');
// Get the button that opens the modal
var btn = document.getElementById("bookBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeBook")[0];
// When the user clicks the button, open the modal
btn.onclick = function () {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalBook) {
        modal.style.display = "none";
    }
}
