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



(function() {
    emailjs.init('3lZCskaWhfmuBqy4v');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        $('#loader').show();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('contact_service', 'template_8ihd63f', this)
            .then(function() {
                console.log('SUCCESS!');
                $("#contact-form")[0].reset();
                $("#contact-form").addClass("d-none");
                $("#success-msg").removeClass("d-none");
            }, function(error) {
                console.log('FAILED...', error);
                alert("Some error occured. Please re-sumbit the form.");
            });
        $('#loader').hide();
    });
};