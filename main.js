import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./assets/firebase.js"
// import { loginCheck } from "./firebase/login_check.js";

// import './assets/signup-form.js';
// import './assets/signin-form.js';
// import './assets/logout.js';
import './assets/google_login.js';
console.log('hola');

// onAuthStateChanged(auth, async (user) => 
// {
//     // Si ha ingresado
//     if (user) {
//         loginCheck(user);
        
//         import("./assets/setup_tasks.js")
//             .then(({default: setupTasks}) => setupTasks(user));
//     }
//     // Si ha salido
//     else {
//         loginCheck(user);
//     }
// });