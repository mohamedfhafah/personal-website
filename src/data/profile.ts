export type ContactLink = {
  label: string
  href: string
  variant?: "primary" | "secondary" | "ghost"
}

export const heroContent = {
  name: "Mohamed Fhafah",
  title: "Cybersecurity-focused Software Engineer",
  location: "Marseille, France",
  summary:
    "Master 1 Informatique (Fiabilité & Sécurité) student crafting resilient web platforms, secure networked systems, and AI-assisted defenses.",
  highlights: [
    "Security audit internship at Tanger Alliance",
    "JavaFX media explorer & distributed messaging projects",
    "Trilingual collaborator (Arabic / French / English)",
  ],
  actions: [
    { label: "Download CV", href: "/assets/cv/Mohamed_Fhafah_CV.pdf", variant: "primary" },
    { label: "Contact", href: "mailto:mohamedfhafah975@gmail.com", variant: "secondary" },
  ] satisfies ContactLink[],
  meta: {
    availability: "Open to internships and junior cybersecurity or software roles",
    focus: "Cyber defense • Secure Web • Network automation",
  },
}

export const aboutContent = {
  paragraphs: [
    "I’m a Master 1 Informatique (Fiabilité & Sécurité) student at Aix-Marseille Université, specializing in how secure software, resilient infrastructure, and AI-assisted defenses intersect. I enjoy translating complex risks into intuitive, human-friendly experiences.",
    "My academic journey spans secure web applications with Flask/JavaScript, advanced Java development, cryptography, and network programming. During my cybersecurity internship at Tanger Alliance I contributed to full security audits, phishing awareness modules, and a machine-learning powered DDoS detection interface.",
    "Beyond code, I thrive in multicultural contexts, speak Arabic, French, and English, and stay sharp through running and strength training. Collaboration, rigor, and empathy are the lenses through which I approach every project.",
  ],
  yearsCoding: 5,
  securityFocus: ["Audit & GRC", "Threat detection", "Networks"],
  techStack: ["python", "java", "flask", "react"],
  languages: [
    { flag: "🇲🇦", label: "Arabic · Native" },
    { flag: "🇫🇷", label: "French · Fluent" },
    { flag: "🇬🇧", label: "English · Fluent" },
  ],
}

export const contactDetails = {
  email: "mohamedfhafah975@gmail.com",
  phone: "+33 6 56 67 69 64",
  location: "Marseille, France",
  availability: "Open to internships and junior cybersecurity or software roles",
  timezone: "CET (UTC+1)",
  socials: [
    { label: "GitHub", href: "https://github.com/mohamedfhafah", variant: "ghost" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohamedfhafah", variant: "ghost" },
  ] satisfies ContactLink[],
}

export const navLinks = [
  { id: "about", href: "#about" },
  { id: "skills", href: "#skills" },
  { id: "experience", href: "#experience" },
  { id: "projects", href: "#projects" },
  { id: "blog", href: "#blog" },
  { id: "education", href: "#education" },
  { id: "contact", href: "#contact" },
]
