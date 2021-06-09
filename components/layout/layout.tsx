import Head from "next/head";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { MobileNav } from "./mobile-nav/mobile-nav";

interface IProp {
    children: React.ReactNode;
    title?: string;
}

export const Layout: React.FC<IProp> = ({children, title}) => {
    return (

        <div className='wrapper'>
            <Head>
                <meta charSet="UTF-8"/>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <base href={process.env.BASE_URL} />

                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <link rel="shortcut icon" href="/favicon/favicon.ico"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
                <meta name="theme-color" content="#ffffff"/>

                {/*<link rel="logo" href="/template/img/svg/logo.svg" type="image/svg" />*/}

                <meta name="google-site-verification" content="LPQrJDo4SaQ8Guxp4iBR7l1djWL2_ibYQaW9h7Pox64"/>
                <meta name='yandex-verification' content='7f39a8aa154db7c2'/>
            </Head>

            <Header/>
            <main className={'main'}>
                {children}
            </main>

            <Sidebar/>

            <MobileNav />
        </div>

    )
};
