import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from "../data/education.json"
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  console.log(data);

  const [information, setInformation] = useState([...data])

  return (
    <>
      <Head>
        <title>Vancouver future College</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.head}>
        <div>
          <Image
            className={styles.logo}
            src="/Logo.png"
            alt = "image"
            width={100}
            height={50}
            priority
          />
        </div>
          <h2>
            Vancouver Future College
          </h2>
        </div>
        <div className={styles.description}>
        
          <p>
            <Link href="about">About</Link>
          </p>
          <p>Programs</p>
          <p>Apply</p>
          <p>Services</p>
          
        </div>
    
        <div className={styles.center}>
          <Image
            className={styles.school}
            src="/school.jpg"
            alt = "image"
            width={550}
            height={300}
            priority
          />
        </div>

        <div>
          <h2>Avalable Programs:</h2>
        </div>

        <div className={styles.flex}>

          <div>
            <b>Business Degrees</b>
            {information && information.map((info, index) => {
              if (info.department === "Business") {
                return (
                  <Card key={index} degree={info.degree} colour="gray" font="15px"/>
                )

              }

            })}

          </div>

          <div>
            <b>Computing Degrees</b>
            {information && information.map((info, index) => {
              if (info.department === "Computing") {
                return (
                  <Card key={index} degree={info.degree} colour="pink" font="15px" />
                )
              }

            })}

          </div>
        </div>

      </main>
    </>
  )
}