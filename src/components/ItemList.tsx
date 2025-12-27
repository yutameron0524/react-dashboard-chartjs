import type { Item } from "../types"

type Props = {
    items: Item[]
}

export default function ItemList({ items }: Props) {
    return (
        <ul className="space-y-1">
         {items.map((item, index) => (
            <li key={index} className="border p-2">
                {item.label}：{item.value}
            </li>
         ))}
        </ul>
    )
}