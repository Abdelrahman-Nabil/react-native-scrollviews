import Constants from '../../assets/constants'


export default (state = 'LTR', action) => {
  switch (action.type){
    case Constants.IS_RTL:
      return action.payload
    default:
      return state
  }
}
