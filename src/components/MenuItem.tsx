import React from 'react';
import Link from "next/link";

interface MenuItemProps {
    title: string
    address: string
    icon: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <div>
            <Link
                href={props.address}
                className={`
                    mx-4 lg:mx-6 hover:text-amber-600
                `}>
                <div className={`
                   text-2xl sm:hidden mx-4  
                `}>{props.icon}
                </div>
                <p className={`
                   hidden sm:inline my-2 text-sm
                `}>{props.title}
                </p>
            </Link>
        </div>
    );
}
 