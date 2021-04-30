import { District } from "./district";

export interface Province {
    code: String;
    name: String;
    type: String;
    districts: District[];
}
