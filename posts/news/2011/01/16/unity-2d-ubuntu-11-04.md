---
title: 'Ubuntu получила поддержку Unity 2D'
date: '2011-01-16T04:26:41+03:00'
uri: 'news/unity-2d-ubuntu-11-04'
alias: 
  - 'news/unity-2d-ubuntu-11.04.html'
tags: 'Unity 2D,11.04,Интерфейс,ARM,Qt,QML,Gnome'
source: ''
unixtime: 1295141201
visits: 2395
---
Разработчиками Ubuntu [представлена](http://bfiller.wordpress.com/2011/01/13/unity-2d/) новая реализация [Unity 2D](https://launchpad.net/~unity-2d-team), позволяющая запускать новый интерфейс на устаревших компьютерах, а также пользователям Ubuntu 11.04 работать с новым интерфейсом без поддержки 3D драйверов.

![Ubuntu получила поддержку Unity 2D](img/2011/01/16/04-00/unity-2d-apps.jpg)

Unity 2D реализован без использования Open GL, что дает возможность запускать Unity на многих ARM платформах, не имеющих такой поддержки.

Механизм реализация основан на использовании Qt 4.7 и языка разметки QML, предназначенного для создания пользовательских интерфейсов. Стоит также отметить, что Unity 2D это отдельный проект не связанный со стандартным Unity, максимально возможно реализующией его функционал, многое из которого уже сделано ([апплеты-индикаторы](apps/indicator-applet-ubuntu), uTouch, [places](https://wiki.ubuntu.com/Unity/Places)).

Произвести установку можно из следующего [PPA](https://launchpad.net/~unity-2d-team/+archive/unity-2d-daily):

```
sudo add-apt-repository ppa:unity-2d-team/unity-2d-daily 
sudo apt-get update
sudo apt-get install unity-qt-default-settings
```
