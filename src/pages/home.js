import React from 'react'
import { map, toLower } from 'ramda'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import AddColor from '../components/add-color'

const colors = ['Red', 'Green', 'Blue']
const li = color => (
  <li className="ph3 pv3 bb b--light-silver hover-bg-light-purple">
    <Link className={`link ${toLower(color)}`} to={`${color}`}>
      {color}
    </Link>
  </li>
)

const Home = props => {
  return (
    <div>
      <AddColor
        value={props.newcolor}
        onChange={props.setNewColor}
        onSubmit={props.addColor}
      />
      <ul className="list pl0 ba b--light-silver br2">
        {map(li, props.colors)}
      </ul>
    </div>
  )
}
const mapStateToProps = state => {
  return { colors: state.colors, newcolor: state.newcolor }
}
const mapActionsToProps = (dispatch, getState) => {
  return {
    setNewColor: event => {
      dispatch({ type: 'SET_NEW_COLOR', payload: event.target.value })
    },

    addColor: color => {
      dispatch({ type: 'SET_NEW_COLOR', payload: '' })
      dispatch({ type: 'ADD_COLOR', payload: color })
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(Home)
