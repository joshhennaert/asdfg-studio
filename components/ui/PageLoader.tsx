'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const WORDS = ['ASSEMBLING', 'CRAFTING', 'FINALIZING']

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const loaderTextRef = useRef<HTMLHeadingElement>(null)
  const wordIndexRef  = useRef(0)
  const timers        = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    const loaderText = loaderTextRef.current
    if (!loaderText) return

    function animateWord() {
      if (!loaderText) return
      const word = WORDS[wordIndexRef.current]
      loaderText.innerHTML = ''

      const chars = word.split('').map((char, index) => {
        const span = document.createElement('span')
        span.className = 'char'
        span.textContent = char

        const fromX    = (Math.random() - 0.5) * 800
        const fromY    = (Math.random() - 0.5) * 800
        const fromZ    = (Math.random() - 0.5) * 800
        const fromRotX = (Math.random() - 0.5) * 360
        const fromRotY = (Math.random() - 0.5) * 360
        span.style.setProperty('--transform-from', `translate3d(${fromX}px,${fromY}px,${fromZ}px) rotateX(${fromRotX}deg) rotateY(${fromRotY}deg)`)
        span.style.animationName = 'fly-in'
        span.style.animationDelay = `${index * 0.05}s`

        loaderText.appendChild(span)
        return span
      })

      // Fly out
      const t1 = setTimeout(() => {
        chars.forEach((span, index) => {
          const toX    = (Math.random() - 0.5) * 800
          const toY    = (Math.random() - 0.5) * 800
          const toZ    = (Math.random() - 0.5) * 800
          const toRotX = (Math.random() - 0.5) * 360
          const toRotY = (Math.random() - 0.5) * 360
          span.style.setProperty('--transform-to', `translate3d(${toX}px,${toY}px,${toZ}px) rotateX(${toRotX}deg) rotateY(${toRotY}deg)`)
          span.style.animationName = 'fly-out'
          span.style.animationDelay = `${(chars.length - index) * 0.05}s`
        })
      }, 1800)

      // Next word or dismiss
      const t2 = setTimeout(() => {
        wordIndexRef.current = (wordIndexRef.current + 1) % WORDS.length
        if (wordIndexRef.current === 0) {
          // Cycled through all words — hide loader
          setVisible(false)
        } else {
          animateWord()
        }
      }, 2800)

      timers.current.push(t1, t2)
    }

    animateWord()
    return () => timers.current.forEach(clearTimeout)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: 'var(--fg)', perspective: '800px' }}
        >
          {/* Logo */}
          <p className="label absolute top-6 left-6" style={{ color: 'rgba(243,236,230,0.4)' }}>
            asdfg.studio
          </p>

          {/* Kinetic word */}
          <h1
            ref={loaderTextRef}
            className="font-alfa whitespace-nowrap"
            style={{
              fontSize: 'clamp(40px, 9vw, 130px)',
              color: 'var(--green-fg)',
              fontWeight: 900,
              perspective: '800px',
            }}
          />

          {/* Progress line */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px]"
            style={{ background: 'var(--acid)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: WORDS.length * 2.8 - 0.5, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
