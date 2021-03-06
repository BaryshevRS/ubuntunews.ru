---
title: 'Планы по безопасной загрузке UEFI в Ubuntu'
date: '2012-06-23T01:19:50+04:00'
uri: 'news/uefi-in-ubuntu'
alias: 
  - 'news/uefi-in-ubuntu.html'
tags: 'UEFI,Canonical,Microsoft'
source: ''
unixtime: 1340399990
visits: 4337
---
[UEFI](http://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface) – интерфейс приходящий на смену отживающему свой век BIOS. UEFI, как и BIOS представляет из себя прослойку между аппаратной частью и операционной системой, но имеющий целый ряд преимуществ, например независимость от места хранения, удобный интерфейс и конечно более гибкую и лишённую многих ограничений среду для разработчиков оборудования.

[![](img/2012/06/23/01-00/uefi-logo-7422146752-o.jpg)](img/2012/06/23/01-00/uefi-logo-7422146752-o.jpg)

Сама технология зародилась ещё в прошлом тысячелетии, но активного распространения так и не получила. Проблем добавило заявление Microsoft о реализации расширенной поддержки UEFI в своей новой операционной системе Windows 8.

Microsoft потребовала безопасную загрузку UEFI от систем, которые хотят видеть Windows 8 на своих устройствах. Означающее, что OEM производители должны будет создать специальные криптографические ключи, необходимые для запуска Windows 8 через UEFI, которые по сути блокируют загрузку любой другой операционной системы.

С точки зрения Microsoft её требование выглядит, как улучшение безопасности системы и она не ответственна за решения производителей компьютеров. С другой стороны для того, чтобы получить такие же ключи от изготовителей устройств под Windows 8, для дистрибутивов Linux потребуется провести с каждым из них достаточно долгие переговоры или как, например, поступил дистрибутив Fedora Linux воспользоваться платным сервисом заверения ключей от Microsoft, созданным в рамках инициативы WinQual.

## Canonical

Canonical сначала [поддержала](https://lists.ubuntu.com/archives/ubuntu-devel/2012-June/035387.html) идею создания свободной экосистемы независящей от Microsoft. Взяв на себя переговоры с производителя новых устройств об поддержки Ubuntu, но после горячих споров [решила](https://lists.ubuntu.com/archives/ubuntu-devel/2012-June/035445.html) остановиться на использование ключа, как и Fedora Linux.

Кроме того, компания Canonical также создала требования для производителей, которые будут установливать Ubuntu на своих системах, такие как наличие отключения опции безопасной загрузки и возможности создания пользовательских ключей, а также поддержки в прошивке UEFI не только ключа от Canonical, но и Microsoft, для возможности запуска того же Fedora Linux.

Ещё одним решением стало **использование нового загрузчика «Intel efilinux»**, для систем с проверкой цифровых подписей (в остальных случаях также будет использоваться GRUB 2). Причиной стало то, что вполне возможна такая ситуация когда на устройстве, с предустановленной Ubuntu и заверенной цифровой подписью Canonical, может отсутствовать отключение режима безопасной загрузки UEFI, а это является нарушением GPLv3, под которой лицензирован GRUB 2, о запрете на [тивоизацию](http://ru.wikipedia.org/wiki/%D0%A2%D0%B8%D0%B2%D0%BE%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F), означающую, что нельзя запрещать пользователю менять программы на своё усмотрение.
