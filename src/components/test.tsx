import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, selectData, selectLoading } from "../components/action";
import { AppDispatch } from "../components/store";
import { Image } from "antd";

const MyComponent: React.FC = () => {
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const dispatch: AppDispatch = useDispatch(); // Thay đổi kiểu dispatch

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container" style={{ marginTop: "200px" }}>
      <h2 className="text-uppercase mb-3">List Student</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                {/* <td><Image src={item.image} /></td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyComponent;
