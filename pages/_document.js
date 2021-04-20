import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                    <link rel="icon" href="/favicon.ico" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://richtest-moneyflow.netlify.app/" />
                    <meta property="og:title" content="부를 쫓아라 - 돈의 흐름 읽기 테스트 (2021) " />
                    <meta property="og:image" content="/bdot_logo2.png" />
                    <meta property="og:description" content="21세기 문맹은 문자를 못 읽고 못 쓰는 사람이 아니라, 배우려 하지 않고 낡은 지식을 버리지 않고 재학습하지 않은 사람이다.- Alvin Toffler" />

                </Head>
                <body>

                    <Main />
                    <NextScript />
                    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-606897746ce54fe5"></script>


                </body>
            </Html >
        );
    }
}

