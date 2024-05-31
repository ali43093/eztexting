import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const LinkButton = (props: ButtonProps) => {
  return (
    <Button
      disabled={props.disabled}
      className="p-0 text-[#017dbc] hover:no-underline hover:text-[#005888] text-[17px] h-[24px]"
      variant="link"
    >
      {props.children}
    </Button>
  );
};
export const FilterButton = (props: ButtonProps) => {
  return (
    <Button
      disabled={props.disabled}
      className="mx-4 my-2 h-12 hover:text-[#017dbc] hover:no-underline text-[#5a7088] text-[17px] hover:border-[#d4d4d4] border border-white"
      variant="link"
    >
      <SlidersHorizontal className="mr-2 h-4"/> {props.children}
    </Button>
  );
};

export const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button
      disabled={props.disabled}
      className={`px-4 py-6 rounded-[2rem] ${
        props?.disabled ? "bg-[#dbe1e5] text-[#85898c] font-semibold" : "primaryButtonBG text-white"
      }  hover:no-underline text-base hover:opacity-90 ${props.className}`}
      variant="link"
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export const SecondaryButton = (props: ButtonProps) => {
  return (
    <Button
      disabled={props.disabled}
      onClick={props.onClick}
      className="px-4 py-6 rounded-[2rem] bg-white text-[#017dbc] hover:no-underline text-base hover:bg-slate-50 border border-solid border-[#017dbc]"
      variant="link"
    >
      {props.children}
    </Button>
  );
};
export const DangerButton = (props: ButtonProps) => {
  return (
    <Button
      disabled={props.disabled}
      className={`px-4 py-6 rounded-[2rem] hover:no-underline text-base bg-[#f44336] ${props.className}`}
      variant="destructive"
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export const TextButton = (props: ButtonProps) => {
  return (
    <Button
      disabled={props.disabled}
      onClick={props.onClick}
      className="py-6 px-0 bg-white text-[#017dbc] hover:no-underline text-sm"
      variant="link"
    >
      {props.children}
    </Button>
  );
};
export const IconButton = (props: ButtonProps) => {
  return (
    <Button
      onClick={props.onClick}
      disabled={props.disabled}
      className="bg-white hover:no-underline p-0 m-0 rounded-full hover:bg-white h-auto"
      variant="default"
    >
      {props.children}
    </Button>
  );
};
export const CustomLink = (props: ButtonProps) => {
  return (
    <Button
      disabled={props.disabled}
      className="hover:no-underline p-0 m-0 hover:bg-white h-auto hover:text-[#017dbc] text-[#555] text-xs"
      variant="link"
    >
      {props.children}
    </Button>
  );
};

export const BlueLink = (props: ButtonProps) => {
  return (
    <Button
      disabled={props.disabled}
      className={`hover:no-underline p-2 m-0 hover:text-[#0069a1] h-auto hover:bg-white text-[#008AD4] text-base font-normal ${props.className}`}
      variant="link"
    >
      {props.children}
    </Button>
  );
};
