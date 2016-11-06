$(document).on('DOMNodeInserted', 'html', function (event) {
    if (!window.ratingsBlockerContent) {
        window.ratingsBlockerContent = new RatingsBlockerContent('.score-box', 'p.bnm, .review .artwork .with-notch:after, .review .artwork .with-notch:before, .hero.track a, .hero.bnm a, .hero.bnr a, .hero .with-notch:before, .hero .with-notch:after, .track-review div.bnm, .review a.bnm, .track-meta a.bnm, .track-collection-item .with-notch:before, .track-collection-item .with-notch:after, .track-hero div.bnm, .track-hero a.bnm, .album-review-hero .artwork.with-notch:before, .album-review-hero .artwork.with-notch:after, .album-review-hero a.bnm, a.album-link .bnm, div.bnm-notch::before, div.bnm-notch::after, a.title-link div.meta a.bnm');
    } else {
        window.ratingsBlockerContent.checkIfRatingsHidden();
    }
});