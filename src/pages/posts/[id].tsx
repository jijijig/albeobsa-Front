/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface Post {
  id: number;
  title: string;
  content: string;
  memberName: string;
  heartCnt: number;
  commentCnt: number;
  createdAt: string;
  lastModifiedAt: string;
  comments: string;
}

export default function PostDetails() {
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await axios.get<Post>(`/api/posts/${id}`);
          setPost(response.data);
        } catch (error) {
          console.error("Failed to fetch post", error);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div css={style}>
      <div className="post-container">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-content">{post.content}</p>
        <div className="post-meta">
          <span className="post-author">작성자: {post.memberName}</span>
          <span className="post-date">작성일: {post.createdAt}</span>
          <span className="post-date">수정일: {post.lastModifiedAt}</span>
        </div>
        <div className="post-stats">
          <span className="post-hearts">♥ {post.heartCnt}</span>
          <span className="post-comments">댓글 {post.commentCnt}</span>
        </div>
        <div className="post-comments-section">
          <h2>댓글</h2>
          <p>{post.comments}</p>
        </div>
      </div>
    </div>
  );
}

const style = css`
  .post-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .post-title {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .post-content {
    font-size: 1.2em;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .post-meta {
    display: flex;
    flex-direction: column;
    font-size: 0.9em;
    color: #555;
    margin-bottom: 20px;

    span {
      margin-bottom: 5px;
    }
  }

  .post-stats {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    .post-hearts,
    .post-comments {
      font-size: 1.1em;
      font-weight: bold;
    }
  }

  .post-comments-section {
    margin-top: 40px;

    h2 {
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.1em;
      line-height: 1.6;
    }
  }
`;
