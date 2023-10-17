---
title: 'Линза для просмотра YouTube стала поддерживать Minitube'
date: '2012-01-12T12:59:50+04:00'
uri: 'apps/youtube-lens-minitube'
alias: 
  - 'apps/youtube-lens-minitube.html'
tags: 'YouTube,Minitube,Линзы'
source: 'http://www.omgubuntu.co.uk/2012/01/youtube-lens-adds-minitube-playback-option/'
unixtime: 1326358790
visits: 5951
---
Была обновлена линза для просмотра роликов из видеосервиса YouTube.

Линза позволяет искать видео в YouTube, используя специализированную область и не требует запуска веб-браузера. Для просмотра достаточно кликнуть по превьюшке, после чего выбранное видео запустится в проигрывателе VLC. Приятным моментом является то, что ролик можно будет смотреть без использования Adobe Flash.

[![Линза для просмотра YouTube стала поддерживать Minitube](img/2012/01/12/12-00/youtube-lens-minitube-2-6683629085-o.jpg)](img/2012/01/12/12-00/youtube-lens-minitube-2-6683629085-o.jpg)

## YouTube Линза с Minitube

Minitube — программа для обзора, поиска, проигрывания и загрузки роликов с YouTube, который не требует запуска браузера или необходимости в плагине для Flash.

[![Minitube 1.7 В Ubuntu](img/2012/01/12/12-00/youtube-lens-minitube-3-6683629365-o.jpg)](img/2012/01/12/12-00/youtube-lens-minitube-3-6683629365-o.jpg)

## Установка Minitube 1.7

```
 sudo add-apt-repository ppa:ferramroberto/minitube
 sudo apt-get update
 sudo apt-get install minitube
```

### Настройка

Для установки Minitube в качестве программы для просмотра, надо запустить конфигурационную утилиту «YouTube Scope Configurator».

[![YouTube Scope Configurator](img/2012/01/12/12-00/youtube-lens-minitube-6683629525-o.jpg)](img/2012/01/12/12-00/youtube-lens-minitube-6683629525-o.jpg)

И выбрать Minitube из предложенных опций.

[![YouTube Scope Configurator](img/2012/01/12/12-00/youtube-lens-minitube-1-6683629155-o.jpg)](img/2012/01/12/12-00/youtube-lens-minitube-1-6683629155-o.jpg)

## Установка YouTube линзы в Ubuntu

Если линза ещё не установлена, то можно поставить из PPA:

```
 sudo add-apt-repository ppa:atareao/lenses
 sudo apt-get update
 sudo apt-get install lens-video scope-youtube
```

И перезайти в систему.
