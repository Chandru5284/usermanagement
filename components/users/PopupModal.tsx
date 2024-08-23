import React from 'react'

// import components
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

const PopupModal = ({ open, setOpen, children, title, description }: any) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-screen-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default PopupModal
