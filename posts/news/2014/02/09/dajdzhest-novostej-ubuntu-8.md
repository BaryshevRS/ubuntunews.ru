---
title: 'Дайджест новостей Ubuntu №8: LTS 12.04.4 и игры под Mir'
date: '2014-02-09T22:13:38+04:00'
uri: 'news/dajdzhest-novostej-ubuntu-8'
alias: 
  - 'podcast/dajdzhest-novostej-ubuntu-8.html'
tags: 'Дайджест,14.04,14.10,Mir'
source: ''
unixtime: 1391969618
visits: 26093
---
Последнее время было богато на события, например, был поднят вопрос о разработке собственного файлового менеджера, к поддержке Ubuntu Touch присоединился один из крупнейших операторов сотовой связи — Vodafone и сеть цифровых супермаркетов DNS начала поставку ноутбуков с Ubuntu. Не менее важной новостью также стал выход четвёртого обновления LTS 12.04.4.

### Ubuntu 12.04.4

Вышло четвертое и последнее обновление [Ubuntu 12.04](news/release-ubuntu-12-04-lts) Precise Pangolin.

В версии 12.04.4, кроме свежего набора программ, также доступна новая версия ядра 3.11 и загружен актуальный графический стек X.org. В связи с этим дистрибутив получил расширенную поддержку ещё более широкого спектра устройств.

[![](img/2014/02/09/22-00/6927618751.jpg "http://www.flickr.com/photos/77281299@N07/")](img/2014/02/09/22-00/6927618751.jpg)
 
Представленный релиз не говорит о том, что нужно переустанавливать систему. Все изменения доступны через штатную систему обновлений. Единственное, что новое ядро автоматически устанавливается только для тех пользователей, кто ставил дистрибутив из предыдущих подобных выпусков (12.04.3, 12.04.2), а для остальных эта возможность была сделана опциональной.

Команда для ручной установки нового ядра в 12.04:

```
sudo apt-get install linux-generic-lts-saucy xserver-xorg-lts-saucy
```

Из других изменений: загружены новые версии Firefox и Thunderbird и из Rhythmbox удалён плагин Ubuntu One Music Store.

Поддержка продлится до 2017 года, а следующий LTS выйдет уже в апреле.

<button>[Скачать Ubuntu 12.04.4](ubuntu/download)</button>

### Vodafone в CAG

**CAG (Canonical Carrier Advisory Group)** — это [группа заинтересованных операторов](news/8-krupnyix-operatorov-ubuntu-touch) сотовой связи, объединившихся с целью продвижения новой мобильной операционной системы Ubuntu. Вследствие чего они получают эксклюзивную информацию о разработке Ubuntu Touch и о заключенных партнёрских соглашений с производителями.

[![](img/2014/02/09/22-00/2487064919.jpg "http://www.flickr.com/photos/eriwst/")](img/2014/02/09/22-00/2487064919.jpg)
 
**Vodafone** — британская компания, являющаяся крупнейшим оператором в мире по объёму выручки, присоединилась к CAG. Согласно данным на конец сентября 2013 года — организация представлена в 30 странах и ещё в 50 заключены партнёрские соглашения. Общий охват клиентской базы на подконтрольных ею рынках составляет 411 миллионов человек.

Хотя это и не означает, что Vodafone будет заниматься распространением телефонов с Ubuntu, но сам этот факт подчёркивает высокий интерес, проявляемый к разработке новой операционной системы. Присоединение такого крупного партнёра говорит о хороших перспективах Canonical выстоять в высокой конкурентной борьбе на таком динамически развивающемся рынке.

### Ноутбуки DNS c Ubuntu

Сеть цифровых супермаркетов DNS представила модельный ряд фирменных ноутбуков, управляемых последней версий операционной системы Ubuntu 13.10.

[![](img/2014/02/09/22-00/dns-cubuntu-12415204333-o.jpg)](img/2014/02/09/22-00/dns-cubuntu-12415204333-o.jpg)

На сайте компании выделены такие ключевые особенности дистрибутива, как приятный интуитивно понятный интерфейс и большой выбор разнообразных программ, распространяемых совершенно бесплатно и доступных для установки по одному клику мыши.

Поставка устройств со свободным программным обеспечением довольно редкое явление, поэтому приятно осознавать, что такая крупная российская сеть будет заниматься реализацией ноутбуков с Ubuntu в своих магазинах.

### Игры под Mir

