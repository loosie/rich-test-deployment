import Navbar from '../components/Navbar'
import InfoCard from '../components/InfoCard';
import { Layout } from 'antd';

const { Content, Footer } = Layout;


const Home = () => {
    return (
        <>

            <Navbar />
            <Layout className="layout">
                <Content className="content">
                    <InfoCard />

                    <div className="share" >
                        <h2> 공유하기 </h2>
                        {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
                        <div className="addthis_inline_share_toolbox"></div>

                        <hr className="borderTwo" />
                    </div>
                    <Footer style={{ marginTop: '3vh', textAlign: 'center', fontSize: '0.75rem', color: 'black' }} > 부를 쫓아라 - 돈의 흐름 읽기 테스트 ©2021 Created by loosie</Footer>
                </Content>
            </Layout>
        </>
    );
}

export default Home;