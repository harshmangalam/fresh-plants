/** @jsx h */

import { useContext } from "preact/hooks";
import { createContext } from "preact";

export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);
