   // Sign up
   firebase.auth().createUserWithEmailAndPassword(email, password)
       .then((userCredential) => {
           // Signed in
           const user = userCredential.user;
           console.log("User signed up:", user);
       })
       .catch((error) => {
           console.error("Error signing up:", error);
       });

   // Sign in
   firebase.auth().signInWithEmailAndPassword(email, password)
       .then((userCredential) => {
           // Signed in
           const user = userCredential.user;
           console.log("User signed in:", user);
       })
       .catch((error) => {
           console.error("Error signing in:", error);
       });
   