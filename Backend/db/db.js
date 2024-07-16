import db from "./Firebase";
import { ref, set } from "firebase/database";


//creating a new user 

const createUser = async (userId, username, email, password) => {
  const userRef = ref(db, `users/${userId}`);
  const user = {
     id: userId,
     username,
     email,
     password
  };
  try {
     await set(userRef, user);
     console.log("User yabashije kwinjizwa");
  } catch(error) {
     console.error("byanze wongere mukanya", error);
  }
}

//creating a new list for a user
const createList  = async (listId, userId, name) => {
     const listRef = ref(db, `List/${listId}`);
     const listId = {
          id: listId,
          userId,
          name,
          createAt: new Date().toISOString()
     };
     try {
          await set(listRef, list);
          console.log("List yabashije kwinjizwa");
     } 
     catch (error) {
          console.error("byanze wongere mukanya", error);
     }
};

const createTask = async (taskId, listId, title, description,duedate, priority, status) => {
     const taskRef = ref(db, `task${taskId}`);
     const task = {
          id: taskId,
          listId,
          title,
          description,
          dueDate: duedate,
          priority,
          status,
         // createdAt: new Date().toISOString()
     }
     try {
          await set(taskRef, task);
          console.log("Task yabashije kwinjizwa");
     }
     catch (error) {
          console.error("task ntibibashijwe kwinjizwa wongere mukanya")
     }
};

//urugero
createUser("001", "ntwari_fiacre", "ntwarifiacre043@gmail.com", "SARAserge54");
createList("123", "001", "Finish UP this Project");
createTask("789", "123","Buy groceries", "Milk, eggs, bread", "2022-05-15T12:00:00.000Z", "High", "Pending");