import Constants from '../../assets/constants'


export default (state = [], action) => {
  switch (action.type){
    case Constants.LOAD_DATA:
      return state.concat(action.payload)
    case Constants.REFRESH_DATA:
      return action.payload
    default:
      return state
  }
}
