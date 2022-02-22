export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // ROMOVE after finished developing...
  //token:
  // "BQBddK02ygZFZmJ-CTDi6Qzte_-FlOZGe12RtQBg_SNr9tjzFmUD74gBG1JGDG3iMZkqExuS0ARMgikIPcjnuXMFNenucelkH7Y67gpJ73gDfTlV3VN4rmErRozEb5aNbZb4Tq-ktUCPU5Nb96Z6VMfaPs5phRSwT7lCZ-2ZQaHGZ_rh",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DICOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
