
const {app, BrowserWindow} = require('electron')
    
app.on('ready', () => {
    let win = new BrowserWindow({width: 800, height: 600})
    win.on('closed', () => {
        win = null
    })
                 
    win.loadURL('https://github.com')
    win.maximize();
    win.setFullScreen(true);
    win.setAutoHideMenuBar(true);
});

