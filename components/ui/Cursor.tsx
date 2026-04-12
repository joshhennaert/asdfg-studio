'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'motion/react'

export default function Cursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const scale  = useMotionValue(1)
  const [vw, setVw] = useState(1440)

  useEffect(() => {
    setVw(window.innerWidth)
    const onResize = () => setVw(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 })
  const springS = useSpring(scale,  { stiffness: 400, damping: 28 })

  const dotX = useSpring(mouseX, { stiffness: 1200, damping: 60 })
  const dotY = useSpring(mouseY, { stiffness: 1200, damping: 60 })

  const hue   = useTransform(mouseX, [0, vw], [25, 320])
  const color = useMotionTemplate`hsl(${hue}, 90%, 58%)`

  useEffect(() => {
    const move  = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY) }
    const enter = () => scale.set(1.8)
    const leave = () => scale.set(1)

    window.addEventListener('mousemove', move)

    const attach = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
      })
    }
    attach()

    const observer = new MutationObserver(attach)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [mouseX, mouseY, scale])

  return (
    <>
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          scale: springS,
        }}
      >
        <motion.div
          className="w-8 h-8 rounded-full"
          style={{ border: '1.5px solid', borderColor: color, opacity: 0.8 }}
        />
      </motion.div>

      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full"
          style={{ background: color }}
        />
      </motion.div>
    </>
  )
}
