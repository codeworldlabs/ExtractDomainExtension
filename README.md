# ExtractDomainExtension

This Chrome extension allows users to collect all links visited on a webpage, and retrieve the domain name of each link while filtering out duplicates. Users can start and stop the link-collecting process by clicking the Start/Stop buttons provided in the extension's popup window.

The extension is implemented as a background script and runs in the background of the user's Chrome browser. It can detect when a user visits a new webpage in their active tab and automatically retrieve the URL of the page. In addition, the extension makes use of Chrome's extension APIs to execute JavaScript code on the page and retrieve all available links. The extension's popup window displays the collected links and their respective domain name along with the Start/Stop buttons.
