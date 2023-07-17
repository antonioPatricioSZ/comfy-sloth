import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section className={`${styles.se} section-center`}>
      <div>
        <h3>Ganhe 20% de desconto se enviar o e-mail</h3>
        <div className={styles.content}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem illo eveniet quia soluta esse maiores iure ullam ipsam suscipit molestiae.
          </p>
          <form className={styles.contactForm}> 
            <input type="email" className={styles.formInput} placeholder='enter email' />
            <button className={styles.submitBtn} type='button'>
              subscribe
          </button>
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
