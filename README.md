# ExtractDomainExtension

This Chrome extension allows users to collect all links visited on a webpage, and retrieve the domain name of each link while filtering out duplicates. Users can start and stop the link-collecting process by clicking the Start/Stop buttons provided in the extension's popup window.

The extension is implemented as a background script and runs in the background of the user's Chrome browser. It can detect when a user visits a new webpage in their active tab and automatically retrieve the URL of the page. In addition, the extension makes use of Chrome's extension APIs to execute JavaScript code on the page and retrieve all available links. The extension's popup window displays the collected links and their respective domain name along with the Start/Stop buttons.



这个 Chrome 扩展允许用户收集网页上访问过的所有链接，过滤掉重复项并检索每个链接的域名。用户可以通过扩展弹出窗口中提供的“开始/停止”按钮启动和停止链接收集过程。

该扩展作为后台脚本实现，并在用户的 Chrome 浏览器后台运行。它可以检测到用户在其活动选项卡中访问新网页，并自动检索页面的 URL。此外，该扩展利用 Chrome 的扩展 API 在页面上执行 JavaScript 代码并检索所有可用链接。扩展的弹出窗口显示收集的链接及其相应的域名，以及“开始/停止”按钮。
