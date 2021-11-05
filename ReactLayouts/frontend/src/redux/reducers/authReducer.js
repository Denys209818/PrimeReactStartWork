import { END_AUTH, START_AUTH } from "../../constants/reduxConstants"

var authState = {
    isAuth: false,
    user: null
}

const authReducer = (state = authState, action) => 
{
    switch(action.type) {
        case START_AUTH: {
            return {
                isAuth: true,
                user: action.payload
            }
        }
        case END_AUTH: {
            return {
                isAuth: false,
                user: null
            }
        }
        default: {
            return state;
        }
    }
}

export default authReducer;