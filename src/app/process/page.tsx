import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Trabalhamos em estreita colaboração com nossos clientes para entender
          suas{' '}
          <strong className="font-semibold text-neutral-950">
            necessidades
          </strong>{' '}
          and e objetivos, incorporando-nos em suas operações diárias para
          entender o que faz seu negócio funcionar.
        </p>
      </div>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-8 text-base text-neutral-600">
        <p>
          Com base na fase de descoberta, iniciamos a construção do site,
          seguindo três pilares:
        </p>
        <List className="mt-8">
          <ListItem title="Simplicidade">
            Um site que você e seus clientes entendem e naveguem de forma
            intuitiva e fluida.
          </ListItem>
          <ListItem title="Eficiente">
            Elimine a espera pelo carregamento do site.
          </ListItem>
          <ListItem title="Para todos">
            Totalmente acessível tanto em computadores quanto em dispositivos
            móveis.
          </ListItem>
        </List>
      </div>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Ads" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Em nossa abordagem abrangente, esta é a fase em que iniciamos a gestão
          estratégica do tráfego direcionado para o seu site, concentrando-nos
          principalmente no{' '}
          <strong className="font-semibold text-neutral-950">Google</strong>, o
          gigante das buscas.
        </p>
        <p>
          Através de um trabalho árduo e estratégias bem planejadas, você poderá
          observar{' '}
          <strong className="font-semibold text-neutral-950">mudanças</strong>{' '}
          nos resultados para o seu negócio e no aumento da sua receita em
          questão de meses
        </p>
      </div>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Nossos valores"
        title="Equilibrando confiabilidade e inovação"
      >
        <p>
          Nosso compromisso é fornecer serviços confiáveis e consistentes,
          enquanto abraçamos a inovação para manter sua presença online sempre à
          frente da curva. Confiabilidade é nossa base, e a inovação é o nosso
          horizonte, garantindo que você esteja sempre no caminho certo para o
          sucesso digital.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticuloso">
            Adotamos uma abordagem meticulosa em cada projeto, focando na
            excelência e na atenção aos detalhes, para oferecer resultados
            notáveis e atender às expectativas de nossos clientes.
          </GridListItem>
          <GridListItem title="Eficiente">
            Nossa abordagem eficiente garante que seus objetivos sejam
            alcançados de forma otimizada, permitindo que você aproveite ao
            máximo cada recurso e oportunidade disponível.
          </GridListItem>
          <GridListItem title="Adaptável">
            Somos uma equipe adaptável, pronta para enfrentar desafios e ajustar
            estratégias de acordo com as mudanças do cenário digital, garantindo
            que sua presença online seja sempre relevante e eficaz.
          </GridListItem>
          <GridListItem title="Honesto">
            Guiados por princípios de honestidade, trabalhamos com transparência
            em todas as etapas do processo, garantindo que nossos clientes
            tenham informações claras e confiáveis para tomar decisões
            informadas sobre suas estratégias digitais.
          </GridListItem>
          <GridListItem title="Leal">
            Nossa lealdade aos clientes é inabalável. Estamos comprometidos em
            ser parceiros fiéis em sua jornada digital, sempre trabalhando em
            prol do sucesso sustentável e a longo prazo de sua presença online.
          </GridListItem>
          <GridListItem title="Inovador">
            Nosso espírito inovador está no coração de tudo o que fazemos.
            Buscamos constantemente novas soluções, estratégias e tecnologias
            para impulsionar o crescimento de nossos clientes e mantê-los na
            vanguarda do cenário digital em constante evolução.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Nosso processo',
  description:
    'Acreditamos na eficiência e na maximização de nossos recursos para oferecer o melhor valor aos nossos clientes.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Nosso processo" title="Como trabalhamos">
        <p>
          Acreditamos na eficiência e na maximização de nossos recursos para
          oferecer o melhor valor aos nossos clientes.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
