// ----------------- BOX BRAIDS -----------------
import boxFront from "../images/braids/box-braids/front.webp";
import boxBack from "../images/braids/box-braids/back.webp";
import boxLeft from "../images/braids/box-braids/left.webp";
import boxRight from "../images/braids/box-braids/right.webp";
import boxOverall from "../images/braids/box-braids/overall.webp";

// ----------------- BOHO BRAIDS -----------------
import bohoFront from "../images/braids/boho-braids/front.webp";
import bohoBack from "../images/braids/boho-braids/back.webp";
import bohoLeft from "../images/braids/boho-braids/left.webp";
import bohoRight from "../images/braids/boho-braids/right.webp";
import bohoOverall from "../images/braids/boho-braids/overall.webp";

// ----------------- KNOTLESS BOX BRAIDS -----------------
import knotlessFront from "../images/braids/knotless-box-braids/front.webp";
import knotlessBack from "../images/braids/knotless-box-braids/back.webp";
import knotlessLeft from "../images/braids/knotless-box-braids/left.webp";
import knotlessRight from "../images/braids/knotless-box-braids/right.webp";
import knotlessOverall from "../images/braids/knotless-box-braids/overall.webp";

// ----------------- CORNROWS -----------------
import cornFront from "../images/braids/cornrows/front.webp";
import cornBack from "../images/braids/cornrows/back.webp";
import cornLeft from "../images/braids/cornrows/left.webp";
import cornRight from "../images/braids/cornrows/right.webp";
import cornOverall from "../images/braids/cornrows/overall.webp";

// ----------------- FULANI BRAIDS -----------------
import fulaniFront from "../images/braids/fulani-braids/front.webp";
import fulaniBack from "../images/braids/fulani-braids/back.webp";
import fulaniLeft from "../images/braids/fulani-braids/left.webp";
import fulaniRight from "../images/braids/fulani-braids/right.webp";
import fulaniOverall from "../images/braids/fulani-braids/overall.webp";

// ----------------- SENEGALSE TWISTS -----------------
import senegalFront from "../images/braids/senegalese-twists/front.webp";
import senegalBack from "../images/braids/senegalese-twists/back.webp";
import senegalLeft from "../images/braids/senegalese-twists/left.webp";
import senegalRight from "../images/braids/senegalese-twists/right.webp";
import senegalOverall from "../images/braids/senegalese-twists/overall.webp";

// ----------------- HAVANA TWISTS -----------------
import havanaFront from "../images/braids/havana-twists/front.webp";
import havanaBack from "../images/braids/havana-twists/back.webp";
import havanaLeft from "../images/braids/havana-twists/left.webp";
import havanaRight from "../images/braids/havana-twists/right.webp";
import havanaOverall from "../images/braids/havana-twists/overall.webp";

// ----------------- FAUX LOCS -----------------
import fauxFront from "../images/braids/faux-locs/front.webp";
import fauxBack from "../images/braids/faux-locs/back.webp";
import fauxLeft from "../images/braids/faux-locs/left.webp";
import fauxRight from "../images/braids/faux-locs/right.webp";
import fauxOverall from "../images/braids/faux-locs/overall.webp";

// ----------------- BUTTERFLY LOCS -----------------
import butterflyFront from "../images/braids/butterfly-locs/front.webp";
import butterflyBack from "../images/braids/butterfly-locs/back.webp";
import butterflyLeft from "../images/braids/butterfly-locs/left.webp";
import butterflyRight from "../images/braids/butterfly-locs/right.webp";
import butterflyOverall from "../images/braids/butterfly-locs/overall.webp";

// ----------------- BANTU KNOTS -----------------
import bantuFront from "../images/braids/bantu-knots/front.webp";
import bantuBack from "../images/braids/bantu-knots/back.webp";
import bantuLeft from "../images/braids/bantu-knots/left.webp";
import bantuRight from "../images/braids/bantu-knots/right.webp";
import bantuOverall from "../images/braids/bantu-knots/overall.webp";

// ----------------- STITCH BRAIDS -----------------
// import stitchFront from "../images/braids/stitch-braids/front.webp";
// import stitchBack from "../images/braids/stitch-braids/back.webp";
// import stitchLeft from "../images/braids/stitch-braids/left.webp";
// import stitchRight from "../images/braids/stitch-braids/right.webp";
// import stitchOverall from "../images/braids/stitch-braids/overall.webp";

// ----------------- LOCS -----------------
import locsFront from "../images/braids/locs/front.webp";
import locsBack from "../images/braids/locs/back.webp";
import locsLeft from "../images/braids/locs/left.webp";
import locsRight from "../images/braids/locs/right.webp";
import locsOverall from "../images/braids/locs/overall.webp";

// ----------------- TWISTS -----------------
import twistsFront from "../images/braids/twists/front.webp";
import twistsBack from "../images/braids/twists/back.webp";
import twistsLeft from "../images/braids/twists/left.webp";
import twistsRight from "../images/braids/twists/right.webp";
import twistsOverall from "../images/braids/twists/overall.webp";

