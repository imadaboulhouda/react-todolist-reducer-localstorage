import React, { lazy, Suspense } from "react";
import TaskList from "../components/Task/TaskList";
import Forma from "../components/Form";
const Header = lazy(() => import("../components/Header/Header"));

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Suspense fallback={""}>
        <Header />
      </Suspense>
      <TaskList />
      <Forma />
    </React.Fragment>
  );
};

export default Home;
