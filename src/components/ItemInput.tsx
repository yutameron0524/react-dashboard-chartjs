import { useState } from "react"
import type { Item } from "../types"

type Props = {
    onAdd: (item: Item) => void 
}

export default function ItemInput({ onAdd }: Props) {
    const [label, setLabel] = useState("")
    const [value, setValue] = useState("")

    const handleAdd = () => {
        if (!label || !value) return

        onAdd({
            label,
            value: Number(value),
        })

        setLabel("")
        setValue("")
    }

    return (
        <div className="flex gap-2">
            <input
               className="border px-2 py-1"
               value={label}
               onChange={e => setLabel(e.target.value)}
               placeholder="名前"
               />
            <input
               className="border px-2 py-1"
               type="numbar"
               value={value}
               onChange={e => setValue(e.target.value)}
               placeholder="数値"
               />
               <button
                 className="bg-blue-500 text-white px-4"
                 onClick={handleAdd}
                >
                 追加
                </button>
        </div>
    )
}