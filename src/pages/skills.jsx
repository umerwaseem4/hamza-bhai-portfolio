import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Skills - Hamza Zafer</title>
        <meta
          name="description"
          content="Some Skills in which I'm proficient in."
        />
      </Head>
      <SimpleLayout
        title="Some Skills I'm proficient in."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Skills">
            <Tool title="Web Development">
              As a web developer, I specialize in crafting dynamic and
              user-centric digital experiences. With a keen eye for detail,
              I&apos;m dedicated to writing clean and efficient code that not
              only meets but exceeds expectations.
            </Tool>
            <Tool title="ML/AI">
              In the realm of machine learning, I explore the fascinating
              intersection of data and intelligence. With a focus on developing
              algorithms and models, I delve into the world of pattern
              recognition and predictive analytics
            </Tool>
            <Tool title="Databases">
              As a database enthusiast, I specialize in designing robust and
              efficient data architectures. Proficient in SQL and NoSQL
              technologies, I excel in creating scalable solutions that ensure
              seamless data management.
            </Tool>
            <Tool title="NextJs">
              In the world of web development, I specialize in leveraging
              Next.js to build high-performance and scalable React applications.
              With a focus on server-side rendering and seamless client-side
              navigation, I craft dynamic and responsive web solutions.
            </Tool>
            <Tool title="Python">
              In the coding realm, Python is my forte. As a versatile and
              powerful language, I harness Python&apos;s capabilities for
              everything from web development to data analysis and machine
              learning. With its clean syntax and extensive libraries, I thrive
              on creating efficient and scalable solutions that bring ideas to
              life.
            </Tool>
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
            <Tool title="React">
              In the realm of front-end development, I specialize in React,
              turning concepts into interactive and user-friendly interfaces.
              With a strong foundation in component-based architecture and state
              management, I craft dynamic and responsive web applications.
            </Tool>
            <Tool title="Javascript">
              JavaScript is my coding playground, where I bring websites to life
              with dynamic and interactive features. Proficient in both
              front-end and back-end development, I leverage the versatility of
              JavaScript to create seamless user experiences and robust
              server-side functionalities
            </Tool>
            <Tool title="Java/ASP.Net">
              Equally adept in Java and ASP.NET, I specialize in crafting robust
              and scalable solutions. Whether developing dynamic web
              applications or building enterprise-level systems, my proficiency
              spans diverse technologies.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
