"use client";
import React from "react";

import { customFieldOptions, useWindowDimensions } from "@/lib/helper";
import { CustomInput } from "@/components/InputField";
import useForm from "@/components/CustomHooks/useForm";
import { BoxSelect } from "@/components/CustomSelect";
import { BlueLink, PrimaryButton, SecondaryButton } from "@/components/Buttons";

type FormFieldsData = {
  field1?: string;
  field2?: string;
  field3?: string;
  field4?: string;
  field5?: string;
  field1Type?: number;
  field2Type?: number;
  field3Type?: number;
  field4Type?: number;
  field5Type?: number;
};

const CustomContactFields = () => {
  const { innerWidth } = useWindowDimensions();
  const { form, handleChange, updateValue } = useForm<FormFieldsData>({});

  return (
    <section
      style={{ width: innerWidth > 1024 ? "calc(100% - 363px)" : "100%" }}
      className="flex flex-col items-center lg:translate-x-[363px]"
    >
      <div className="flex flex-col w-full max-w-[1068px] md:pt-24 pt-20 md:p-8 p-4 box-border">
        <p className="text-[#18191A] text-sm font-normal mb-4">
          EZ Texting offers you the ability to create up to 5 custom fields to store more information for your contacts
          beyond their simple contact information. You can label each custom field as desired, and then use those fields
          when sending out messages to your groups.
        </p>
        <p className="text-[#18191A] text-sm font-normal mb-4">
          *Note: The data contained in each field is limited to 20 characters. If you wish to remove a field, simply
          leave it blank. Additionally, If you currently have a campaign scheduled or running, we recommend not editing
          any custom contact fields that may be used in those campaigns.
        </p>
        <div className="flex flex-col gap-y-4 w-full max-w-[840px]">
          <div>
            <h3 className="text-sm text-[#616161] mb-1">Custom Contact Field Name #1</h3>
            <div className="flex flex-row w-full gap-1 justify-evenly">
              <CustomInput handleChange={handleChange} name="field1" value={form?.field1} />
              <BoxSelect
                value={form?.field1Type ?? 1}
                options={customFieldOptions}
                onChange={(val) => updateValue("field1Type", val)}
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm text-[#616161] mb-1">Custom Contact Field Name #2</h3>
            <div className="flex flex-row w-full gap-1 justify-evenly">
              <CustomInput handleChange={handleChange} name="field2" value={form?.field2} />
              <BoxSelect
                value={form?.field2Type ?? 1}
                options={customFieldOptions}
                onChange={(val) => updateValue("field2Type", val)}
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm text-[#616161] mb-1">Custom Contact Field Name #3</h3>
            <div className="flex flex-row w-full gap-1 justify-evenly">
              <CustomInput handleChange={handleChange} name="field3" value={form?.field3} />
              <BoxSelect
                value={form?.field3Type ?? 1}
                options={customFieldOptions}
                onChange={(val) => updateValue("field3Type", val)}
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm text-[#616161] mb-1">Custom Contact Field Name #4</h3>
            <div className="flex flex-row w-full gap-1 justify-evenly">
              <CustomInput handleChange={handleChange} name="field4" value={form?.field4} />
              <BoxSelect
                value={form?.field4Type ?? 1}
                options={customFieldOptions}
                onChange={(val) => updateValue("field4Type", val)}
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm text-[#616161] mb-1">Custom Contact Field Name #5</h3>
            <div className="flex flex-row w-full gap-1 justify-evenly">
              <CustomInput handleChange={handleChange} name="field5" value={form?.field5} />
              <BoxSelect
                value={form?.field5Type ?? 1}
                options={customFieldOptions}
                onChange={(val) => updateValue("field5Type", val)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full max-w-[840px] justify-between my-8">
          <BlueLink>CANCEL</BlueLink>
          <PrimaryButton>SAVE</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default CustomContactFields;
