import { createContext, useContext } from "react";
import { OgsmWithIncludes } from "./state";
import { error } from "console";

export const ogsmContext = createContext<OgsmWithIncludes | undefined>(undefined);

export function useOgsmContext(){
    const ogsm = useContext(ogsmContext);

    if (ogsm === undefined){
        throw new Error("useOgsmContext needs a ogsmContext")
    }

    return ogsm
}