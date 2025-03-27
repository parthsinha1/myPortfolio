import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from '../styles/resume.module.css'

export default function Resume() {
  return (
<>
    <Header />
    <main className={`${styles.aboutPage} text-[var(--text-main)] flex flex-col justify-start pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab`}>
    {/* intro */}
    <section className="mb-4 sm:mb-8">
        <div className="flex flex-row justify-between">
            <h1 className="text-[1.0rem] sm:text-[1.5rem] font-josefin-sans font-semibold">Parth Sinha</h1>
            <a
                href="https://docs.google.com/document/d/158FhvnPP9tk1L_aoYRZekQ2SvgrtrhFPRvct8XtrdRQ/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base"
            >
                pdf version
            </a>
        </div>
        <p className="text-sm sm:text-base">
            Rutgers student passionate about full-stack development, specifically designing and developing high quality user interfaces, testing and debugging, and optimizing data retrieval and workflow efficiency.
        </p>
    </section>

    {/* education */}
    <section className="mb-4 sm:mb-8">
        <h5 className="text-sm sm:text-base tracking-widest font-josefin-sans">education</h5>
        <hr className="border-[var(--hr)] w-full mb-2" />
        <p className="text-sm sm:text-base font-bold">Rutgers University-New Brunswick</p>
        <p className="text-sm sm:text-base">B.S. Computer Science</p>
        <p className="text-sm sm:text-base">Sep 2021 - May 2025</p>
        <ul className="text-xs sm:text-sm list-disc pl-6">
            <li><span className="font-bold">Accolades:</span> Chancellor’s Scholarship, Scarlet Scholarship</li>
            <li><span className="font-bold">Relevant Coursework:</span> DSA, Deep Learning, Databases, Data Management, Computer Architecture, ML, Data Structures</li>
        </ul>
    </section>

    {/* experience */}
    <section className="mb-4 sm:mb-8">
    <h5 className="text-sm sm:text-base tracking-widest font-josefin-sans">experience</h5>
    <hr className="border-[var(--hr)] w-full mb-2" />
    <p className="text-sm sm:text-base italic font-semibold">Web Developer Intern</p>
    <p className="text-sm sm:text-base">Resilience, Inc.</p>
    <ul className="text-xs sm:text-sm list-disc pl-6 mb-2">
            <li>Managing and updating mylearningtools.org and myselena.org, resolving errors, updating plugins, and uploading content to promote social emotional curriculum</li>
            <li>Collaboration with the IT department to develop projects, utilizing WordPress to enhance website functionality.</li>
            <li>Analyzing technical requirements to determine user needs and resolved conflicts within teams to prioritize content criteria.</li>
    </ul>

    <p className="text-sm sm:text-base italic font-semibold">Warehouse Operations Specialist</p>
    <p className="text-sm sm:text-base">Amazon</p>
    <ul className="text-xs sm:text-sm list-disc pl-6 mb-2">
            <li>Managed warehouse operations, ensuring timely delivery and accurate inventory tracking.</li>
            <li>Collaborated with team members to optimize warehouse processes, leading to improved efficiency and reduced costs.</li>

    </ul>

    

    </section>

    {/* projects */}
    <section className="mb-4 sm:mb-8">
        <h5 className="text-sm sm:text-base tracking-widest font-josefin-sans">projects</h5>
        <hr className="border-[var(--hr)] w-full mb-2" />
        <p className="text-sm sm:text-base font-bold">MERN RealChat App</p>
        <p className="text-sm sm:text-base">Developed a full-stack real-time chat messaging app using the MERN stack (MongoDB, Express, React, Node.js) for instant messaging and user interaction with friends. :</p>
        <ul className="text-xs sm:text-sm list-disc pl-6 mb-2">
            <li>Built a responsive and dynamic frontend with React and Tailwind CSS, incorporating React Router for multi-page navigation and custom hooks for state management.</li>
            <li>Implemented JWT‑based user authentication and profile management with Cloudinary for profile picture uploads and storage.</li>
            <li>Integrated PostCSS and Vite to optimize CSS processing and development workflow.</li>
            <li>Designed and integrated RESTful API endpoints along with Socket.io for real‑time messaging and friend request functionality, allowing users to build networks through friend invitations and a dedicated sidebar for friends.</li>
            <li>Optimized client–server communication by configuring CORS and developing a responsive React.js frontend interface, resulting in a seamless user experience across devices.</li>
        </ul>
        <p className="text-sm sm:text-base font-bold">Game of Life</p>
        <p className="text-sm sm:text-base">Java implementation of John Conway’s “Game of Life” that progresses the state of the game’s board through its many iterations</p>
        <ul className="text-xs sm:text-sm list-disc pl-6">
            <li>Utilized disjoint-set data structure to efficiently determine and manage connected components on the game board</li>
            <li>Employed a quick union-find algorithm to optimize the connectivity of cells and update their states based on the rules of the game.</li>
            <li>2D arrays, lists, and sets are used to represent the grid of cells, to keep track of the cells that need to be updated in each generation, and to accurately lookup and store live cells, respectively</li>

        </ul>
        <p className="text-sm sm:text-base font-bold">Bomb Lab</p>
        <p className="text-sm sm:text-base">Reverse-engineering and debugging project to defuse a binary bomb by analyzing its assembly code and providing correct inputs for each phase</p>
        <ul className="text-xs sm:text-sm list-disc pl-6">
            <li>Utilized GDB to step through lines of assembly code, set breakpoints, and examine specific registers to understand the logic of the binary bomb</li>
            <li>Employed reverse engineering using C language to understand high-level logic that corresponds to the low-level assembly instructions such as control structures and direct memory access for data manipulation</li>
            <li>Debugged C code on GNU assembler to see which functions are called and which local variables and arguments are being called from the stack</li>

        </ul>
    </section>

    {/* skills */}
    <section className="mb-4 sm:mb-8">
        <h5 className="text-sm sm:text-base tracking-widest font-josefin-sans">skills</h5>
        <hr className="border-[var(--hr)] w-full mb-2" />
        <div className="grid grid-rows-2 grid-cols-2 justify-between gap-2 sm:gap-4">
            <div className="flex flex-col">
                <p className="text-sm sm:text-base font-bold mb-2">Languages</p>
                <p className="text-xs sm:text-sm">Python, Java, C, C++, SQL, HTML, Javascript, CSS</p>
            </div>
            <div className="flex flex-col">
                <p className="text-sm sm:text-base font-bold mb-2">ML/DS</p>
                <p className="text-xs sm:text-sm">NumPy, Pandas, PyTorch, NLTK</p>
            </div>
            <div className="flex flex-col">
                <p className="text-sm sm:text-base font-bold mb-2">Web Dev</p>
                <p className="text-xs sm:text-sm">React, Tailwind, Sveltekit, Node.js, Express</p>
            </div>
            <div className="flex flex-col">
                <p className="text-sm sm:text-base font-bold mb-2">Tools/Platforms</p>
                <p className="text-xs sm:text-sm">Git, IntelliJ, VS Code, PostgreSQL/MySQL, TouchDesigner</p>
            </div>
        </div>
    </section>
</main>

        <Footer />
    
</>
  )
}
