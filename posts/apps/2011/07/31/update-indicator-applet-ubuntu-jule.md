---
title: 'Несколько новых апплетов-индикаторов в Ubuntu'
date: '2011-07-31T22:40:15+04:00'
uri: 'apps/update-indicator-applet-ubuntu-jule'
alias: 
  - 'apps/update-indicator-applet-ubuntu-jule.html'
tags: 'indicator-applet,VirtualBox'
source: ''
unixtime: 1312137615
visits: 13823
---
Рассмотрим несколько новых и обновленных апплетов-индикаторов в Ubuntu.

## Hamster

Апплет позволяющий отслеживать сколько времени было потрачено на те или иные мероприятия.

[![Hamster](img/2011/07/31/22-00/indicator-chars-5994397357-o.jpg)](img/2011/07/31/22-00/indicator-chars-5994397357-o.jpg)

### Установка

Hamster доступен для установки в Ubuntu 11.04 и 11.10:

```
sudo add-apt-repository ppa:albertomilone/hamster-indicator 
sudo apt-get update sudo 
apt-get install hamster-indicator 
```

Для запуска нажать <kbd>ALT</kbd> + <kbd>F2</kbd> и выполнить:

```
hamster-indicator 
```

По умолчанию Hamster выводит только иконку в системном трее, для более тонкой настройки следует воспользоваться следующими командами:

Можно вывести название отслеживаемого задания на панель, командой ниже:

```
gconftool-2 --set "/apps/hamster-indicator/show_label" --type bool "true" 
```

Для отмены:

```
gconftool-2 --set "/apps/hamster-indicator/show_label" --type bool "false" 
```

Следующая команда задаст количество выводимых символов на панель, для этого нужно заменить «20» на нужное значение.

```
gconftool-2 --set "/apps/hamster-indicator/label_length" --type int "20" 
```

Отображает иконку с подсветкой, когда запущено активное задание.

```
gconftool-2 --set "/apps/hamster-indicator/icon_glow" --type bool "true" 
```

Для отмены:

```
gconftool-2 --set "/apps/hamster-indicator/icon_glow" --type bool "false" 
```

## CPUFreq Indicator

Апплет позволяет изменять частоту процессора и может быть полезен пользователям ноутбуков, для экономии заряда батарей.

Новая версия вышла с важными баго-фиксами:

*   Баг когда апплет управлял только одним ядром
*   Решение проблем с работой под Ubuntu 11.04

Обновленный индикатор доступен пока только под Ubuntu 11.10.

### Установка

```
sudo add-apt-repository ppa:artfwo/ppa 
sudo apt-get update 
sudo apt-get install indicator-cpufreq 
```

Для запуска нажать <kbd>ALT</kbd> + <kbd>F2</kbd> и выполнить:

```
 indicator-cpufreq 
```

## Chars Indicator

Простой апплет-индикатор в Ubuntu служащий заменой старой палитры символов в панели Gnome. Позволяет получить доступ к различным спец-символам, не доступных на клавиатуре и без необходимости запуска полной «Таблицы символов».

[![Простой апплет-индикатор в Ubuntu](img/2011/07/31/22-00/hamster-indicator-5994955548-o.jpg)](img/2011/07/31/22-00/hamster-indicator-5994955548-o.jpg)

### Установка

```
sudo apt-get install git-core 
cd 
git clone https://github.com/tobyS/indicator-chars.git
```

По умолчанию в индикаторе нет включенных элементов, но их можно добавить из «Таблицы символов». Для этого в домашней директории нужно создать файл **«.indicator-chars»** и скопировать туда нужные символы.

Для запуска выполнить следующую команду в терминале:

```
~/indicator-chars/indicator-chars.py 
```

Для автозапуска следует перейти в (Параметры системы → запускаемые приложения) и добавить команду «/home/**ВАШ\_ПРОФИЛЬ**/indicator-chars/indicator-chars.py». Где «ВАШ\_ПРОФИЛЬ» нужно заменить на имя пользователя в системе.

Для копирования символа, нужно выбрать его в апплете и для вставки в документ, нажать среднюю кнопку мыши (<kbd>Ctrl</kbd> + <kbd>V</kbd> не работает).

## VirtualBox Indicator

Позволяет получить быстрый доступ к уже существующим виртуальным машинам в VirtualBox, без необходимости запуска окна самого приложения, позволяя запустить выбранную машину прямо из выбранного элемента меню.

[![VirtualBox Indicator](img/2011/07/31/22-00/indicator-virtualbox-5994397861-o.jpg)](img/2011/07/31/22-00/indicator-virtualbox-5994397861-o.jpg)

Апплет поддерживает работу на VirtualBox 4.1 и доступен для установки в Ubuntu 11.04, 10.10 и 10.04.

```
sudo add-apt-repository ppa:michael-astrapi/ppa 
sudo apt-get update 
sudo apt-get install indicator-virtualbox 
```

## Update Manager Indicator

Стоит также отметить апплет «Update Manager Indicator» находящийся на этапе разработки. Как следует из названия, позволяет отслеживать обновления в системе прямо из апплета-индикатора на панели, с возможностью доступа к часто используемых опциям «Менеджера обновлений».

[![Update Manager Indicator](img/2011/07/31/22-00/update-manager-indicator-5994396295-o.jpg)](img/2011/07/31/22-00/update-manager-indicator-5994396295-o.jpg)

С подробностями можно ознакомиться на странице проекта на [Launchpad](https://launchpad.net/indicator-updatemanager).
