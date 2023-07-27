import '../styles/globals.css'
import { Inter } from 'next/font/google'
// import { ThemeProvider } from 'next-themes'


import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Usamas Portfolio',
  description: 'My Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="dark:bg-stone-900">
        {/* <ThemeProvider enableSystem={true} attribute="class"> */}
        
          {children}
          <Footer />
     
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
