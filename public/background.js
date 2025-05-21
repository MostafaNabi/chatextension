chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed successfully!");
  chrome.action.setBadgeText({
    text: "ON",
  });
});