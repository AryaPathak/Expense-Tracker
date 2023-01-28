import React, {useState} from 'react';

import Expenses from './Components/Expenses/Expenses';

import NewExpense from './Components/NewExpenses/NewExpense';



let DUMMY_EXPENSE =[
    {
        id:'e1', 
        title: 'School Fee',
        amount: 250,
        date: new Date(2023, 1, 25)
    },
    {
        id:'e2', 
        title: 'Books',
        amount: 350,
        date: new Date(2023, 1, 22)
    },
    {
        id:'e3', 
        title: 'Mess Fee',
        amount: 200,
        date: new Date(2023, 1, 1)
    },
    {
        id:'e4', 
        title: 'Dinner',
        amount: 850,
        date: new Date(2022, 12, 25)
    }
];


const App=()=>{

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    

    const addExpenseHandler = (expense) =>{
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);   
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
            
        </div>
    )    
}

export default App;