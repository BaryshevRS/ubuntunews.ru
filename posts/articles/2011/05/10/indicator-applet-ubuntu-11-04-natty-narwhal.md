---
title: 'Апплеты-индикаторы для Ubuntu 11.04 Natty Narwhal'
date: '2011-05-10T23:54:12+04:00'
uri: 'articles/indicator-applet-ubuntu-11-04-natty-narwhal'
alias: 
  - 'articles/indicator-applet-ubuntu-11.04-natty-narwhal.html'
tags: 'indicator-applet,11.04'
source: 'http://www.techdrivein.com/2011/05/10-useful-application-indicators-for.html'
unixtime: 1305057252
visits: 13143
---
Рассмотрим апплеты-индикаторы для Ubuntu 11.04 Natty Narwhal, некоторые старые версии которых уже были рассмотрены в [предыдущей статье](apps/indicator-applet-ubuntu).

Апплеты-индикаторы будут полезным инструментом для расширения функциональности и добавления удобства в использовании дистрибутивом.

### Weather Indicator Applet

Простой индикатор погоды, установить в Ubuntu 11.04 можно [отсюда](apt:indicator-weather) или выполнив команду в терминале.

[![](img/2011/05/10/23-00/indicator-weather-5707880985-o.jpg)](img/2011/05/10/23-00/indicator-weather-5707880985-o.jpg)

```
sudo apt-get install indicator-weather
```

### Dropbox Application Indicator

Доступен после инсталляции клиентской части облачного хранилища данных Dropbox.

![](img/2011/05/10/23-00/drop-5709385166-o.jpg)

### Sysmonitor Indicator

Простой индикатор мониторинга системы, отображает процент используемой оперативной памяти и загрузку процессора

![](img/2011/05/10/23-00/indicator-sysmonitor-5707880459-o.jpg)

```
sudo add-apt-repository ppa:alexeftimie/ppa
sudo apt-get update
sudo apt-get install indicator-sysmonitor
```

### System Load Indicator

Индикатор для отслеживания сетевой активности, используемой памяти и загрузки процессора, и по сути является аналогом апплета системного мониторинга GNOME

[![](img/2011/05/10/23-00/indicator-multiload-5708445792-o.jpg)](img/2011/05/10/23-00/indicator-multiload-5708445792-o.jpg)

```
sudo add-apt-repository ppa:indicator-multiload/stable-daily
sudo apt-get update
sudo apt-get install indicator-multiload
```

### Touchpad Indicator

Апплет будет полезен пользователя нетбуков и лаптопов, у которых отсутствует кнопка включения/выключения тачпада

[![](img/2011/05/10/23-00/touchpad-indicator-5708446314-o.jpg)](img/2011/05/10/23-00/touchpad-indicator-5708446314-o.jpg)

```
sudo add-apt-repository ppa:atareao/atareao
sudo apt-get update
sudo apt-get install touchpad-indicator
```

### Battery Status Indicator

Будет полезен пользователям переносных компьютеров, показывая детальную информацию о заряде баттарей.

![](img/2011/05/10/23-00/battery-status-5709397304-o.jpg)

```
sudo apt-add-repository ppa:iaz/battery-status
sudo apt-get update
sudo apt-get install battery-status
```

Для запуска «создадим кнопку запуска» со следующей командой:

```
/usr/lib/battery-status/battery-status --indicator
```

### Workspaces Indicator

Простой апплет-индикатор для переключения рабочих столов и поддержкой переключения рабочих мест в Unity, более подробно можно ознакомиться [здесь](apps/adjust-number-workspaces-in-unity-with-indicator-workspaces).

```
sudo add-apt-repository ppa:geod/ppa-geod
sudo apt-get update
sudo apt-get install indicator-workspaces
```

### Keylock Application Indicator

Позволяет включать и отслеживать статусы включенных клавиш (NUM lock, Screen lock или CAPS lock. )

![](img/2011/05/10/23-00/indicator-keylock-5708819973-o.jpg)

```
sudo add-apt-repository ppa:tsbarnes/indicator-keylock
sudo apt-get update
sudo apt-get install indicator-keylock
```

### Caffeine Application Indicator

Полезное приложения для отключения скринсервера и отмены перехода компьютера в спящий режим.

![](img/2011/05/10/23-00/caffeine-5709385484-o.jpg)

```
sudo add-apt-repository ppa:caffeine-developers/ppa
sudo apt-get update
sudo apt-get install caffeine
```

### Pastie

Простой менеджер буфера обмена.

![](img/2011/05/10/23-00/past-5709385188-o.jpg)

```
sudo add-apt-repository ppa:hel-sheep/pastie
sudo apt-get update
sudo apt-get install pastie
```

### MyWeather Indicator

Апплет индикатор выводящий прогноз погоды, с поддержкой уведомлений.

![](img/2011/05/10/23-00/pogoda-a-5709385274-o.jpg)

```
sudo add-apt-repository ppa:atareao/atareao
sudo apt-get update
sudo apt-get install my-weather-indicator
```

Более полный список апплетов доступен на [askubuntu](http://askubuntu.com/questions/30334/list-of-application-indicators).
