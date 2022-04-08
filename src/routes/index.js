import { Switch, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageLogReg from "../pages/PageLogReg";
import PagePesquisa from "../pages/PagePesquisa";
import PageProfileComp from "../pages/PageProfileCompany";
import PageProfileUsers from "../pages/PageProfileUsers";
import Error404 from "../pages/Error";
import { User } from "../providers/UserProvider";
import PageHomeDev from "../components/HomeDev";
import AlteraHead from '../components/AlterHead';

const Routes = () => {
  const { loggedUser } = User();
  return (
    <Switch>
      <Route exact path="/">
        <PageLogReg />
      </Route>
      {loggedUser.type === "pf" ? (

        <Route exact path="/home">
          <AlteraHead/>
          <PageHomeDev/>
        </Route>
          
          ) : (
            <Route exact path="/home">
              
              <PageHome />
            </Route>
        )}
      
      <Route exact path="/users/comp">
        <PageProfileComp />
      </Route>
      <Route exact path="/users/dev">
        <PageProfileUsers />
      </Route>
      <Route exact path="/pesquisa">
        <PagePesquisa /> 
      </Route>
      
      <Route>
        <Error404/>
      </Route>
    </Switch>
  );
};
 
export default Routes;
