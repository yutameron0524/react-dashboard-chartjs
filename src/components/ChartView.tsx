import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"
import type { Item } from "../types"

type Props = {
    items: Item[]
}

export default function ChartView({ items }: Props) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const chartRef = useRef<Chart | null>(null)

    useEffect(() => {
        if (!canvasRef.current) return

        if (chartRef.current) {
           chartRef.current.destroy()
        }

        chartRef.current = new Chart(canvasRef.current, {
            type: "bar",
            data: {
             labels: items.map(i => i.label),
             datasets: [
                {
                    label: "データ",
                    data: items.map(i => i.value),
                },
             ],
            },
        })
    }, [items])

    return <canvas ref={canvasRef} />
}