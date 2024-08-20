import "./index.css";
import "./App.css";

import fotograf from "./assets/images/pp-web-site.jpg";

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-50 font-mono">
      {/* Header Section */}
      <header className="flex-grow bg-gray-200 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
          {/* Header */}
          <div className="flex items-center mb-6 justify-between">
            <div className="mx-16">
              <img
                src={fotograf}
                alt=""
                className="w-64  h-48 rounded-full mr-6 shadow-lg"
              />
            </div>
            <div className="mr-32">
              <div>
                <p className="text-4xl font-bold text-gray-800">
                  Mehmet Ali Yazıcı
                </p>
                <p className="text-xl text-gray-600 ">
                  Cloud - DevOps Engineer{" "}
                </p>
                <p className="text-sm text-gray-500">Türkiye, Ankara</p>
              </div>
            </div>
          </div>
          <div className=" p-6 rounded-lg bg-white shadow-2xl mb-8 ">
            {/* Hakkımda kısmı */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex gap-2">
                <div className="w-[20px] my-1">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="user-tie"
                    className="svg-inline--fa fa-user-tie "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-black ">
                    About Me
                  </h2>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                I am a 4th-year Computer Engineering student at Karadeniz
                Technical University, where I have developed a deep
                understanding of fundamental algorithms and coding skills. My
                academic journey has provided me with a strong foundation in C,
                C++, Python, Linux, and object-oriented programming. Over the
                past year, I have been particularly focused on expanding my
                expertise in AWS and DevOps, for which I am currently
                participating in a specialized bootcamp to further enhance my
                skills.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I am passionate about learning, open to new ideas, and committed
                to continuous self-improvement. My goal is to stay at the
                forefront of technological advancements and apply my knowledge
                to solve real-world problems effectively.
              </p>
            </div>
            {/* İş Deneyimi */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-10">
              <div className="flex gap-1 ">
                <div className="w-[25px] my-1">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="graduation-cap"
                    className="svg-inline--fa fa-graduation-cap "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-black">
                    Experience
                  </h3>
                </div>
              </div>
              <p className="text-xl font-semibold text-black- mb-2">BK Mobil</p>
              <p>Devops Intern</p>
              <p>2024 August</p>
            </div>
            {/* Eğitim bilgileri */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-10">
              <div className="flex gap-1">
                <div className="w-[20px] my-1">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="archive"
                    className="svg-inline--fa fa-archive "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-black">
                    Education
                  </h3>
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold text-black- mb-2">
                  Karadeniz Technical University
                </p>
                <p className="text-lg text-gray-700 mb-1">Bachelor's Degree</p>
                <p className="text-lg text-gray-700 mb-1">
                  Computer Engineering
                </p>
                <p className="text-lg text-gray-700 mb-1">2020 - 2025</p>
                <div>
                  <p className="text-xl font-semibold text-black- mt-4">
                    Clarusway
                  </p>
                  <p className="text-lg text-gray-700 mb-1">
                    AWS-DevOps BootCamp
                  </p>
                  <p className="text-lg text-gray-700 mb-1">2023-2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-2xl mb-8">
            <div className="flex gap-2">
              <div className="w-[20px] my-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="tasks"
                  className="svg-inline--fa fa-tasks "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                  ></path>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Portfolio
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  AWS Capstone Project
                </h3>
                <p className="text-lg mb-4">
                  I am working on deploying a web application built with the
                  Django Framework on AWS Cloud Infrastructure. This project
                  involves configuring various AWS services to ensure
                  scalability, security, and high availability of the
                  application. Detailed documentation and the source code are
                  available on my GitHub repository.{" "}
                </p>
                <a
                  href="https://github.com/proje"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Projeyi Görüntüle
                </a>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Proje 2</h3>
                <p className="text-lg mb-4">porje 2 açıklama</p>
                <a
                  href="https://github.com/githublink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Projeyi Görüntüle
                </a>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Skills</h3>
                <div className="flex gap-2">
                  <div>
                    <button className="bg-gray-600 text-white rounded-lg px-2">
                      Linux
                    </button>
                  </div>

                  <div>
                    <button className="bg-gray-600 text-white rounded-lg px-2">
                      Python
                    </button>
                  </div>
                  <div>
                    <button className="bg-gray-600 text-white rounded-lg px-2">
                      Terraform
                    </button>
                  </div>

                  <div>
                    <button className="bg-gray-600 text-white rounded-lg px-2">
                      Docker
                    </button>
                  </div>
                  <div>
                    <button className="bg-gray-600 text-white rounded-lg px-2">
                      SQL
                    </button>
                  </div>
                  <div>
                    <button className="bg-gray-600 text-white rounded-lg px-2">
                      Kubernetes
                    </button>
                  </div>

                  <div>
                    <button className="bg-gray-600 text-white rounded-lg px-2">
                      CI/CD
                    </button>
                  </div>
                  <div>
                    <button className="bg-gray-600 text-white rounded-lg px-2">
                      Git
                    </button>
                  </div>
                </div>
                <div className="mt-2 gap-2 flex gap-2">
                  <div>
                    <button className="bg-gray-600 text-white rounded-lg px-2">
                      AWS
                    </button>
                  </div>
                  <div>
                    <button className="bg-gray-600 text-white rounded-lg px-2">
                      Jenkins
                    </button>
                  </div>
                  <div>
                    <button className="bg-gray-600 text-white rounded-lg px-2">
                      GitHub Actions
                    </button>
                  </div>
                  <div>
                    <button className="bg-gray-600 text-white rounded-lg px-2">
                      BitBucket Pipelines
                    </button>
                  </div>
                  <div>
                    <button className="bg-gray-600 text-white rounded-lg px-2">
                      SDLC
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <footer className="bg-gray-500 p-6 text-center">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center ">
          <div className="mb-2">
            <a
              href="https://github.com/MehmetAliYZC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-800 transition duration-300"
            >
              GitHub
            </a>
          </div>

          <div className="mb-2">
            <a
              href="tel:+05050519185"
              className="text-black hover:text-blue-800 transition duration-300"
            >
              05050519185
            </a>
          </div>
          <div className="mb-2">
            <a
              href="mailto:iam@mehmetaliyazici.com"
              className="text-black hover:text-blue-800 transition duration-300"
            >
              iam@mehmetaliyazici.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
