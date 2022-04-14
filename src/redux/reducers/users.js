import { CREATE_USERS, MANAGE_USERS } from "../../constants/actionType";

const INITIAL_STATE = {
  isLoading: false,
  users: [],
  selectedUser: {},
  errorMessage: "",
};

const Users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USERS:
      return { ...state, users: [action.payload, ...state.users] };
    case MANAGE_USERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default Users;
