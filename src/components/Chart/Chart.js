import { format, parseISO, addDays, differenceInDays } from "date-fns";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

import "./Chart.css";

const Chart = ({ start, end, rates }) => {
  const data = [];
  const range = differenceInDays(end, start) + 1;

  for (let num = 0; num < range; num++) {
    data.push({
      date: addDays(start, num).toString().substring(0, 10),
      value: rates[num],
    });
  }

  console.dir(data);
  return (
    <ResponsiveContainer height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />
        <XAxis dataKey="date" axisLine={false} tickLine={false} />
        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(number) => `$${number.toFixed(4)}`}
          domain={["auto", "auto"]}
        />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid opacity={0.3} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{label}</h4>
        {/* <h4>{format(parseISO(label), "eee d MMM, yyyy")}</h4> */}
        {payload && <p>{payload[0].value.toFixed(6)}</p>}
      </div>
    );
  }
}

export default Chart;
