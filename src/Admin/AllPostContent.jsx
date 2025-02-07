import React from "react";
import styled from "styled-components";
import { Card, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined, CopyOutlined } from "@ant-design/icons";
import blogM from "../TeamImages/blogmain.png";
const posts = [
  {
    id: 1,
    title:
      "Revolutionizing Construction: Santhotad Concept to Introduce 'KIAKIA' AI-Powered Humanoid to Transform....",
    image: blogM,
  },
  {
    id: 2,
    title:
      "Revolutionizing Construction: Santhotad Concept to Introduce 'KIAKIA' AI-Powered Humanoid to Transform....",
    image: blogM,
  },
  {
    id: 3,
    title:
      "Revolutionizing Construction: Santhotad Concept to Introduce 'KIAKIA' AI-Powered Humanoid to Transform....",
    image: blogM,
  },
  {
    id: 4,
    title:
      "Revolutionizing Construction: Santhotad Concept to Introduce 'KIAKIA' AI-Powered Humanoid to Transform....",
    image: blogM,
  },
  {
    id: 5,
    title:
      "Revolutionizing Construction: Santhotad Concept to Introduce 'KIAKIA' AI-Powered Humanoid to Transform....",
    image: blogM,
  },
  {
    id: 6,
    title:
      "Revolutionizing Construction: Santhotad Concept to Introduce 'KIAKIA' AI-Powered Humanoid to Transform....",
    image: blogM,
  },
  {
    id: 7,
    title:
      "Revolutionizing Construction: Santhotad Concept to Introduce 'KIAKIA' AI-Powered Humanoid to Transform....",
    image: blogM,
  },
  {
    id: 6,
    title:
      "Revolutionizing Construction: Santhotad Concept to Introduce 'KIAKIA' AI-Powered Humanoid to Transform....",
    image: blogM,
  },
];

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;
`;
const ActionsContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 6px 10px;
  display: flex;
  align-self: flex-end;
  gap: 10px;
  border: 1px solid #ccc;
`;

const ActionIcon = styled.span`
  cursor: pointer;
  font-size: 18px;
  color: #666;
  &:hover {
    color: #333;
  }
`;
const StyledCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  border-radius: 10px;
  img {
    /* border-radius: 10px; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostTitle = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 300;
  color: #b7b7b7;
  text-align: left;
  word-wrap: break-word;
`;
const AllPostContent = () => {
  return (
    <PostsContainer>
      {posts.map((post) => (
        <StyledCard key={post.id}>
          <ActionsContainer>
            <Tooltip title="Duplicate">
              <ActionIcon>
                <CopyOutlined />
              </ActionIcon>
            </Tooltip>
            <Tooltip title="Edit">
              <ActionIcon>
                <EditOutlined />
              </ActionIcon>
            </Tooltip>
            <Tooltip title="Delete">
              <ActionIcon>
                <DeleteOutlined />
              </ActionIcon>
            </Tooltip>
          </ActionsContainer>
          <ImageContainer>
            {post.image ? (
              <img src={post.image} alt="Post Cover" />
            ) : (
              <img src="https://via.placeholder.com/300" alt="Placeholder" />
            )}
          </ImageContainer>

          <PostTitle>{post.title}</PostTitle>
        </StyledCard>
      ))}
    </PostsContainer>
  );
};

export default AllPostContent;
