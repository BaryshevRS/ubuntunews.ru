---
title: 'Как отключить автоскрытие глобального меню в Ubuntu 12.04'
date: '2012-07-03T02:39:23+04:00'
uri: 'articles/disable-global-menu-autohide'
alias: 
  - 'articles/disable-global-menu-autohide.html'
tags: 'Unity,12.04'
source: 'http://www.webupd8.org/2012/07/disable-global-menu-autohide-behaviour.html'
unixtime: 1341268763
visits: 10803
---
Unity Revamped PPA – репозиторий, содержащий специальную версию Unity, с такими патчами для панели запуска программ, как [скрытие по наведению окон](articles/real-window-dodge-unity-launcher) и [группировку по клику на значке приложений](apps/minimize-apps-to-the-unity-launcher).

PPA был обновлён и теперь в нём появилась новая возможность, позволяющая включить постоянное отображение глобального меню. Как известно после запуска программы меню исчезает через некоторое время, которое при желании можно регулировать из менеджера CCSM, теперь же его можно оставить включённым навсегда.

## Установка

Патчи ставятся все сразу и заменяют собой стандартные настройки Unity. Установка доступна только для Ubuntu 12.04, используя команды ниже:

```
sudo apt-add-repository ppa:ikarosdev/unity-revamped
 sudo apt-get update
 sudo apt-get upgrade
```

Для включения, постоянного отображения глобального меню, надо выбрать опцию в CompizConfig Settings Manager (Ubuntu Unity Plugin → Experimental → Menu Always Visible):

```
sudo apt-get install compizconfig-settings-manager
```

[![](img/2012/07/03/02-00/ccsm-7490372062-o.jpg)](img/2012/07/03/02-00/ccsm-7490372062-o.jpg)

## Откат изменений

Для возврата к стандартным параметрам Unity надо выполнить следующие команды:

```
sudo apt-get install ppa-purge
 sudo ppa-purge ppa:ikarosdev/unity-revamped
```
