---
title: 'Обновленные апплеты-индикаторы для Ubuntu'
date: '2011-06-12T23:51:58+04:00'
uri: 'articles/update-indicator-applet-ubuntu'
alias: 
  - 'articles/update-indicator-applet-ubuntu.html'
tags: 'indicator-applet,11.04'
source: ''
unixtime: 1307908318
visits: 16466
---
Рассмотрим апплеты-индикаторы, используемые для быстрого доступа к часто используемым характеристикам Ubuntu прямо из глобального меню.

В последние дни вышли обновленные версии популярных апплетов, а также некоторые новые, характеристики которых сейчас и рассмотрим:

## 1\. Индикатор Multiload (Indicator Systemload)

Это [апплет](https://launchpad.net/indicator-multiload) в Ubuntu предназначенный для отслеживания сетевой активности, загруженности ЦПУ, памяти и места на жестком диске. Вся информация выводится в виде графических индикаторов, с возможностью настройки через специальное меню опций.

[![Индикатор Multiload](img/2011/06/12/23-00/multiload-5825927864-o.jpg)](img/2011/06/12/23-00/multiload-5825927864-o.jpg)

В новой версии устранена ошибка с утечкой памяти и теперь отображает более детальную информацию о потребляемых системных ресурсов (загрузку процессора, сеть и т.д).

```
sudo add-apt-repository ppa:indicator-multiload/stable-daily 
sudo apt-get update 
sudo apt-get install indicator-multiload 
```

После установки, ввести в Dash для запуска: «System Load Indicator».

## 2\. Trash Indicator — апплет очистки корзины в Ubuntu

Простой апплет для очистки корзины, выводит количество элементов для удаления, а также пункт очистки корзины.

Установить можно скачав [.DEB](http://code.google.com/p/trashindicator/) пакет.

![Trash Indicator — апплет очистки корзины в Ubuntu](img/2011/06/12/23-00/trash-5825370885-o.jpg)

Для запуска нажать <kbd>ALT</kbd> + <kbd>F2</kbd>, и выполнить: **«trashindicator».**

## 3\. Indicator-Syspeek

[Syspeek](https://launchpad.net/syspeek) еще один индикатор выводящий информацию о потребляемых системных ресурсах: загрузку процессора памяти и т. д. При стопроцентной загрузки процессора, индикатор принимает насыщенный красный цвет.

![](img/2011/06/12/23-00/indicator-syspeek-5825370273-o.jpg)

Установить можно из .DEB пакета или через PPA:

```
sudo add-apt-repository ppa:vicox/syspeek 
sudo apt-get update 
sudo apt-get install syspeek 
```

## 4\. Indicator-Forceclose — апплет для завершения зависших приложений

[Indicator-Forceclose](https://launchpad.net/indicator-forceclose) находится на этапе разработки и далек до финального завершения, поэтому не рекомендуется для установки.

![Indicator-Forceclose — апплет для завершения зависших приложений](img/2011/06/12/23-00/indicator-forceclose-5825369669-o.jpg)

Исходники для тестирования можно скачать отсюда: [code.google.com/p/trashindicator](http://code.google.com/p/trashindicator/)

## 5\. Feed Indicator - апплет для отслеживания RSS лент

Feed Indicator апплет для отслеживания RSS лент, выводящий количество новых сообщений с поддержкой вывода их в подменю.

В новой версии была проведена работа по устранению багов.

[![отслеживания RSS лент](img/2011/06/12/23-00/rss-5825370749-o.jpg)](img/2011/06/12/23-00/rss-5825370749-o.jpg)

Пакет можно скачать отсюда: [code.google.com/p/feedindicator](http://code.google.com/p/feedindicator/)

## 6\. Cryptkeeper - шифрование папок в Ubuntu

Апплет производящий [EncFS](http://ru.wikipedia.org/wiki/EncFS) шифрование папок в Ubuntu/Linux. Будет удобен для быстрой и удобной зашиты необходимых файлов.

[![шифрование папок в Ubuntu](img/2011/06/12/23-00/cryptkeeper-5825927374-o.jpg)](img/2011/06/12/23-00/cryptkeeper-5825927374-o.jpg)

Если необходимо шифрование больших массивов данных, то лучше использовать [TrueCrypt](http://www.truecrypt.org/).

Cryptkeeper доступен для установки из центра приложений:

```
sudo apt-get install cryptkeeper 
```

Cryptkeeper предназначен для использования с панелью Gnome и не адаптирован для работы в Unity, поэтому в Ubuntu 11.04 возможно придется выполнить следующую команду:

```
gsettings set com.canonical.Unity.Panel systray-whitelist "['all']" 
```

и перегрузить Unity, нажав (<kbd>ALT</kbd> + <kbd>F2</kbd>) и выполнив **«Unity»**.

Также апплеты можно посмотреть [тут](articles/indicator-applet-ubuntu-11-04-natty-narwhal) и [тут](apps/indicator-applet-ubuntu).
