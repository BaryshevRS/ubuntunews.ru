---
title: 'Заканчивается поддержка Linux Mint 8 Helena'
date: '2011-04-04T22:29:24+04:00'
uri: 'news/linux-mint-8-helena-reaches-end-of-life'
alias: 
  - 'news/linux-mint-8-helena-reaches-end-of-life.html'
tags: 'Окончание поддержки,дистрибутивы,Linux Mint'
source: ''
unixtime: 1301941764
visits: 2630
---
29 апреля 2011 [подходит к концу](http://blog.linuxmint.com/?p=1714) жизненный цикл дистрибутива Linux Mint 8 Helena, основанного на Ubuntu 9.10, период поддержки которого [заканчивается](news/ubuntu-9-10-end-of-life) в то же время.

[![](img/2011/04/04/22-00/helena-fresh-5589261019-o.jpg)](img/2011/04/04/22-00/helena-fresh-5589261019-o.jpg)

Репозитории по прежнему останутся доступными, но обновления и фиксы безопасности производится больше не будут. Пользователям Helena рекомендуется обновится до Linux Mint 9 LTS Isadora, чья поддержка будет еще до апреля 2013 года.

С инструкцией обновления через CD можно ознакомиться [сдесь](http://community.linuxmint.com/tutorial/view/2) или воспользоваться [Apt](http://community.linuxmint.com/tutorial/view/62).

Заменяем репозитории в файле **/etc/apt/sources.list** на используемые в Linux Mint 9:

```
deb http://packages.linuxmint.com/ isadora main upstream import
deb http://archive.ubuntu.com/ubuntu/ lucid main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ lucid-updates main restricted universe multiverse
deb http://security.ubuntu.com/ubuntu/ lucid-security main restricted universe multiverse
deb http://archive.canonical.com/ubuntu/ lucid partner
deb http://packages.medibuntu.org/ lucid free non-free
```

  

```

 sudo apt-get update
 sudo apt-get dist-upgrade
 sudo apt-get upgrade
```
