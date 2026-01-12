import { useEffect, useRef, useState } from 'react'

export default function FadeUp({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.2 } // trigger when 20% of element is visible
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out
        ${visible ? 'animate-in fade-in slide-in-from-bottom' : 'opacity-0 translate-y-6'}
      `}
    >
      {children}
    </div>
  )
}
