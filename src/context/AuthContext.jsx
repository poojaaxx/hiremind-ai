import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // SIGNUP
  const signup = async ({
    name,
    email,
    password,
  }) => {
    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    await updateProfile(
      userCredential.user,
      {
        displayName: name,
      }
    );

    // CREATE USER OBJECT
    const newUser = {
      name,
      email,
      uid: userCredential.user.uid,
      role: "AI Engineer",
      location: "India",
      bio: "Passionate AI developer.",
      github: "github.com/",
      linkedin: "linkedin.com/",
    };

    // SAVE TO STATE
    setUser(newUser);

    // SAVE TO LOCAL STORAGE
    localStorage.setItem(
      "user",
      JSON.stringify(newUser)
    );
  };

  // LOGIN
  const login = async (
    email,
    password
  ) => {
    const userCredential =
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    // CHECK LOCAL STORAGE
    const storedUser =
      JSON.parse(
        localStorage.getItem("user")
      );

    if (
      storedUser &&
      storedUser.email === email
    ) {
      setUser(storedUser);
    } else {
      const loggedUser = {
        name:
          userCredential.user.displayName ||
          "User",
        email:
          userCredential.user.email,
        uid:
          userCredential.user.uid,
        role: "AI Engineer",
        location: "India",
        bio: "Passionate AI developer.",
        github: "github.com/",
        linkedin: "linkedin.com/",
      };

      setUser(loggedUser);

      localStorage.setItem(
        "user",
        JSON.stringify(loggedUser)
      );
    }
  };

  // LOGOUT
  const logout = async () => {
    await signOut(auth);

    setUser(null);
  };

  // UPDATE USER
  const updateUser = (
    updatedData
  ) => {
    const updatedUser = {
      ...user,
      ...updatedData,
    };

    setUser(updatedUser);

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );
  };

  // AUTO LOGIN LISTENER
  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {
          if (currentUser) {
            const storedUser =
              JSON.parse(
                localStorage.getItem(
                  "user"
                )
              );

            if (
              storedUser &&
              storedUser.email ===
                currentUser.email
            ) {
              setUser(storedUser);
            } else {
              const newUser = {
                name:
                  currentUser.displayName ||
                  "User",
                email:
                  currentUser.email,
                uid:
                  currentUser.uid,
                role: "AI Engineer",
                location: "India",
                bio: "Passionate AI developer.",
                github: "github.com/",
                linkedin: "linkedin.com/",
              };

              setUser(newUser);

              localStorage.setItem(
                "user",
                JSON.stringify(newUser)
              );
            }
          } else {
            setUser(null);
          }

          setLoading(false);
        }
      );

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        updateUser,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}