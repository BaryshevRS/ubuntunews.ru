---
title: '10 популярных идей по усовершенствованию Ubuntu Linux.'
date: '2010-12-13T20:21:42+03:00'
uri: 'news/10-populyarnyh-idei-po-usovershenstvovaniu-ubuntu-linux'
alias: 
  - 'news/539.html'
tags: 'Ubuntu Linux'
source: 'http://www.opennet.ru/opennews/art.shtml?num=28975'
unixtime: 1292260902
visits: 1834
---
Мэт Зиммерман (Matt Zimmerman), технический директор компании Canonical, [опубликовал](http://mdzlog.alcor.net/2010/12/10/ubuntu-brainstorm-top-10-for-december-2010/) официальные отзывы представителей технического комитета Ubuntu на 10 популярных идей по развитию дистрибутива, опубликованных на страницах проекта [Ubuntu Brainstorm](http://brainstorm.ubuntu.com/). 

*   **Проведение оптимизации с целью уменьшения энергопотребления на ноутбуках.** Amit Kucheria, лидер рабочей группы по управлению питанием в проекте Linaro, [опубликовал](http://idlethread.blogspot.com/2010/12/prolonging-battery-life-on-your.html) подробный обзор различных техник уменьшения энергопотребления;
*   **Решение проблем с конфликтом IP-адресов в случае самовольного назначения пользователем в локальной сети уже занятого IP-адреса**. Разработчики были удивлены, увидев данное пожелание в топе популярных идей. Решение уже давно существует - это пакет [ipwatchd](http://ipwatchd.sourceforge.net/);
*   **Автоматический выбор доступного имени пользователя для входа**. Разработчики согласились, что в конфигурациях с одним единственным пользователем, нет смысла заставлять пользователя каждый раз выбирать свое имя, когда оно и так одно в списке;
*   **Создание отдельной пиктограммы для deb-пакетов**. Несмотря на то, что для установки пакетов рекомендуется использовать Software Center и APT, разработчики сочли разумной просьбу об отдельной визуальной идентификации deb-пакетов в файловом менеджере;
*   **Включение по умолчанию сервиса для синхронизации точного времени**. Разработчики отметили, что ntpdate поставляется в составе дистрибутива с незапамятных времен и запускается при каждой установке соединения (/etc/network/if-up.d/ntpdate). Несмотря на это, пожелание остается в топе популярных идей, что [потребовало](http://www.chiark.greenend.org.uk/ucgi/%7Ecjwatson/blosxom/ubuntu/2010-12-06-ntp-synchronisation-problems.html) дополнительного изучения причины возникающих проблем. Как оказалось, проблемы возникали из-за наличия пустого файла конфигурации /etc/ntp.conf (создавался пакетом ntpdate-debian), при наличии которого скрипт синхронизации времени считал, что на машине установлен NTP-сервер и пытался получить список NTP-серверов из этого файла, но так как файл был пустой синхронизация времени не происходила;
*   **Увеличение детализации вывода в системном мониторе GNOME**. По [мнению](http://www.ivankamajic.com/?p=560) представителя Canonical, то, что после закрытия окна пользователь не может сразу определить, завершило ли свою работу приложение или свернулось в трей, является серьезной проблемой юзабилити и требует решения;
*   **Полное удаление файлов конфигурации в процессе работы Ubuntu Software Center**. По умолчанию Software Center удаляет пакеты, оставляя файлы конфигурации и некоторые накопленные в процессе работы данные. Такое поведение полезно для администраторов, но вызывает недовольство обычных пользователей, не желающих захламлять систему остатками удаляемых пакетов. По мнению разработчиков в этом вопросе должен быть соблюден баланс: с одной стороны по умолчанию выполнять полную чистку, как того требуют пользователи, недопустимо, но с другой стороны вполне можно внести в настройки опциональный выбор метода удаления;
*   **Наглядное отображение активности сервиса Ubuntu One**. В настоящее время синхронизация файлов производится без дополнительных уведомлений, поэтому непонятно когда процесс синхронизации еще в работе, а когда он завершен. Разработчики уже планируют решить данный вопрос в будущем;
*   **Низкая производительность графической и мультимедиа подсистем дистрибутива**. Allison Randal, технический архитектор Ubuntu, [обрисовала](http://allisonrandal.com/2010/12/07/brainstorm-multimedia/) возможные причины проблем с производительностью при обработке мультимедийного контента и призвала пользователей участвовать в тестировании для выявления подобных проблем на ранней стадии.