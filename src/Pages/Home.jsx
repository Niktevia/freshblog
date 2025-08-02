export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">📝 FreshBlog</h1>
      <p className="text-lg mb-4 text-gray-600 text-center">Your fresh start in blogging</p>

      <div className="space-y-4">
        <div className="p-4 border rounded shadow bg-white">
          <h2 className="text-xl font-semibold">Sample Blog Title</h2>
          <p className="text-gray-700">This is a sample blog summary...</p>
        </div>
        {/* Add more dummy cards later */}
      </div>
    </div>
  );
}