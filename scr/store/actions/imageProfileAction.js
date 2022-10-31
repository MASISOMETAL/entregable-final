import { ImageProfiles } from "../types";
import { URL_API } from "../../constants/firebase";


const { CHANGE_IMAGE, LOAD_IMGPROFILE } = ImageProfiles

export const SaveImageProfile = ({pickUrl})  =>({
    type: CHANGE_IMAGE,
    image: pickUrl,
});

export const ImageProfileSave = (pickUrl, userId) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${URL_API}/registerPhoto.json`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              id: userId,
              image: pickUrl
          })
      })
        dispatch(SaveImageProfile({pickUrl}));
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
  };

  export const LoadimageProfile = (pickUrl) =>({
    type: LOAD_IMGPROFILE,
    image: pickUrl,
});

  export const LoadImageProfile = (userId) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${URL_API}/registerPhoto.json`, {
          method: "get",
          headers: {
              "Content-Type": "application/json"
          },
      });

      const dataGet = await response.json();


      const mapName = Object.keys(dataGet).map( key => dataGet[key] );
      const filterName = mapName.filter(item => item.id === userId )
      const imagen = filterName.map(item => item.image);

      console.log("In Action:   ", imagen[1])

        dispatch(LoadimageProfile(imagen[1]));
      } catch (err) {
        throw err;
      }
    };
  };



  

