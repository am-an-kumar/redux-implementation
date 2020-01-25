import React from 'react'
import PropTypes from 'prop-types'

const UserInput = ({ value, onChangeHandler, onClickHandler }) => {
  return (
    <div className='add-form'>
      <input
        type='text'
        value={value}
        onChange={onChangeHandler}
        onKeyDown={event => {
          if (event.keyCode === 13) {
            onClickHandler()
          }
        }}
      />
      <button
        type='submit'
        disabled={value ? false : true}
        onClick={onClickHandler}
      >
        Add
      </button>
    </div>
  )
}

UserInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onClickHandler: PropTypes.func.isRequired,
}

export default UserInput
