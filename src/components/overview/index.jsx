import ResumeItem from '../overview-item';
import styles from './overview.module.css';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

function Overview({income, expense, total}) {
  return (
    <div className={styles.container}>
        <ResumeItem title="Incomes" Icon={FaRegArrowAltCircleUp} value={income}/>
        <ResumeItem title="Expenses" Icon={FaRegArrowAltCircleDown} value={expense}/>
        <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
    </div>
  )
}

export default Overview;