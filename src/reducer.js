export const initialState = {
    user: null,
    playlists: [],
    playlist: null,
    playing: false,
    item: null,
    // REMOVE after finished developing...
    // token:
    //     "BQDiW9ZBgdeI26E0jq4b6-_LGjmEnWkwk7b-IGqxrwkRcmS_5_-GO2Yy0hb89qxU4tjagosw3n-Ke70Nb6aXA3sRb96YDJYxpJ4mAljVoLEUwb7jzTPqcsIsTvCb5WUUZP2-Fl6a4tw0wDiYAS9w6JAIa4bl8FZQW_VELVLii913gUf2",
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_PLAYLIST":
            return {
                ...state,
                playlist: action.playlist,
            }
        default:
            return state;
    }
};

export default reducer;
