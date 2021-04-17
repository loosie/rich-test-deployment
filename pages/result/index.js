import Navbar from '../../components/Navbar'
import ResultCard from '../../components/Result/ResultCard';

const Result = () => {
    return (
        <>
            <Navbar />
            <h1 className="mt-5 text-center"> 테스트 결과 </h1>
            <ResultCard />
        </>
    );
}

export default Result;