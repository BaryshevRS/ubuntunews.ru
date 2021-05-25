---
title: 'Интеграция менеджера закачек JDownloader с Unity'
date: '2011-12-08T20:50:01+04:00'
uri: 'apps/unity-jdownloader'
alias: 
  - 'apps/unity-jdownloader.html'
tags: 'JDownloader,Unity'
source: 'http://www.webupd8.org/2011/11/jdownloader-unity-integration-speed.html'
unixtime: 1323363001
visits: 5043
---
[JDownloader](http://jdownloader.org/home/index) кроссплатформенный клиент для загрузки файлов с большинства популярных файлообменников. Поддерживает перехват капчи, дозагрузку файлов, настройку времени ожидания, автопереподключение, планировщик, автоматическую распаковку скаченных архивов и многое другое.

[![Интеграция менеджера закачек JDownloader с Unity](img/2011/12/08/20-00/jdownloader-6477529633-o.jpg)](img/2011/12/08/20-00/jdownloader-6477529633-o.jpg)

Для интеграции JDownloader с Unity можно использовать пакет под названием **Unity-JDownloader,** который добавляет контекстное меню, счетчик с выводом текущей скорости, прогресс-бар и уведомления по завершению загрузки.

## Установка Unity-JDownloader в Unity

Для начала добавим репозитории, введя команды в терминале:

```
sudo add-apt-repository ppa:narfss/proyectobs
 sudo add-apt-repository ppa:jd-team/jdownloader
 sudo apt-get update
```

Для работы плагина нам потребуется установить сам Jdownloader, доступный для работы в Ubuntu 10.04 и до 11.10 включительно:

```
sudo apt-get install jdownloader
```

Само же дополнение доступно только для Ubuntu 11.10:

```
sudo apt-get install unity-jdownloader
```

Запустить Unity-JDownloader можно просто перетащив иконку на панель Unity.

Важным моментом является то, что для работы дополнения потребуется включить плагин «удаленное управление».

[![Интеграция менеджера закачек JDownloader с Unity](img/2011/12/08/20-00/jdownloader-1-6477530001-o.jpg)](img/2011/12/08/20-00/jdownloader-1-6477530001-o.jpg)
