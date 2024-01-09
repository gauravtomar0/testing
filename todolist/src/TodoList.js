import React, { useState } from 'react'


const TodoList = () => {

    const [activity, setActivity]=useState('')
    const[listData, setListData]= useState([])

    const addActivity=()=>{
      setListData([...listData,activity])
      console.log(listData)
      }
    

    const handle= (e)=>{
        setActivity(e.target.value)
    }
  return (
    <>
         <div className="container">
            <div className="header">TODO List</div>
            <input type="text" placeholder='Enter Activity' value={activity} onChange={handle} />
            <button onClick={addActivity}>ADD</button>
            <p className='List-heading'>Here is the list</p>
            {listData!=[]&&
            listData.map((key,i)=>{
              return(
                <>
                  <p key={i}>
                    <div className="listData">{key}</div>
                  </p>
                </>
              )
            }
            )}
         </div>
    </>
  )
}

export default TodoList