import React from 'react'
import { PageHero } from '../../components'
import aboutImg from '../../assets/hero-bcg.jpeg'
import styles from './AboutPage.module.css'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <section className={`${styles.se} page section section-center`}>
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className={styles.title}>
            <h2>nossa história</h2>
            <div className='underline'></div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempora nihil provident eaque facilis quis expedita amet ut officia, incidunt quaerat. Ducimus aspernatur necessitatibus officiis perspiciatis sit beatae recusandae blanditiis molestiae vel facilis, fuga ad nulla voluptate repudiandae voluptatum dolorem quos itaque qui laudantium fugit? Iste quisquam pariatur veniam nam!</p>
        </article>
      </section>
    </main>
  )
}

export default AboutPage
