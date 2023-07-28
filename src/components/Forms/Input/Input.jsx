import styles from './Input.module.css'

const Input = ({label, type, id, value, setValue, ...rest}) => {
  return (
    <div className={styles.wraper}>
      <label htmlFor={id} className={styles.label}>{label}</label>
       <input id={id} className={styles.input} type={type} value={value} onChange={(e) => setValue(e.target.value)} {...rest} />
    </div>
  )
}

export default Input