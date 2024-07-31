import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const fetchSitesData = async () => {
  const categories = {};
  const querySnapshot = await getDocs(collection(db, "categories"));

  for (const doc of querySnapshot.docs) {
    const data = doc.data();
    const sitesSnapshot = await getDocs(
      collection(db, "categories", doc.id, "sites")
    );
    const sites = sitesSnapshot.docs.map((siteDoc) => siteDoc.data());

    categories[doc.id] = {
      ...data,
      sites,
    };
  }

  return categories;
};
