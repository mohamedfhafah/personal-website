import { contactDetails, heroContent, navLinks } from "../../data/profile"
import { useI18n } from "../../i18n/I18nProvider"

export function Footer() {
  const { t } = useI18n()
  const navLabels = t.nav as Record<string, string>
  return (
    <footer className="border-t border-white/10 bg-midnight/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-heading text-2xl text-warm">{heroContent.name}</p>
          <p className="text-sm text-warm/70">{heroContent.title}</p>
          <p className="mt-4 text-sm text-warm/60">{contactDetails.location}</p>
          <a href={`mailto:${contactDetails.email}`} className="mt-2 inline-flex text-cyber">
            {contactDetails.email}
          </a>
        </div>
        <div className="flex flex-1 flex-wrap gap-8 text-sm text-warm/60">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-warm/40">{t.footer.navigate}</p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="hover:text-cyber">
                    {navLabels?.[link.id] ?? link.id}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-warm/40">{t.footer.connect}</p>
            <ul className="mt-3 space-y-2">
              {contactDetails.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer" className="hover:text-cyber">
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/assets/cv/Mohamed_Fhafah_CV.pdf" className="hover:text-cyber">
                  {t.footer.resume}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-warm/40">
        © {new Date().getFullYear()} Mohamed Fhafah. Crafted with React 19, deliberate motion, and secure-by-design thinking.
      </p>
    </footer>
  )
}
