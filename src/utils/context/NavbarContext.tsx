import { createContext } from "react";

type NavbarContextType = {
    show?:boolean;
    updateNavbar:(show:boolean)=>void;
};

export const NavbarContext = createContext<NavbarContextType>({
    updateNavbar:()=>{},
});