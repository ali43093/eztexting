import { ReactNode } from "react";
import { Home, MessageSquareText, Flag, UsersRound, LineChart } from "lucide-react";

export const dashboardData: {
  name: string;
  phoneCount: number;
} = {
  name: "John Doe",
  phoneCount: 23345,
};

export const dashboardFilterOptions: { value: number; label: string }[] = [
  { value: 1, label: "SINCE LAST VISIT" },
  { value: 2, label: "LAST 7 DAYS" },
  { value: 3, label: "LAST 30 DAYS" },
];

export const bannerData: { [key: string]: { title: string; value: number } } = {
  inMsg: { title: "Incoming Messages", value: 123 },
  sentMsg: { title: "Sent Messages", value: 3345 },
  optInContacts: { title: "Contacts Opted-In", value: 4567 },
  optOutContacts: { title: "Contacts Opted-Out", value: 3343 },
};

// Define a type for the sidebar item
interface SidebarItem {
  id: number;
  title: string;
  icon: ReactNode;
  url: string;
}

// Define the sidebar items
export const sidebarItems: SidebarItem[] = [
  { id: 1, title: "Home", icon: <Home size={18} />, url: "/" },
  { id: 2, title: "Inbox", icon: <MessageSquareText size={18} />, url: "/" },
  { id: 3, title: "Campaigns", icon: <Flag size={18} />, url: "/" },
  { id: 4, title: "Contacts", icon: <UsersRound size={18} />, url: "/" },
  { id: 5, title: "Reporting", icon: <LineChart size={18} />, url: "/" },
];
