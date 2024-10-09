import styles from './overviewItem.module.css';

function ResumeItem({ title, Icon, value }) {
  return (
    <div className={styles.container}>
      <div className={styles.headerCard}>
        <p className={styles.title}>{title}</p>
        <Icon/>
      </div>
      <span className={styles.total}>{value}</span>
    </div>
  )
}

export default ResumeItem