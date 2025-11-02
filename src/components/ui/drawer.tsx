/* import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
} from "@heroui/react";

import { Dashboard } from "@/features/dashboard/types/dashboard";

export function DrawerMenuBar({ isOpen, onOpenChange }: Dashboard) {
    return (
        <div>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="left">
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">Menu Dashboard</DrawerHeader>
                            <DrawerBody>
                                <p>oda</p>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    )
} */