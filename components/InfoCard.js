import { useCallback, useState } from 'react';
import QuestionCard from './Question/QuestionCard';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

const InfoCard = () => {

    const [showing, setShowing] = useState(true);

    const onStart = useCallback(
        () => {
            setShowing(false);
        }, []);

    return (
        <Layout className="layout"

        >

            <Content

                style={{ minHeight: '0', width: '520px', margin: '3rem 1rem 0' }}
            >

                {/* <div className="site-layout-background" style={{ width: '100%', padding: '24', minHeight: '360', background: '#181818' }}> */}
                {showing ?
                    <div className="card start" >

                        <div className="global-wrapper info">
                            <h1 className="global-title">돈의 흐름 읽기 테스트</h1>
                            <div style={{ margin: "2rem 0" }}>
                                <p style={{ textAlign: "center" }}>21세기 문맹은 문자를 못 읽고 못 쓰는 사람이 아니라</p>
                                <p style={{ textAlign: "center" }}> 배우려 하지 않고, 낡은 지식을 버리지 않고 재학습하지 않은 사람이다.</p>
                                <p style={{ textAlign: 'right' }}>- Alvin Toffler</p>
                            </div>
                        </div>
                        <button type="button" className="btn btn-secondary mt-5" onClick={onStart}>테스트 시작하기</button>
                    </div>

                    :
                    <QuestionCard />
                }
                {/* </div> */}

            </Content>
            {/* // <Content style={{ padding: '0 50px' }}>

                // </Content> */}


            <Footer style={{ marginTop: '10vh', textAlign: 'center', fontSize: '1rem' }} > 부를 쫓아라 - 돈의 흐름 읽기 테스트 ©2021 Created by loosie</Footer>
        </Layout >
    )
};


InfoCard.propTypes = {
};

export default InfoCard;