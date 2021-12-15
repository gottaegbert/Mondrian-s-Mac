/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import terminal from "../../configs/terminal";
import { TerminalData } from "../../types";

const emojis = ["\\(o_o)/", "(˚Δ˚)b", "(^-^*)"];

const getEmoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};

const characters = "MondrainAbstract蒙德里安抽象构成";
// "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789富强民主文明和谐自由平等公正法治爱国敬业诚信友善";

interface HowDareProps {
  setRMRF: (value: boolean) => void;
}

interface TerminalState {
  rmrf: boolean;
  rmrfa: boolean;
  content: JSX.Element[];
}

// rain animation is adopted from: https://codepen.io/P3R0/pen/MwgoKv
//rm -rf my-dream.cpp To avoid war
class HowDareC extends Component<HowDareProps> {
  private $canvas = null as HTMLCanvasElement | null;
  private ctx = null as CanvasRenderingContext2D | null;
  private intervalId = null as any;
  private emoji = getEmoji();
  private font_size = 20;
  private drops = [] as number[];

  componentDidMount() {
    const $container = document.querySelector(
      "#how-dare-container"
    ) as HTMLElement;
    this.$canvas = document.querySelector("#how-dare") as HTMLCanvasElement;
    this.$canvas.height = $container.offsetHeight;
    this.$canvas.width = $container.offsetWidth;
    this.ctx = this.$canvas.getContext("2d");

    const columns = this.$canvas.width / this.font_size;
    this.drops = [];
    // x: x coordinate, 1: y-coordinate
    for (let x = 0; x < columns; x++) this.drops[x] = 1;

    this.intervalId = setInterval(this.rain.bind(this), 33);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  rain() {
    this.ctx = this.ctx as CanvasRenderingContext2D;
    this.$canvas = this.$canvas as HTMLCanvasElement;

    this.ctx.fillStyle = "rgba(1, 1, 1, 0.05)";
    this.ctx.fillRect(0, 0, this.$canvas.width, this.$canvas.height);

    this.ctx.fillStyle = "#0d9fe2";
    this.ctx.font = `${this.font_size}px arial`;

    for (let i = 0; i < this.drops.length; i++) {
      const text = characters[Math.floor(Math.random() * characters.length)];

      this.ctx.fillText(
        text,
        i * this.font_size,
        this.drops[i] * this.font_size
      );

      // sends the drop back to the top randomly after it has crossed the screen
      // adding randomness to the reset to make the drops scattered on the Y axis
      if (
        this.drops[i] * this.font_size > this.$canvas.height &&
        Math.random() > 0.975
      )
        this.drops[i] = 0;

      // increments Y coordinate
      this.drops[i]++;
    }
  }

  render() {
    return (
      <div
        id="how-dare-container"
        className="fixed w-full h-full bg-black text-white"
        onClick={() => this.props.setRMRF(false)}
      >
        <canvas id="how-dare"></canvas>
        <div className="font-avenir absolute  h-28 mx-auto -mt-20 bottom-0 left-10 right-0 top-1/4">
          <div className="text-4xl">{this.emoji}</div>
          <div className="text-3xl mt-4"> You are right!</div>
          <div className="text-3xl mt-4"> The reason:</div>
          <div className="text-2xl">
            {" "}
            In September 1940, London suffered a German blitzkrieg. One night
            Mondrian was sitting in his bedroom when a bomb nearly killed him,
            thanks to the blackout blinds being closed and he escaped the
            shattered glass. After weeks of indiscriminate bombing, he
            recklessly tried to leave London and went first to Liverpool, where
            he boarded a ship for New York.
          </div>
          <div className="mt-4">Click to go back</div>
        </div>
      </div>
    );
  }
}

class HowDareA extends Component<HowDareProps> {
  private $canvas = null as HTMLCanvasElement | null;
  private ctx = null as CanvasRenderingContext2D | null;
  private intervalId = null as any;
  private emoji = getEmoji();
  private font_size = 20;
  private drops = [] as number[];

