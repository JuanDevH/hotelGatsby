import React from 'react';
import { Global, css } from '@emotion/react';
import Helmet from 'react-helmet';
import Header from './header';

const Layout = (props) => {
    return (
        <>
            <Global 
                styles={css`
                    html {
                        font-size: 62.5%;
                    }
                    
                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: "Gill Sans", sans-serif;
                    }
                    h1,h2,h3 {
                        margin: 0;
                        line-height: 1;
                    }
                    h1,h2 {
                        font-family: "Georgia", sans-serif;
                    }
                    h3 {
                        font-family: "Gill Sans", sans-serif;
                    }
                    ul {
                        list-style : none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Helmet>
                <title>Gatsby Hotel</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
            </Helmet>
            <Header />
            {props.children}
        </>
    );
}
 
export default Layout;