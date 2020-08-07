/* eslint-disable prettier/prettier */
export const login = (request = null) => {
  return {
    type: 'LOGIN',
    payload: request,
  };
};
