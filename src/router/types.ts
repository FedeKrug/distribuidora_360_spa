import { ComponentType } from "react";

export interface LocationStates {
    "/"?: {};
    "/*"?: {};
    "/#"?: {};
    "/account"?: {};
    "/account-password"?: {};
    "/search"?: {};
    "/sobre-nosotros"?: {};
    "/contacto"?: {};
    "/login"?: {};
    "/signup"?: {};
    "/forgot-password"?: {};
    "/page404"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
    path: PathName;
    exact?: boolean;
    component?: ComponentType<Object>;
    Component?: JSX.Element;
}
