import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <main className={styles.main}>
      <section>
        <h1>404</h1>
        <h3>Desculpe, página não encontrada.</h3>
        <Link to={"/"} className="btn">Ir para o início</Link>
      </section>
    </main>
  )
}

export default ErrorPage
