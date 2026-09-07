import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { listContext } from "../App";

const ListEmp = () => {
  const { employeeList, setEmployeeList } = useContext(listContext);
  const navigate = useNavigate();

  const handleView = (index) => {
    navigate(`/view/${index + 1}`);
  };

  const handleDelete = (empToDelete) => {
    const afterDelete = employeeList?.filter((emp) => emp !== empToDelete);
    setEmployeeList(afterDelete);
  };

  const handleUpdate = (index) => {
    navigate(`/add`, { state: { index, empData: employeeList[index] } });
  };

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12 px-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4 className="m-0">Employee List</h4>

              {/* FIX: to="/add" sahi syntax kiya gaya hai */}
              <NavLink className="btn btn-primary" to="/add">
                Create New
              </NavLink>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="text-center" scope="col">
                      SR.NO
                    </th>
                    <th className="text-center" scope="col">
                      NAME
                    </th>
                    <th scope="col">ID</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">DESIGNATION</th>
                    <th className="text-center" scope="col">
                      PERFORMANCE
                    </th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeList?.map((employee, index) => {
                    return (
                      <tr key={index + 1}>
                        <th className="text-center">{index + 1}</th>
                        <td>{employee?.employeeName}</td>
                        <td>{employee?.employeeId}</td>
                        <td>{employee?.employeeEmail}</td>
                        <td>{employee?.employeeDesignation}</td>
                        <td className="text-center">
                          {employee?.employeePerformance}
                        </td>
                        <td className="text-center">
                          <i
                            className="fa-regular fa-eye pe-4 text-primary pointer"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleView(index)}
                          ></i>
                          <i
                            className="fa-solid fa-pen-to-square pe-4 text-success pointer"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleUpdate(index)}
                          ></i>
                          <i
                            className="fa-solid fa-trash pe-4 text-danger pointer"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDelete(employee)}
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEmp;
