import React from "react";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import EmployeeForm from "../components/EmployeeForm";

const CreateEmployeePage = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-purple-600 min-h-screen text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover object-top"
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
                Empower your business with our employee creation!
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Create an Employee
            </h2>
            <p className="mt-2 text-base text-black dark:text-white">
              <Link
                to={"/"}
                className="font-medium text-gray-800 transition-all duration-200 hover:text-indigo-900 hover:underline focus:text-indigo-900 flex items-center gap-3"
              >
                <FaBackward />
                Back to all Employee List
              </Link>
            </p>

            <EmployeeForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateEmployeePage;
