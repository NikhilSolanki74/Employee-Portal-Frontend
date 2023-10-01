import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [empData, setEmpData] = useState([]);

  const getAllData = async () => {
    try {
      const getPeople = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getallUsers`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getPeople.json();
      setEmpData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white">
      <header className="text-4xl font-extrabold py-8 text-center">
        Welcome to Our Employee Portal
      </header>
      <section className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-800">
              Employee Directory
            </h2>
            <p className="mt-1 text-sm text-gray-900">
              Explore our talented team of professionals.
            </p>
          </div>
          <Link to="/addemployee">
            <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700  hover:text-gray-900">
              Add Employee
            </button>
          </Link>
        </div>
        <div className="flex flex-col mt-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-600">Employee</th>
                  <th className="px-4 py-3 text-left text-gray-600">Title</th>
                  <th className="px-4 py-3 text-left text-gray-600">Role</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 divide-y divide-gray-300">
                {empData.map((person) => (
                  <tr key={person.id}>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            src={person.image}
                            alt={`${person.name}'s profile`}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-semibold text-gray-800">
                            {person.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {person.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-semibold text-gray-800">
                        {person.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {person.department}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm text-gray-600">{person.role}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
