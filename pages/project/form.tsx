import { Layout } from "../../components/layout/layout";
import { getLayoutProps, ILayoutProps } from "../../lib/posts";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";

export default function ProjectFormPage({topPosts}: ILayoutProps) {
  const [ fields, setFields] = useState<Record<string, string>>({
    name: '',
    email: '',
    content: ''
  });

  const setField = (
    { target: { value = '', name = '' } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFields((fields) => ({ ...fields, [name]: value }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.error('fields', fields)
  }

  const disabledForm = useMemo<boolean>(() => !Object.values(fields).every(Boolean), [fields])

  return (
    <Layout topPosts={topPosts} title={'Форма связи'}>
      <h1 className={'title'}>Форма для связи</h1>
      <form onSubmit={handleSubmit} className={'form form--compact'}>
        <div className={'field'}>
          <label htmlFor="name">Имя</label>
          <input onChange={setField} value={fields.name}
                 id='name' name='name' type="text"/>
        </div>
        <div className={'field'}>
          <label htmlFor="email">Email</label>
          <input onChange={setField} value={fields.email}
                 id="email" name='email' type="text"/>
        </div>
        <div className={'field'}>
          <label htmlFor="content">Сообщение</label>
          <textarea onChange={setField} value={fields.content}
                    name="content" id="content" cols={30} rows={10}/>
        </div>
        <div className={'form__button'}>
          <button disabled={disabledForm}>Отправить</button>
        </div>
      </form>
    </Layout>
  )
}

export async function getStaticProps() {
  const layoutProps = await getLayoutProps();
  return {
    props: {...layoutProps}
  }
}
