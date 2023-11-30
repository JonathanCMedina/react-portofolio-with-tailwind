import Head from "next/head";
import {BsFillMoonStarsFill, BsPhone, } from 'react-icons/bs';
import {AiFillGithub, AiFillGitlab, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from "next/image";
import headshot from '../public/headshot1.jpeg';
import react_logo from '../public/react_logo.png';
import python_logo from '../public/python_logo.png';
import cubes from '../public/cubes.png';
import project_alpha_1 from '../public/project_alpha_1.png';
import project_alpha_2 from '../public/project_alpha_2.png';
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jonathan Ceasar Medina Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 px-10 pb-10 md:px-20 lg:40 dark:bg-gray-900">
        <section className="">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-400">
              {" "}
              developed by Jc
            </h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-2xl dark:text-gray-200">
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
              </li>
              <li>
                <a
                  className="bg-gradient-to-b bg-teal-600
                    text-white px-4 py-2 rounded-md ml-8 shadow-md dark:shadow-white"
                  href="Jonathan_Medina_SoftwareEngineerResume.pdf"
                  download="Jonathan_Medina_SoftwareEngineer_Resume"
                >
                  Resume{" "}
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Jonathan Ceasar Medina
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
              Full-Stack Junior Software Engineer and Cyberpsychologist
            </h3>

            {/* cards for the "about me" section */}

            <p
              className="text-md py-5 leading-8 text-gray-800
              md:text-xl max-w-xl mx-auto dark:text-gray-300"
            >
              Hi there! Thanks for stopping by my portfolio website. My nickname
              is Jc and I am a Software Engineer with the goal of working as a
              full-stack engineer.
            </p>
            <p
              className="text-md py-5 leading-8 text-gray-800
              md:text-xl max-w-xl mx-auto dark:text-gray-300"
            >
              My interests revolve around the effects of technology on our
              individual psychology, hence the Masters degree in
              Cyberpsychology.
            </p>
            <p
              className="text-md py-5 leading-8 text-gray-800
              md:text-xl max-w-xl mx-auto dark:text-gray-300"
            >
              On my free time I enjoy coding, listening to psychology
              audiobooks, and reading novels featured on BookTok and
              Bookstagram. I also enjoy lifting weights, doing yoga, and playing
              tennis when the weather is favorable.
            </p>
            <p
              className="text-md leading-8 text-gray-100
              md:text-xl max-w-xl mx-auto dark:text-gray-300"
            >
              Realistically, I spend most of my free time playing gacha games,
              looking at memes, watching TikTok reels on Instagram, Instagram
              Reels on YouTube, and YouTube videos on Twitter/X. Please scroll
              below if you would like to learn more!
            </p>
          </div>

          {/* socials section */}
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500 dark:text-gray-300">
            <a href="https://github.com/JonathanCMedina">
              {" "}
              <AiFillGithub className="text-black dark:text-white" />{" "}
            </a>
            <a href="https://gitlab.com/Jonathan.C.Medina">
              {" "}
              <AiFillGitlab className="text-orange-500" />{" "}
            </a>
            <a href="https://www.linkedin.com/in/jonathan-ceasar-medina/">
              {" "}
              <AiFillLinkedin className="text-blue-600" />{" "}
            </a>
            <a href="https://youtu.be/xm3YgoEiEDc">
              {" "}
              <AiFillYoutube className="text-red-500" />{" "}
            </a>
          </div>

          {/* pic section - hopefully I can get a claymation of me done that'd be so cool */}
          <div
            className="relative mx-auto bg-gradient-to-b from-teal-400 to-orange-300
                rounded-full w-100 h-100 mt-20 md:h-96 md:w-96 overflow-hidden"
          >
            <Image
              src={headshot}
              layout="fill"
              objectFit="cover"
              alt="headshot picture of Jonathan Medina"
            />
          </div>
        </section>

        {/* Skills section */}
        <section>
          <div>
            <h3 className="text-3xl py-1 mt-10 dark:text-gray-200 flex justify-center">
              Skills
            </h3>
            <p className="text-md py-2 leading-8 md:text-xl text-gray-800 dark:text-gray-300">
              Below are information related to the engineering skills I have
              developed throughout my journey as a software engineering student.
              While these cards are not extensive, I am continually learning and
              open to learning about more technology and tools.
            </p>
          </div>

          {/* cards section */}
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg shadow-blue-300 p-10 rounded-xl my-10 dark:shadow-teal-300">
              <Image
                src={react_logo}
                width={100}
                height={100}
                alt="react logo"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                {" "}
                Frontend Development and Deployment
              </h3>
              <p className="dark:text-gray-300">
                Frontend technical tools to deliver a visually pleasing
                experience
              </p>
              <h4 className="py-4 text-teal-600">
                {" "}
                Programming languages and tools{" "}
              </h4>
              <div className="text-gray-800 py-1 dark:text-gray-300">
                <p>
                  HTML, CSS, JavaScript, React.js, TailwindCSS, Bootstrap,
                  Redux, Gitlab, Cloudflare, Vercel, Websockets
                </p>
              </div>
            </div>

            <div className="text-center shadow-lg shadow-blue-600 p-10 rounded-xl my-10 dark:shadow-yellow-600">
              <Image
                src={python_logo}
                width={100}
                height={100}
                alt="python logo"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                {" "}
                Backend Development and Testing{" "}
              </h3>
              <p className="dark:text-gray-300">
                {" "}
                Backend technical tools for data access and operational
                functionality{" "}
              </p>
              <h4 className="py-4 text-teal-600">
                {" "}
                Programming languages and tools{" "}
              </h4>
              <div className="text-gray-800 py-1 dark:text-gray-300">
                <p>
                  Python, Django, PostgreSQL, Insomnia, RESTful APIs, Swagger,
                  FastAPI, Next.js, SQLite, Using 3rd-Party Data
                </p>
              </div>
            </div>

            <div className="text-center shadow-lg shadow-green-400 p-10 rounded-xl my-10 dark:shadow-pink-700">
              <Image
                src={cubes}
                width={100}
                height={100}
                alt="photo of cubes forming a larger cube"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                {" "}
                System Design Tools, Modeling, and Architecture{" "}
              </h3>
              <p className="dark:text-gray-300">
                {" "}
                Application creation practices that allow for modularity,
                scalability, or ease of use{" "}
              </p>
              <h4 className="py-4 text-teal-600">
                {" "}
                Project design practices and philosophies{" "}
              </h4>
              <div className="text-gray-800 py-1 dark:text-gray-300">
                <p>
                  Domain-Driven Design, Docker Containerization, Microservices,
                  Single Page Applications, (SPA), Polling, Authentication,
                  Publisher/Subscriber, Polling, Queues
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* start of the projects / portfolio section */}
        <section>
          <div>
            <h3 className="text-3xl py-1 flex justify-center dark:text-gray-200">
              {" "}
              Projects{" "}
            </h3>

            <p className="text-lg py-2 leading-8 md:text-xl text-gray-800 dark:text-gray-300">
              This section showcases some of my projects.
            </p>
          </div>

          {/* MealMingle or better */}
          <h3 className="text-2xl pt-6 text-purple-800 dark:text-purple-300">
            {" "}
            MealMingle{" "}
            <a href="https://youtu.be/eyaMGdYIdUQ?si=orG83I7ZdmNi-3I2">
              🍽️🥂🎉
            </a>{" "}
          </h3>
          <p className="pt-2 pb-4 dark:text-gray-300">Words</p>

          {/* Project Beta */}
          <h3 className="text-2xl pt-6 text-green-700 dark:text-green-400">
            {" "}
            CarCar <a href="https://www.youtube.com/shorts/LWVTsHNQIiU">
              🚗{" "}
            </a>{" "}
          </h3>
          <p className="pt-2 pb-4 dark:text-gray-300">
            CarCar is the second full-stack coding project through Hack Reactor.
            CarCar emulates a car dealership website with three distinct parts:
            Inventory, Sales, and Services. This project was created as a pair
            programming project with my colleague Gabe Svetcos. Here are the
            links to his{" "}
            <a href="https://github.com/Gsvetcos" className="text-blue-500">
              {" "}
              Github{" "}
            </a>{" "}
            and{" "}
            <a href="https://gitlab.com/Gsvetcos" className="text-orange-500">
              {" "}
              Gitlab
            </a>
            . There are three distinct parts that were established as
            microservices with interactivity between each via polling. Gabe
            worked on the Services, I worked on Sales, and we both contributed
            toward Inventory. This is the first project that we have created
            using JavaScript and React. Stylings were created using Bootstrap.
            Please take a look at the Readme file as we crafted it very
            meticulously! 😁
          </p>

          {/* Project Alpha */}
          <h3 className="text-2xl pt-6 text-purple-800 dark:text-purple-300">
            {" "}
            Project and Task Manager Web Application{" "}
            <a href="https://www.youtube.com/watch?v=ftJI8kc2qvU">📑</a>{" "}
          </h3>
          <p className="pt-2 pb-4 dark:text-gray-300">
            {" "}
            The Project and Task Manager Web Application was my first ever
            full-stack coding project created during my time with Hack Reactor.
            The Project and Task Manager allows users to signup and log in,
            create projects, create tasks within those projects, and keep track
            progress to stay focused and on task. This application was created
            using Python and Django for backend endpoints and authentication.
            Frontend was created with base HTML. Stylings were created primarily
            with CSS, the moving background and the stylized icons were created
            with JavaScript. The backend functionality and basic frontend
            stylings for Project and Task Manager Web Application were created
            in one day, with stretch goals for further stylings spanned four
            days.{" "}
          </p>

          {/* pictures section for the portfolio */}
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            {/* Carousel attempt */}

            <div className="basis-1/3 flex-1">
              <Image
                src={project_alpha_1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                src={project_alpha_2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
