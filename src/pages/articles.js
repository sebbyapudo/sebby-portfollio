import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const articles = () => {
  return (
    <>
      <Head>
        <title>Sebby | About</title>
        <meta name="web developer, 3D Animator, graphics designer" content="desc"/>
      </Head>

      <main>
        <Layout>
          <AnimatedText text="Words can change the world! Fret not we'll be writing soon😉" className='mb-16'/>
        </Layout>
        
      </main>
    </>
  )
}

export default articles