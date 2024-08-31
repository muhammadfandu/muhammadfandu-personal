import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from './layout/navbar'
import Footer from './layout/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

export default function Home() {

 const [detailedView, setDetailedView] = useState('web');

  function showDetail(type:string){
    setDetailedView(type);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello, I Am Muhammadfandu</title>
        <meta name="description" content="This is the personal website of muhammadfandu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Navbar></Navbar>

            <main className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-8xl xl:inline">Hello,</span>{' '} <br></br>
                  <span className="text-6xl text-teal-600 font-medium xl:inline">You can call me </span><span className='text-7xl text-teal-600 xl:inline'>Fandu</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  I am a Frontend Developer, currently based in South East Asia. I prefer to refer to myself as Frontend Web Artisan, because I make arts with code.
                </p>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="mailto:muhammad.p.widodo@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 px-8 py-3 text-base font-medium text-white hover:bg-teal-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Contact Me
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/portfolio"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-100 px-8 py-3 text-base font-medium text-teal-700 hover:bg-teal-200 md:py-4 md:px-10 md:text-lg"
                    >
                      My Portfolio
                    </Link>
                  </div>
                </div>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md min-h-8">
                    <a
                      href="https://www.instagram.com/muhammadfandu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className='mx-2'
                    >
                      <button type="button" className="text-teal-700 border border-teal-700 hover:bg-teal-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-teal-500 dark:text-teal-500 dark:hover:text-white dark:focus:ring-teal-800 dark:hover:bg-teal-500">
                        <FontAwesomeIcon icon={faInstagram} className='h-8 w-8'/>
                      </button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muhammad-widodo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className='mx-2'
                    >
                      <button type="button" className="text-teal-700 border border-teal-700 hover:bg-teal-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-teal-500 dark:text-teal-500 dark:hover:text-white dark:focus:ring-teal-800 dark:hover:bg-teal-500">
                        <FontAwesomeIcon icon={faLinkedin} className='h-8 w-8'/>
                      </button>
                    </a>
                    <a
                      href="https://medium.com/@muhammadfandu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className='mx-2'
                    >
                      <button type="button" className="text-teal-700 border border-teal-700 hover:bg-teal-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-teal-500 dark:text-teal-500 dark:hover:text-white dark:focus:ring-teal-800 dark:hover:bg-teal-500">
                        <FontAwesomeIcon icon={faMedium} className='h-8 w-8'/>
                      </button>
                    </a>
                  </div>
                </div>
              </div>

            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            width={1920}
            height={1080}
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="/hero-bg.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="bg-slate-100 relative px-20 pt-[50px] pb-[10px] lg:pt-[50px]">
        <div className="container mx-auto">

          <h1 className="text-slate-700 text-center hover:text-primary mb-12 block text-4xl font-semibold">
            Available For
          </h1>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-lg" onMouseEnter={() => showDetail('web')}>
                <Image
                  src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg"
                  alt="image"
                  className="w-full"
                  width={1920}
                  height={1080}
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 bg-white">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="text-slate-700 hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                      Web Development
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-lg" onMouseEnter={() => showDetail('design')}>
                <Image
                  src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-02.jpg"
                  alt="image"
                  className="w-full"
                  width={1920}
                  height={1080}
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 bg-white">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="text-slate-700 hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                      Graphic Design
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-lg" onMouseEnter={() => showDetail('general')}>
                <Image
                  src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-03.jpg"
                  alt="image"
                  className="w-full"
                  width={1920}
                  height={1080}
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 bg-white">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="text-slate-700 hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                      General Consultant
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 relative px-20 pt-[10px] pb-[50px] lg:pt-[20px]">
        <div className="container rounded-lg mx-auto border-4 border-solid p-4 min-h-[350px] pt-[40px]">

          {detailedView === 'web' ? <>
              <h1 className="px-16 mb-8 text-4xl font-extrabold leading-none tracking-tight text-slate-700 md:text-5xl lg:text-6xl dark:text-slate-700">
                Web Development
              </h1>
              <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-16">
                <ul className="w-4/5 space-y-1 text-slate-600 list-disc dark:text-slate-600">
                    <li>
                      Dedicated Web Developer with a solid Angular foundation, specialise in creating dynamic and user-friendly web applications. 
                    </li>
                    <li>
                      Develop scalable front-ends, interfacing with backend APIs, and putting responsive design ideas into practice. 
                    </li>
                    <li>
                      Keeping up with the most recent Angular best practices and business trends in order to provide excellent solutions that surpass customer expectations.
                    </li>
                </ul>
              </p>
            </> : <></>
          }

          

          {detailedView === 'design' ? <>
              <h1 className="px-16 mb-8 text-4xl font-extrabold leading-none tracking-tight text-slate-700 md:text-5xl lg:text-6xl dark:text-slate-700">
                Graphic Design
              </h1>
              <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-16">
                <ul className="w-4/5 space-y-1 text-slate-600 list-disc dark:text-slate-600">
                    <li>
                      Specialized in design programs including Affinity Designer and Figma
                    </li>
                    <li>
                      Create visually attractive and impactful graphic designs
                    </li>
                    <li>
                      Expertly use understanding of colour theory, typography, and layout concepts, which allows to create designs that connect with audiences and effectively deliver messages
                    </li>
                    <li>
                      Portfolio of high-quality User Interfaces, Promotional Content, and Infographics.
                    </li>
                </ul>
              </p>
            </> : <></>
          }
          
          {detailedView === 'general' ? <>
              <h1 className="px-16 mb-8 text-4xl font-extrabold leading-none tracking-tight text-slate-700 md:text-5xl lg:text-6xl dark:text-slate-700">
                General Consultant
              </h1>
              <p className="mb-6 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 xl:px-16 dark:text-slate-400">
                <ul className="w-4/5 space-y-1 text-slate-600 list-disc dark:text-slate-600">
                  <li>
                    Deep expertise and insights to provide valuable guidance to individuals and organizations
                  </li>
                  <li>
                    Specialize in conducting beginner to expert-level classes and workshops on Web Development and Graphic Design
                  </li>
                  <li>
                    Engages in thoughtful discussions about educational pathways, career strategies, and personal development techniques
                  </li>
                </ul>
              </p>
            </> : <></>
          }

        </div>
      </div>

      <Footer></Footer>

    </div>
  )
}
