
import { useRouter } from 'next/router'

const Type = () => {
    const router = useRouter();
    const { name } = router.query;

    return (
        <div>{name} 타입 게시글 </div>
    )
}

export default Type;