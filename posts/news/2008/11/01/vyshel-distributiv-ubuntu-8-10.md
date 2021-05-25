---
title: 'Вышел дистрибутив Ubuntu 8.10'
date: '2008-11-01T17:42:05+03:00'
uri: 'news/vyshel-distributiv-ubuntu-8-10'
alias: 
  - 'news/7.html'
tags: 'Ubuntu Linux,дистрибутивы,релиз,8.10'
source: ''
unixtime: 1225550525
visits: 1281
---
27 октября 2008 г. компания Canonical анонсировала выход новой версии Ubuntu 8.10 Desktop Edition и Ubuntu 8.10 Server Edition под кодовым названием Intrepid Ibex. Главный операционный директор и глава отделения сетевых сервисов Canonical Ltd Джейн Силбер (Jane Silber) считает что “Ubuntu 8.10 является прообразом совершенно другой, более мобильной среды настольных вычислений, которая будет разработана в ближайшие два года. Ubuntu 8.10 имеет множество функций, демонстрирующих будущие инновационные возможности Linux для настольных вычислительных систем”

**Основные новшества:**

\- Обновленные версии программ: Linux ядро 2.6.27, X.Org 7.4, GNOME 2.24, Samba 3.2;

\- Добавлен новый тип аккаунтов - guest для организации гостевого входа в систему, без права доступа к файлам других пользователей и без возможности сохранить что-либо на диске (для входа не нужен пароль, права максимально урезаны и все файлы автоматически удаляются после завершения сеанса);

\- В домашнюю директорию пользователя добавлен каталог “Private”, предназначенный для хранения приватных данных. Директория имеет права доступа 0700, запрещающие обращение к каталогу посторонним, а все данные внутри нее хранятся в зашифрованном виде.

\- инструмент для чистки мусора, остающегося после обновления дистрибутива до нового релиза (например, неиспользуемые пакеты и старые Linux ядра);

\- Уменьшение времени загрузки дистрибутива, загрузка многих компонент происходит уже после появления приглашения входа в систему. - - Особенно заметно увеличение скорости загрузки при использовании KDE;

\- Редизайн интерфейса программы установки. Увеличена скорость установки системы с DVD диска;

\- Запоминание параметров последней удачной загрузки (резервное копирование удачно загруженного ядра), позволяет выбрав в загрузчике пункт “Last successful boot” загрузить систему после неудачного обновления или сбоя. Новая опция позволила не сохранять в конфигурации загрузчика ссылки на старые версии ядра.

\- Новшества десктоп-окружения:

\- Обновление программ для настройки оборудования. В Network Manager 0.7 добавлены средства для настройки работы в 3G сетях, расширены возможности по конфигурированию PPP и PPPOE соединений, возможность одновременной активации нескольких соединений, возможность активации сетевого соединения до входа пользователя в систему. Добавлены средства автоматической конфигурации Xorg 7.4;

\- Графическая утилита для создания установочных образов для накопителей с USB интерфейсом (конвертер установочного LiveCD в LiveUSB);

\- Режим автоматической установки оптимальных драйверов, расширен поддержкой принтеров. Ранее была реализована поддержка автоустановки для графических карт и беспроводных устройств;

\- В файловом менеджере Nautilus появилась реализация табов;

\- Новый режим быстрого поиска пакетов в Synaptic, отображающий наиболее релевантные результаты по мере набора ключевых слов;

\- Упрощение установки Flash плагина (вместо загрузки с Adobe Download Page предлагается deb пакет) с возможностью выбора открытых альтернатив (Gnash, Swfdec);

\- Оптимизирована структура меню;

\- интеграция инструмента управления пакетами PackageKit. Главная цель проекта PackageKit - создание единой, унифицированной, оболочки для установки и обновления пакетов для всех Linux дистрибутивов. Для управления пакетами PackageKit использует стандартные средства - yum, apt, conary, box, alpm, smart, pisi, zypp и т.д. Формально, PackageKit представляет собой абстрактный слой для D-Bus, который позволяет пользователю управлять пакетами, через API, независимое от дистрибутива и архитектуры системы;

**Серверные возможности:**

\- Виртуализация: Virtual Machine builder - скрипт и web-интерфейс для создания образов виртуальных машин. интеграция в дистрибутив JeOS (Just Enough Operating System), представляющий собой сокращенный вариант Ubuntu, предназначенный для использования внутри виртуальных окружений. Теперь окружение JeOS можно установить из стандартного инсталлятора дистрибутива. Готовность стандартного ядра для работы в роли гостевой системы в Xen;

\- В состав включен полноценный открытый Java-стек на базе OpenJDK и Apache Tomcat 6.0;

\- Добавление поддержки Clamav и Spamassassin в базовый комплект Ubuntu Server, с целью упрощения быстрого развертывания полнофункционального почтового сервера.

\- интеграция dmraid, для поддержки RAID разделов созданных в BIOS Software RAID/FakeRAID;

\- Готовность типовой установки Ubuntu Server для работы в качестве LDAP сервера, без дополнительных ручных манипуляций. Переход на хранение конфигурации через “cn=config” (представлено в OpenLDAP 2.3) вместо slapd.conf;

\- В состав дистрибутива включена утилита pam-auth-update для настройки параметров PAM-аутентификации на десктоп системах и серверах;

Разное:

\- Пакет для автоматизированного тестирования работоспособности Ubuntu для мобильных платформ (например, проверка - все ли приложения работоспособны с низкими разрешениями дисплея, сенсорным экраном и экранной клавиатурой);

\- Для Linux ядра используемого на LiveCD задействован патч compcache , позволяющий экономить ОЗУ за счет сжатия данных, адресуемых в раздел подкачки;

\- Улучшены средства по управлению питанием;

\- интеграция технологии DKMS (Dynamic Kernel Module Support), позволяющей автоматически перестраивать текущие модули ядра с драйверами устройств после обновления версии ядра. Внедрение DKMS позволит автоматически устанавливать драйверы, которые необходимы для работы определенных аппаратных компонент текущей системы, но отсутствуют в стандартном Linux ядре. Для разработчиков, DKMS предоставляет средства создания драйверов без оглядки на особенности различных версий Linux ядра.