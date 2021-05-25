---
title: 'Установка Google Drive в Ubuntu'
date: '2012-04-25T22:36:00+04:00'
uri: 'apps/google-drive-ubuntu'
alias: 
  - 'apps/google-drive-ubuntu.html'
tags: 'Google Drive,облачные вычисления'
source: 'http://www.omgubuntu.co.uk/2012/04/how-to-access-google-drive-via-nautilus-in-ubuntu/'
unixtime: 1335378960
visits: 22406
---
Drive – облачный сервис хранения файлов от компании Google, по сути представляющий из себя тоже самое, что и Ubuntu One или Dropbox.

[![](img/2012/04/25/22-00/drive-6967333664-o.jpg)](img/2012/04/25/22-00/drive-6967333664-o.jpg)

Сервис изначально предоставляет 5 ГБ бесплатного свободного места, но с возможность платного расширения до 16 ТБ. К сожалению клиент представлен только для платформ Android, Windows и Mac, а в ближайшее время будет включена поддержка ещё и для IOS.

Так что кто хочет попробовать новый сервис в действие могут подождать пока Google выпустит версию под Linux или использовать сторонний пакет от разработчика Luca Invernizzi.

Версия не лишена недостатков, наиболее существенным из которых является пропадание доступа к папке с файлами при отсутствие выхода в сеть.

## Установка Google Drive в Ubuntu

Рассмотрим процесс установки в Ubuntu 11.10 и Ubuntu 12.04, выполнив в терминале команды описанные ниже:

Предварительно надо отправить заявку на странице [drive.google.com/start](http://drive.google.com/start).

В Ubuntu 11.10 скрипт доступен из PPA:

```
sudo add-apt-repository ppa:invernizzi/google-docs-fs
 sudo apt-get update
 sudo apt-get install google-docs-fs
```

Для Ubuntu 12.04 нужно будет [скачать](https://launchpad.net/~invernizzi/+archive/google-docs-fs/+files/google-docs-fs_1.0%7Egdrive_all.deb) сам deb-пакет и установить с разрешением зависимостей:

```
wget https://launchpad.net/~invernizzi/+archive/google-docs-fs/+files/google-docs-fs_1.0%7Egdrive_all.deb
```

```
sudo dpkg -i google-docs-fs_1.0~gdrive_all.deb
 sudo apt-get install -f
```

Затем создаём папку Drive в домашнем каталоге

```
mkdir Drive
```

и подключаем аккаунт, где **«username»** надо заменить на свой.

```
gmount Drive username@gmail.com
```

Теперь вводим пароль от профиля и можем переходить в папку Drive для загрузки файлов.
