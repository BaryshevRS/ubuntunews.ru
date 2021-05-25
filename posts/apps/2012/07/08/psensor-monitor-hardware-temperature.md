---
title: 'Psensor – утилита для мониторинга температуры компонентов ПК'
date: '2012-07-08T18:56:49+04:00'
uri: 'apps/psensor-monitor-hardware-temperature'
alias: 
  - 'apps/psensor-monitor-hardware-temperature.html'
tags: 'Psensor,Мониторинг,Unity'
source: 'http://www.webupd8.org/2012/07/monitor-hardware-temperature-in-ubuntu.html'
unixtime: 1341759409
visits: 13538
---
**Psensor** – программа для мониторинга температуры различных аппаратных компонентов, таких как процессор, видеокарта, жесткие диски и т. п. Утилита обладает хорошей поддержкой Unity, позволяя отслеживать максимальную температуру на счётчике значка, а также просмотреть полную информацию из апплета-индикатора.

[![](img/2012/07/08/18-00/psensor-7527832570-o.jpg)](img/2012/07/08/18-00/psensor-7527832570-o.jpg)

### Что отслеживает:

*   температуру материнской платы и ЦПУ
*   температуру GPU видеокарт Nvidia
*   в качестве экспериментальной поддержки температуру GPU видеокарт ATI/AMD (не доступна из Ubuntu PPA, так как требует собранный libatiadlxx)
*   температуру жестких дисков
*   скорость вентиляторов
*   процент использования ЦПУ

 В программе можно включить уведомления при достижение определённого порогового значения температуры. Опция не включена по умолчанию, для этого нужно зайти в параметры датчика и выставить соответствующие значения.

Также в параметрах Psensor можно настроить внешний вид и скрытие окна при запуске.

[![](img/2012/07/08/18-00/psensor-1-7527827034-o.jpg)](img/2012/07/08/18-00/psensor-1-7527827034-o.jpg)

## Установка Psensor в Ubuntu

**1**. В первую очередь поставим lm-sensors и hddtemp. Пакеты нужные для отслеживая ЦПУ, жестких дисков и материнской платы.

```
sudo apt-get install lm-sensors hddtemp
```

**2.** Настроим их.

```
sudo sensors-detect
```

На все поросы отвечаем **«yes»**.

Перегружаем компьютер или перезапускаем модуль требуемый для датчиков:

```
sudo service module-init-tools start
```

**3.** Устанавливаем Psensor

Установка доступна из центра приложений для версий Ubuntu, начиная с 11.10.

Также можно поставить из PPA, используя команды ниже:

Добавляем репозиторий со стабильной версией:

```
sudo add-apt-repository ppa:jfi/ppa
```

Или с нестабильной:

```
sudo add-apt-repository ppa:jfi/psensor-unstable
```

В котором можно найти новые характеристики и багофиксы, но корректная работа не гарантируется.

```
sudo apt-get update sudo apt-get install psensor
```