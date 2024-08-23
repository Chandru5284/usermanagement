
// import components
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// import icons
import { CiEdit } from "react-icons/ci"
import { MdDeleteOutline } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosExpand } from "react-icons/io";

export function Dropdown({ setSetFetchId, onClickEdit, setFormOpen, setUserViewOpen, onClickExpand, setOpenAlertModal }: any) {

    const onEditClick = () => {
        setFormOpen(true)
        onClickEdit()
    }

    const onUserViewClick = () => {
        setUserViewOpen(true)
        onClickExpand()
    }

    const onHandleDelete = () => {
        setOpenAlertModal(true)
        setSetFetchId()
    }


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className=''>
                    <BsThreeDotsVertical />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44 absolute right-0">
                <DropdownMenuGroup>
                    <DropdownMenuItem className="cursor-pointer" onClick={onEditClick}>
                        <CiEdit className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={onHandleDelete}>
                        <MdDeleteOutline className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={onUserViewClick}>
                        <IoIosExpand className="mr-2 h-4 w-4" />
                        <span>Expand</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
