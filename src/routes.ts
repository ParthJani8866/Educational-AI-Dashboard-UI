import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import TopicPage from "./pages/TopicPage";
import AIMentorPage from "./pages/AIMentorPage";
import LearnPage from "./pages/LearnPage";
import MCQsPage from "./pages/MCQPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/topic",
    Component: TopicPage,
  },
  {
    path: "/ai-mentor",
    Component: AIMentorPage,
  },
  {
    path: "/learn",
    Component: LearnPage,
  },
    {
    path: "/mcqs",
    Component: MCQsPage,
  },
  {
    path: "*",
    Component: Dashboard,
  },
]);