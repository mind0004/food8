        async function hentMenu() {

            let menufil = await fetch("menu.html");
            let menu = await menufil.text();

        }

        window.addEventListener("load", hentMenu);

        // BURGER MENU START */
        document.querySelector(".dropbtn").addEventListener("click", toggleMenu);

        function toggleMenu() {
            document.querySelector(".dropbtn").classList.toggle("change");


        }

        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        // Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {

                var dropdowns = document.getElementsByClassName("dropdown-content");

                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
