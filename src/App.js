import MainIndex from "./container/index";
import Form from "./component/form";
import { BrowserRouter as Router, Switch, Route, Link ,  useParams,useRouteMatch} from "react-router-dom";

function App() {
  console.log('force branch');
console.log('vahid')

  return (
    <>
    <Router>
      <Switch>
        <Route path="/:id">
          <MainIndex />
        </Route>
        <Route path="/">
          <MainIndex />
        </Route>
      </Switch>
      </Router>
      {/* <Form/> */}
    </>
  );
}

export default App;
