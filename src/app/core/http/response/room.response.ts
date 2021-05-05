import { Category } from "../category";
import { District } from "../district";
import { RoomImage } from "./room-image";

export interface RoomResponse {
    id: Number,
    title: String,
    description: String,
    price: Number,
    depositAmount: Number,
    roomType: String,
    numOfBedrooms: Number,
    numOfToilets: Number,
    doorDirection: String,
    balconyDirection: String,
    area: Number,
    countView: Number,
    address: String,
    latlng: String,
    userName: String,
    category: Category,
    district: District,
    utilities: String,
    images: RoomImage[],
}
