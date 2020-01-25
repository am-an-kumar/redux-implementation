import React from 'react'
import PropTypes from 'prop-types'

const UserInput = ({
  value,
  onChangeHandler,
  onClickHandler,
  onKeyDownHandler,
}) => {
  return (
    <div className='add-form'>
      <input
        type='text'
        value={value}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
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
  onKeyDownHandler: PropTypes.func.isRequired,
}

export default UserInput
