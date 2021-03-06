---
title: 'Установка MythTV 0.24.1 в Ubuntu 11.04 из PPA'
date: '2011-06-19T18:05:44+04:00'
uri: 'apps/install-mythtv-0-24-1-in-ubuntu-11-04-natty-ppa'
alias: 
  - 'apps/install-mythtv-0-24-1-in-ubuntu-11-04-natty-ppa.html'
tags: 'MythTV,11.04,Мультимедиа'
source: ''
unixtime: 1308492344
visits: 7133
---
[MythTV](http://www.mythtv.org/) это свободный медиацентр, представляющий собой прекрасный инструмент для развертывания домашнего кинотеатра на персональном компьютере, а также для сетевого вещания и DVR (цифровой видео рекордер). Среди поддерживаемых [систем](http://www.mythtv.org/wiki/External_Links#MythTV_Install_Guides_.2F_Distros): Linux, FreeBSD и MAC OS X.

MythTV это достаточно мощное приложения для показа и записи ТВ программ. Поддерживает [DVB](http://ru.wikipedia.org/wiki/DVB) (Digital Video Broadcasting), при наличии необходимого оборудования, а также ATSC и QAM. Возможно расширение функциональности за счет использования множества дополнительных плагинов.

[![](img/2011/06/19/18-00/mythtv-2-5848913588-o.jpg)](img/2011/06/19/18-00/mythtv-2-5848913588-o.jpg)

[![](img/2011/06/19/18-00/mythtv-1-5848357149-o.jpg)](img/2011/06/19/18-00/mythtv-1-5848357149-o.jpg)

**Основные характеристики MythTV 0.24.1:**

*   Показ и запись аналогового и цифрового ТВ, включая HDTV
*   Пауза, запись и перемотка телевизионных программ прямого эфира.
*   Интеллектуальный график записи, во избежания конфликтов.
*   Родительский контроль, позволяющий настроить желательное для показа.
*   Просмотр и архивирование DVD.
*   Прослушивание музыкальных коллекций.
*   Возможность планирования и управления различными функциями, при удаленной работе через веб-браузер
*   Гибкая клиент-серверная архитектура. Возможность работы нескольких клиентских машин с одним или несколькими серверами.
*   Поддержка Xv, OpenGL и VDPAU видео выводов.
*   Обновлено оформление MythTV тем.

Полный список [изменений](http://www.mythtv.org/wiki/Release_Notes_-_0.24.1) и [описания](http://www.mythtv.org/detail/mythtv).

## Установка MythTV в Ubuntu 11.04 из PPA:

```
sudo apt-add-repository ppa:mythbuntu/0.24
sudo apt-get update
sudo apt-get install mythtv
```
