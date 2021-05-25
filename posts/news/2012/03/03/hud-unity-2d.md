---
title: 'HUD будет доступен и для Unity 2D'
date: '2012-03-03T16:53:39+04:00'
uri: 'news/hud-unity-2d'
alias: 
  - 'news/hud-unity-2d.html'
tags: 'HUD,Unity 2D,Меню'
source: 'http://www.webupd8.org/2012/03/hud-is-now-available-for-unity-2d-too.html'
unixtime: 1330779219
visits: 3311
---
[Стало известно](https://bugs.launchpad.net/ubuntu/+source/unity-2d/+bug/942045), что новое меню HUD, которое было включено по умолчанию в 3D редакцию десктоп оболочки Unity, также будет включено и в Unity 2D. Несмотря на то, что Ubuntu 12.04 уже перешёл на стадию заморозки и никаких новых характеристик добавляться не должно, всё-таки было принято решение сделать исключение и добавить HUD в Unity 2D.

[![](img/2012/03/03/16-00/hud-6948815457-o.jpg)](img/2012/03/03/16-00/hud-6948815457-o.jpg)

HUD для Unity 2D пока недоступно из официального репозитория Ubuntu 12.04 Precise Pangolin, но его можно поставить уже сейчас из тестового Unity Team PPA:

```
sudo add-apt-repository ppa:unity-team/ppa 
sudo apt-get update 
sudo apt-get dist-upgrade
```

**Обновлено:** HUD стал доступен из репозитория.
