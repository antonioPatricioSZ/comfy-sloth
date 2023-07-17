import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> ComfySloth</span>
      </h5>
      <h5>Todos os direitos reservados.</h5>
    </footer>
  )

}

export default Footer
