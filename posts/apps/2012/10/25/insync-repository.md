---
title: 'Репозитории Insync для Ubuntu, Linux Mint и Debian'
date: '2012-10-25T22:17:16+04:00'
uri: 'apps/insync-repository'
alias: 
  - 'apps/insync-repository.html'
tags: 'Insync,Google Drive,Репозиторий'
source: 'http://www.webupd8.org/2012/10/insync-repository-available-for-ubuntu.html'
unixtime: 1351189036
visits: 9713
---
**Insync** – неофициальный Linux-клиент для облачного хранения данных Google Drive получил поддержку автоматического обновления из репозитория для, таких дистрибутивов как Ubuntu, Linux Mint и Debian.

[![](img/2012/10/25/22-00/isync-ubuntu-8122729194-o.jpg)](img/2012/10/25/22-00/isync-ubuntu-8122729194-o.jpg)

**Репозитории Insync доступны для:**

*   Ubuntu: Natty, Oneiric, Precise и Quantal.
*   Debian: Squeeze и Lenny.
*   Linux Mint: Lisa и Maya.

Теперь рассмотрим команды для установки:

**Для Ubuntu:**

```
echo "deb http://apt.insynchq.com/ubuntu $(lsb_release -cs) non-free" | sudo tee /etc/apt/sources.list.d/insync.list
```

**Для Debian:**

```
echo "deb http://apt.insynchq.com/debian $(lsb_release -cs) non-free" | sudo tee -a /etc/apt/sources.list
```

**Для Linux Mint:**

```
echo "deb http://apt.insynchq.com/mint $(lsb_release -cs) non-free" | sudo tee /etc/apt/sources.list.d/insync.list
```

После добавления команд выше, введём ключ и обновим источники:

```
wget -O - https://d2t3ff60b2tol4.cloudfront.net/services@insynchq.com.gpg.key | sudo apt-key add –
```

```
sudo apt-get update
```

### И окончательно установим Insync:

**Unity (appindicator):**

```
sudo apt-get install insync-beta-ubuntu
```

**GNOME Shell:**

```
sudo apt-get install insync-beta-gnome
```

**Cinnamon:**

```
sudo apt-get install insync-beta-cinnamon
```

**KDE4:**

```
sudo apt-get install insync-beta-kde
```
