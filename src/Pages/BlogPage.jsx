import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";
import blogM from "../TeamImages/blogmain.png";
import blog1 from "../TeamImages/blog2.png";
import blog2 from "../TeamImages/blog1.png";
import blog3 from "../TeamImages/blog3.png";
const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5009/api/blogs/getBlogs",
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.2; // 20% from top

      if (scrollY > triggerPoint) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Line />
      <Head>
        <h1>What's New?</h1>
        <p>
          Check out our latest blog pposts and stay informed on the newest
          trends, insights, and updates.
        </p>
      </Head>
      <Major>
        {posts.length > 0 ? (
          <>
            <Container>
              <Main>
                {posts.slice(0, 6).map((post, index) => (
                  <React.Fragment key={index}>
                    <MainFeature>
                      <ImageContainer>
                        <img src={post.imagesUrl} alt={post.imagesAlt} />
                      </ImageContainer>
                      <Content>
                        <span>
                          <Topic>
                            {" "}
                            {post.title}:{post.metaDescription}
                          </Topic>
                          <Author>-{post.author}</Author>
                        </span>
                        <Date>{post.formattedDate}</Date>
                      </Content>
                    </MainFeature>
                  </React.Fragment>
                ))}
              </Main>
              <SideContent>
                <Intro>More News Updates</Intro>

                <Divider />
                {posts.slice(6, 10).map((post, index) => (
                  <React.Fragment key={index}>
                    <One>
                      <img src={post.imagesUrl} alt={post.imagesAlt} />
                      <OneSide>
                        <AuthorDate>
                          {post.author} - <span>{post.formattedDate}</span>
                        </AuthorDate>
                        <TopicMini>
                          {post.title}: {post.metaDescription}
                        </TopicMini>
                      </OneSide>
                    </One>
                    {index < 2 && <Divider />}
                  </React.Fragment>
                ))}
              </SideContent>
            </Container>
          </>
        ) : (
          <p
            style={{ textAlign: "center", fontSize: "18px", marginTop: "20px" }}
          >
            No blog posts yet.
          </p>
        )}
      </Major>
    </>
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
  margin: 20px 60px 0 60px;
  justify-content: space-between;

  align-items: center;

  p {
    max-width: 300px;
    line-height: 1.3;
  }
`;
const Major = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Main = styled.div`
  overflow-y: auto;
  height: 100vh;
  display: flex;

  flex-direction: column;
  gap: 16px;
  &::-webkit-scrollbar {
    margin-left: 10px !important;
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
`;
const Container = styled.div`
  /* align-items: center; */
  justify-content: center;
  margin: 10px 60px 10px 20px;
  max-width: 1000px;
  display: grid;
  gap: 40px;
  grid-template-columns: 70% 30%;
`;
const ImageContainer = styled.div`
  max-width: 360px;
  /* max-height: 280px; */
  img {
    max-width: 100%;

    height: 240px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const MainFeature = styled.div`
  background: white;
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 0 50px;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Topic = styled.h3`
  color: black;
  font-size: 22px;
  line-height: 1.4;
  max-width: 380px;
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
`;
const Intro = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 0;
`;
const Divider = styled.div`
  height: 1px;
  width: 260px;
  background: #aeaeae;
`;

const One = styled.div`
  display: flex;
  gap: 10px;
  img {
    max-width: 100%;
    height: 60px;
  }
`;

const AuthorDate = styled.p`
  color: black;
  margin: 0;
  font-size: 14px;
  padding: 0;
  span {
    color: #8d8d8d !important;
  }
`;

const TopicMini = styled.p`
  margin: 0;
  padding: 8px 0 2px 0;
  line-height: 1.2;
  max-width: 200px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
`;
const OneSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;
