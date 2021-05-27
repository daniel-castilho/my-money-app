export function selectTab(tabId) {
	return {
		type: "TAB_SELECTED",
		payload: tabId,
	};
}

export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow,
    }
}

export function hideTabs(...tabIds) {
    const tabsToHide = {}
    tabIds.forEach(e => tabsToHide[e] = false)
    return {
        type: 'TAB_HIDDED',
        payload: tabsToHide,
    }
}