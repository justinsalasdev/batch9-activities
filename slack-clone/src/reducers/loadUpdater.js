// const initialState = { isStarted: false, isUploading: false, isFinished: false, isError: false };

export default function loadUpdater(state, action) {
  switch (action.type) {
    case "wait":
      console.log("waiting");
      return { ...state, _w: true, _e: false, _c: false };
    case "complete":
      console.log("completed");
      return { ...state, _w: false, _e: false, _c: true };
    case "error": {
      console.log("error");
      console.log(action.error);
      return { ...state, _w: false, _e: true, _c: false };
    }

    default:
      return { ...state };
  }
}

/**
 * _w : isWaiting
 * _c: isCompleted
 * _e: isError
 */
