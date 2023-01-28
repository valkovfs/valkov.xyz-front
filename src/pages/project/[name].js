import { useRouter } from 'next/router';
import { router } from 'next/client';

const Project = () => {
  const { name } = router.query

  return (
    <div>Project : {name}</div>
  )
}

export default Project