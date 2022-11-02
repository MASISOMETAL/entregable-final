import { ImageProfiles } from "../types";

const { CHANGE_IMAGE, LOAD_IMGPROFILE } = ImageProfiles;

const initialState = {
    image: "https://i.ibb.co/qjWS478/perfil-empty.png",
}

const ImageProfileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CHANGE_IMAGE:
            return{
               image : action.image
            };
        case LOAD_IMGPROFILE:
            return{
                image : action.image
            };
        default:
            return state
    }
    
}

export default ImageProfileReducer;