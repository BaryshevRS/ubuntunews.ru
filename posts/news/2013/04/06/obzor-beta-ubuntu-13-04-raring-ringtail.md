---
title: 'Обзор бета-версии Ubuntu 13.04 Raring Ringtail'
date: '2013-04-06T16:31:23+04:00'
uri: 'news/obzor-beta-ubuntu-13-04-raring-ringtail'
alias: 
  - 'news/obzor-beta-ubuntu-13-04-raring-ringtail.html'
tags: 'бета,13.04'
source: 'http://www.webupd8.org/2013/04/ubuntu-1304-raring-ringtail-final-beta.html'
unixtime: 1365251483
visits: 14845
---
Представлен первый и единственный официальный бета-релиз Ubuntu 13.04 Raring Ringtail, включающий множество новых характеристик и оптимизаций, которые сейчас и рассмотрим.

[![](img/2013/04/06/16-00/ubuntu-13-1-8623530205-o.jpg)](img/2013/04/06/16-00/ubuntu-13-1-8623530205-o.jpg)

В действительности, это уже второй бета-выпуск, однако первый был больше условной контрольной точкой для заморозки характеристик, [аналогичной альфа-выпускам](news/itogi-uds-13-04). Такую модель релизов приняли для усиленного тестирования с целью повышения стабильности сборок. Тем не менее, бета-релизы было решено оставить для того, чтобы широкая масса пользователей могла выявить оставшиеся недочёты и шероховатости.

Больше никаких новых характеристик мы уже не увидим. Всё, что описано ниже войдёт в состав финального релиза, за исключением тех случаев, если не будут выявлены критические ошибки.

