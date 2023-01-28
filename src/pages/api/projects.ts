import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return await createProject(req, res)
  } else if (req.method === 'GET') {
    return await getProjects(res)
  } else {
    return res.status(405).json({ message: 'Method not allowed', success: false })
  }
};

async function getProjects(res: NextApiResponse) {
  try {
    const data = await prisma.project.findMany()
    return res.json(data)
  } catch (error) {
    console.log('No projects', error)
    res.status(500).json({ error: 'Error fetching projects ', success: false })
  }
};

async function createProject(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  try {
    const newEntry = await prisma.project.create({
      data: {
        name: body.name,
        demoUrl: body.demoUrl,
        githubUrl: body.githubUrl,
        description: body.description
      }
    })
    return res.status(200).json(newEntry)
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error creating project', success: false })
  }
}