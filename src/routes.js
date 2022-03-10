import FocusedTeamPage from "./components/FocusedTeamPage";
import Container from "./components/styles/Container.styled";
import TeamsListPage from "./components/TeamsListPage";

import { Navigate, Route } from "react-router-dom";

const routes = () => [
  <Route path={"/" || "/teams"} exact element={<TeamsListPage />} />,
  <Route
    path="/teams/:id"
    exact
    element={<FocusedTeamPage></FocusedTeamPage>}
  />,
  <Route path="/*" element={<Navigate to={"/"}></Navigate>} />,
];

export default routes;
