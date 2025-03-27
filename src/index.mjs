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
// find out which database the user with this id belongs to
const userLocation = await central(id);
// call the db function corresponding to the users id
const basicUserInfo = await dbs[userLocation](id)
//• call-the vault function to grab the remaining user data
const personalUserInfo = await vault(id);
//- return the formatted data 

const userData = {
id, 
... basicUserinfo, 
personalUserInfo
}
return console.log(userData)
} catch {

console. log("Oh no! The number does not correspond to this database")

}
}

getUserData(11)

// same as
// .then()
// .catch()
// .finally()

//source: after class help with Bryan///













//   const returnedValue = await central(id);  //call the central data base///

//   const returnedValue = await db1(id);      //access the 3 data bases//

//   const returnedValue = await vault(id); //name, email, address, and phone//
// }



