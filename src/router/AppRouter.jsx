import { createBrowserRouter } from "react-router-dom";

import { DcPage, MarvelPage, SearchPage, HeroPage } from "../heroes";
import { HeroesApp } from "../HeroesApp";
import { LoginPage } from "../auth";
import {ErrorPage} from "../ui/components/ErrorPage";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesApp />,
    children: [
      { path: "dc", element: <DcPage /> },
      { path: "marvel", element: <MarvelPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "hero/:id", element: <HeroPage /> },
    ],
    errorElement: <ErrorPage/>
  },
  { path: "login", element: <LoginPage />, errorElement: <ErrorPage/> },
]);
