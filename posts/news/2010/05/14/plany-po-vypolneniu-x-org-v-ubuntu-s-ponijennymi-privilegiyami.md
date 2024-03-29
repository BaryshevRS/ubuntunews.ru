---
title: 'Планы по выполнению X.Org в Ubuntu с пониженными привилегиями '
date: '2010-05-14T15:10:43+04:00'
uri: 'news/plany-po-vypolneniu-x-org-v-ubuntu-s-ponijennymi-privilegiyami'
alias: 
  - 'news/365.html'
tags: 'null'
source: 'http://www.opennet.ru/opennews/art.shtml?num=26565'
unixtime: 1273835443
visits: 1375
---
[Вышел](http://lists.freedesktop.org/archives/xorg-announce/2010-May/001311.html) релиз xorg-server 1.8.1, первый стабильный релиз серии 1.8.x. По сравнению с выпуском 1.8.0 в новой версии отмечено 69 исправлений, особое внимание при обновлении рекомендуется обратить на размещение файлов конфигурации в рамках директории xorg.conf.d, которые с момента прошлого выпуска были подвергнуты реструктуризации.

Следует отметить [инициативу](https://blueprints.edge.launchpad.net/ubuntu/+spec/desktop-maverick-rootless-x) по [избавлению](https://wiki.ubuntu.com/X/Rootless) будущих версий Ubuntu от необходимости запуска X-сервера с root-привилегиями.  В настоящий момент в Ubuntu уже используются работающие на уровне ядра KMS-модули (kernel mode-setting ) для карт Intel, AMD/ATI и NVIDIA, которые берут на себя все операции по взаимодействию с оборудованием, требующие повышенных прав доступа. В связи с этим на саммите разработчиков Ubuntu был утвержден план перевода X.Org Server для работы только под непривилегированным пользователем, что недавно было проделано разработчиками Intel для платформы Moblin.

Для VESA и проприетарных драйверов, не поддерживающих KMS, запуск X-сервера по прежнему придется инициировать от пользователя root, таким образом планируется обеспечить поддержку обоих режимов запуска. Пока не решено, будет ли данное новшество готово к моменту выпуска Ubuntu 10.10 или его придется отложить до релиза 11.04. Запуск от обычного пользователя потребует применения серии патчей к X-серверу, дисплейному менеджеру и модулям ядра, в которых еще не реализовано управление фоновой подсветкой.
