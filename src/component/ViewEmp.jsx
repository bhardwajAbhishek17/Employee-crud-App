import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { listContext } from "../App";

const ViewEmp = () => {
  const { employeeList } = useContext(listContext);
  const [viewData, setViewData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id && employeeList.length > 0) {
      // index + 1 match karne ke liye
      const filtered = employeeList?.filter(
        (_, index) => index + 1 == Number(id)
      );
      setViewData(filtered[0] || {});
    }
  }, [id, employeeList]);

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12 px-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4 className="m-0">Employee Details</h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>ID</th>
                    <th>EMAIL</th>
                    <th>EDUCATION</th>
                    <th>DESIGNATION</th>
                    <th>ADDRESS</th>
                    <th>SALARY</th>
                    <th>JOINING DATE</th>
                    <th>PERFORMANCE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{viewData?.employeeName}</td>
                    <td>{viewData?.employeeId}</td>
                    <td>{viewData?.employeeEmail}</td>
                    <td>{viewData?.employeeEducation}</td>
                    <td>{viewData?.employeeDesignation}</td>
                    <td>{viewData?.employeeAddress}</td>
                    <td>{viewData?.employeeSalary}</td>
                    <td>{viewData?.employeeJoiningDate}</td>
                    <td>{viewData?.employeePerformance}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmp;
