const youDotComURL = 'https://you.com/'

// Launch You.com on toolbar icon click
chrome.action.onClicked.addListener(() => chrome.tabs.create({ url: youDotComURL }))

// Query You.com on omnibox query submitted
chrome.omnibox.onInputEntered.addListener(query =>
    chrome.tabs.update({ url: `${youDotComURL}/search?q=${decodeURIComponent(query)}&tbm=youchat` }))
