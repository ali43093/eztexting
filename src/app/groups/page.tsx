"use client";
import React, { ChangeEvent, useEffect, useState } from "react";

import { DataTable } from "@/components/Tables";
import useForm from "@/components/CustomHooks/useForm";
import { CustomInput, CustomTextArea } from "@/components/InputField";
import { ContactGroup, contactGroups, useWindowDimensions } from "@/lib/helper";
import { PrimaryButton, SecondaryButton, TextButton } from "@/components/Buttons";
import { CustomDialog, DeleteDialog } from "@/components/CustomDialog";
import { createColumns } from "@/components/Tables/ContactGroups/columns";

type CreateGroupData = {
  id?: number;
  groupName?: string;
  groupNameError?: string;
  groupDescription?: string;
};

const ContactGroups = () => {
  const { innerWidth } = useWindowDimensions();
  const { form, handleChange, setForm } = useForm<CreateGroupData>({});
  const [groups, setGroups] = useState<ContactGroup[]>(contactGroups);
  const [openAddGroupDialog, setOpenAddGroupDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});

  const handleEdit = (row: ContactGroup) => {
    setForm({ id: row?.id, groupName: row.name, groupDescription: row?.description });
    setOpenAddGroupDialog(true);
  };

  const columns = createColumns(handleEdit);
  const validate = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setForm({
        ...form,
        groupNameError: "This field is required",
        groupName: "",
      });
    } else {
      setForm({ ...form, groupNameError: "", groupName: e.target.value });
    }
  };

  const handleAddGroup = () => {
    console.log("I am triggered");
    if (form?.groupName === "" || !form?.groupName) {
      setForm({ ...form, groupNameError: "This field is required" });
    } else {
      const newGroup = {
        id: groups?.length ? groups[groups.length - 1]?.id + 1 : 1,
        name: form.groupName,
        description: form?.groupDescription || "",
        contacts: 0,
      };
      setGroups([...groups, newGroup]);
      setOpenAddGroupDialog(false);
      setForm({});
    }
  };

  const deleteGroups = () => {
    const idsToDelete = Object.keys(rowSelection).map(Number);
    const newGroups = groups.filter((_, index) => !idsToDelete.includes(index));
    setGroups(newGroups);
    setRowSelection({});
    setOpenDeleteDialog(false);
  };

  const handleSaveGroup = () => {
    const index = groups.findIndex((item) => item.id === form?.id);

    const newData = [...groups];
    newData[index] = { ...newData[index], name: form?.groupName ?? "", description: form?.groupDescription ?? "" };

    setGroups(newData);
    setOpenAddGroupDialog(false)
  };

  return (
    <section
      style={{ width: innerWidth > 1024 ? "calc(100% - 363px)" : "100%" }}
      className="flex flex-col items-center lg:translate-x-[363px]"
    >
      <div className="flex flex-col w-full md:pt-24 pt-20 md:p-8 p-4 box-border">
        <div className="flex flex-row w-full justify-between mb-4">
          <h1 className="text-[32px] text-[#18191A] font-semibold">Contacts</h1>
          <div className="flex flex-row justify-end gap-x-2">
            <SecondaryButton onClick={() => setOpenAddGroupDialog(true)}>CREATE GROUP</SecondaryButton>
            <PrimaryButton>ADD CONTACTS</PrimaryButton>
          </div>
        </div>
        <p>
          Contact groups are segments of your opted-in contacts. Use groups to target specific customers, sales leads
          and more.
        </p>
        {Object.keys(rowSelection).length > 0 ? (
          <div className="flex flex-row w-full justify-start gap-2 mt-4">
            <SecondaryButton>MERGE</SecondaryButton>
            <SecondaryButton>CLONE</SecondaryButton>
            <SecondaryButton onClick={() => setOpenDeleteDialog(true)}>DELETE</SecondaryButton>
          </div>
        ) : null}
        <div className="mt-4 border-b">
          <DataTable columns={columns} data={groups} rowSelection={rowSelection} setRowSelection={setRowSelection} />
        </div>
      </div>
      <CustomDialog
        open={openAddGroupDialog}
        handleClose={() => {
          setOpenAddGroupDialog(false);
          setForm({});
        }}
        title={form?.id !== undefined ? "Edit Group" : "Create Group"}
      >
        <div>
          <h3 className="text-[#222222] font-semibold mb-2">Group Name</h3>
          <CustomInput
            error={form?.groupNameError}
            handleChange={validate}
            value={form?.groupName}
            name="groupName"
            placeholder="Create a name for this group"
          />
          <h3 className="text-[#222222] font-semibold mt-4 mb-2">Description</h3>
          <CustomTextArea
            handleChange={handleChange}
            value={form?.groupDescription}
            name="groupDescription"
            placeholder="Include any important details about your new group"
          />
          <div className="flex flex-row justify-end mt-4 gap-x-4">
            <TextButton onClick={() => setOpenAddGroupDialog(false)}>CANCEL</TextButton>
            <PrimaryButton
              onClick={form?.id !== undefined ? handleSaveGroup : handleAddGroup}
              className="text-sm"
              disabled={!form?.groupName}
            >
              {form?.id !== undefined ? "SAVE THIS GROUP" : "CREATE GROUP"}
            </PrimaryButton>
          </div>
        </div>
      </CustomDialog>

      <DeleteDialog
        open={openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        description="Are you sure you want to delete selected groups?"
        title="Delete groups"
        onConfirm={deleteGroups}
      />
    </section>
  );
};

export default ContactGroups;
