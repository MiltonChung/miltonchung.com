import React from "react";
import { Element } from "react-scroll";
import CSS from "../assets/svg/css.svg";
import Figma from "../assets/svg/figma.svg";
import HTML from "../assets/svg/html.svg";
import Javascript from "../assets/svg/javascript.svg";
import Nodejs from "../assets/svg/nodejs.svg";
import NPM from "../assets/svg/npm.svg";
import Python from "../assets/svg/python.svg";
import Reactsvg from "../assets/svg/react.svg";
import Sass from "../assets/svg/sass.svg";
import Sql from "../assets/svg/sql.svg";
import VSCode from "../assets/svg/vscode.svg";
import Sanity from "../assets/svg/sanity.svg";
import Postman from "../assets/svg/postman.svg";
import Mongoose from "../assets/svg/mongoose.png";
import MongoDB from "../assets/svg/mongodb.svg";
import Express from "../assets/svg/express.svg";
import Typescript from "../assets/svg/typescript.svg";

const Skills = () => {
  return (
    <Element id="skills" className="offset">
      <div className="custom-container skills-styles">
        <div className="skillsTitle">
          <small>What I know</small>
          <h2>My Skills</h2>
          <div className="underline-section" />
        </div>
        <div className="skills-container">
          <div className="box">
            <img src={HTML} alt="HTML" />
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML
            </a>
          </div>
          <div className="box">
            <img src={CSS} alt="CSS" />
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS
            </a>
          </div>
          <div className="box">
            <img src={Sass} alt="Sass" />
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sass
            </a>
          </div>
          <div className="box">
            <img src={Javascript} alt="Javascript" />
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript
            </a>
          </div>
          <div className="box">
            <img src={Typescript} alt="Typescript" />
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript
            </a>
          </div>
          <div className="box">
            <img src={Reactsvg} alt="React" />
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
          </div>
          <div className="box">
            <img src={MongoDB} alt="Mongodb" />
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MongoDB
            </a>
          </div>
          <div className="box">
            <img src={Mongoose} alt="Mongoose" className="mongoose" />
            <a
              href="https://mongoosejs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mongoose
            </a>
          </div>
          <div className="box">
            <img src={Express} alt="Express" />
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Express
            </a>
          </div>
          <div className="box">
            <img src={Nodejs} alt="Nodejs" />
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nodejs
            </a>
          </div>
          <div className="box">
            <img src={NPM} alt="NPM" />
            <a
              href="https://www.npmjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm
            </a>
          </div>
          <div className="box">
            <img src={Python} alt="Python" />
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python
            </a>
          </div>
          <div className="box">
            <img src={Sql} alt="SQL" />
            <a
              href="https://en.wikipedia.org/wiki/SQL"
              target="_blank"
              rel="noopener noreferrer"
            >
              SQL
            </a>
          </div>
          <div className="box">
            <img src={VSCode} alt="Visual Studio Code" />
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual Studio Code
            </a>
          </div>
          <div className="box">
            <img src={Figma} alt="Figma" />
            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma
            </a>
          </div>
          <div className="box">
            <img src={Postman} alt="Postman" />
            <a
              href="https://www.postman.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Postman
            </a>
          </div>
          <div className="box">
            <img src={Sanity} alt="Sanity" />
            <a
              href="https://www.sanity.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sanity
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
