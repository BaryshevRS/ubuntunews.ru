---
title: 'Установка Wine 1.3.24 в Ubuntu 11.04'
date: '2011-07-09T15:23:05+04:00'
uri: 'apps/wine-1-3-24-ubuntu-11-04'
alias: 
  - 'apps/wine-1.3.24-ubuntu-11.04-.html'
tags: 'Wine'
source: ''
unixtime: 1310210585
visits: 15444
---
[Вышел](http://www.winehq.org/announce/1.3.24) релиз Wine 1.3.24 с некоторыми важными обновлениями и поддержкой D3DX9 функций, для игр требующих поддержки Direct3D.

[![](img/2011/07/09/15-00/wine-5918680742-o.jpg)](img/2011/07/09/15-00/wine-5918680742-o.jpg)

Wine программа позволяющая запускать приложения Microsoft Windows на Unix системах. Это достигается благодаря использованию специальной библиотеки Winelib, позволяющей преобразовывать API вызовы Windows в их Unix или X11 аналоги, что и используется для портирования и выполнения Windows кода в Unix.

## Характеристики 1.3.24:

*   Различные DirectInput улучшения
*   Поддержка переноса строк для Uniscribe
*   Улучшение пользовательского интерфейса в Shell Explorer
*   Дополнительные D3DX9 функций
*   Улучшена поддержка для каталогов shell
*   Различные багофиксы

## Установка Wine 1.3.24 в Ubuntu 11.04

```
sudo apt-add-repository ppa:ubuntu-wine/ppa
sudo apt-get update
sudo apt-get install wine1.3
```

Если PPA еще не обновлен, то исходники для установки можно найти тут: [sourceforge.net](http://sourceforge.net/projects/wine/files/Source/wine-1.3.24.tar.bz2/download)

Распаковываем архив и переходим в полученную директорию:

```
bzip2 -d wine-1.3.24.tar.bz2
tar xfv wine-1.3.24.tar 
cd  wine-1.3.24
```

далее выполняем в терминале следующие команды для установки wine:

```
sudo apt-get install libx11-dev libfreetype6-dev flex bison
./tools/wineinstall
./configure
make
```

Wine 1.3.24 это последний тестовый релиз, если нужна стабильность в работе, то лучше поставить версию 1.2.3.
