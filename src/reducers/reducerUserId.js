export default function (state = 3, action) {
  switch (action.type) {
    case 'USER_ID':
      return action.payload;
  }
  return state;
}
