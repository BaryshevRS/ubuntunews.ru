---
title: 'TLP – утилита для автоматической настройки энергосбережения на ноутбуках'
date: '2013-04-18T20:37:05+04:00'
uri: 'apps/tlp-utilita-dlya-nastrojki-energosberezheniya-na-noutbukax'
alias: 
  - 'apps/tlp-utilita-dlya-nastrojki-energosberezheniya-na-noutbukax.html'
tags: 'TLP,Твикер,железо'
source: 'http://www.webupd8.org/2013/04/improve-power-usage-battery-life-in.html'
unixtime: 1366303025
visits: 23707
---
Существует множество различных настроек для экономии заряда батареи на портативных устройствах, таких как ноутбуки, лэптопы, нетбуки и т.п., но большинство из них завязаны на используемом железе или установленном Linux-дистрибутиве, поэтому установка энергосберегающих опций не всегда под силу обычным пользователям. На встречу решения этой проблемы пришла такая замечательная утилита, как TLP.

[![](img/2013/04/18/20-00/285653258.jpg)](img/2013/04/18/20-00/285653258.jpg)

**TLP** – мощная консольная утилита, позволяющая автоматически настроить эффективное энергопотребление, без привязки к конкретным дистрибутивам или аппаратным конфигурациям.

Таким образом, используя TLP можно просто и быстро оптимизировать питание системы, особо не вникая в тонкости опций своего ноутбука. Однако желающие могут [самостоятельно](http://linrunner.de/en/tlp/docs/tlp-linux-advanced-power-management.html) задать наиболее предпочтительные настройки, выбрав их под себя.

## Установка TLP в Ubuntu

Что надо сделать для начала:

*   удалить все энергосберегающие настройки и скрипты (например, в /etc/rc.local), иначе TLP не будет работать как надо;
*   удалить утилиту laptop-mode-tools.

Инсталляция доступна из PPA, используя команды ниже:

```
sudo add-apt-repository ppa:linrunner/tlp
sudo apt-get update
sudo apt-get install tlp tlp-rdw
```

TLP стартует вместе с запуском системы, поэтому после установки потребуется перезайти в сессию. Если этого делать не хочется, можно выполнить команду в терминале:

```
sudo tlp start
```

По желанию можно поставить ещё два пакета:

*   **smartmontools** – просмотр информации S.M.A.R.T;
*   **ethtool** – утилита для отключения Wake-on-LAN.

```
sudo apt-get install smartmontools ethtool
```

Владельцам ThinkPad также будет неплохо установить ряд утилит, выполнив в терминале:

```
sudo apt-get install tp-smapi-dkms acpi-call-tools
```
