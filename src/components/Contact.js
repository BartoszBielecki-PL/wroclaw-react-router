import React from "react";
import "./Contact.sass";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <main>
      <section className="contact">
        <p>
          <FaPhoneAlt />
          +48 663 687 876
        </p>
        <p>
          <HiMail />
          bartosz.bielecki@gmail.com
        </p>
        <p>
          <AiFillLinkedin />
          <a href="https://www.linkedin.com/in/bartosz-bielecki-a2076a11a/">
            https://www.linkedin.com/in/bartosz-bielecki-a2076a11a/
          </a>
        </p>
        <p>
          <AiFillGithub />
          <a href="https://github.com/BartoszBielecki-PL">
            https://github.com/BartoszBielecki-PL
          </a>
        </p>
      </section>
    </main>
  );
};

export default Contact;
