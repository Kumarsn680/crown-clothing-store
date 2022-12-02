import React from 'react'

const FormInput = ({labelname,...otherProps}) => {
  return (
    <div className="forminput">
      <label className={`${otherProps.value.length ? 'shrink' : ''} forminputlabel`}>{labelname}</label>
      <input className="forminputinput" {...otherProps} />
    </div>
  );
}

export default FormInput