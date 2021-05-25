---
title: 'Апплеты для стикеров и поиска связанных файлов'
date: '2012-06-25T22:30:25+04:00'
uri: 'apps/indicator-bridge-stickynotes'
alias: 
  - 'apps/indicator-bridge-stickynotes.html'
tags: 'indicator-applet,Bridge,Stickynotes'
source: ''
unixtime: 1340649025
visits: 6274
---
[Bridge](http://www.webupd8.org/2012/06/bridge-new-zeitgeist-powered-related.html) – уникальный в своём роде индикатор, который позволяет получить быстрый доступ к файлам, документам и веб-сайтам связанным с текущей деятельностью.

[![](img/2012/06/25/22-00/bridge-7442048340-o.jpg)](img/2012/06/25/22-00/bridge-7442048340-o.jpg)

### Принцип работы:

*   Например был скачен видеоролик с некоторого сайта. Месяц спустя, открыв ролик, индикатор предложит ссылку на тот сайт, с которого была произведена закачка.
*   Или другой вариант, например пишется статья для которой были взяты материалы из Википедии и сохранено пара картинок. Если затем открыть файл со статьёй, то из индикатора можно будет получить доступ ко всем посещённым ссылкам и файлам картинок.

Стоит отметить, что индикатор показывается только тогда, когда с открытым окном (или активной вкладкой) есть связанные файлы. Кроме того, доступ к ним можно получить и через меню HUD, введя запрос «Related Activities».

### Установка Bridge в Ubuntu 12.04 / 12.10

Индикатор всё ещё находится в разработке и со временем будет только улучшаться. Более подробно с ним можно ознакомиться на официальной [вики-странице](https://wiki.ubuntu.com/Bridge/Installing).

Для полноценной работы также рекомендуется установить расширения для источников данных Zeitgeist, используя команды ниже:

Для поддержки **Firefox**:

```
sudo add-apt-repository ppa:markjtully/ppa
 sudo apt-get update
 sudo apt-get install zeitgeist-datasource-firefox
```

Из того же PPA можно поставить и плагин для **Thunderbird**:

```
sudo apt-get install zeitgeist-datasource-thunderbird
```

Для браузеров **Google Chrome / Chromium** нужно поставить дополнение Zeitgeist из [Chrome Web Store](https://chrome.google.com/webstore/search/zeitgeist).

Установка самого индикатора доступна для Ubuntu 12.04 и 12.10, выполнив команды в терминале:

```
sudo add-apt-repository ppa:bridge/daily
 sudo apt-get update
 sudo apt-get install bridge
```

После перезахода в сессию апплет добавится в автозапуск.

## Stickynotes

Stickynotes – ещё один замечательный апплет-индикатор, который позволяет «обклеить» рабочий стол заметками, стилизованными под стикеры. Заметки можно перетаскивать, изменять размер, а также скрывать или показывать все сразу и, кроме того, они не пропадут после перезагрузки.

[![](img/2012/06/25/22-00/stickynotes-7442045776-o.jpg)](img/2012/06/25/22-00/stickynotes-7442045776-o.jpg)

Добавить новый стикер можно из меню апплета или нажав иконку плюса на любой активной заметке.

### Установка Stickynotes

Установка доступна только для Ubuntu 12.04:

```
sudo add-apt-repository ppa:umang/indicator-stickynotes
 sudo apt-get update
 sudo apt-get install indicator-stickynotes
```
