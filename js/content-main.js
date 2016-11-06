var RatingsBlockerContent = function (blurSelector, hideSelector, afterPageLoadSelector) {
    var exports = {};
    
    exports.hideRatings = function () {
        if (blurSelector) {
            $(blurSelector).addClass('ratings-blocker-enabled-animate').removeClass('ratings-blocker-disabled-animate ratings-blocker-disabled'); 
        }
        if (hideSelector) {
            $(hideSelector).animate({opacity: 0}, 200);
        }
    };
    
    exports.showRatings = function () {
        if (blurSelector) {
            $(blurSelector).removeClass('ratings-blocker-enabled-animate').addClass('ratings-blocker-disabled-animate ratings-blocker-disabled');
        }
        if (hideSelector) {
            $(hideSelector).animate({opacity: 1}, 200);
        }
    }
    
    exports.checkIfRatingsHidden = function () {
        chrome.runtime.sendMessage({method: "getSyncStorage", key: "ratingsHidden"}, function(response) {
            if (response.data != true) {
                exports.showRatings();
            }
        });
    };
    
    
    if (afterPageLoadSelector) {
        $('body').on('DOMNodeInserted', afterPageLoadSelector, function () {
            exports.checkIfRatingsHidden();
        });
    }
    
    exports.checkIfRatingsHidden();
    return exports;
};