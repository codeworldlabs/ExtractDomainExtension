let interval = null;
let lastUrl = "";

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
    let currentUrl = window.location.href;
    if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        chrome.runtime.sendMessage({ type: "link", url: currentUrl });
    }

    let links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        let url = link.href;
        if (url && url !== currentUrl) {
            chrome.runtime.sendMessage({ type: "link", url: url });
        }
    }
}
