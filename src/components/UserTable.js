import React, { useEffect, useState } from "react";
import { Table, Row, Col, Input, Select } from "antd";
import { useSelector } from "react-redux";

function UserTable() {
  const { Option } = Select;

  const [filterQuery, setFilterQuery] = useState({ name: "", country: "" });

  const userState = useSelector((state) => state.users);
  const { users } = userState;

  const commonState = useSelector((state) => state.common);
  const { countries } = commonState;

  const [localUsers, setLocalUsers] = useState(users);

  useEffect(() => {
    filterUsers(filterQuery);
  }, [filterQuery]);

  const filterUsers = async (query) => {
    if (query.name === "" && query.country === "") {
      setLocalUsers(users);
    } else if (query.name != "" && query.country === "") {
      console.log(query);
      const newUsersData = await users.filter(
        (obj) => obj.username.indexOf(query.name) !== -1
      );
      setLocalUsers(newUsersData);
    } else if (query.name === "" && query.country != "") {
      const newUsersData = await users.filter(
        (obj) => obj.country == query.country
      );
      setLocalUsers(newUsersData);
    } else if (query.name != "" && query.country != "") {
      const newUsersData = await users.filter(
        (obj) =>
          obj.username.indexOf(query.name) !== -1 &&
          obj.country == query.country
      );
      setLocalUsers(newUsersData);
    }
  };

  useEffect(() => {
    setLocalUsers(users);
  }, [users]);

  const columns = [
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Country",
      key: "country",
      dataIndex: "country",
    },
    {
      title: "State",
      key: "state",
      dataIndex: "state",
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
    },
  ];

  return (
    <div className="table-row0">
      <div className="frm-dg">
        <Row gutter={[16, 16]}>
          <Col md={8}>
            <Input
              placeholder="Name"
              onChange={(e) =>
                setFilterQuery({ ...filterQuery, name: e.target.value })
              }
            />
          </Col>

          <Col md={8}>
            <Select
              placeholder="Country"
              allowClear
              onSelect={(value) =>
                setFilterQuery({ ...filterQuery, country: value })
              }
              onClear={() => setFilterQuery({ ...filterQuery, country: "" })}
            >
              {countries.map((item, i) => (
                <Option key={i} value={item.key}>
                  {item.text}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
      </div>
      <Table columns={columns} dataSource={localUsers} pagination={false} />
    </div>
  );
}

export default UserTable;
