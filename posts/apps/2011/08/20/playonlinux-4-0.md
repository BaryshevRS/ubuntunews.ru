---
title: 'PlayOnLinux 4.0 с поддержкой 64-битной версии Wine'
date: '2011-08-20T20:11:26+04:00'
uri: 'apps/playonlinux-4-0'
alias: 
  - 'apps/playonlinux-4.0.html'
tags: 'PlayOnLinux,Wine,Игры'
source: ''
unixtime: 1313856686
visits: 6707
---
Стала доступна новая версия [PlayOnLinux 4.0](http://www.playonlinux.com/en/download.html) с поддержкой 64-битной версии Wine.

PlayOnLinux - надстройка над Wine, позволяющая легко устанавливать и использовать множество игр и приложений ориентированных на запуск под Microsoft Windows.

[![PlayOnLinux 4.0 ubuntu](img/2011/08/20/20-00/playonlinux-6061973889-o.jpg)](img/2011/08/20/20-00/playonlinux-6061973889-o.jpg)

## Новые характеристики:

*   Улучшены инструменты настройки программ и добавлены новые опции
*   Упрощен мануал по установке
*   Вернут IRC чат, теперь не мешая тем кому он не нужен
*   PlayOnLinux теперь может выполнять исполняемые файлы на прямую.
*   Улучшены инструменты отладки
*   Поддержка 64-битной Wine
*   Почищен код

## Установка PlayOnLinux 4.0

Для Ubuntu 11.04:

```
wget -q "http://deb.playonlinux.com/public.gpg" -O- | sudo apt-key add - 
sudo wget http://deb.playonlinux.com/playonlinux_natty.list -O /etc/apt/sources.list.d/playonlinux.list
```

Для Ubuntu 10.10:

```
wget -q "http://deb.playonlinux.com/public.gpg" -O- | sudo apt-key add - 
sudo wget http://deb.playonlinux.com/playonlinux_maverick.list -O /etc/apt/sources.list.d/playonlinux.list
```

Для Ubuntu 10.04:

```
wget -q "http://deb.playonlinux.com/public.gpg" -O- | sudo apt-key add - 
sudo wget http://deb.playonlinux.com/playonlinux_lucid.list -O /etc/apt/sources.list.d/playonlinux.list
```

```
sudo apt-get update 
sudo apt-get install playonlinux
```
