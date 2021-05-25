---
title: 'Boot-Repair простой инструмент для устранения проблем с загрузчиком Grub'
date: '2011-05-31T09:56:12+04:00'
uri: 'apps/simple-tool-to-repair-frequent-boot-problems'
alias: 
  - 'apps/simple-tool-to-repair-frequent-boot-problems.html'
tags: 'Grub,Восстановление,Утилита'
source: ''
unixtime: 1306821372
visits: 13912
---
[Boot-Repair](https://launchpad.net/~yannubuntu/+archive/boot-repair) простой инструмент для устранения проблем с загрузчиком Grub.

*   Восстановление загрузчика, когда система больше не запускается, после инсталляции Ubuntu
*   Восстановление загрузчика когда отсутствует доступ к GRUB
*   Простая переустановка GRUB
*   Восстанавливает оригинальный загрузочный сектор (MBR), если он предварительно был сохранен утилитой [Clean-Ubiquity](https://launchpad.net/~yannubuntu/+archive/clean-ubiquity)

Boot-Repair может быть установлен и использован из под любой сессии Ubuntu (обычной, live-CD, live-USB).

[![устранения проблем с загрузчиком Grub](img/2011/05/31/09-00/boot-repair-5780048192-o.jpg)](img/2011/05/31/09-00/boot-repair-5780048192-o.jpg)

![](img/2011/05/31/09-00/boot-repair2-5780048196-o.jpg)

### Установка Boot-Repair в Ubuntu

Последовательно выполните следующие команды в терминале:

```
sudo add-apt-repository ppa:yannubuntu/boot-repair
sudo apt-get update
sudo apt-get install boot-repair-ubuntu
```

После установки можно будет найти в (Система > Администрирование > Boot-Repair) для Gnome или поиском в «boot repair» в Dash, если используется Unity.
