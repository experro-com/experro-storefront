import React from "react";
import { TraitInterface } from "../../interfaces/trait.interface";
export declare class Trait {
    private editor;
    private customTraits;
    constructor({ editor, customTraits }: {
        editor: any;
        customTraits?: Record<string, React.ComponentType<any>>;
    });
    addTrait(traitProp: TraitInterface): void;
    registerCustomTrait(name: string, component: React.ComponentType<any>): void;
    initTraits(): void;
}
