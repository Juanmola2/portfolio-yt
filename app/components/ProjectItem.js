"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * ProjectItem component
 * Displays a project image and its domain name below it.
 */
export default function ProjectItem({ project }) {
    const { image, domain } = project;

    // Extract just the domain name part from the full URL for display
    const displayName = domain.replace(/^https?:\/\//, "").split("/")[0]; // Removes protocol and path

    return (
        <div className="flex flex-col items-center text-center">
            {/* Wrap Image container with Link - Add hover animation */}
                <Link
                    href={domain}
                    className="block transition hover:-translate-y-2 rounded-lg"
                >
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-lg mb-2 border border-gray-200">
                    <Image
                        src={image}
                        alt={displayName} // Use display name for alt text
                        fill
                        className="object-contain p-2"
                    />
                </div>
            </Link>
        </div>
    );
}
