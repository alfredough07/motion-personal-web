type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'SafePath',
    description:
      'Highlights recent crimes along routes and allows users to report crimes within Montgomery County.',
    link: 'https://github.com/alfredough07/SafePath',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'FoodNearU',
    description: 'A CLI tool that finds nearby restaurants based on user input and enriches results with AI-generated summaries using Google Maps(Places API) and Gemini API.',
    link: 'https://github.com/alfredough07/FoodNearU',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Sponsors for Educational Opportunity',
    title: 'Software Engineering Intern',
    start: 'June 2025',
    end: 'August 2025',
    link: 'https://www.seo-usa.org/',
    id: 'work1',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/alfredough07',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/alfredo-zuniga/',
  },
  
]

export const EMAIL = 'alfredo.zuniga@outlook.com'

export const TECH_STACK = [
  'JavaScript',
  'Python',
  'Flask',
  'Express',
  'Node.js',
  'C',
  'SQL',
  'Firebase Auth',
  'Git',
  'GitHub', 
  'Github Actions',
  'Trello',
  'Bootstrap',
  'Insomnia',
  'Postman',
  'Restful APIs',

  ]
