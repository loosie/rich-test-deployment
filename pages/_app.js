// 페이지 공통부분 처리
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import initGA from '../src/lib/ga';
import '../styles.scss';
import Router from 'next/router';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>돈의 흐름 읽기 테스트</title>

                {/* 네이버 웹마스터 소유권 등록 */}
                <meta name="naver-site-verification" content="efb2eb5674ca0ccbb558d92506965fa9f0e824af" />
            </Head>

            <Component {...pageProps} />
        </>
    )
};

// App.getInitialProps = async ctx => {
//     initGA(process.env.GA_ID, Router);
// }

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default App;