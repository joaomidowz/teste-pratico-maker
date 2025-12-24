import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS, LinearScale, BarElement
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(LinearScale, BarElement, ChartDataLabels);

type BarChartProps = {

    dataUsers: {
        userId: number;
        total: number;
    }[];
}

const chartOptions = {
    plugins: {
        datalabels: {
            anchor: 'end' as const,
            align: 'end' as const,
            color: '#e8e8f9',
            font: {
                weight: 'bold',
            },
            formatter: (value: any) => {
                return `R$ ${value.y}`;
            },
        },
    },
    scales: {
        x: {
            type: 'linear' as const,
            position: 'bottom' as const,
        },
        y: {
            beginAtZero: true,
        }
    },
} as const;

export default function BarChart({ dataUsers }: BarChartProps) {
    const data = {
        labels: dataUsers.map(user => `User ${user.userId}`),
        datasets: [
            {
                label: 'Total por usuário',
                data: dataUsers.map(user => ({ x: user.userId, y: user.total })),
                backgroundColor: '#524be0',
            },
        ],
    };

    return <Bar data={data} options={chartOptions} />;
}

export { BarChart };