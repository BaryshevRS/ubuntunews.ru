---
title: 'Контекстное меню для динамического управления окнами'
date: '2012-03-20T23:16:20+04:00'
uri: 'apps/dynamic-window-quicklist'
alias: 
  - 'apps/dynamic-window-quicklist.html'
tags: 'Меню,Quicklist'
source: 'http://www.ubuntuvibes.com/2012/03/dynamic-window-quicklist-for-unity.html'
unixtime: 1332270980
visits: 4410
---
Разработчик Ubuntu – Alan Bell представил небольшой скрипт позволяющий управлять несколькими окнами одного приложения с помощью контекстного меню.

![](img/2012/03/20/23-00/dynamic-window-quicklist-6854635764-o.jpg)

Принцип работы скрипта заключается в возможности переключиться между запущенными окнами, просто нажав иконку нужного приложения на панели Unity и вызвав контекстное меню правым кликам мыши. В меню сверху должно будет вывестись все доступные окна, список которых обновляется динамически в зависимости от их количества.

 <iframe width="500" height="284" src="http://www.youtube.com/embed/hjkh5VI8CTI" frameborder="0" allowfullscreen=""></iframe>

Установка доступна только для Ubuntu 12.04:

```
sudo apt-add-repository ppa:alanbell/unity
 sudo apt-get update
 sudo apt-get install unity-window-quicklists
```

Сам скрипт находится в разработке, так что возможны различные ошибки.

В текущей версии присутствует небольшой баг с автозапуском, чтобы его пофиксить нужно подредактировать файл, выполнив в терминале:

```
sudo gedit /etc/xdg/autostart/unity-window-quicklists.desktop
```

и заменить опцию *OnlyShowIn=UNITY;* на *OnlyShowIn=Unity;*

После сделанных изменений перезайти в сессию.
