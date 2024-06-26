import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectProps {
  className?: string;
  itemClassName?: string;
  value?: number;
  onChange?: (value: number) => void;
  options: {
    value: number;
    label: string;
  }[];
}

export const CustomSelect = (props: SelectProps) => {
  const { value, onChange, options, className, itemClassName } = props;
  return (
    <Select value={String(value)} onValueChange={(val) => onChange && onChange(Number(val))}>
      <SelectTrigger className='py-2 pr-3 w-[180px] text-[17px] font-semibold text-left '>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem className='p-4 focus:bg-[#017dbc] focus:text-white' onChange={() => onChange && onChange(option.value)} key={option.value} value={String(option.value)}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export const BoxSelect = (props: SelectProps) => {
  const { value, onChange, options, className, itemClassName } = props;
  return (
    <Select value={String(value)} onValueChange={(val) => onChange && onChange(Number(val))}>
      <SelectTrigger className='py-2 px-3 text-sm text-left border rounded-[3px] h-[42px] text-[#5b5b5b]'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem className='px-1 focus:bg-[#017dbc] focus:text-white' onChange={() => onChange && onChange(option.value)} key={option.value} value={String(option.value)}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
