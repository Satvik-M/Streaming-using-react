import {
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
  CREATE_STREAM,
} from "../actions/types";
import _ from "lodash";
import streams from "../apis/streams";

const streamReducers = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      const newObj = {};
      action.payload.forEach((stream) => {
        newObj[stream.id] = stream;
      });
      return { ...state, ...newObj };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return streams;
  }
};

export default streamReducers;