  componentDidMount() {
    const $container = document.querySelector(
      "#how-dare-container"
    ) as HTMLElement;
    this.$canvas = document.querySelector("#how-dare") as HTMLCanvasElement;
    this.$canvas.height = $container.offsetHeight;
    this.$canvas.width = $container.offsetWidth;
    this.ctx = this.$canvas.getContext("2d");

    const columns = this.$canvas.width / this.font_size;
    this.drops = [];
    // x: x coordinate, 1: y-coordinate
    for (let x = 0; x < columns; x++) this.drops[x] = 1;

    this.intervalId = setInterval(this.rain.bind(this), 33);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  rain() {
    this.ctx = this.ctx as CanvasRenderingContext2D;
    this.$canvas = this.$canvas as HTMLCanvasElement;

    this.ctx.fillStyle = "rgba(1, 1, 1, 0.05)";
    this.ctx.fillRect(0, 0, this.$canvas.width, this.$canvas.height);

    this.ctx.fillStyle = "#e20d0d";
    this.ctx.font = `${this.font_size}px arial`;

    for (let i = 0; i < this.drops.length; i++) {
      const text = characters[Math.floor(Math.random() * characters.length)];

      this.ctx.fillText(
        text,
        i * this.font_size,
        this.drops[i] * this.font_size
      );

      // sends the drop back to the top randomly after it has crossed the screen
      // adding randomness to the reset to make the drops scattered on the Y axis
      if (
        this.drops[i] * this.font_size > this.$canvas.height &&
        Math.random() > 0.975
      )
        this.drops[i] = 0;

      // increments Y coordinate
      this.drops[i]++;
    }
  }

  render() {
    return (
      <div
        id="how-dare-container"
        className="fixed w-full h-full bg-black text-white"
        onClick={() => this.props.setRMRF(false)}
      >
        <canvas id="how-dare"></canvas>
        <div className="font-avenir absolute  h-28 mx-auto -mt-20 bottom-0 left-10 right-0 top-1/4">
          <div className="text-4xl">{this.emoji}</div>
          <div className="text-3xl mt-4"> You are Wrong!</div>
          <div className="text-3xl mt-4">
            {" "}
            Please cd to the directory of "4_Aspects_of_Mondrain_In_London" to
            guess some question and re-select
          </div>

          <div className="mt-4">Click to go back</div>
        </div>
      </div>
    );
  }
}
export default class Terminal extends Component<{}, TerminalState> {
  private history = [] as string[];
  private curHistory = 0;
  private curInputTimes = 0;
  private curDirPath = [] as any;
  private curChildren = terminal as any;
  private commands: {
    [key: string]: { (): void } | { (arg?: string): void };
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      content: [],
      rmrf: false,
      rmrfa: false
    };
    this.commands = {
      cd: this.cd,
      ls: this.ls,
      cat: this.cat,
      clear: this.clear,
      help: this.help
    };
  }

  componentDidMount() {
    this.reset();
    this.generateInputRow(this.curInputTimes);
  }

  reset = (): void => {
    const $terminal = document.querySelector(
      "#terminal-content"
    ) as HTMLElement;
    $terminal.innerHTML = "";
  };

  getCurDirName = () => {
    if (this.curDirPath.length === 0) return "~";
    else return this.curDirPath[this.curDirPath.length - 1];
  };

  getCurChildren = () => {
    let children = terminal as any;
    for (let name of this.curDirPath) {
      children = children.find((item: TerminalData) => {
        return item.title === name && item.type === "folder";
      }).children;
    }
    return children;
  };

  // move into a specified folder
  cd = (args?: string): void => {
    if (args === undefined || args === "~") {
      // move to root
      this.curDirPath = [];
      this.curChildren = terminal;
    } else if (args === ".") {
      // stay in the current folder
      return;
    } else if (args === "..") {
      // move to parent folder
      if (this.curDirPath.length === 0) return;
      this.curDirPath.pop();
      this.curChildren = this.getCurChildren();
    } else {
      // move to certain child folder
      const target = this.curChildren.find((item: TerminalData) => {
        return item.title === args && item.type === "folder";
      });
      if (target === undefined) {
        this.generateResultRow(
          this.curInputTimes,
          <span>{`cd: no such file or directory: ${args}`}</span>
        );
      } else {
        this.curChildren = target.children;
        this.curDirPath.push(target.title);
      }
    }
  };

