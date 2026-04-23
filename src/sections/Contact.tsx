import type { FormEvent } from "react"
import { Section } from "../components/layout/Section"
import { Button } from "../components/ui/Button"
import { contactDetails } from "../data/profile"
import { useI18n } from "../i18n/I18nProvider"

export function ContactSection() {
  const { t } = useI18n()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get("name")?.toString() ?? ""
    const email = formData.get("email")?.toString() ?? ""
    const message = formData.get("message")?.toString() ?? ""

    const subject = encodeURIComponent(`Portfolio contact from ${name || "website visitor"}`)
    const body = encodeURIComponent(`Sender: ${name}\nEmail: ${email}\n\n${message}`)

    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`
    event.currentTarget.reset()
  }

  return (
    <Section
      id="contact"
      title={t.contact.title}
      eyebrow={t.contact.eyebrow}
      frameless
      contentClassName="grid gap-10 lg:grid-cols-2"
    >
      <div className="glass-panel p-6 text-start">
        <p className="text-sm uppercase tracking-[0.3em] text-warm/50">{contactDetails.availability}</p>
        <h3 className="mt-3 text-3xl font-heading text-warm">{t.contact.headline}</h3>
        <p className="mt-4 text-sm text-warm/70">{t.contact.message}</p>
        <dl className="mt-6 space-y-4 text-sm">
          <div>
            <dt className="text-warm/40">Email</dt>
            <dd>
              <a href={`mailto:${contactDetails.email}`} className="text-cyber">
                {contactDetails.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-warm/40">Phone</dt>
            <dd className="text-warm/80">{contactDetails.phone}</dd>
          </div>
          <div>
            <dt className="text-warm/40">Location</dt>
            <dd className="text-warm/80">{contactDetails.location}</dd>
          </div>
          <div>
            <dt className="text-warm/40">Timezone</dt>
            <dd className="text-warm/80">{contactDetails.timezone}</dd>
          </div>
        </dl>
        <div className="mt-6 flex flex-wrap gap-3">
          {contactDetails.socials.map((link) => (
            <Button key={link.label} as="a" href={link.href} variant={link.variant} target="_blank" rel="noreferrer">
              {link.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="glass-panel p-6 text-start">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-warm/60" htmlFor="name">
              {t.contact.form.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="input-surface mt-1 w-full rounded-2xl px-4 py-3"
              placeholder={t.contact.form.namePlaceholder}
            />
          </div>
          <div>
            <label className="text-sm text-warm/60" htmlFor="email">
              {t.contact.form.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="input-surface mt-1 w-full rounded-2xl px-4 py-3"
              placeholder={t.contact.form.emailPlaceholder}
            />
          </div>
          <div>
            <label className="text-sm text-warm/60" htmlFor="message">
              {t.contact.form.details}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="input-surface mt-1 w-full rounded-2xl px-4 py-3"
              placeholder={t.contact.form.detailsPlaceholder}
            />
          </div>
          <Button type="submit" className="w-full">
            {t.contact.form.button}
          </Button>
          <p className="text-xs text-warm/50">{t.contact.respects}</p>
        </form>
      </div>
    </Section>
  )
}
