// Clears the cache then refreshes page.
function clearCache(tab) {

    // Defines "time" to equal number of milliseconds between 1 January 1970 00:00:00 UTC and the current second.
    var birth = performance.now();

    // Deletes all cache data from 1 January 1970 00:00:00 UTC up until the current second.
    chrome.browsingData.removeCache({"since": birth}, function() {

        chrome.tabs.reload(tab.id);     // Reloads current tab.

    });
}

// Fires `clearCache` when browser icon is clicked.
chrome.browserAction.onClicked.addListener(clearCache);