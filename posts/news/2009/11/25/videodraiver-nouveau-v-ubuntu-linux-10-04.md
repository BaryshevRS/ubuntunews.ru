---
title: 'Видеодрайвер Nouveau в Ubuntu Linux  10.04'
date: '2009-11-25T20:46:20+03:00'
uri: 'news/videodraiver-nouveau-v-ubuntu-linux-10-04'
alias: 
  - 'news/210.html'
tags: 'Nouveau,Драйвер,Ubuntu Linux,10.10'
source: 'http://www.linux.org.ru'
unixtime: 1259171180
visits: 1799
---
Из-за больших успехов в реализации 2D в драйвере [Nouveau](http://ru.wikipedia.org/wiki/Nouveau) было решено, что в Ubuntu 10.04 (Lucid Lynx) он будет использоваться по умолчанию. Также Canonical планирует интегрировать [Direct Rendering Manager](http://ru.wikipedia.org/wiki/Direct_Rendering_Manager#.D0.A1.D0.BE.D1.81.D1.82.D0.B0.D0.B2.D0.BB.D1.8F.D1.8E.D1.89.D0.B8.D0.B5) в Linux-ядро которое будет входить в Ubuntu 10.04.Основные детали в [Nouveau](http://ru.wikipedia.org/wiki/Nouveau):

*   Полная поддержка 2D функций: [EXA](http://en.wikipedia.org/wiki/EXA), [Xv](http://en.wikipedia.org/wiki/X_video_extension), [XRendR](http://ru.wikipedia.org/wiki/XRender)
*   Базовая поддержка 3D для чипов NV10 и старше (через [Gallium3D](http://ru.wikipedia.org/wiki/Gallium3D))
*   Поддержка KMS

К сожалению пока не начата реализация 3D, для чипов серии NV04/05 (видеокарты [Riva TNT](http://en.wikipedia.org/wiki/RIVA_TNT)/[TNT2](http://en.wikipedia.org/wiki/RIVA_TNT2)). Также пока не поддерживается такой функционал как [Gallium3D](http://ru.wikipedia.org/wiki/Gallium3D), как [OpenCL](http://ru.wikipedia.org/wiki/OpenCL).
