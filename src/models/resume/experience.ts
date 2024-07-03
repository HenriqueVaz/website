export interface Experience {
    positions: string[];
    at: string;
    logo?: string;
    start: Date;
    end?: Date;
    description: string;
    type: "academic" | "professional";
}
