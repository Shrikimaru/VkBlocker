chrome.tabs.onUpdated.addListener(function(id, changes, tab){
	if(/vk.com/.test(tab.url))
		chrome.tabs.update({"url": "warning.html"});
});