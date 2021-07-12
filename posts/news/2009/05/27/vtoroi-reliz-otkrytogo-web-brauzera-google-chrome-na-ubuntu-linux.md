---
title: 'Второй релиз открытого web-браузера Google Chrome на Ubuntu Linux'
date: '2009-05-27T20:23:29+04:00'
uri: 'news/vtoroi-reliz-otkrytogo-web-brauzera-google-chrome-na-ubuntu-linux'
alias: 
  - 'news/92.html'
tags: 'Chrome,Ubuntu Linux'
source: 'http://www.opennet.ru/opennews/art.shtml?num=21857'
unixtime: 1243441409
visits: 1262
---
Видеоролик с демонстрацией новых возможностей Chrome 2 можно посмотреть на [YouTube](https://www.youtube.com/watch?v=rubd9bqjS64).

На странице проекта [Chromium](http://code.google.com/p/chromium/) отмечается значительный прогресс в развитии версии браузера для платформ Linux и Mac OS X. Судя по всему первый релиз Chrome для данных платформ выйдет в начале лета, в настоящий момент на сайте браузера для пользователей Linux предлагается заполнить форму для отправки уведомления о доступности Linux-версии.

Тем не менее, для пользователей Ubuntu Linux уже несколько месяцев ежедневно [выпускаются](https://launchpad.net/%7Echromium-daily/+archive/ppa) готовые [бинарные пакеты](http://build.chromium.org/buildbot/snapshots/chromium-rel-linux/), отражающие развитие Linux версии Chrome. Для установки в Ubuntu 9.04 необходимо подключить дополнительный репозиторий, в файл /etc/apt/sources.list.d/chromium-daily.list занести строку:

```

deb http://ppa.launchpad.net/chromium-daily/ppa/ubuntu jaunty main
Для ubuntu 8.04 слово "jaunty" нужно заменить на "hardy", а для ubuntu 8.10 - на "intrepid".
Затем следует импортировать ключ: sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com 5A9BF3BB4E5E17B5
Обновить список пакетов и установить пакет chromium-browser: sudo aptitude update; sudo aptitude install chromium-browser
```
