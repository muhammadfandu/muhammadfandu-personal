import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from './layout/navbar'
import Footer from './layout/footer'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>I Am Muhammadfandu</title>
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
                      href="https://wa.me/+6282245450689"
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

      <div className="bg-slate-100 relative px-20 pt-[50px] pb-[50px] lg:pt-[50px]">
        <div className="container mx-auto">

          <h1 className="text-slate-700 text-center hover:text-primary mb-12 block text-4xl font-semibold">
            Available For
          </h1>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-lg">
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
                  {/* <p className="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                  >
                    View Details
                  </a> */}
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-lg">
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
                  {/* <p className="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                  >
                    View Details
                  </a> */}
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-lg">
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
                  {/* <p className="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                  >
                    View Details
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>

    </div>
  )
}
