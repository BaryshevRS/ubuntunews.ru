---
title: 'Устанавливаем тестовые версии популярных браузеров в Ubuntu'
date: '2011-08-30T21:25:58+04:00'
uri: 'apps/switch-to-dev-versions-of-popular-browsers'
alias: 
  - 'apps/switch-to-dev-versions-of-popular-browsers.html'
tags: 'Midori,Opera,Chromium,Chrome,Firefox'
source: 'http://www.omgubuntu.co.uk/2011/08/how-to-switch-development-version-favourite-web-browser-ubuntu/'
unixtime: 1314725158
visits: 6805
---
Рассмотрим как установить последние тестовые версии популярных браузеров в Ubuntu. Следует учитывать, что они находятся на этапе разработки и при работе возможны различные ошибки.

## Firefox Beta PPA

Ближайшая тестовая версия это Firefox 7, установка которой доступна для Ubuntu 10.04, 10.10, 11.04 и 11.10 через добавление PPA в «источники приложений»:

```
ppa:mozillateam/firefox-next 
```

Центр приложений Ubuntu → правка → источники приложений:

[![Firefox Beta PPA](img/2011/08/30/21-00/usc-2-6097358268-o.jpg)](img/2011/08/30/21-00/usc-2-6097358268-o.jpg)

После установки старая версия Firefox будет замещена, на только что установленную, и большинство аддонов возможно не будут работать.

Для установки еще более нестабильных версий, таких как Aurora и Nightly, можно воспользоваться следующими PPA:

```
8.0 (Aurora): ppa:ubuntu-mozilla-daily/firefox-aurora 
9.0 (Nightly): ppa:ubuntu-mozilla-daily/ppa 
```

Этими PPA также пользуется и почтовый клиент Thunderbird, поэтому после обновления (upgrade), он также будет замещен на нестабильную версию.

## Google Chrome Beta и Chromium Beta

Тестовую версию Google Chrome можно скачать по ссылке: [chromium.org](http://www.chromium.org/getting-involved/dev-channel#TOC-Linux)

После установки из deb пакета, соответствующий PPA автоматически пропишется в «источники приложений».

[![Google Chrome Beta и Chromium Beta](img/2011/08/30/21-00/chrome-6096812579-o.jpg)](img/2011/08/30/21-00/chrome-6096812579-o.jpg)

Нестабильные версии Chromium доступны из следующих PPA:

```
ppa:chromium-daily/beta 
ppa:chromium-daily/dev 
```

## Opera Next

Следующая версия Opera, находящаяся на этапе разработки, называется «Opera Next» и устанавливается независимо от стабильной версии. Текущая тестовая версия – pre-alpha Opera 12.

Скачать deb пакет можно [отсюда](http://www.opera.com/browser/next/).

Также как и для Google Chrome, PPA, для будущих обновлений, будет добавлено в «источник приложений» автоматически.

## Midori

Тестовые версии легковесного webkit браузера Midori можно установить из следующих PPA:

```
ppa:midori/midori-dev 
ppa:webkit-team/webkit-dev 
```

для Ubuntu 10.04 и до 11.10 включительно.

## Как удалить

Если тестовые версии оказались крайне нестабильными, то для отката достаточно удалить добавленный PPA в «источнике приложений», а затем установить стабильную версию из центра приложений.

[![Как удалить PPA](img/2011/08/30/21-00/usc-1-6096814001-o.jpg)](img/2011/08/30/21-00/usc-1-6096814001-o.jpg)
