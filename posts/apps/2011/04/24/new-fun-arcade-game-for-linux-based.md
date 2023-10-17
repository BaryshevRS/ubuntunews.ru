---
title: 'Новая аркада Vertigo доступная для Linux'
date: '2011-04-24T22:53:10+04:00'
uri: 'apps/new-fun-arcade-game-for-linux-based'
alias: 
  - 'apps/new-fun-arcade-game-for-linux-based-.html'
tags: 'Vertigo,Аркада,Игра'
source: ''
unixtime: 1303671190
visits: 2708
---
[Vertigo](http://www.vertigo-game.com/) новая кроссплатформенная, свободная аркада доступная для Ubuntu, основанная на Ogre3D и движке BulletPhysics.

Смысл игры в маневрировании зондом от одного конца тунеля к другому. У зонда есть два шита, один защищает от ледяных зондов, другой от огненных. Единовременно доступен только один из режимов и они постоянно меняются.

[![](img/2011/04/24/22-00/dante-afterlife-5650140559-o.jpg)](img/2011/04/24/22-00/dante-afterlife-5650140559-o.jpg)

Игра с отличным звуковым сопровождением и вполне подойдет для убийства времени.

Скачать Vertigo можно здесь, после загрузки нужно распаковать архив, перейти в папку **«/bin»** и запустить скрипт **«play\_vertigo.sh»**.

<iframe title="YouTube video player" width="500" height="311" src="https://www.youtube.com/embed/6x6BfZNGabc" frameborder="0" allowfullscreen=""></iframe>

### Установка через терминал

*   Запускаем терминал и переходим в каталог, куда был загружен фаил.
*   Распаковываем архив:
    
    ```
    gunzip2 Vertigo.tar.bz2 && tar vxf Vertigo.tar
    ```
    
*   Переходим в директорию bin:
    
    ```
    cd Vertigo/bin 
    ```
    
*   Запускаем игру:
    
    ```
    ./play_vertigo.sh 
    ```
    

Создадим символическую ссылку для простого запуска игры из терминала.

```
sudo ln -s /path/to/vertigo/bin/play_vertigo.sh /usr/local/bin/vertigo 
```

Где **«/path/to/vertigo/»** путь до **«bin»** директории игры, если она была распакована в домашнем каталоге, то путь будет таким: **«~/Vertigo/bin/play\_vertigo.sh»**

В случае ошибки, удаляем ссылку:

```
sudo rm /usr/local/bin/vertigo 
```

и выполняем предыдущию команду еще раз.

Теперь для запуска достаточно нажать **«ALT+F2»** и ввести **«vertigo»**.
