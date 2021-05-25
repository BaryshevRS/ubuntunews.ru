---
title: 'Kubuntu не будет поддерживать Mir по умолчанию'
date: '2013-06-27T22:08:53+04:00'
uri: 'news/kubuntu-ne-budet-podderzhivat-mir-po-umolchaniyu'
alias: 
  - 'news/kubuntu-ne-budet-podderzhivat-mir-po-umolchaniyu.html'
tags: 'Kubuntu,Mir'
source: ''
unixtime: 1372356533
visits: 3618
---
Одним из разработчиков Ubuntu [завершена](https://plus.google.com/110095242873945299189/posts/MHUg78azKSN) начатая им работа по запуску Kubuntu на XMir, которая добавилась к уже [реализованной поддержке](news/gnome-shell-lubuntu-i-xubuntu-zapushhenyi-na-xmir) GNOME Shell, Lubuntu и Xubuntu. Однако, как [сообщил Джонатан Риддел](http://blogs.kde.org/2013/06/26/kubuntu-wont-be-switching-mir-or-xmir) (Jonathan Riddell), лидер сообщества Kubuntu, поддержка графического сервера Mir включена всё равно не будет.

[![](img/2013/06/27/22-00/kubuntu-on-xmir-9154003470-o.jpg)](img/2013/06/27/22-00/kubuntu-on-xmir-9154003470-o.jpg)

Джонатан обосновал это тем, что перед разработчиками Kubuntu и так стоит много сложных задач по работе с последней версией [Mesa](http://ru.wikipedia.org/wiki/Mesa) для KWin. Реализация поддержки ещё одной прослойки в перспективе может привести к большему числу проблем, которые будет некому исправлять, поэтому нами было принято решение **не поставлять Mir в составе дистрибутива**.

В планах Kubuntu на текущий релиз 13.10 и следующий 14.04 LTS – по-прежнему продолжать использовать графическую систему X, а дальше уже начать переход на Wayland, как в прочем собираются сделать и многие другие Linux-дистрибутивы.
