import { useState, useEffect } from "react";

const Posts = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  const getPosts = async () => {
    try {
      let result = await fetch("http://localhost:9000/post/mine", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("MyToken"),
        },
      });

      let json = await result.json();

      setResults(json.Results);
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await fetch("http://localhost:9000/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Since this route is protected via Validate.js (in the server), we have to pass the auth token to this request
          //! Will still cause error, come back to this
          Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
        },
        body: JSON.stringify({
          text: text,
        }),
      });

      const json = await result.json();

      console.log(json);
      getPosts();
      setText("")

    } catch (err) {
      console.log(err);
    }
  };

  const displayPosts = () => {
    return results.map((post) => (
      <div
        style={{ border: ".3em solid black", padding: "2em" }}
        key={post._id}
      >
        <h2>{post.text}</h2>
      </div>
    ));
  };

  return (
    <div>
      <h3>Create a post:</h3>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />

        <button>Submit</button>
      </form>
        {displayPosts()}

    </div>
  );
};

export default Posts;
