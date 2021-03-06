---
title: 'Облачные сервисы хранения и синхронизации данных доступные в Ubuntu'
date: '2011-06-24T19:50:54+04:00'
uri: 'articles/cloud-service-ubuntu'
alias: 
  - 'articles/cloud-service-ubuntu.html'
tags: 'Облака,Ubuntu One,Dropbox,SparkleShare'
source: 'http://www.techdrivein.com/2011/06/7-good-dropbox-alternatives-for-linux.html'
unixtime: 1308930654
visits: 8209
---
Рассмотрим семь наиболее популярных облачных сервисов, доступных для инсталляции под Ubuntu / Linux.

По умолчанию в составе дистрибутива уже присутствует облачный сервис Ubuntu One, разработанный компанией Canonical, который стилизован и ориентирован для работы под Ubuntu. Предоставляет 2 Гб бесплатного свободного места на жестком диске, существует также версия клиента под Windows.

[![](img/2011/06/24/19-00/ubuntuone-5866950474-o.jpg)](img/2011/06/24/19-00/ubuntuone-5866950474-o.jpg)

## Dropbox

Dropbox один из самых популярных облачных сервисов, для хранения и в качестве инструмента синхронизации файлов, среди пользователей Linux.

Установить Dropbox можно скачав .deb пакет с [сайта проекта](https://www.dropbox.com/downloading).

## SparkleShare

Отличительной чертой является то, что проект основан на открытом исходном коде, а также то, что позволяет использовать собственные серверы, GitHub и Gitorious.

SparkleShare создает папку в домашней директории, куда в дальнейшем можно будет добавлять различные удаленный папки.

Для установки в Ubuntu 11.10, 11.04 и 10.10 потребуется выполнить следующие команды.

```
mkdir -p ~/.ssh 
sudo add-apt-repository ppa:warp10/sparkleshare 
sudo apt-get update 
sudo apt-get install sparkleshare libwebkit1.1-cil git-core 
```

«mkdir -p ~/.ssh» необходимо для того, что бы избежать «падения» при установки SparkleShare, из-за отсутствия директории «~/.ssh».

Для интеграции с Nautilus потребуется установить «python-nautilus»

```
sudo apt-get install python-nautilus 
```

## SpiderOak

Это кроссплатформенное приложение выступает в роли инструмента резервного копирования, обмена, синхронизации и доступа к файлам. Данные в SpiderOak хранятся в зашифрованном облаке с ключом шифрования хранящимся на стороне клиента. Предоставляет 2 Гб свободного места и 10$ / месяц за каждые 100 Гб включительно.

Скачать клиент SpiderOak можно [отсюда](https://spideroak.com/download/).

## Wuala

Сервис обеспечивает безопасное хранение, синхронизацию и резервное копирование файлов. Предоставляет 1 Гб бесплатного свободного места.

[![](img/2011/06/24/19-00/wuala-ubuntu1104-5866950602-o.jpg)](img/2011/06/24/19-00/wuala-ubuntu1104-5866950602-o.jpg)

Загрузить .deb пакет можно отсюда.

## Minus

Очень простой облачный сервис хранения данных. Позволяет перемещать фотографии, музыку, документы простым перетаскиванием на панель задач, после чего файлы будут сразу загружены в Minus.

Minus доступен для установки под различные платформы: Windows, Mac, Linux, Android, iPhone и WP7.

## ZumoDrive

Облачный сервис, предоставляющий инструмент синхронизации и хранения файлов, по умолчанию выделяется 2 Гб бесплатного места под хранение данных. Клиент ZumoDrive является кроссплатформенным и поддерживает Windows, Mac, Linux, iOS, Android и Palm webOS. Тарифные планы варьируются от 10 Гб до 500 Гб со стоимостью от $2.99 и до $79.99 в месяц.

[Скачать](https://www.zumodrive.com/download/zumodrive) клиент ZumoDrive в Ubuntu.

## TeamDrive

Проприетарный онлайн сервис хранения и синхронизации данных, а также с возможностью интеграции с приложениями через плагины.

![](img/2011/06/24/19-00/teamdrive-linux-client-ubuntu-5866397507-o.jpg)

Скачать TeamDrive можно тут.
