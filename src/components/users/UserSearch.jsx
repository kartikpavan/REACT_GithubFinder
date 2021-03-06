import React, { useState, useContext } from 'react';
import { useGlobalContext } from '../../context/github/githubContext';
import AlertContext from '../../context/alert/AlertContext';

function UserSearch() {
  const [text, setText] = useState('');
  const { users, fetchUsers, clearUsers } = useGlobalContext();
  const { setAlert } = useContext(AlertContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Search field cannot be empty ', 'error');
    } else {
      fetchUsers(text);
      setText('');
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 ">
      <div>
        <form onSubmit={submitHandler} className="form-control">
          <div className="relative">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Search for a user..."
              className="w-full pr-40 bg-zinc-200 input input-lg text-black"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg btn-primary italic"
            >
              GO
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-outline btn-md" onClick={clearUsers}>
            CLEAR ALL
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
