import logo from './logo.svg';
import './App.css';
import data from './data.json'
import React, { Fragment } from 'react';
import { useState } from 'react';
import Read from './Read'
import Edit from './Edit';

function App() {

  const [show, setshow] = useState(true);
  const [peoples, setPeoples] = useState(data);
  const [addpeople, setAddpeople] = useState({
    id: '',
    fullName: ' ',
    address: '',
    phoneNumber: '',
    email: ''
  })

  const [editFormData, setEditFormData] = useState({
    id: '',
    fullName: ' ',
    address: '',
    phoneNumber: '',
    email: ''
  });


  const [editPeople, seteditPeople] = useState(null);



  const handleAdddata = (event) => {
    event.preventDefault();
    const Name = event.target.getAttribute('name');
    const Value = event.target.value;
    const newData = { ...addpeople };
    newData[Name] = Value;

    setAddpeople(newData);
  };

  const handleEditdata = (event) => {
    event.preventDefault();
    const Name = event.target.getAttribute('name');
    const Value = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[Name] = Value;

    setEditFormData(newFormData);
  };


  const handleAdddataSubmit = (event) => {
    event.preventDefault();

    const newpeople = {
      id: addpeople.id,
      fullName: addpeople.fullName,
      address: addpeople.address,
      phoneNumber: addpeople.phoneNumber,
      email: addpeople.email,
    };


    const newpeoples = [...peoples, newpeople];
    setPeoples(newpeoples);
  };

  const handleEditDataSubmit = (event) => {
    event.preventDefault();


    const editedPeople = {
      id: editFormData.id,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,

    };

    const newpeoples = [...peoples];

    const index = peoples.findIndex((people) => people.id === editPeople);

    newpeoples[index] = editedPeople;

    setPeoples(newpeoples);
    seteditPeople(null);
  };

  const handleEditclick = (event, people) => {
    event.preventDefault();
    seteditPeople(people.id);

    const formvalues = {
      id: people.id,
      fullName: people.fullName,
      address: people.address,
      phoneNumber: people.phoneNumber,
      email: people.email,
    };

    setEditFormData(formvalues);
  };

  const handleCancelClick = () => {
    seteditPeople(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...peoples];

    const index = peoples.findIndex((people) => people.id === contactId);

    newContacts.splice(index, 1);

    setPeoples(newContacts);
  };



  return (
    <div className=" container mx-auto">

      <div className='bg-blue-600'>
        <div className='py-8 '>
          <h1 className='text-white text-3xl font-bold text-center'>CRUD TABLE</h1>
        </div>
      </div>

      <form onSubmit={handleEditDataSubmit}>
        <div className='flex justify-center mt-20'>
          <table className=''>
            <thead className='border-2 border-gray-700 my-5  bg-indigo-500'>
              <tr className=' text-white'>
                <th className=' text-left text-[26px] px-2'>Sr.No</th>
                <th className='w-[250px] text-left text-[26px] px-2 border-l-2 border-gray-700'>Name</th>
                <th className='w-[250px] text-left  border-l-2 border-gray-700 text-[26px] px-2'>Adress</th>
                <th className='w-[250px] text-left border-l-2 border-gray-700 text-[26px] px-2'>Phone Number</th>
                <th className='w-[250px] text-left border-l-2 border-gray-700 text-[26px] px-2'>Email</th>
                <th className='w-[150px] text-left border-l-2 border-gray-700 text-[26px] px-2'>Actions</th>
              </tr>
            </thead>
            <tbody className='border-2 border-gray-700 my-5 bg-gray-300'>
              {peoples.map((people) => (
                <>
                  <Fragment>
                    {editPeople === people.id ? (
                      <Edit
                        editFormData={editFormData}
                        handleEditdata={handleEditdata}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <Read
                        people={people}
                        handleEditclick={handleEditclick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                </>
              ))}
            </tbody>
          </table>

        </div>
      </form>
      <div className=" ">
       
        </div>

        <div id="popup-modal" className=" container mx-auto justify-center items-center px-4 md:px-10 py-20">
            <form
              onSubmit={handleAdddataSubmit}
              class="space-y-6" action="#">

              <div className=' flex justify-center '>
                <div className='w-[500px]'>
                <input
                  type="text"
                  name="id"
                  id="email"
                  onChange={handleAdddata}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter id" required />

                <input
                  type="text"
                  name="fullName"
                  id="email"
                  onChange={handleAdddata}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mt-5 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Name" required />
                <input
                  type="text"
                  name="address"
                  id="email"
                  onChange={handleAdddata}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  mt-5 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Address" required />
                <input
                  type="text"
                  name="phoneNumber"
                  id="email"
                  onChange={handleAdddata}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  mt-5 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Phone Number" required />
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleAdddata}

                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  mt-5 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Email" required />
              </div>
              </div>
              <div className='flex justify-center'>
                <button type='submit' className="w-full sm:w-auto border  bg-indigo-500 rounded-xl border-gray-800 text-base font-medium text-gray-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white">
                  ADD
                </button>
              </div>

            </form>
            <div className="mt-12 md:mt-14 w-full flex justify-center">
              
            </div>
          </div>
        </div>
  
  
  );
}

export default App;
