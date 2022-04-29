import { appRoutesEnum } from "@enums";
import { IRoute } from "@interfaces";
import { Home } from "@pages";
export const routes: Array<IRoute> = [
    { path: appRoutesEnum.PATH_HOME, component: Home, exact: true },
];
