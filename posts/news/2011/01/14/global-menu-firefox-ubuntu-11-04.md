---
title: 'Поддержка Firefox в глобальном меню для Ubuntu 11.04.'
date: '2011-01-14T03:35:05+03:00'
uri: 'news/global-menu-firefox-ubuntu-11-04'
alias: 
  - 'news/global-menu-firefox-ubuntu-11.04.html'
tags: 'Firefox,Глобальное меню,11.04'
source: ''
unixtime: 1294965305
visits: 2377
---
Chris Coulson представил небольшое расширение для поддержки Firefox 4 в глобальном меню для Ubuntu 11.04.

![Firefox 4 в глобальном меню для Ubuntu 11.04](img/2011/01/14/03-00/apps-firefox-menu.jpg)

Установка доступна только пользователям 11.04, для инсталляции нужно воспользоваться следующей [инструкцией](http://askubuntu.com/questions/21373/how-can-i-get-firefox-to-work-with-the-global-application-menu).

Для установки требуется последняя тестовая версия Firefox Beta 9 для 11.04 и воспользоваться [PPA](http://askubuntu.com/questions/4983/what-are-ppas-and-how-do-i-use-them).

```

sudo add-apt-repository ppa:chrisccoulson/ppa
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install firefox-globalmenu
```

Расширение находится в разработке так, что возможны ошибки, о которых можно [сообщить](https://bugs.launchpad.net/globalmenu-extension/+filebug).
