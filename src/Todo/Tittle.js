import React from 'react';

function Tittle({ title, onDelete, onEdit }) {
  return (
    <div>
      <div className='grid mb-4'>
        <div className='flex justify-between border-2 border-gray-400 w-64 lg:w-11/12 lg:mx-6 px-2  pt-1 pb-4 hover:drop-shadow-lg'>
          <div className='lg:10/12  '>{title}</div>
          <div className='flex'>
            <div className='mr-2 text-green-700' onClick={onEdit}>
              <i class='fa fa-pencil' aria-hidden='true'></i>
            </div>
            <span className='text-red-500' onClick={onDelete}>
              <i class='fa fa-trash' aria-hidden='true'></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tittle;
