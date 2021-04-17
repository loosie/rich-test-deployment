// export const QuestionData = {

//     1: { "title": "문제 1번", "type": "EI", "A": "E", "B": "I" },
//     2: { "title": "문제 2번", "type": "EI", "A": "E", "B": "I" },
//     3: { "title": "문제 3번", "type": "EI", "A": "E", "B": "I" },
//     4: { "title": "문제 4번", "type": "SN", "A": "S", "B": "N" },
//     5: { "title": "문제 5번", "type": "SN", "A": "S", "B": "N" },
//     6: { "title": "문제 6번", "type": "SN", "A": "S", "B": "N" },
//     7: { "title": "문제 7번", "type": "TF", "A": "T", "B": "F" },
//     8: { "title": "문제 8번", "type": "TF", "A": "T", "B": "F" },
//     9: { "title": "문제 9번", "type": "TF", "A": "T", "B": "F" },
//     10: { "title": "문제 10번", "type": "JP", "A": "J", "B": "P" },
//     11: { "title": "문제 11번", "type": "JP", "A": "J", "B": "P" },
//     12: { "title": "문제 12번", "type": "JP", "A": "J", "B": "P" },
// }

var questionData = [
    // question #1
    {
        title: '1. 각 나라에서 판매되는 맥도날드의 대표상품 빅맥은 전 세계의 물가지수를 평가하는 경제지표로 사용된다.',
        type: 'OA',
        A: '맞다', // o 
        B: '아니다'

    },
    // question #2
    {
        title: '2. 채권과 기준 금리는 비례한다. 금리가 인상되면 자연스레 채권 상품의 가격도 오른다.',
        type: 'OB',
        A: '맞다',
        B: '아니다' // o 반비례 
    },
    // question #3
    {
        title: '3. 연방준비제도(Fed)은 2023년까지 제로금리 정책이 지속될 것임을 시사했다. 이는 실업률 감소와 인플레이션을 막기 위해서이다.',
        type: 'OB',
        A: '맞다',
        B: '아니다' // o 실업률 하락과 동시에 인플레이션 상승(2%목표)을 위함이다. 
    },
    // question #4
    {
        title: '4. 한국의 원화 가치는 금리보다는 환율에 더 크게 반응하는데 이는 한국의 무역의존도가 높기 때문이다.' +
            ' 따라서 국내 수출 기업의 경우, 환율 상승은 실적 향상과 외국인 자금의 증시 유입으로 주가의 상승으로 이어질 가능성이 높다. ',
        type: 'OB',
        A: '맞다',
        B: '아니다' // o 일반적으로 수출 실적 향상은 맞으나, 환율상승에 따른 부채 부담도 고려해야하고 환차익으로 인해 외국인 유입이 줄어든다
    },
    // question #5
    {
        title: '#5 I get bored easily when disscussing abstract concepts.',
        type: 'OB',
        A: '맞다',
        B: '아니다'
    },

    // question #6
    {
        title: '#6 음음음 메타인지를 하고 계시나요.',
        type: 'OB',
        A: '맞다',
        B: '아니다'
    },
    // question #7
    {
        title: '#7 음음음 메타인지를 하고 계시나요.',
        type: 'OB',
        A: '맞다',
        B: '아니다'
    },
    // question #8
    {
        title: '#8 특정한 박스 안에 자신을 가둬두지 마세요.',
        type: 'OB',
        A: '맞다',
        B: '아니다'
    },




]

export default questionData

