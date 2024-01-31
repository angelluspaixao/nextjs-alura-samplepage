import Head from 'next/head'
import Link from '../src/components/Link'

export async function getStaticProps() {
    const FQA_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FQA_API_URL)
            .then((respostaDoServidor) => {
                return respostaDoServidor.json();
            })
            .then((respostaProCliente) => {
                return respostaProCliente;
            })

    return {
        props: {
            faq,
        },
    };
}

export default function FAQ({ faq }) {
    return(
        <>
            <Head>
                <title>FAQ - Curso Next.js</title>
            </Head>
            <h1>Curso Next.js - Página de FAQ</h1>
            <Link href="/">Retorne ao Home</Link>
            <ul>
                {faq.map(({question, answer}) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    )
}