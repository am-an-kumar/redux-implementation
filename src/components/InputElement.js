import React from 'react'
import PropTypes from 'prop-types'

const InputElement = ({ placeholder }) => (
  <div className='add-form'>
    <input type='text' placeholder={placeholder} />
    <button type='submit'>Add</button>
  </div>
)

InputElement.propTypes = {
  placeholder: PropTypes.string.isRequired,
}
export default InputElement
