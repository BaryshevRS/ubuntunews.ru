---
title: 'Патч для панели инструментов Nautilus'
date: '2012-07-26T11:14:14+04:00'
uri: 'apps/nautilus-patch'
alias: 
  - 'apps/nautilus-patch.html'
tags: 'Настройка,Патч,Nautilus'
source: 'http://www.omgubuntu.co.uk/2012/07/nautilus-patch-brings-missing-file-manager-features-back-to-ubuntu'
unixtime: 1343286854
visits: 6895
---
В последние годы файловый менеджер Nautilus, используемый по умолчанию в GNOME и Ubuntu, прошёл долгий путь совершенствования пользовательского интерфейса.

Бесспорно многие изменений были сделаны только к лучшему, например, исчез визуальный [беспорядок](http://lh3.ggpht.com/_FJH0hYZmVtc/S9WH9h3T8QI/AAAAAAAAHps/uh1K5Exrwzk/image_thumb%5B3%5D.png?imgmax=800), за счёт реорганизации панели инструментов и оптимизации размещения интерфейсных элементов.

Но, конечно, не все нововведения были приняты приветливо. За примером далеко ходить не надо, чего только стоит обсуждение [нового интерфейса](news/nautilus-3-5-4).

[![](img/2012/07/26/11-00/nautilus-7648677450-o.jpg)](img/2012/07/26/11-00/nautilus-7648677450-o.jpg)

### Патч для Nautilus в Ubuntu 12.04

[Патч](https://launchpad.net/nautiluspatchtogglelocationbar/trunk/nautiluspatchtogglelocationbar/) предназначен для возвращения некоторых утраченных опция для панели инструментов, включая:

*   Показ иконки вверх
*   Показ иконки обновления
*   Переключение вида адресной строки (текстовый вид, кнопками)
*   Показ иконки компьютера
*   Показ иконки домашней директории

### Установка патча Nautilus в Ubuntu 12.04

Патч предназначен **только для установки под Ubuntu 12.04 с Nautilus 3.4.2**.

<button>[Скачать патч для 32-бит](https://launchpad.net/nautiluspatchtogglelocationbar/trunk/nautiluspatchtogglelocationbar/+download/nautiluspatch_v3.4.2-0ubuntu3-2_i386.deb)</button>

<button>[Скачать патч для 64-бит](https://launchpad.net/nautiluspatchtogglelocationbar/trunk/nautiluspatchtogglelocationbar/+download/nautiluspatch_v3.4.2-0ubuntu3-2_amd64.deb)</button>

После установки потребуется обязательно перезайти в сессию.

Настройки можно будет найти в меню «правка → параметры → toolbar».

### Как удалить

Откройте терминал и введите команду:

```
sudo apt-get remove nautiluspatch 
```
