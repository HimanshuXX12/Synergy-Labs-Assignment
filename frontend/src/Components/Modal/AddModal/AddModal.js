import React, { useState } from 'react'
import './AddModal.css'
import axios from 'axios';
function AddModal() {
    const [status,setstatus]= useState(false);
    const [formData,setformData]= useState({
        name:null,
        email:null,
        gpa:null,
        address:{
            street:"",
            zip:"",
            city:""
        },
        gender:null,
        age:null,
        phone:null
    })
    console.log("formdata at addmodal",formData);
    const changehandller= (e)=>{
         setformData({...formData,[e.target.name]:e.target.value});
    }

     const createRequest= async ()=>{
        const responce= await axios.post(`http://localhost:300/create`,formData);
        console.log("responce",responce);
        if(responce.data.sucess)
        {
            setstatus(true);
        }
     }

  return (
    <div>
            <dialog id="my_modal_3_add" className="modal">
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>window.location.reload()}>✕</button>
            </form>
            <h3 className="font-bold text-lg">Welcome</h3>
          
            
            <div className='my-4'>
                <div className='text-lg' >Name</div>
                <input type='text' id="name" value={formData.name} onChange={changehandller} name="name" className=' text-lg inputer border border-slate-200 outline-none p-2 w-4/5 my-2'/>
            </div>
            <div className='my-4'>
                <div className='text-lg'>Email</div>
                <input type='email' id="email" value={formData.email}  onChange={changehandller} name="email" className=' text-lg inputer border border-slate-200 outline-none p-2 w-4/5 my-2'/>
            </div>
            <div className='my-4'>
                <div className='text-lg'>Phone</div>
                <input type='text' value={formData.phone} id="phone" onChange={changehandller} name="phone" className=' text-lg border inputer border-slate-200 outline-none p-2 w-4/5 my-2'/>
            </div>
           
            <div className='my-4'>
                <div className='text-lg'>Age</div>
                <input type='number' value={formData.age} id="age" onChange={changehandller} name="age" className=' text-lg border inputer border-slate-200 outline-none p-2 w-4/5 my-2'/>
            </div>

            <div>
                <select name='gender' onChange={changehandller} className='' value={formData.gender}>
                   <option selected >Select</option>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
                </select>
            </div>
            <div className='my-4'>
                <div className='text-lg'>GPA</div>
                <input type='number' value={formData.gpa} id="gpa" onChange={changehandller} name="gpa" className=' text-lg border inputer border-slate-200 outline-none p-2 w-4/5 my-2'/>
            </div>
            <div className='flex justify-center'>
           {
             status?<button class="btn btn-warning">Created</button>
             :
             <button className="btn btn-secondary" onClick={createRequest}>Create</button>
           }
            </div>
        </div>
        </dialog>
    </div>
  )
}

export default AddModal
