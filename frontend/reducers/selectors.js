export const asArray = (state) => {
  if (state.events){
    Object.keys(state.events).map(key => state.events[key]);
  }
};
