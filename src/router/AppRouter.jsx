import { createBrowserRouter } from "react-router-dom";

import { DcPage, MarvelPage, SearchPage, HeroPage } from "../heroes";
import { HeroesApp } from "../HeroesApp";
import { LoginPage } from "../auth";
import { NotFound } from "../ui";

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
  },
  { path: "login", element: <LoginPage /> },
  { path: "/*", element: <NotFound /> },
]);
