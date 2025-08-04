
import { auth, db } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

window.login = async function() {
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const email = phone + "@zowi.com"; // simulate email using phone

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    const docRef = doc(db, "approvals", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists() && docSnap.data().approved === true) {
      window.location.href = "https://rohobotya.github.io/www.zowipromotion.com/";
    } else {
      document.getElementById("status").innerText = "Approval pending. Please wait for admin approval.";
    }
  } catch (error) {
    document.getElementById("status").innerText = "Login failed: " + error.message;
  }
}
