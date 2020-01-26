import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import Loading from './Loading'

const List = ({
  items,
  toggleItem,
  removeItem,
  handleItemKeyDown,
  loading,
}) => {
  return loading ? (
    <Loading />
  ) : items.length === 0 ? (
    <p className='info-no-item'>No todos added yet!!!</p>
  ) : (
    <ul className='list'>
      {items.map(item => (
        <ListItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          toggleItem={toggleItem}
          handleItemKeyDown={handleItemKeyDown}
        />
      ))}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  toggleItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  handleItemKeyDown: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default List
