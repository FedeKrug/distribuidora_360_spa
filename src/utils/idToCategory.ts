export const ConvertIdToCategory = (id: number) => {
    switch (id) {
        case 0:
            return "JARDINERIA";

        case 1:
            return "ELECTRICIDAD";
        case 2:
            return "SANITARIOS";
        case 3:
            return "FERRETERIA";
        case 4:
            return "OFERTAS";
        case 5:
            return "TODOS"

    }
}