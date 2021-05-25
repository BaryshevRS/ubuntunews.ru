---
title: 'Unity Web History – линза для доступа к истории и закладкам в Firefox c Chromium / Chrome'
date: '2012-06-24T20:10:41+04:00'
uri: 'apps/unity-web-history'
alias: 
  - 'apps/unity-web-history.html'
tags: 'Unity Web History,Линзы,Firefox,Chromium,Chrome'
source: ''
unixtime: 1340554241
visits: 4082
---
[Unity Web History lens](https://launchpad.net/unity-web-history-lens) – линза предназначенная для удобного доступа к закладкам и истории работы в веб-браузере. Для нахождения нужной страницы достаточно ввести запрос в строку поиска Dash, после чего будут выведены все похожие совпадения.

[![Unity Web History – линза для доступа к истории и закладкам в Firefox c Chromium / Chrome](img/2012/06/24/20-00/unity-web-history-7433058368-o.jpg)](img/2012/06/24/20-00/unity-web-history-7433058368-o.jpg)

Результаты поиска сортируются по трём категориям: недавно посещённые, наиболее популярные и закладки, а также по четырём фильтрам, выводящие результаты за день, неделю, месяц и год.

По умолчанию линза показывает только закладки сделанные в браузере Firefox, но из PPA можно также установить область для работы с историей. Пользователи Chromium / Chrome могут поставить расширение [Zeitgeist](https://chrome.google.com/webstore/search/zeitgeist) из сервиса Chrome Web Store.

## Установка Unity Web History lens 0.4

Последнюю версию 0.4 можно установить из официального PPA для Precise и Quantal:

```
sudo add-apt-repository ppa:markjtully/ppa
 sudo apt-get update
 sudo apt-get install unity-web-history-lens zeitgeist-datasource-firefox
```

После установки потребуется перезайти в сесиию.
