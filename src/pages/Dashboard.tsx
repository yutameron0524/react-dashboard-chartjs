import { useState } from "react"
import type { Item } from"../types"
import ItemInput from "../components/ItemInput"
import ItemList from "../components/ItemList"
import ChartView from "../components/ChartView"

export default function Dashboard() {
   const [items, setItems] = useState<Item[]>([])

   const addItem = (item: Item) => {
    setItems(prev => [...prev, item])
   }

   return (
    <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <ItemInput onAdd={addItem} />
        <ItemList items={items} />
        <ChartView items ={items} />
    </div>
   )
}