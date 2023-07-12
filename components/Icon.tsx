'use client'

// import { Icon as IconifyIcon } from '@iconify/react'

export default function Icon({ icon, className }: { icon: string; className?: string }) {
  // return <IconifyIcon icon={icon} className={className} />
  return <div className={className}>{icon}</div>
}
