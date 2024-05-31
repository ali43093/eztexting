import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

export const CustomInput = ({
  value,
  name,
  error,
  placeholder,
  handleChange,
}: {
  value?: string;
  name: string;
  error?: string;
  placeholder?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col w-full gap-y-1">
      {error ? <h4 className="text-xs text-[#DB2828]">{error}</h4> : null}
      <Input name={name} placeholder={placeholder} value={value} onChange={handleChange} className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[3px] text-base h-[42px]" />
    </div>
  );
};

export const CustomTextArea = ({
  value,
  name,
  error,
  placeholder,
  handleChange,
}: {
  value?: string;
  name: string;
  error?: string;
  placeholder?: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="flex flex-col w-full gap-y-1">
      {error ? <p className="text-xs text-[#DB2828]">{error}</p> : null}
      <Textarea name={name} placeholder={placeholder} value={value} onChange={handleChange} className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[3px] text-sm h-32" />
    </div>
  );
};
