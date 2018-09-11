import tabletop from 'tabletop'

const initialState = {
  loading: false,
  error: null,
  standings: [{
    rank: '',
    teamIdx: '',
    team: '',
    img: '',
    record: '',
    top6: '',
    ptsFor: '',
    ptsAgst: ''
  }]
}

const STANDINGS = {
  LOADING: 'MATCHUPS_LOADING',
  ERROR: 'MATCHUPS_ERROR',
  SET: 'MATCHUPS_SET'
}

const standingsLoading = () => {
  return {
    type: STANDINGS.LOADING
  }
}

const standingsError = error => {
  return {
    type: STANDINGS.ERROR,
    error
  }
}

const standingsSet = standings => {
  return {
    type: STANDINGS.SET,
    standings
  }
}

export const standingsFetch = () => {
  const url = '1R8ws_RLgGRyrz9-PyzNUeMuN-q7xH-yp_F_gfRXN-ps'
  return async dispatch => {
    dispatch(standingsLoading())
    try {
      await tabletop.init({
        key: url,
        callback: data => dispatch(standingsSet(data)),
        simpleSheet: true,
        wanted: ['standings']
      })
    } catch (err) {
      dispatch(standingsError(err))
    }

  }
}

const standingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STANDINGS.LOADING:
      return { ...state, loading: true }
    case STANDINGS.ERROR:
      return { ...state, loading: false, error: action.error }
    case STANDINGS.SET:
      return { ...state, loading: false, standings: action.standings }
    default:
      return state
  }
}

export default standingsReducer
