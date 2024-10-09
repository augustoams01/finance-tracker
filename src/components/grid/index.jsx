import GridItem from '../grid-item';
import styles from './grid.module.css';

function Grid({itens, setItens}) {

  const onDelete = (ID) => {
    const newArray = itens.filter((transactions) => transactions.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.col1}>Value</th>
          <th className={styles.col2}>Description</th>
          <th className={styles.col3}>type</th>
          <th className={styles.col4}>
          </th>
        </tr>
      </thead>
      <tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete}/>
        ))}
      </tbody>
    </table>
  )
}

export default Grid