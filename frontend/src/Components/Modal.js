import React from 'react'
import axios from 'axios';
import './Modal.css'
import DeleteModal from './Modal/DeleteModal/DeleteModal';
import { UserContext } from '../Context/UserContext'
import {useEffect, useContext ,useState} from 'react'

function Modal(props) {
    const {SingleData,setSingleData}= useContext(UserContext);
    const [status,setstaus]= useState(false);
    const [delete_value,setdelete]= useState(false);
   const [formdata,setformData]= useState({
       name:SingleData.name,
       email:SingleData.email,
   })

     const updatter= async ()=>{
       
            const name_element= document.getElementById("name");
             if(name_element.value)
             {
                name_element.classList.remove("outline");
             }
             else
             {
                name_element.classList.add("outline");
           }
 
            const age_element= document.getElementById("age");
             if(age_element.value)
             {
                age_element.classList.remove("outline");
             }
             else{
                age_element.classList.add("outline");
             }
        
               const email_element= document.getElementById("email");
                if(email_element.value)
                {
                    email_element.classList.remove("outline");
                }
                else{
                    email_element.classList.add("outline");
                }
            

           
                   const phone_element= document.getElementById("phone");
                   if(phone_element.value)
                   {
                      phone_element.classList.remove("outline");
                   }
                   else
                   {
                       phone_element.classList.add("outline");
                   }

                if(email_element.value && phone_element.value && name_element.value && age_element.value)
                {
                    const responce= await axios.put(`http://localhost:300/update/${SingleData.id}`,{
                        name:SingleData.name,
                        email:SingleData.email,
                        phone:SingleData.phone,
                        age:SingleData.age
                    });
                    console.log("Axios responce",responce);
                    if(responce.data.sucess)
                    {
                          setstaus(true);
                    }
                }
                
     }
     const DeleteCloseModal=()=>{
         document.getElementById("my_modal_delete").close();
     }

     const delter= async ()=>{
      
        document.getElementById("my_modal_delete").showModal();
        
     }
     
     const MainDeleter= async ()=>{
          const responce= await axios.delete(`http://localhost:300/delete/${SingleData.id}`);
         if(responce.data.sucess)
         {
            setdelete(true);
             document.getElementById("my_modal_delete").close();
           
         }
        
     }

     useEffect(()=>{
          setstaus(false);
          setdelete(false);
     },[SingleData]);

        useEffect(()=>{
           const element= document.getElementsByClassName("inputer");
           for(let i=0;i<element.length;i++)
           {
             element[i].addEventListener("blur",function()
            {
                 if(element[i].value)
                 {
                    element[i].classList.add("filled");
                 }
                 else
                 {
                    element[i].classList.remove("filled");
                 }
            })

           }
 
       
        },[]);      

   const changehandller= async (e)=>{
      setSingleData({...SingleData,[e.target.name]:e.target.value});
   }
     console.log("single",SingleData);
    console.log("formdata",formdata);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={()=> window.location.reload()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Welcome</h3>
            <div className='my-4'>
                <div className='text-lg' >Name</div>
                <input type='text' id="name" value={SingleData.name}  onChange={changehandller} name="name" className=' text-lg inputer border border-slate-200 outline-none p-2 w-4/5 my-2'/>
            </div>
            <div className='my-4'>
                <div className='text-lg'>Email</div>
                <input type='email' id="email" value={SingleData.email}  onChange={changehandller} name="email" className=' text-lg inputer border border-slate-200 outline-none p-2 w-4/5 my-2'/>
            </div>
            <div className='my-4'>
                <div className='text-lg'>Phone</div>
                <input type='text' value={SingleData.phone} id="phone" onChange={changehandller} name="phone" className=' text-lg border inputer border-slate-200 outline-none p-2 w-4/5 my-2'/>
            </div>
           
            <div className='my-4'>
                <div className='text-lg'>Age</div>
                <input type='NUmber' value={SingleData.age} id="age" onChange={changehandller} name="age" className=' text-lg border inputer border-slate-200 outline-none p-2 w-4/5 my-2'/>
            </div>
            

            <div className='my-4 flex justify-evenly'> 
           {
              status? <button className="btn btn-secondary" onClick={updatter}>Updated</button>:
              <button className="btn btn-primary" onClick={updatter}>Update</button>
           }
           {
              delete_value? <button className="btn  btn-active btn-secondary">Deleted</button>:
              <button className="btn btn-error text-white" onClick={delter}>Delete</button>
           }
            </div>
          <DeleteModal mainCloser={MainDeleter} close={DeleteCloseModal}/>
        </div>
    </dialog>
    </div>
  )
}

export default Modal
