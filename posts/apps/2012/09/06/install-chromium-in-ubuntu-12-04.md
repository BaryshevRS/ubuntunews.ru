---
title: 'Установка последних версий Chromium в Ubuntu 12.04'
date: '2012-09-06T13:46:28+04:00'
uri: 'apps/install-chromium-in-ubuntu-12-04'
alias: 
  - 'apps/install-chromium-in-ubuntu-12-04.html'
tags: 'Chromium,12.04'
source: 'http://www.webupd8.org/2012/09/new-chromium-stable-and-development.html'
unixtime: 1346924788
visits: 29709
---
Для пользователей Ubuntu 12.04 обновления для браузера Chromium перестали появляться ещё с 18 версии, но теперь, благодаря разработчику Alex Shkop, последние сборки снова доступны из двух специально подготовленных [PPA](https://launchpad.net/~chromium-daily).

[![](img/2012/09/06/13-00/chromium-7942506002-o.jpg)](img/2012/09/06/13-00/chromium-7942506002-o.jpg)

Один из репозиториев Chromium служит для установки последней стабильной версии (сейчас 21), а другой для версий находящихся в разработке (сейчас 23).

## Установка Chromium в Ubuntu 12.04

PPA со стабильной версией Chromium:

```
 sudo add-apt-repository ppa:a-v-shkop/chromium
 sudo apt-get update
 sudo apt-get install chromium-browser
```

PPA с разрабатываемой версией:

```
 sudo add-apt-repository ppa:a-v-shkop/chromium-dev
 sudo apt-get update
 sudo apt-get install chromium-browser
```
