function injectTheScript() {
    return new Promise(resolve => { 
        const name = document.getElementById('name').value;

        chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
            chrome.tabs.executeScript(tab.id, {file: 'utilities.js'}, () => {
                chrome.tabs.sendMessage(tab.id, name, resolve);
            });
        });
    });
}

async function nextName() {
    while (await injectTheScript()) {}
}

document.getElementById('start').addEventListener('click', nextName);