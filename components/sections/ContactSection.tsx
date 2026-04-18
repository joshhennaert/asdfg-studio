'use client'

import { useState, useRef } from 'react'
import { motion } from 'motion/react'
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import { ClipReveal } from '@/components/ui/ClipReveal'
import { DrawLine } from '@/components/ui/DrawLine'

const HEADING_FONT = '"Neue Haas Unica", "Helvetica Neue", Arial, sans-serif'
const BODY_FONT    = '"EB Garamond", Garamond, Georgia, serif'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const turnstileRef = useRef<TurnstileInstance>(null)

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())

  const handleEmailBlur = () => {
    if (form.email && !isValidEmail(form.email)) {
      setEmailError('Please enter a valid email address.')
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidEmail(form.email)) {
      setEmailError('Please enter a valid email address.')
      return
    }
    if (!token) return
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, token }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
    } catch {
      setError(true)
      turnstileRef.current?.reset()
      setToken(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-40 bg-bg">
      <div className="mx-auto px-6 md:px-12" style={{ maxWidth: 1200 }}>

      <div className="mb-16">
        <DrawLine />
        <div className="pt-6">
          <ClipReveal>
            <h2 className="text-fg leading-tight" style={{ fontFamily: HEADING_FONT, fontWeight: 900, fontSize: 'clamp(22px, 3vw, 40px)', letterSpacing: '-0.02em' }}>
              Have a brand that feels stronger than the site behind it?
            </h2>
          </ClipReveal>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-24">

        {/* Left — info */}
        <div className="space-y-10">
          <p className="text-fg/60 leading-relaxed" style={{ fontFamily: BODY_FONT, fontSize: '18px' }}>
            Let&apos;s build a digital presence that matches it.
          </p>

          <div>
            <a
              href="mailto:hello@asdfg.studio"
              className="text-fg hover:opacity-50 transition-opacity duration-150"
              style={{ fontFamily: HEADING_FONT, fontWeight: 700, fontSize: 'clamp(20px, 2vw, 30px)' }}
            >
              hello@asdfg.studio
            </a>
          </div>

          <div className="pt-6 border-t border-fg/10">
            <p className="text-fg/50" style={{ fontFamily: BODY_FONT, fontSize: '18px' }}>
              Taking on a limited number of projects at a founding rate.
            </p>
          </div>
        </div>

        {/* Right — form */}
        {sent ? (
          <motion.div className="flex items-start pt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div>
              <h3 className="text-fg mb-2" style={{ fontFamily: HEADING_FONT, fontWeight: 700, fontSize: '32px' }}>
                Thank you.
              </h3>
              <p className="text-fg/50" style={{ fontFamily: BODY_FONT, fontSize: '18px' }}>
                We&apos;ll be in touch within one business day.
              </p>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {[
              { k: 'name',  label: 'Name',  type: 'text',  ph: 'Your name',           autocomplete: 'name'  },
              { k: 'email', label: 'Email', type: 'email', ph: 'hello@yourbrand.com',  autocomplete: 'email' },
            ].map(f => (
              <div key={f.k}>
                <label
                  htmlFor={`field-${f.k}`}
                  className="font-fragment text-fg/60 block mb-2"
                  style={{ fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                >
                  {f.label}
                </label>
                <input
                  id={`field-${f.k}`}
                  type={f.type}
                  required
                  autoComplete={f.autocomplete}
                  value={form[f.k as 'name' | 'email']}
                  onChange={e => { setForm(p => ({ ...p, [f.k]: e.target.value })); if (f.k === 'email') setEmailError('') }}
                  onBlur={f.k === 'email' ? handleEmailBlur : undefined}
                  placeholder={f.ph}
                  className="w-full bg-transparent pb-3 text-fg focus:outline-none placeholder:text-fg/35 border-b border-fg/20 focus:border-fg/60 transition-colors duration-150"
                  style={{ fontFamily: BODY_FONT, fontSize: '18px', borderBottomColor: f.k === 'email' && emailError ? '#BE185D' : undefined }}
                />
                {f.k === 'email' && emailError && (
                  <p style={{ fontFamily: BODY_FONT, fontSize: '14px', color: '#BE185D', marginTop: 6 }}>{emailError}</p>
                )}
              </div>
            ))}
            <div>
              <label htmlFor="field-service" className="font-fragment text-fg/60 block mb-2" style={{ fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                I&apos;m interested in
              </label>
              <select
                id="field-service"
                required
                value={form.service}
                onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                className="w-full bg-transparent pb-3 text-fg focus:outline-none border-b border-fg/20 focus:border-fg/60 transition-colors duration-150 appearance-none cursor-pointer"
                style={{ fontFamily: BODY_FONT, fontSize: '18px', color: form.service ? 'var(--fg)' : 'rgba(243,236,230,0.25)' }}
              >
                <option value="" disabled style={{ background: '#1C1C1C', color: '#F3ECE6' }}>Select a service</option>
                <option value="flagship-sprint"      style={{ background: '#1C1C1C', color: '#F3ECE6' }}>Digital Flagship Sprint</option>
                <option value="asset-direction-pack" style={{ background: '#1C1C1C', color: '#F3ECE6' }}>Asset Direction Pack</option>
                <option value="page-extensions"      style={{ background: '#1C1C1C', color: '#F3ECE6' }}>Page Extensions</option>
                <option value="general"              style={{ background: '#1C1C1C', color: '#F3ECE6' }}>General Enquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="field-message" className="font-fragment text-fg/60 block mb-2" style={{ fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                What are you building?
              </label>
              <textarea
                id="field-message"
                required
                rows={3}
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                placeholder="Tell us about the brand."
                className="w-full bg-transparent pb-3 text-fg focus:outline-none placeholder:text-fg/35 border-b border-fg/20 focus:border-fg/60 transition-colors duration-150 resize-none"
                style={{ fontFamily: BODY_FONT, fontSize: '18px' }}
              />
            </div>
            <Turnstile
              ref={turnstileRef}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={setToken}
              onExpire={() => setToken(null)}
              options={{ theme: 'dark' }}
            />
            {error && (
              <p style={{ fontFamily: BODY_FONT, fontSize: '15px', color: '#BE185D' }}>
                Something went wrong. Please try again or email us directly.
              </p>
            )}
            <button type="submit" disabled={loading || !token} className="btn-pill w-full justify-center" style={{
              background: '#F3ECE6',
              color: '#1C1C1C',
              borderColor: '#1C1C1C',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#BE185D'
                e.currentTarget.style.color = '#F3ECE6'
                e.currentTarget.style.borderColor = '#BE185D'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#F3ECE6'
                e.currentTarget.style.color = '#1C1C1C'
                e.currentTarget.style.borderColor = '#1C1C1C'
              }}
            >
              {loading ? 'Sending…' : 'Enquire →'}
            </button>
          </form>
        )}
      </div>
      </div>
    </section>
  )
}
