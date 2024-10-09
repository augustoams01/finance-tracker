import styles from './gridItem.module.css';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

function GridItem({item, onDelete}) {
  return (
    <tr>
      <td>{item.amount}</td>
      <td>{item.desc}</td>
      <td>
        {item.expense ? (
          <FaRegArrowAltCircleDown color='red' className={styles.svg}/>
        ): (
          <FaRegArrowAltCircleUp color='green' className={styles.svg}/>
        )}
      </td>
      <td>
        <FaTrash onClick={() => onDelete(item.id)} className={styles.svg}/>
      </td>
    </tr>
  )
}

export default GridItem;