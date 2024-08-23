import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

// import components
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { AlertModal } from "../AlertModal";
import { Dropdown } from "./DropDown";

// import redux store
import { RootState } from "@/redux";
import { deleteUser, getUserData, setEditingUser } from "@/redux/features/users-slice";
import { User } from "@/types/user";

export function UserTable({ setFormOpen, setUserViewOpen }: any) {

    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.user.users);

    const [loading, setLoading] = useState(false);
    const [openAlertModal, setOpenAlertModal] = useState(false);
    const [fetchId, setSetFetchId] = useState(0);

    const handleDelete = () => {
        dispatch(deleteUser(fetchId));
        setOpenAlertModal(false)
    };

    const handleEdit = (user: User) => {
        dispatch(setEditingUser(user));
    };

    const handleExpand = (user: User) => {
        dispatch(getUserData(user));
    };


    return (
        <>

            {users.length > 0 && (
                <Table>
                    <TableCaption>A list of your user records.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Linkedin URL</TableHead>
                            <TableHead className="">Gender</TableHead>
                            <TableHead className="">Address</TableHead>
                            <TableHead className="">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell className="">{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.linkedinURL}</TableCell>
                                <TableCell>{row.gender}</TableCell>
                                <TableCell className="">{row.address.line1}, {row.address.line2}</TableCell>
                                <TableCell className="">
                                    <Dropdown
                                        setFormOpen={setFormOpen}
                                        setUserViewOpen={setUserViewOpen}
                                        setOpenAlertModal={setOpenAlertModal}
                                        setSetFetchId={() => setSetFetchId(row.id)}
                                        onClickEdit={() => handleEdit(row)}
                                        onClickExpand={() => handleExpand(row)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            )}

            {users.length <= 0 && (
                <div className="h-[80%] flex items-center">
                    <div
                        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm h-[70%] border-muted-foreground px-5"
                    >
                        <div className="flex flex-col items-center gap-1 text-center">
                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                                You have no user records
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                You can start creating your user records by clicking add users button.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <AlertModal
                isOpen={openAlertModal}
                onClose={() => setOpenAlertModal(false)}
                onConfirm={handleDelete}
                loading={loading}
            />
        </>
    )
}
