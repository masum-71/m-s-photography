import React from "react";
import useTitle from "../../Hooks/UseTitle";

const Blog = () => {
  useTitle("blog");
  return (
    <div>
      <div className=" mb-3 border-2 p-4">
        <h1 className="text-2xl mb-2">
          {" "}
          <span className="font-bold">Question: 1</span> Difference between SQL
          and NoSQL
        </h1>
        <p>
          <span className="font-bold">Answer: </span>
          SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL. <br />
          <strong>
            The five critical differences between SQL vs NoSQL are:
          </strong>
          <li>
            SQL databases are relational, NoSQL databases are non-relational.
          </li>
          <li>
            SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.
          </li>
          <li>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable.
          </li>
          <li>
            SQL databases are table-based, while NoSQL databases are document,
            key-value, graph, or wide-column stores.
          </li>
          <li>
            SQL databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </li>
        </p>
      </div>
      <div className="mb-3 border-2 p-4">
        <h1 className="text-2xl mb-2">
          {" "}
          <span className="font-bold">Question:2</span> What is JWT, and how
          does it work?
        </h1>
        <p>
          <span className="font-bold">Answer: </span>
          JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
          compact and self-contained way for securely transmitting information
          between parties as a JSON object. This information can be verified and
          trusted because it is digitally signed.
        </p>
      </div>
      <div className="mb-3 border-2 p-4">
        <h1 className="text-2xl mb-2">
          {" "}
          <span className="font-bold">Question:3</span> What is the difference
          between javascript and NodeJS?
        </h1>
        <p>
          <span className="font-bold">Answer: </span>
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language.
        </p>
      </div>
      <div className="mb-3 border-2 p-4">
        <h1 className="text-2xl mb-2">
          {" "}
          <span className="font-bold">Question:4</span>How does NodeJS handle
          multiple requests at the same time?
        </h1>
        <p>
          <span className="font-bold">Answer: </span>
          How NodeJS handle multiple client requests? NodeJS receives multiple
          client requests and places them into EventQueue. NodeJS is built with
          the concept of event-driven architecture. NodeJS has its own EventLoop
          which is an infinite loop that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blog;
