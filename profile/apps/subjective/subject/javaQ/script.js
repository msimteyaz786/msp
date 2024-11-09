$(document).ready(function() {
    $('.accordion-header').on('click', function() {
        // Toggle the current content
        $(this).next('.accordion-content').slideToggle(500);
        
        // Close other content
        $('.accordion-content').not($(this).next()).slideUp(500);
    });
});