import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "../firebase.config";

// get all items
export const getAllItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "shirts"), orderBy("price"))
  );
  return items.docs.map((doc) => doc.data());
};
