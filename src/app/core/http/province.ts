import { District } from "./district";

export interface Province {
    id: String;
    name: String;
    type: String;
    districts: District[];
}
