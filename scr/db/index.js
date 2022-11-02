import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("lenguage.db");

const dbimg = SQLite.openDatabase("profile.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS lenguage (id INTEGER PRIMARY KEY NOT NULL, selectLenguage TEXT NOT NULL);",
          [],
          () => resolve(),
          (_, err) => reject(err)
        );
      });
    });

    const promise2 = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS profile (id INTEGER PRIMARY KEY NOT NULL, image TEXT NOT NULL);",
          [],
          () => resolve(),
          (_, err) => reject(err)
        );
      });
    });
  
    return promise;
    
  };

  export const selectLenguageDB = (selectLenguage) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO lenguage (selectLenguage) VALUES (?);",
          [selectLenguage],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        );
      });
    });

    return promise;
};

export const LoadSelectLenguageDB = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM lenguage",
          [],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        );
      });
    });
  
    return promise;
  };

  export const selectProfileDB = (image) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO profile (image) VALUES (?);",
          [image],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        );
      });
    });

    return promise;
};

export const LoadProfileDB = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM profile",
          [],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        );
      });
    });
  
    return promise;
  };