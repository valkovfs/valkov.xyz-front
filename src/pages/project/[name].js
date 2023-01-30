import { useRouter } from 'next/router';

const Project = () => {
  const router = useRouter()

  return (
    <div>Project : {router.query.name}</div>
  )
}

export default Project