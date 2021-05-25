---
title: 'Установка VLC 2.0 в Ubuntu 11.10'
date: '2012-02-20T22:49:41+04:00'
uri: 'apps/vlc-2-0-ubuntu-11-10'
alias: 
  - 'apps/vlc-2.0-ubuntu-11.10.html'
tags: 'VLC,Проигрыватель,11.10'
source: 'http://www.webupd8.org/2012/02/install-vlc-20-in-ubuntu-1110-oneiric.html'
unixtime: 1329763781
visits: 9345
---
Представлен релиз медиаплеера VLC 2.0 «Twoflower», вышедший с более быстрым многопоточным декодированием, поддержкой ещё большего числа видео форматов, переработанным веб-интерфейсом, экспериментальной поддержкой BluRay дисков и множеством других характеристик.

## Основные новшества в VLC 2.0

*   Экспериментальная поддержка Blu-Ray дисков
*   Поддержка потоковых форматов HTTP Live Streaming и Dynamic Adaptive Streaming
*   Поддержка множества новых устройств, в том числе и PulseAudio
*   Улучшено декодирование за счёт распараллеливания на несколько ядер, особенно для форматов H.264, VP3, VP8, JPEG-2000, Mpeg-4 ASP/DivX и RV3/RV4.
*   Экспериментальная поддержка декодирования с помощью карт Broadcom CrystalHD.
*   Новый модуль для декодирования EBU субтитров (.stl)
*   Поддержка открытого видео кодека Lagarith Lossless
*   Поддержка обложек в файлах wma/wmv/asf.
*   Улучшенная работа с метаданными в файлах формата Monkey’s Audio
*   Значительным улучшением стала поддержка работы с главами / сегментами в Matroska (mkv).
*   Переработанный Qt интерфейс
*   Полностью переписанный веб-интерфейс с использованием фреймворка jQuery.
*   Поддержка Vorbis и Theora для протокола RTP
*   Полный список изменений здесь.

## Установка VLC 2.0 в Ubuntu 11.10 Oneiric Ocelot

Установить VLC 2.0 в Ubuntu 11.10 можно воспользовавшись PPA, выполнив команды ниже:

```
sudo add-apt-repository ppa:n-muench/vlc
 sudo apt-get update
 sudo apt-get dist-upgrade
 sudo apt-get install vlc
```

Пользователи Ubuntu 12.04 могут просто поставить из центра приложений.