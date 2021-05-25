---
title: 'Подборка советов по доработке свежеустановленного Ubuntu 9.04 Linux'
date: '2009-04-26T09:27:32+04:00'
uri: 'news/podborka-sovetov-po-dorabotke-ubuntu-9-04'
alias: 
  - 'news/81.html'
tags: '9.04,Ubuntu Linux'
source: 'http://www.opennet.ru/opennews/mini.shtml'
unixtime: 1240723652
visits: 1061
---
Несколько разных заметок и впечатлений, касающихся Ubuntu 9.04:

*   “[Ubuntu Netbook Remix 9.04 на Acer Aspire One](http://ubuntueasy.com/ustanovka/ubuntu-netbook-remix-904-na-acer-aspire-one)” - полезные рекомендации по настройке Ubuntu Netbook Remix 9.04 на субноутбуке Acer Aspire One;
*   “Проблемы при обновлении Ubuntu до версии 9.04” - описание 2 проблем, возникших при переходе от версии 8.10 к 9.04 (зависание Evolution и проблемы с Update Manager из-за OpenOffice от Инфра Ресурс).
*   “[List of Repositories for Ubuntu 9.04 Jaunty Jackalope](http://linuxpoison.blogspot.com/2009/04/list-of-repositories-for-ubuntu-904.html)”  - список дополнительных репозиториев пакетов для Ubuntu 9.04, через которые можно поставить последние версии OpenOffice, Compiz, Chromium и т.п.
*   “[Multimedia Support in Ubuntu 9.04 Jaunty Jackalope](http://linuxpoison.blogspot.com/2009/04/multimedia-support-in-ubuntu-904-jaunty.html)” - заметка об установке мультимедиа кодектов и плееров (“sudo apt-get install ubuntu-restricted-extras” + установка дополнений из репозитория medibuntu). На русском языке похожие рекомендации можно найти здесь.
*   “[5 Things To Do After Installing Jaunty](http://helpforlinux.blogspot.com/2009/04/5-things-to-do-after-installing-jaunty.html)” - 5 вещей которые нужно доустановить в Ubuntu 9.04 (“sudo apt-get install ubuntu-restricted-extras”, “sudo apt-get install gufw”, “sudo apt-get install wine” “sudo apt-get install vlc”, установить ubuntu-tweak + активировать дополнительные репозитории в Synaptic )
*   “Ubuntu 9.04 (Jaunty Jackalope) How-To” - скоро появится обновленная версия классического руководства по доработке свежеустановленного Ubuntu;
*   “Using The Nouveau Driver In Ubuntu 9.04” - настройка свободных Nvidia драйверов Nouveau в Ubuntu 9.04 (“udo apt-get install xserver-xorg-video-nouveau” в xorg.conf добавить 'Driver “nouveau”');
*   “[Ubuntu Jaunty Doesn't Show When Updates Are Available Fix](http://webupd8.blogspot.com/2009/04/ubuntu-jaunty-doesnt-show-when-updates.html)” - решение проблемы с информированием о наличии обновлений вUbuntu 9.04 (для переключения на старый менеджер обновлений: “gconftool -s—type bool /apps/update-notifier/auto\_launch false”, иначе для не security-обновлений будет напоминать только раз в неделю).
*   Обязательно прочитать следует оригинальный Release Notes, в котором перечислены известные проблемы. Например, если наблюдается замерзание содержимого экрана на машинах с интегрированными видеокартами Intel, в Device секцию xorg.conf нужно прописать 'Option “DRI” “off”'. Для включения перезапуска X-сервера по Ctrl+Alt\_Backspace нужно выполнить команду “sudo apt-get install dontzap; sudo dontzap—disable”, которая пропишет в в секцию ServerFlag файла /etc/X11/xorg.conf 'Option “DontZap” “false”'.
