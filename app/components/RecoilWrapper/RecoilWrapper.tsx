'use client'
import type { ReactNode } from "react";
import {RecoilRoot, atom} from "recoil";

interface props {
    children: ReactNode
}


export const  RecoilWrapper = (props: props) => {
    return (
        <RecoilRoot>
            {props.children}
        </RecoilRoot>
    )
}