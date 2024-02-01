import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Hamza Zafar</title>
        <meta
          name="description"
          content="I’m Hamza Zafar. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src="https://avatars.githubusercontent.com/u/45764331?v=4"
                alt=""
                width="300" // Set an appropriate width based on your design
                height="300" // Set an appropriate height based on your design
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi, I am Hamza, an Erasmus Scholar and Software Engineer.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Recently I got selected as one of the top 3 in my country for
                the Erasmus Mundus scholarship. I&apos;m obsessed with images
                and have always wanted to work with them. That’s why I decided
                to go abroad and join this program. This program covers
                everything from advanced image processing to machine learning,
                which is exactly what I wanted to focus on. Studying in
                different countries every six months through this program has
                been an incredible experience. With my software engineering
                background and what I’m learning in my master&apos;s, I&apos;m
                looking forward to applying this knowledge to real-world
                projects.
              </p>
              <p>
                Previously: I graduated from the National University of Computer
                and Emerging Sciences with a Medal. My final year project was a
                mobile app to help visually impaired people using image
                processing, machine learning and computer vision algorithms. My
                work experience started right after my 4th semester as an
                undergraduate when I completed my internship and learned to
                write professional code in Python. After learning the skills to
                work in industry, I got attached to a startup in the United
                States remotely, where I developed websites and worked on neural
                networks and forex trading.
              </p>
              <p>
                After graduation, I joined a multinational company and started
                working full-time as a software engineer. I worked there for a
                couple of years for their client, Marks & Spencer, and received
                great appreciation from the client and the company. I enjoyed my
                time adding value for the millions of users using our developed
                software, generating revenue of around a billion dollars. The
                culture was great, and the people there were like a family (I
                miss them all &rsquo;). However, the work could sometimes feel
                monotonous, which is why I decided to transition to a fast-paced
                startup. The new environment challenged me to grow technically
                and professionally.
              </p>
              <p>
                Meanwhile, I already had started finding freelance work to keep
                me dynamic and utilize my full potential. My projects mainly
                relate to the web, cloud, and machine learning solutions. I got
                to work with hundreds of clients worldwide, which opened up my
                vision beyond any horizon. I like to interact and socialize with
                like-minded people. I always seek to add value wherever I go and
                implement solutions to complex problems. Let&apos;s connect, and
                I am sure we can learn from each other :)
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://github.com/hamzafer"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/ihamzafer/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:hamzafer3@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hamzafer3@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
