import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Desbloqueie o potencial da sua presença na web.',
  },
  alternates: {
    canonical: 'https://studio-teal.vercel.app',
    languages: {
      pt: 'pt-BR',
    },
  },
  themeColor: 'light',
  description:
    'Enquanto outros serviços agrícolas são inovadores, nós abraçamos a tecnologia dos drones para aumentar a eficiência e a precisão.',
  openGraph: {
    title: 'Studio',
    siteName: 'Studio',
    locale: 'pt_BR',
    images: [
      {
        url: 'favicon.ico',
        width: 629,
        height: 629,
        alt: 'Um D grande seguindo de enuv em minusculo',
      },
      {
        url: 'favicon.ico' as string,
        width: 1800,
        height: 1600,
        alt: 'Um D grande seguindo de enuv em minusculo',
      },
    ],
    description:
      'Nosso compromisso é proporcionar resultados mensuráveis na internet. Ajudamos você a alcançar seus objetivos, aumentar sua visibilidade e, o mais importante, sua receita.' as string,
    type: 'website',
  },
  icons: {
    icon: 'favicon.ico',
    shortcut: 'favicon.ico',
    apple: 'favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio',
    description:
      'Nosso compromisso é proporcionar resultados mensuráveis na internet. Ajudamos você a alcançar seus objetivos, aumentar sua visibilidade e, o mais importante, sua receita.' as string,
    images: 'favicon.ico',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
