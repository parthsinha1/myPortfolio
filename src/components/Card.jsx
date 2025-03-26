import React from 'react';

export default function Card({ title = "", githubLink = "", websiteName = "", websiteLink = "", description = "" }) {
    const projectURL = `/projects/${title.replace(":", "")}`;

    return (
        <div className="card my-4 p-4">
            <h3 className="text-sm sm:text-base">
                <a href={projectURL} className="font-semibold hover:text-[var(--peach)]">{title}</a> |
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--peach)]">GitHub</a>
                {websiteLink && (
                    <> | <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--peach)]">{websiteName}</a></>
                )}
            </h3>
            <hr className="border-[var(--card-hr)] w-full mb-2" />
            <p className="text-sm sm:text-base">{description}</p>
            <h5 className="text-sm sm:text-base mt-">
            </h5>
        </div>
    ); 
}
