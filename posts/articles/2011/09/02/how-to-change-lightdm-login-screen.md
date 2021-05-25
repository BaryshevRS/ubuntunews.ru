---
title: 'Меняем заставку в стандартной теме greeter LightDM'
date: '2011-09-02T20:59:26+04:00'
uri: 'articles/how-to-change-lightdm-login-screen'
alias: 
  - 'articles/how-to-change-lightdm-login-screen.html'
tags: 'greeter,LightDM'
source: 'http://www.webupd8.org/2011/09/how-to-change-lightdm-login-screen.html'
unixtime: 1314982766
visits: 14461
---
LightDM – легковесный дисплейный менеджер включенный по умолчанию в Ubuntu 11.10 Oneiric Ocelot, заместив собой GDM.

[![](img/2011/09/02/20-00/lightdm-1-6106669448-o.jpg)](img/2011/09/02/20-00/lightdm-1-6106669448-o.jpg)

Если есть желание сменить стандартную заставку greeter LightDM (пакет lightdm-gtk-greeter ) при авторизации, то потребуется немного отредактировать файл конфигурации:

```
sudo gedit /etc/lightdm/unity-greeter.conf 
```

[![](img/2011/09/02/20-00/lightdm-2-6106122289-o.jpg)](img/2011/09/02/20-00/lightdm-2-6106122289-o.jpg)

и подправить строку ниже:

```
background=/usr/share/backgrounds/warty-final-ubuntu.png 
```

где заменить *«/usr/share/backgrounds/warty-final-ubuntu.png»* на путь к своей картинке, и сохраниться после внесения изменений.
