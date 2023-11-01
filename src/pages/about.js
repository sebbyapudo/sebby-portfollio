import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import AboutPic from '../../public/images/profile/seb.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);


  useEffect(() => {
    if(isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    }) 
  }, [springValue, value])
  
  


  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
          <title>Sebby | About</title>
          <meta name="web developer, 3D Animator, graphics designer" content="desc"/>
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
          <Layout className='pt-16'>
            <AnimatedText text="Passion Fules Purpose!" className='mb-16'/>
            <div className='grid w-full grid-cols-8 gap-16'>
              <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                <p className='font-medium'>
                  Hi, I am Sebby but you can just call me Seb. I am a web developer, 3D Artist and UI/UX designer. I craft aesthetically pleasing, intuitive digital experiences, driven by a three-year expertise. Eager to transform clients' ideas into compelling realities, I'm here to redefine your digital presence.
                </p>

                <p className='my-4 font-medium'>
                  I hold the belief that design surpasses mere aesthetics; it's the art of problem-solving  and crafting user experiences that are intuitive and delightful.
                </p>

                <p className='font-medium'>
                  Be it a website, mobile app, digital graphic, or 3D model, I infuse every project with a dedication to exceptional design and user-focused mindset. I eagerly anticipate the chance to contribute my expertise and enthusiasm to your upcoming endeavor.
                </p>
              </div>


              <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 py-16'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                <Image src={AboutPic} alt='Sebby' className='w-full h-auto rounded-2xl'/>
              </div>

              <div className='col-span-2 flex flex-col items-end justify-between'>
                <div className='flex flex-col items-end justify-center'>
                  <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={50}/> +
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75'>Satisfied clients</h2>
                </div>
                <div className='flex flex-col items-end justify-center'>
                  <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={30}/>+
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75'>Projects completed</h2>
                </div>
                <div className='flex flex-col items-end justify-center'>
                  <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={3.5}/>+
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75'>Years of experience</h2>
                </div>
              </div>
            </div>
          </Layout>
        </main>
    </>
  )
}

export default about