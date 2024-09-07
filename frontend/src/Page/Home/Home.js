import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Modal from '../../Components/Modal';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import AddModal from '../../Components/Modal/AddModal/AddModal';
import './Home.css'
function Home() {
     const {SingleData,setSingleData}= useContext(UserContext);
    const [data, setData] = useState([]);
    useEffect( ()=>{
       fetcher();
    },[]);

    const clicker= (data)=>{
      setSingleData(data);
      document.getElementById('my_modal_3').showModal();

    }
 

    const fetcher= async ()=>{
         const responce= await axios.get("http://localhost:300/get");
         console.log(responce);
         setData(responce.data.responce);
    }
  return (
    <div className=''>
         <div className="flex justify-center items-center min-h-screen">
      <div className="w-full xl:w-4/5">
         <div className='flex gap-4 items-center justify-center my-4'>
         <h1 className="text-center text-2xl  xl:text-4xl uppercase font-bold ">Student Data</h1>
         <button className="btn btn-neutral" onClick={()=>document.getElementById("my_modal_3_add").showModal()}>Add</button>
         </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="hidden sm:table-header-group">
              <tr>
                <th className="px-6 py-3 lg:py-5 border border-gray-200 bg-gray-50 text-left text-md font-bold text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 lg:py-5 border border-gray-200 bg-gray-50 text-left text-md font-bold text-gray-500 uppercase tracking-wider">Age</th>
                <th className="px-6 py-3 lg:py-5 border border-gray-200 bg-gray-50 text-left text-md font-bold text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 lg:py-5 border border-gray-200 bg-gray-50 text-left text-md font-bold text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 lg:py-5 border border-gray-200 bg-gray-50 text-left text-md font-bold text-gray-500 uppercase tracking-wider">Gender</th>
                <th className="px-6 py-3 lg:py-5 border border-gray-200 bg-gray-50 text-left text-md font-bold text-gray-500 uppercase tracking-wider">Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index} className="block sm:table-row even:bg-gray-100">
                  <td className="block sm:table-cell font-normal px-6 py-4 border border-gray-200">
                    <span className="sm:hidden font-bold">Name: </span>
                    {user.name}
                  </td>
                  <td className="block sm:table-cell px-6 font-normal py-4 border border-gray-200">
                    <span className="sm:hidden font-bold">Age: </span>
                    {user.age}
                  </td>
                  <td className="block sm:table-cell px-6 font-normal py-4 border border-gray-200">
                    <span className="sm:hidden font-bold">Email: </span>
                    {user.email}
                  </td>
                  <td className="block sm:table-cell px-6 font-normal py-4 border border-gray-200">
                    <span className="sm:hidden font-bold">Phone: </span>
                    {user.phone}
                  </td>
                  <td className="block sm:table-cell px-6 font-normal py-4 border border-gray-200">
                    <span className="sm:hidden font-bold">Gender: </span>
                    {user.gender}
                  </td>
                  <td className='block item-center sm:table-cell px-6 font-normal py-4 border border-gray-200' >
                  <button className="btn btn-primary w-4/5" onClick={()=>clicker(user,index)}>Edit</button>
                   <Modal value={SingleData}/>
                   <AddModal/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
