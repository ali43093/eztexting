import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { DangerButton, TextButton } from "../Buttons";

export const CustomDialog = ({ open, handleClose, title, children }: { open: boolean; handleClose: () => void; title: string; children: React.ReactNode }) => {
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="p-0 m-0 gap-0 max-w-[600px] md:w-full w-[95%]">
        <DialogHeader className="px-6 py-5 bg-[#f3f5f9]">
          <div className="flex flex-row justify-between w-full">
            <h2 className="font-semibold text-[#3D3E40]">{title}</h2>
          </div>
        </DialogHeader>
        <DialogDescription className="p-6 m-0">{children}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export const DeleteDialog = ({ open, handleClose, title, onConfirm, description }: { open: boolean; handleClose: () => void; title: string; description: string; onConfirm: () => void }) => {
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="p-0 m-0 gap-0 max-w-[500px] md:w-full w-[95%]">
        <DialogHeader className="px-6 py-5 bg-[#f3f5f9]">
          <div className="flex flex-row justify-between w-full">
            <h2 className="font-semibold text-[#3D3E40]">{title}</h2>
          </div>
        </DialogHeader>
        <DialogDescription className="p-6 m-0">
          <div>
            <h3 className="text-[#222222] mb-2 text-base font-normal">{description}</h3>
            <div className="flex flex-row justify-end mt-4 gap-x-4">
              <TextButton onClick={handleClose}>CANCEL</TextButton>
              <DangerButton onClick={() => onConfirm()} className="text-sm font-semibold">
                SUBMIT
              </DangerButton>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
