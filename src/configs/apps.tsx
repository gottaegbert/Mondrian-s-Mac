import FaceTime from "../components/apps/FaceTime";
import Terminal from "../components/apps/Terminal";
// import Safari from "../components/apps/Safari";
import Bear from "../components/apps/Bear";
import VSCode from "../components/apps/VSCode";
import IMessage from "../components/apps/IMessage";
import Finder from "../components/apps/Finder";
import { AppsData } from "../types";

const apps: AppsData[] = [
  // {
  //   id: "launchpad",
  //   title: "Launchpad",
  //   desktop: false,
  //   img: "img/icons/launchpad.png"
  // },
  {
    id: "finder",
    title: "Finder",
    desktop: true,
    show: true,
    img: "img/icons/Finder.png",
    width: 724,
    height: 482,
    content: <Finder />
  },
  {
    id: "Messages",
    title: "Messages",
    desktop: true,
    show: true,
    img: "img/icons/imessage.png",
    width: 724,
    height: 482,
    content: <IMessage />
  },
  {
    id: "facetime",
    title: "FaceTime",
    desktop: true,
    show: false,
    img: "img/icons/facetime.png",
    height: 530,
    content: <FaceTime />
  },
  // {
  //   id: "notes",
  //   title: "notes",
  //   desktop: false,
  //   img: "img/icons/Notes.png"
  // },
  {
    id: "reminders",
    title: "reminders",
    desktop: false,
    img: "img/icons/reminders.png"
  },
  // {
  //   id: "photos",
  //   title: "photos",
  //   desktop: false,
  //   img: "img/icons/photos.png"
  // },
  {
    id: "bear",
    title: "Bear",
    desktop: true,
    show: false,
    width: 860,
    height: 500,
    img: "img/icons/bear.png",
    content: <Bear />
  },
  // {
  //   id: "safari",
  //   title: "Safari",
  //   desktop: true,
  //   show: false,
  //   width: 1024,
  //   minWidth: 375,
  //   minHeight: 200,
  //   img: "img/icons/safari.png",
  //   content: <Safari />
  // },
  {
    id: "vscode",
    title: "P5.js",
    desktop: true,
    show: false,
    width: 400,
    height: 465,
    img: "img/icons/p5js.svg",
    content: <VSCode />
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    show: true,
    width: 720,
    height: 540,
    img: "img/icons/terminal.png",
    content: <Terminal />
  },
  // {
  //   id: "email",
  //   title: "Mail",
  //   desktop: false,
  //   img: "img/icons/mail.png",
  //   link: "mailto:mondrain@gmail.com"
  // },
  // {
  //   id: "github",
  //   title: "Github",
  //   desktop: false,
  //   img: "img/icons/github.png",
  //   link: "https://github.com/Mondrain/"
  // },
  {
    id: "rub",
    title: "rub",
    desktop: false,
    img: "img/icons/rub.png"
  }
];

export default apps;
