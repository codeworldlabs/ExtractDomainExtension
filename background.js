let interval = null;
let lastUrl = "";

chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.executeScript(tab.id, { file: "content.js" });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "start") {
        if (!interval) {
            interval = setInterval(collectLinks, 1000);
        }
    } else if (message.type === "stop") {
        clearInterval(interval);
        interval = null;
    } else if (message.type === "status") {
        sendResponse(interval ? "running" : "stopped");
    }
});

function collectLinks() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let tab = tabs[0];
        let currentUrl = tab.url;
        if (currentUrl !== lastUrl) {
            lastUrl = currentUrl;
            chrome.runtime.sendMessage({ type: "link", url: currentUrl });
        }
    });

    chrome.tabs.executeScript({ code: 'Array.from(document.getElementsByTagName("a")).map(a => a.href)' },
        (links) => {
            links = links[0];
            for (let i = 0; i < links.length; i++) {
                let url = links[i];
                chrome.runtime.sendMessage({ type: "link", url: url });
            }
        });
}
