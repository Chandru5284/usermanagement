import React, { use, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import components
import { UserTable } from "@/components/users/UserTable";
import { Button } from "@/components/ui/button"
import { UserForm } from "@/components/users/UserForm";
import PopupModal from "@/components/users/PopupModal";
import UserView from "@/components/users/UserView";
import {
	Card,
	CardHeader,
} from "@/components/ui/card"

// import redux hooks
import { clearEditingUser, resetErrors } from "@/redux/features/users-slice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";

export default function Home() {

	const dispatch = useDispatch();
	const editingUser = useSelector((state: RootState) => state.user.editingUser);

	const [formOpen, setFormOpen] = useState(false);
	const [userViewOpen, setUserViewOpen] = useState(false);

	useEffect(() => {
		if (!formOpen) {
			dispatch(resetErrors());
			dispatch(clearEditingUser());
		}
	}, [formOpen])

	return (
		<>

			<div className="h-screen">
				<Card className="container mx-auto h-full">
					<CardHeader>
						<div className="flex justify-between items-center ">
							<h1 className="text-3xl font-bold">User Table</h1>
							<Button onClick={() => setFormOpen(true)}>Add Users</Button>
						</div>
					</CardHeader>
					<UserTable setFormOpen={setFormOpen} setUserViewOpen={setUserViewOpen} />
				</Card>
			</div>


			<PopupModal
				open={formOpen} setOpen={setFormOpen}
				title={!editingUser ? "Add Users" : "Edit Users"}
				description={!editingUser ? "Create new user records." : "Update existing user information"}
			>
				<UserForm />
			</PopupModal>

			<PopupModal
				open={userViewOpen} setOpen={setUserViewOpen}
				title={"User Information"}
				description={"Display user record details."}
			>
				<UserView />
			</PopupModal>

		</>
	);
}
