---
title: 'Апплет интеграции панели Unity с Facebook'
date: '2011-07-29T22:27:43+04:00'
uri: 'apps/unity-facebook-applet'
alias: 
  - 'apps/unity-facebook-applet.html'
tags: 'Facebook,Unity,Апплет'
source: 'http://www.omgubuntu.co.uk/2011/07/unity-facebook-applet/'
unixtime: 1311964063
visits: 3760
---
Faccialibro – апплет интеграции с социальной сетью Facebook, с достаточно простой функциональностью, предназначенный для панели Unity. Позволяет выводить число непрочитанных сообщений, уведомления, запросы друзей и ничего больше.

[![Unity с Facebook](img/2011/07/29/22-00/facebook-applet-2-5988472902-o.jpg)](img/2011/07/29/22-00/facebook-applet-2-5988472902-o.jpg)

## Установка Facebook апплета для Unity

Сначала необходимо установить пакет [python-facebook](apt://python-facebook), затем скачать в домашнюю директорию и распаковать архив, содержащий апплет.

Для этого достаточно выполнить следующие команды в терминале:

```
sudo apt-get install python-facebook 
wget http://www.mirkoweb.org/Faccialibro.tar.gz
 tar xvfz Faccialibro.tar.gz 
```

В домашней директории появится скрытая папка **«.faccialibro»** (<kbd>Ctrl</kbd>+<kbd>H</kbd> для отображения), в которой будет лежать файл **«Faccialibro.desktop»**. Выберем у файла **«Свойства»,** нажав по нему правой кнопкой мыши.

[![Unity с Facebook](img/2011/07/29/22-00/facebook-applet-5987908973-o.jpg)](img/2011/07/29/22-00/facebook-applet-5987908973-o.jpg)

Заменим имя пользователя **«mirko»** в поле **«Команда»** на свое. Выберем значок **«facebook.png**» и перетащим его в квадратное поле для иконок, в левом верхнем углу.

[![Unity с Facebook](img/2011/07/29/22-00/facebook-applet-1-5988472606-o.jpg)](img/2011/07/29/22-00/facebook-applet-1-5988472606-o.jpg)

Для завершения настройки установим права - **«Позволять выполнение файла как программы»**.

## Авторизация Faccialibro в Facebook

Для авторизации нужно кликнуть по инонки Facebook на панели Unity , после чего в браузере откроется страница с подтверждением, на которой и разрешить доступ.
