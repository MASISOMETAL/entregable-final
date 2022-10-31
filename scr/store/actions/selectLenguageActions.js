import { SelectLenguage } from "../types";
import { selectLenguageDB, LoadSelectLenguageDB } from "../../db";

const {SELECT_LENGUAGE} = SelectLenguage;

export const SelectedLenguage = (item)  =>({
    type: SELECT_LENGUAGE,
    Lenguage: item,
});

export const SelectLenguageAct = (item) => {
    return async (dispatch) => {
      try {
        const result = await selectLenguageDB(item);
        dispatch(SelectedLenguage(item));
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
  };

  export const LoadLenguageAct = () => {
    return async (dispatch) => {
      try {
        const result = await LoadSelectLenguageDB();

        const array = result?.rows?._array;
        const mapping = array.map((item) => item.selectLenguage);
        const Lenguage = mapping[mapping?.length-1];

        dispatch(SelectedLenguage(Lenguage));
      } catch (err) {
        throw err;
      }
    };
  };