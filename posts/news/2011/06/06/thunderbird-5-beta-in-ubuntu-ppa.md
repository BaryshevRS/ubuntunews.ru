---
title: 'Установка Thunderbird 5 Beta в Ubuntu из PPA'
date: '2011-06-06T11:29:34+04:00'
uri: 'news/thunderbird-5-beta-in-ubuntu-ppa'
alias: 
  - 'news/thunderbird-5-beta-in-ubuntu-ppa.html'
tags: 'Thunderbird,PPA'
source: ''
unixtime: 1307345374
visits: 2487
---
Как и для [бета Firefox 5](apps/firefox-5-beta-in-ubuntu-ppa), для почтового клиента Thunderbird создан PPA, в котором размещаются последние тестовые выпуски пятой бета Thunderbird.

[![](img/2011/06/06/11-00/thunderbird-5802991753-o.jpg)](img/2011/06/06/11-00/thunderbird-5802991753-o.jpg)

В PPA будут лежать последние бета версии, доступные для установки в Ubuntu, с некоторой задержкой на добавление и тестирование.

### Установка Thunderbird 5 Beta 1 в Ubuntu

В бета версии возможны ошибки, а также она затрет последнюю установленную версию. Пакеты доступны для Ubuntu 11.04, 10.10 и 10.04.

Для установки нужно добавить PPA:

```
sudo add-apt-repository ppa:mozillateam/thunderbird-next
sudo apt-get update
```

Затем:

```
sudo apt-get install thunderbird
```

или просто обновиться, если уже установлен:

```
sudo apt-get upgrade
```
