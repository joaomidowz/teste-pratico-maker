export function Card({ titleCard, total }: {
    titleCard: string,
    total: number,
}) {


    return (
        <div className={`relative p-4 px-7 rounded-2xl border border-secundary overflow-hidden`}>
            <div className="relative z-10">
                <p className="text-3xl font-bold flex items-center gap-4">
                    {titleCard}
                </p>

                <div className="space-y-2">
                    <p><span className="font-semibold">Total:</span> {total}</p>
                </div>
            </div>
        </div>
    )
}