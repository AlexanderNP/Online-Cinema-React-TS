import { FC } from 'react'
import styles from './Logo.module.css'

export const Logo:FC = () => {
  return (
    <img className={styles.logo} src="/logo.svg" alt="logo" />
  )
}
