export const addTicket = (ticket) => ({
  type: 'ADD_TICKET',
  payload: ticket,
});

export const removeTicket = (id) => ({
  type: 'REMOVE_TICKET',
  payload: id,
});

export const updateTicket = (ticket) => ({
  type: 'UPDATE_TICKET',
  payload: ticket,
});

export const getTickets = () => async (dispatch) => {
  try {
    const response = await fetch('/api/tickets');
    const data = await response.json();
    dispatch({ type: 'GET_TICKETS', payload: data });
  } catch (error) {
    console.log(error);
  }
};
