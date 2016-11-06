var initialize = function () {
    var ratingsHidden = true;
    
    
    chrome.storage.onChanged.addListener(function(changes, areaName){
        if(areaName == "sync" && changes.ratingsHidden) { 
            ratingsHidden = changes.ratingsHidden.newValue;
            
            if(ratingsHidden === true) {
                chrome.tabs.executeScript(null,
                    {code:'ratingsBlockerContent.hideRatings();'});
            } else {
                chrome.tabs.executeScript(null,
                    {code:'ratingsBlockerContent.showRatings();'});
            }
        }
    });

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        window.sendResponse = sendResponse;
        if (request.method == "getSyncStorage") {
            sendResponse({"data": ratingsHidden});
        } else {
          sendResponse({});
        }
    });

    chrome.storage.sync.get('ratingsHidden', function (data) {
        ratingsHidden = data.ratingsHidden;
    });
} ();