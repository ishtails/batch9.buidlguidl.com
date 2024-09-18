import Image from "next/image";
import { Mentor } from "~~/types/builders";
import Link from 'next/link';

type ProfilePictureProps = {
  person: Mentor;
};

export const MentorPicture = ({ person }: ProfilePictureProps) => {
  return (
    <div className="text-center">
      <Link href={person.link} className="link" target="_blank" rel="noopener noreferrer">
        <Image
          width={100}
          height={100}
          className="w-24 h-24 rounded-full mx-auto"
          src={person.image}
          alt={person.link}
        />
        {person.name}
      </Link>
    </div>
  );
};
