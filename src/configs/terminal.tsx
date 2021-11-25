import { TerminalData } from "../types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi! This is Mondrian, now an designer&developer in Dutch'.
            </div>
            <div className="mt-1">
              Before that, My final painting was broadway boogie woogie
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Machine Learning / Deep Learning / Continual Learning / Meta-Learning / Multi-modal Retrieval"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm open to summer research opportunities for summer 2022 lol."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:renovamenzxh@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Mondrian@gmail.com
              </a>{" "}
              /{" "}
              <a
                className="text-blue-300"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Piet.Mondrian@foxmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/Mondrian
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/Mondrian
              </a>
            </li>
            <li>
              Blog:{" "}
              <a
                className="text-blue-300"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                https://zxh.io
              </a>
            </li>
            <li>
              知乎:{" "}
              <a
                className="text-blue-300"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                "https://www.zhihu.com/people/chao-neng-gui-su"
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
