import React from 'react'
import PropTypes from 'prop-types'

const List = ({ items, toggleItem, removeItem, handleItemKeyDown }) => {
  return items.length === 0 ? (
    <p className='info-no-item'>No todos added yet!!!</p>
  ) : (
    <ul className='list'>
      {items.map(item => (
        <li key={item.id} className='list-item'>
          <span
            role='switch'
            aria-checked={item.completed}
            tabIndex='0'
            className='text'
            style={{
              textDecoration: item.completed ? 'line-through' : 'none',
            }}
            onClick={() => toggleItem(item.id)}
            onKeyDown={event => handleItemKeyDown(event, item.id)}
          >
            {item.name}
          </span>
          <button
            className='remove'
            onClick={() => removeItem(item.id)}
          ></button>
        </li>
      ))}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  toggleItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  handleItemKeyDown: PropTypes.func.isRequired,
}

export default List
