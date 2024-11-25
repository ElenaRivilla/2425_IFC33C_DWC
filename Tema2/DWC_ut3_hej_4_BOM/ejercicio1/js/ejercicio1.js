function showInfo() {
    let ul = document.getElementsByTagName('ul')[0];
    let cookies = navigator.cookiesEnabled ? 'Enabled' : 'Disabled';
    let info = `Browser info: ${navigator.userAgent}\n\nBrowser version: ${navigator.appVersion}\n\nCookies: ${cookies}`;
    let infoArray = info.split('\n\n');

    if (ul.children.length > 0) {
        return; 
    }
    
    for (let i = 0; i < infoArray.length; i++) {
        let li = document.createElement('li');
        li.textContent = infoArray[i];
        ul.appendChild(li);
    }
}
