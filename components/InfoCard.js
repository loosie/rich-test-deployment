import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import QuestionCard from './Question/QuestionCard';

const InfoCard = () => {

    const [showing, setShowing] = useState(true);

    const onStart = useCallback(
        () => {
            setShowing(false);
        }, []);

    return (
        <>
            {showing ?
                <article className="start" >

                    <h1 className="mt-5 text-center">주인공 찾기 테스트</h1>
                    <button type="button" className="btn btn-secondary mt-5" onClick={onStart}>테스트 시작하기</button>
                </article>
                :
                <QuestionCard />
            }
        </>
    )
};


InfoCard.propTypes = {
};

export default InfoCard;