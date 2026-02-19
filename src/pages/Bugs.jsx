import BugCard from "../components/BugCard";

export default function Bugs() {
  // Sample bug list
  const bugs = [
    {
      title: "Login button not working",
      description: "Button does not respond on mobile",
      priority: "High",
      status: "Open",
      assignedTo: "John",
    },
    {
      title: "Profile image not uploading",
      description: "Fails when image is >2MB",
      priority: "Medium",
      status: "In Progress",
      assignedTo: "Alice",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">All Bugs</h1>
      {bugs.map((bug, i) => (
        <BugCard key={i} bug={bug} />
      ))}
    </div>
  );
}