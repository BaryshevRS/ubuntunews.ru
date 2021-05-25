---
title: 'Обзор Ubuntu Touch 1.0'
date: '2013-10-22T22:24:59+04:00'
uri: 'news/obzor-ubuntu-touch-1-0'
alias: 
  - 'news/obzor-ubuntu-touch-1-0.html'
tags: 'Ubuntu Touch'
source: 'http://www.omgubuntu.co.uk/2013/10/ubuntu-touch-ready-prime-time'
unixtime: 1382466299
visits: 9515
---
Рассмотрим характеристики **Ubuntu Touch 1.0** — мобильной редакции Ubuntu, вышедшей 17 октября вместе с [Ubuntu 13.10](news/finalnyij-reliz-ubuntu-1310-saucy-salamander). Новая версия системы призвана расширить границы использования дистрибутива не только на десктопы или сервера, но и на устройства с сенсорным экраном.

<iframe src="http://www.youtube.com/embed/cr7sXf3OciY" frameborder="0" width="500" height="360"></iframe>

Ubuntu Touch 1.0 — это первый стабильный выпуск, чья разработка велась целых десять месяцев после анонса в начале января. На текущий момент компания Canonical не поставляет её в комплекте с какими-либо устройствами и поддерживает только четыре платформы:

*   Samsung Galaxy Nexus
*   LG Nexus 4
*   ASUS Nexus 7
*   Samsung Nexus 10

Их функциональность реализована практически полностью, за исключением разве что световых сенсоров и гироскопа.

Кроме того, энтузиастами также ведётся работа по адаптации ещё около 50 мобильных аппаратов от различных производителей, таких как HTC, Huawei, Motorola, Sony и т. п.

## Функционал

### Unity 8

Ubuntu Touch включает новую восьмую версию Unity, написанную с использованием технологий Qt/QML. Её ключевая характеристика заключается в адаптивном поведении интерфейса, меняющегося в зависимости от разрешения экрана. В настоящем релизе была реализована лишь частичная поддержка, ориентированная **только на смартфоны**. Полноценная работа на планшетах, десктопах и телевизорах ожидается позже.

В будущем особенность, отвечающая за изменение пропорций, при подключении к монитору через док-станцию, позволит превращать смартфон в полноценный компьютер. Достигаться это будет за счет подгрузки оптимального набора шаблонов для выбранного разрешения монитора.

[![](img/2013/10/22/22-00/9832319734.jpg)](img/2013/10/22/22-00/9832319734.jpg)

### Меньше Android

Другим важным моментом стало движение в сторону независимости от платформы Android. Во-первых, она теперь запускается [после старта Ubuntu](news/rokirovka-ubuntu-s-android-v-ubuntu-touch) (в начале разработки было наоборот) и работает параллельно в изолированном LXC-контейнере. Во-вторых, это включение по умолчанию фирменного дисплейного сервера [Mir](news/ubuntu-1310-budet-ispolzovat-mir-po-umolchaniyu), вместо SurfaceFlinger из Android.

### Пакеты Click

Для Ubuntu Touch был разработан новый формат [пакета Click](news/click-package-012-poyavilis-v-ubuntu-1310), предлагающийся в качестве альтернативы традиционному формату Deb, но совсем не как замена ему полностью. Главным его достоинством является отсутствие зависимостей от сторонних библиотек, кроме Ubuntu SDK, уже присутствующей в системе. Также можно отметить высокую скорость работы.

Как и во всей системе, для улучшения безопасности, пакеты Click получили дополнительный уровень изоляции в [AppArmor](http://ru.wikipedia.org/wiki/AppArmor). Эта защита позволяет установить уровень доступа для приложений, ограничивая область ресурсов, к которым можно обратиться.

### Обновление

Кроме нового формата пакета, Ubuntu Touch также получила ещё одно новшество, заключающееся в методе обновления. Оно теперь происходит через скачивание специального образа, а не за счёт установки каждого отдельного приложения через Apt.

Преимущество использования нового метода заключается в том, что все расчеты по генерации нужного образа со свежими данными лежат на стороне Canonical, а не на пользовательской системе. Так, если осуществлять обновление через Apt, то на смартфоне будет производиться сложная операция высчитывания необходимых зависимостей, что критично в плане производительности и энергоэффективности для подобного класса устройств. Кроме того, это также избавляет от ситуаций, когда требуется дополнительное разрешение конфликтов между пакетами.

Опционально доступна возможность автоматической установки и загрузки через беспроводные сети.

Тем не менее, механизм обновления через Apt по-прежнему присутствует и ничто не мешает им воспользоваться.

[![](img/2013/10/22/22-00/8702445455.jpg)](img/2013/10/22/22-00/8702445455.jpg)

## Недостатки

Несмотря на то, что Ubuntu Touch 1.0 — это стабильный релиз, он всё ещё требует множества доработок, которые будут реализованы уже в ходе следующего этапа разработки Ubuntu 14.04.

Кроме уже упомянутой поддержки только смартфонов, система отличается высоким энергопотреблением, скудным набором программ, отсутствием экрана блокировки и не до конца реализованным режимом «в полёте».

Нельзя сказать, что программ совсем нет. Стандартные приложения, такие как отправка SMS, звонки, калькулятор, будильник, адресная книга, редактор заметок, браузер и прочие уже присутствуют, хоть и обладают минимальным функционалом.

Подытоживая, можно сказать, что система уже приобрела необходимые очертания, но до повседневного использования ей всё ещё далеко.

Забрать можно из PPA, воспользовавшись инструкцией или посмотреть на десктопе, установив пакет unity8 из репозитория.