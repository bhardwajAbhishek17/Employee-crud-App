import React, { useContext, useState, useEffect } from "react";
import { listContext } from "../App";
import { useNavigate, useLocation } from "react-router-dom";

const AddEmp = () => {
  const { employeeList, setEmployeeList } = useContext(listContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [formValue, setFormValue] = useState({
    employeeName: "",
    employeeId: "",
    employeeEmail: "",
    employeeAddress: "",
    employeeDesignation: "",
    employeeEducation: "",
    employeeSalary: "",
    employeeJoiningDate: "",
    employeePerformance: "average",
  });

  const [editIndex, setEditIndex] = useState(null);

  // Agar Update button se aaye hain, toh form mein data fill karne ke liye
  useEffect(() => {
    if (location.state && location.state.empData) {
      setFormValue(location.state.empData);
      setEditIndex(location.state.index);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // UPDATE EXISTING EMPLOYEE
      const updatedList = employeeList.map((emp, index) =>
        index === editIndex ? formValue : emp
      );
      setEmployeeList(updatedList);
    } else {
      // ADD NEW EMPLOYEE (Yahan ensure kiya gaya hai ki employeeList array ho)
      setEmployeeList([...(employeeList || []), formValue]);
    }

    navigate("/"); // Save hone ke baad list page par wapas chale jayenge
  };

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4>{editIndex !== null ? "Update Employee" : "Add Employee"}</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row row-gap-3">
                  <div className="col-3">
                    <label className="font-size-13">EMPLOYEE NAME</label>
                    <input
                      type="text"
                      placeholder="Employee Name"
                      className="form-control"
                      name="employeeName"
                      value={formValue.employeeName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-3">
                    <label className="font-size-13">EMPLOYEE ID</label>
                    <input
                      type="text"
                      placeholder="Employee id"
                      className="form-control"
                      name="employeeId"
                      value={formValue.employeeId}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-3">
                    <label className="font-size-13">EMAIL ID</label>
                    <input
                      type="text"
                      placeholder="Email id"
                      className="form-control"
                      name="employeeEmail"
                      value={formValue.employeeEmail}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-3">
                    <label className="font-size-13">ADDRESS</label>
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                      name="employeeAddress"
                      value={formValue.employeeAddress}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-3">
                    <label className="font-size-13">EDUCATION</label>
                    <input
                      type="text"
                      placeholder="Education"
                      className="form-control"
                      name="employeeEducation"
                      value={formValue.employeeEducation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-3">
                    <label className="font-size-13">SALARY</label>
                    <input
                      type="text"
                      placeholder="Salary"
                      className="form-control"
                      name="employeeSalary"
                      value={formValue.employeeSalary}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-3">
                    <label className="font-size-13">DESIGNATION</label>
                    <input
                      type="text"
                      placeholder="Designation"
                      className="form-control"
                      name="employeeDesignation"
                      value={formValue.employeeDesignation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-3">
                    <label className="font-size-13">JOINING DATE</label>
                    <input
                      type="date"
                      className="form-control"
                      name="employeeJoiningDate"
                      value={formValue.employeeJoiningDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-3">
                    <label className="font-size-13">PERFORMANCE</label>
                    <select
                      className="form-control"
                      name="employeePerformance"
                      value={formValue.employeePerformance}
                      onChange={handleChange}
                    >
                      <option value="excellent">EXCELLENT</option>
                      <option value="average">AVERAGE</option>
                      <option value="normal">NORMAL</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary" type="submit">
                      {editIndex !== null ? "UPDATE" : "SUBMIT"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmp;
