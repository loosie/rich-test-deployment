import { useCallback, useState, useEffect } from 'react';
import questionData from './Data';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export const Progress = styled.div`
        width: calc(100/9*${props => props.idx}%);
    `;

const QuestionCard = () => {

    const [title, setTitle] = useState(questionData[0].title);
    const [qNum, setQNum] = useState(questionData[0].qNum);
    const [A, setA] = useState(questionData[0].A);
    const [B, setB] = useState(questionData[0].B);
    const [C, setC] = useState(questionData[0]?.C);
    const [type, setType] = useState(questionData[0].type);
    const [idx, setIdx] = useState(1);

    const [OA, setOA] = useState(0);
    const [OB, setOB] = useState(0);

    const [clientScore, setClientScore] = useState("")
    const router = useRouter();

    const [disabled, setDisabled] = useState(true);



    useEffect(() => {

        // console.log("effect OA:  " + OA);
        // console.log("effect OB:  " + OB);
        // console.log("effect idx:  " + idx + ", " + questionData.length);
        var result = calculateScore(OA, OB);
        setClientScore(result);

        if (idx === questionData.length + 1) {
            setDisabled(false);

        }
    }, [OA, OB, idx]);

    const AScore = useCallback(
        (t) => {
            // console.log(t);
            if (t === 'OA') {
                setOA(OA + 1)
            }
        }, [OA]
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
            var resultBtn = document.getElementById('result');
            resultBtn.disabled = false;
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
                setQNum(questionData[idx].qNum);
                setA(questionData[idx].A);
                setB(questionData[idx].B);
                setC(questionData[idx]?.C)
                setType(questionData[idx].type);
            }
            setIdx(idx + 1);

        }, [idx]);

    const onNextB = useCallback(
        () => {
            BScore(type);
            if (idx < questionData.length) {
                setTitle(questionData[idx].title);
                setQNum(questionData[idx].qNum);
                setA(questionData[idx].A);
                setB(questionData[idx].B);
                setC(questionData[idx]?.C)
                setType(questionData[idx].type);
            }
            setIdx(idx + 1);



        }, [idx]);

    return (
        <>
            <div className="card question" style={{

                // background: '#5e5e5e'
            }} >

                <div className="progress" style={{ margin: "1.8rem 0" }}>
                    <Progress idx={idx} className="progress-bar progress-bar-striped" role="progressbar" rate={idx} />
                </div>
                <div className="global-wrapper">
                    <h1 id="qNum" >{qNum}</h1>
                    <p id="title">{title}</p>
                </div>
                <hr className="borderOne" />
                {/* <input id="type" type="hidden" value="EI" /> */}

                <button id="A" type="button" onClick={onNextA}>{A}</button>
                <button id="B" type="button" onClick={onNextB}>{B}</button>
                {C ?
                    <button id="C" type="button" onClick={onNextB}>{C}</button>
                    : null
                }
                {idx >= questionData.length ?

                    <button id="result" type="button" onClick={onLoading} disabled={disabled}>결과보기</button>

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