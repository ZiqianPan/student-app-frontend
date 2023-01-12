import React, { useState, useEffect } from "react";

import SearchBar from "../searchBar/SearchBar";
import StudentCard from "../studentCard/StudentCard";

import "./StudentList.scss";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const url = "http://localhost:9000/students";

    //reeach out to the backend
    //get our students
    //update our students hook with the new data.
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStudents(data.data);
      });
  }, []); //empty array means run on mount

  //when search term is updated
  //compoent will reender
  let filteredStudents = students;

  if (searchTerm) {
    filteredStudents = students.filter((student) => {
      const fullName = `${student.firstName} ${student.lastName}`;

      const fullNameToLowerCase = fullName.toLowerCase();
      const searchTermToLowerCase = searchTerm.toLowerCase();

      return fullNameToLowerCase.includes(searchTermToLowerCase);
    });
  }

  return (
    <div className="studentList">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredStudents.map((student) => {
        return (
          <div>
            <StudentCard student={student} />
          </div>
        );
      })}
      {filteredStudents.length == 0 && <div className="studentList__noResults">No Result</div>}
    </div>
  );
}
