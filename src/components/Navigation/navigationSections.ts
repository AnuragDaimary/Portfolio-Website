import Resume from "assets/AnuragDaimaryResume.pdf";

const navigationSections = [
  {
    props: {
      href: "/#selectedWork",
    },
    label: "Work",
  },
  {
    props: {
      href: "/about",
    },
    label: "About",
  },
  {
    props: {
      href: Resume,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    label: "Resume",
  },
];

export default navigationSections;