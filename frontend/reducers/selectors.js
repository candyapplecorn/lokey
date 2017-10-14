export const asArray = (state) => {
  if (Object.keys(state.events).length > 0){
    return Object.keys(state.events).map(key => state.events[key]);
  }
};
