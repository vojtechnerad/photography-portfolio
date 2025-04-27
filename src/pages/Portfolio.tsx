import velka1 from "../assets/portfolio-pictures/neradvojtech-velka1.jpg";
import velka2 from "../assets/portfolio-pictures/neradvojtech-velka2.jpg";
import mala1 from "../assets/portfolio-pictures/neradvojtech-mala1.jpg";
import mala2 from "../assets/portfolio-pictures/neradvojtech-mala2.jpg";
import street1 from "../assets/portfolio-pictures/neradvojtech-street1.jpg";
import street2 from "../assets/portfolio-pictures/neradvojtech-street2.jpg";
import detail1 from "../assets/portfolio-pictures/neradvojtech-detail1.jpg";
import detail2 from "../assets/portfolio-pictures/neradvojtech-detail2.jpg";
import story1 from "../assets/portfolio-pictures/neradvojtech-story1.jpg";
import reklama1 from "../assets/portfolio-pictures/vojtechnerad-reklama1.jpg";

export default function Portfolio() {
  return (
    <div className="columns-4">
      <img src={velka1} alt="" />
      <img src={velka2} alt="" />
      <img src={mala1} alt="" />
      <img src={mala2} alt="" />
      <img src={street1} alt="" />
      <img src={street2} alt="" />
      <img src={detail1} alt="" />
      <img src={detail2} alt="" />
      <img src={story1} alt="" />
      <img src={reklama1} alt="" />
    </div>
  );
}
