export default function StatsCard({ title, count }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded p-4 w-48">
      <h2 className="text-gray-600 dark:text-gray-300">{title}</h2>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  );
}
