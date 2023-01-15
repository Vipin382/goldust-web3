import { StringLiteral } from "typescript";

export type PageProps = Partial<{
    height:number;
    background:string;
    backgroundImage:string;
}>

export type ButtonProps = Partial<{
    width:string;
    backgroundColor:string;
    
}>

export type LandingSectionProps = Partial<{
    backgroundImage:string;
}>

export type AchievementMapProps = Partial<{
    backgroundImage:string;
}>;

export type NavbarContainerProps = Partial<{
    size:number;
}>

export type AboutProps = Partial<{
    backgroundImage:string;
}>

export type WorkColumnProps = {
    top:number;
    borderRadius?:number[];
    right?:number|null;
    radius?:string;
    direction?:boolean|null;
}

export type WorkRowProps = Partial<{
    direction:boolean|null;
}>