  // display content of a specified folder
  ls = (): void => {
    let result = [];
    for (let item of this.curChildren) {
      result.push(
        <span
          key={`terminal-result-ls-${this.curInputTimes}-${item.id}`}
          className={`${
            item.type === "file" ? "text-white" : "text-purple-300"
          }`}
        >
          {item.title}
        </span>
      );
    }
    this.generateResultRow(
      this.curInputTimes,
      <div className="grid grid-cols-1 w-full">{result}</div>
    );
  };

  // display content of a specified file
  cat = (args?: string): void => {
    const file = this.curChildren.find((item: TerminalData) => {
      return item.title === args && item.type === "file";
    });

    if (file === undefined) {
      this.generateResultRow(
        this.curInputTimes,
        <span>{`cat: ${args}: No such file or directory`}</span>
      );
    } else {
      this.generateResultRow(this.curInputTimes, <span>{file.content}</span>);
    }
  };

  // clear terminal
  clear = (): void => {
    this.curInputTimes += 1;
    this.reset();
  };

  help = (): void => {
    const help = (
      <ul className="list-disc ml-6 pb-1.5">
        <li>
          <span className="text-red-400">cat {"<file>"}</span> - See the content
          of {"<file>"}
        </li>
        <li>
          <span className="text-red-400">cd {"<dir>"}</span> - Move into
          {" <dir>"}, "cd .." to move to the parent directory, "cd" or "cd ~" to
          return to root
        </li>
        <li>
          <span className="text-red-400">ls</span> - See files and directories
          in the current directory
        </li>
        <li>
          <span className="text-red-400">clear</span> - Clear the screen
        </li>
        <li>
          <span className="text-red-400">help</span> - Display this help menu
        </li>
        <li>
          press <span className="text-red-400">up arrow / down arrow</span> -
          Select history commands
        </li>
        <li>
          press <span className="text-red-400">tab</span> - Auto complete
        </li>
        <li>
          key <span className="text-red-400">words</span> - Choose words
        </li>
        <li>
          <span className="text-red-400">A / B / C</span> and hit enter to
          answer the final question - :)
        </li>
      </ul>
    );
    this.generateResultRow(this.curInputTimes, help);
  };

  autoComplete = (text: string): string => {
    if (text === "") return text;

    const input = text.split(" ");
    const cmd = input[0];
    const args = input[1];

    let result = text;

    if (args === undefined) {
      const guess = Object.keys(this.commands).find((item) => {
        return item.substring(0, cmd.length) === cmd;
      });
      if (guess !== undefined) result = guess;
    } else if (cmd === "cd" || cmd === "cat") {
      const type = cmd === "cd" ? "folder" : "file";
      const guess = this.curChildren.find((item: TerminalData) => {
        return (
          item.type === type && item.title.substring(0, args.length) === args
        );
      });
      if (guess !== undefined) result = cmd + " " + guess.title;
    }
    return result;
  };

  keyPress = (e: React.KeyboardEvent): void => {
    const keyCode = e.key;
    const $input = document.querySelector(
      `#terminal-input-${this.curInputTimes}`
    ) as HTMLInputElement;
    const input_text = $input.value.trim();
    const input = input_text.split(" ");

    if (keyCode === "Enter") {
      // ----------- run command -----------
      this.history.push(input_text);

      const cmd = input[0];
      const args = input[1];

      // we can't edit the past input
      $input.setAttribute("readonly", "true");

      if (input_text.substr(0, 1) === "C") this.setState({ rmrf: true });
      if (input_text.substr(0, 1) === "A") this.setState({ rmrfa: true });
      if (input_text.substr(0, 1) === "B") this.setState({ rmrfa: true });
      else if (cmd && Object.keys(this.commands).includes(cmd)) {
        this.commands[cmd](args);
      } else {
        this.generateResultRow(
          this.curInputTimes,
          <span>{`zsh: command not found: ${cmd}`}</span>
        );
      }

      // point to the last history command
      this.curHistory = this.history.length;

      // generate new input row
      this.curInputTimes += 1;
      this.generateInputRow(this.curInputTimes);
    } else if (keyCode === "ArrowUp") {
      // ----------- previous history command -----------
      if (this.history.length > 0) {
        if (this.curHistory > 0) this.curHistory--;
        const historyCommand = this.history[this.curHistory];
        $input.value = historyCommand;
      }
    } else if (keyCode === "ArrowDown") {
      // ----------- next history command -----------
      if (this.history.length > 0) {
        if (this.curHistory < this.history.length) this.curHistory++;
        if (this.curHistory === this.history.length) $input.value = "";
        else {
          const historyCommand = this.history[this.curHistory];
          $input.value = historyCommand;
        }
      }
    } else if (keyCode === "Tab") {
      // ----------- auto complete -----------
      $input.value = this.autoComplete(input_text);
      // prevent tab outside the terminal
      e.preventDefault();
    }
  };

