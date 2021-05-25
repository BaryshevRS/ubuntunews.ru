---
title: 'В Chromium добавлен Quicklist Unity'
date: '2011-05-06T18:41:36+04:00'
uri: 'apps/chromium-daily-build-adds-unity-quicklist'
alias: 
  - 'apps/chromium-daily-build-adds-unity-quicklist.html'
tags: 'Chromium,Unity'
source: ''
unixtime: 1304692896
visits: 2015
---
В последней ежедневной сборке браузера Chromium [была включена](http://www.omgubuntu.co.uk/2011/05/chromium-daily-build-adds-unity-quicklist/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+d0od+%28Omg!+Ubuntu!%29&utm_content=Google+Reader) новая опция для работы в Ubuntu, добавляющая контекстное меню (Quicklist) для значка Chromium на панели Unity

[![В Chromium добавлен Quicklist Unity](img/2011/05/06/18-00/chromium-quicklist-5692970467-o.jpg)](img/2011/05/06/18-00/chromium-quicklist-5692970467-o.jpg)

### В контекстном меню доступны три опции:

*   Открытия нового окна
*   Запуск в «Режиме инкогнито», для приватной работы в браузере, в котором не будет вестись история посещений и поиска, а также cookie, сохраняя только сделанные закладки и загруженные файлы.
*   Опция открытия окна с «Временным профилем», используемым для оценки производительности.

Кроме Quicklist, в браузере уже были сделана [интеграция с глобальным меню](apps/google-chrome-unstable-adds-global-menu) и [добавление прогрессбара](apps/chromium-daily-adds-unity-progress-bar-and-badge-support) со счетчиком загрузок, для загружаемых файлов.

### Установка

Новое меню доступно в последней ежедневной сборки в [PPA](http://launchpad.net/~chromium-daily/+archive/ppa):

```
sudo add-apt-repository ppa:chromium-daily/ppa
sudo apt-get update
sudo apt-get install chromium-browser 
```
