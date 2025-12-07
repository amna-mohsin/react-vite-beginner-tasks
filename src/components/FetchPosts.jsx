import React from "react";

function FetchPosts() {
  const dummyPosts = [
    { id: 1, title: "Learn React Basics" },
    { id: 2, title: "Understand useState Hook" },
    { id: 3, title: "Practice Props and Components" },
    { id: 4, title: "Build a Counter App" },
    { id: 5, title: "Toggle Text Example" },
    { id: 6, title: "Live Input Field Handling" },
    { id: 7, title: "Render a Fruit List" },
    { id: 8, title: "Add Items to List" },
    { id: 9, title: "Simple Form Validation" },
    { id: 10, title: "Fetch API Data Example" },
  ];

  return (
    <div style={{ margin: "20px 0" }}>
      <h3 style={{ marginBottom: "10px" }}>First 10 Post Titles:</h3>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        {dummyPosts.map((post) => (
          <li key={post.id} style={{ marginBottom: "6px" }}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchPosts;
