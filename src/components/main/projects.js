export const projects = [
  {
    id: getNewId(),
    title: "React Project",
    categories: ["react"],
    imagePath: "/images/1.jpg",
  },
  {
    id: getNewId(),
    title: "React and CSS Project",
    categories: ["react", "css"],
    imagePath: "/images/2.jpg",
  },
  {
    id: getNewId(),
    title: "CSS Project",
    categories: ["css"],
    imagePath: "/images/3.jpg",
  },
  {
    id: getNewId(),
    title: "Javascript and CSS Project",
    categories: ["js", "css"],
    imagePath: "/images/4.jpg",
  },
  {
    id: getNewId(),
    title: "Node Project",
    categories: ["node"],
    imagePath: "/images/5.jpg",
  },
  {
    id: getNewId(),
    title: "React and MUI Project",
    categories: ["react", "mui"],
    imagePath: "/images/6.jpg",
  },
  {
    id: getNewId(),
    title: "React and Node Project",
    categories: ["react", "node"],
    imagePath: "/images/7.jpg",
  },
  {
    id: getNewId(),
    title: "Javascript Project",
    categories: ["js"],
    imagePath: "/images/8.jpg",
  },
  {
    id: getNewId(),
    title: "CSS and Node Project",
    categories: ["css","node"],
    imagePath: "/images/9.jpg",
  },
];

function getNewId() {
  return Math.random().toString(36).slice(2);
}