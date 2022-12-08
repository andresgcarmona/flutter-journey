import styles from './TagBar.module.css'

export const TagBar = () => {
  const tags = ['form', 'login', 'state management']
  
  return (
    <div className={styles.tagContainer}>
      {tags.map((tag: string) => (
        <a href="#" className={styles.tag}>{tag}</a>
      ))}
    </div>
  )
}
