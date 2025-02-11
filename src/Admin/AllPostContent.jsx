import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Tooltip, Pagination, Modal, message } from "antd";
import { EditOutlined, DeleteOutlined, CopyOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const AllPostContent = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5009/api/blogs/getBlogs",
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Show delete confirmation modal
  const showDeleteConfirm = (blogId) => {
    setSelectedBlogId(blogId);
    setDeleteModalVisible(true);
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  };

  // Handle delete
  const handleDelete = async () => {
    console.log("Deleting Blog ID:", selectedBlogId);
    if (!selectedBlogId) {
      message.error("Invalid Blog ID");
      return;
    }

    try {
      await axios.delete(`http://localhost:5009/api/blogs/${selectedBlogId}`);
      message.success("Blog post deleted successfully!");
      setDeleteModalVisible(false);
      setSelectedBlogId(null);
      fetchBlogs(); // Refresh list after delete
    } catch (error) {
      message.error("Failed to delete blog post.");
      console.error("Delete error:", error);
    }
  };

  // Calculate the current page's data
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedBlogs = blogs.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <PostsContainer>
        {paginatedBlogs.map((blog) => (
          <StyledCard key={blog._id}>
            <ActionsContainer>
              {/* <Tooltip title="Duplicate">
                <ActionIcon>
                  <CopyOutlined />
                </ActionIcon>
              </Tooltip> */}
              <Tooltip title="Edit">
                <ActionIcon onClick={() => handleEdit(blog._id)}>
                  <EditOutlined />
                </ActionIcon>
              </Tooltip>
              <Tooltip title="Delete">
                <ActionIcon onClick={() => showDeleteConfirm(blog._id)}>
                  <DeleteOutlined />
                </ActionIcon>
              </Tooltip>
            </ActionsContainer>
            <ImageContainer>
              {blog.imagesAlt ? (
                <img
                  src={blog.imagesUrl}
                  alt={blog.imagesAlt || "Post Cover"}
                />
              ) : (
                <img src="https://via.placeholder.com/300" alt="Placeholder" />
              )}
            </ImageContainer>
            <PostTitle>
              <strong>{blog.title}:</strong> {blog.metaDescription}
            </PostTitle>
          </StyledCard>
        ))}
      </PostsContainer>

      {/* Pagination Component */}
      {blogs.length > pageSize && (
        <PaginationContainer>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={blogs.length}
            onChange={(page) => setCurrentPage(page)}
          />
        </PaginationContainer>
      )}

      {/* Delete Confirmation Modal */}
      <Modal
        title="Delete Blog Post"
        visible={deleteModalVisible}
        onOk={handleDelete}
        onCancel={() => setDeleteModalVisible(false)}
        okText="Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this blog post?</p>
      </Modal>
    </>
  );
};

export default AllPostContent;
