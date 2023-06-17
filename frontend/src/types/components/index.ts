import { StaticImageData } from "next/image"

export interface IHeadingProps {
    title:string
}

export interface IButtonProps {
    title:string,
    type:string
}

export interface IAccordionProps {
    active:boolean,
    question:string,
    answer:string
}

export interface ICardProps {
    type:string,
    icon?:any,
    item?:string,
    contact?:string,
    rentalImg?:string | StaticImageData,
    rentalName?:string,
    rentalPrice?:string,
    rentalUrl?:string,
    rentalStatus?:string
}
