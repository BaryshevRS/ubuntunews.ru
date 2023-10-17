---
title: 'Сравнение производительности ОС FreeBSD 7.2, 8.0-RC и Ubuntu 9.10 alpha 6'
date: '2009-09-29T19:58:42+04:00'
uri: 'news/freebsd-7-2-8-0-rc-i-ubuntu-9-10-alpha-6'
alias: 
  - 'news/166.html'
tags: 'сравнение,Ubuntu Linux,альфа,9.10,FreeBSD'
source: 'http://www.linux.org.ru'
unixtime: 1254239922
visits: 1412
---
Тестирование проходило на 4-ядерном AMD Opteron.

*   FreeBSD 7.2: UFS2, gcc-4.2.1
*   FreeBSD 8.0-RC: UFS2, gcc-4.2.1
*   Ubuntu 9.10 alpha 6: Ext4, kernel-2.6.31, gcc-4.4.1

Результаты тестирования:

*   **Компиляция ImageMagick**: Linux в 1,5х быстрее FreeBSD 8, и в 1,9х быстрее 7.2
*   **LAME MP3**: Ubuntu Linux сжимал быстрее FreeBSD на 6%
*   **7-zip**: FreeBSD 7.2 впереди остальных на 7%
*   **Gzip**: BSD отстает на 20%
*   **LZMA**: 7.2 медленнее восьмерки на 15%, и медленнее Ubuntu на 20%
*   **POV-Ray** ray-tracing: Ubuntu быстрее конкурентов на 5-6%
*   **C-Ray** ray-tracing: FreeBSD впереди с отрывом на 23%
*   **John The Ripper**: равноправие
*   **dcraw** (RAW2PPM): FreeBSD 8 отстает от Linux на 16%
*   **MAFFT**: Ubuntu впереди с отрывом на 27%
*   **GraphicsMagick**(w/ OpenMP): FreeBSD отстают от Ubuntu на 8-12%
*   **BYTE Dhrystone 2**: Linux проваливается в производительности на треть
*   **BYTE Integer Arithmetic**: FreeBSD впереди на 2%
*   **Fhourstones**: Linux на 10% впереди FreeBSD 8, на 11% впереди FreeBSD 7.2
*   **SQLite**: У Linux регрессия
*   **[Stream Memory Bench](http://www.cs.virginia.edu/stream/)** (w/ OpenMP): Ubuntu в два раза быстрее FreeBSD 8
*   **Threaded I/O tester**
    *   64MB Write / 32 Threads: Linux быстрее в 2-2,5 раза.  
    *   64MB Random Write / 32 Threads: У FreeBSD регрессия
    *   64MB Read / 32 Threads: Ubuntu в 2 раза быстрее FreeBSD 7.2 и в 3 раза быстрее FreeBSD 8
