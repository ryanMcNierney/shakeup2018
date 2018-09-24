import React, { Component } from 'react'
import { connect } from 'react-redux'
import { top6Fetch } from '../../reducers/top6Reducer'
import Top6Grid from './Top6Grid'
import '../styles/top6.css'

class Top6Container extends Component {

  async componentDidMount() {
    await this.props.getTop6()
  }

  render() {
    const { top6, loading } = this.props
    return (
      <React.Fragment>
        {
          (loading === true) ? <div id="loading"></div> : <Top6Grid top6={top6} />
        }
      </React.Fragment>
    )
  }

}

const mapState = state => {
  return {
    top6: state.top6.top6,
    loading: state.top6.loading
  }
}

const mapDispatch = dispatch => {
  return {
    getTop6: () => dispatch(top6Fetch())
  }
}

export default connect(mapState, mapDispatch)(Top6Container)
