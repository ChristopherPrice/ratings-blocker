$(document).on('ready', function () {
    window.ratingsBlockerContent = new RatingsBlockerContent('table.wikitable.infobox');
    $('table.wikitable.infobox:not(:contains("Professional ratings"))').css('-webkit-filter', 'blur(0px) grayscale(0%)');
});