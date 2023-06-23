import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Shubham Ab",
    text: "This video is one of the finest video on namaste-youtube",
    replies: [
      {
        name: "Abhijeet Ab",
        text: "Yes, I also liked this video",
        replies: [
          {
            name: "Shubham Ab",
            text: "This video is one of the finest video on namaste-youtube",
            replies: [
              {
                name: "Abhijeet Ab",
                text: "Yes, I also liked this video",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Abhijeet Ab",
    text: "Yes, I also liked this video",
    replies: [
      {
        name: "Abhijeet Ab",
        text: "Yes, I also liked this video",
        replies: [],
      },
    ],
  },
  {
    name: "Abhijeet Ab",
    text: "Yes, I also liked this video",
    replies: [
      {
        name: "Abhijeet Ab",
        text: "Yes, I also liked this video",
        replies: [],
      },
    ],
  },
  {
    name: "Abhijeet Ab",
    text: "Yes, I also liked this video",
    replies: [
      {
        name: "Abhijeet Ab",
        text: "Yes, I also liked this video",
        replies: [],
      },
    ],
  },
  {
    name: "Abhijeet Ab",
    text: "Yes, I also liked this video",
    replies: [
      {
        name: "Abhijeet Ab",
        text: "Yes, I also liked this video",
        replies: [],
      },
    ],
  },
];

const CommentList = ({ comments }) => {
  return comments?.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList key={index} comments={comment.replies} />
      </div>
    </div>
  ));
};

export const CommentsContainer = () => {
  return (
    <div className="p-2 m-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList key={1000} comments={commentsData} />
    </div>
  );
};