**Simple DirectMedia Layer (SDL)** — свободная кроссплатформенная мультимедийная библиотека, используемая в играх для предоставления доступа к аудио, устройствам ввода (мышь, клавиатура, джойстики) и графической подсистеме (через OpenGL), [получила поддержку](http://bregmatter.wordpress.com/2014/02/04/more-trusty-excitement/) дисплейного сервера Mir.

Эта технология используется в более чем 700 играх. В том числе и в Linux портах популярных изданий компании Valve. Поддержка Mir означает, что нативные игры в Unity 8 будут работать аналогично тому, как если бы они запускались на традиционном X-сервере.

Разработчик Canonical, ответственный за реализации описанной выше работы с сотрудниками Valve и SDL, представил результат в виде ролика запуска DOTA2 на Mir:

 <iframe src="https://www.youtube.com/embed/arDs7cMEobs" frameborder="0" width="500" height="281"></iframe>

## Идеи

### Отказ от Nautilus

В виду того, что в будущем нас ожидает конвергенция, в которую слабо вписываются старые приложения GNOME (GTK+), среди разработчиков [встал вопрос](http://www.webupd8.org/2014/02/ubuntu-1410-might-use-converged-qml.html) о судьбе файлового менеджера Nautilus.

В октябрьском релизе 14.10 ожидается включение новой версии десктоп оболочки Unity 8, написанной на Qt/QML. Nautilus же написан на GTK+ и, кроме того, путь его развития в последнее время расходится с мнением пользователей. Вследствие чего для дистрибутива Nautilus приходится постоянно дорабатывать. Последним таким патчем стало [добавление удалённого локального поиска](news/dajdzhest-novostej-ubuntu-7) по вводу символа.

Вопрос о замене **пока только обсуждается**, но, тем не менее, разработка фирменного файлового менеджера для мобильной редакции [уже ведётся](https://launchpad.net/ubuntu-filemanager-app).

### Тематические обои

Ещё одной идей предложенной разработчиками, стало [изменение правил конкурса](http://www.omgubuntu.co.uk/2014/02/ubuntu-14-04-wallpaper-contest-changes) обоев для рабочего стола. Для прошлых релизов присылались множество различных изображений, начиная от крупных планов цветов, растений и заканчивая фото гаек, болтов, лягушек и даже ботинок.

С текущего выпуска планируется ограничить загружаемые обои несколькими определёнными тематиками, объединёнными одной общей нитью. Что это будет — мы узнаем на следующей неделе.

### Поддержка Retina-дисплеев

Для Ubuntu 14.04 тестируется поддержка экранов высокой чёткости, отличающихся очень большой плотностью пикселей, не различимых человеческим глазом. Для этого [планируется](http://www.omgubuntu.co.uk/2014/02/ubuntu-14-04-high-resolution-retina-screen) использовать Cairo 1.3, который представляет собой инструмент для масштабирования векторной графики под высокие разрешения. Сейчас он был загружен для тестирования в PPA 14.04 и, в случае отсутствия проблем, будет включён в состав дистрибутива по умолчанию.

Однако отмечается, что даже в случае интеграции — результат не будет идеален. В Ubuntu в основном используются растровые картинки, поэтому при их масштабировании всё равно будут оставаться размытия или пикселизация.

Другие системы выходят из положения по-разному. GNOME, например, решает эту проблему переходом на векторные изображения, а в Mac OS X просто используется другой набор картинок, без использования технологий увеличения.

Пока это не так актуально, такие экраны пока ещё не получили широкого распространения, но всё может измениться в течение будущей пятилетней поддержки. Поэтому хорошо, что разработчики знают о сложившейся ситуации и ищут пути выхода из неё.

## Прочее

### Raspberry Pi

Кампания по сбору средств для [кластера из миникомпьютеров Raspberry Pi](news/dajdzhest-novostej-ubuntu-3) собрала необходимую сумму. Разработчиками уже собран каркас и размещены устройства, теперь осталось всё это окончательно объединить и начать компилировать пакеты Ubuntu для Pi.

[![](img/2014/02/09/22-00/raspberry-pi-ubuntu-12415203903-o.jpg)](img/2014/02/09/22-00/raspberry-pi-ubuntu-12415203903-o.jpg)

### Juju

**Juju** - это инструмент оркестровки от компании Canonical, помогающий интуитивно настроить и быстро развернуть облачное окружение. В этом году Juju стал победителем Cloud Awards 2013-2014 в номинации — «лучшая облачная система автоматизации». Конкурс проводится уже третий год подряд. В этом раз участие приняло более 200 претендентов в различных категориях.

## Периодика

### UserAndLINUX v14.02

Вышел февральский номер замечательного журнала UserAndLINUX v14.02. Тема выпуска: «OilRush - морская стратегия реального времени».

Содержание:

*   Linux, ты просто космос!
*   Марк Шаттлворт о будущем Ubuntu и о 2014 годе.
*   Color by Numbers — электронные раскраски для детей.
*   LMMS — ваша профессиональная студия по обработке звука.
*   EasyStroke — управляем компьютером с помощью жестов.
*   Читаем и конвертируем цифровые книги.

Из авторский статей можно выделить:

*   Lubuntu — лёгкая, красивая, твоя.
*   Разнообразие меню Linux.
*   Novena — свободу ноутбукам!
*   Emmabuntüs — это больше, чем Linux-дистрибутив.
*   Blackphone — предмет зависти шпионов и любителей конфиденциального общения.
*   Детальное знакомство с интерфейсом десктоп оболочки Unity. Занятие №3.
*   Android в корпоративном секторе.
*   Коллективный разум для роботов и множество других занимательных материалов.
