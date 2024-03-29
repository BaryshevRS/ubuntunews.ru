---
title: 'Вышла первая альфа-версия Ubuntu 11.04'
date: '2010-12-03T18:54:37+03:00'
uri: 'news/vyshla-pervaya-alfa-versiya-ubuntu-11-04'
alias: 
  - 'news/533.html'
tags: '11.04,альфа,Ubuntu Linux,дистрибутивы'
source: 'http://www.opennet.ru/opennews/art.shtml?num=28872'
unixtime: 1291391677
visits: 1423
---
[Увидела свет](https://lists.ubuntu.com/archives/ubuntu-devel-announce/2010-December/000793.html) первая альфа-версия Ubuntu 11.04 “Natty Narwhal” в которой [проведена](https://lists.ubuntu.com/archives/natty-changes/) синхронизация пакетной базы с Debian Unstable. Загрузочные iso-образы с тестовой версией Ubuntu 11.04 можно получить на данной странице.  Альфа-выпуск является достаточно сырым и незаконченным продуктом, который рекомендуется использовать только в целях тестирования и выявления ошибок, например, установив на USB Flash (iso-образ занимает больше обычного (716 Мб), поэтому может не вместиться на CD).  Ключевые новшества Ubuntu 11.04 alpha 1: 

*   В качестве десктоп-окружения по умолчанию использовано окружение Unity. Разработка Unity еще не завершена, поэтому представленное рабочее окружение не стоит судить строго. Уже интегрирован новый Unity Launcher, предназначенный для запуска приложений и переключения между активными задачами. В Launcher реализовано контекстное меню со списками быстрого вызова и добавлена возможность автоматического скрытия с экрана, но еще не готова функция группировки запускаемых приложений “Places”.
*   В экранном менеджере gdm теперь представлено два вида сессий: Ubuntu Desktop на базе Unity и Ubuntu Classic на базе классической панели GNOME. Классический режим поддерживает все видеокарты и может работать с любым видеодрайвером, для работы Unity обязательно наличие современных 3D-драйверов;
*   Переработан апплет для настройки сети (NetworkManager), который переведен на использование фреймворка для генерации индикаторов AppIndicator. Классические панельные GNOME-апплеты более не поддерживаются, доступна только новая система индикаторов Ubuntu;
*   В рамках проекта Xubuntu ведется работа по переходу на десктоп-окружение Xfce 4.8, в настоящее время уже заменены компоненты xfce4-notifyd, xfce4-appfinder, xfwm4, ristretto, xfce4-dev-tools и xfce4-volumed. Для обеспечения совместимости с Xfce 4.8 сборка Xubuntu продолжит использовать GTK2 и не перейдет на GTK3;
*   Осуществлен переход на Linux-ядро 2.6.37-rc3 (в Maverick использовалось ядро 2.6.35), в конечном счете в Ubuntu 11.04 планируется использовать ядро 2.6.38. В новой версии добавлена поддержка нового интерфейса нотификации FANOTIFY; проведена интеграция KMS+KDB; реализовано несколько улучшений, повышающих отзывчивость десктоп-приложений; обновлены многие отладочные инструменты; в состав ядра принят AppArmor (более не поставляется в виде отдельного патча); улучшена поддержка технологий виртуализации.

Подробный обзор планов, озвученных на саммите разработчиков Ubuntu, был представлен в прошлом анонсе. Посмотреть степень готовность тех или иных новшеств можно на [данной странице](https://blueprints.launchpad.net/ubuntu/natty/+specs).
