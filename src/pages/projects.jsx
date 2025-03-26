import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Projects() {
  return (
    <>
      <Header />
      <div className="flex flex-col flex-grow min-h-screen justify-between">
        <main className="text-[var(--text-main)] flex flex-col justify-start pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab">
          <Card
            title="Todo App"
            githubLink="https://github.com/parthsinha1/react_todo"
            websiteName="parths-todo-app.com"
            websiteLink="https://parthstodolist.netlify.app/"
            description="A simple todo app built with React and Tailwind CSS. Uses local storage to store todo items."
          />
          <Card
            title="RealChat"
            githubLink="https://github.com/parthsinha1/MERNstack-RealChat"
            websiteName="realchat"
            websiteLink="https://mernstack-realchatbot.onrender.com/"
            description="A  full-stack, real-time chat application for friends using the MERN stack (MongoDB, Express, React.js, Node.js) to enable secure user communication. JWT for authentication."
          />
          <Card
            title="Bomb Lab"
            githubLink="https://github.com/parthsinha1/Rutgers_cs211"
            websiteName="bomblab64"
            //websiteLink="https://steam-link-409216.web.app/"
            description="Reverse engineering challenge tasked with defusing a binary program (bomb) by figuring out correct inputs for each of its six phases using Assembly and GNU debugger"
          />
              <div className="text-left">more to come!</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
