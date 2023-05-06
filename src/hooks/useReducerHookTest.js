import { useReducer } from "react";
import TYPES from "constants/actionTypes/testType";
import {
  GETv1ALL
} from "services/servicesTemplate/servicesTemplate";

const InitError = { code: 200, items: {}, };
const InitStore = {
  isInit: false,
  isLoading: true,
  error: InitError,
  activeId: "",
  data: [],
  params: {},
  pagination: {
    perPage: 20,
    currentPage: 1,
    total: 1,
  },
};

function reducer(store, action) {
  switch (action.type) {
    case TYPES.TEMPLATE_INIT: {
      return {
        ...store,
        isLoading: true
      }
    }
    case TYPES.TEMPLATE_INIT_SUCCESS: {
      return {
        ...store,
        isLoading: false,
        isInit: true,
        data: action.payload.data,
      }
    }
    case TYPES.TEMPLATE_INIT_FAIL: {
      return {
        ...store,
        isLoading: false,
        isInit: true,
        error: action.payload.error
      }
    }
    default:
      return store;
  }
}

export default function useReducerTemplate() {
  const [store, dispatch] = useReducer(reducer, InitStore);

  const dispatchFetchList = async (type, params) => {
    const resp = await GETv1ALL(params);
    dispatch({
      type,
      payload: {
        data: resp.data,
      },
    });
  };

  const dispatchError = (actionType, error, payload = {}) => {
    dispatch({
      type: actionType,
      payload: { error, ...payload, },
    });
  };

  const action = {
    init: async (params = {}) => {
      dispatch({ type: TYPES.TEMPLATE_INIT });

      try {
        await dispatchFetchList(TYPES.TEMPLATE_INIT_SUCCESS, params);
      } catch (error) {
        dispatchError(TYPES.TEMPLATE_INIT_FAIL, error);
      }
    },
  };

  return [store, action];
}
