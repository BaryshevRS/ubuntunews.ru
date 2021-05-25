---
title: 'Интеграция меню сообщений Ubuntu с Facebook'
date: '2011-07-18T20:17:19+04:00'
uri: 'apps/fbuntu-facebook-notifier-with-ubuntu'
alias: 
  - 'apps/fbuntu-facebook-notifier-with-ubuntu.html'
tags: 'Facebook,Меню'
source: 'http://www.webupd8.org/2011/07/fbuntu-facebook-notifier-with-ubuntu.html'
unixtime: 1311005839
visits: 2818
---
[FBuntu](https://launchpad.net/fbuntu) скрипт для интеграции меню сообщений Ubuntu и NotifyOSD уведомлений с Facebook, поддерживающий вывод событий происходящих в социальной сети.

[![](img/2011/07/18/20-00/fbuntu-5951156904-o.jpg)](img/2011/07/18/20-00/fbuntu-5951156904-o.jpg)

## Установка

Для инсталляции потребуется выполнить ряд последовательных шагов:

Установим BZR и скачаем исходники Fbuntu, выполнив в терминале:

```
sudo apt-get install bzr
bzr branch lp:fbuntu
```

Теперь авторизуем FBuntu в Facebook, перейдя по следующей ссылке.

Дальше нужно скопировать ссылку, полученную после редиректа из адресной строки и вставить её в поле **url=""** в файле auth.py.example (находиться в папке Fbuntu в домашней директории).

Для завершения настройки: скопируем иконку facebook.png в папку ~/.icons, переименуем auth.py.example в auth.py и запустим сам скрипт Fbuntu:

```
mkdir -p ~/.icons
cp fbuntu/facebook.png ~/.icons/
mv fbuntu/auth.py.example fbuntu/auth.py
python ~/fbuntu/fbuntu.py
```

Последняя команда используется для запуска.

[![](img/2011/07/18/20-00/fbuntu-1-5951157232-o.jpg)](img/2011/07/18/20-00/fbuntu-1-5951157232-o.jpg)

Для работы программы, без использования терминала, добавим его в автозапуск (Параметры системы > Запускаемые приложения), введя команду:

«python /home/**ВАШ ПРОФИЛЬ**/fbuntu/fbuntu.py».
