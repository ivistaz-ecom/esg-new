import Header from "@/components/Header/Header"
import "@/styles/globals.css"

export const metadata = {
  title: "Empowering People, Enhancing Planet, Ensuring Prosperity | ESG-One",
  description:
    "Discover how ESG-One drives holistic sustainability by integrating responsible business practices across entire value chains through comprehensive ESG solutions.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Empowering People, Enhancing Planet, Ensuring Prosperity | ESG-One
        </title>
        <meta
          name="description"
          content="Empowering People, Enhancing Planet, Ensuring Prosperity | ESG-One"
        />
        <link rel="canonical" href="https://cms.org.in/business-catalyst/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Empowering People, Enhancing Planet, Ensuring Prosperity | ESG-One"
        />
        <meta
          property="og:description"
          content="Discover how ESG-One drives holistic sustainability by integrating responsible business practices across entire value chains through comprehensive ESG solutions."
        />
        <meta property="og:url" content="https://cms.org.in/esg" />
        <meta property="og:site_name" content="CMS.ORG.IN" />
        <meta
          property="article:modified_time"
          content="2024-05-15T06:00:37+00:00"
        />
        <meta
          property="og:image"
          content="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/blogs/1.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
