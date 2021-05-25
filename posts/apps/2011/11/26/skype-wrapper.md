---
title: 'Skype Wrapper - улучшение интеграции Skype с Unity'
date: '2011-11-26T16:40:09+04:00'
uri: 'apps/skype-wrapper'
alias: 
  - 'apps/skype-wrapper.html'
tags: 'Skype Wrapper,Skype,Unity'
source: 'http://www.omgubuntu.co.uk/2011/11/skype-wrapper-lands-in-a-ppa-for-easy-installation/'
unixtime: 1322311209
visits: 16681
---
[Skype-Wrapper](https://launchpad.net/~skype-wrapper/+archive/ppa) – плагин для VoIP клиента [Skype](articles/install-skype-on-ubuntu-11-04-linux), помогающий улучшить интеграцию с десктоп оболочкой Unity.

## Текущие характеристики:

*   Интеграция Skype с меню сообщений.

[![>Интеграция Skype с меню сообщений](img/2011/11/26/16-00/skype-wrapper-6-6404896295-o.jpg)](img/2011/11/26/16-00/skype-wrapper-6-6404896295-o.jpg)

*   Вывод сообщений об отслеживании поведения пользователей (онлайн, оффлайн) и приходящих сообщений через нативную систему уведомлений Unity (NotifyOSD).

[![](img/2011/11/26/16-00/skype-wrapper-3-6404895863-o.jpg)](img/2011/11/26/16-00/skype-wrapper-3-6404895863-o.jpg)

*   Вывод числа непрочитанных сообщений и прогресс-бара загрузок поверх значка на панели Unity.
*   Возможность настройки различных опций через dconf-editor

## Установка Skype Wrapper в Ubuntu

Skype-wrapper доступен для установки в Ubuntu 10.10, 11.04 и 11.10 из официального PPA, используя следующие команды:

```
 sudo add-apt-repository ppa:skype-wrapper/ppa
 sudo apt-get update
 sudo apt-get install skype-wrapper
```

### Запуск Skype Wrapper

Для работы Skype Wrapper потребуется предварительная авторизация в самом Skype:

*   Нажимает <kbd>Alt</kbd>+<kbd>F2</kbd> и вводим команду skype-wrapper.
*   Подтверждаем запрос на авторизацию Skype API в всплывающем окне (появляется в течение минуты).

[![](img/2011/11/26/16-00/skype-wrapper-4-6404895707-o.jpg)](img/2011/11/26/16-00/skype-wrapper-4-6404895707-o.jpg)

Для того, чтобы убрать индикатор Skype на верхней панели, можно выполнить команду для его удаления:

```
sudo apt-get remove sni-qt
```

вернуть обратно можно так:

```
sudo apt-get install sni-qt
```

## Настройка уведомлений

Для настройки уведомлений воспользуемся утилитой [dconf-editor](apt://dconf-tools) (dconf-editor > apps > skype-wrapper):

*   **notify-on-initializing** - отключает во время авторизации вывод списка пользователей, находящихся в сети
*   **notify-on-messagerecieve** - Включает или выключает уведомления о пришедших сообщениях
*   **notify-on-useronlinestatuschange** - отключает или включает уведомления о пользователях вышедших или вошедших в сеть
*   **notify-on-incoming-filetransfer** - выводит уведомления о входящих запросах о передачи файлов
*   **notify-on-outgoing-filetransfer** - выводит уведомления об исходящих запросах на отправку файла
*   **show-outgoing-filetransfer-progress** - выводит прогресс-бар на панели Unity для исходящих запросов на передачу файла
*   **show-incoming-filetransfer-progress** - выводит прогресс-бар на панели Unity для входящих загрузок
*   **display-indicator-avatars** - управляет выводом аватарок пользователей в меню сообщений
*   **display-notification-avatars** - управляет выводом аватарок пользователей в всплывающих окнах уведомлений

[![](img/2011/11/26/16-00/dconf-tools-skype-6404896135-o.jpg)](img/2011/11/26/16-00/dconf-tools-skype-6404896135-o.jpg)
