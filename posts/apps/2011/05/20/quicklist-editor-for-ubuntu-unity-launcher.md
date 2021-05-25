---
title: 'GUI редактор Quicklist для Ubuntu Unity'
date: '2011-05-20T13:39:32+04:00'
uri: 'apps/quicklist-editor-for-ubuntu-unity-launcher'
alias: 
  - 'apps/quicklist-editor-for-ubuntu-unity-launcher.html'
tags: 'Quicklist,Unity,Редактор'
source: 'http://www.webupd8.org/2011/05/quicklist-editor-for-ubuntu-unity.html'
unixtime: 1305884372
visits: 5117
---
Для панели Unity появилась возможность создания и редактирования контекстного меню (quicklists), с помощью специального редактора с графическим интерфейсом - **«Quicklist Editor»**.

[![GUI редактор Quicklist для Ubuntu Unity](img/2011/05/20/13-00/quicklist-editor4-5739617966-o.jpg)](img/2011/05/20/13-00/quicklist-editor4-5739617966-o.jpg)

«Quicklists» одна из функций реализованных для удобной работы с приложениями на панели Unity и предназначенной для быстрого доступа к часто используемым задачам.

![GUI редактор Quicklist для Ubuntu Unity](img/2011/05/20/13-00/quicklist-editor3-5739617964-o.jpg)

Quicklist Editor упрощает процесс создания контекстного меню для программ, за счет того, что теперь нет необходимости вручную создавать «.desktop» файлы для того, чтобы получить доступ к требуемым опциям приложений.

### Установка Quicklist Editor

Для установки потребуется выполнить следующие команды в терминале:

```
sudo apt-get install bzr
bzr branch lp:unity-launcher-editor
```

После установки в домашней директории появится папка: **«unity-launcher-editor»** в которой нужно будет перейти в **«unitylaunchereditor»** и запустить **«main.py»** **(не запуская в терминале, иначе созданные Quicklist могут не работать)**.

После того, чтобы созданное контекстное меню заработало, нужно нажать <kbd>ALT</kbd> + <kbd>F2</kbd> и выполнить команду **«unity».**

Пример создания контекстного меню для Центра приложений

[![GUI редактор Quicklist для Ubuntu Unity](img/2011/05/20/13-00/quicklist-editor2-5739617962-o.jpg)](img/2011/05/20/13-00/quicklist-editor2-5739617962-o.jpg)

[![GUI редактор Quicklist для Ubuntu Unity](img/2011/05/20/13-00/quicklist-editor-5739617960-o.jpg)](img/2011/05/20/13-00/quicklist-editor-5739617960-o.jpg)

Для поиска нужных команд для приложений можно воспользоваться **«APPLICATION --help»** или **«man APPLICATION»**, где **«APPLICATION»** требуемая программа, а также можно найти уже готовые реализации [тут](http://askubuntu.com/questions/35488/list-of-custom-launchers-quicklists-for-unity), только вместо ручного создания, теперь можно воспользоваться удобным графическим интерфейсом.

Если нашли ошибки в работе сообщите на [Launchpad](https://bugs.launchpad.net/unity-launcher-editor).
