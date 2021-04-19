import PropTypes from 'prop-types';

const ResultCard = ({ type }) => {

    console.log(type);

    return (
        <>
            <article className="result">
                <img id="img"
                    className="rounded-circle mt-5"
                    style={{ margin: '0 auto', width: '25%' }}
                    src="https://i.pinimg.com/236x/ac/df/26/acdf26edb3c3a9b2c6cb2b03033d25ff.jpg"
                    alt="animal" />
                <h2 id="animal" className="text-center mt-5">동물 이름</h2>
                <h3 id="explain" className="text-center mt-5">설명</h3>

                <div className="addthis_inline_share_toolbox share"></div>

            </article>

        </>
    )
};


ResultCard.propTypes = {
};

export default ResultCard;