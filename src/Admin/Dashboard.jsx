import React, { useState } from "react";
import { Layout, Button, Input, Select, Upload } from "antd";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Colors } from "../Colors/ColorComponent";
import { PlusOutlined } from "@ant-design/icons";
import { LuImageUp } from "react-icons/lu";
import { IoIosLink } from "react-icons/io";
import { CiUser, CiIndent } from "react-icons/ci";

const { TextArea } = Input;

const DashboardContainer = styled.div`
  padding: 20px;
  background: #f5f5f5;
  min-height: calc(100vh - 4rem);
  display: flex;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const SecondPart = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 60px;
  min-height: calc(100vh - 8rem);
`;

const TypeCard = styled.div`
  min-width: 500px;
  max-width: 500px;
  background: white;
  min-height: calc(100vh - 8rem);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #ccc;
`;

const CustomButton = styled.div`
  margin-right: 40px;
`;

const Butt = styled(Button)`
  background: transparent;
  color: ${Colors.blue};
  border: 1px solid ${Colors.blue};
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;

  .word-counter {
    position: absolute;
    bottom: 8px;
    left: 10px;
    font-size: 12px;
    color: #999;
  }
`;

const StyledQuill = styled(ReactQuill)`
  .ql-container {
    height: 60vh !important;
  }
  .ql-editor {
    min-height: 250px;
    padding-bottom: 30px; /* Prevent overlap */
  }
`;

const UploadContainer = styled(Upload)`
  width: 100% !important; /* Make it take full width */
  margin-bottom: 5px;

  .ant-upload {
    width: 100% !important;
    height: 150px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e7e5e5;
    border-radius: 10px;
  }

  svg {
    font-size: 60px;
    color: #bdbdbd;
  }

  span {
    border-radius: 10px;
    background: #e7e5e5;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  .counter {
    position: absolute;
    bottom: 8px;
    left: 10px;
    font-size: 12px;
    color: #999;
  }
`;

const Dashboard = () => {
  const [quillText, setQuillText] = useState(""); // Separate state for Quill
  const [text, setText] = useState(""); // Separate state for TextArea

  // Function to count words in Quill editor
  const countWords = (content) => {
    return content
      .replace(/<[^>]+>/g, " ") // Remove HTML tags
      .trim()
      .split(/\s+/)
      .filter(Boolean).length; // Filter empty spaces
  };

  return (
    <DashboardContainer>
      <TypeCard>
        {/* Quill Editor */}
        <StyledWrapper>
          <StyledQuill theme="snow" value={quillText} onChange={setQuillText} />
          <span className="word-counter">({countWords(quillText)}/800)</span>
        </StyledWrapper>

        <CustomButton style={{ textAlign: "right", marginTop: "10px" }}>
          <Butt type="primary">Publish</Butt>
        </CustomButton>
      </TypeCard>

      <SecondPart>
        {/* URL & Author */}
        <div
          style={{
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        >
          <p style={{ margin: "0", paddingBottom: "5px" }}>URL & Author</p>
          <Input
            placeholder="URL Friendly Title"
            prefix={
              <IoIosLink style={{ color: "#000000", fontSize: "18px" }} />
            }
          />
          <Select
            placeholder="Author"
            style={{ marginTop: "10px", width: "100%" }}
            prefix={<CiUser style={{ color: "#000000", fontSize: "18px" }} />}
          />
        </div>

        {/* Cover Image & Meta Description */}
        <div
          style={{
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            flex: 1,
          }}
        >
          <p style={{ margin: "0", paddingBottom: "5px" }}>Cover Image</p>
          <UploadContainer
            listType="picture-card"
            showUploadList={false}
            beforeUpload={() => false}
          >
            <span>
              <LuImageUp />
            </span>
          </UploadContainer>
          <p
            style={{
              textAlign: "right",
              margin: "0",
              color: "#ccc",
              paddingBottom: "10px",
            }}
          >
            Replace Image
          </p>
          <Input
            placeholder="Image Alt Text"
            style={{ marginTop: "10px" }}
            prefix={<CiIndent style={{ color: "#000000", fontSize: "18px" }} />}
          />

          {/* Meta Description */}
          <Wrapper>
            <TextArea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter the meta description..."
              maxLength={300}
              style={{
                marginTop: "10px",
                height: "160px",
                paddingBottom: "24px",
              }} // Extra padding for counter
            />
            <span className="counter">({text.length}/300)</span>
          </Wrapper>
        </div>
      </SecondPart>
    </DashboardContainer>
  );
};

export default Dashboard;
