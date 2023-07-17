import React from 'react'
import { services } from '../../utils/constants'
import styles from './Services.module.css'

const Services = () => {
  return (
    <section className={styles.se}>
      <div className='section-center'>
        <article className={styles.header}>
          <h3>
            custom forniture <br />
            built only for you
          </h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat repellendus quisquam reprehenderit voluptas tenetur saepe nulla minus similique sit quod.</p>
        </article>
        <div className={styles.servicesCenter}>
          {services.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article key={id} className={styles.service}>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
