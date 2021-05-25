---
title: 'Простое переключение между LightDM и GDM'
date: '2011-07-30T20:57:46+04:00'
uri: 'articles/how-to-switch-between-gdm-lightdm'
alias: 
  - 'articles/how-to-switch-between-gdm-lightdm.html'
tags: 'LightDM,GDM,Дисплейный менеджер'
source: 'http://www.webupd8.org/2011/07/how-to-switch-between-gdm-lightdm-or.html'
unixtime: 1312045066
visits: 18478
---
Рассмотрим простое переключение между несколькими дисплейных менеджерами, установленными в Ubuntu или любом другом дистрибутиве, основанном на Debian.

[![](img/2011/07/30/20-00/lightdm-5990604925-o.jpg)](img/2011/07/30/20-00/lightdm-5990604925-o.jpg)

Например, если вместе установлены LightDM и GDM, то для того чтобы выбрать LightDM по умолчанию, при этом с возможностью переключения на GDM, нужно выполнить следующую команду в терминале:

```
sudo dpkg-reconfigure gdm 
```

[![](img/2011/07/30/20-00/gdm-5991161492-o.jpg)](img/2011/07/30/20-00/gdm-5991161492-o.jpg)

Это будет работать как для GDM, так и для любого другого дисплейного менеджера: LightDM, KDM, Slim (например: sudo dpkg-reconfigure lightdm).
