---
title: 'Ubuntu 9.10 перешел на стадию бета-тестирования'
date: '2009-10-02T19:40:23+04:00'
uri: 'news/ubuntu-9-10-pereshel-na-stadiu-beta-testirovaniya'
alias: 
  - 'news/169.html'
tags: '9.10,дистрибутивы,Ubuntu Linux,бета'
source: 'http://www.opennet.ru/opennews/art.shtml?num=23701'
unixtime: 1254498023
visits: 959
---
[Вышла](https://lists.ubuntu.com/archives/ubuntu-announce/2009-October/000125.html) бета версия [Ubuntu 9.10](http://www.ubuntu.com/testing/karmic/beta). На 22 октября [запланирован](https://wiki.ubuntu.com/KarmicReleaseSchedule) выход кандидата в релизы, а 29 октября ожидается выход релиза.

По сравнению с шестой альфа версией добавлены следующие новшества:

*   Улучшение инфраструктуры загрузки системы, реализовано новое графическое оформление процесса загрузки (Ubuntu Splash screen). Пользователь имеет возможность проконтролировать процесс загрузки в деталях, переключившись в первую виртуальную консоль;
*   Для поддерживающих технологию NX (Non-eXecutable) процессоров в Ubuntu ранее интегрирована поддержка режима выделения защищенных областей памяти, блокирующего выполнение в них кода и позволяющего защитить систему от некоторых типов эксплоитов. Отныне такая возможность добавлена и для систем без поддержки NX, которая реализована через программную эмуляцию (только для 32-разрядных ядер);
*   Добавлен режим блокирования загрузки модулей ядра, после завершения процесса загрузки системы. Функция предназначенная для защиты от внедрения руткитов серверных систем с неменяющимся аппаратным обеспечением. Включение режима производится через переменную /proc/sys/kernel/modules\_disabled, доступную только для однократной установки;
*   Включение по умолчанию для исполняемых файлов режима [PIE](http://en.wikipedia.org/wiki/Position-independent_code) (Position Independent Executable), защищающего исполняемые файлы от внедрения стороннего кода, благодаря случайному распределению адресного пространства. Дополнительно PIE-программы теперь собираются в флагом BIND\_NOW, позволяющим сократить число областей в памяти, в которых возможно внесение изменений для организации ответвления от хода выполнения программы, при применении основанных на попытках повреждения областей памяти эксплоитов.
*   На базе Kubuntu созданна специальная сборка  Kubuntu Netbook Edition, нацеленная на установку на устройствах с небольшим экранным разрешением;
*   Некоторые из используемых в Ubuntu 9.10 версий программ:  KDE 4.3 (Kubuntu), GNOME 2.28,  XFCE 4.6.1 (XFCE), OpenOffice.org 3.1.1, X.Org server 1.6.3, Apache 2.2, PostgreSQL 8.4, PHP 5.2.10, LTSP 5.1, GCC 4.4.1, glibc 2.10, Linux 2.6.31.1, Python 2.6.2

Обзор новшеств, появившихся в прошлых тестовых версиях можно найти на данной странице.