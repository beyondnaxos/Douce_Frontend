import React from 'react';

const SliderChild = ({ data }) => {

  const { isActive, handleClick, currentId } = data;

  return (
    <div
      onClick={handleClick}
      className={`panel ${isActive[currentId.id] && 'isActive'} `}
      key={currentId.id}
      id={currentId.id}>
      <h3>{currentId.title}</h3>
      <p className='hello'>{currentId.text.toUpperCase()}
      </p>
    </div>
  );
};

export default SliderChild;