import { ImageProfiles } from "../types";
import { selectProfileDB, LoadProfileDB } from "../../db";


const { CHANGE_IMAGE, LOAD_IMGPROFILE } = ImageProfiles

export const SaveImageProfile = (pickUrl)  =>({
    type: CHANGE_IMAGE,
    image: pickUrl,
});

export const ImageProfileSave = (pickUrl) => {
    return async (dispatch) => {
      try {
        const result = await selectProfileDB(pickUrl);
        dispatch(SaveImageProfile(pickUrl));
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
  };

  export const LoadimageProfile = (image) =>({
    type: LOAD_IMGPROFILE,
    image: image,
});

  export const LoadImageProfile = () => {
    return async (dispatch) => {
      try {
        const result = await LoadProfileDB();

        const array = result?.rows?._array;
        const mapping = array.map((item) => item.image);
        const image = mapping[mapping?.length-1];

        image == null ? image = "https://i.ibb.co/qjWS478/perfil-empty.png" : image;

        dispatch(LoadimageProfile(image));
      } catch (err) {
        //throw err;
      }
    };
  };



  

