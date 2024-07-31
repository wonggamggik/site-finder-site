import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const fetchSitesData = async () => {
  const categories = {};
  try {
    const querySnapshot = await getDocs(collection(db, "categories"));
    // console.log("Fetched categories:", querySnapshot.docs);

    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      // console.log(`Category ${doc.id} data:`, data);

      const sitesSnapshot = await getDocs(
        collection(db, "categories", doc.id, "sites")
      );
      const sites = sitesSnapshot.docs.map((siteDoc) => siteDoc.data());
      // console.log(`Sites in category ${doc.id}:`, sites);

      categories[doc.id] = {
        ...data,
        sites,
      };
    }
  } catch (error) {
    // console.error("Error fetching data from Firestore:", error);
  }

  return categories;
};
