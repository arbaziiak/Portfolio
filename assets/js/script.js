
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});



// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// typing animation  script
var typed = new Typed(".typing",{
    strings: ["Web Developer","App Developer","Data Analyst", "Freelancer"],
    typeSpeed: 120,
    backSpeed: 120,
    loop: true
})
