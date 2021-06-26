import TimeIcon from "../../public/assets/icons/time.svg";

export interface IProps {
  item: any;
}

export default function PostsItem(item: any) {
  return <article className={'post-preview'} key={item}>
    <a className={'post-preview__img'} href="#">
      <img width={260} height={195}
           src="/img/2014/01/08/22-00/ubuntu14-04-wallpaper-by-mrubuntux-d70iae2-11841092374-o.jpg"
           alt=""/>
    </a>
    <a className={'post-preview__title'} href="#">
      <h2>Дайджест новостей Ubuntu №8: LTS 12.04.4 и игры под Mir</h2>
    </a>
    <p className={'post-preview__content'}>Как Марк Шаттлворт и обещал, были объявлены первые
      производители смартфонов на базе
      операционной системы Ubuntu. Ими стали сразу две компании: испанская Bq и китайская
      Meizu.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid at delectus
      et minus optio quaerat, quas quibusdam repellendus voluptas. Commodi, consectetur
      deleniti fugiat in molestiae nesciunt odio officia provident quidem repellendus vel,
      voluptatem, voluptates. Alias commodi dicta dignissimos, hic id optio pariatur quia.
      Aliquam delectus dignissimos doloremque optio saepe?
    </p>

    <footer className={'time'}>
      <TimeIcon/>
      <time dateTime="2009-09-04T16:31:24+02:00">21.02.2014</time>
    </footer>
  </article>
}
