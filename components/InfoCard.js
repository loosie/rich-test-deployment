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
        <Layout className="layout">

            <Content className="content">

                {showing ?
                    <div className="card start" >

                        <div className="global-wrapper info">
                            <h1 className="global-title">돈의 흐름 읽기 테스트</h1>
                            <div style={{ margin: "2rem 0" }}>
                                <p className="alvin" style={{ textAlign: "center" }}>21세기 문맹은 문자를 못 읽고 못 쓰는 사람이 아니라,</p>
                                <p className="alvin" style={{ textAlign: "center" }}> 배우려 하지 않고 낡은 지식을 버리지 않고 재학습하지 않은 사람이다.</p>
                                <p className="alvin" style={{ textAlign: 'right' }}>- Alvin Toffler</p>
                            </div>
                        </div>
                        <button type="button" style={{ marginTop: "3rem" }} onClick={onStart}>테스트 시작하기</button>
                    </div>

                    :
                    <QuestionCard />
                }



                <div className="share" >
                    <h2> 공유하기 </h2>
                    {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
                    <div className="addthis_inline_share_toolbox"></div>

                    <hr className="borderTwo" />
                </div>



            </Content>
        </Layout >
    )
};


InfoCard.propTypes = {
};

export default InfoCard;