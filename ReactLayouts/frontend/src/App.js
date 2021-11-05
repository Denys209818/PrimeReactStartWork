import React, {Suspense, useEffect} from "react";
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { START_AUTH } from './constants/reduxConstants';
import { useDispatch } from "react-redux";
import jwt from 'jsonwebtoken';


const DefaultLayout = React.lazy(()=> import("../src/layouts/DefaultLayout/DefaultLayout"));


const App = () => {
  var dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) {
      dispatch({ type: START_AUTH, payload: jwt.decode(localStorage.token)});
    }
  }, []);


  return (
   <>
      <Suspense fallback={<div>Загрузка</div>}>
        <Switch>
          <Route path='/admin' name='Admin' render={(props) => <AdminLayout {...props} />} />
          <Route path='/' name='Default' render={(props) => <DefaultLayout {...props} />} />
        </Switch>
      </Suspense>
   </>
  );
}

export default App;
