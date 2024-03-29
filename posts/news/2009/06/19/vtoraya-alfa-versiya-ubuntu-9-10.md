---
title: 'Вторая альфа версия Ubuntu 9.10'
date: '2009-06-19T09:59:57+04:00'
uri: 'news/vtoraya-alfa-versiya-ubuntu-9-10'
alias: 
  - 'news/96.html'
tags: '9.10,Ubuntu Linux,альфа'
source: 'http://www.opennet.ru/opennews/art.shtml?num=22125'
unixtime: 1245391197
visits: 900
---
[Доступна](http://www.mail-archive.com/ubuntu-devel-announce@lists.ubuntu.com/msg00346.html)  вторая альфа версия [Ubuntu 9.10](http://www.ubuntu.com/testing/karmic/alpha2). Во второй альфа версии продолжена работа по обновлению версий программ в пакетах.

Основные улучшения:

*   Продолжена работа по замене некоторых подсистем HAL (Hardware Abstraction Layer). Вместо HAL для управления питанием и обработки спецклавиш (Fn) на ноутбуках задействованы “DeviceKit-power” и “udev-extras”;
*   Для видеодрайверов Intel по умолчанию активирована архитектура акселерации UXA (UMA Acceleration Architecture), базирующейся на использовании системы управления памятью GEM;
*   При установке по умолчанию предлагается использовать файловую систему ext4;
*   Переход на версию набора компиляторов GCC 4.4 для пересборки пакетов;
*   Переход на Linux ядро 2.6.30, Firefox 3.5 и GNOME 2.28 (в состав дистрибутива пока входят тестовые версии версия 2.6.30-rc5, firefox 3.5 beta4 и GNOME 2.27.1). Кроме того, [начата](https://blueprints.launchpad.net/ubuntu/+spec/desktop-karmic-gnome-3) работа по подготовке к переходу на GNOME 3;
*   Замена загрузчика на GRUB 2. Новый загрузчик будет установлен только для свежих инсталляций, при обновлении ранее установленной системы будет оставлена старая версия grub. В Grub2 используется новый загрузчик Multiboot2, имеется поддержка выполнения скриптов, динамической загрузки модулей, доступа к файлам на ФС NTFS, Reiserfs и данным внутри cpio/tar архивов, создания графических меню, вывода локализованного текста в отличных от ASCII кодировках.

Основные направления развития будущей версии: Для десктоп варианта ожидается продолжение работы по сокращению времени загрузки (к релизу 10.4 планируют уменьшить время загрузки до 10 сек.) и совершенствования дистрибутива для работы на мобильных интернет-устройствах (MID) и ультрапортативных компьютерах (UMPC). Для бесшовной загрузки в графическом режиме, без мерцания при переключении видеорежимов, USplash планируется заменить на систему Plymouth и задействовать возможность переключения видеорежимов на уровне ядра (kernel mode-setting). Серверный вариант дистрибутива планируют улучшить в плане работы в окружениях облачных вычислений (cloud computing), подобных Amazon EC2 (аренда виртуальной машины, предоставляемой в виде сервиса).

После выпуска 6 альфа версий первую бета-версию [планируют](https://wiki.ubuntu.com/KarmicReleaseSchedule) выпустить 1 октября, кандидат в релизы 22 октября, а релиз 29 октября. Дистрибутив будет поддерживаться до апреля 2011 года.
