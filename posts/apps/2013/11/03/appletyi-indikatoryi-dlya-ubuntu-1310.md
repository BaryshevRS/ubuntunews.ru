---
title: 'Апплеты-индикаторы для Ubuntu 13.10'
date: '2013-11-03T13:15:18+04:00'
uri: 'apps/appletyi-indikatoryi-dlya-ubuntu-1310'
alias: 
  - 'apps/appletyi-indikatoryi-dlya-ubuntu-1310.html'
tags: 'indicator-applet,Unity,13.10'
source: ''
unixtime: 1383470118
visits: 40218
---
Рассмотрим апплеты-индикаторы, вышедшие с поддержкой [Ubuntu 13.10](news/finalnyij-reliz-ubuntu-1310-saucy-salamander). Часть из них себя уже давно зарекомендовала, а некоторые представлены только недавно.

### Remindor

Индикатор, предназначенный для создания сообщений о запланированных событиях. Он очень гибок в настройке и позволяет задать расписание c напоминаниями через определённый промежуток времени. Например, можно выбрать вывод уведомлений в течение месяца по понедельникам в 10 часов.

[![](img/2013/11/03/13-00/ubuntu-applet-5-10642148393-o.jpg)](img/2013/11/03/13-00/ubuntu-applet-5-10642148393-o.jpg)

Показ сообщений доступен в двух видах. Это, собственно, через саму систему уведомлений Ubuntu и через проигрывание мелодии. И то, и то можно настроить или отключить на своё усмотрение.

Установка доступна из консоли, используя команды ниже:

```
sudo add-apt-repository ppa:bhdouglass/indicator-remindor
sudo apt-get update
sudo apt-get install indicator-remindor
```

Qt версия:

```
sudo add-apt-repository ppa:bhdouglass/indicator-remindor
sudo apt-get update
sudo apt-get install remindor-qt
```

### Stickynotes

Очень простой и удобный апплет, предназначенный для размещения заметок в виде стикеров на рабочем столе.

[![](img/2013/11/03/13-00/ubuntu-applet-8-10642146543-o.jpg)](img/2013/11/03/13-00/ubuntu-applet-8-10642146543-o.jpg)

Среди опций индикатора: добавление новых экземпляров, закрепление от редактирования и скрытие (показ). Также среди параметров есть возможность создания отдельных категорий и настройка их внешнего вида, в том числе изменение размера, типа и цвета шрифта, а также фона заметок.

Установка:

```
sudo add-apt-repository ppa:umang/indicator-stickynotes
sudo apt-get update
sudo apt-get install indicator-stickynotes
```

### ClassicMenu

Апплет для десктоп оболочки Unity, возвращающий старое традиционное меню Gnome с разбивкой приложений по категориям.

[![](img/2013/11/03/13-00/ubuntu-applet-2-10641932126-o.jpg)](img/2013/11/03/13-00/ubuntu-applet-2-10641932126-o.jpg)

Установка:

```
sudo add-apt-repository ppa:diesch/testing
sudo apt-get update
sudo apt-get install classicmenu-indicator
```

### System Load

Индикатор является портом старого апплета System Monitor GNOME Panel. Выводит информацию о загрузке процессора, используемой оперативной памяти, сетевой активности, количестве обращений к жёсткому диску и прочее прямо на верхнюю панель Unity.

[![](img/2013/11/03/13-00/ubuntu-applet-1-10641926254-o.jpg)](img/2013/11/03/13-00/ubuntu-applet-1-10641926254-o.jpg)

Установка доступна из центра приложений или командой в терминале:

```
sudo apt-get install indicator-multiload
```

### Diodon

Менеджер буфера обмена, поддерживающий файлы, фотографии и т. п.

[![](img/2013/11/03/13-00/ubuntu-applet-2-10642494203-o.jpg)](img/2013/11/03/13-00/ubuntu-applet-2-10642494203-o.jpg)

Установка доступна из ЦП.

```
sudo apt-get install diodon diodon-plugins
```

### My Weather Indicator

Мощный информативный индикатор, выводящий очень обширную информацию о погоде, такую как температуру, влажность, облачность, давление, скорость ветра и т. д.

[![](img/2013/11/03/13-00/ubuntu-applet-6-10641922934-o.jpg)](img/2013/11/03/13-00/ubuntu-applet-6-10641922934-o.jpg)

Среди характеристик можно отметить показ прогноза на пять дней вперёд, [виджет для рабочего стола](apps/my-weather-indicator-s-podderzhkoy-vidzhetov) и поддержку четырёх сервисов погоды на выбор: penWeatherMap, Yahoo, Wunderground и World Weather Online.

