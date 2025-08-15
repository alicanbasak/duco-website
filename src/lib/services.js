import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const servicesDirectory = path.join(process.cwd(), 'src/data/services')

export function getSortedServicesData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(servicesDirectory)
  const allData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(servicesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id (use slug if available)
    return {
      id: matterResult.data.slug || id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allData.sort((a, b) => {
    if (a.id > b.id) {
      return 1
    } else {
      return -1
    }
  })
}

export function getRelatedServices(current_id) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(servicesDirectory)
  const allData = [];

  fileNames.filter((fileName) => fileName.includes('.md')).map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(servicesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Exclude current id from result

    const serviceId = matterResult.data.slug || id
    if ( serviceId != current_id ) {
      // Combine the data with the id (use slug if available)
      allData.push({
        id: serviceId,
        ...matterResult.data
      });
    }
  })

  // Sort posts by date
  return allData.sort((a, b) => {
    if (a.id > b.id) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllServicesIds() {
  const fileNames = fs.readdirSync(servicesDirectory)
  return fileNames.map(fileName => {
    const fullPath = path.join(servicesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    
    return {
      params: {
        id: matterResult.data.slug || fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getServiceData(id) {
  // Try to find the file by slug first, then by filename
  const fileNames = fs.readdirSync(servicesDirectory)
  let targetFile = null
  
  for (const fileName of fileNames) {
    const fullPath = path.join(servicesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    
    if (matterResult.data.slug === id || fileName.replace(/\.md$/, '') === id) {
      targetFile = fileName
      break
    }
  }
  
  if (!targetFile) {
    throw new Error(`Service not found: ${id}`)
  }
  
  const fullPath = path.join(servicesDirectory, targetFile)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id: matterResult.data.slug || targetFile.replace(/\.md$/, ''),
    contentHtml,
    ...matterResult.data
  }
}