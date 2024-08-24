'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarLink = ({children , href}: {children: React.ReactNode , href: string}) => {
    const isRoot = href.split('/').filter(entry => entry !== '').length === 1
    const pathName = usePathname()
    const active = isRoot ? pathName === href : pathName.startsWith(href)
  
    return (
      <Link href={href}>
          {children}
      </Link>
    )
  }
  
  export default SidebarLink
  
  