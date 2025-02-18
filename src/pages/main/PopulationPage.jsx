import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PopulationPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://analytic-api.duckdns.org/population_data/v1")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  if (!stats) return <p>Loading...</p>;

  const ageData = [
    {
      name: stats.table_population_group.largest_age_group,
      population: stats.table_population_group.largest_age_population,
    },
    {
      name: stats.table_population_group.smallest_age_group,
      population: stats.table_population_group.smallest_age_population,
    },
  ];

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        Malaysia Population Insights ({stats.latest_year})
      </h1>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Population</h2>
          <p className="text-2xl">
            {stats.key_population_stats.total_population}
          </p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">MFR (Males per Female)</h2>
          <p className="text-2xl">{stats.key_population_stats.mfr_overall}</p>
        </div>
        <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Growth Rate</h2>
          <p className="text-2xl">{stats.key_population_stats.growth_rate}%</p>
        </div>
      </div>

      {/* Population Growth Chart */}
      <div className="bg-white shadow-lg rounded-xl p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-600 mb-4">
          Age Distribution
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ageData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="population" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-gray-700">
            {stats.key_insights.population_growth["1"]} &nbsp;
            {stats.key_insights.population_growth["2"]}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-gray-700">{stats.key_insights.Gender_Balance}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-gray-700">
            {stats.key_insights.Aging_Population_Trends}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-gray-700">
            {stats.key_insights.Age_Distribution["1"]}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-gray-700">
            {stats.key_insights.Age_Distribution["2"]}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PopulationPage;
