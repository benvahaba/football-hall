import FocusedTeamPage from "./components/FocusedTeamPage";
import TeamsListPage from "./components/TeamsListPage";

import { matchRoutes, Navigate, Route } from "react-router-dom";

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
