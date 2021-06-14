---
title: 'Новый дизайн полосы прокрутки в Ubuntu 11.04'
date: '2011-03-13T18:35:36+03:00'
uri: 'news/ubuntus-new-overlay-scrollbars-natty'
alias: 
  - 'news/ubuntus-new-overlay-scrollbars-natty.html'
tags: 'Дизайн,11.04,Ubuntu Linux'
source: ''
unixtime: 1300030536
visits: 2556
---
В [Ubuntu](ubuntu/) 11.04 появилась новая минималистичная полоса прокрутки, появляющийся при наведение мыши, вместо удаленной старой, сплошной полосы идущий вдоль границ приложения.

Mark [пишет](http://www.markshuttleworth.com/archives/615), что вдохновением для нового дизайна скролбара послужили мобильные устройства, что дало толчком к идеи сделать скролбар более символичным и менее громоздким.

![](img/2011/03/13/18-00/banshe-scrollbar.jpg)

Так как новая полоса прокрутки хотя и будет оптимальна для мобильных устройств, то для десктоп систем будет непривычна, поэтому у пользователей будет возможность отключения нового механизма прокрутки.

В блоге дизайнеров Canonical [представлено](http://design.canonical.com/2011/03/introducing-overlay-scrollbars-in-unity/) видео демонстрирующие новый скролбар в действие.

<iframe src="http://player.vimeo.com/video/20523493" width="480" height="360" frameborder="0"></iframe>

Представленный прототип не является конечным вариантом и до финального релиза Natty возможно будет переработан.

Загрузить пакет нового скролбара можно из [PPA](https://launchpad.net/~ayatana-scrollbar-team/+archive/release):

```
sudo apt-add-repository ppa:ayatana-scrollbar-team/release
sudo apt-get update
sudo apt-get install liboverlay-scrollbar-0.1-0
```

Для подключения новой полосы прокрутки к приложениям (возьмём к примеру Banshee) нужно выполнить команду:

```
export LIBOVERLAY_SCROLLBAR=1
banshee
```

Для того, что бы скролбар по-умолчанию применялся ко всем приложениям, можно попробовать выполнить следующию команду в терминале:

```
sudo suecho "export LIBOVERLAY_SCROLLBAR=1" > /etc/X11/Xsession.d/80overlayscrollbars
```
