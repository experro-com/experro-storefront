export declare class Cookie {
    static get(name: string): string;
    static delete(name: string): void;
    static set({ name, value, expirationTime, }: {
        name: string;
        value: string;
        expirationTime?: Date;
    }): void;
}