  focusOnInput = (id: number): void => {
    const input = document.querySelector(
      `#terminal-input-${id}`
    ) as HTMLInputElement;
    input.focus();
  };

  generateInputRow = (id: number): void => {
    const newRow = (
      <div key={`terminal-input-row-${id}`} className="w-full h-6 flex">
        <div className="w-max flex items-center">
          <span className="text-yellow-200">
            Mondrain@MacBook-Pro{" "}
            <span className="text-green-300">{this.getCurDirName()}</span>
          </span>
          <span className="ml-1.5 text-red-400">{">"}</span>
        </div>
        <input
          id={`terminal-input-${id}`}
          className="flex-1 w-full px-1 text-white outline-none bg-transparent"
          onKeyDown={this.keyPress}
          autoFocus={true}
        />
      </div>
    );
    let content = this.state.content;
    content.push(newRow);
    this.setState({ content });
  };

  generateResultRow = (id: number, result: JSX.Element) => {
    const newRow = (
      <div
        key={`terminal-result-row-${id}`}
        className="w-full h-max leading-5 flex"
      >
        {result}
      </div>
    );
    let content = this.state.content;
    content.push(newRow);
    this.setState({ content });
  };

  render() {
    return (
      <div
        className="terminal font-terminal relative nightwind-prevent nightwind-prevent-block w-full h-full bg-gray-800 bg-opacity-90 text-white text-sm font-normal overflow-y-scroll"
        onClick={() => this.focusOnInput(this.curInputTimes)}
      >
        {this.state.rmrf && (
          <HowDareC
            setRMRF={(value: boolean) => this.setState({ rmrf: value })}
          />
        )}
        {this.state.rmrfa && (
          <HowDareA
            setRMRF={(value: boolean) => this.setState({ rmrfa: value })}
          />
        )}
        <div className="w-full h-max pt-2 px-1.5 ">
          Hey, Welcome my Situation puzzle Game! Type{" "}
          <span className="text-red-500">`help`</span> to get started.
          //////////////////////////////////////////////////////////////////////// <br/> <br/>
          <span className="text-blue-500">
            Soup base:  <br/>In the 1930s, Mondrian changed his art style for the
            fifth time. In 1938, Mondrian went to London at the invitation of
            his friend Nicholson.  <br/>In just two years, in September 1940, Mondrian
            desperately wanted to leave London.  <br/>On October 3, 1940, when he
            wrote back to a friend, he said: "In London, art is too difficult."
          </span>
           <br/> <br/>
          You will receive some YesorNo answer to specific questions of
          Mondrain's life on character/friends/work/environment to answer one final
          final question:
          <br/>
          <span className="text-2xl mt-4 text-red-500" >
            Why Mondrain want to leave London in 1938.
          </span>
           <br/>
          <span className="text-yellow-300">
            1.Please enter "cd 4_Aspects_of_Mondrain_In_London" to see the
            question
            <br/>
            2.Then enter "cd personal" to see the specific question
            <br />
            3.Now you can list all question in the section by enter "ls"
            <br />
            4.And use "cat" to access the answer of the question, <br />like "cat 1.Is_Mondrian_cold_personality?"
            <br />
            5.Now you can repeat the process to read all question and use your deduction to come up the final answer!
            <br />
            6.You can use cd .. to return to previous directory
          </span>
        </div>
        <div id="terminal-content" className="mt-2 px-1.5 pb-2 text-blue-300">
          {this.state.content}
        </div>
      </div>
    );
  }
}
