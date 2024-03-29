---
title: 'LightDM заменит дисплейный менеджер GDM в Ubuntu 11.10'
date: '2011-05-12T20:42:13+04:00'
uri: 'news/lightdm-default-display-manager-ubuntu-11-10'
alias: 
  - 'news/lightdm-default-display-manager-ubuntu-11.10.html'
tags: 'LightDM,GDM,11.10'
source: ''
unixtime: 1305218533
visits: 3780
---
Сегодня на саммите разработчиков Ubuntu было принято решение о замене стандартного дисплейного менеджера GDM, используемого для запуска пользовательской сессии в GNOME, на использование мультиплатформенного дисплейного менеджера LightDM основанного на WebKit, в следующем октябрьском релизе Ubuntu 11.10.

[![](img/2011/05/12/20-00/lightdm-login-screen-5716721914-o.jpg)](img/2011/05/12/20-00/lightdm-login-screen-5716721914-o.jpg)

### Преимущества LightDM над GDM: 

*   Быстрый, не требует запуска сессии GNOME.
*   Более гибкий, за счет универсального интерфейса можно использовать в различных дистрибутивах Ubuntu (Kubuntu, Lubuntu и других).
*   Легко настраиваемая тема оформления, за счет возможности использования HTML/CSS
*   Простая кодовая база, примерно 5,000 строк кода против 50,000 в GDM
*   Поддержка множества вариантов использования, во первых поддержка XDMCP и Multihead для подключения нескольких мониторов.
