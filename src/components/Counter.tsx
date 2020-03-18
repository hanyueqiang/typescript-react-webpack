import * as React from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions/counter'
import { IStore } from '../types'

interface IProps {
  number: number,
  add: any,
  subtract: any,
  syncAdd: any
}

class CounterComponent extends React.Component<IProps> {

  render() {
    let { number, add, subtract, syncAdd } = this.props
    return (
      <div>
        <p>{number}</p>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={syncAdd}>异步加1</button>
      </div>
    )
  }
}

let mapStateToProps = function (state: IStore) {
  return state
}
export default connect(mapStateToProps, actions)(CounterComponent)