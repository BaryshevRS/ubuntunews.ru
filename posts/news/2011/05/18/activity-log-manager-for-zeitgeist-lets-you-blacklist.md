---
title: 'Activity Log Manager: удаление истории Zeitgeist и скрытие файлов от показа в Dash'
date: '2011-05-18T09:33:52+04:00'
uri: 'news/activity-log-manager-for-zeitgeist-lets-you-blacklist'
alias: 
  - 'news/activity-log-manager-for-zeitgeist-lets-you-blacklist.html'
tags: 'Activity Log Manager,Zeitgeist'
source: ''
unixtime: 1305696832
visits: 10429
---
Activity Log Manager представляет из себя графический интерфейс для работы: с логами архивов создаваемых утилитой Zeitgeist, управлением «запрещенным списком» (blacklist), удалением истории работы с файлами и многое другое.

**Zeitgeist** это служба ведущая журнал пользовательской активности (посещенные сайты, открытые файлы и программы) и делает информацию доступной для других приложений, включена в Ubuntu c версии 11.04

**Activity Log Manager** представляет удобный и простой доступ к «запрещенному списку» файлов и приложений, для которых ведение логов будет прекращено, сам интерфейс выполнен в виде вкладок:

*   На вкладке «файлов» можно указать типы файлов, а также выбрать директории для которых ведение логов вестись не будет.

![](img/2011/05/18/09-00/activity-log-manager-3-5732851038-o.jpg)

*   На вкладке «приложений», можно выбрать программы, также для запрещения ведения логов

![](img/2011/05/18/09-00/activity-log-manager-2-5732851002-o.jpg)

*   На вкладке «истории», можно выполнить очистку за заданный интервал времени.

![](img/2011/05/18/09-00/activity-log-manager-1-5732304629-o.jpg)

Activity Log Monitor может пригодиться для скрытия нежелательных файлов от показа в Dash, а также для создания приватных директорий.

### Установка

Для работы c Activity Log Monitor требуется Zeitgeist 0.8.0 или более поздняя версия, что выше той которая используется в Ubuntu 10.10 или 11.04, для чего потребуется обновиться из PPA:

```
sudo add-apt-repository ppa:zeitgeist/ppa
sudo apt-get update
sudo apt-get upgrade
```

Теперь перегружаем Zeitgeist и ставим Activity Log Monitor, доступный из того же PPA:

```
zeitgeist-daemon --replace
sudo apt-get install activity-log-manager
```
