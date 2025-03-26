import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen justify-between">
      <main className="text-[var(--text-main)] flex flex-col justify-start pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab">
        {/* about me */}
        <section className="mb-4 sm:mb-8">
          <h5 className="text-[1.0rem] sm:text-[1.5rem] font-josefin-sans tracking-widest">
            about me
          </h5>
          <hr className="border-[var(--hr)] w-full mb-2" />
          <ul className="text-sm sm:text-base list-disc pl-6">
            <li>
              Native English 🇺🇸 and Intermediate Hindi 🇮🇳, learning reading and
              writing since 2021.
            </li>
            <li> Finished my first internship at {" "} 
              <a
                href="https://www.mylearningtools.org"
                target="_blank"
                className="hover:underline"
              > 
                <span className="text-lg text-amber-600 ">Resilience, Inc.</span>  
                 
              </a> {" "}  as Web Developer.
            </li>
            <li>Musician/Artist/Lover of creating music on all platforms {" "}
            <a
                href="https://linktr.ee/psindog"
                target="_blank"
                className="hover:underline"
              >
                <span className="text-lg text-green-600">~Linktree~</span>
              </a>
            </li>

            <li>Super passionate about all things aesthetic—whether it's designing sleek websites or picking the perfect outfit. If it looks good, feels good ⋆★⋆{" "}

            </li>
          </ul>
        </section>

        {/* favorite stuffs */}
        <section className="mb-3 sm:mb">
          <h5 className="text-[1.0rem] sm:text-[1.5rem] font-josefin-sans tracking-widest">
            favorite hobbies
          </h5>
          <hr className="border-[var(--hr)] w-full mb-2" />
          <ul className="text-sm sm:text-base list-disc pl-6">
            <li>🎵Creating and uploading music🎵</li>
            <li>🍿🎥✮⋆˙Avid Youtube watcher/binger⋆˙✮🎥🍿</li>
            <li>🧥👜Fashion and designing art for clothes👜🥾</li>
            <li>🛠️✩Building/upgrading PCs and hardware✩🛠️</li>
          </ul>
        </section>

        {/* favorite songs */}
        <section className="mb-4 sm:mb-8">
          <h5 className="text-[1.0rem] sm:text-[1.5rem] font-josefin-sans tracking-widest">
            favorite songs
          </h5>
          <hr className="border-[var(--hr)] w-full mb-2" />
          <ul className="text-sm sm:text-base list-disc pl-6">
            <li>
              <a
                href="https://open.spotify.com/track/2iH3qLjSbjbTGK272vtZOK?si=585f0793744c4a45"
                target="_blank"
                className="hover:underline"
              >
                Logic - Once Upon a Time in Hollywood
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/2qDMNOTHAlyeKpjCknMazD?si=746f2db15c664e36"
                target="_blank"
                className="hover:underline"
              >
                Division Point - Frozen
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/2dXME00xUY1CRcMZsM3Y4q?si=41e1c882ea0a4163"
                target="_blank"
                className="hover:underline"
              >
                Lupe Fiasco - Paris, Tokyo
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/4iZWzTniN0dES4TOeFdWMr?si=42bdbbbd64654c9"
                target="_blank"
                className="hover:underline"
              >
                Brakence - secondport

              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/1ZLtE9tSJdaUiIJ9YoKHQe?si=69c02689ca3b4e3c"
                target="_blank"
                className="hover:underline"
              >
                Paramore - Decode
              </a>
            </li>
          </ul>
        </section>

        {/* this site */}
        <section className="mb-4 sm:mb-8">
          <h5 className="text-[1.0rem] sm:text-[1.5rem] font-josefin-sans tracking-widest">
            this site
          </h5>
          <hr className="border-[var(--hr)] w-full mb-2" />
          <ul className="text-sm sm:text-base list-disc pl-6">
            <li>
              Built with Reactjs and Tailwind CSS, deployed on Netlify Hosting.
            </li>
            <li>Color palette inspired by Matcha color theme.</li>
            <li>
              GitHub repo [
              <a
                href="https://github.com/parthsinha1/myPortfolio"
                target="_blank"
                className="hover:underline inline-block"
              >
                here
              </a>
              ].
            </li>
          </ul>
        </section>
      </main>
        <Footer />
        </div>
    </>
  );
}
