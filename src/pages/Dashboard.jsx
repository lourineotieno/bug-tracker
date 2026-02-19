import StatsCard from "../components/StatsCard";

export default function Dashboard() {
  const stats = [
    { title: "Total Bugs", count: 40 },
    { title: "Open", count: 12 },
    { title: "In Progress", count: 8 },
    { title: "Closed", count: 20 },
  ];

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
      <div className="flex gap-6 flex-wrap">
        {stats.map((stat) => (
          <StatsCard key={stat.title} title={stat.title} count={stat.count} />
        ))}
      </div>
    </div>
  );
}
