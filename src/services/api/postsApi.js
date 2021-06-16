import axios from "axios";
import { query, apiRoute } from "../../config";

export const loadPosts = () =>
  axios.get(
    `${apiRoute}?show-fields=${query["show-fields"]}&show-tags=${query["show-tags"]}&q=${query.q}&api-key=${query["api-key"]}`
  );

// export const loadPosts = () =>
//   axios.get(
//     "https://content.guardianapis.com/search?q=trending&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c"
//   );
