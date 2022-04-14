import React from "react";
import { Link, createSearchParams, useNavigate } from "react-router-dom";

export const SampleHome: React.VFC = () => {
  const navigate = useNavigate();

  const params: string = createSearchParams({
    query1: "value3",
    query2: "value4"
  }).toString();

  return (
    <>
      <h1>Sample Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="page1">Sample Page 1</Link>
          </li>
          <li>
            <Link to="page2">Sample Page 2</Link>
          </li>
          <li>
            <Link to="page2?query1=value1&query2=value2">
              Sample Page2 With Query1
            </Link>
          </li>
          <li>
            <Link to={`page2?${params}`}>Sample Page2 With Query2</Link>
          </li>
          <li>
            <Link to="page3_hello">Sample Page3 Hello</Link>
          </li>
          <li>
            <Link to="page3_hi">Sample Page3 Hi</Link>
          </li>
          <li>
            <Link to="page4">Sample Page4</Link>
          </li>
        </ul>

        <button onClick={() => navigate("page1")}>Sample Page1</button>
      </nav>
    </>
  );
};
