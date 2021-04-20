import Navbar from '../../components/Navbar'
import { useRouter } from 'next/router'
import { Layout } from 'antd';

const { Content, Footer } = Layout;

const Result = () => {
    const router = useRouter();
    const { score } = router.query;

    return (
        <>
            <Navbar />
            <Layout className="layout">
                <Content className="content">

                    <h1 style={{ marginTop: '3rem', color: 'black', textAlign: 'center' }}>{score}점!!</h1>

                    <p style={{
                        marginTop: '3rem', color: 'black'
                    }}>
                        짝짝짝! 고수시네요! 확실하게 돈의 흐름을 읽고 계시는군요 </p>
                    <hr className="borderTwo" />




                    <div className="share" >
                        <h2> 공유하기 </h2>
                        {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
                        <div className="addthis_inline_share_toolbox"></div>

                        <hr className="borderTwo" />
                    </div>
                </Content>

                <Footer style={{ marginTop: '3vh', textAlign: 'center', fontSize: '0.75rem', color: 'black' }} > 부를 쫓아라 - 돈의 흐름 읽기 테스트 ©2021 Created by loosie</Footer>
            </Layout>
        </>
    )
}

export default Result;