import { TraitInterface } from "../../interfaces/trait.interface";
export declare class Trait {
    private editor;
    constructor({ editor }: {
        editor: any;
    });
    addTrait(traitProp: TraitInterface): void;
    initTraits(): void;
}
