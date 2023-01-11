import React, { useState } from 'react'
import './addtodo.css'
import image from '../../images/doremon.png'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/TaskSlices'
export const AddTodo = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch();
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("working");
    if(value.trim().length === 0){
      alert("What are you doing? Empty Tody?")
      return
    }
    dispatch(
      addTask({
        task : value
      })
    )
    setValue("")

  }
    return (
      <div className='main'>
        <div className='title'>
          <h1>My Todo App</h1>
        </div>
        <div class="container my-5">
          <div class="row">
            <div class="col-lg-10">
                <div class="mb-3">
                  <h1>Let's Remove the stress</h1>
                  <h2>Schedule your day now!</h2>
                  <label for="exampleInputEmail1" class="form-label">Your Task</label>
                  <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">That will help you to structure your tasks</div>
                </div>
                <button type="submit" onClick={handleSubmit} class="btn btn-success">Submit</button>
            </div>
            <div class="col-lg-2">
              <img className='sideImage' src={image} alt='image_here' />
            </div>
          </div>
        </div>
      </div>
    )
  }
