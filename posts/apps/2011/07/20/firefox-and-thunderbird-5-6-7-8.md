---
title: 'Firefox и Thunderbird 5, 6, 7 и 8 в Ubuntu из PPA'
date: '2011-07-20T08:54:49+04:00'
uri: 'apps/firefox-and-thunderbird-5-6-7-8'
alias: 
  - 'apps/firefox-and-thunderbird-5-6-7-8.html'
tags: 'Firefox,Thunderbird,PPA'
source: ''
unixtime: 1311137689
visits: 6992
---
Если есть желание установить самые последние тестовые версии Firefox и Thunderbird, то их легко можно загрузить воспользовавшись специально подготовленными PPA.

## Firefox

5.0 (Stable):

```
sudo add-apt-repository ppa:mozillateam/firefox-stable
sudo apt-get update
sudo apt-get dist-upgrade
```

6.0 (Beta):

```
sudo add-apt-repository ppa:mozillateam/firefox-next
sudo apt-get update
sudo apt-get dist-upgrade
```

7.0 (Aurora):

```
sudo add-apt-repository ppa:ubuntu-mozilla-daily/firefox-aurora
sudo apt-get update
sudo apt-get dist-upgrade
```

8.0 (Nightly):

```
sudo add-apt-repository ppa:ubuntu-mozilla-daily/ppa
sudo apt-get update
sudo apt-get install firefox-trunk
```

## Thunderbird

5.0 (Stable):

```
sudo add-apt-repository ppa:mozillateam/thunderbird-stable
sudo apt-get update
sudo apt-get dist-upgrade
```

6.0 (Beta):

```
sudo add-apt-repository ppa:mozillateam/thunderbird-next
sudo apt-get update
sudo apt-get dist-upgrade 
```

7.0 (Aurora):

```
sudo add-apt-repository ppa:ubuntu-mozilla-daily/thunderbird-aurora
sudo apt-get update
sudo apt-get dist-upgrade
```

8.0 (Nightly):

```
sudo add-apt-repository ppa:ubuntu-mozilla-daily/ppa
sudo apt-get update
sudo apt-get install thunderbird-trunk
```

Следует учитывать, что версии Aurora и Nightly находятся на этапе разработки, поэтому не рекомендуются для установки.
