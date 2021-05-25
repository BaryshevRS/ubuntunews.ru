---
title: 'Подборка 5 лучших торрент клиентов для Ubuntu'
date: '2011-01-28T02:32:31+03:00'
uri: 'apps/top-5-bit-torrent-clients-ubuntu'
alias: 
  - 'apps/top-5-bit-torrent-clients-ubuntu.html'
tags: 'Торрент,Deluge,Transmission,QBittorrent,Vuze,KTorrent,Софт,Gnome'
source: ''
unixtime: 1296171151
visits: 69780
---
Рассмотрим несколько одних из лучших на сегодняшний момент торрент клиентов доступных для установки в [Ubuntu](ubuntu/). На выбор будут представлены 5 наиболее зарекомендовавших себя торрент клиентов, наилучший из которых выбрать достаточно сложно.

### BitTorrent клиент Deluge

Достаточно быстрый и функциональный торрент клиент, доступный из репозитория.

![BitTorrent клиент Deluge](img/2011/01/28/02-00/deluge.jpg)

Для установки последней версии, можно воспользоваться командой в терминале:

```
sudo add-apt-repository ppa:deluge-team/ppasudo apt-get update sudo apt-get install deluge
```

### BitTorrent клиент Transmission

Присутствует неизменно в стандартной поставке Ubuntu в течение достаточно долгого периода времени, как торрент клиент по умолчанию. Transmission достаточно простой, но тем не менее обладающий всем необходимым функционалом для полноценной работы .

![BitTorrent клиент Transmission](img/2011/01/28/02-00/transmission.jpg)

Доступен по умолчанию, для обновления можно воспользоваться командой в терминале:

```
sudo add-apt-repository ppa:transmissionbt/ppasudo apt-get updatesudo apt-get upgrade
```

### BitTorrent клиент qBittorrent

Кроссплатформенный клиент доступный под ОС Linux, Mac OS X и Windows написанный с использованием Qt. Qbittorrent представляет из себя альтернативную реализацию μtorrent.

![BitTorrent клиент qBittorrent](img/2011/01/28/02-00/qbittorrent.jpg)

Клиент доступен из репозитория, для установки можно использовать следующую команду.

```
sudo add-apt-repository ppa:hydr0g3n/qbittorrent-unstablesudo apt-get updatesudo apt-get install qbittorrent
```

### BitTorrent клиент KTorrent

KTorrent не предназначен для работы под Ubuntu использующий рабочий стол Gnome, так как представляет из себя приложение KDE, но тем не менее прекрасно работающий и под Gnome. C точки зрения функционала является достойным торрент клиентом работающим под [Ubuntu](ubuntu/).

![BitTorrent клиент KTorrent ](img/2011/01/28/02-00/ktorrent.jpg)

Команда для инсталляции (требует достаточно много зависимостей).

```
sudo add-apt-repository ppa:kubuntu-ppa/backportssudo apt-get updatesudo apt-get install ktorrent
```

### BitTorrent клиент Vuze

Vuze (ранее известный как Azureus ) широко используемый клиент среди пользователей Ubuntu, достаточно популярен несмотря на конкуренцию со стороны Deluge и Transmission.

![BitTorrent клиент Vuze](img/2011/01/28/02-00/vuze.jpg)
