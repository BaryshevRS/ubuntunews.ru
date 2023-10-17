---
title: 'Bumblebee 3.0 - программа для реализации поддержки Nvidia Optimus в Ubuntu'
date: '2012-01-20T23:28:33+04:00'
uri: 'apps/bumblebee-3-0-nvidia-optimus-v-ubuntu'
alias: 
  - 'apps/bumblebee-3.0-nvidia-optimus-v-ubuntu.html'
tags: 'NVIDIA Optimus,Nouveau,Bumblebee'
source: 'http://www.webupd8.org/2012/01/bumblebee-30-released-nvidia-optimus.html'
unixtime: 1327087713
visits: 14540
---
Представлена новая версия Bumblebee – неофициальной утилиты для реализации поддержки технологии Nvidia Optimus на портативных компьютерах с Ubuntu и другими дистрибутивами Linux.

Суть технологии Nvidia Optimus заключается в продлении времени жизни ноутбука, за счёт автоматической регуляции загрузки графического процессора, что позволяет оптимально использовать заряд батареи.

![](img/2012/01/20/23-00/nvidia-optimus-5757103083-o.jpg)

Официально Nvidia Optimus доступна только для работы под операционной системой Windows 7, поэтому для получения этой востребованной характеристики под Ubuntu / Linux и был создан проект Bumblebee.

## Что нового в Bumblebee 3.0 «Tumbleweed»:

*   Клиентская и серверная часть были полностью переписаны на C, что позволило увеличить производительность и стабильность работы
*   Автоматические менеджеры управления питанием bbswitch и vga\_switcheroo (для Nouveau)
*   Улучшенный механизм обнаружения ошибок и вывода уведомлений
*   Улучшена интеграция с системой
*   Поддержка драйвера [Nouveau](http://ru.wikipedia.org/wiki/Nouveau) для пакета из Ubuntu PPA
*   «optirun --status» теперь показывает статус Bumblebee и GPU используемой системы
*   Упрощена конфигурация Xorg, что позволяет использовать его с настройками по умолчанию
*    Полный список нововведений можно найти [тут](http://bumblebee-project.org/release-notes-3.0).

[Установить](https://github.com/Bumblebee-Project/Bumblebee/wiki/Install-and-usage) Bumblebee 3.0 «Tumbleweed» в Ubuntu можно из следующего PPA: [launchpad.net/~bumblebee/+archive/stable](https://launchpad.net/~bumblebee/+archive/stable)
