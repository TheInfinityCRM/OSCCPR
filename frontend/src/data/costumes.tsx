import costume01 from "@assets/imgs/costumes/Darth Vader.png";
import costume02 from "@assets/imgs/costumes/Jason Voorhees.png";
import costume03 from "@assets/imgs/costumes/Batman.png";
import costume04 from "@assets/imgs/costumes/Micheal Myers.png";
import costume05 from "@assets/imgs/costumes/Grinch.png";

export const costumes = [
  {
    id: 1,
    name: "Darth Vader",
    image: costume01,
    href:'darthvader',
    data: (
      <p className="leading-loose font-montserrat my-4 text-justify">
        Unleash the dark side at your next event with our premier Darth Vader
        costume character. Transport your guests to a galaxy far, far away and
        make a lasting impression.<br></br>
        <br></br> Our professional Darth Vader character comes fully suited in
        iconic black armor. With flawless embodiment and a commanding presence,
        he will engage your guests in activities like photos, autographs, and
        light-saber duels.<br></br> <br></br>Contact us today to reserve your
        place in Star Wars history.
      </p>
    ),
  },
  {
    id: 2,
    name: "Jason Voorhees",
    image: costume02,
    href:'jasonvoorhees',
    data: (
      <p className="leading-loose font-montserrat my-4 text-justify">
        Summon terror at your event with our chilling Jason the Serial Killer
        costume character. Step into the realm of horror and leave your guests
        trembling.<br></br>
        <br></br> Our professional Jason character embodies the terrifying
        slasher, complete with his iconic mask and tattered clothing. Engage
        your guests with jump scares, eerie photos, and personalized encounters.
        <br></br>
        <br></br>
        Contact us now to reserve your place in the realm of horror.
      </p>
    ),
  },
  {
    id: 3,
    name: "Batman",
    image: costume03,
    href:'batman',
    data: (
      <p className="leading-loose font-montserrat my-4 text-justify">
        Summon the hero within with our Batman costume character. Inspire your
        guests with the legendary Dark Knight at your event.<br></br>
        <br></br>Our professional Batman character embodies the iconic hero,
        complete with the bat symbol and much more. Engage your guests with
        photos, autographs, and superhero advice.<br></br>
        <br></br>Contact us now to reserve your place in Gotham City.
      </p>
    ),
  }, 
  {
    id: 4,
    name: "Michael Myers",
    image: costume04,
    href:'michaelmyres',
    data: (
      <p className="leading-loose font-montserrat my-4 text-justify">
        Summon terror with our Michael Myers costume character. Experience true
        horror as the iconic slasher comes to life at your event.<br></br>
        <br></br> Our professional Michael Myers character embodies the
        relentless killer, complete with chilling mask and worn-out jumpsuit.
        Engage your guests with jump scares and eerie encounters.<br></br>
        <br></br>Contact us now to reserve your place in the world of horror.
      </p>
    ),
  },
  {
    id: 5,
    name: "The Grinch",
    image: costume05,
    href:'grinch',
    data: (
      <p className="leading-loose font-montserrat my-4 text-justify">
        Discover mischief and mayhem with our Grinch character experience.
        Immerse yourself in the enchanting world of the green recluse as he
        comes alive on your special occasion. <br></br>
        <br></br>
        Our professional Grinch character embodies the essence of this iconic
        holiday curmudgeon, complete with his mischievous grin and vibrant
        costume. Engage your guests with playful pranks and unforgettable
        encounters. <br></br>
        <br></br>
        Contact us today to secure your spot in the whimsical realm of the
        Grinch. Let the magic and mischief of this beloved character make your
        event truly memorable.
      </p>
    ),
  },
];
