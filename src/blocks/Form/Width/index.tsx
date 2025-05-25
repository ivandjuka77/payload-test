import * as React from 'react'
import styles from './index.module.css'

export const Width: React.FC<{
  children: React.ReactNode
  className?: string
  width?: number | string
}> = ({ children, className, width }) => {
  return (
    <div
      className={`${styles.width} ${className || ''}`}
      style={{
        width: width ? `${width}%` : '100%',
      }}
    >
      {children}
    </div>
  )
}
