import * as React from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions/counter'
import { IStore } from '../types'

interface IProps {
  number: number,
  add: any,
  subtract: any
}

class CounterComponent extends React.Component<IProps> {

  render() {
    let { number, add, subtract } = this.props
    return (
      <div>
        <p>{number}</p>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
      </div>
    )
  }
}

let mapStateToProps = function (state: IStore) {
  return state
}
export default connect(mapStateToProps, actions)(CounterComponent)