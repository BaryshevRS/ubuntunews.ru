import { Layout } from "../../components/layout/layout";
import { getLayoutProps, ILayoutProps } from "../../lib/posts";

export default function UbuntuPage({topPosts}: ILayoutProps) {
  return (
    <Layout topPosts={topPosts} title={'Форма связи'}>
      <h1 className={'title'}>Форма связи</h1>
       <iframe height={'740px'} width={'100%'} src="https://form.123formbuilder.com/my-contact-form-5946302.html"/>
    </Layout>
  )
}

export async function getStaticProps() {
  const layoutProps = await getLayoutProps();
  return {
    props: {...layoutProps}
  }
}
