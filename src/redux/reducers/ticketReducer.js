const ticketReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TICKET':
      return [...state, action.payload];
    case 'REMOVE_TICKET':
      return state.filter((ticket) => ticket.id !== action.payload);
    case 'UPDATE_TICKET':
      return state.map((ticket) =>
        ticket.id === action.payload.id ? action.payload : ticket
      );
    case 'GET_TICKETS':
      return action.payload;
    default:
      return state;
  }
};

export default ticketReducer;
