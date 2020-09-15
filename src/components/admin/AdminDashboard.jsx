import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import createAdminStore from "../../reducers/createAdminStore";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const authProvider = () => Promise.resolve();
const history = createHashHistory();

function AdminDashboard() {
  return (
    <Provider
      store={createAdminStore({
        authProvider,
        dataProvider,
        history,
      })}
    >
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        history={history}
        title="My Admin"
      >
        <Resource name="users" list={ListGuesser} />
      </Admin>
    </Provider>
  );
}

export default AdminDashboard;
