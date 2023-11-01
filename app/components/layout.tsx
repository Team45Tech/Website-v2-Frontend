// layout.tsx

import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      {children}
      {/* If you need the div with id "root", you can keep it, but it's unusual for typical Next.js apps */}
      {/* <div id="root"></div> */}
    </div>
  )
}