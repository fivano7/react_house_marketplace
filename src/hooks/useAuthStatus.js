import { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();

      //aktivira se svaki put kada se logiramo/odlogiramo
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }
        setLoading(false);
      });
    }

    //return je "cleanup" koji se dogodi poslije useEffecta
    return () => {
        isMounted.current = false;
    }
  }, [isMounted]);

  return { loggedIn, loading };
};
