import { ReactNode } from "react";
import {
  FaDove,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import styled from "styled-components";

// const CameraBody = styled.div`
//   background-color: black;
//   width: fit-content;
//   padding: 10px;
//   border-radius: 7px;
// `;

const Card = styled.div`
  background-color: lightgrey;
  width: fit-content;
  border-radius: 7px;
`;

// const Name = styled.div`
//   font-family: "Corinthia", cursive;
//   font-weight: 700;
//   font-style: normal;
//   font-size: 40px;
// `;

type LinkButton = {
  icon: ReactNode;
  title: string;
  hoverColorClass: string;
};

export default function Contacts() {
  const SocialsLink = ({ icon, title, hoverColorClass }: LinkButton) => {
    return (
      <button
        className={`flex gap-2 hover:${hoverColorClass} transition hover:cursor-pointer`}
      >
        {icon}
        <span>{title}</span>
      </button>
    );
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex flex-col">
        <span>
          Líbí se vám moje práce a chtěli byste se domluvit na focení nebo
          spolupráci? Napište mi zprávu přes formulář níže - ozvu se co
          nejdříve.
        </span>
        <form className="max-w-md mx-auto p-6 rounded-lg shadow-lg">
          <label htmlFor="email" className="block mb-2 font-semibold">
            Kontakt
          </label>
          <input
            type="text"
            id="text"
            name="contact"
            required
            placeholder="Kontakt na vás"
            className="w-full mb-4 px-4 py-2 rounded  border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="message" className="block mb-2 font-semibold">
            Vzkaz
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Napište svůj vzkaz..."
            className="w-full mb-4 px-4 py-2 rounded border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </form>
        <button className="w-full transition-colors py-3 rounded font-semibold text-white">
          Odeslat
        </button>

        {/* Separator */}
        <div className="flex items-center w-full">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-3 text-md font-medium">nebo</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <span>Sleduj mě na sociálních sítích</span>
      </div>
      <div
        className="w-full flex flex-col justify-center"
        style={{ marginTop: 15 }}
      >
        <SocialsLink
          icon={<FaInstagram className="text-xl" />}
          title="@vojtechnerad"
          hoverColorClass="text-pink-600"
        />
        <SocialsLink
          icon={<FaLinkedin className="text-xl" />}
          title="vojtechnerad"
          hoverColorClass="text-blue-600"
        />
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.instagram.com/jannovak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-pink-600 transition"
            >
              <FaInstagram className="text-xl" />
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jannovak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jannovak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-black transition"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
