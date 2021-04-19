import { useCallback, useState, useEffect } from 'react';
import questionData from './Data';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export const Progress = styled.div`
        width: calc(100/9*${props => props.idx}%);
    `;

const QuestionCard = () => {

    const [title, setTitle] = useState(questionData[0].title);
    const [A, setA] = useState(questionData[0].A);
    const [B, setB] = useState(questionData[0].B);
    const [C, setC] = useState(questionData[0]?.C);
    const [type, setType] = useState(questionData[0].type);
    const [idx, setIdx] = useState(1);

    const [OA, setOA] = useState(0);
    const [OB, setOB] = useState(0);

    const [clientScore, setClientScore] = useState("")
    const router = useRouter();


    useEffect(() => {

        console.log("effect OA:  " + OA);
        console.log("effect OB:  " + OB);

        var result = calculateScore(OA, OB);
        setClientScore(result);
    }, [OA, OB]);

    const AScore = useCallback(
        (t) => {
            // console.log(t);
            if (t === 'OA') {
                setOA(OA + 1)
            }
        }, [OB]
    )
    const BScore = useCallback(
        (t) => {
            if (t == 'OB') {
                setOB(OB + 1)
                // console.log("SN : " + SN);
            }
        }, [OB]
    )

    const calculateScore = useCallback(
        (type1, type2) => {
            var score = (100 / 9 * (type1 + type2));

            return Math.ceil(score);
        }
    )
    const onLoading = useCallback(
        () => {
            console.log(clientScore);
            router.push({
                pathname: `/result/${clientScore}`,
            });
            return;
        }
    )

    const onNextA = useCallback(
        () => {
            AScore(type);
            if (idx < questionData.length) {
                setTitle(questionData[idx].title);
                setA(questionData[idx].A);
                setB(questionData[idx].B);
                setC(questionData[idx]?.C)
                setType(questionData[idx].type);
                setIdx(idx + 1);
            }

        }, [idx]);

    const onNextB = useCallback(
        () => {
            BScore(type);
            if (idx < questionData.length) {
                setTitle(questionData[idx].title);
                setA(questionData[idx].A);
                setB(questionData[idx].B);
                setC(questionData[idx]?.C)
                setType(questionData[idx].type);
                setIdx(idx + 1);
            }
        }, [idx]);

    return (
        <>
            <div className="card question" style={{

                // background: '#5e5e5e'
            }} >

                <div className="progress" style={{ margin: "30px 0" }}>
                    <Progress idx={idx} className="progress-bar progress-bar-striped" role="progressbar" rate={idx} />
                </div>
                <div className="global-wrapper">
                    <p id="title">{title}</p>
                </div>

                {/* <input id="type" type="hidden" value="EI" /> */}

                <button id="A" type="button" className="btn btn-light mt-5" onClick={onNextA}>{A}</button>
                <button id="B" type="button" className="btn btn-light mt-5" onClick={onNextB}>{B}</button>
                {C ?
                    <button id="C" type="button" className="btn btn-light mt-5" onClick={onNextB}>{C}</button>
                    : null
                }
                {idx === questionData.length ?
                    <button id="result" type="button" className="btn btn-light mt-5" onClick={onLoading}>결과보기</button>
                    :
                    null
                }
            </div>
        </>
    )
};


QuestionCard.propTypes = {
};

export default QuestionCard;