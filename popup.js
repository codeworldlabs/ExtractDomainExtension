window.onload = function () {
    let links = new Set();
    let collecting = false;

    chrome.runtime.onMessage.addListener((message) => {
        if (message.type === "link" && message.url) {
            let domain = getDomain(message.url);
            if (!links.has(domain)) {
                links.add(domain);
                let listItem = document.createElement("li");
                listItem.textContent = domain;
                document.getElementById("links").appendChild(listItem);
            }
        }
    });

    function getDomain(url) {
        let a = document.createElement("a");
        a.href = url;
        return a.hostname;
    }

    document.getElementById("start").addEventListener("click", () => {
        collecting = true;
        chrome.runtime.sendMessage({ type: "start" });
    });

    document.getElementById("stop").addEventListener("click", () => {
        collecting = false;
        chrome.runtime.sendMessage({ type: "stop" });
    });

    chrome.runtime.sendMessage({ type: "status" }, (response) => {
        collecting = response === "running";
        if (collecting) {
            document.getElementById("start").disabled = true;
        } else {
            document.getElementById("stop").disabled = true;
        }
    });
};
