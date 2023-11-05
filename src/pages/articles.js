import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import React from 'react'

const articles = () => {
  return (
    <>
      <Head>
        <title>Sebby | About</title>
        <meta name="web developer, 3D Animator, graphics designer" content="desc"/>
      </Head>
      <TransitionEffect />

      <main>
        <Layout>
          <AnimatedText text="Words can change the world! Fret not we'll be writing soon😉" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
        </Layout>
        
      </main>
    </>
  )
}

export default articles