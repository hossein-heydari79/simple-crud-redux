
const init = []


const User = (state = init, action) => {

    switch (action.type) {

        case "set": {
            return action.payload;
        }

        default:
            return state;
    }

}

export default User;