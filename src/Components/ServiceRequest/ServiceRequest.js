import React from "react";
import "./ServiceRequest.css";
import {
  FaUserAlt,
  FaUserEdit,
  FaMobileAlt,
  FaRegCommentAlt,
  FaShoppingCart,
} from "react-icons/fa";
import "antd/dist/antd.min.css";
import { Radio } from "antd";
import { Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function ServiceRequest() {

const [value, setValue] = React.useState(1);

const onChange = (e) => {
  console.log("radio checked", e.target.value);
  setValue(e.target.value);
};

 

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };


  return (
    <div className="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 service-title">
            <h4>Service request</h4>
            <p>Please Fill In The Information And Attach The Required Files</p>
          </div>
          <div className=" row all-input">
            <div className="col-lg-4 input-container ">
              <FaUserAlt
                style={{
                  position: "absolute",
                  left: 25,
                  top: 21,
                  color: "gray",
                }}
              />
              <input className="form-control" type="text" placeholder="Name*" />
            </div>
            <div className="col-lg-4 input-container ">
              <FaMobileAlt
                style={{
                  position: "absolute",
                  left: 25,
                  top: 21,
                  color: "gray",
                }}
              />
              <input
                className="form-control"
                type="number"
                placeholder="Mobile*"
              />
            </div>
            <div className="col-lg-4 input-container ">
              <FaUserEdit
                style={{
                  position: "absolute",
                  left: 25,
                  top: 21,
                  color: "gray",
                }}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Job Title*"
              />
            </div>
          </div>
          <div className="row">
            <div className=" col-lg-12 textarea-container">
              <FaRegCommentAlt
                style={{
                  position: "absolute",
                  left: 25,
                  top: 21,
                  color: "gray",
                }}
              />
              <textarea className="text-area" placeholder="The Message" />
            </div>
          </div>
          <div className="row service-part3">
            <div className="col-lg-6">
              <h5>File Request</h5>
              <div>
                <Radio.Group onChange={onChange} value={value}>
                  <Radio style={{ padding: "10px" }} value={1}>
                    <span style={{ fontWeight: "bold" }}>File name </span> -
                    Description of the required file
                  </Radio>
                  <Radio style={{ padding: "10px" }} value={2}>
                    <span style={{ fontWeight: "bold" }}>File name </span> -
                    Description of the required file
                  </Radio>
                  <Radio style={{ padding: "10px" }} value={3}>
                    <span style={{ fontWeight: "bold" }}>File name </span>-
                    Description of the required file
                  </Radio>
                  <Radio style={{ padding: "10px" }} value={4}>
                    <span style={{ fontWeight: "bold" }}>File name </span>-
                    Description of the required file
                  </Radio>
                </Radio.Group>
              </div>
            </div>
            <div className="col-lg-6 child-part3">
              <h5>Upload Files</h5>
              <div className="upload">
                <Upload {...props}>
                  <p className="ant-upload-drag-icon">
                    <PlusOutlined
                      style={{
                        color: "#757575",
                        marginTop: "50px",
                        fontSize: "50px",
                      }}
                    />
                  </p>

                  <p className="ant-upload-hint">Upload File</p>
                </Upload>
              </div>
              <div className="row upload-part2">
                <div className="col-lg-6 child1">
                  <h6>
                    service price :
                    <span>
                      <del>260 Egp </del>
                    </span>
                    200 Egp
                  </h6>
                  <h6>
                    Estimated service time is : <span>( 20 days )</span>
                  </h6>
                </div>
                <div className="col-lg-5 offset-1 child2">
                  <button>
                    <FaShoppingCart
                      style={{
                        width: "18px",
                        height: "18px",
                        marginRight: "10px",
                      }}
                    />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceRequest;
