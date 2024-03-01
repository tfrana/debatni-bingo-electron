(() => {
    const { Menu, dialog } = require('electron');
    const path = require('node:path');
    const openAboutWindow = require('electron-about-window').default;
    const template = [
        {
            label: 'Bingo',
            submenu: [
                {
                    label: 'Nová karta',
                    role: 'reload'
                },
                { type: 'separator' },
                {
                    label: 'Ukončit',
                    role: 'close'
                }
            ]
        },
        {
            label: 'O programu',
            click: () => {
                dialog.showMessageBoxSync({
                    type: 'info',
                    title: 'O programu',
                    message: 'Debatní bingo',
                    detail: 'Tomáš Frána\nverze 1.0.0\n2024',
                    buttons: ['Ok']
                })
            }
        },
    ];

    console.log(path.join(__dirname, '/icon.png'));
    
    const menu = Menu.buildFromTemplate(template)

    Menu.setApplicationMenu(menu)
})();