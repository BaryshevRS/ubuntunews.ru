---
title: 'Как сбросить настройки Compiz и Unity в Ubuntu 12.10'
date: '2012-10-03T22:27:15+04:00'
uri: 'articles/how-to-reset-compiz-and-unity'
alias: 
  - 'articles/how-to-reset-compiz-and-unity.html'
tags: 'Gsettings,Unity,Gconf,Compiz'
source: 'http://www.webupd8.org/2012/10/how-to-reset-compiz-and-unity-in-ubuntu.html'
unixtime: 1349288835
visits: 10455
---
Рассмотрим, как сбросить настройки Compiz и Unity в Ubuntu 12.10. Раньше для этой цели использовалась команда «unity --reset», но после того, как разработчики решили перейти на Gsettings вместо Gconf, она перестала работать.

[![](img/2012/10/03/22-00/dconf-8051174457-o.jpg)](img/2012/10/03/22-00/dconf-8051174457-o.jpg)

Во-первых, нам понадобится установить dconf-tools:

```
sudo apt-get install dconf-tools
```

Теперь для сброса настроек достаточно будет выполнить команду:

```
dconf reset -f /org/compiz/
```

и перезапустить Unity, введя в терминале:

```
setsid unity
```

При желании можно просмотреть информацию о настройках Compiz:

```
dconf dump /org/compiz/
```

Также стоит отметить, что команда «unity --reset-icons», для сброса иконок на панели Unity, всё ещё работает.
