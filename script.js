var $toggleHome = document.getElementById('nav-home');
var $toggleAbout = document.getElementById('nav-about');
var $toggleServices = document.getElementById('nav-services');
var $toggleTestimonials = document.getElementById('nav-testimonials');
var $toggleContact = document.getElementById('nav-contact-us');
var $checkbox = document.getElementById('checkbox');

var toggle_checkbox = function() {
    $checkbox.checked = !$checkbox.checked;
}

$toggleHome.addEventListener('click', toggle_checkbox);
$toggleAbout.addEventListener('click', toggle_checkbox);
$toggleServices.addEventListener('click', toggle_checkbox);
$toggleTestimonials.addEventListener('click', toggle_checkbox);
$toggleContact.addEventListener('click', toggle_checkbox);