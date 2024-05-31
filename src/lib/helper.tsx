"use client";
import { ReactNode, useEffect, useState } from "react";
import { Home, MessageSquareText, Flag, UsersRound, LineChart, Send, FilePenLine } from "lucide-react";
import { IconButton } from "@/components/Buttons";

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

export const customFieldOptions: { value: number; label: string }[] = [
  { value: 1, label: "Text" },
  { value: 2, label: "Date" },
  { value: 3, label: "DateTime" },
  { value: 4, label: "Time" },
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
  { id: 4, title: "Contacts", icon: <UsersRound size={18} />, url: "/groups" },
  { id: 5, title: "Reporting", icon: <LineChart size={18} />, url: "/" },
];

export const secondSidebarOptions = {
  contacts: {
    title: "Manage",
    items: [
      {
        title: "Contact Groups",
        url: "/groups",
      },
      {
        title: "All Contacts",
        url: "/contacts",
      },
      {
        title: "Contact Fields",
        url: "/custom-contact-fields",
      },
    ],
  },
};

export type ContactGroup = {
  id: number;
  name: string;
  contacts: number;
  description: string;
};

export const contactGroups: ContactGroup[] = [
  {
    id: 1,
    name: "Join",
    contacts: 1,
    description: "Anything here",
  },
  {
    id: 2,
    name: "Keyword",
    contacts: 23,
    description: "Anything heresdfsdf",
  },
  {
    id: 3,
    name: "My First List",
    contacts: 1234,
    description: "Anything herexcvdvdfv",
  },
  {
    id: 4,
    name: "Sign-Ups",
    contacts: 345,
    description: "Anything asfasdfasd",
  },
  {
    id: 5,
    name: "Test Group",
    contacts: 1234,
    description: "sdgdfg here",
  },
];

export type Contact = {
  id: number;
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
  groups: string[];
  source: string;
  addedDate: Date
};

export const contacts: Contact[] = [
  {
    id: 1,
    phone: "(203) 123-4567",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    groups: ["friends", "work"],
    source: "Manually Added",
    addedDate: new Date('2023-01-15')
  },
  {
    id: 2,
    phone: "(203) 234-5678",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    groups: ["family"],
    source: "Manually Added",
    addedDate: new Date('2023-02-20')
  },
  {
    id: 3,
    phone: "(203) 345-6789",
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    groups: ["gym", "friends"],
    source: "Manually Added",
    addedDate: new Date('2023-03-10')
  },
  {
    id: 4,
    phone: "(203) 456-7890",
    firstName: "Bob",
    lastName: "Brown",
    email: "bob.brown@example.com",
    groups: ["work"],
    source: "Manually Added",
    addedDate: new Date('2023-04-25')
  },
  {
    id: 5,
    phone: "(203) 567-8901",
    firstName: "Charlie",
    lastName: "Davis",
    email: "charlie.davis@example.com",
    groups: ["family", "neighbors"],
    source: "Manually Added",
    addedDate: new Date('2023-05-05')
  }
];

export function useWindowDimensions() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{
    innerWidth: number;
    innerHeight: number;
  }>({
    innerWidth: 0,
    innerHeight: 0,
  });

  /* eslint-disable consistent-return */
  useEffect((): any => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      const handleResize = () => {
        // Set window width/height to state
        setWindowSize({
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      };

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
