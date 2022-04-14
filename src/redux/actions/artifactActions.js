import { CREATE_USERS, MANAGE_USERS } from "../../constants/actionType";

export const createUser = (data) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_USERS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: MANAGE_USERS,
      payload: {
        isLoading: false,
        errorMessage: "Error: " + err,
      },
    });
  }
};
