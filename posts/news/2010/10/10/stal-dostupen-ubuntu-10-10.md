---
title: 'Стал доступен Ubuntu 10.10'
date: '2010-10-10T15:54:39+04:00'
uri: 'news/stal-dostupen-ubuntu-10-10'
alias: 
  - 'news/495.html'
tags: 'Ubuntu Linux,10.10,Maverick Meerkat,релиз'
source: 'http://www.opennet.ru/opennews/art.shtml?num=28230'
unixtime: 1286711679
visits: 2378
---
Официально [доступен](https://lists.ubuntu.com/archives/ubuntu-announce/2010-October/000139.html) релиз Linux дистрибутива Ubuntu 10.10 “Maverick Meerkat”. Дистрибутив доступен в редакциях для десктопов, серверов, cloud-окружений (Server for UEC and EC2) и нетбуков (Netbook Edition). Одновременно выпущены релизы смежных проектов: [Kubuntu](http://www.kubuntu.org/) (KDE 4.5.1),  [Xubuntu](http://xubuntu.org/news/10.10-release) (XFCE 4.6), Mythbuntu, [Edubuntu](http://www.edubuntu.com/news/10.10-release) (с подборкой обучающего ПО) и [Ubuntu Studio](https://wiki.ubuntu.com/UbuntuStudio/) (для обработки мультимедиа информации).  Основные новшества Ubuntu 10.10: 

*   **Десктоп**
    *   В комплект включен новый свободный набор шрифтов Ubuntu, специально разработанный дизайнерской фирмой Dalton Maag по заказу компании Canonical. Пример начертания можно посмотреть здесь.
    *   Версия пользовательского окружения GNOME обновлена до релиза 2.32.0. Осуществлен переход на dconf и gsettings API;
    *   Замена в базовой поставке менеджера фотографий F-Spot на Shotwell;
    *   Интегрирован стек для поддержки мультитач навигации и управления жестами, что позволит существенно повысить удобство управления при использовании дистрибутива на интернет-планшетах и ноутбуках с современными сенсорными экранами. Подробнее см. здесь;
    *   Увеличена интеграция десктопа с сервисом Ubuntu One, добавлен новый метод подключения к сервису, улучшена поддержка Ubuntu One в файловом менеджере Nautilus, увеличена скорость синхронизации файлов, добавлена поддержка обмена ссылками в рамках музыкального архива Ubuntu One Music Store;
    *   Добавлен новый индикатор для управления звуком, который позволяет изменять уровень громкости и одновременно из панели управлять проигрыванием музыкальных композиций в плеере Rhythmbox. Индикатор поддерживает возможность замены оформления звукового апплета через установку визуальных тем ;
*   **Kubuntu**
    *   В качестве стандартного web-браузера отныне используется Rekonq, построенного с использованием QtWebKit и технологий KDE;
    *   В сборке Kubuntu используются KDE 4.5.1 и Qt 4.7;
    *   Произведена интеграция в один загрузочный образ редакций рабочего стола для десктопов (Plasma Desktop) и нетбуков (Plasma Netbook), при работе на нетбуке по умолчанию включается глобальное меню (вынос меню приложения в верхнюю панель на экране);
    *   Для настройки Bluetooth соединений по умолчанию задействован стек Bluedevil;
    *   Для управления звуком по умолчанию используется Pulseaudio;
    *   Увеличена скорость работы KPackageKit, изменен внешний вид программы установки.
*   **Xubuntu, Edubuntu**
    *   В Xubuntu проведена большая работа по исправлению ошибок, как в оболочке Xfce, так и в поставляемых программах. Десктоп-окружение Xfce обновлено до версии 4.6.2. В базовую поставку добавлено несколько новых приложений: медиа-плеер Parole поставляется вместо Totem Movie Player, программа для записи CD/DVD-дисков Xfburn вместо Brassero и менеджер процессов xfce4-taskmanager вместо Gnome-Task-Manager;
    *   В Edubuntu добавлена поддержка режима для автоматизации установки OEM-производителями. В состав включен пакет [Gnome Nanny](http://projects.gnome.org/nanny/), предназначенных для организации контроля родителями за активностью детей в системе: напирмер, можно ограничить время, которое ребенок можно проводить за компьютером, и включить фильтр для блокирования доступа ко взрослым сайтам;
    *   В Ubuntu Studio улучшена интеграция с Pulse Audio и JACK, при использовании JACK теперь не отключается работа Pulse Audio и данные системы могут сосуществовать бок о бок, если используют разные звуковые интерфейсы. Для настройки сетевых соединений теперь задействован gnome-network-admin;
    *   Mythbuntu осуществлен переход на MythTV 0.23.1, добавлена новая утилита для резервного копирования.
*   **Сервер**
    *   Интегрирован cloud-init, конфигурируемый процесс инициализации, оптимизированный для обеспечения загрузки образов для cloud-окружений. Cloud-init позволяет унифицировать процесс задания конфигурации во время загрузки, таких как локаль, имя хоста, SSH-ключи и точки монтирования;
    *   Интеграция pv-grub позволило для Cloud-образы использовать отдельные версии Linux-ядра, которое может обновляться через пакетный менеджер apt;
    *   Cloud-образы (AMI - Amazon Machine Image) теперь могут выполняться вне окружений UEC или Amazon EC2, что позволяет тестировать их без регистрации отдельного окружения, запуская из под управлением стандартной системы вирутализации KVM;
    *   В рамках акции “Ubuntu Server on Cloud 10”, пользователям предоставляется возможность бесплатного часа тестирования Ubuntu 10.10 Server Edition в Amazon EC2;
    *   В Ubuntu Enterprise Cloud добавлена поддержка virtio, нового управляющего интерфейса, унифицирующего процесс администрирования различных систем виртуализации и позволяющий запускать Ubuntu Enterprise Cloud c USB Flash.
    *   В состав включена новая версия открытой платформы для организации облачных вычислений - Eucalyptus 2.0;
    *   Интегрирована поддержка файловых систем GlusterFS и Ceph.
*   **Поддержка нетбуков**
    *   В Ubuntu Netbook Edition по умолчанию задействован легковесный интерфейс Unity, оптимизированный на максимальное увеличение доступного вертикального пространства на рабочем столе и реализующий технологию глобального меню.
    *   Индикатор времени теперь включает в себя полноценный виджет для работы с календарем.
    *   В качестве базового музыкального проигрывателя задействован Banshee, в качестве программы для чтения почты - Evolution Express.
    *   Для управления фотографиями осуществлена миграция на программу Shotwell.
    *   План по использованию Chromium в качестве браузера по умолчанию отменен, как и раньше в поставку входит Firefox; 
        
*   **Программы и драйверы**
    *   Осуществлен переход на Linux-ядро 2.6.35;
    *   Обновлены версии программ: Apache 2.2.16, PostgreSQL 8.4.4, PHP 5.3.3, LTSP 5.2.4, Linux-ядро 2.6.35.3, GCC 4.4.4 (по умолчанию) / 4.5.1 (дополнительно), eglibc 2.12.1, Python 2.6.6 (по умолчанию) / 3.1.2 (дополнительно);
    *   В клиенте микроблогинга Gwibber добавлена поддержка изменений в механизме аутентификации в Twitter, задействован новый метод хранения данных и увеличена производительность;
*   **Инсталлятор**
    *   Проведена оптимизация внешнего вида и юзабилити программы установки;
    *   Добавлена поддержка установки системы на раздел с файловой системой Btrfs;
    *   Поддержка параллельного одновременного выполнения разных задач в процессе установки. Например, настроить не связанные с разбиением диска параметры (раскладка клавиатуры, часовой пояс, имя пользователя, пароль и т.п.) можно уже после начала копирования файлов;
    *   Автоматизация определения часового пояса, языка и параметров локализации в зависимости от IP-адреса пользователя;
    *   Появление на экране подтверждения начала установки (“Preparing to Install Ubuntu”) опций, позволяющих сразу установить набор необходимых проприетарных компонентов (мультимедиа кодеки, драйверы, шрифты, Adobe Flash Java, DVD) и загрузить накопившиеся с момента выпуска установочного образа обновления;
    *   Переработан диалог выбора дискового раздела для установки;
    *   Появилась возможность автоматического подбора оптимальной раскладки клавиатуры, пользователю предлагается лишь нажать серию заданных клавиш;
    *   Возможность настройки подключения к беспроводной сети в процессе установки;
    *   В форме выбора логина и пароля появилась возможность создать ассоциированную с пользователем картинку, сделав снимок через встроенную в ноутбук web-камеру. Можно сразу выбрать режим автологина, при котором не требуется ввод пароля для начала работы с десктопом. Там же можно сразу включить шифрование домашней директории.
*   **Организация дистрибутива, управление пакетами**
    *   Изменение компоновки интерфейса менеджера установки программ Software Center. На базовом экране центра установки приложений Software-Center, после списка категорий, добавлено два новых блока: “Featured” и “Whats New” с подборкой рекомендуемых и новых приложений. Увеличена скорость выполнения операций и отзывчивость интерфейса. Расширены возможности, связанные с просмотром истории операций (в какое время и какие пакеты были установлены, удалены и обновлены). Реализован интерфейс плагинов, позволяющий подключить дополнения, расширяющие возможности Software-Center.
    *   В менеджере установки приложений Software Center появилась функция прямой установи deb-пакетов с диска (используется по умолчанию вместо Gdebi), а также реализована возможность приобретения платных программ;
    *   Проведена работа по включению [дополнительных механизмов](https://wiki.ubuntu.com/SecurityTeam/Roadmap/KernelHardening) по увеличению безопасности, разработанных в рамках проекта Yama. В частности, ограничено использование отладочного вызова PTRACE, добавлена защита от атак, связанных с установкой символических и жестких ссылок. Подробнее о реализованных механизмах можно прочитать здесь.
