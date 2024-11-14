chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (typeof tab.url === "string" && tab.url.indexOf("https://www.opera.com/client/upgraded") != -1) {
        chrome.tabs.remove(tabId).then(function(){},function(err){});
    }
});