---
title: 'Установка Super Mario War в Ubuntu'
date: '2012-03-28T00:30:18+04:00'
uri: 'apps/install-super-mario-war-ubuntu'
alias: 
  - 'apps/install-super-mario-war-ubuntu.html'
tags: 'Super Mario War,Игра'
source: ''
unixtime: 1332880218
visits: 9007
---
[Super Mario War](http://smw.supersanctuary.net/site/) – мультиплеерная экшен игра, подобная своему Nintendo аналогу. Суть игры заключается в том, чтобы «задавить» противника прыжком сверху.

Super Mario War включает множество различных режимов и рассчитана на игру для четырёх человек, вместо которых также можно использовать ботов.

## Установка Super Mario War в Ubuntu

Для установки потребуется выполнить следующие команды в терминале:

```
sudo apt-get install libpng3 libsdl-image1.2 
cd
wget -O smw-1.8-beta2-linux.tar.gz http://goo.gl/603AA
sudo tar -xzvf smw-1.8-beta2-linux.tar.gz -C /
rm smw-1.8-beta2-linux.tar.gz
```

Теперь создадим ярлык для запуска:

```
sudo gedit /usr/share/applications/smw.desktop
```

и вставим следующий код:

```
[Desktop Entry]
Version=1.0
Type=Application
Terminal=false
Categories=GNOME;GTK;
Exec=smw
Name=Super Mario War
Comment=Super Mario War
Icon=/usr/share/icons/Humanity/apps/128/mario.png
```

Скачаем иконку:

```
cd /usr/share/icons/Humanity/apps/128/
sudo wget http://findicons.com/files/icons/2231/super_mario/128/mario.png
```

Теперь значок игры можно будет найти через Dash и перетащить на панель Unity.

<iframe width="500" height="369" src="//www.youtube.com/embed/2YVZ9ORzKd4" frameborder="0" allowfullscreen=""></iframe>
