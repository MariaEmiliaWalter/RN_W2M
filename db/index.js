import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('work2meet.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          image TEXT,
          name TEXT NOT NULL,
          lastname TEXT NOT NULL,
          email TEXT NOT NULL,
          profession TEXT NOT NULL,
          preference TEXT NOT NULL,
          createdAt DATE NOT NULL
        )`,
        [],
        () => { resolve()},  //promesa se cumple - éxito
        (_, err) => { reject(err) },  // promesa no se cumple - fracaso
      );
    });
  });
  
  return promise;
}

export const insertUser = (
image,
name,
lastname,
email,
profession,
preference,
createdAt
) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO users (image,name,lastname,email,profession,preference,createdAt)
          VALUES ( ?, ?, ?, ?, ?, ?, ?)`,
        [image,name,lastname,email,profession,preference,createdAt],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      )
    })
  })
}

export const fetchUsers = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM users`,
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      )
    })
  })
}

export const SelectUser = (UserEmail) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `SELECT * FROM users WHERE email = ?` ,
          [UserEmail],
          (_, result) =>resolve(result),
          (_, err) => reject(err),
        )
      })
    })
  }

  export const updateUserPicture = (
    image,
    email
       ) => {
      return new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            `UPDATE users SET image=? WHERE email = ?`,
            [image,email],
            (_, result) => resolve(result),
            (_, err) => reject(err),
          )
        })
      })
    }

