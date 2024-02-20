import { ComponentType } from "react";

export interface LocationStates {
    "/"?: {};
    "/*"?: {};
    "/sobre-nosotros"?: {};
    "/contacto"?: {};
    "/donantes-y-colaboradores"?: {};
    "/nuestras-causas"?: {};
    "/shop-solidario"?: {};
    "/voluntarios"?: {};
    "/eventos"?: {};
    "/historias-de-vida"?: {};
    "/blog"?: {};
    "/galeria"?: {};
    "/preguntas-frecuentes"?: {};
    "/carrito"?: {};
}
export type PathName = keyof LocationStates;

export interface Page {
    path: PathName;
    exact?: boolean;
    component?: ComponentType<Object>;
    Component?: JSX.Element;
}