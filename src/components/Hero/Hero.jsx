import React from 'react'
import { Link } from 'react-router-dom'
import heroBcg from '../../assets/hero-bcg.jpeg'
import heroBcg2 from '../../assets/hero-bcg-2.jpeg'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={`${styles.se} section-center`}>
      <article className='content'>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et enim cum, sint delectus doloremque perferendis veritatis eaque pariatur alias atque.</p>
        <Link to={"/products"} className={`${styles.heroBtn} btn`}>
          show now
        </Link>
      </article>
      <article className={styles.imgContainer}>
        <img src={heroBcg} alt="nice table" className={styles.mainImg} />
        <img src={heroBcg2} alt="person working" className={styles.accentImg} />
      </article>
    </section>
  )
}

export default Hero
