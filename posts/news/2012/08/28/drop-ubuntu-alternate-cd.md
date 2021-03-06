---
title: 'Альтернативные сборки для Ubuntu 12.10 могут быть удалены'
date: '2012-08-28T20:07:03+04:00'
uri: 'news/drop-ubuntu-alternate-cd'
alias: 
  - 'news/drop-ubuntu-alternate-cd.html'
tags: 'Диски,Планы,12.04,13.04'
source: ''
unixtime: 1346170023
visits: 4053
---
Разработчики Ubuntu [рассматривают возможность](https://lists.ubuntu.com/archives/ubuntu-devel/2012-August/035675.html) отказа от создания альтернативных сборок с текстовым инсталлятором, используемым для настройки таких параметров, как cryptsetup (шифрование разделов), LVM (менеджер логических томов) и программного RAID-массива.

Удаление сборок может быть произведено уже с октябрьского релиза 12.10. Причиной такого решения стала необходимость оптимизации инфраструктуры распространения установочных образов, что позволит уменьшить издержки связанные с хранением и нагрузкой создаваемой на FTP сервера.

[![](img/2012/08/28/20-00/ubiquity-7881085310-o.jpg)](img/2012/08/28/20-00/ubiquity-7881085310-o.jpg)

Утраченные функции вместо этого будут включены в десктоп редакцию, использующую графический инсталлятор Ubiquity. Работа с cryptsetup и LVM будет доступна уже с выходом первой бета версии, а поддержка RAID будет включена только к апрельскому выпуску Ubuntu 13.04. Тем пользователям, которым всё-таки понадобится создать программный RAID рекомендуется использовать Ubuntu 12.04 или настроить его с образа mini-CD.
