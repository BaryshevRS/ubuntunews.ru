---
title: 'Valve представила PPA с совместимы со Steam драйверами'
date: '2012-11-06T21:35:24+04:00'
uri: 'news/valve-predstavila-ppa-s-sovmestimy-so-steam-drayverami'
alias: 
  - 'news/valve-predstavila-ppa-s-sovmestimy-so-steam-drayverami.html'
tags: 'Valve,Steam'
source: 'http://www.ubuntuvibes.com/2012/11/steam-linux-support-page-launched.html'
unixtime: 1352223324
visits: 7981
---
Компанией Valve представлена [страница поддержки](https://support.steampowered.com/kb_cat.php?id=97), которая содержит информацию о том, как установить корректные версии необходимых драйверов.

[![](img/2012/11/06/21-00/8134778487.jpg)](img/2012/11/06/21-00/8134778487.jpg)

На текущий момент, официальная поддержка Linux версии Steam представлена только для Ubuntu 12.04 LTS с десктоп окружением Unity. Но вполне вероятно, что и под другими рабочими столами – Steam также будет чувствовать себя комфортно. Однако, работа с отличными от Ubuntu дистрибутивами будет доступна только после финального релиза.

Кроме того, была создана страница на [wiki Ubuntu](https://wiki.ubuntu.com/Valve), содержащая информацию о PPA, из которого можно установить рекомендуемые версии драйверов NVIDIA, ATI и Intel.

Драйверов для ATI пока нет, но зато есть NVIDIA 304.60:

```
sudo add-apt-repository ppa:ubuntu-x-swat/x-updates
sudo apt-get update
sudo apt-get dist-upgrade
```
