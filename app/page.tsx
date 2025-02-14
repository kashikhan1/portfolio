"use client"

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  Code,
  Database,
  Server,
  PenToolIcon as Tool,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import type React from "react"
import ContactForm from "@/components/ContactForm";

const skills = {
  Languages: ["JavaScript", "TypeScript", "Python"],
  FrameworksAndLibraries: ["Node.js", "React", "Nest.js", "Next.js", "Express.js", "Angular", "Ionic"],
  Databases: ["PostgreSQL", "MongoDB", "Cassandra", "Redis", "Elasticsearch"],
  ToolsAndTechnologies: [
    "Docker",
    "Kubernetes",
    "AWS (EC2, S3, Load Balancer)",
    "Kafka",
    "RabbitMQ",
    "Jest",
    "Chai",
    "OpenAI LLM",
    "Tailwind",
    "Material UI",
    "LangGraph/Langchain"
  ],
}

const experiences = [
  {
    title: "Tech Lead | Senior Node Js Developer",
    company: "Ali Square",
    period: "05/2023 - Present",
    location: "Remote",
    responsibilities: [
      "Led the technical direction of projects, making key architectural decisions.",
      "Mentored and guided junior developers.",
      "Designed, developed, and maintained software applications.",
      "Conducted code reviews and resolved complex technical issues.",
    ],
  },
  {
    title: "Senior Node JS Developer",
    company: "DevSurge",
    period: "01/2022 - 05/2023",
    location: "Lahore, Pakistan (Remote)",
    responsibilities: [
      "Drove high-level architectural discussions and implemented solutions.",
      "Achieved a 75% reduction in processing time for high-volume orders by redesigning the algorithm.",
      "Developed and optimized scripts for automating data-intensive tasks.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "glasc.io",
    period: "05/2018 - 01/2022",
    location: "Johannesburg, South Africa (Remote)",
    responsibilities: [
      "Developed robust software architectures aligning with business goals.",
      "Designed and supported full-stack software components.",
      "Identified and resolved critical bugs for a stable and scalable system.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Barefoot&Co",
    period: "01/2017 - 03/2018",
    location: "Belgium (Remote)",
    responsibilities: [
      "Developed backend architectures including APIs and databases.",
      "Optimized system performance for efficiency and scalability.",
      "Integrated APIs and optimized full-stack troubleshooting.",
    ],
  },
]

const projects = [
  {
    name: "Oware - Devsurge",
    description: "Tech-driven warehousing and distribution for B2B and retail clients.",
    url: "https://oware.co",
    // github: "https://github.com/kashikhan1/oware-project",
    skills: ["Node.js", "React", "PostgreSQL", "Docker", "AWS","Redis", "MQTT", "MySQL", "Elasticsearch", "RabbitMQ", "CI/CD"],
    image: "/oware.png",
  },
  {
    name: "Turing Insights - glasc.io",
    description: "Real-time payload and vehicle tracking solution.",
    url: "https://turing-insights.com",
    // github: "https://github.com/kashikhan1/turing-insights",
    skills: ["Node.js", "React", "MongoDB", "Typescript", "Kafka", "PostgreSQL", "MongoDB", "Cassandra", "Redis", "Elasticsearch","Antd", "Socket.io", "Google Maps API", "AWS", "Kubernetes", "Docker", "RabbitMQ", "CI/CD"],  
    image: "/turing.png",
  },
  {
    name: "Kowo - Barefoot&Co",
    description: "Web and mobile app for inter-company carpooling.",
    url: "https://www.kowo.io",
    // github: "https://github.com/kashikhan1/kowo-app",
    skills: ["Express.js","Ionic","Angular" ,"Mysql",  "Google Maps API", "AWS"],
    image: "/kowo.png",
  },
  {
    name: "DEMOCY (Hybrid App)",
    description: "Democracy-based user feedback system.",
    url: "https://democy.de/",
    // github: "https://github.com/kashikhan1/democy-app",
    skills: ["Ionic", "Angular", "Node.js", "MongoDB", "Socket.io", "NEXT.js", "AWS", "Docker", "REACT"],
    image: "/democy.png",
  },
  {
    name: "Ride Pro - Alisquare",
    description: "Ride-sharing and car rental services combined into a seamless platform.",
    // url: "N/A",
    // github: "https://github.com/kashikhan1/ride-pro",
    skills: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe API", "Google Maps API", "Docker", "AWS", "Redis", "Elasticsearch", "RabbitMQ", "CI/CD"],
    image: "/ueber.png",
  },
  {
    name: "Invoice Simple",
    description: "Fast and easy invoice app for sending invoices and estimates.",
    // url: "N/A",
    // github: "https://github.com/kashikhan1/invoice-simple",
    skills: ["React", "Express.js", "MongoDB", "PDF.js", "Stripe"],
    image: "/invoice.png",
  },
]

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/headshot.png?height=150&width=150"
            alt="Muhammad Kashif Khan"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-8 border-4 border-white shadow-lg"
          />
          <h1 className="text-5xl font-bold mb-4">Muhammad Kashif Khan</h1>
          <h2 className="text-2xl mb-6">Node.js Developer | Full Stack Developer</h2>
          <p className="text-xl mb-8">Islamabad, Pakistan</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/kashikhan1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-kashif-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:imkashifkhanofficial@gmail.com" className="hover:text-gray-300 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="tel:+923455064051" className="hover:text-gray-300 transition-colors">
              <Phone className="w-8 h-8" />
            </a>
          </div>
          <a
            href="/Muhammad_Kashif_Khan_Resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Download className="w-6 h-6 mr-2" />
            Download Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Highly skilled Senior Full Stack Developer with over 8+ years of experience in designing and developing
            robust web applications and backend systems. Expertise in Node.js, React.js, and PostgreSQL, with a strong
            focus on REST API development. Proven ability to collaborate effectively with clients and stakeholders,
            delivering top-tier software solutions that meet business objectives. Experienced in Agile methodologies,
            code maintenance, and troubleshooting.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  {category === "Languages" && <Code className="w-6 h-6 mr-2 text-blue-500" />}
                  {category === "FrameworksAndLibraries" && <Server className="w-6 h-6 mr-2 text-green-500" />}
                  {category === "Databases" && <Database className="w-6 h-6 mr-2 text-yellow-500" />}
                  {category === "ToolsAndTechnologies" && <Tool className="w-6 h-6 mr-2 text-purple-500" />}
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-1 before:bg-blue-500"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full -translate-x-1.5"></div>
                <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-lg text-gray-600 mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-gray-600 mb-4">{exp.location}</p>
                <ul className="list-disc list-inside text-gray-700">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="mb-2">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="p-4 w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Technology Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    {project.url  && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 font-medium flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Project
                      </a>
                    )}
                    {project.github && (  
                      <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
                      >
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <ContactForm></ContactForm>
      </section>
    </div>
  )
}

