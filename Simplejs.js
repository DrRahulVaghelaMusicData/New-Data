document.getElementById('Acceptcookie').addEventListener('click',
    function() {
        document.querySelector('.CookiePolicypagepop').style.display = "none";
        const date = new Date();
        date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
        document.AcceptButtncooki.expires = '7Minutes';
    });
document.getElementById('cokkieclose').addEventListener('click', function() {
    document.querySelector('.CookiePolicypagepop').style.display = "none";
});

function openNav() {
            document.getElementById("Hamburger").style.marginLeft = " 210px ";
            document.getElementById("SitesliderNav").style.width = " 210px ";
            document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
        }

        function closeNav() {
            document.getElementById("Hamburger").style.marginLeft = "0";
            document.getElementById("SitesliderNav").style.width = " 0";
            document.body.style.backgroundColor = "white";
        }
        window.addEventListener("load", function() {
            const Loader = document.querySelector(".Loader");
            Loader.className += " hidden";
        });

