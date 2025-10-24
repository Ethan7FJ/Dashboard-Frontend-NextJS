/* "use client";
import { DrawerMenuBar } from "@/components/ui/drawer";
import { useDisclosure, Button } from "@heroui/react";


import menu from "@/features/dashboard/img/menu.png";
import Image from "next/image";

export function ButtonMenuComponent() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <Button
                onPress={onOpen}
                className="m-3 w-25 h-15 sm:w-10 sm:h-13 sm:absolute top-[6%] left-[2%] sm:top-[2%] sm:left-[1%] text-white"
            >
                <Image src={menu} width={40} height={40} alt="MenuIcon" className="w-30 sm:w-10" />
            </Button>
            <DrawerMenuBar isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    )
} */