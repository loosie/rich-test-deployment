import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag'

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

                    {/* <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR|Noto+Sans+SC|Noto+Serif|Noto+Serif+KR" rel="stylesheet" /> */}
                    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css" />


                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_TRACKING_ID}', {
                                page_path: window.location.pathname,
                                });
                                `,
                        }}
                    />
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

