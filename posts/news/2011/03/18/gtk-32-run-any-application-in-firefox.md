---
title: 'Gtk+ 3.2 позволяет запускать десктоп приложения в браузере'
date: '2011-03-18T02:45:21+03:00'
uri: 'news/gtk-32-run-any-application-in-firefox'
alias: 
  - 'news/gtk-32-run-any-application-in-firefox.html'
tags: 'Gnome,Gtk,Firefox,HTML5'
source: ''
unixtime: 1300405521
visits: 3064
---
Gtk+ 3.2 теперь [позволяет](http://blogs.gnome.org/alexl/2011/03/15/gtk-html-backend-update/) запускать любое приложение в браузере с помощью GDK HTML5 бэкенда, таким образом можно запустить GIMP, Gedit или любую другую программу на самом компьютере или даже удаленно, воспользовавшись веб-браузером.

Бэкенд все еще находится на стадии разработки, поэтому не все возможности реализованы, к примеру: не полная поддержка ввода с клавиатуры и запуск только в браузере Firefox 4.

Для работы потребуется собрать Gtk+ с включенными опциями

```
–enable-x11-backend –enable-broadway-backend 
```

и потребуется Firefox 4 с [включенными веб-сокетами](http://techdows.com/2010/12/turn-on-websockets-in-firefox-4.html), по умолчанию в Firefox они выключены, после чего можно приступить к тестированию, выполнив:

```
GDK_BACKEND=broadway ваше приложение 
```

и открыть страницу

```
firefox http://127.0.0.1:8080/ 
```

Посмотреть в действие можно из скринкаста от разработчика Александра Ларсона (Alexander Larsson):

<iframe src="//player.vimeo.com/video/21062117" width="480" height="320" frameborder="0"></iframe>
