---
title: 'Апплеты-индикаторы для обновлений, уведомлений, Google Tasks и Jupiter'
date: '2012-03-23T00:42:50+04:00'
uri: 'apps/applet-update-manager-jupiter-google-tasks-notification'
alias: 
  - 'apps/applet-update-manager-jupiter-google-tasks-notification.html'
tags: 'indicator-applet,Апплет,Jupiter,Google Tasks'
source: 'http://www.webupd8.org/'
unixtime: 1332448970
visits: 7947
---
Рассмотрим некоторые новые и обновлённые версии апплетов-индикаторов, такие как Update Manager, Jupiter, Google Tasks и Notification.

## Update Manager Indicator

Этот апплет отвечает за отслеживание доступных обновлений, а также обладает рядом дополнительных функций, таких как обновление репозиториев, вывод в подменю списка новых пакетов и NotifyOSD уведомления.

[![](img/2012/03/23/00-00/applet-2-7006655327-o.jpg)](img/2012/03/23/00-00/applet-2-7006655327-o.jpg)

В новой версии была реализована поддержка GTK3 и вывод числа доступных пакетов на иконке индикатора, а также теперь можно выполнять обновление в фоновом режиме без необходимости запуска «менеджера обновлений».

Установка доступна для Ubuntu 11.10 и 12.04:

```
sudo add-apt-repository ppa:nilarimogard/webupd8
 sudo apt-get update
 sudo apt-get install indicator-updatemanager
```

По умолчанию апплет показывается на панели только тогда, когда есть доступные обновления. Для того, чтобы настроить постоянный вывод значка надо выполнить команду (нажать <kbd>ALT+F2</kbd>) и ввести:

```
update_indicator --with-preferences
```

В настройках можно будет также задать периодичность проверки доступных обновлений, режим (фоном или через менеджер), включение или выключение уведомлений и вывод счётчика на значке.

Для добавления в автозапуск надо зайти в «настройки запуска приложений» и нажать добавить, затем в поле имя ввести – «Update Manager Indicator» и в поле команда – «update\_indicator».

## Jupiter 0.1.2

Jupiter – апплет ориентированный на продление времени жизни батарей нетбуков / лаптопов. Может переключаться между режимами полной загрузки, экономии и сбережения, а также позволяет изменять разрешение и ориентацию дисплея, включать или выключать Bluetooth, Touchpad и WiFi.

[![](img/2012/03/23/00-00/applet-3-7006655497-o.jpg)](img/2012/03/23/00-00/applet-3-7006655497-o.jpg)

Новая версия Jupiter была переписана с Mono на Python и получила поддержку апплетов-индикаторов Ubuntu, что позволяет избавиться от необходимости добавления значка в белый список (whitelist).

Установка Jupiter доступна в Ubuntu 12.04, 11.10, 11.04 и 10.10:

```
sudo add-apt-repository ppa:webupd8team/jupiter
 sudo apt-get update
 sudo apt-get install jupiter
```

Пользователи нетбуков Asus EeePC могут поставить специальную версию:

```
sudo apt-get install jupiter-support-eee
```

## Google Tasks

Достаточно удобный индикатор для тех кто активно использует сервис заметок от Google, находящийся среди опций интерфейса почты Gmail.

Индикатор поддерживает вывод последних десяти заметок, а также имеет опцию «Show Notes», запускающую окно в котором можно редактировать, сортировать, завершать и очищать список заметок.

[![](img/2012/03/23/00-00/applet-4-7006655931-o.jpg)](img/2012/03/23/00-00/applet-4-7006655931-o.jpg)

Установка доступна в Ubuntu 12.04 и 11.10:

```
sudo add-apt-repository ppa:atareao/atareao
 sudo apt-get update
 sudo apt-get install google-tasks-indicator 
```

При первом запуске Google Tasks откроет новую вкладку в браузере с запросом на авторизацию, после прохождения которой апплет появится в системном трее.

## Notification

Апплет предназначен для сохранения всплывающих уведомлений NotifyOSD. Особенно может быть полезен для отслеживания пропущенных сообщений.

[![](img/2012/03/23/00-00/applet-1-6860540656-o.jpg)](img/2012/03/23/00-00/applet-1-6860540656-o.jpg)

Поставить можно в 11.04 и 11.10:

```
sudo add-apt-repository ppa:jconti/recent-notifications
 sudo apt-get update
 sudo apt-get install indicator-notifications
```
