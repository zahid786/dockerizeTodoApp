import {App} from "./app";
const PORT = process.env.PORT || 8208;

App.listen(PORT, () => {
  console.log("Express running on port " + PORT);
});
