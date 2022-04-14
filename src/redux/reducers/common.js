import { MANAGE_COMMON } from "../../constants/actionType";

const INITIAL_STATE = {
  isLoading: false,
  countries: [
    { text: "India", value: "91", key: "91" },
    { text: "Pakistan", value: "92", key: "92" },
    { text: "America", value: "93", key: "93" },
    { text: "Nepal", value: "94", key: "94" },
  ],
  states: [
    { text: "Delhi", value: "1", key: "1", countryId: "91" },
    { text: "Odisha", value: "2", key: "2", countryId: "91" },
    { text: "Gujrat", value: "3", key: "3", countryId: "91" },
    { text: "Punjab", value: "4", key: "4", countryId: "91" },
    { text: "Lezhe", value: "5", key: "5", countryId: "92" },
    { text: "Librazhd", value: "6", key: "6", countryId: "92" },
    { text: "Lushnje", value: "7", key: "7", countryId: "92" },
    { text: "Eastern", value: "8", key: "8", countryId: "93" },
    { text: "Swains Island", value: "9", key: "9", countryId: "93" },
    { text: "Western", value: "10", key: "10", countryId: "93" },
    { text: "Bagmati", value: "11", key: "11", countryId: "94" },
    { text: "Bheri", value: "12", key: "12", countryId: "94" },
    { text: "Dhawalagiri", value: "13", key: "13", countryId: "94" },
  ],
  errorMessage: "",
};

const Common = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MANAGE_COMMON:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default Common;
