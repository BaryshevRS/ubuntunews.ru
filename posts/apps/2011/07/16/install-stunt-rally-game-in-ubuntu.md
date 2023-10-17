---
title: 'Установка гоночной игры Stunt Rally в Ubuntu'
date: '2011-07-16T12:51:08+04:00'
uri: 'apps/install-stunt-rally-game-in-ubuntu'
alias: 
  - 'apps/install-stunt-rally-game-in-ubuntu.html'
tags: 'Stunt Rally,Игра,Ралли,Гонка'
source: ''
unixtime: 1310806268
visits: 11623
---
[Stunt Rally](http://code.google.com/p/vdrift-ogre/) как следует из названия, это ралли игра под Linux c 49 доступными треками, 6 сценариями, 7 гоночными машинами и редактором треков. В игре предстоит ездить на закрытых ралли треках с элементами трюков: петли, прыжки, трубы.

[![Установка гоночной игры Stunt Rally в Ubuntu](img/2011/07/16/12-00/stunt-rally-5942061671-o.jpg)](img/2011/07/16/12-00/stunt-rally-5942061671-o.jpg)

[![Установка гоночной игры Stunt Rally в Ubuntu](img/2011/07/16/12-00/stunt-rally-1-5942620552-o.jpg)](img/2011/07/16/12-00/stunt-rally-1-5942620552-o.jpg)

В качестве движка для симуляции машин используется Vdrift, а весь рендеринг выполняет Ogre3D. Среди других используемых технологий PagedGeometry для отрисовки декораций (деревья, трава) и MyGUI.

<iframe width="500" height="405" src="\\www.youtube.com/embed/-KDZGnM0jDM" frameborder="0" allowfullscreen=""></iframe>

## Рекомендуемые системные требования

Процессор с 2-мя ядрами и GeForce 9600 GT или Radeon HD 3870. Запуск возможен и на более старых моделях видеокарт с поддержкой 3-их шейдеров.

## Установка Stunt Rally в Ubuntu

Stunt Rally доступна для установки в 10.04,10.10 и 11.04 из PPA:

```
sudo add-apt-repository ppa:stuntrally-team/stable
sudo add-apt-repository ppa:andrewfenn/ogredev
sudo apt-get update
sudo apt-get install stuntrally
```

Скриншоты можно найти тут,а демонстрационные ролики [тут](//www.youtube.com/user/TheCrystalHammer).
