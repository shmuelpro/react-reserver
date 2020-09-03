import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import HotelReservation from '../examples/HotelReservation'
const features = [
  {
    title: <>Powerful</>,
    imageUrl: 'img/undraw_Portfolio_update_re_jqnp.svg',
    description: <>Can be used in multiple ways and multiple environments</>
  },

  {
    title: <>Versatile</>,
    imageUrl: 'img/undraw_date_picker_gorr.svg',
    description: <>Its not just a calender. It can be so much more.</>
  },
  {
    title: <>Fantastic</>,
    imageUrl: 'img/undraw_dev_productivity_umsq.svg',
    description: <>Free, Open source with zero dependencies</>
  }
]

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  console.log(styles)
  return (
    <Layout
      title={`Docs for ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'><img src="/static/img/logo.png"/></h1>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>


          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline  button--lg',
                styles.getStartedButton
              )}
              to={useBaseUrl('docs/')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.featureText}>
          <div className='container'>
            <div className='row'>
              <div style={{ width: "600px" }} >
                <h1>Find yourself needing to build a reservation system?</h1><br />
             Hotel or restaurant?<br />
              Schedule shifts for your employees?<br />
               reserve a conference room in your office?<br/>
              Project management?<br /><br/>
              <b><i>All of this but totally customizable???</i></b><br /><br />

              This is the solution you've been looking for!<br />

              react-reserver is a time blocking solution.<br />
              It creates a grid which allows you to block out different time slots representing time ownership. 
              Allowing you to build a wide variety of tools. <br />

              <div style={{ background: "#3578e5", textAlign: "center", color: "#fff", padding: "4px 0", borderRadius: "14px",marginTop:"10px" }}> Checkout the example below or the <a style={{color:"#fff"}} href="./docs">docs</a></div>
              <br />

            </div>
          </div>
          </div>
        </section>
      {features && features.length > 0 && (
        <section className={styles.features}>
          <div className='container'>
            <div className='row'>
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
      <HotelReservation />
      </main>
    </Layout >
  )
}

export default Home
