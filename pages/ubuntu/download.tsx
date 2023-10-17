import { Layout } from "../../components/layout/layout";
import React from "react";
import { getLayoutProps, ILayoutProps } from "../../lib/posts";

export default function DownloadPage({topPosts}: ILayoutProps) {
  return (
    <Layout topPosts={topPosts}
            title={'Скачать Ubuntu Linux'}
            description={'Ссылки на скачивание последних версий Ubuntu'}
            urlSocial={'/ubuntu/download'}
            canonical={'/ubuntu/download'}>

      <article className={'post'}>
        <header>
          <h1>Скачать Ubuntu Linux</h1>
        </header>

        <p>На странице можно получить ссылки и информацию для скачивания последних версий Ubuntu.</p>


        <p>Релизы дистрибутива делятся на два типа: промежуточные и LTS (Long Term Support).</p>


       <h2>Промежуточные</h2>
        <p>Выходят каждые полгода и несут в себе новые и экспериментальные функции,
          так что если хотите идти в ногу со временем, этот выпуск будет актуален.
          </p>

        <p>Поддержка их кратковременна, всего 9 месяцев после релиза, поэтому обязательно придётся обновляться до новой версии.</p>

        <h2 id="23.10">Скачать актуальную Ubuntu 23.10.1</h2>

        <p>Для скачивания через торрент или напрямую можно кликнуть по нужной ссылке из таблицы ниже.</p>
        <table className="table  table-bordered">
          <tbody>
          <tr>
            <td rowSpan={1} colSpan={1}></td>
            <td colSpan={1}>По прямой ссылке</td>
            <td colSpan={1}>Через Торрент</td>
          </tr>

          <tr>
            <td rowSpan={1}>Мир</td>


            <td className="ltd"><a href="http://releases.ubuntu.com/23.10/ubuntu-23.10.1-desktop-amd64.iso"
                                   rel="nofollow">amd64</a></td>

            <td className="ltd"><a href="http://releases.ubuntu.com/23.10/ubuntu-23.10.1-desktop-amd64.iso.torrent"
                                   rel="nofollow">amd64</a></td>
          </tr>
          <tr>
            <td rowSpan={1}>Россия</td>


            <td><a href="http://mirror.yandex.ru/ubuntu-releases/23.10/ubuntu-23.10.1-desktop-amd64.iso"
                   rel="nofollow">amd64</a></td>

            <td><a href="http://mirror.yandex.ru/ubuntu-releases/23.10/ubuntu-23.10.1-desktop-amd64.iso.torrent"
                   rel="nofollow">amd64</a></td>
          </tr>
          </tbody>
        </table>

        <h2>Длительная поддержка (LTS)</h2>

        <p>Это версии с длительным периодом поддержки, выходящие раз в два
          года, отличаются высокой стабильностью и гарантированной совместимостью с большинством программ от сторонних
          разработчиков.</p>

        <p>
          Если желаете комфортную рабочую среду с принципом — раз поставил и забыл, то эти версии дистрибутива будут правильным выбором.
          Так как их поддержка составляет пять лет и по истечению ещё пятилетний период с выпуском патчей обновлений безопасности.
        </p>

        <h2 id="22.04">Скачать Ubuntu 22.04.3 LTS</h2>
        <p>Это самая последняя версия, включающая в себя все новые и передовые технологии работы с
          компьютером.</p>
        <p>Для скачивания Ubuntu 22.04.3 через торрент или напрямую можно кликнуть по нужной ссылке из таблицы
          ниже.</p>
        <table className="table  table-bordered">
          <tbody>
          <tr>
            <td rowSpan={1} colSpan={1}></td>
            <td colSpan={1}>По прямой ссылке</td>
            <td colSpan={1}>Через Торрент</td>
          </tr>

          <tr>
            <td rowSpan={1}>Мир</td>
            <td className="ltd"><a href="https://releases.ubuntu.com/22.04.3/ubuntu-22.04.3-desktop-amd64.iso"
                                   rel="nofollow">amd64</a></td>

            <td className="ltd"><a href="https://releases.ubuntu.com/22.04/ubuntu-22.04.3-desktop-amd64.iso.torrent"
                                   rel="nofollow">amd64</a></td>
          </tr>
          <tr>
            <td rowSpan={1}>Россия</td>


            <td><a href="https://mirror.yandex.ru/ubuntu-releases/22.04.3/ubuntu-22.04.3-desktop-amd64.iso"
                   rel="nofollow">amd64</a></td>

            <td><a href="https://mirror.yandex.ru/ubuntu-releases/22.04.3/ubuntu-22.04.3-desktop-amd64.iso.torrent"
                   rel="nofollow">amd64</a></td>
          </tr>
          </tbody>
        </table>

        <h2>Архитектуры образов</h2>

        <p>Многие путают такие названия, как i386 и amd64 в именовании установочных iso-файлов, поэтому разберём их
          обозначение.</p>
        <p><strong>i386</strong> (синонимы: IA-32, x86, i386, i486, i586, i686) — это образ предназначенный для
          32-битных платформ, но также может быть поставлен и на 64-битные системы. В основном нужен для устаревших и маломощных
          компьютеров.</p>
        <p><strong>amd64</strong> (синонимы: Intel 64, EM64T, IA-32e, x86_64, x86-64, x64) — это означает, что образ
          собран для 64-битных платформ. Архитектура процессоров впервые была разработана компанией AMD, поэтому многие,
          в том числе и Ubuntu, продолжают использовать эту исторически сложившуюся терминологию.</p>
        <p>Стоит отметить такой важный момент: i386 поддерживает не более 4 ГБ оперативной памяти, а amd64 — 16ТБ.</p>

        <p>К радости, использующих старое оборудование, Убунту всё ещё поддерживает 32-х разрядные системы.
          Этим дистрибутивом является 16.04.6. Чья поддержка всё ещё актуальна до 2024 года.</p>

        <h2 id="16.04">Скачать Ubuntu 16.04.7 и 16.04.6 (для 32-х)</h2>
        <p>Это предпоследняя стабильная версия, которая будет обновляться до апреля 2021г. Текущая версия последний
          дистрибутив Ubuntu с десктоп оболочкой Unity. Следующий релиз идёт уже с переделанным GNOME Shell.</p>
        <p>Для скачивания Ubuntu 16.04.7 LTS через торрент или напрямую можно кликнуть по нужной ссылке из таблицы
          ниже.</p>
        <table className="table  table-bordered">
          <tbody>
          <tr>
            <td rowSpan={2} colSpan={1}></td>
            <td colSpan={2}>По прямой ссылке</td>
            <td colSpan={2}>Через Торрент</td>
          </tr>
          <tr>
            <td>32-бит</td>
            <td>64-бит</td>
            <td>32-бит</td>
            <td>64-бит</td>
          </tr>
          <tr>
            <td rowSpan={1}>Мир</td>

            <td className="ltd"><a href="https://releases.ubuntu.com/16.04/ubuntu-16.04.6-desktop-i386.iso"
                                   rel="nofollow">i386</a></td>
            <td className="ltd"><a href="https://releases.ubuntu.com/16.04/ubuntu-16.04.7-desktop-amd64.iso"
                                   rel="nofollow">amd64</a></td>
            <td className="ltd"><a href="https://releases.ubuntu.com/16.04/ubuntu-16.04.6-desktop-i386.iso.torrent"
                                   rel="nofollow">i386</a></td>
            <td className="ltd"><a href="https://releases.ubuntu.com/16.04/ubuntu-16.04.7-desktop-amd64.iso.torrent"
                                   rel="nofollow">amd64</a></td>
          </tr>
          <tr>
            <td rowSpan={1}>Россия</td>

            <td><a href="https://mirror.yandex.ru/ubuntu-releases/16.04/ubuntu-16.04.6-desktop-i386.iso"
                   rel="nofollow">i386</a></td>
            <td><a href="https://mirror.yandex.ru/ubuntu-releases/16.04/ubuntu-16.04.7-desktop-amd64.iso"
                   rel="nofollow">amd64</a></td>
            <td><a href="https://mirror.yandex.ru/ubuntu-releases/16.04/ubuntu-16.04.6-desktop-i386.iso.torrent"
                   rel="nofollow">i386</a></td>
            <td><a href="https://mirror.yandex.ru/ubuntu-releases/16.04/ubuntu-16.04.7-desktop-amd64.iso.torrent"
                   rel="nofollow">amd64</a></td>
          </tr>
          </tbody>
        </table>
      </article>
    </Layout>
  )
}

export async function getStaticProps() {
  const layoutProps = await getLayoutProps();
  return {
    props: {...layoutProps}
  }
}
