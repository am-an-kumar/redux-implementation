import React from 'react'
import PropTypes from 'prop-types'
import Heading from './Heading'
import List from './List'
import InputElement from './InputElement'

const Goals = ({ dispatch, list }) => (
  <div className='container'>
    <Heading text='Long term goals' />
    <InputElement placeholder='type goal to add' />
    <List dispatch={dispatch} list={list} />
  </div>
)

Goals.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}

export default Goals
