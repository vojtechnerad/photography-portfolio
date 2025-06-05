import { ReactNode } from "react";
import { FaEnvelope, FaFlickr, FaInstagram, FaLinkedin } from "react-icons/fa6";
import CenteredPageContainer from "../components/CenteredPageContainer";

type LinkButton = {
  icon: ReactNode;
  title: string;
  bgClass: string;
  hoverClass: string;
  hoverTextClass?: string;
  url: string;
};

const separator = (
  <div className="flex items-center w-full py-5">
    <div className="flex-grow h-px bg-gray-500" />
    <span className="px-3 text-md text-gray-300">nebo</span>
    <div className="flex-grow h-px bg-gray-500" />
  </div>
);

export default function Contacts() {
  const SocialsLink = ({
    icon,
    title,
    bgClass,
    hoverClass,
    hoverTextClass,
    url,
  }: LinkButton) => {
    return (
      <button
        className={`w-full grow-1 flex gap-2 p-2 ${bgClass} ${hoverClass} ${
          hoverTextClass ?? ""
        } transition hover:cursor-pointer rounded-lg flex justify-center items-center`}
        onClick={() => window.open(url, "_blank")}
      >
        {icon}
        <span>{title}</span>
      </button>
    );
  };

  return (
    <CenteredPageContainer>
      <div>
        <div className="text-center pb-4">
          <span>
            Líbí se vám moje práce a chtěli byste se domluvit na focení nebo
            spolupráci?
          </span>
          <br />
          <span>
            Napište mi zprávu přes formulář níže - ozvu se co nejdříve.
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Kontakt na vás"
            className="w-full mb-4 px-4 py-2 rounded border border-white/10 hover:border-white/50"
          />

          <textarea
            placeholder="Napište svůj vzkaz..."
            className="w-full mb-4 px-4 py-2 rounded border border-white/10 h-30 resize-none hover:border-white/50"
          ></textarea>

          <button className="w-full transition-colors p-2 rounded-lg font-semibold text-white bg-white/5 hover:bg-white hover:text-black cursor-pointer">
            Odeslat
          </button>
        </div>
      </div>

      {separator}

      {/* <span className="block text-center p-2">
        Sledujte mě na sociálních sítích
      </span> */}

      {/* Socials buttons */}
      <div className="w-full flex-wrap sm:flex-nowrap flex gap-2">
        <SocialsLink
          icon={<FaInstagram className="text-xl" />}
          title="vojtechnerad"
          bgClass="bg-pink-600/10"
          hoverClass="hover:bg-pink-600"
          url="https://instagram.com"
        />
        <SocialsLink
          icon={<FaFlickr className="text-xl" />}
          title="vojtechnerad"
          bgClass="bg-gradient-to-r from-[#ff0084]/10 to-[#0063dc]/10"
          hoverClass="hover:bg-gradient-to-r hover:from-[#ff0084] hover:to-[#0063dc]"
          url="https://flickr.com"
        />
        <SocialsLink
          icon={<FaLinkedin className="text-xl" />}
          title="vojtechnerad"
          bgClass="bg-blue-600/10"
          hoverClass="hover:bg-blue-600"
          url="https://linkedin.com"
        />
      </div>

      <div className="pt-2">
        <SocialsLink
          icon={<FaEnvelope className="text-xl" />}
          title="fotograf@vojtechnerad.cz"
          bgClass="bg-white/5"
          hoverClass="hover:bg-white"
          url="mailto:fotograf@vojtechnerad.cz"
          hoverTextClass="hover:text-black"
        />
      </div>
    </CenteredPageContainer>
  );
}
