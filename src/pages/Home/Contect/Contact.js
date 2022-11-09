import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-5xl font-bold my-4">Contact Me</div>
      <form className="w-1/2 m-auto mt-10">
        <div className="grid md:grid-cols-2 gap-10 mb-10 grid-cols-1">
          <input
            className="bg-slate-400 p-3 text-white placeholder-white"
            type="text"
            placeholder="First Name"
          />
          <input
            className="bg-slate-400 p-3 text-white placeholder-white"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="bg-slate-400 p-3 text-white placeholder-white"
            type="email"
            placeholder="Email"
          />
          <input
            className="bg-slate-400 p-3 text-white placeholder-white"
            type="text"
            placeholder="Phone"
          />
        </div>
        <input className="btn w-full" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default Contact;
