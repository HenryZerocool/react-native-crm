// import people from "./people.json";

const initialState = {
  people: [],
  detailView: false,
  personSelected: null,
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  company: '',
  project: '',
  notes: '',
  _id: '',
  toUpdate: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_FETCH":
      return {
        ...state,
        people: action.payload
      }
    case "SELECTED_PERSON":
      return {
        ...state,
        detailView: true,
        personSelected: action.selectedId,
      };
    case "NONE_SELECTED":
      return {
        ...state,
        detailView: false,
        personSelected: null,
      };
    case "FORM_UPDATE":
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    case "NEW_CONTACT":
      return {
        ...state,
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        project: '',
        notes: '',
      };
    default:
      return state;
  }
};
