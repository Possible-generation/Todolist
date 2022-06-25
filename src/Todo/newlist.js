import React, { useState } from 'react';
import Word from './Tittle';
import { v4 as uuidv4 } from 'uuid';

function Controlledinput() {
  const [firstName, setFirstName] = useState('');
  const [people, setPeople] = useState([]);
  const [id, setId] = useState(uuidv4);
  const [editedItem, setEditedItem] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName) {
      const person = { id, firstName };
      setPeople((people) => {
        return [...people, person];
      });
    }
    setFirstName('');
    setId(uuidv4);
    setEditedItem(false);
  };
  const clearlist = () => {
    setPeople([]);
  };

  const handleDelete = (id) => {
    const filteredItems = people.filter((c) => c.id !== id);
    setPeople(filteredItems);
  };
  const handleEdit = (id) => {
    const selectedFirstName = people.find((firstName) => firstName.id === id);
    console.log(selectedFirstName);
    const filteredItems = people.filter((c) => c.id !== id);
    setPeople(filteredItems);
    setFirstName(selectedFirstName.firstName);
    setEditedItem(true);
    setId(id);
  };

  return (
    <>
      <article className='box-border border-2  rounded mt-6  w-72 md:w-96 lg:w-6/12  mx-auto py-2 px-2 lg:px-0'>
        <div className='text-2xl font-semibold text-center'>Todo Input</div>
        <form onSubmit={handleSubmit} className='lg:mx-6  '>
          <span className='bg-blue-700 py-1'>
            <i class='fa fa-book fa-xl' aria-hidden='true'></i>
          </span>

          <input
            className=' border border-gray-400 w-60 lg:w-11/12 pl-2 hover:drop-shadow-lg'
            type='text'
            id='firstName'
            name='firstName'
            placeholder='Add an item'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <button
            type='submit'
            className={
              editedItem
                ? 'bg-green-700 px-24 lg:px-44 lg:w-11/12 my-4 rounded py-2 hover:drop-shadow-lg lg:ml-3'
                : 'bg-blue-700 px-24 lg:px-44 lg:w-11/12 my-4 rounded py-2 hover:drop-shadow-lg lg:ml-3'
            }
          >
            {editedItem ? 'edit item' : 'add item'}
          </button>
        </form>
      </article>
      <div className='box-border mt-10 my-6 w-72 md:w-96 lg:w-6/12  mx-auto py-2 px-2 lg:px-0'>
        <div className='text-2xl font-semibold text-center m-6'>Todo list</div>
        {people.map((person) => {
          const { id, firstName } = person;
          return (
            <Word
              key={id}
              title={firstName}
              onDelete={() => handleDelete(id)}
              onEdit={() => handleEdit(id)}
            />
          );
        })}
        <button
          onClick={clearlist}
          type='submit'
          className='bg-red-600 py-2 px-24 lg:px-44 lg:w-11/12 my-4 rounded lg:mx-6 hover:drop-shadow-lg'
        >
          Clear List
        </button>
      </div>
    </>
  );
}

export default Controlledinput;
