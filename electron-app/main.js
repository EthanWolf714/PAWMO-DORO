const {app, BrowserWindow,  Menu} = require('electron/main');

const createWindow = () => {
    Menu.setApplicationMenu(null);
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        maximizable:false,
        resizable:false,
        icon: './pawmoIcon.ico',
        //custom window controls
        titleBarOverlay: {
            color: '#0000FF',
            symbolColor: '#74b1be',
            height: 60,
        },
        // expose window controls in Windows/Linux
       // ...(process.platform !== 'darwin' ? { titleBarOverlay: true } : {})
    })
    win.loadFile('index.html')
    
    
    

} 

app.whenReady().then(() => {
    createWindow()
    
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    })
})

app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin') app.quit();
})

