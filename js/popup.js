var Popup = function () {
    var showRatingsString = "Show Ratings",
        hideRatingsString = "Hide Ratings",
        ratingsHidden = true,
        $optionText = $(".options span");
    
    var setHideRatingsOptionText = function () {
        if (ratingsHidden) {
            $optionText.text(showRatingsString);
        } else {
            $optionText.text(hideRatingsString);
        }
    };
    
    chrome.storage.sync.get("ratingsHidden", function(data) {
        ratingsHidden = data.ratingsHidden;
        setHideRatingsOptionText();
    });
    
    $optionText.on("click", function () {
        ratingsHidden = !ratingsHidden;
        
        chrome.storage.sync.set({"ratingsHidden": ratingsHidden}, function () {
            $optionText.animate({
                opacity: 0.0
            }, 100, function () {
                setHideRatingsOptionText();
                $optionText.animate({
                    opacity: 1.0
                }, 100);
            });
        });
    });
} ();


