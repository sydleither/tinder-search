var requestSent = false;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if(requestSent === false){
        requestSent = true;

        var nameElement = document.getElementsByClassName('Fxs($flx1) Flw(w) Fz($xl) Fw($bold) Pend(8px)')[0];
        var accountName = nameElement.innerHTML;

        if(message !== accountName){
            var activityTab = document.querySelector('[aria-label="Nope"]');
            activityTab.click();
            sendResponse([true]);
        }

        else{
            sendResponse([false]);
        }
    }
});