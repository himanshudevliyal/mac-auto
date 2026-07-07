import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function PaymentBreakdownChart({
  loanAmount,
  totalInterest,
  downPayment,
  formatPrice,
}) {
  const data = [
    {
      name: "Principal Amount",
      value: loanAmount,
      color: "#22c55e",
      fill: "#22c55e",
    },
    {
      name: "Total Interest",
      value: totalInterest,
      color: "#3b82f6",
      fill: "#3b82f6",
    },
    {
      name: "Down Payment",
      value: downPayment,
      color: "#9ca3af",
      fill: "#9ca3af",
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{data.name}</p>
          <p className="text-lg font-bold" style={{ color: data.color }}>
            ₹{formatPrice(data.value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer
      width="100%"
      className="relative lg:absolute -top-[25%] right-0 max-w-[200px] max-h-[200px]"
    >
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={70}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
}
