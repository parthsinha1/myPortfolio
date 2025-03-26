import Header from "../components/Header"
import Footer from "../components/Footer"




export default function Contacts() {
  return (
    <>


      <Header />
      <div className="flex flex-col min-h-screen justify-between">
    <main
      className="text-[var(--text-main)] flex flex-col justify-start pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab"
    >
      <div className="mb-16">
        <h5 className="text-2xl font-josefin-sans tracking-widest">contacts</h5>
        <hr className="border-[var(--hr)] w-full mb-2" />
        <ul className="text-sm sm:text-base list-disc pl-6 mb-4 sm:mb-8">
          <li style={{ maxWidth: "fit-content" }}>
            Email:{" "}
            <a
              href="mailto:parthsinha03@gmail.com"
              target="_blank"
              className="hover:underline"
              rel="noopener noreferrer"
            >
              parthsinha03@gmail.com
            </a>
          </li>
          <li style={{ maxWidth: "fit-content" }}>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/parth-sinha-6a3a53193/"
              target="_blank"
              className="hover:underline"
              rel="noopener noreferrer"
            >
              Parth Sinha
            </a>
          </li>
          <li style={{ maxWidth: "fit-content" }}>
            GitHub:{" "}
            <a
              href="https://github.com/parthsinha1"
              target="_blank"
              className="hover:underline"
              rel="noopener noreferrer"
            >
              parthsinha1
            </a>
          </li>
          <li style={{ maxWidth: "fit-content" }}>
            Discord:{" "}
            <a
              href="https://www.discord.com/users/180876033304559617"
              target="_blank"
              className="hover:underline"
              rel="noopener noreferrer"
            >
              cardface9
            </a>
          </li>
        </ul>
        <p className="text-sm sm:text-base">
          Feel free to reach out to me on any of these platforms! I'm open to project collaborations and job
          opportunities.
        </p>
      </div>
    </main>      
    <Footer />
    </div>
    </>
  )
}