import { Button } from "@/components/ui/button";

interface LinkButtonProps {
  children: React.ReactNode;
}

export const LinkButton = (props: LinkButtonProps) => {
  return <Button className="p-0 text-[#017dbc] hover:no-underline hover:text-[#005888] text-[17px] h-[24px]" variant="link">{props.children}</Button>;
};
