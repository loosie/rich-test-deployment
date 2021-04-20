import Navbar from '../components/Navbar'
import InfoCard from '../components/InfoCard';
import { Layout } from 'antd';

const { Footer } = Layout;


const Home = () => {
    return (
        <>
            <Navbar />
            <InfoCard />
            <Footer style={{ marginTop: '3vh', textAlign: 'center', fontSize: '0.75rem', color: 'black' }} > 부를 쫓아라 - 돈의 흐름 읽기 테스트 ©2021 Created by loosie</Footer>

        </>
    );
}

export default Home;