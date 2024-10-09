import Grid from "../grid";
import styles from "./form.module.css";
import { useState } from "react";

function Form({handleAdd, transactionsList, setTransactionsList}) {

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateId = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if( !desc || !amount){
        alert("Informe a descrição e o valor!")
        return;
    } else if( amount < 1 ){
        alert("O valor deve ser positivo!")
        return;
    }

    const transaction = {
      id: generateId(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    }

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <>

      <div className={styles.container}> 
          <div className={styles.inputBox}>
              <label htmlFor="" className={styles.label}>Value</label>
              <input type="number" name="" id="" className={styles.input} value={amount} onChange={(e) => setAmount(e.target.value)}/>
          </div>
          <div className={styles.inputBox}>
              <label htmlFor="" className={styles.label}>Description</label>
              <input type="text" name="" id="" className={styles.input} value={desc} onChange={(e) => setDesc(e.target.value)}/>
          </div>
          <div className={styles.radioBox}>
              <input type="radio" defaultChecked id="in" name="group" onChange={() => setExpense(!isExpense) }/>
              <label htmlFor="in">Income</label>

              <input type="radio" id="out" name="group" onChange={() => setExpense(!isExpense)}/>
              <label htmlFor="out">Expenses</label>
          </div>
          <button className={styles.btn} onClick={handleSave}>ADD TRANSACTION</button>
      </div>
      <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </>
  )
}

export default Form