
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "./about/About";
import "./app.css"

import Ho from "./home/Ho";


import Mission from "./mission/Mission";
import Pages from "./pages/Pages";
import Sign from "./sign/Sign";
import Support from "./support/Support";

function App() {
  return (
   <>
   <Switch>
   <Route exact path="/" component={Ho}/>
   <Route exact path="/about" component={About}/>
   <Route exact path="/mission" component={Mission}/>
   <Route exact path="/pages" component={Pages}/>
   <Route exact path="/support" component={Support}/>
   <Route exact path="/signin" component={Sign}/>
   </Switch>
   
   </>
  );
}

export default App;
