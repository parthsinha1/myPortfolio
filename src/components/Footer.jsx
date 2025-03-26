import React from 'react'

export default function Footer() {
  return (
    <footer className="font-josefin-slab relative bottom-0 mb-4 sm:mb-8 mt-12 w-full text-[var(--footer-text)]">
        <hr className="border-[var(--hr)] mx-4 sm:mx-16" />
        <div className="flex justify-between text-xs sm:text-sm mt-2 mx-4 sm:mx-16">
            <p>© 2024 Parth Sinha</p>
            <div>
                <a
                    href="mailto:parthsinha03@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Email
                </a>
                <span className="mx-2">|</span>
                <a
                    href="https://www.linkedin.com/in/parth-sinha-6a3a53193/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    LinkedIn
                </a>  
                <span className="mx-2">|</span>
                <a
                        href="https://github.com/parthsinha1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        GitHub
                    </a> 
                    <span className="mx-2">|</span>
                    <a
                    href="https://github.com/parthsinha1/myPortfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Repo
                </a>    
            </div>
        </div>
    </footer>
  )
}





/*export default function footer() {
    

    return (
        <footer className="font-josefin-slab relative bottom-0 mb-4 sm:mb-8 mt-12 w-full text-[var(--footer-text)]">
            <hr className="border-[var(--hr)] mx-4 sm:mx-16" />
            <div className="flex justify-between text-xs sm:text-sm mt-2 mx-4 sm:mx-16">
                <p>© 2024 Parth Sinha</p>
                <div>
                    <a
                        href="mailto:parthsinha03@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Email
                    </a>
                    <span className="mx-2">|</span>
                    <a
                        href="https://www.linkedin.com/in/parth-sinha-6a3a53193/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        LinkedIn
                    </a>
                    <span className="mx-2">|</span>
                    <a
                        href="https://github.com/parthsinha1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
};

*/