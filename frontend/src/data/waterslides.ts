import tropical1 from "@assets/imgs/tropical double waterslide.jpeg";
import tropical2 from "@assets/imgs/tropical_slide2.png";
import tropical3 from "@assets/imgs/tropical_slide3.png";
import tropical4 from "@assets/imgs/tropical_slide4.png";

enum status {
  Available = 1,
  SoldOut = 2,
}

export const homeSlides = [
  {
    id: 1,
    Image: tropical1,
    alt: "Slide 1",
    title: "Tropical Double Waterslide",
    oneDayRent: "$500",
    twoDayRent: "$700.00",
    status: status.SoldOut,
  },
  {
    id: 2,
    Image: tropical2,
    alt: "Slide 2",
    title: "Tropical Inferno Waterslide",
    oneDayRent: "$300.00",
    twoDayRent: "$500.00",
    status: status.Available,
  },
  {
    id: 3,
    Image: tropical3,
    alt: "Slide 3",
    title: "Castle Bounce House/Waterslide",
    oneDayRent: "$200.00",
    twoDayRent: "$300.00",
    status: status.Available,
  },
  {
    id: 4,
    Image: tropical4,
    alt: "Slide 4",
    title: "Toddler Bounce House/Slide",
    oneDayRent: "$100.00",
    twoDayRent: "$150.00",
    status: status.Available,
  },
];
