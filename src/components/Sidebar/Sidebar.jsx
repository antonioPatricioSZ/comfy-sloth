import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { links } from '../../utils/constants'
import CartButtons from '../CartButtons/CartButtons'
import { useUserContext } from '../../context/user_context'
import styles from './Sidebar.module.css'

const Sidebar = () => {

  const { isSidebarOpen, closeSidebar  } = useProductsContext()
  const { myUser } = useUserContext()

  return (
    <div className={styles.div}>
      <aside className={isSidebarOpen ? `${styles.sidebar} ${styles.showSidebar}` : `${styles.sidebar}` }>
        <div className={styles.sidebarHeader}>
          <img src={logo} alt="comfy sloth" className={styles.logo} />
          <button className={styles.closeBtn} type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className={styles.links}>
          {links.map((link) => {
            const { id, url, text } = link
            return (
              <li key={id}>
                <Link onClick={closeSidebar} to={url}>{text}</Link>
              </li>
            )
          })}
          {myUser && (
            <li>
              <Link to={"/checkout"} onClick={closeSidebar}>checkout</Link>
            </li>
          )}
        </ul>
        <div className={styles.cartBtnWrapper}>
          <CartButtons />
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
