import React from "react";


function Edit({ editFormData, handleEditdata, handleCancelClick, }) {
    return (
        <>
            <tr>
                <td>
                    <input
                        type="text"
                        name="id"
                        id="email"
                        value={editFormData.id}
                        onChange={handleEditdata}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter id" required />
                </td>

                <td>
                    <input
                        type="text"
                        name="fullName"
                        id="email"
                        value={editFormData.fullName}
                        onChange={handleEditdata}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Full Name" required />
                </td>

                <td>
                    <input
                        type="text"
                        name="address"
                        id="email"
                        value={editFormData.address}
                        onChange={handleEditdata}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Address" required />
                </td>

                <td>
                    <input
                        type="text"
                        name="phoneNumber"
                        id="email"
                        value={editFormData.phoneNumber}
                        onChange={handleEditdata}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Phone Number" required />
                </td>

                <td>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={editFormData.email}
                        onChange={handleEditdata}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Email" required />
                </td>

                <td>
                    <div className="flex justify-center ">
                        <button type="submit" className="bg-blue-600 text-white px-10 py-2 rounded-xl">
                            Save
                        </button>

                        <button type="button" onClick={handleCancelClick} className="bg-blue-600 text-white px-10 py-2 rounded-xl">
                            Cancel
                        </button>
                    </div>
                </td>
            </tr>


        </>

    )
}
export default Edit;