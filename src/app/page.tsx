import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'

const clients = [
  ['Google Analytics'],
  ['NextJs'],
  ['React'],
  ['Tailwind'],
  ['Meta Ads'],
  ['Google Ads'],
  ['Lighthouse'],
  ['Supabase'],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Trabalhamos com as ferramentas mais eficientes
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client]) => (
              <li key={client}>
                <FadeIn>
                  {/* <Image className='w-[11.5rem] h-9' width={184} height={36} src={logo} alt={client} unoptimized /> */}
                  <b className="text-4xl font-extrabold text-white">{client}</b>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Serviços"
        title="Ajudamos você a identificar, explorar e responder a novas oportunidades."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Descubra, aproveite e responda a oportunidades com nossa assistência
          especializada, garantindo que você esteja sempre um passo à frente na
          busca pelo sucesso.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Desenvolvimento Web">
              Somos especialistas em criar sites intuitivos e eficientes que
              transformam visitantes em clientes, atendendo às suas necessidades
              e às de seu público.
            </ListItem>
            <ListItem title="Desenvolvimento de Aplicações">
              Desenvolvemos seu site seguindo as mais rigorosas políticas de
              segurança e privacidade, além de adotar as recomendações dos
              principais especialistas em desenvolvimento web em todo o mundo.
            </ListItem>
            <ListItem title="Tráfego">
              Nossa equipe de especialistas em tráfego trabalha diariamente para
              aprimorar, medir e otimizar o fluxo para o seu negócio,
              impulsionando seu crescimento constante
            </ListItem>
            <ListItem title="Aperfeiçoamento Contínuo">
              Nossa dedicação à melhoria contínua é evidente em nosso
              compromisso de aperfeiçoar constantemente seus sites e estratégias
              de tráfego pago. Estamos focados em impulsionar seu sucesso
              digital, otimizando cada aspecto do seu negócio online dia após
              dia
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Desbloqueie o potencial da sua presença na web.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Nosso compromisso é proporcionar resultados mensuráveis na internet.
            Ajudamos você a alcançar seus objetivos, aumentar sua visibilidade
            e, o mais importante, sua receita.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Services />

      <ContactSection />
    </>
  )
}
