import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
function Alert() {
  const { alert } = useContext(AlertContext);
  if (alert !== null) {
    return (
      <div
        class="flex  items-center p-4 space-x-2 text-sm text-red-700 "
        role="alert"
      >
        {alert.type === 'error' && (
          <svg
            class="inline flex-shrink-0 mr-3 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
        <div className="flex-1 text-base">
          <span class="font-medium">{alert.msg}</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Alert;
