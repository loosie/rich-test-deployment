
import { useRouter } from 'next/router'

const Result = () => {
    const router = useRouter();
    const { name } = router.query;

    return (
        <div>결과 : {name} %의 확률로 돈의 흐름을 읽고 계시군요 </div>
    )
}

export default Result;