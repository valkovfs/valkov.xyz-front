import Link from 'next/link';


function Projects({data} : any) {
  console.log(data)
  return (
    <div>
      {data.map((project: any) =>
      <div key={project.id}>
        <Link href='project/[name]' as={`/project/${project.name}`}> {project.name}</Link>
      </div>)}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/projects`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default Projects;