import React, { useState } from "react";
import { Form, Input, Modal, notification } from "antd";
import PrimaryButton from "../public/Archives/Buttons/Buttons";
import FileUpload from "./FormElements/FileUpload";
import { Button } from "react-bootstrap";

import PhoneNumber from "./FormElements/PhoneNumber";
import fetchApi from "../../api-services/apiIndex";
import ClientDash from "./ClientDash";
import clientDashboardServices from "../../services/clientDashboardServices";
import { getCookie } from "../../function";
import { jwtDecode } from "jwt-decode";

const ArticleSubmission = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submittedConfirmation, setSubmittedConfirmation] = useState("");
  const [token, setToken] = useState(getCookie("token"));
  const decodedToken = token ? jwtDecode(token) : null;
  console.log("-------", decodedToken);

  const handleSubmit = async (formValues) => {
    setLoading(true);
    console.log(formValues);

    // Prepare form values
    formValues = {
      ...formValues,
      phone: formValues.phone.num,
      ...(!!formValues?.file?.length && {
        file: formValues.file[0].originFileObj,
      }),
    };

    // Create FormData object
    const formData = new FormData();
    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }
    console.log(formData);
    formData.append("userId", decodedToken.user.id);
    // API Call
    try {
      const response = await clientDashboardServices.submitArticle(formData);

      console.log("response===", response);
      if (response.status == 200) {
        setSubmittedConfirmation(formValues.name);
        form.resetFields();
      } else {
      }
      setLoading(false);
    } catch (error) {
      console.error("Error during login:", error);
      setLoading(false);
      // Handle error (e.g., show a message to the user)
    }
  };
  //
  return (
    <ClientDash>
      <div className="pb-2 max-w-container container flex-col-2">
        <h1 className="mb-3 jab_commmon_color">Article Submission</h1>
        <Form
          form={form}
          layout="vertical"
          validateMessages={{
            required: "${label} is required",
          }}
          scrollToFirstError={true}
          requiredMark={(label, info) => (
            <div className="form-label">
              {label}{" "}
              {info.required && (
                <span style={{ color: "var(--error)" }}>*</span>
              )}
            </div>
          )}
          onFinish={handleSubmit}
        >
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input placeholder="Enter your Name" />
          </Form.Item>
          <Form.Item
            label="E-mail"
            name="emailId"
            rules={[
              { required: true, message: "" },
              {
                validator: (_, v) => {
                  if (
                    v &&
                    v.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z]+.[a-zA-Z]{2,}$/)
                  )
                    return Promise.resolve();
                  return Promise.reject(
                    new Error("Please enter a valid email")
                  );
                },
              },
            ]}
          >
            <Input placeholder="Enter your Email" />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "" },
              {
                validator: (_, v) => {
                  if (v && v.num.length > v?.dialCode?.length + 1)
                    return Promise.resolve();
                  return Promise.reject(new Error("Phone number is required"));
                },
              },
            ]}
          >
            <PhoneNumber />
          </Form.Item>
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input placeholder="Enter Your Article Title" />
          </Form.Item>
          <Form.Item label="Message" name="message">
            <Input.TextArea rows={4} placeholder="Write Message to Editor" />
          </Form.Item>
          <Form.Item label="Abstract" name="abstract">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item label="References" name="references">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item label="" name="file">
            <FileUpload />
          </Form.Item>
          {/* <PrimaryButton
            params={{
              htmlType: "submit",
              loading,
            }}
          >
            Submit
          </PrimaryButton> */}
          <Button type="submit" disabled={loading} className="jab_commonbtn">
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </Form>
        <Modal
          centered
          open={!!submittedConfirmation.length}
          onCancel={() => setSubmittedConfirmation("")}
          footer={null}
        >
          <p>
            Dear {submittedConfirmation},<br />
          </p>
          <br />
          <p>
            Thank you for submitting your manuscript to the International
            Journal of Interdisciplinary Studies and System Science . Our
            Editorial team will review your submission and get in touch with you
            shortly regarding the next steps.
          </p>
          <br />
          <p>
            Regards, <br />
            International Journal of Interdisciplinary Studies and System
            Science
          </p>
        </Modal>
      </div>
    </ClientDash>
  );
};

export default ArticleSubmission;
