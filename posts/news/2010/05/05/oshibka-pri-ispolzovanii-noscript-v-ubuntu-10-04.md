---
title: 'Ошибка при использовании NoScript в  Ubuntu 10.04  '
date: '2010-05-05T23:04:01+04:00'
uri: 'news/oshibka-pri-ispolzovanii-noscript-v-ubuntu-10-04'
alias: 
  - 'news/358.html'
tags: 'null'
source: 'http://www.opennet.ru/opennews/art.shtml?num=26479'
unixtime: 1273086241
visits: 1317
---
Разработчик популярного Firefox-дополнения NoScript [обратил](http://hackademix.net/2010/05/04/bug-in-ubuntu-1004-crashing-your-desktop-via-firefox-noscript/) внимание пользователей на наличие в Ubuntu 10.04 неприятной [ошибки](https://bugs.launchpad.net/ubuntu/+source/xorg-server/+bug/539772), приводящей к краху X-сервера при выполнении определенных действий в Firefox. Ошибка замечена при использовании дополнения NoScript (при клике на пиктограмму), но сообщается, что она может проявляться и при других обстоятельствах.

Наличие проблемы  подтверждено в пакете xorg-server, обновление которого доступно пока только в PPA-репозитории (sudo add-apt-repository ppa:bryceharrington/purple && apt-get update && apt-get upgrade).
