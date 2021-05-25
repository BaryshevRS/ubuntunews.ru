---
title: 'Бета релиз 64-битной версии Flash Player 11 в Ubuntu'
date: '2011-07-14T20:10:47+04:00'
uri: 'news/adobe-releases-flash-player-11-beta'
alias: 
  - 'news/adobe-releases-flash-player-11-beta.html'
tags: 'Flash Player'
source: ''
unixtime: 1310659847
visits: 6254
---
Компания Adobe представила бета релиз Flash Player 11, особенностью которого является поддержка как 32-х, так и 64-х разрядных систем в Linux.

[![Бета релиза 64-битной версии Flash Player 11 в Ubuntu](img/2011/07/14/20-00/flash-11-5937444700-o.jpg)](img/2011/07/14/20-00/flash-11-5937444700-o.jpg)

## Основные характеристики

*   В Linux стал доступен векторный формат печати (PDF, SVG, EMF и т.д.)
*   Поддержка кубических кривых Безье
*   Поддержка кодека сжатия G.711 для телефонии
*   Поддержка Stage 3D
*   Кодирования видео в H.264/AVC SW
*   Улучшена компрессия SWF файлов

## Установка бета Flash Player 11 в Ubuntu

Установка 64-х разрядной версии Flash Player 11 доступна из специального PPA, который доступен под все поддерживаемые версии Ubuntu: 8.04, 9.10, 10.04, 10.10, 11.04 и 11.10. Следует отметить, что для инсталляции потребуется создать папку «/usr/lib/kde4/», в том случае если в системе не установлена KDE SC.

```
sudo mkdir /usr/lib/kde4/ 
sudo add-apt-repository ppa:sevenmachines/flash
sudo apt-get update
sudo apt-get install flashplugin64-installer
```

Для остальных операционных систем и 32-х разрядной сборки Ubuntu, следует [скачать «.tar.gz» пакет](http://labs.adobe.com/downloads/flashplayer11.html).

Для установки достаточно скопировать файл **«libflashplayer.so»** из архива в папку **«~/.mozilla/plugins»** (Если нету то создать), это также будет работать и под Chromium.

Для полной установки потребуется переместить папку **«usr»** в соответствующий системный каталог, но это не обязательно, работать будет и так.
