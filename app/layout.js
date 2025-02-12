import Header from "@/components/Header/Header"
import "@/styles/globals.css"

export const metadata = {}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
  
      </head> */}
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
