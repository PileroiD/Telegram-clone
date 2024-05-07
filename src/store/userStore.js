import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../lib/firebase";

export const useUserStore = create((set) => ({
    currentUser: null,
    isLoading: true,
    fetchUserInfo: async (uid) => {
        if (!uid) return set({ currentUser: null, isLoading: false });

        try {
            const docRef = doc(db, "users", uid);
            const user = await getDoc(docRef);

            if (user.exists()) {
                set({ currentUser: user.data(), isLoading: false });
            } else {
                set({ currentUser: null, isLoading: false });
            }
        } catch (error) {
            console.log("error :>> ", error);
            return set({ currentUser: null, isLoading: false });
        }
    },
}));
