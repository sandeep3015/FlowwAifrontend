import React from 'react';
import {useState} from 'react'
import DataTable from 'react-data-table-component'
import './App.css'

//id, type, amount, description, date, and running balance
const App = () => {

  const columns = [
      {
          name: 'Id',
          selector: row => row.id,
          sortable: true,
      },
      {
          name: 'Type',
          selector: row => row.type,
          sortable: true,
      },
      {
          name: 'Amount',
          selector: row => row.amount,
          sortable: true,
      },
      {
          name: 'Description',
          selector: row => row.description,
          sortable: true,
      },
      {
        name: 'Date',
        selector: row => row.date,
        sortable: true,
      },
      {
        name: 'Balance',
        selector: row => row.balance,
        sortable: true,
      },
  ]

  const [type, setType] = useState()
  const [amount, setAmount] = useState()
  const [description, setDescription] = useState()
  const [isTrue, setButton] = useState(false)
  const [transaction, setTransaction] = useState([])
  const [isSaveClicked, setSaveButton] = useState(false)

  const onClickNew = () => {
      console.log("Onclick")
      setButton(true)
    }

  const onChangeAmount = event => {
      setAmount(event.target.value)
  }

  const onChangeOption = event => {
      setType(event.target.value)
  }

  const onChangeDescription = event => {
      setDescription(event.target.value)
  }

  const onClickCancel = () => {
    setButton(false)
  }

  const onSubmitDetails = event => {
      event.preventDefault()
      const newTransaction = {
              id: transaction.length + 1,
              type: type,
              amount: amount,
              description: description,
              date: '02/17/2020',
              balance: amount,
          }
      
      setTransaction([...transaction, newTransaction])
      setSaveButton(true)
      setButton(false)
      setAmount('')
      setDescription('') 
  }
  return (

      <div className='home-container'>
      <div className='heading-button'>
          <h1 className='main-heading'>Office Transactions</h1>
          <button className='button add-button' onClick={onClickNew}>+ Add Transaction</button>
      </div>
      {isSaveClicked ? <div className='table-container'>
          <DataTable
              columns={columns}
              data={transaction}
              selectableRows
              fixedHeader
              pagination
          >
          </DataTable>
      </div> : null}
      

      {isTrue ? 
        <div className='main-container'>
        <form className='login-container' onSubmit={onSubmitDetails}>
              <h1 className='transaction-heading'>New Transaction</h1>
              <div className="inputs">
                  <label htmlFor='type' style={{color: "white", fontWeight: "bold"}}>Type:</label>
                  <select className='input-select' id='type' onChange={onChangeOption}>
                      <option>Credit</option>
                      <option>Debit</option>
                  </select>
              </div>
              <div className="inputs">
                  <label htmlFor="amount" style={{color: "white", fontWeight: "bold"}}>Amount:</label>
                  <input type='text' placeholder='value' id='amount' className='input-field' onChange={onChangeAmount}/>
              </div>
              <div className="inputs">
                  <label htmlFor="description" style={{color: "white", fontWeight: "bold"}}>Description:</label>
                  <textarea type='text' placeholder='description' id='description' className='input-field' onChange={onChangeDescription}/>
              </div>
              <button type="submit" className='add-button'>Save</button>
              <button type="button" className='add-button' onClick={onClickCancel}>Cancel</button>
          </form>
          </div>  : null
        }
      </div>
    )
  }

export default App