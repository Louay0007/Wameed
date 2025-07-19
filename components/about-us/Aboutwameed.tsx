import Image from "next/image";
import ActionButton from "../ActionButton";
import Link from "next/link";


export default function AboutMenaSYP() {
  return (
    <section
      id="about"
      className="bg-dark flex justify-center items-center py-12 px-4 md:px-6 relative overflow-hidden"
    >
  
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 text-white order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold">Wameedh: About</h2>

          <p className="text-base md:text-lg font-medium">
            Wameedh is a vibrant celebration of storytelling and creativity, uniting aspiring filmmakers and visionaries from across the Middle East and North Africa. This unique short film festival invites participants to capture the essence, beauty, and diversity of their homelands through the art of cinema.
          </p>

          <p className="text-base md:text-lg font-medium">
            Each year, Wameedh becomes a stage for cultural exchange, where authentic voices and fresh perspectives shine. The festival showcases a rich tapestry of short films that highlight the traditions, dreams, and everyday moments that make each country in the MENA region extraordinary.
          </p>

          <p className="text-base md:text-lg font-medium">
            More than a competition, Wameedh is a movement—empowering young creators to become cultural ambassadors, fostering understanding, and building bridges between nations. Join us on this cinematic journey and experience the stories that illuminate the heart of the Middle East and North Africa.
          </p>
          <div className="pt-2">
            <Link href="/program">
              <ActionButton text="Check Schedule" className="max-w-xl" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <Image
            src="/images/wameed1.png"
            alt="MenaSYP Logo"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
