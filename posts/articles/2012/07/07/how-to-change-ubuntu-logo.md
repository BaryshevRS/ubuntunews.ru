---
title: 'Как сменить логотип Ubuntu на панели Unity'
date: '2012-07-07T01:08:22+04:00'
uri: 'articles/how-to-change-ubuntu-logo'
alias: 
  - 'articles/how-to-change-ubuntu-logo.html'
tags: 'Unity'
source: 'http://www.upubuntu.com/2012/07/how-to-change-default-ubuntu-logo.html'
unixtime: 1341608902
visits: 7352
---
Если надоел стандартный логотип Ubuntu для запуска Dash, то его вполне можно сменить на любой понравившийся в несколько простых шагов.

[![](img/2012/07/07/01-00/one-piece-7516807944-o.jpg)](img/2012/07/07/01-00/one-piece-7516807944-o.jpg)

Для замены понадобится иконка в формате PNG с размерами 48 на 48 пикселей. Найти некоторые можно здесь: easyicon.cn

### Порядок действий:

Для начала сделаем резервную копию значка Ubuntu, выполнив в терминале:

```
sudo cp /usr/share/unity/5/launcher_bfb.png /usr/share/unity/5/launcher_bfb.png.back
```

Теперь устанавливаем новую иконку:

```
sudo cp image.png /usr/share/unity/5/launcher_bfb.png
```

Где **«image.png»** название нашей иконки, лежащей в домашней папке.

Для вступления изменений в силу, потребуется перезайти в сессию или заново запустить Unity:

```
setsid unity
```

### Как отменить изменения

Для возвращения логотипа на место надо выполнить следующую команду:

```
sudo cp /usr/share/unity/5/launcher_bfb.png.back /usr/share/unity/5/launcher_bfb.png
```

И перезайти.
