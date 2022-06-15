import { Status, User } from "src/app/model/index.model";

export interface typeStore {
    isLoading: boolean;
    listStatus?: Status[];
    listUsers?: User[];
    error?: String
}