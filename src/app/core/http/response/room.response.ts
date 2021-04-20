import { Category } from "../category";
import { District } from "../district";

export interface RoomResponse {
    id: Number,
    title: String,
    description: String,
    price: Number,
    area: Number,
    countView: Number,
    address: String,
    latlng: String,
    userName: String,
    category: Category,
    district: District,
    utilities: String,
}
