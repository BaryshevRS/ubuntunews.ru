---
title: 'Линзы для заметок Tomboy и плееров Clementine, Guayadeque и Rhythmbox'
date: '2011-11-11T10:00:53+04:00'
uri: 'apps/unity-tomboy-lens'
alias: 
  - 'apps/unity-tomboy-lens.html'
tags: 'Линзы,Tomboy,Clementine,Guayadeque,Rhythmbox'
source: ''
unixtime: 1320991253
visits: 3831
---
Пользователем Remi Rerolle была представлена новая Unity линза позволяющая искать и открывать заметки Tomboy в Dash.

[![](img/2011/11/11/10-00/score-6333318855-o.jpg)](img/2011/11/11/10-00/score-6333318855-o.jpg)

Установка Unity Tomboy Lens доступна только для пользователей Ubuntu 11.10 Oneiric Ocelot используя следующие команды:

```
sudo add-apt-repository ppa:remi.rerolle/unity-lens-tomboy 
sudo apt-get update 
sudo apt-get install unity-lens-tomboy
```

После перезахода в сессию в Dash должна появиться иконка для линзы Unity Tomboy Lens. Искать заметки можно будет не только через линзу Tomboy, но и через основной поиск Dash.

## Области для Clementine, Guayadeque и Rhythmbox

По умолчанию музыкальная линза использует Banshee, включая треки из Ubuntu One Music Store, но теперь с ней также смогут работать и пользователи использующие медиаплееры Clementine, Guayadeque или Rhythmbox.

Пакеты для поддержки новых областей для музыкальной линзы доступны из того же PPA, где лежат линзы для англоязычного сайта вопросов / ответов Ask Ubuntu и социального новостного сайта Reddit.

```
sudo add-apt-repository ppa:markjtully/ppa 
sudo apt-get update 
sudo apt-get install clementine-scope guayadeque-scope rhythmbox-scope
```

В этом PPA также представлена линза поиска по истории посещенных страниц в браузерах Chrome и Firefox.

```
sudo apt-get install unity-web-history-lens
```
