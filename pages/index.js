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
import { useState, useEffect } from "react";
import Create_Sale2 from '../public/CarCar/CarCar_Create_Sale2.png'
import List_Sales from '../public/CarCar/CarCar_List_Sales.png'
import NavBar from '../public/CarCar/CarCar_Nav.png'
import ServiceAppts from '../public/CarCar/CarCar_Service_Appts.png'
import CarCar_DesignDiagram from '../public/CarCar/CarCar_DesignDiagram.png'
import MME1 from '../public/MealMingle/MMExcalidraw1.png'
import MME2 from '../public/MealMingle/MMExcalidraw2.png'
import MME3 from '../public/MealMingle/MMExcalidraw3.png'
import MME4 from '../public/MealMingle/MMExcalidraw4.png'


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
                {/* <a
                  className="bg-teal-600
                    text-white px-4 py-2 rounded-md ml-8 shadow-md dark:shadow-white"
                  href="Jonathan_Medina_SoftwareEngineerResume.pdf"
                  download="Jonathan_Medina_SoftwareEngineer_Resume"
                >
                  Resume{" "}
                </a> */}
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <h2 className="text-5xl pt-2 pb-4 text-teal-600 font-medium md:text-6xl">
              Jonathan Ceasar Medina
            </h2>
            <h3 className="text-2xl py-4 md:text-3xl dark:text-gray-200">
              Full-Stack Developer, Web Designer, and Cyberpsychologist
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
              Bookstagram. I also love lifting weights, doing yoga, playing
              videogames, and playing tennis when the weather is favorable.
            </p>
            <p
              className="text-md py-5 leading-8 text-gray-100
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
            className="relative mx-auto
                rounded-full w-95 h-95 mt-10 md:h-96 md:w-96 overflow-hidden"
          >
            <Image
              src={headshot}
              layout="responsive"
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
          <div className="lg:flex gap-10" >
            <div className="text-center w-full shadow-lg shadow-blue-300 p-10 rounded-xl my-10 dark:shadow-teal-300">
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

            <div className="text-center w-full shadow-lg shadow-blue-600 p-10 rounded-xl my-10 dark:shadow-yellow-600">
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

            <div className="text-center w-full shadow-lg shadow-green-400 p-10 rounded-xl my-10 dark:shadow-pink-700">
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
              This section showcases some of my projects. Links for the repos are embedded in the titles.
            </p>
          </div>

          {/* Munch Manager */}
          <h3 className="text-2xl pt-6 text-pink-700 dark:text-pink-400">
            {" "}
            <a
              href="https://github.com/JonathanCMedina/MunchManager"
              className="underline"
            >
              Munch Manager
            </a>
            <a href="https://www.youtube.com/shorts/5wd9RWDxK9A"> 🍽️</a>{" "}
          </h3>
          <p className="pt-2 pb-4 dark:text-gray-300">
            Munch Manager is a macronutrient tracking application. Currently it
            is a work in progress, but works to help me practice React Native so
            I can create a web app version and try my hand at mobile
            development. This app aims to work by keeping track of
            protein/carbohydrate/fat intake, weigh-ins, creatine. A bit of a
            stretch goal is to use the camera to scan barcodes to get macro
            information. Stay tuned for the wireframe and application designs!
          </p>

          {/* MealMingle or better */}
          <h3 className="text-2xl pt-6 text-orange-700 dark:text-orange-300">
            <a
              href="https://github.com/JonathanCMedina/MealMingle"
              className="underline"
            >
              {" "}
              MealMingle
            </a>
            <a href="https://youtu.be/eyaMGdYIdUQ?si=orG83I7ZdmNi-3I2">
              🥂
            </a>
          </h3>
          <p className="pt-2 pb-2 dark:text-gray-300">
            MealMingle is the final group project with Hack Reactor. MealMingle
            was created to be a premiere solution to scheduling and organizing
            dinner parties, as well as other events. Thinking of throwing a
            surprise birthday party for a friend at your home? Share the details
            to friends and family so they can be added to the guest list. Or
            what about a movie night in with a few people? MealMingle uses
            RESTful API patterns, backend created with Python and Pydantic
            models, backend authentication used from JWTDown FastAPI Auth
            Library, backend deployed through FastAPI docs, Postgresql as the
            database and managed through Caprover and Docker for
            containerization. Frontend is created with JSX and TailwindCSS,
            frontend authentication were imported from the Galvanize Auth
            Library, and the frontend website is deployed through Gitlab.
          </p>
          <h4 className="pb-4 flex justify-center dark:text-gray-300">
            Please peruse the wireframe designs for MealMingle below!
          </h4>

          {/* pictures section for MealMingle */}
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/2 flex-1">
              <Image
                src={MME1}
                className=""
                width={"100%"}
                height={"25"}
                layout="responsive"
                alt="This screenshot showcases MealMingle's
                About Us, Home Page, and Sign Up wireframe page designs"
              />
            </div>

            <div className="basis-1/2 flex-1">
              <Image
                src={MME2}
                className=""
                width={"100"}
                height={"25"}
                layout="responsive"
                alt="This screenshot showcases MealMingle's
                Login, Main Page, and Create an event wireframe page designs"
              />
            </div>

            <div className="basis-1/2 flex-1">
              <Image
                src={MME3}
                className=""
                width={"100"}
                height={"20"}
                layout="responsive"
                alt="SThis screenshot showcases MealMingle's
                Calendar Week view, Edit an Event, and My Events wireframe page designs"
              />
            </div>

            <div className="basis-1/2 flex-1">
              <Image
                src={MME4}
                className=""
                width={"100"}
                height={"23"}
                layout="responsive"
                alt="This screenshot showcases MealMingle's
                List All Events, Event Detail, and Invite to Event wireframe page designs"
              />
            </div>
          </div>

          {/* Project Beta */}
          <h3 className="text-2xl pt-6 text-green-700 dark:text-green-400">
            <a
              href="https://github.com/JonathanCMedina/CarCar"
              className="underline"
            >
              {" "}
              CarCar
            </a>
            <a href="https://www.youtube.com/shorts/LWVTsHNQIiU"> 🚗 </a>{" "}
          </h3>
          <p className="pt-2 pb-2 dark:text-gray-300">
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
          <h4 className="pb-4 flex justify-center dark:text-gray-300">
            Please take a look at some of the pages and the design diagram below!
          </h4>
          {/* pictures section for the CarCar */}
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={Create_Sale2}
                className=""
                width={"100"}
                height={"53"}
                layout="responsive"
                alt="Screenshot of CarCar's Create a Sale form which includes
                dropdowns for the automobile, the salesperson's information,
                the customer's information, the price of the vehicle, and a create button"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={NavBar}
                className=""
                width={"100"}
                height={"75"}
                layout="responsive"
                alt="Screenshot of CarCar's navigation bar which includes manufacturers,
                models, automobiles, technicians, service appointments, salespeople, customers,
                and sales. All of these also have their 'add a...' counterpart. There is
                also a button for viewing Service History. "
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                src={List_Sales}
                className=""
                width={"125"}
                height={"50"}
                layout="responsive"
                alt="Screenshot of CarCar's List of Sales,
                showcasing column titles of salesperson first name,
                salesperson last name, employee number, purchaser first name,
                purchaser last name, VIN, and price of sale.
                Above the table of lists is a search bar"
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                src={ServiceAppts}
                className=""
                width={"100"}
                height={"37"}
                layout="responsive"
                alt="Screenshot of CarCar's service appointments list
                with one entry including VIN, VIP status, customer name,
                date, time of appointment, technician, reason for appointment,
                and status section with buttons of Finish and Cancel to update the entry"
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                src={CarCar_DesignDiagram}
                className=""
                width={"100"}
                height={"35"}
                layout="responsive"
                alt="Excalidraw diagram of CarCar's microservice architecture.
                To the left is the Service microservice with technicians, appointments,
                and service appointment lists, in the middle is the Inventory
                microservice which holds the manufacturer, models, automobiles,
                and automobile lists, and to the right is the Sales microservice
                that holds the customers, salesperson, sales, and list of sales"
              />
            </div>
          </div>

          {/* Project Alpha */}
          <h3 className="text-2xl pt-6 text-purple-800 dark:text-purple-300">
            <a
              href="https://github.com/JonathanCMedina/Project-and-Task-Manager"
              className="underline"
            >
              Project and Task Manager Web Application
            </a>
            <a href="https://www.youtube.com/watch?v=ftJI8kc2qvU"> 📑</a>{" "}
          </h3>
          <p className="pt-2 pb-4 dark:text-gray-300">
            {" "}
            The Project and Task Manager Web Application (Also referred as Project Alpha) was my first ever
            full-stack coding project created during my time with Hack Reactor.
            The Project and Task Manager allows users to sign up and log in,
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
          <h4 className="pb-4 flex justify-center dark:text-gray-300">
            Please take a look at some of the pages from my very first project below!
          </h4>

          {/* pictures section for the Project Alpha */}

          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={project_alpha_1}
                className=""
                width={"100%"}
                height={"95"}
                layout="responsive"
                alt="Screenshot of Project and Task Manager Web Application's
                'My Projects' list view which includes a column of project names,
                and a column of Number of tasks assigned within those projects"
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                src={project_alpha_2}
                className=""
                width={"100%"}
                height={"95"}
                layout="responsive"
                alt="A screenshot of the 'My Tasks' page for the
                Project and Task Manager Web Application. This showcases a table
                with rows of Name, Start Date, Due Date, and Is Completed for numerous
                tasks contained within this specific project."
              />
            </div>
          </div>


        </section>
        {/* Contact Form Section  */}
        <section>
          <div>
            <h3 className="text-2xl pt-10 pb-5 flex justify-center dark:text-gray-200">
              Any questions or inquiries? Please contact me at my email below!{" "}
            </h3>
            {/* <ContactForm /> */}
            <h2 className="text-xl pb-5 underline flex justify-center text-blue-500 dark:text-teal-300">
            <a href="mailto:jonathan.c.medina.x@gmail.com"> Jonathan.C.Medina.x@gmail.com </a>
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}
