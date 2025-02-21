import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import SectionDiv from "../FixedComponent/SectionDiv";
import { breakpoints } from "../FixedComponent/BreakPoints";
import { Colors } from "../Colors/ColorComponent";
import { Spin } from "antd";
const ReadBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const { blogId } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://santhotad.onrender.com/api/blogs/getBlogs",
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const blog = post.find((blog) => blog.id === blogId);

  return (
    <SectionDiv>
      <Major>
        {loading ? (
          <LoaderContainer>
            <Spin size="large" />
            <p>Loading blog content...</p>
          </LoaderContainer>
        ) : post.length > 0 ? (
          <Container>
            <Main>
              <MainFeature>
                <StyledLink>
                  <ImageContainer>
                    <img src={blog.imagesUrl} alt={blog.imagesAlt} />
                    {/* <span>
                    <Topic>
                      {blog.title}: {blog.metaDescription}
                    </Topic>
                    <Author>-{blog.author}</Author>
                  </span> */}
                  </ImageContainer>

                  <Writeup>
                    <span>
                      <Topic>
                        {blog.title}: {blog.metaDescription}
                      </Topic>
                      <Author>-{blog.author}</Author>
                    </span>{" "}
                    <div
                      dangerouslySetInnerHTML={{ __html: blog.description }}
                    />
                    <div>
                      <p> Company Name: Santhotad Concept </p>
                      <p> Contact Name: Temitope Adeusi </p>
                      <p> Country: Nigeria </p>
                      <p>
                        {" "}
                        Website:{" "}
                        <a
                          href="https://santhotad.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "black" }}
                        >
                          https://santhotad.com
                        </a>
                      </p>
                    </div>
                    <Date>
                      <span>Date Posted: </span>
                      {blog.createdAt}
                    </Date>
                  </Writeup>
                </StyledLink>
              </MainFeature>
            </Main>
            <SideContent>
              <Intro>More News Updates</Intro>
              <Divider />
              {post
                .filter((p) => p.id !== blog.id) // ✅ Exclude current blog
                .map((post) => (
                  <React.Fragment key={post.id}>
                    <One key={post.id} to={`/blog/${post.id}`}>
                      <SideImage>
                        <img src={post.imagesUrl} alt={post.imagesAlt} />
                      </SideImage>
                      <OneSide>
                        <AuthorDate>
                          <span>{post.author}</span>
                          <span> -{post.formattedDate}</span>
                        </AuthorDate>
                        <TopicMini>
                          {post.title}: {post.metaDescription}
                        </TopicMini>
                      </OneSide>
                    </One>

                    <Divider />
                  </React.Fragment>
                ))}
            </SideContent>
          </Container>
        ) : (
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              marginTop: "20px",
            }}
          >
            No Content to read yet.
          </p>
        )}
      </Major>
    </SectionDiv>
  );
};

export default ReadBlog;
const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  p {
    margin-top: 10px;
    font-size: 16px;
    color: #666;
  }
`;

const StyledLink = styled.div`
  display: grid;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  @media (min-width: ${breakpoints.xs}) {
    display: block;
    text-decoration: none;
    color: black !important;

    background: white;

    padding: 20px;
    overflow: hidden;
  }
`;

const ImageContainer = styled.div`
  @media (min-width: ${breakpoints.xs}) {
    float: left;
    width: 50%;
    margin-right: 15px;
    border-radius: 5px;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: auto;
    @media (min-width: ${breakpoints.xs}) {
      /* height: 310px; */
    }
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Writeup = styled.p`
  margin: 0;
  text-align: left;

  line-height: 1.6;
  font-size: 16px;
  p {
    a {
      color: blue !important;
    }
  }
`;

const Major = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Main = styled.div`
  @media (min-width: ${breakpoints.md}) {
    overflow-y: auto;
    height: 100vh;
    &::-webkit-scrollbar {
      margin-left: 2px !important;
      width: 8px;
      position: absolute !important;
      border: 1px solid #f0f0f0;
      padding: 1.1px;
      border-radius: 5px;
      height: 70vh !important;
      background-color: white;
    }
    &::-webkit-scrollbar-thumb {
      background: #d5d5d5;
      margin-left: 10px !important;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      margin-left: 10px !important;
    }
  }

  display: flex;

  flex-direction: column;
  gap: 16px;
`;
const Container = styled.div`
  justify-content: center;

  display: grid;
  gap: 20px;
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 7fr 3fr;
  }
`;

const MainFeature = styled.div`
  background: white;
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  display: grid;

  gap: 10px;
  @media (min-width: ${breakpoints.md}) {
    margin: 0 40px 0 0;
  }

  padding: 20px;
  @media screen and (max-width: 320px) {
    padding: 1px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1px;
  }
`;

const Topic = styled.h4`
  color: black;

  line-height: 1.4;

  font-weight: 500;
  margin: 0;
`;

const Author = styled.p`
  color: black;
`;
const Date = styled.p`
  color: ${Colors.ashBlack};
`;

const SideContent = styled.div`
  display: flex;
  overflow-y: auto;
  border: 1.5px solid #e7e6e6;
  flex-direction: column;
  gap: 10px;
  background: #f3f2f2;
  border-radius: 10px;
  padding: 10px;
  max-height: 60vh;
  max-width: 70%;
  @media (min-width: ${breakpoints.xs}) {
    max-width: 60%;
  }
  @media (min-width: ${breakpoints.md}) {
    max-width: 100%;
  }
  a {
    text-decoration: none !important;
    color: black;
  }
`;
const Intro = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 0;
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #aeaeae;
`;

const One = styled(Link)`
  display: grid;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 0.7px solid #8d8d8d;
  width: 100%;
  grid-template-columns: 3fr 7fr;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  }
`;
const SideImage = styled.div`
  /* flex: 1; */

  display: flex;

  justify-content: center;
  height: 60px;
  img {
    border-radius: 4px;
    width: 100%;

    /* max-height: 100%; */
    object-fit: cover;
  }
`;

const AuthorDate = styled.p`
  color: black;
  margin: 0;
  font-size: 12px;
  padding: 0;

  span {
    color: #8d8d8d !important;
  }
  @media (min-width: ${breakpoints.xs}) {
    font-size: 10px;
  }
`;

const TopicMini = styled.p`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  padding: 8px 0 2px 0;
  flex-wrap: nowrap;
  font-size: 12px !important;
`;
const OneSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;
