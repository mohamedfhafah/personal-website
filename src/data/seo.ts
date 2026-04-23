import { contactDetails, heroContent } from "./profile"
import { projects } from "./projects"

const baseUrl = "https://mohamedfhafah.dev"
const portraitPath = "/assets/images/profile.jpg"

const projectSchemas = projects.map((project, index) => ({
  "@type": "CreativeWork",
  position: index + 1,
  name: project.title,
  description: project.description,
  image: `${baseUrl}${project.image}`,
  url: `${baseUrl}#projects`,
  keywords: project.stack.join(", "),
}))

export const siteMeta = {
  title: `${heroContent.name} · ${heroContent.title}`,
  description: heroContent.summary,
  url: baseUrl,
  image: `${baseUrl}${portraitPath}`,
  keywords: [
    "cybersecurity",
    "software engineer",
    "react",
    "secure frontend",
    "network security",
    "flask",
    "java",
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: heroContent.name,
        jobTitle: heroContent.title,
        description: heroContent.summary,
        image: `${baseUrl}${portraitPath}`,
        email: `mailto:${contactDetails.email}`,
        telephone: contactDetails.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: contactDetails.location,
          addressCountry: "FR",
        },
        sameAs: contactDetails.socials.map((social) => social.href),
        url: baseUrl,
      },
      {
        "@type": "ItemList",
        name: "Mohamed Fhafah Featured Projects",
        itemListElement: projectSchemas,
      },
    ],
  },
}