// ----------------- CROCHET BRAIDS -----------------
import crochetFront from "../images/braids/crochet-braids/front.webp";
import crochetBack from "../images/braids/crochet-braids/back.webp";
import crochetLeft from "../images/braids/crochet-braids/left.webp";
import crochetRight from "../images/braids/crochet-braids/right.webp";
import crochetOverall from "../images/braids/crochet-braids/overall.webp";

// ----------------- FINAL DATA ARRAY -----------------

const BRAIDS = [
  {
    id: "box-braids",
    name: "Box Braids",
    description:
      "Classic individual braids with small square sections. Versatile, long-lasting, and great for styling.",
    images: {
      front: boxFront,
      back: boxBack,
      left: boxLeft,
      right: boxRight,
      overall: boxOverall,
    },
  },
  {
    id: "boho-braids",
    name: "Boho Braids",
    description:
      "Loose, textured braids with curls or waves for a soft, bohemian look.",
    images: {
      front: bohoFront,
      back: bohoBack,
      left: bohoLeft,
      right: bohoRight,
      overall: bohoOverall,
    },
  },
  {
    id: "knotless-box-braids",
    name: "Knotless Box ",
    description:
      "Knot-free braiding method that gives a natural, lightweight finish.",
    images: {
      front: knotlessFront,
      back: knotlessBack,
      left: knotlessLeft,
      right: knotlessRight,
      overall: knotlessOverall,
    },
  },
  {
    id: "cornrows",
    name: "Cornrows",
    description:
      "Tight braids close to the scalp, styled in straight or curved patterns.",
    images: {
      front: cornFront,
      back: cornBack,
      left: cornLeft,
      right: cornRight,
      overall: cornOverall,
    },
  },
  {
    id: "fulani-braids",
    name: "Fulani Braids",
    description:
      "African-inspired braids with center parting, beads, and side cornrows.",
    images: {
      front: fulaniFront,
      back: fulaniBack,
      left: fulaniLeft,
      right: fulaniRight,
      overall: fulaniOverall,
    },
  },
  {
    id: "senegalese-twists",
    name: "Senegalese Twists",
    description:
      "Smooth rope-like twists known for elegance and long-lasting wear.",
    images: {
      front: senegalFront,
      back: senegalBack,
      left: senegalLeft,
      right: senegalRight,
      overall: senegalOverall,
    },
  },
  {
    id: "havana-twists",
    name: "Havana Twists",
    description:
      "Chunky, lightweight twists that give a full and textured appearance.",
    images: {
      front: havanaFront,
      back: havanaBack,
      left: havanaLeft,
      right: havanaRight,
      overall: havanaOverall,
    },
  },
  {
    id: "faux-locs",
    name: "Faux Locs",
    description:
      "Loc-style protective look created by wrapping extensions around braids.",
    images: {
      front: fauxFront,
      back: fauxBack,
      left: fauxLeft,
      right: fauxRight,
      overall: fauxOverall,
    },
  },
  {
    id: "butterfly-locs",
    name: "Butterfly Locs",
    description:
      "Distressed, textured locs with loops that give a soft boho appearance.",
    images: {
      front: butterflyFront,
      back: butterflyBack,
      left: butterflyLeft,
      right: butterflyRight,
      overall: butterflyOverall,
    },
  },
  {
    id: "bantu-knots",
    name: "Bantu Knots",
    description:
      "Small twisted knots with deep African cultural roots and iconic look.",
    images: {
      front: bantuFront,
      back: bantuBack,
      left: bantuLeft,
      right: bantuRight,
      overall: bantuOverall,
    },
  },
  // {
  //   id: "stitch-braids",
  //   name: "Stitch Braids",
  //   description:
  //     "Braids made with precise horizontal lines for a neat stitched appearance.",
  //   images: {
  //     front: stitchFront,
  //     back: stitchBack,
  //     left: stitchLeft,
  //     right: stitchRight,
  //     overall: stitchOverall,
  //   },
  // },
  {
    id: "locs",
    name: "Locs",
    description:
      "Rope-like strands formed by matting or twisting hair, rich in culture.",
    images: {
      front: locsFront,
      back: locsBack,
      left: locsLeft,
      right: locsRight,
      overall: locsOverall,
    },
  },
  {
    id: "twists",
    name: "Twists",
    description:
      "Two-strand twists that create a natural, lightweight, textured style.",
    images: {
      front: twistsFront,
      back: twistsBack,
      left: twistsLeft,
      right: twistsRight,
      overall: twistsOverall,
    },
  },
  {
    id: "crochet-braids",
    name: "Crochet Braids",
    description:
      "Extensions looped into cornrows using a crochet needle — fast & flexible.",
    images: {
      front: crochetFront,
      back: crochetBack,
      left: crochetLeft,
      right: crochetRight,
      overall: crochetOverall,
    },
  },
];

export default BRAIDS;
