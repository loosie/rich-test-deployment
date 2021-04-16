import { useCallback, useState, useEffect } from 'react';
import questionData from './Data';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export const Progress = styled.div`
        width: calc(100/8*${props => props.idx}%);
    `;

const QuestionCard = () => {

    const [title, setTitle] = useState(questionData[0].title);
    const [A, setA] = useState(questionData[0].A);
    const [B, setB] = useState(questionData[0].B);
    const [type, setType] = useState(questionData[0].type);
    const [idx, setIdx] = useState(1);

    const [EI, setEI] = useState(0);
    const [SN, setSN] = useState(0);
    const [TF, setTF] = useState(0);
    const [JP, setJP] = useState(0);

    const [clientType, setClientType] = useState("")
    const router = useRouter();


    useEffect((t) => {

        console.log("effect EI:  " + EI);
        console.log("effect SN:  " + SN);
        console.log("effect TF:  " + TF);
        console.log("effect JP:  " + JP);

        var result = calculateType(EI, SN, TF, JP);
        setClientType(result);
    }, [EI, SN, TF, JP]);

    const dataScore = useCallback(
        (t) => {
            // console.log(t);
            if (t === 'EI') {
                setEI(EI + 1)
                // console.log("EI : " + EI);
            } else if (t == 'SN') {
                setSN(SN + 1)
                // console.log("SN : " + SN);
            } else if (t == 'TF') {
                setTF(TF + 1)
                // console.log("TF : " + TF);
            }
            else if (t == 'JP') {
                setJP(JP + 1)
                // console.log("JP : " + JP);
            }
        }, [EI, SN, TF, JP]
    )

    const calculateType = useCallback(
        (type1, type2, type3, type4) => {
            var cType = "";
            if (type1 > 1) {
                cType += "E";
            } else {
                cType += "I";
            }

            if (type2 > 1) {
                cType += "S";
            } else {
                cType += "N";
            }

            if (type3 > 1) {
                cType += "T";
            } else {
                cType += "F";
            }

            if (type4 > 1) {
                cType += "J";
            } else {
                cType += "P";
            }

            return cType;
        }
    )
    const onLoading = useCallback(
        () => {
            console.log(clientType);
            router.push({
                pathname: `/type/${clientType}`,
            });
            return;
        }
    )

    const onNextA = useCallback(
        () => {
            dataScore(type);
            if (idx < questionData.length) {
                setTitle(questionData[idx].title);
                setA(questionData[idx].A);
                setB(questionData[idx].B);
                setType(questionData[idx].type);
                setIdx(idx + 1);
            }

        }, [idx]);

    const onNextB = useCallback(
        () => {
            if (idx < questionData.length) {
                setTitle(questionData[idx].title);
                setA(questionData[idx].A);
                setB(questionData[idx].B);
                setType(questionData[idx].type);
                setIdx(idx + 1);
            }
        }, [idx]);

    return (
        <>
            <article className="question" style={{
                margin: '2rem 0.5rem',
                minHeight: '280px',
                padding: '1rem 2rem 2rem',
                // background: '#5e5e5e'
            }} >

                <div className="progress mt-3">
                    <Progress idx={idx} className="progress-bar progress-bar-striped" role="progressbar" rate={idx} />
                </div>
                <div className="global-wrapper">
                    <p id="title" className="text-center mt-5">{title}</p>
                </div>

                {/* <input id="type" type="hidden" value="EI" /> */}

                <button id="A" type="button" value={type} className="btn btn-light mt-5" onClick={onNextA}>{A}</button>
                <button id="B" type="button" value={type} className="btn btn-dark mt-5" onClick={onNextB}>{B}</button>
                {idx === questionData.length ?
                    <button id="result" type="button" className="btn btn-light mt-5" onClick={onLoading}>결과보기</button>
                    :
                    null
                }
            </article>
        </>
    )
};


QuestionCard.propTypes = {
};

export default QuestionCard;