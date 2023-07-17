import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import styles from './AmountButtons.module.css'

// eslint-disable-next-line react/prop-types
const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <div className={`${styles.div} amount-btns1`}>
      <button type='button' className='amount-btn' onClick={decrease}><FaMinus /></button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increase}><FaPlus /></button>
    </div>
  )
}

export default AmountButtons
