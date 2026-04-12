'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import SectionReveal from '@/components/ui/SectionReveal'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const emailY = useTransform(scrollYProgress, [0, 1], [20, -20])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="px-6 md:px-10 py-28 md:py-44"
      style={{ background: 'var(--green)', color: 'var(--green-fg)' }}
    >

      <SectionReveal>
        <div className="pb-5 mb-16"
             style={{ borderTop: '1px solid rgba(243,236,230,0.2)', paddingTop: '20px' }}>
          <h2 className="font-alfa text-[var(--green-fg)]"
              style={{ fontSize: 'clamp(34px, 5vw, 68px)' }}>
            Start a conversation
          </h2>
        </div>
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24">

        <SectionReveal>
          <div className="space-y-10">
            <p className="font-fragment leading-relaxed"
               style={{ fontSize: 'clamp(14px,1.3vw,17px)', color: 'rgba(243,236,230,0.7)' }}>
              No pitch decks. Just tell us what you&apos;re working on — we&apos;ll be straight
              about whether we&apos;re the right fit.
            </p>

            <div>
              <p className="label label-inv mb-3">Direct</p>
              <motion.a
                href="mailto:hello@asdfg.studio"
                style={{ y: emailY, fontSize: 'clamp(18px, 2.2vw, 28px)' }}
                className="font-alfa text-[var(--green-fg)] hover:text-[var(--acid)] transition-colors duration-150 block"
              >
                hello@asdfg.studio
              </motion.a>
            </div>

            <div style={{ borderTop: '1px solid rgba(243,236,230,0.15)', paddingTop: '24px' }}>
              <p className="label label-inv mb-2">Response time</p>
              <p className="font-fragment text-sm" style={{ color: 'rgba(243,236,230,0.5)' }}>
                Within one business day.
              </p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          {sent ? (
            <div className="p-10" style={{ border: '1px solid rgba(243,236,230,0.2)' }}>
              <p className="font-alfa text-[var(--green-fg)] text-3xl mb-3">Thank you.</p>
              <p className="font-fragment text-sm" style={{ color: 'rgba(243,236,230,0.6)' }}>
                We&apos;ll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 space-y-7"
                  style={{ border: '1px solid rgba(243,236,230,0.2)' }}>
              {[
                { k: 'name',  label: 'Name',  type: 'text',  ph: 'Your name' },
                { k: 'email', label: 'Email', type: 'email', ph: 'hello@yourbrand.com' },
              ].map(f => (
                <div key={f.k}>
                  <label className="label label-inv block mb-2">{f.label}</label>
                  <input
                    type={f.type} required
                    value={form[f.k as 'name' | 'email']}
                    onChange={e => setForm(p => ({ ...p, [f.k]: e.target.value }))}
                    placeholder={f.ph}
                    className="w-full bg-transparent py-2 font-fragment text-sm focus:outline-none transition-colors duration-150"
                    style={{
                      borderBottom: '1px solid rgba(243,236,230,0.25)',
                      color: 'var(--green-fg)',
                    }}
                  />
                </div>
              ))}
              <div>
                <label className="label label-inv block mb-2">What are you building?</label>
                <textarea
                  required rows={3}
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  placeholder="Tell us about your brand and what you need."
                  className="w-full bg-transparent py-2 font-fragment text-sm focus:outline-none resize-none transition-colors duration-150"
                  style={{
                    borderBottom: '1px solid rgba(243,236,230,0.25)',
                    color: 'var(--green-fg)',
                  }}
                />
              </div>
              <button type="submit" className="btn-pill btn-pill-inv w-full justify-center mt-1 text-[10px] py-2.5">
                Send →
              </button>
            </form>
          )}
        </SectionReveal>
      </div>
    </section>
  )
}
