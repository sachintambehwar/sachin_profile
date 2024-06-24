import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  function sendMail(e) {
    emailjs
      .sendForm("service_dukjxj5", "template_6046fvy", e.target, {
        publicKey: "1IQ4zDKw2WmIllP6S",
      })
      .then(
        () => {
          toast.success("email send sucessfully!");
          setUserName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName.length || !email.length || !message.length) {
      toast.error("input is required!");
      return;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast.error("valid mail is required!");
      return;
    }
    sendMail(e);
  };

  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 "
    >
      <form
        action=""
        ref={form}
        className=" max-w-[600px] flex flex-col justify-center w-full "
        onSubmit={handleSubmit}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-Primary_Text">
            Contact
          </p>
          <p className="py-4">please feel free to connect with me</p>
        </div>
        <input
          className="py-2 outline-none mb-2 rounded-sm px-2 text-[#000401] text-lg"
          type="text"
          name="name"
          id="name"
          value={userName}
          placeholder="Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="py-2 outline-none mb-2 rounded-sm px-2 text-[#000401] text-lg"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <textarea
          className="px-2 py-3  rounded-sm outline-none text-[#000401] text-lg mb-2"
          name="message"
          id="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="rounded-full border-2 w-fit px-2 text-center font-semibold mx-auto py-1 b bg-background shadow-[#badba2] shadow-sm  hover:scale-110 "
        >
          Contact Me
        </button>
      </form>
    </div>
  );
};

export default Contact;
