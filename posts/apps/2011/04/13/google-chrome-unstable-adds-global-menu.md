---
title: 'Google Chrome получил поддержку глобального меню'
date: '2011-04-13T22:05:16+04:00'
uri: 'apps/google-chrome-unstable-adds-global-menu'
alias: 
  - 'apps/google-chrome-unstable-adds-global-menu.html'
tags: 'Chrome,Глобальное меню,11.04'
source: ''
unixtime: 1302717916
visits: 5501
---
Google Chrome в [Ubuntu](ubuntu/) 11.04 Natty Narwhal получил экспериментальную поддержку глобального меню.

[![Google Chrome получил поддержку глобального меню](img/2011/04/13/22-00/chrome-5616411309-o.jpg)](img/2011/04/13/22-00/chrome-5616411309-o.jpg)

Для включения опции нужно в строке ввода url ввести **«about:flags»**, затем найти и включить параметр **«Experimental GNOME menu bar support»** и перегрузить браузер, после чего в Chrome включится режим совместимости с глобальным меню.

[![Google Chrome получил поддержку глобального меню](img/2011/04/13/22-00/crom2-5616411441-o.jpg)](img/2011/04/13/22-00/crom2-5616411441-o.jpg)

Сборка Google Chrome с поддержкой экспериментальной опции уже доступна на [PPA](https://launchpad.net/~chromium-daily/+archive/ppa):

```
sudo add-apt-repository ppa:chromium-daily/ppa
sudo apt-get update
sudo apt-get install chromium-browser
```
