---
title: 'Unity 5.8 и Unity 2D 5.8 в Ubuntu 12.04 Precise Pangolin'
date: '2012-03-25T15:40:00+04:00'
uri: 'news/unity-5-8'
alias: 
  - 'news/unity-5.8.html'
tags: 'Unity,Unity 2D,12.04'
source: ''
unixtime: 1332675600
visits: 8770
---
В Ubuntu 12.04 Precise Pangolin стала доступна новая версия десктоп оболочки Unity 5.8, включающая различные мелкие визуальные улучшения, багофиксы и настройки для работы на нескольких мониторах.

## Что нового в Unity 5.8

*   В настройках монитора появилась две новые опции. Первая из которых позволяет настроить показ панели Unity на всех экранах сразу или только на первом (по умолчанию). Вторая опция «sticky edge» отвечает за включение / выключение прилипания к краю экрана (при перемещение мыши между мониторами).

[![](img/2012/03/25/15-00/unity-5-8-3-7013669525-o.jpg)](img/2012/03/25/15-00/unity-5-8-3-7013669525-o.jpg)

*   Множество мелких улучшений оформления Dash, такие как выравнивание элементов интерфейса, оптимизация цветовой гаммы, шрифтов и многое другое.

[![](img/2012/03/25/15-00/unity-5-8-1-7013669121-o.jpg)](img/2012/03/25/15-00/unity-5-8-1-7013669121-o.jpg)

*   Новое сообщение, когда поиск не даёт результатов – «Извините, но приложений соответствующих вашему запросу не нашлось».

[![](img/2012/03/25/15-00/unity-5-8-2-6867559348-o.jpg)](img/2012/03/25/15-00/unity-5-8-2-6867559348-o.jpg)

*   Улучшения для клавиатурных комбинаций.
*   Меню HUD теперь зависит от режима вывода панели Unity. Если панель скрыта, то HUD запускается независимо, в противном случае он сливается с ней.

[![](img/2012/03/25/15-00/unity-5-8-6-7013670319-o.jpg)](img/2012/03/25/15-00/unity-5-8-6-7013670319-o.jpg)

Полный список улучшений можно найти [тут](https://launchpad.net/ubuntu/precise/+source/unity/5.8.0-0ubuntu1).

## Unity 5.8 2D

Unity 5.8 2D теперь как и 3D версия получила адаптивную смену фона Dash на основе усреднённого цвета используемых обоев на рабочем столе. Кроме Dash, такое оформление также получили NotifyOSD, HUD и панель Unity.

[![](img/2012/03/25/15-00/unity-5-8-5-7013669961-o.jpg)](img/2012/03/25/15-00/unity-5-8-5-7013669961-o.jpg)

В настройках утилиты dconf-editor, cтала доступна возможность настройки чувствительности появления панели Unity, когда она находится в режиме автоскрытия.

*Com → canonical → unity-2d → launcher*

[![](img/2012/03/25/15-00/unity-5-8-4-6867559636-o.jpg)](img/2012/03/25/15-00/unity-5-8-4-6867559636-o.jpg)

```
sudo apt-get install dconf-tools
```
