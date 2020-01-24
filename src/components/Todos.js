import React from 'react'
import PropTypes from 'prop-types'
import Heading from './Heading'
import List from './List'
import InputElement from './InputElement'

const Todos = ({ list }) => (
  <div className='container'>
    <Heading text='Short term todos' />
    <InputElement placeholder='type todo to add' />
    <List list={list} />
    <hr
      style={{
        width: '100%',
      }}
    />
  </div>
)

Todos.propTypes = {
  list: PropTypes.array.isRequired,
}

export default Todos
