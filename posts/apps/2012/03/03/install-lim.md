---
title: 'Установка LIM (локальной интеграции меню) в Ubuntu 12.04'
date: '2012-03-03T16:46:32+04:00'
uri: 'apps/install-lim'
alias: 
  - 'apps/install-lim.html'
tags: 'LIM,Меню'
source: 'http://www.ubuntuvibes.com/2012/03/how-to-install-new-locally-integrated.html'
unixtime: 1330778792
visits: 6886
---
LIM (локальная интеграция меню) не была включена по умолчанию в Ubuntu 12.04 Precise Pangolin, так как не была завершена до наступления заморозки релиза, теперь её включение можно ожидать только к выходу Ubuntu 12.10.

[![](img/2012/03/03/16-00/lim-6948815647-o.jpg)](img/2012/03/03/16-00/lim-6948815647-o.jpg)

LIM представляет из себя небольшой значок, который интегрируется с оформлением окон и размещается справа от кнопок управления окном. После установки LIM полностью заменит собой глобальное меню и при нажатие на него будет выводиться вертикальный список со всеми доступными пунктами меню.

 <iframe width="500" height="284" src="//www.youtube.com/embed/qKc7mhy6t2s" frameborder="0" allowfullscreen=""></iframe>

## Установка LIM в Ubuntu 12.04

LIM находится на стадии тестирования так, что возможны различные ошибки о которых можно сообщить разработчикам.

Добавляем PPA:

```
sudo add-apt-repository ppa:unity-team/lim
 sudo apt-get update
 sudo apt-get upgrade
```

Включаем LIM командой в терминале:

```
gsettings set com.canonical.indicator.appmenu menu-mode locally-integrated
```

Для отмены:

```
gsettings set com.canonical.indicator.appmenu menu-mode global
```

Удалить LIM можно выполнив команды ниже:

```
sudo apt-get install ppa-purge
 sudo ppa-purge ppa:unity-team/lim
```
