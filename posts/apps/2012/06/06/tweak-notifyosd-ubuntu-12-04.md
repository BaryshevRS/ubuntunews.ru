---
title: 'Как настроить всплывающие сообщения NotifyOSD в Ubuntu 12.04'
date: '2012-06-06T22:37:25+04:00'
uri: 'apps/tweak-notifyosd-ubuntu-12-04'
alias: 
  - 'apps/tweak-notifyosd-ubuntu-12-04.html'
tags: 'NotifyOSD,NotifyOSDConfig,Твикер'
source: ''
unixtime: 1339007845
visits: 8108
---
Представлен патч для NotifyOSD в Ubuntu 12.04 Precise Pangolin, позволяющий настраивать различные параметры всплывающих сообщений, такие как позицию на экране, размер шрифта, фоновый цвет и ещё многие другие.

 [![](img/2012/06/06/22-00/notify-osd-7345822908-o.jpg)](img/2012/06/06/22-00/notify-osd-7345822908-o.jpg) 

**Что может:**

*   Изменять шрифт и фоновый цвет, а также прозрачность, размер, радиус закругления углов
*   Изменять задержку перед появлением (даже если она была задана программой)
*   Менять положение на экране
*   Переключаться между фиксированной и динамической позицией
*   Выключать эффект при наведение мыши
*   Закрытие по клику мыши
*   Включение / выключение использования цвета обоев для фона уведомления
*   Более подробно можно ознакомиться в блоге разработчика

Кроме того, ресурсом [WebUpd8](http://www.webupd8.org/2012/06/closable-movable-notifyosd.html) была обновлена графическая утилита NotifyOSDConfig, которая позволяет настроить все описанные выше параметры за исключением позиции на экране.

Видео с демонстрацией работы:

<iframe src="https://www.youtube.com/embed/1CAWU18JkjE" frameborder="0" width="500" height="281"></iframe>

## Установка патча NotifyOSD и NotifyOSDConfig в Ubuntu 12.04

**1**. Устанавливаем патч для NotifyOSD:

```
sudo add-apt-repository ppa:leolik/leolik
sudo apt-get update
sudo apt-get install notify-osd libnotify-bin pkill notify-osd
```

**2.** Устанавливаем графическую утилиту NotifyOSDConfig (с патчем NotifyOSD).

```
sudo add-apt-repository ppa:nilarimogard/webupd8
sudo apt-get update
sudo apt-get install notifyosdconfig
```

У утилиты нет поддержки изменения положения уведомлений, поэтому для этого придётся вводить команды вручную:

```
gsettings set com.canonical.notify-osd gravity [number]
```

Где - *\[number\]* нужно заменить на число в зависимости от желаемого расположения:

 <samp> 1 - правый верхний угол
 2 - справа посредине экрана
 3 - нижний правый угол
 4 - нижний левый угол
 5 - слева посредине экрана
 6 - верхний левый угол</samp>
