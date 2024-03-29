import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      //mogućnost biranja accounta, ne samo prvi da se automatski logira s njim
      provider.setCustomParameters({
        prompt: "select_account",
      });
      const result = await signInWithPopup(auth, provider);
      //vraća objekt sa userovim google podacima, uid je isti kao
      //onaj u bazi, pa možda hashira email adresu pa je zato isti
      const user = result.user;

      //dohvaćamo usera sa tim signInom
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      //ako user ne postoji - kreiraj ga
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  };

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-up" ? "up" : "in"} with</p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img className="socialIconImg" src={googleIcon} alt="google" />
      </button>
    </div>
  );
}

export default OAuth;
