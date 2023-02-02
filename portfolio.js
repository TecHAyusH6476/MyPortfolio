import emoji from 'react-easy-emoji'

export const greetings = {
  name: 'Ayush Singh',
  title: "Hi all, I'm Ayush",
  description:
    "I'm passionate Full Stack Web Developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
  resumeLink:
    'https://drive.google.com/file/d/1Pj_m_MstLML8CNzeIlvtNdyljMIfyDre/view?usp=drivesdk',
}

export const openSource = {
  githubUserName: 'TecHAyusH6476',
}

export const contact = {}

export const socialLinks = {
  url: 'https://TecHAyusH6476.github.io/',
  linkedin: 'https://www.linkedin.com/in/',
  github: 'https://github.com/TecHAyusH6476',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
}

export const skillsSection = {
  title: 'What I do',
  subTitle:
    'EXPERIENCED FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassname: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassname: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassname: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassname: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassname: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassname: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassname: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassname: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassname: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassname: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassname: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassname: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassname: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassname: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassname: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassname: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassname: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassname: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassname: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          fontAwesomeClassname: 'logos:ganache-icon',
        },
      ],
    },
  ],
}

export const SkillBars = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '75',
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
]

export const educationInfo = [
  {
    schoolName: 'RKGIT',
    subHeader: 'Bachelors in Computer Science',
    duration: 'June 2019 - Current',
    desc: 'Participated in the research of Crop and Fertilizer recommendation using ML ,  published 1 paper.',
    grade: '8.5 GPA',
    descBullets: [
      'Won many Intra College Competitive Coding Competitions',
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
]

export const experience = [
  {
    role: 'R&D Intern',
    company: 'Bobble AI',
    companylogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Nov 2022 – Current',
    desc: 'As an R&D Intern at Bobble AI, I worked on the development of an Apache Superset-based dashboard for visualizing vulnerabilities in project licenses. I utilized MySQL and the Node.js Express.js framework to create APIs for the dashboard. Additionally, I worked on the market intelligence dashboard, where I was primarily focused on the backend, creating APIs using Flask and MySQL. This internship provided me with hands-on experience in modern data visualization tools, web development, and database management, allowing me to expand my technical skillset and contribute to the growth of the company.',
  },
  {
    role: 'Educator Associate',
    company: 'Geekster',
    companylogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'July 2022 – Current',
    desc: 'With my passion for education and technology, I quickly adapted to the role of Educator Associate at Geekster. In this role, I was able to share my knowledge and experience with students, providing hands-on training in web development and programming. My expertise in React JavaScript and data structures and algorithms in Java allowed me to create engaging lessons that not only challenged students but also encouraged their creativity and problem-solving skills .Furthermore, I was given the opportunity to work as a problem setter on the Hackerrank platform, where I was able to use my knowledge of Java to set technical challenges for students.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'SDE Intern',
    company: 'Simtrak Solutions',
    companylogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'May 2022 – July 2022',
    desc: 'As an SDE Intern at Simtrak, I was responsible for working on an invoice application using React.js, Chakra UI, and PostgreSQL. I focused on improving features, fixing bugs, and contributing to the overall development of the app. Through this experience, I gained hands-on experience in the full-stack development process and honed my skills in modern web technologies.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Technical Associate Intern',
    company: 'Yardstick',
    companylogo: '/img/icons/common/bleedAI.jpg',
    date: 'Jan 2022 - May 2022',
    desc: 'As a Technical Associate Intern at Yardstick, I worked on developing Moodle plugins in PHP and creating course content for Python for machine learning algorithms using tools such as NumPy and scikit-learn. I gained hands-on experience in implementing my technical knowledge to support and enhance the platform, contributing to the growth of the company',
  },
  {
    role: 'Mentor',
    company: 'Devsnest',
    companylogo: '/img/icons/common/wapidu.jpg',
    date: 'May 2022',
    desc: 'As a mentor at DevsNest, I gained experience in guiding individuals in both data structures and algorithms using Python and front-end web development. I provided technical support and taught practical applications of programming concepts, helping students to improve their skills and achieve their goals',
  },
]

export const projects = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/ayush/developer-portfolio',
    link: 'https://developer-portfolio-ayush.vercel.app/',
  },
  {
    name: 'AtlasMart',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/1ayush/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/ayush/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/ayush/Django-ecommerce',
  },
]

export const feedbacks = [
  {
    name: 'Mangalam Pandey',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
]

// option to hide or show the ContactUs component
export const showContactUs = true

// See object prototype on SEO.jsx page
export const seoData = {
  title: 'Ayush Singh',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Ayush Singh',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio/',
  keywords: [
    'Ayush',
    'Singh',
    '@ayush',
    'ayushsingh',
    'Portfolio',
    'Developer Portfolio ',
    'Ayush Singh Portfolio',
  ],
}
