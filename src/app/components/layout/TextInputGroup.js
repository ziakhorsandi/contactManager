import React from 'react'
import PropTypes from 'prop-types'

const TextInputGroup = ({label,name,value,placeholder,type,onChange }) => {
  // const {label,name,value,placeholder,type,onChange } =props;
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input  style={{ fontSize:"14px" }} 
        type={type} name={name} 
        className='form-control form-control-lg' 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} />
    </div>
  )
}

TextInputGroup.propTypes = {
  label : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  value : PropTypes.string.isRequired,
  placeholder : PropTypes.string.isRequired,
  type : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired
}
TextInputGroup.defaultProps={
  type : "text"
}

export default TextInputGroup
