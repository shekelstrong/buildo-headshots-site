import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Бизнес-фото на аву — Buildo Headshots",
  description: "AI-аватары для резюме, соцсетей и LinkedIn за 30 секунд",
  themeColor: "#7C3AED",
  openGraph: {
    title: "Buildo Headshots",
    description: "AI-аватары для резюме, соцсетей и LinkedIn за 30 секунд",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="dark">
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  )
}
