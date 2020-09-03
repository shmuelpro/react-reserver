import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import ProjectTimeline from '../examples/ProjectTimeline'
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
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <p className='hero__subtitle'>
            <span
              style={{
                background: 'red',
                padding: '10px',
                borderRadius: '10px'
              }}
            >
              Docs stil under development
            </span>
          </p>

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
        <ProjectTimeline />
      </main>
    </Layout>
  )
}

export default Home
