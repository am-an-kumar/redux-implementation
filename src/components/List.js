import React from 'react'
import PropTypes from 'prop-types'

const List = ({ list }) => (
  <ul className='list'>
    {list.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
)

List.propTypes = {
  list: PropTypes.array.isRequired,
}

export default List
