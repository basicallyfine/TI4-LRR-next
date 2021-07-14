import Head from 'next/head';

import MainNav from './main-nav';

// TODO: pull from (somewhere?) and detect active page
const navigation = ['Contents', 'Using This Reference', 'Setup', 'Glossary', 'FAQ'];

export default function Page({ title, content = null }) {
    return (
        <div>
            <Head>
                <title>TI4 LRR: {title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainNav />

            <main>
                <div className="max-w-4xl mx-auto py-9 px-6 lg:px-8 prose">
                    <h1 className="page-main-heading">{title}</h1>
                    {content}
                </div>
            </main>
        </div>
    )
}
