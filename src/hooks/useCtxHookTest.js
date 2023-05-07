import { useReducer, useContext, createContext } from "react";
import TYPES from "constants/actionTypes/testType";
import {
  GETv1ALL
} from "services/servicesTest/servicesTest";

export const testCtx = createContext(null);
export const useTestCtx = () => useContext(testCtx);

const InitStore = {
  isInit: false,
  isLoading: true,
  error: { code: 200, items: {}, },
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

const useReducerCtxTemplate = () => {
  const [store, dispatch] = useReducer(reducer, InitStore);

  const dispatchFetchList = async (actionType, params) => {
    const resp = await GETv1ALL(params);
    dispatch({
      type: actionType,
      payload: {
        pagination: transPagination(items),
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

export default useReducerCtxTemplate;