Инсталляция:

```
sudo add-apt-repository ppa:atareao/atareao
sudo apt-get update
sudo apt-get install my-weather-indicator
```

Также обновился ещё один апплет погоды — **Indicator Weather**, отличающийся работой сразу с несколькими городами. Однако при тестировании, к сожалению, он должным образом не заработал. При желании найти его можно [здесь](https://launchpad.net/~weather-indicator-team/+archive/ppa).

## Для портативных устройств

### Cpufreq

Апплет, предназначенный для смены частоты процессора. Пригодится для тех, кто хочет продлить время работы своего ноутбука.

[![](img/2013/11/03/13-00/ubuntu-indicator-10640325284-o.jpg)](img/2013/11/03/13-00/ubuntu-indicator-10640325284-o.jpg)

Инсталляция из ЦП.

```
sudo apt-get install indicator-cpufreq
```

### Touchpad

Индикатор для пользователей портативных устройств, у которых отсутствует или не работает кнопка включения / выключения тачпада.

[![](img/2013/11/03/13-00/ubuntu-applet-3-10642149813-o.jpg)](img/2013/11/03/13-00/ubuntu-applet-3-10642149813-o.jpg)

Установка:

```
sudo add-apt-repository ppa:atareao/atareao
sudo apt-get update
sudo apt-get install touchpad-indicator
```

**Примечание:** 12.04 больше не поддерживается (старая версия).

## Для программ

### TrueCrypt

TrueCrypt — программа для шифрования жёстких дисков, разделов, файлов и USB-устройств. Она по умолчанию не поддерживает апплеты Unity, поэтому одним из разработчиков была представлена специальная пропатченная версия утилиты, доступная из PPA.

[![](img/2013/11/03/13-00/ubuntu-applet-4-10641924294-o.jpg)](img/2013/11/03/13-00/ubuntu-applet-4-10641924294-o.jpg)

Установка

```
sudo add-apt-repository ppa:stefansundin/truecrypt
sudo apt-get update
sudo apt-get install truecrypt
```

**Примечание:** автором не была подготовлена отдельная версия индикатора, а только в комплекте с самой программой.

### KeePass 2

**KeePass 2** — один из лучших свободных менеджеров для хранения паролей, но имеет плохую совместимость с Ubuntu.

[![](img/2013/11/03/13-00/ubuntu-applet-1-10642495163-o.jpg)](img/2013/11/03/13-00/ubuntu-applet-1-10642495163-o.jpg)

Установка апплета KeePass 2 из PPA:

```
sudo add-apt-repository ppa:dlech/keepass2-plugins
sudo apt-get update
sudo apt-get install keepass2-plugin-application-indicator
```

Также доступен ещё один патч для интеграции с глобальным меню. Для его инсталляции нужно добавить PPA выше и выполнить команду:

```
sudo apt-get install keepass2-plugin-application-menu
```

**Все описанные выше апплеты доступны не только для Ubuntu 13.10, но и для всех версий, начиная с 12.04.**

### Indicator-Synapse

Индикатор, аналогичный в работе утилите для семантического поиска [Synapse](apps/synapse-0-2-8) или главному меню Dash. Пригодится тем, кому такой метод работы будет удобней и придётся больше по душе.

[![](img/2013/11/03/13-00/ubuntu-applet-7-10641897805-o.jpg)](img/2013/11/03/13-00/ubuntu-applet-7-10641897805-o.jpg)

Также стоит отметить, что он всё ещё находится в разработке, поэтому может быть не стабилен. Кроме того, в нём пока отсутствует поддержка горячих клавиш, что делает его ещё менее полезным.

Установить можно только в Ubuntu 12.04 и 13.04:

```
sudo add-apt-repository ppa:elementary-os/unstable-upstreamsudo add-apt-repository ppa:birdie-team/stable
sudo apt-get update
sudo apt-get install indicator-synapse libkeybinder-3.0-0
```

## Удаление

Удалить установленные выше приложения можно прямо из ЦП. Для полного удаления, вместе с добавленными репозиториями, можно выполнить следующие команды:

```
sudo apt-get remove НАЗВАНИЕ_ПРОГРАММЫsudo apt-add-repository --remove АДРЕСС_РЕПОЗИТОРИЯ
```

Например, для truecrypt, это выглядит так:

```
sudo apt-get remove truecryptsudo apt-add-repository --remove ppa:stefansundin/truecrypt
```
