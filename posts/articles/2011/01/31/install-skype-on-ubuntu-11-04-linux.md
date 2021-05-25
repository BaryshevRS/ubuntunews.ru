---
title: 'Устанавливаем Skype в Ubuntu 11.04'
date: '2011-01-31T01:45:30+03:00'
uri: 'articles/install-skype-on-ubuntu-11-04-linux'
alias: 
  - 'articles/install-skype-on-ubuntu-11-04-linux.html'
tags: 'Skype,11.04,Инсталляция'
source: ''
unixtime: 1296427530
visits: 12469
---
Инсталлируем Skype в [Ubuntu](ubuntu/) 11.04, процесс не сложный и все команды выполним в терминале:

![Устанавливаем Skype в Ubuntu 11.04](img/2011/01/31/01-00/skype-linux-thumb1.jpg)

Устанавливаем необходимые зависимости:

```
sudo apt-get install libqt4-dbus libqt4-network libqt4-xml libasound2 
```

Скачиваем Skype, выбираем нужную версию в зависимости от разрядности системы:

```
cd /tmp wget http://www.skype.com/go/getskype-linux-beta-ubuntu-32cd /tmp wget http://www.skype.com/go/getskype-linux-beta-ubuntu-64
```

Инсталлируем:

```
 sudo dpkg -i /tmp/*skype* sudo apt-get -f install 
```

Скачать последнию версию Skype в Ubuntu можно загрузив пакет c [официального сайта](http://www.skype.com/intl/ru/get-skype/on-your-computer/linux/).

Для установки стабильной версии можно воспользоваться партнерским репозиторием из Ubuntu 10.10, который должен работать и под 11.04.

Для этого [правим](http://linuxway.ru/poleznoe/dobavlenie-repozitoriya-v-ubuntu/) sources.list:

```
 sudo gedit /etc/apt/sources.list
```

Добавляем репозиторий:

```
deb http://archive.canonical.com/ubuntu maverick partner
```

Устанавливаем:

```
sudo apt-get install skype
```
