import { useState } from 'react';

function Todo_input() {
  const [item, setItem] = useState('');
  // const handleChange = (e) => {
  //   setItem(() => item(e.target.value));
  // };
  // const { item, handleChange } = this.props;

  // const [state, setState] = useState({
  //   items: [],
  //   id: 0,
  //   item: '',
  //   editedItem: false,
  // });

  // const handleChange = (e) => {
  //   setState({
  //     item: e.target.value,
  //   });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newItem = {
  //     id: state.id,
  //     item: state.item,
  //   };
  //   console.log(newItem);
  //   const updatedItem = [...state.item, newItem];
  //   setState({
  //     items: updatedItem,
  //     item: '',
  //     id: 0,
  //     editedItem: false,
  //   });

  return (
    <>
      <div className='box-border border-2  rounded mt-6  w-72 md:w-96 lg:w-6/12  mx-auto py-2 px-2 lg:px-0'>
        <div className='text-2xl font-semibold text-center'>Todo Input</div>
        <div>
          {/* <div className='pt-0 bg-blue-800 h-6'>
          <i class='fa fa-book' aria-hidden='true'></i>
        </div> */}
          <form className='lg:mx-6  '>
            <span className='bg-blue-700 py-1'>
              <i class='fa fa-book fa-xl' aria-hidden='true'></i>
            </span>

            <input
              className=' border border-gray-400 w-60 lg:w-11/12 pl-2 hover:drop-shadow-lg'
              type='text'
              placeholder='Add A Todo Item'
              value={item}
              onchange={(e) => setItem(e.target.value)}
            />
            <div>
              <button
                type='submit'
                className='bg-blue-700 px-24 lg:px-44 lg:w-11/12 my-4 rounded py-2 hover:drop-shadow-lg lg:ml-3'
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Todo_input;
