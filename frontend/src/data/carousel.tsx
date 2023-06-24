import grinch from "@assets/imgs/carousel/grinch.png";
import batman from "@assets/imgs/carousel/batman.png";
import myres from "@assets/imgs/carousel/myres.png";
import waterslide from "@assets/imgs/carousel/waterslide.png";
import jason from "@assets/imgs/carousel/jason.png";
import vader from "@assets/imgs/carousel/vader.png";

export const carouselItems = [
    {
      id: 1,
      image: grinch,
      tagline: (
        <>
          Hire <span className="text-[#FFCB05]">The Grinch</span> for your next
          party!
        </>
      ),
      href:'/costumes#grinch'
    },
    {
      id: 2,
      image: batman,
      tagline: (
        <>
          Hire <span className="text-[#FFCB05]">Batman</span> for your next
          party!
        </>
      ),
      href:'/costumes#batman'
    },
    {
      id: 3,
      image: myres,
      tagline: (
        <>
          Hire <span className="text-[#FFCB05]">Michael Myres</span> for your
          next party!
        </>
      ),
      href:'/costumes#michaelmyres'

    },
    {
      id: 4,
      image: waterslide,
      tagline: (
        <>
          Book <span className="text-[#FFCB05]">Inflatables</span> for your next
          party!
        </>
      ),
      href:'/rentals'
    },
    {
      id: 5,
      image: jason,
      tagline: (
        <>
          Hire <span className="text-[#FFCB05]">Jason</span> for your next party!
        </>
      ),
      href:'/costumes#jasonvoorhees'
    },
    {
      id: 6,
      image: vader,
      tagline: (
        <>
          Hire <span className="text-[#FFCB05]">Darth Vader</span> for your next
          party!{" "}
        </>
      ),
      href:'/costumes#darthvader'
    },
  ];
