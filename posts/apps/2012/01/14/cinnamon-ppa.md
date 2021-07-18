---
title: 'Cinnamon - доступен для установки из PPA'
date: '2012-01-14T17:35:00+04:00'
uri: 'apps/cinnamon-ppa'
alias: 
  - 'apps/cinnamon-ppa.html'
tags: 'Cinnamon'
source: 'http://www.webupd8.org/2012/01/cinnamon-available-to-install-via-ppa.html'
unixtime: 1326548100
visits: 10339
---
Cinnamon – форк GNOME Shell оформленный в стиле рабочего стола GNOME2, теперь стал доступен для установки [PPA](https://launchpad.net/~merlwiz79/+archive/cinnamon-ppa), что избавит от необходимости скачивая .deb пакетов и заметно упростит операцию обновления до новой версии.

[![Cinnamon - доступен для установки из PPA](img/2012/01/14/17-00/cinnamon-1-6694760819-o.jpg)](img/2012/01/14/17-00/cinnamon-1-6694760819-o.jpg)

В PPA также доступен «Cinnamon Settings» – **твикер для Cinnamon**, позволяющий настроить различные параметры этого десктоп окружения: настройку даты на панели, включение / выключение кнопки обзора, автоскрытия панели, а также тем и расширений.

Демонстрацию работы последней версии Cinnamon можно посмотреть из видео ниже, установленного из GIT (с рядом опций, которые пока недоступны в версии из PPA).

<iframe width="500" height="284" src="//www.youtube.com/embed/7mnZEom9djI" frameborder="0" allowfullscreen=""></iframe>

## Установка Cinnamon в Ubuntu из PPA

Установка доступна для Ubuntu 11.10 Oneiric Ocelot или 12.04 Precise Pangolin следующими командами:

```
 sudo add-apt-repository ppa:merlwiz79/cinnamon-ppa
 sudo apt-get update
 sudo apt-get install cinnamon cinnamon-session cinnamon-settings
```

Из PPA также можно также установить расширение для вывода погоды:

```
sudo apt-get install cinnamon-extension-weather
```

[![Cinnamon - доступен для установки из PPA](img/2012/01/14/17-00/cinnamon-6694760359-o.jpg)](img/2012/01/14/17-00/cinnamon-6694760359-o.jpg)

Ещё можно поставить ряд тем, недоступных из PPA, выполнив в терминале:

```
sudo apt-get install git-core 
cd && git clone https://github.com/linuxmint/cinnamon-themes.git 
cd cinnamon-themes 
./test
```

Стоит также отметить, что в последней версии Cinnamon используется оконный менеджер Muffin, новый форк Mutter, но на текущий момент каких-то принципиальных различий между ними нет.
