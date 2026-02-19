export default function BugCard({ bug }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded p-4 mb-4">
      <h3 className="font-bold text-lg">{bug.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{bug.description}</p>
      <p className="mt-2">
        <span className="font-semibold">Priority:</span> {bug.priority}
      </p>
      <p>
        <span className="font-semibold">Status:</span> {bug.status}
      </p>
      <p>
        <span className="font-semibold">Assigned To:</span> {bug.assignedTo}
      </p>
    </div>
  );
}
