---
title: 'Доступен для тестирования прототип глобального меню Ubuntu 10.10 '
date: '2010-06-02T20:21:26+04:00'
uri: 'news/dostupen-dlya-testirovaniya-prototip-globalnogo-menu-ubuntu-10-10'
alias: 
  - 'news/387.html'
tags: 'null'
source: 'http://www.opennet.ru/opennews/art.shtml?num=26770'
unixtime: 1275495686
visits: 1394
---
Как уже сообщалось ранее в Ubuntu 10.10 Netbook Edition будет реализована идея глобального меню, при котором, по аналогии с Mac OS X, строка с меню для всех приложений отображается не в окне программы, а в верхней управляющей панели. Сегодня стал доступен первый рабочий прототип нового меню, который поддерживает работу как GTK, так и Qt-приложений, но неработоспособен с OpenOffice.org и базирующимися на XUL приложениями Mozilla (Firefox, Thunderbird).

Для тестирования новой системы достаточно подключить PPA-репозиторий “sudo add-apt-repository ppa:canonical-dx-team/une” и выполнить “sudo apt-get update && sudo apt-get install appmenu-gtk libqtgui4 indicator-applet-appmenu indicator-appmenu”, после чего вручную установить апплет “[Indicator Applet Appmenu](https://wiki.ubuntu.com/DesktopExperienceTeam/ApplicationMenu)” на панель. Для задействования глобального меню в приложениях их нужно запускать примерно так: “GTK\_MENUPROXY=“libappmenu.so” gnome-terminal”.
