import { Layout } from "antd";
import React from "react";

import CreateForm from "./components/CreateForm";
import UserTable from "./components/UserTable";

function App() {
  return (
    <Layout>
      <Layout>
        <div className="container-full">
          <CreateForm />
          <UserTable />
        </div>
      </Layout>
    </Layout>
  );
}

export default App;
