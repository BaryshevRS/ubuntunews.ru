---
title: 'Устанавливаем классический рабочий стол Gnome в Ubuntu 11.10'
date: '2011-08-25T18:26:08+04:00'
uri: 'articles/installing-using-classic-gnome-desktop'
alias: 
  - 'articles/installing-using-classic-gnome-desktop.html'
tags: 'Gnome,11.10'
source: 'http://www.webupd8.org/2011/08/installing-using-classic-gnome-desktop.html'
unixtime: 1314282368
visits: 22931
---
Как известно Ubuntu 11.10 Oneiric Ocelot будет использовать десктоп оболочку Unity (с композитным менеджером Compiz) в качестве рабочего стола по умолчанию, а для систем не поддерживающих Unity с Compiz будет работать Unity 2D. GNOME Shell также будет доступен в Ubuntu 11.10, но только через установку из репозитория.

Возникает вопрос где же классический десктоп GNOME?

[![Устанавливаем классический рабочий стол Gnome в Ubuntu 11.10](img/2011/08/25/18-00/gnome-classic-6079344269-o.jpg)](img/2011/08/25/18-00/gnome-classic-6079344269-o.jpg)

Установить классический рабочий стол Gnome в Ubuntu 11.10, но только версию GNOME 3, а не старую, которая использовалась в GNOME 2, можно выполнив команду ниже или воспользовавшись центром приложений Ubuntu.

```
sudo apt-get install gnome-session-fallback 
```

После установки потребуется разлогиниться и выбрать «GNOME Classic» в дисплейном менеджере LightDM.

Теперь чтобы добавить апплет нужно зажать <kbd>ALT</kbd> + правую кнопку мыши (вместо простого правого клика), а также некоторые старые апплеты, в новом классическом десктопе Gnome, могут не работать.
