
export type ProductTableCardType = {
    title: string;
    photoUrl: string;
}


export const AdminProductTableCard = ({ title, photoUrl }: ProductTableCardType) => {
    return (
        <div className="bg-amber-400 w-full mx-4 lg:w-[300px] h-[300px] text-current rounded-[20px] my-4">
            <h2 className="mt-2 mb-4 text-[18px]">{title}</h2>
            <div className="bg-red-500 h-1/2">
                <img src={photoUrl} alt={title} />
            </div>
            <div className="flex px-2 w-full h-2/5 items-center ">
                <button className="mx-2 text-[15px]">Borrar Plantilla</button>
                <button className="mx-2 text-[15px]">Actualizar Plantilla</button>
            </div>
        </div>

    )
}
