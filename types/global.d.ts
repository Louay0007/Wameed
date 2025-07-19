interface Speaker {
  id: number;
  name: string;
  title: string;
  image: string;
}

interface Contributor {
  title: string;
  imageSrc: string;
  altText: string;
}

interface NavbarLink {
  route: string;
  label: string;
}

interface Currency {
  code: string;
  name: string;
}

interface MenaCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

interface Country {
  name: string;
  image: string;
}

interface CountryWithDuration extends Country {
  duration: number;
}

interface Sponsor {
  name: string;
  image: string;
}

interface ProgramEvent {
  title: string;
  icon: string | React.ReactNode;
}

interface CongressProgram {
  [day: string]: ProgramEvent[];
}
