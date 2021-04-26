import { useCallback, useState } from 'react';
import QuestionCard from './Question/QuestionCard';
import { Button } from 'antd';
import GoogleAnalyticsHOC from './GoogleAnalyticsHOC';

const InfoCard = () => {

    const [showing, setShowing] = useState(true);

    const onStart = useCallback(
        () => {
            setShowing(false);
        }, []);

    return (

        <>
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
                    <hr className="borderOne" />
                    <Button onClick={onStart}>테스트 시작하기</Button>
                </div>

                :
                <QuestionCard />
            }


        </>
    )
};


InfoCard.propTypes = {
};

export default GoogleAnalyticsHOC(InfoCard);