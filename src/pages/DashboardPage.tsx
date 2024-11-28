const DashboardPage = () => {
  return (
    <main className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900">Total Users</h2>
          <p className="mt-2 text-3xl font-bold text-gray-700">1</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900">Revenue</h2>
          <p className="mt-2 text-3xl font-bold text-gray-700">123</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900">Active Projects</h2>
          <p className="mt-2 text-3xl font-bold text-gray-700">12</p>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
