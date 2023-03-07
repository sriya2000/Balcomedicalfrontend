import React from 'react'
import './updateuser.css'

const Updateuser = () => {
  return (
    <div classNmae="container">
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' >
            <h2 className='text-center m-4'>Update User</h2>
            <div className='"mb-3'>
                <label htmlFor='Number' className='form-label'>
                    Patient Id
                </label>
                <input type={"number"}
                className="form-control"
                placeholder='Enter Patient Id'
                name='number'/>
            </div>
            <div className='"mb-3'>
                <label htmlFor='Number' className='form-label'>
                    Doctor Id
                </label>
                <input type={"number"}
                className="form-control"
                placeholder='Enter Doctor Id'
                name='number'/>
            </div>
            <div className='"mb-3'>
                <label htmlFor='Date' className='form-label'>
                   Appointment Date
                </label>
                <input type={"Date"}
                className="form-control"
                placeholder='Enter Appointment Date'
                name='number'/>
            </div>
            <div className='"mb-3'>
                <label htmlFor='Date' className='form-label'>
                  Appointment Slots
                </label>
                <input type={""}
                className="form-control"
                placeholder='Enter Appointment Date'
                name='number'/>
            </div>
            <div className='"mb-3'>
                <label htmlFor='Date' className='form-label'>
                   Message
                </label>
                <input type={"text"}
                className="form-control"
                placeholder='Enter Message'
                name='number'/>
            </div>
            <button type="submit" className='btn btn-outline-primary btn2'> Submit</button>  
            <button type="submit" className='btn btn-outline-danger mx-3 btn2'>Cancel</button>
                
            </div>
        </div>
    </div>
  )
}

export default Updateuser