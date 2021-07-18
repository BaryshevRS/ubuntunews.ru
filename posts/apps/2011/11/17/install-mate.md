---
title: 'Установка Mate - форка  GNOME 2 в Ubuntu 11.10'
date: '2011-11-17T20:39:57+04:00'
uri: 'apps/install-mate'
alias: 
  - 'apps/install-mate.html'
tags: 'MATE,Gnome'
source: ''
unixtime: 1321547997
visits: 15576
---
[Mate](https://github.com/Perberos/Mate-Desktop-Environment) – это форк рабочего стола GNOME 2, созданный для пользователей предпочитающих традиционный стиль оформления. Рабочий стол придется по вкусу тем кому не нравится десктоп оболочки Unity или Gnome Shell в GNOME 3.

[![](img/2011/11/17/20-00/mate-1-6353803647-o.jpg)](img/2011/11/17/20-00/mate-1-6353803647-o.jpg)

**Обновлено:** Новая статья по установке Mate.

## Установка Mate в Ubuntu 11.10

Нужный пакет возьмём из репозитория Linux Mint 12. Для этого откроем «параметры системы → источники приложений» и добавим репозиторий:

```
deb http://packages.linuxmint.com/ lisa main upstream import
```

Теперь установим, выполнив команды в терминале:

```
sudo apt-get update 
sudo apt-get install mint-meta-mate
```

После выхода из системы, в меню выбора рабочих столов, можно будет выбрать MATE.

Для фикса ошибки запуска центра приложений Ubuntu, подредактируем файл:

```
sudo gedit /etc/lsb-release
```

Заменив содержимое на:

```
DISTRIB_ID=Ubuntu
    DISTRIB_RELEASE=11.10
    DISTRIB_CODENAME=oneiric
    DISTRIB_DESCRIPTION='Ubuntu oneiric' 
```

[![](img/2011/11/17/20-00/mate-6353803125-o.jpg)](img/2011/11/17/20-00/mate-6353803125-o.jpg)
