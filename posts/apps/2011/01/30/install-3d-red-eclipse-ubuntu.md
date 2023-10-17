---
title: 'Ставим 3D шутер Red Eclipse в Ubuntu'
date: '2011-01-30T23:57:53+03:00'
uri: 'apps/install-3d-red-eclipse-ubuntu'
alias: 
  - 'apps/install-3d-red-eclipse-ubuntu.html'
tags: 'Игра,PPA'
source: 'http://www.webupd8.org/2011/01/install-red-eclipse-successor-of-blood.html'
unixtime: 1296421073
visits: 4768
---
Red Eclipse трехмерный шутер от первого лица, работающий как в режиме мультиплеера, так и в сингле, является продолжением прекращенного проекта Blood Frontier. Игра c открытым исходным кодом и находится в свободном доступе.

![Ставим 3D шутер Red Eclipse в Ubuntu](img/2011/01/30/23-00/red-eclipse.jpg)

Гемплей Red Eclipse похож на Quake, основана на движке Cube 2 Sauerbraten, поддерживающий различные графические эффекты, отражения, тени, свет, физику частиц и прочее, есть возможностью редактирования карт.

<iframe title="YouTube video player" class="youtube-player" type="text/html" width="480" height="390" src="https://www.youtube.com/embed/7SNMJocLqoM" frameborder="0" allowfullscreen=""></iframe>

Red Eclipse доступна для загрузки  из SVN, но энтузиасты (Giovanni), создали специальный PPA для пользователей [Ubuntu](ubuntu/) 10.10. Размер игры для скачивания составляет 1Гб.

```
sudo add-apt-repository ppa:itachi-sama-amaterasu/redeclipse-clientsudo apt-get updatesudo apt-get install redeclipse
```

Для тех у кого стоит отличная версия от Ubuntu Maverick, могут установить из .deb пакетов по следующим ссылкам.

*   32bit: [redeclipse](https://launchpad.net/%7Eitachi-sama-amaterasu/+archive/redeclipse-client/+files/redeclipse_0.90%2Bsvn1556-1ubuntu1_i386.deb) [redeclipse-server](https://launchpad.net/%7Eitachi-sama-amaterasu/+archive/redeclipse-client/+files/redeclipse-server_0.90%2Bsvn1556-1ubuntu1_i386.deb) [redeclipse-data](https://launchpad.net/%7Eitachi-sama-amaterasu/+archive/redeclipse-client/+files/redeclipse-data_0.90%2Bsvn1556-1ubuntu1_all.deb)
*   64bit: [redeclipse](https://launchpad.net/%7Eitachi-sama-amaterasu/+archive/redeclipse-client/+files/redeclipse_0.90%2Bsvn1556-1ubuntu1_amd64.deb) [redeclipse-server](https://launchpad.net/%7Eitachi-sama-amaterasu/+archive/redeclipse-client/+files/redeclipse-server_0.90%2Bsvn1556-1ubuntu1_amd64.deb) [redeclipse-data](https://launchpad.net/%7Eitachi-sama-amaterasu/+archive/redeclipse-client/+files/redeclipse-data_0.90%2Bsvn1556-1ubuntu1_all.deb)

Или попробовать установить непосредственно из SVN:

```
svn co https://redeclipse.svn.sourceforge.net/svnroot/redeclipse redeclipsesudo apt-get install build-essential libsdl1.2-dev libsdl-mixer1.2-dev libsdl-image1.2-devcd redeclipse/src && make clean && make install && cd .. && ./redeclipse.sh
```
