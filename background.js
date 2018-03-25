// When the extension is installed or upgraded
chrome.runtime.onInstalled.addListener(function () {
    // Replace all rules
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        // Add new rule
        chrome.declarativeContent.onPageChanged.addRules([{
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
    chrome.runtime.sendMessage(response);
});
