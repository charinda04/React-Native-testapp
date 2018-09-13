export const POST_AUTHENTICATE_USER = 'POST_AUTHENTICATE_USER';

const authenticateUser = () => ({
    type: POST_AUTHENTICATE_USER,
   // payload: {username, password},
  //  (username: string, password: string): FlashReduxAction
    
});

export default {
  authenticateUser,
};

