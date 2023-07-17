import { SetStateAction } from "react";
import { ContentLibraryTraitDataInterface } from "../interfaces/content-library.interace";
export declare const handelEditDataOfContentLibraryFromUiBuilder: (traitData: ContentLibraryTraitDataInterface, setTraitData: {
    (value: SetStateAction<ContentLibraryTraitDataInterface>): void;
    (arg0: any): void;
}, event: string) => void;
