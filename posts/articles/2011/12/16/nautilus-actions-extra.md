---
title: 'Nautilus Actions Extra - расширяем функционал Nautilus 3'
date: '2011-12-16T22:23:12+04:00'
uri: 'articles/nautilus-actions-extra'
alias: 
  - 'articles/nautilus-actions-extra.html'
tags: 'null'
source: 'http://www.webupd8.org/2011/12/nautilus-actions-extra-pack-of-useful.html'
unixtime: 1324059792
visits: 10856
---
[Nautilus Actions Extra](https://bugs.launchpad.net/nautilus-actions-extra) – это набор различных полезных скриптов, дополняющих функционал файлового менеджера Nautilus 3. Среди включенных скриптов стоит отметить: продвинутый поиск, возможность запуска файлов и папок с правами администратора, установка картинок как обоев на рабочий стол, монтирование и размонтирование ISO образов, проверка контрольной суммы, конвертирование изображений и аудио файлов, групповое переименование (pyRenamer), добавление эмблемок и многое другое.

[![](img/2011/12/16/22-00/nautilus-actions-extra-6521864147-o.jpg)](img/2011/12/16/22-00/nautilus-actions-extra-6521864147-o.jpg)

Одним из самых интересных скриптов является Emblemize2 (для запуска нажать правой кнопкой мыши по файлу и выбрать Advanced Actions → Emblemize2 ), который позволяет добавить эмблемку к файлам и папкам в Nautilus 3. Ранее этот функционал был удален из состава Nautilus.

## Установка Nautilus Actions Extra

Для установки в Ubuntu 11.10 или 12.04, достаточно выполнить следующие команды:

```
sudo add-apt-repository ppa:dr3mro/nautilus-actions-extra
 sudo apt-get update 
 sudo apt-get install nautilus-actions-extra 
 nautilus -q
```

[![](img/2011/12/16/22-00/nautilus-actions-extra-1-6521864567-o.jpg)](img/2011/12/16/22-00/nautilus-actions-extra-1-6521864567-o.jpg)

Пак скриптов содержит достаточно большой список различных действий, которые не всегда могут и пригодится, но есть возможность удалить ненужные, воспользовавшись специальной конфигурационной утилитой, выполнив в терминале:

```
gksu nautilus-actions-config-tool
```
