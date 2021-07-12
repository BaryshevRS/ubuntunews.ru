---
title: 'Установка десктоп окружения MATE 1.2 в Ubuntu 12.04 / 11.10'
date: '2012-04-17T22:29:26+04:00'
uri: 'apps/mate-1-2'
alias: 
  - 'apps/mate-1.2.html'
tags: 'MATE'
source: ''
unixtime: 1334687366
visits: 23739
---
[Увидел свет](http://mate-desktop.org/2012/04/16/mate-1-2-released/) релиз MATE 1.2 – десктоп окружения основанного на базе Gnome 2 сохранивший в себе традиционный стиль оформления, но при этом не конфликтующий с третьей веткой Gnome, что позволяет установить их вместе не нарушив зависимости.

[![Установка десктоп окружения MATE 1.2 в Ubuntu 12.04 / 11.10](img/2012/04/17/22-00/mate-7088047111-o.jpg)](img/2012/04/17/22-00/mate-7088047111-o.jpg)

Основным изменением стала окончательная чистка существующих конфликтов и проработка графического оформления. До этого установка Gnome 3 поверх Gnome 2 замещала большинство содержимого папок, перезаписывается их на новые версии и это являлось главной причиной по которой их нельзя было поставить вместе.

### Что нового:

*   Устранены все конфликты с GNOME
*   Все конфигурационные файлы были перемещены в ~/.config/mate
*   В Caja (форк Nautilus) добавлена операция отмены изменений «undo/redo»
*   Демон настроек Mate теперь поддерживает PulseAudio и GStreamer
*   Новые приложения: mozo (форк alacarte), python-caja, caja-gksu и caja-image-converter.
*   Появился собственный логотип и были включены фирменные обои.
*   Темы Mate были переименованы, чтобы избежать конфликтов с GNOME.
*   Внесено множество багофиксов.

## Установка MATE в Ubuntu 12.04 / 11.10

Добавляем [репозиторий](http://mate.karapetsas.com/index.php?page=package&package=mate-power-manager) в файл «/etc/apt/sources.list» командой ниже.

**В Oneiric Ocelot:**

```
sudo add-apt-repository "deb http://packages.mate-desktop.org/repo/ubuntu oneiric main"
```

**В Precise Pangolin:**

```
sudo add-apt-repository "deb http://packages.mate-desktop.org/repo/ubuntu precise main"
```

Теперь устанавливаем, выполнив в терминале:

```
 sudo apt-get update
 sudo apt-get install mate-archive-keyring
 sudo apt-get update
 sudo apt-get install mate-core
 sudo apt-get install mate-desktop-environment
```
