import React from 'react';

export const ContentLoading = ({ children, isLoading = true }) => {
  return (
    <>
      {isLoading ? (
        <div className='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
