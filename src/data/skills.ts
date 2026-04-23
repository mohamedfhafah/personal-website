export type ServiceCard = {
  id: "security" | "web" | "networks"
}

export type SkillGroup = {
  id: "programming" | "web" | "dataOps" | "security" | "soft" | "languages"
  items: string[]
}

export const services: ServiceCard[] = [
  { id: "security" },
  { id: "web" },
  { id: "networks" },
]

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    items: ["Java", "C", "Python", "JavaFX", "NASM"],
  },
  {
    id: "web",
    items: ["React", "TypeScript", "Flask", "Tailwind", "Framer Motion"],
  },
  {
    id: "dataOps",
    items: ["SQL", "SQLite", "Git", "Bash"],
  },
  {
    id: "security",
    items: ["Audit", "Cryptography", "Detection", "Network hardening"],
  },
  {
    id: "soft",
    items: ["Team leadership", "Adaptability", "Problem solving", "Productivity"],
  },
  {
    id: "languages",
    items: ["Arabic", "French", "English"],
  },
]
