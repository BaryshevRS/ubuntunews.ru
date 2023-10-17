---
title: 'Установка из PPA тем иконок Nitrux OS и Malys-ex'
date: '2012-07-16T23:27:59+04:00'
uri: 'apps/nitrux-os-i-malys-ex'
alias: 
  - 'apps/nitrux-os-и-malys-ex.html'
tags: 'Иконки,Nitrux OS,Malys-ex'
source: ''
unixtime: 1342466879
visits: 8293
---
Рассмотрим процесс установки из PPA двух симпатичных тем иконок Nitrux OS и Malys -ex.

[Malys - ex](http://malysss.deviantart.com/#/d52lfkm) – пак включающий в себя достаточно полный и очень хорошо проработанный набор иконок для Ubuntu. Тема выполнена в виде квадратных значков с логотипом приложений (опций) помещённых в круг, а цветовая палитра подобранна в постельных тонах.

[![](img/2012/07/16/23-00/malys-ex-7584939516-o.jpg)](img/2012/07/16/23-00/malys-ex-7584939516-o.jpg)

### Установка Malys -ex

Тема иконок доступна для установки из PPA для Ubuntu 11.10, 12.04 и 12.10, используя команды ниже:

```
sudo add-apt-repository ppa:noobslab/icons
sudo apt-get update
sudo apt-get install malys-ex
```

[Nitrux OS](http://deviantn7k1.deviantart.com/art/Nitrux-OS-Icons-293634207) – глянцевая тема иконок, которая хорошо впишется, как в Unity, так и в Gnome Shell.

[![](img/2012/07/16/23-00/nitrux-os-7584938050-o.jpg)](img/2012/07/16/23-00/nitrux-os-7584938050-o.jpg)

### Установка Nitrux OS

Установка из PPA доступна только для Ubuntu 12.04:

```
sudo add-apt-repository ppa:upubuntu-com/themes
sudo apt-get update
sudo apt-get install nitruxos
```

### Как установить темы иконок

Для этого можно воспользоваться одним из твикеров, например Ubuntu Tweak или MyUnity.

Если у вас другая версия Ubuntu, то темы иконок можно просто распаковать в папку «.icons» в домашней директории или в «usr/share/icons/».
