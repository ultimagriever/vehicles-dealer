
export function initialLoad(closure) {
  return (dispatch, getState) => {
    if (process.browser) {
      // Browser: always load data
      closure();
      return;
    }
    // Server: Only load once
    const key = closure.toString();

    const state = getState(); // TODO dont change state

    if (typeof state.called[key] === 'undefined') {
      console.log('Initial Load');
      state.called[key] = closure();
    } else {
      console.log('Already Loaded');
    }
  };
}

// export function allLoaded() {
//   return (dispatch, getState) => {
//     return Promise.all(getState().called);
//   };
// }
