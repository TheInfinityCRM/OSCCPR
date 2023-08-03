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
    answer:any
}

export interface ICardProps {
    type:string,
    icon?:any,
    item?:string,
    contact?:string,
    rentalImg?:string | StaticImageData,
    rentalName?:string,
    rentalPrice?:string,
    rentalStatus?:number,
    openModal?: any,
    eventName?:string,
    eventImg?:string | StaticImageData,
    review?:string,
    rating?:any,
    reviewImg?:string | StaticImageData
}
