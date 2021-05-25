---
title: 'Вышел Ubuntu Rescue Remix 11.04 - дистрибутив для востановления системы'
date: '2011-05-03T14:06:21+04:00'
uri: 'news/release-ubuntu-rescue-remix-11-04'
alias: 
  - 'news/release-ubuntu-rescue-remix-11.04.html'
tags: 'Rescue Remix,дистрибутивы,11.04'
source: ''
unixtime: 1304417181
visits: 5645
---
На днях [вышел](http://ubuntu-rescue-remix.org/node/982) дистрибутив Ubuntu Rescue Remix 11.04, основанный на пакетной базе Ubuntu 11.04, предназначенный для восстановления системы после сбоя и сбора информации о несанкционированном доступе.

В дистрибутиве были обновлены большинство пакетов и добавлено несколько новых включая Dump, - утилиту для резервирования и восстановления системы, а также антивирус ClamAV.

Дистрибутив работает только в режиме командной строки (CLI),  используя для работы наиболее мощные утилиты восстановления данных с открытым исходным кодом.

### Включенные приложения

*   Ddrescue - поиск сбойных блоков на жестком диске
*   Photorec - для восстановления медиа файлов, архивов и документов
*   Sleuth Kit - для восстановление удаленных файлов (поддерживает файловые системы NTFS, FAT, UFS 1, UFS 2, EXT2FS, EXT3FS, ISO 9660)
*   Gnu fdisk.

### Графический интерфейс

Для работы через графический интерфейс подготовлен специальный метапакет:

Добавляем в sources.list:

```
deb http://ppa.launchpad.net/arzajac/ppa/ubuntu natty main
```

Устанавливаем цифровую подпись:

```
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys BDFD6D77
```

И устанавливаем пакет «**ubuntu-rescue-remix-tools**»

Подробности на [странице анонса](http://ubuntu-rescue-remix.org/node/982), скачать [URR 11.04](http://ubuntu-rescue-remix.org/files/URR/iso/UbuntuRescueRemix1104.iso) размером 224МБ.
