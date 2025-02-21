import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import SectionDiv from "../FixedComponent/SectionDiv";
import { Spin } from "antd"; // Import Ant Design spinner
import { breakpoints } from "../FixedComponent/BreakPoints";
import BlogMainSmall from "../Component/BlogMainSmall";
import BlogMainBig from "../Component/BlogMainBig";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://santhotad.onrender.com/api/blogs/getBlogs",
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPosts();
  }, []);

  return (
    <SectionDiv>
      <Line />
      {posts.length > 0 && (
        <Head>
          <h1>What's New?</h1>
          <p>
            Check out our latest blog posts and stay informed on the newest
            trends, insights, and updates.
          </p>
        </Head>
      )}
      <HideBig>
        <BlogMainSmall />
      </HideBig>
      <HideSmall>
        <BlogMainBig />
      </HideSmall>
    </SectionDiv>
  );
};

export default BlogPage;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #aaaaaa;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  @media (min-width: ${breakpoints.xs}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  p {
    margin: 0 0 30px 0;
    @media (min-width: ${breakpoints.xs}) {
      max-width: 300px;
      margin: 30px 0;
    }

    line-height: 1.3;
  }
`;

const HideBig = styled.div`
  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;
const HideSmall = styled.div`
  display: none;

  @media (min-width: ${breakpoints.md}) {
    display: block;
  }
`;
