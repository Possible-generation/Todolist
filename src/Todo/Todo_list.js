import React from 'react';
// import Word from './Tittle';

function Todo_list({ items }) {
  return (
    <>
      <div className='box-border mt-10 my-6 w-72 md:w-96 lg:w-6/12  mx-auto py-2 px-2 lg:px-0'>
        <div className='text-2xl font-semibold text-center m-6'>Todo list</div>
        {/* {items.map((item) => {
          return <Word key={item.id} title={item.title} />;
        })} */}
        <div className='grid mb-4'>
          <div className='flex justify-between border-2 border-gray-400 w-64 lg:w-11/12 lg:mx-6 px-2  pt-1 pb-4 hover:drop-shadow-lg'>
            <div className='lg:10/12  '>
              <h1>{items}</h1>
            </div>
            <div className='flex'>
              <div className='mr-2 text-green-700'>
                <i class='fa fa-pencil' aria-hidden='true'></i>
              </div>
              <div className='text-red-500'>
                <i class='fa fa-trash' aria-hidden='true'></i>
              </div>
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='bg-red-600 py-2 px-24 lg:px-44 lg:w-11/12 my-4 rounded lg:mx-6 hover:drop-shadow-lg'
        >
          Clear List
        </button>
      </div>
    </>
  );
}

export default Todo_list;
