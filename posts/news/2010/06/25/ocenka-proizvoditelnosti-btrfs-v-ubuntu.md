---
title: 'Оценка производительности Btrfs в Ubuntu '
date: '2010-06-25T22:45:47+04:00'
uri: 'news/ocenka-proizvoditelnosti-btrfs-v-ubuntu'
alias: 
  - 'news/404.html'
tags: 'null'
source: 'http://www.opennet.ru/opennews/art.shtml?num=27082'
unixtime: 1277491547
visits: 2612
---
Несколько дней назад в инсталляторе экспериментальной версии Ubuntu 10.10 [была реализована](https://lists.ubuntu.com/archives/ubuntu-devel/2010-June/030918.html) поддержка установки системы на  дисковые разделы с файловой системой Btrfs. Ресурс Phoronix не упустил шанс провести  тестирование производительности Btrfs в последней тестовой сборке Ubuntu 10.10, базирующейся на Linux-ядре 2.6.35 (релиз ожидается через несколько месяцев).

Тестирование показало, что разработчики Btrfs не теряли зря времени и провели в Linux-ядре 2.6.35 большую работу по оптимизации производительности - во всех проведенных тестах (IOzone, Dbench, FS-Mark и PostMark), Btrfs не только не отстала от EXT4, но и обогнала последнюю в 5 тестах. При включении в Btrfs встроенной поддержки хранения данных в сжатом виде, наблюдавшийся небольшой разрыв в несколько процентов в 4 тестах сменился значительным превосходством. Например, в тесте IOzone Btrfs обогнала EXT4 в 5 раз, а в тесте FS-Mark - в два раза. Но не обошлось и без ложки дегтя, в тесте PostMark производительность Btrfs со включенным сжатием оказалась ниже EXT4 и Btrfs без сжатия на 65%.