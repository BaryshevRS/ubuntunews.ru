---
title: 'Установка глобального меню в XFCE из PPA'
date: '2011-11-15T20:28:41+04:00'
uri: 'apps/xfce-global-menu-plugin-gets-a-ppa'
alias: 
  - 'apps/xfce-global-menu-plugin-gets-a-ppa.html'
tags: 'Глобальное меню,XFCE'
source: 'http://www.omgubuntu.co.uk/2011/11/xfce-global-menu-plugin-gets-a-ppa/'
unixtime: 1321374521
visits: 10386
---
Установка глобального меню для пользователей Xubuntu 11.04 и 11.10, использующих легковесное десктоп окружение XFCE, стало намного проще.

[![Установка глобального меню в XFCE из PPA](img/2011/11/15/20-00/xfce-1-6347915448-o.jpg)](img/2011/11/15/20-00/xfce-1-6347915448-o.jpg)

Нужный плагин теперь доступен из PPA, что заметно облегчает процесс установки и последующих обновлений.

## Установка глобального меню в XFCE

Для установки потребуется выполнить следующие команды в терминале:

```
sudo apt-add-repository ppa:the-warl0ck-1989/xfce-appmenu-plugin
 sudo apt-get update
 sudo apt-get install xfce4-appmenu-plugin indicator-appmenu appmenu-gtk appmenu-qt
```

После инсталляции нужно будет добавить новый апплет на верхнюю панель:

*   Кликнуть правой кнопкой мыши по свободному месту на панели XFCE
*   Выбрать плагин «Панель → «Добавить новые элементы» → «App Menu plugin»
*   Перетащить на верхнюю панель

[![](img/2011/11/15/20-00/xfce-6347166677-o.jpg)](img/2011/11/15/20-00/xfce-6347166677-o.jpg)
