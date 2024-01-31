import { Open_Sans} from '@next/font/google'
import GlobalStyle from "../src/theme/GlobalStyle";

const open_sans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* -- Aplicação de Google Analytics -- */}
            {/* <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-2QZDPX3BLK"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.datalayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-2QZDPX3BLK');
                        `
                    }}
                />
            </Head> */}
            <main className={open_sans.className}>
                <GlobalStyle />
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp;