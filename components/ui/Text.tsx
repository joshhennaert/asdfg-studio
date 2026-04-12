'use client'

// Adapted from 21st.dev responsive text component
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

const BREAKPOINTS = { SM: 0, MD: 600, LG: 960, XL: 1200 }

export const useResponsive = (styles: any) => {
  const [responsiveStyles, setResponsiveStyles] = useState<any>()

  useEffect(() => {
    const getResponsive = (s: any) => {
      if (typeof s !== 'object') return s
      let current: any
      if (s.sm != null && window.innerWidth >= BREAKPOINTS.SM) current = s.sm
      if (s.md != null && window.innerWidth >= BREAKPOINTS.MD) current = s.md
      if (s.lg != null && window.innerWidth >= BREAKPOINTS.LG) current = s.lg
      if (s.xl != null && window.innerWidth >= BREAKPOINTS.XL) current = s.xl
      return current
    }
    const listener = () => setResponsiveStyles(getResponsive(styles))
    listener()
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(styles)])

  return responsiveStyles
}

const variants = {
  'heading-72': 'font-semibold leading-[4.5rem] tracking-[-4.32px]',
  'heading-64': 'font-semibold leading-[4rem] tracking-[-3.84px]',
  'heading-56': 'font-semibold leading-[3.5rem] tracking-[-3.36px]',
  'heading-48': 'font-semibold leading-[3.5rem] tracking-[-2.88px]',
  'heading-40': 'font-semibold leading-[3rem] tracking-[-2.4px]',
  'heading-32': 'font-semibold leading-10 tracking-[-1.28px]',
  'heading-24': 'font-semibold leading-8 tracking-[-0.96px]',
  'heading-20': 'font-semibold leading-[1.625rem] tracking-[-0.4px]',
  'heading-16': 'font-semibold leading-6 tracking-[-0.32px]',
  'button-16':  'font-medium leading-5',
  'button-14':  'font-medium leading-5',
  'button-12':  'font-medium leading-4',
  'label-20':   'leading-8',
  'label-18':   'leading-5',
  'label-16':   'leading-5',
  'label-14':   'leading-5',
  'label-13':   'leading-4',
  'label-12':   'leading-4',
  'copy-24':    'leading-9',
  'copy-20':    'leading-9',
  'copy-18':    'leading-7',
  'copy-16':    'leading-6',
  'copy-14':    'leading-5',
  'copy-13':    'leading-[1.125rem]',
}

export type TTextVariant = keyof typeof variants

interface ResponsiveProp<T> { sm?: T; md?: T; lg?: T; xl?: T }

interface TextProps {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  size?: number | ResponsiveProp<number>
  variant?: TTextVariant | ResponsiveProp<TTextVariant>
  color?: string
  children?: React.ReactNode
  truncate?: boolean | number
  align?: React.CSSProperties['textAlign']
  monospace?: boolean
  className?: string
}

export const Text = ({
  as: Tag = 'p',
  size = 16,
  variant,
  color,
  children,
  truncate,
  align,
  monospace = false,
  className,
}: TextProps) => {
  let _size = useResponsive(size) ?? (typeof size === 'number' ? size : 16)
  const _variant = useResponsive(variant) ?? ''

  if (_variant) _size = parseInt((_variant as string).split('-')[1])

  return (
    <Tag
      className={clsx(
        monospace ? 'font-spacemono' : 'font-sans',
        !_variant && _size >= 48 && 'font-bold',
        !_variant && _size >= 20 && _size < 48 && 'font-semibold',
        !_variant && _size >= 72 && 'leading-[4.5rem]',
        !_variant && _size >= 64 && _size < 72 && 'leading-[4rem]',
        !_variant && _size >= 48 && _size < 64 && 'leading-[3.5rem]',
        !_variant && _size >= 32 && _size < 48 && 'leading-10',
        !_variant && _size >= 24 && _size < 32 && 'leading-8',
        !_variant && _size >= 16 && _size < 24 && 'leading-6',
        !_variant && _size >= 14 && _size < 16 && 'leading-5',
        !!_variant && variants[_variant as TTextVariant],
        typeof truncate === 'boolean' && 'truncate',
        className,
      )}
      style={{
        fontSize: `${_size}px`,
        color: color ?? undefined,
        textAlign: align,
        display: typeof truncate === 'number' ? '-webkit-box' : undefined,
        WebkitBoxOrient: typeof truncate === 'number' ? 'vertical' : undefined,
        WebkitLineClamp: typeof truncate === 'number' ? truncate : undefined,
        overflow: typeof truncate === 'number' ? 'hidden' : undefined,
      }}
    >
      {children}
    </Tag>
  )
}

export default Text
