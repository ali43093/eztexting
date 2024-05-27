import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// Create a JSON object with name, phoneCount and email and also its types with dummy data

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
