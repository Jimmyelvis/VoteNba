const initialState = {
  cetlics: 0,
  warriors: 0,
  sixers: 0,
  raptors: 0,
  lakers: 0
}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'VOTE_CELTICS':
      console.log("Vote Celtics!");
      return Object.assign({}, state, {
        cetlics: state.cetlics + 1
      })
    case 'VOTE_WARRIORS':
      console.log("Vote warriors!");
      return Object.assign({}, state, {
        warriors: state.warriors + 1
      })
    case 'VOTE_SIXERS':
      console.log("Vote Sixers!");
      return Object.assign({}, state, {
        sixers: state.sixers + 1
      })
    case 'VOTE_RAPTORS':
      console.log("Vote raptors!");
      return Object.assign({}, state, {
        raptors: state.raptors + 1
      })
    case 'VOTE_LAKERS':
      console.log("Vote lakers!");
      return Object.assign({}, state, {
        lakers: state.lakers + 1
      })
    default:
      return state
  }




}