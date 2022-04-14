import React, { useState } from "react";
import { Input, Button, Select, Row, Col, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/actions/artifactActions";

function CreateForm() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const commonState = useSelector((state) => state.common);
  const { countries, states } = commonState;
  const [localStates, setLocalStates] = useState(states);

  const onFinish = async (values) => {
    const payload = { ...values, key: Math.random() };
    await dispatch(createUser(payload));
    form.resetFields();
  };

  const clearFormData = () => {
    form.resetFields();
  };

  const filterStates = async (value) => {
    var filteredStates = await states.filter((item) => item.countryId == value);
    setLocalStates(filteredStates);
  };

  return (
    <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
      <div className="frm-dg">
        <Row gutter={[16, 16]}>
          <Col md={8}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone!",
                },
              ]}
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item
              name="country"
              rules={[
                {
                  required: true,
                  message: "Please select your country!",
                },
              ]}
            >
              <Select placeholder="Country" allowClear onSelect={filterStates}>
                {countries.map((item, i) => (
                  <Option key={i} value={item.key}>
                    {item.text}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item
              name="state"
              rules={[
                {
                  required: true,
                  message: "Please select your state!",
                },
              ]}
            >
              <Select placeholder="State" allowClear>
                {localStates.map((item, i) => (
                  <Option key={i} value={item.id}>
                    {item.text}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item
              name={"address"}
              rules={[
                {
                  required: true,
                  message: "Please type your address!",
                },
              ]}
            >
              <Input.TextArea placeholder="Address" />
            </Form.Item>
            <div className="frmbtn">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button type="primary" onClick={clearFormData}>
                Cancel
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Form>
  );
}

export default CreateForm;
