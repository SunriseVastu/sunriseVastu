$(window).on('load', function(){
    $('#loader').hide();
});

$(function() {

    lightbox.option({
        'disableScrolling': true,
        'resizeDuration' : 300
    })

    let mybutton = document.getElementById("topBtn");
    
    window.onscroll = function () {
	  scrollFunction();
	};

    mybutton.addEventListener("click", backToTop);

    function scrollFunction() {
        if (document.documentElement.scrollTop > 30) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    function backToTop() {
        document.documentElement.scrollTop = 0;
    }
});
