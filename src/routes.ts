import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import TopicPage from "./pages/TopicPage";
import AIMentorPage from "./pages/AIMentorPage";
import LearnPage from "./pages/LearnPage";
import MCQsPage from "./pages/MCQPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Contact } from "lucide-react";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import ShippingPolicy from "./pages/ShippingPolicy";

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
    path: "/privacy",
    Component: PrivacyPolicy,
  },
  {
    path: "/contact",
    Component: ContactUs,
  },
  {
    path: "/TC",
    Component: TermsAndConditions,
  },
  {
    path: "/shipping",
    Component: ShippingPolicy,
  },
  {
    path: "*",
    Component: Dashboard,
  },
]);