[Видео](//www.youtube.com/watch?v=GEaycPif5fM) с демонстрацией работы:

<iframe src="https://www.youtube.com/embed/GEaycPif5fM" frameborder="0" width="500" height="281"></iframe>

## Unity

В Unity появились две новые характеристики, позволяющие упростить переключение между несколькими открытыми окнами.

*   **Контекстное меню:** теперь можно легко переключаться между окнами открытого приложения, просто выбрав соответствующий пункт.
*   **Прокрутка мышью:** второй вариант заключается в прокрутке колёсика мыши над значком на панели Unity, что позволяет переключить фокус на нужное окно программы.

[![](img/2013/04/06/16-00/ubuntu-13-15-8624632446-o.jpg)](img/2013/04/06/16-00/ubuntu-13-15-8624632446-o.jpg)

Также стоит отметить обновлённое превью в режиме группировки окон (Super – W), получившее при наведении оранжевую подсветку и вывод заголовка окна.

[![](img/2013/04/06/16-00/ubuntu-13-7-8624633048-o.jpg)](img/2013/04/06/16-00/ubuntu-13-7-8624633048-o.jpg)

Различные улучшения пользовательского интерфейса:

*   Новые иконки для панели Unity, включая значок главного меню (логотип Ubuntu), линз и приложений, таких как центр обновлений, центр приложений и Nautilus;

[![](img/2013/04/06/16-00/ubuntu-13-13-8624632632-o.jpg)](img/2013/04/06/16-00/ubuntu-13-13-8624632632-o.jpg)

*   Новая анимация максимизации окон, которая показывает превью окна при масштабировании;

[![](img/2013/04/06/16-00/ubuntu-13-2-8624633382-o.jpg)](img/2013/04/06/16-00/ubuntu-13-2-8624633382-o.jpg)

*   Лимит значков панели Unity убран с 32 до 8 пикселей.
*   Новые диалоги выхода из системы.

[![](img/2013/04/06/16-00/ubuntu-13-6-8624633112-o.jpg)](img/2013/04/06/16-00/ubuntu-13-6-8624633112-o.jpg)

*   Увеличена скорость анимации при прокрутке к концу списка значков панели Unity в то время, когда их число превышает доступное место на экране.

Кроме того, иконка переключения рабочих столов теперь стала зависеть от того в каком из них она находится в данный момент.

[![](img/2013/04/06/16-00/ubuntu-13-9-8623529513-o.jpg)](img/2013/04/06/16-00/ubuntu-13-9-8623529513-o.jpg)

Однако по умолчанию она была выключена, но её можно легко включить из настроек внешнего вида на вкладке поведение.

### Dash

Также отдельно рассмотрим главное меню (Dash), в котором было сделано множество оптимизаций скорости работы, поиска и превью. Последнее получило обновлённую анимацию и дизайн, а также в Dash появилась поддержка фирменных скроллбаров.

[![](img/2013/04/06/16-00/ubuntu-13-14-8623529167-o.jpg)](img/2013/04/06/16-00/ubuntu-13-14-8623529167-o.jpg)

Одним из самых замечательных нововведений стало добавление маленькой библиотеки под названием **«libcolumbus»**, которая позволяет находить желаемый результат даже, несмотря на опечатку в запросе. Например, «gdit» вместо «gedit».

### Апплеты-индикаторы

Был окончательно и полностью удалён системный трей, вместе совсем своим наследием, включая такой индикатор, до этого работавший в режиме совместимости, как Bluetooth.

Такое решение было принято потому, что закончилась двухлетняя поддержка, в течение которой все заинтересованные авторы приложений уже давно могли сделать необходимые изменения.

Тем не менее, для приложений, написанных на Java и для Windows-приложений, работающих в Wine, работа с системным треем прописана жестко. Так что изменения этих программ не коснутся. То же относится и к приложениям на базе Qt, имеющим поддержку автоматической конвертации в соответствующие апплеты с помощью пакета «sni-qt».

[![](img/2013/04/06/16-00/ubuntu-13-4-8623529873-o.jpg)](img/2013/04/06/16-00/ubuntu-13-4-8623529873-o.jpg)

[![](img/2013/04/06/16-00/ubuntu-13-3-8624633274-o.jpg)](img/2013/04/06/16-00/ubuntu-13-3-8624633274-o.jpg)

Рассмотрим новые индикаторы, включённые по умолчанию:

*   **Bluetooth**: вместо удалённого апплета теперь будет использоваться новый – оптимизированный и избавившийся от старого кода.
*   **Меню синхронизации**: это ещё один новый индикатор, интегрирующийся с различными облачными сервисами хранения данных, такими как Ubuntu One и Dropbox.

## Системные параметры

### Внешний вид

На вкладке внешнего вида были добавлены две новые опции, такие как показ на панели Unity значка перехода на рабочий стол и значка переключения между рабочими столами.

[![](img/2013/04/06/16-00/ubuntu-13-8-8623529573-o.jpg)](img/2013/04/06/16-00/ubuntu-13-8-8623529573-o.jpg)

### Сетевые учётные записи

Теперь для онлайн-аккаунтов можно включить или отключить авторизацию в приложениях, поддерживающих с ним работу. Так, например, можно отключить Gwibber для учётной записи Twitter.

[![](img/2013/04/06/16-00/ubuntu-13-10-8624632872-o.jpg)](img/2013/04/06/16-00/ubuntu-13-10-8624632872-o.jpg)

### Сведения о системе

В сведения о системе добавлен пункт лицензионного соглашения, который до этого момента можно было наблюдать в правом нижнем углу главного меню.

[![](img/2013/04/06/16-00/ubuntu-13-11-8623529427-o.jpg)](img/2013/04/06/16-00/ubuntu-13-11-8623529427-o.jpg)

## Приложения

Рассмотрим, какие изменения коснулись приложений по умолчанию:

*   В LibreOffice возвращена поддержка глобально меню и включена поддержка HUD по умолчанию.
*   Удалена линза Gwibber, а также из программы вынесен код для работы с онлайн-аккаунтами в отдельный сервис «Friends». Кроме того, уже подготовлена QML версия под названием «Friends», которая возможно заменит клиент в финальном релизе дистрибутива.
*   Nautilus 3.6.3 получил поддержку рекурсивного поиска по подпапкам, а также была восстановлена до этого удалённая функция создания пустого файла.

[![](img/2013/04/06/16-00/ubuntu-13-12-8623529357-o.jpg)](img/2013/04/06/16-00/ubuntu-13-12-8623529357-o.jpg)

*   Интерфейс центра обновлений получил более компактный и структурированный вид.
*   В пользу веб-приложения из плеера Rhythmbox удалена интеграция с Ubuntu One Music Store.

Версии других приложений: веб-браузер Firefox 19.0.2, почтовый клиент Thunderbird 17.0.4, офисный пакет LibreOffice 4.0.1, центр обновлений 5.6.0, Transmission 2.77, Deja Dup 26.0, Shotwell 0.14.0, плеер Rhythmbox 2.98, текстовый редактор Gedit 3.6.2, Brasero 3.6.1 и Empathy 3.6.4. Всё это поверх Unity 6.12 и GTK3+ 3.6.4.

Системные компоненты: ядро 3.8.0 (Ubuntu Linux Kernel), основанное на Linux 3.8.5, Xorg server 1.13.3 и Mesa 9.0.3.

## Прочее

В рамках проекта адаптации Ubuntu для мобильных устройств была проделана значительная работа по оптимизации системы, выразившаяся в различных фиксах и устранениях утечек памяти. Это в конечном итоге привело к уменьшению занимаемой памяти и улучшению отзывчивости интерфейса.

**Другие изменения:**

*   Включён по умолчанию Intel SNA (2D акселератор, улучшающий производительность X.Org для драйверов Intel);
*   Gvfs получил поддержку протокола MTP в качестве бэкенда, позволив упростить подключение устройств с Android 4.0.
*   Множество оптимизаций для мультимониторных конфигураций.
*   Традиционно новый пак обоев.

## Скачать бета-версию Ubuntu 13.04 Raring Ringtail

Релиз более чем стабилен, однако разработчики отвели ещё несколько недель на поиск и выявление ошибок пользователями, так что попробовать можно уже сейчас.

<button>[Скачать бета-версию Ubuntu 13.04 Raring Ringtail](http://releases.ubuntu.com/13.04/)</button>

Также были представлены и другие версии производных дистрибутивов, включая китайский Kylin, Kubuntu, Lubuntu, Xubuntu и т. д. Скачать их можно по ссылке ниже:

[https://wiki.ubuntu.com/RaringRingtail/TechnicalOverview](https://wiki.ubuntu.com/RaringRingtail/TechnicalOverview)

**Финальный релиз выйдет по расписанию - 25 апреля**
