import FocusedTeamPage from "./screens/FocusedTeamPage";
import TeamsListPage from "./screens/TeamsListPage";

import { Navigate, Route } from "react-router-dom";

const routes = () => [
  <Route key={"/"} path={"/" || "/teams"} exact element={<TeamsListPage />} />,
  <Route
    path="/teams/:id"
    key={"/teams/:id"}
    exact
    element={<FocusedTeamPage></FocusedTeamPage>}
  />,
  <Route key={"/*"} path="/*" element={<Navigate to={"/"}></Navigate>} />,
];

export default routes;
