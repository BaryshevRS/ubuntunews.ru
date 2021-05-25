---
title: 'Wireshark 1.6.1 - установка анализатора трафика в Ubuntu 11.04'
date: '2011-07-24T18:39:57+04:00'
uri: 'apps/install-wireshark-1-6-1-using-ubuntu'
alias: 
  - 'apps/install-wireshark-1-6-1-using-ubuntu.html'
tags: 'Wireshark,Сниффер'
source: 'http://www.ubuntugeek.com/how-to-install-wireshark-1-6-1-using-ubuntu-ppa.html'
unixtime: 1311518397
visits: 23528
---
[Wireshark](http://www.wireshark.org/) – одно из лучших приложений анализа сетевого трафика. Позволяет перехватывать и просматривать, в интерактивном режиме, детальную информацию о существующем трафике в компьютерной сети.

[![Wireshark 1.6.1 - установка анализатора трафика в Ubuntu 11.04 ](img/2011/07/24/18-00/wireshark-5969866445-o.jpg)](img/2011/07/24/18-00/wireshark-5969866445-o.jpg)

## Основные характеристики Wireshark:

*   Поддержка сотен протоколов, число которых постоянно обновляется
*   Перехват трафика с возможностью сохранения и последующим оффлайн анализом.
*   Кроссплатформенность: Windows, Linux, OS X, Solaris, FreeBSD, NetBSD и под многие другие операционные системы
*   Анализ VoIP трафика
*   Просмотр перехваченного сетевого трафика через GUI, или через TTY-режим утилиты Tshark
*   Мощный настраиваемый фильтр
*   Запись и чтение различных форматов данных, созданных как самим приложением, так и сторонними утилитами: tcpdump (libpcap), Pcap NG, Catapult DCT2000, Cisco Secure IDS iplog, Microsoft Network Monitor, Network General Sniffer, Sniffer Pro, and NetXray, Network Instruments Observer, NetScreen snoop, Novell LANalyzer, RADCOM WAN/LAN Analyzer, Shomiti/Finisar Surveyor, Tektronix K12xx, Visual Networks Visual UpTime, WildPackets EtherPeek/TokenPeek/AiroPeek и многих других.
*   Разархивирование сжатых файлов в формате gzip на лету.
*   Поддержка чтение трафика через протоколы: Ethernet, IEEE 802.11, PPP/HDLC, ATM, Bluetooth, USB, Token Ring, Frame Relay, FDDI и многие другие (не зависимо от используемой платформы).
*   Дешифровка различных протоколов: IPsec, ISAKMP, Kerberos, SNMPv3, SSL/TLS, WEP и WPA/WPA2
*   Возможность экспорта данных в XML, PostScript, CSV или текстовый файл.

## Установка wireshark 1.6.1 в Ubuntu 11.04 из PPA

```
sudo add-apt-repository ppa:n-muench/programs-ppa
sudo apt-get update
sudo apt-get install wireshark
```
