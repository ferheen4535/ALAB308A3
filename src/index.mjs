// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };


// try {
//            //first task: find the user this id belongs to//
// const userLocation = await central(id);

// console.log(basicUserData);         //next: call the db function corresponding to the users id//


// const basicUserInfo = await dbs[userLocation](id)// lastly: call the vault funciton to grab the remaining user data//
// } catch {
// console.log("oh no!")
// }

// }
try {
  // Find out which database the user with this ID belongs to
  const userLocation = await central(id);
  // Call the db function corresponding to the user's ID
  const basicUserInfo = await dbs[userLocation](id);
  // Call the vault function to grab the remaining user data
  const personalUserInfo = await vault(id);

  // Return the formatted data
  const userData = {
    id,
    ...basicUserInfo,
    ...personalUserInfo
  };
  console.log(userData);
  return userData;
} catch (error) {
  console.error("Oh no! The number does not correspond to this database:", error);
}
}

getUserData(1);
getUserData(2);
getUserData(3);
getUserData(4);
getUserData(5);
getUserData(6);
getUserData(7);
getUserData(8);
getUserData(9);
getUserData(10);
getUserData(12);


// same as
// .then()
// .catch()
// .finally()

//source: after class help with Bryan///













//   const returnedValue = await central(id);  //call the central data base///

//   const returnedValue = await db1(id);      //access the 3 data bases//

//   const returnedValue = await vault(id); //name, email, address, and phone//
// }



