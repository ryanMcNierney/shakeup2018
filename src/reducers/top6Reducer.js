import tabletop from 'tabletop'

const initialState = {
  loading: false,
  error: null,
  top6: [{
    position: '',
    teamIdx: '',
    team: '',
    actual: '',
    projected: ''
  }]
}

const TOP6 = {
  LOADING: 'TOP6_LOADING',
  ERROR: 'TOP6_ERROR',
  SET: 'TOP6_SET'
}

const top6Loading = () => {
  return {
    type: TOP6.LOADING
  }
}

const top6Error = error => {
  return {
    type: TOP6.ERROR,
    error
  }
}

const top6Set = top6 => {
  return {
    type: TOP6.SET,
    top6
  }
}

export const top6Fetch = () => {
  const url = '1R8ws_RLgGRyrz9-PyzNUeMuN-q7xH-yp_F_gfRXN-ps'
  return async dispatch => {
    dispatch(top6Loading())
    try {
      await tabletop.init({
        key: url,
        callback: data => dispatch(top6Set(data)),
        simpleSheet: true,
        wanted: ['top6']
      })
    } catch (err) {
      dispatch(top6Error(err))
    }
  }
}

const top6Reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOP6.LOADING:
      return { ...state, loading: true }
    case TOP6.ERROR:
      return { ...state, loading: false, error: action.error }
    case TOP6.SET:
      return { ...state, loading: false, top6: action.top6 }
    default:
      return state
  }
}

export default top6Reducer
