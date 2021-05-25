---
title: 'Пак иконок Faenza Games'
date: '2011-01-24T02:29:14+03:00'
uri: 'apps/icons-faenza-games'
alias: 
  - 'apps/icons-faenza-games.html'
tags: 'Faenza,Иконки'
source: ''
unixtime: 1295825354
visits: 2913
---
Появился новый пак иконок «[Faenza Games](http://half-left.deviantart.com/art/Faenza-Games-Icon-Pack-189876623)», включающий 22 иконки в стиле [Faenza](http://fav.me/d2v6x24) для различную Linux игр.

![Пак иконок Faenza Games](img/2011/01/24/02-00/faenza-games-icon-pack-by-half-left-d351pqn.jpg)

Для инсталляции потребуется установить тему иконок Faenza:

```

sudo add-apt-repository ppa:tiheum/equinox
sudo apt-get update && sudo apt-get install faenza-icon-theme
```

Далее распаковываем скаченный архив и получаем файл tar.gz, который можно проинсталлировать просто перетащив в окно тем (**Система→Параметры→Внешний вид**),

![тема иконок ubuntu](img/2011/01/24/02-00/menu-ubuntu.jpg)

другой способ, это распаковать в домашнию директорию в папку **~/.icons**, или в папку **/usr/share/icons**.

Для того, что бы тема была со стилем иконок Faenza-Dark, нужно в файле index.theme подправить строку:

```

Inherits=Faenza,Faenza-Dark
```

на

```

Inherits=Faenza-Dark,Faenza
```
