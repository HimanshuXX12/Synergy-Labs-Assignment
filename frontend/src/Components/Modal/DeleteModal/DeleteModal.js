import React from 'react'
import './DeleteModal.css'
function DeleteModal(props) {
  return (
    <div>
            <dialog id="my_modal_delete" class="modal">
        <form method="dialog" class="modal-box">
            <h3 class="font-bold text-lg">Warning</h3>
            <p class="py-4">Are you sure want to Delete It</p>
             <div className='flex justify-evenly mt-4'>
                <button onClick={props.mainCloser} className="btn btn-outline btn-primary">Yes</button>
                <button className="btn btn-outline btn-secondary">No</button>
             </div>
            <button onClick={props.close} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            
        </form>
        </dialog>

    </div>
  )
}

export default DeleteModal
