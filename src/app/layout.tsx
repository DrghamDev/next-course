import Navbar from '@/app/layouts/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import AuthProvider from './providers/AuthProvider'

export const metadata: Metadata = {
  title: 'Mosh next course',
  description: 'this is mosh next course',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="dark" lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main className="container mx-auto">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
