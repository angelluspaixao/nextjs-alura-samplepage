import Head from 'next/head'
import Link from '../src/components/Link'

export default function NotFound() {
    return(
        <>
            <Head>
                <title>404 - Página não encontrada</title>
            </Head>
            <h1>Página não encontrada</h1>
            <h3>Desculpe pelo trastorno! Por favor, volte a última página <Link href="/">ou pra Home</Link>.</h3>
        </>
    )
}