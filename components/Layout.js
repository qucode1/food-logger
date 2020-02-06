import { Fragment } from "react";
import Head from 'next/head';
import Nav from './nav';

const Layout = ({children}) => {
    return (
        <Fragment>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <div className="container">
                {children}
            </div>
            <style jsx>{`
                .container {
                    padding: 0 2rem;
                }
            `}</style>
        </Fragment>
    )
}

export default Layout;