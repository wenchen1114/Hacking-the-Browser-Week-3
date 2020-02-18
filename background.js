console.log('I am in the bg');

chrome.browserAction.onClicked.addListener(function (){
    console.log('YOU CLICKED ME!');
    chrome.tabs.executeScript({
        file: "content.js"
    })
});