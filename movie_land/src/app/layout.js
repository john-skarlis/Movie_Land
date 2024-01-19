import { Inter } from 'next/font/google'
import './globals.css'
import FlowbiteScript from "@/app/components/FlowbiteScript";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Land',
  description: 'A movie related app',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
      <FlowbiteScript/>
      </html>
  )
}
