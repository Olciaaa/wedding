"use client";

import GiftList from "./components/GiftList";
import Image from "next/image";
import { Icon } from "./components/Icons";
import FadeIn from "./components/FadeIn";

export default function Home() {
  const scheduleIcons = {
    church: Icon.Rings,
    cheers: Icon.Cheers,
    camera: Icon.Camera,
    car: Icon.Car,
    hotel: Icon.Hotel,
    heart: Icon.Heart,
    dinner: Icon.Dinner,
    dance: Icon.Dance,
    party: Icon.Party,
  } as const;

  type IconKey = keyof typeof scheduleIcons;

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-pastel-pink/10 via-cream to-cream overflow-hidden">
        {/* Listki w lewym górnym rogu */}
        <div className="absolute -top-13 -left-8 w-80 md:w-96 opacity-40">
          <Image
            src="/listki.svg"
            alt=""
            width={400}
            height={400}
            className="object-contain w-full h-full"
            style={{ transform: "rotate(104deg) scaleX(-1)" }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="mb-4 flex justify-center">
              <Image
                src="/kotki.svg"
                alt="Kotki"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h1
              className="text-6xl md:text-8xl text-pastel-rose mb-4 tracking-wide"
              style={{ fontFamily: "var(--font-parisienne)" }}
            >
              Ola & Kacper
            </h1>
            <div className="flex justify-center mb-6">
              <Image
                src="/kwiatek.png"
                alt=""
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-2xl md:text-3xl text-foreground/80 font-medium">
              28 sierpnia 2026
            </p>
          </div>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Zapraszamy do wspólnego świętowania tego ważnego dla nas dnia!
          </p>
        </div>
        <button
          onClick={() => {
            document.getElementById("szczegoly")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <svg
            className="w-6 h-6 text-green"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </section>

      {/* Informacje o ślubie */}
      <section id="szczegoly" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-center text-green mb-16 font-serif">
              Szczegóły
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Ceremonia */}
            <FadeIn delay={0.1}>
              <div className="text-center p-8 rounded-lg bg-cream/50 border-2 border-pastel-pink/30">
                <div className="text-4xl mb-4">
                  <div className="mb-4 flex justify-center">
                    <Icon.Church className="w-11 h-11 text-green" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-pastel-rose mb-4">
                  Ceremonia
                </h3>
                <p className="text-foreground/80 font-medium mb-2">
                  Kościół św. Piotra i Pawła w Tyńcu
                </p>
                <p className="text-foreground/60 font-medium text-sm mb-4">
                  ul. Benedyktyńska 37, Kraków
                </p>
                <p className="text-lg font-semibold text-pastel-rose">15:00</p>
              </div>
            </FadeIn>

            {/* Wesele */}
            <FadeIn delay={0.2}>
              <div className="text-center p-8 rounded-lg bg-cream/50 border-2 border-pastel-pink/30">
                <div className="text-4xl mb-4">
                  <div className="mb-4 flex justify-center">
                    <Icon.Cheers className="w-10 h-10 text-green" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-pastel-rose mb-4">
                  Wesele
                </h3>
                <p className="text-foreground/80 font-medium mb-2">
                  Dworek w Tomaszowicach
                </p>
                <p className="text-foreground/60 font-medium text-sm mb-4">
                  ul. Parkowa 12, Tomaszowice
                </p>
                <p className="text-lg font-semibold text-pastel-rose">17:30</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Harmonogram */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pastel-pink/10">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-center text-green mb-16 font-serif">
              Harmonogram
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {[
              {
                time: "15:00",
                event: "Ceremonia ślubna",
                iconKey: "church" as IconKey,
              },
              {
                time: "16:00",
                event: "Grupowa sesja zdjęciowa",
                iconKey: "camera" as IconKey,
              },
              { time: "16:30", event: "Życzenia", iconKey: "heart" as IconKey },
              {
                time: "17:30",
                event: "Powitanie i toast",
                iconKey: "cheers" as const,
              },
              {
                time: "18:00",
                event: "Obiad weselny",
                iconKey: "dinner" as IconKey,
              },
              {
                time: "19:00",
                event: "Pierwszy taniec",
                iconKey: "dance" as IconKey,
              },
              {
                time: "19:30",
                event: "Zabawa do białego rana",
                iconKey: "party" as IconKey,
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {(() => {
                      const Ico = scheduleIcons[item.iconKey];
                      return <Ico className="w-10 h-10 text-green" />;
                    })()}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-pastel-rose">
                      {item.time}
                    </p>
                    <p className="text-foreground/80 font-medium">
                      {item.event}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-20 px-4 bg-pastel-pink/20">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-green mb-8 font-serif">
              Potwierdzenie obecności
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Będzie nam niezmiernie miło, jeśli potwierdzisz swoją obecność
              przed
              <b> 30 maja 2026</b>
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfeF_OohqFE59AGbw9b1pWv-q2Dhdhh43VZX-bfOM_y0YkPWg/viewform?usp=sharing&ouid=102320113000128970623"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-pastel-rose text-white rounded-full text-lg font-medium hover:bg-terracotta transition-colors shadow-lg hover:shadow-xl"
            >
              Potwierdź obecność
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Dodatkowe informacje */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-center text-green mb-16 font-serif">
              Praktyczne informacje
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">
                <div className="mb-4 flex justify-center">
                  <Icon.Hotel className="w-10 h-10 text-green" />
                </div>
              </div>
              <h3 className="font-serif text-xl text-pastel-rose mb-3">
                Noclegi
              </h3>
              <p className="text-foreground/70 font-medium text-sm">
                Ze względu na bliską odległość od Krakowa, nocleg w okolicy jest
                bez problemu dostępny, a w razie potrzeby oczywiście służymy
                pomocą.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">
                <div className="mb-4 flex justify-center">
                  <Icon.Car className="w-10 h-10 text-green" />
                </div>
              </div>
              <h3 className="font-serif text-xl text-pastel-rose mb-3">
                Dojazd
              </h3>
              <p className="text-foreground/70 font-medium text-sm">
                Na miejscu dostępny jest duży parking, a dojazd z Krakowa
                możliwy jest zarówno autobusem linii 230, jak i taksówką.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">
                <div className="mb-4 flex justify-center">
                  <Icon.Camera className="w-10 h-10 text-green" />
                </div>
              </div>
              <h3 className="font-serif text-xl text-pastel-rose mb-3">
                Fotki
              </h3>
              <p className="text-foreground/70 font-medium text-sm">
                Tutaj kiedyś będzie link do wspólnego udostepniania zdjęć :)
                <br /> Ten sam link znajdziecie przy stolikach na sali weselnej
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lista prezentów */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pastel-pink/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-center text-green mb-6 font-serif">
              Lista prezentów
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-center text-foreground/70 font-medium mb-12 max-w-2xl mx-auto">
              Najważniejsze jest dla nas to, że będziecie z nami 🤍 <br />
              Jeśli jednak ktoś z Was zastanawia się co nam podarować,
              przygotowaliśmy pomocniczą listę rzeczy, które z pewnością
              przydadzą nam się w nowym mieszkaniu.
              <br />
              Zachęcamy do łączenia sił, prezenty wspólne są jak najbardziej
              mile widziane.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <GiftList />
          </FadeIn>
        </div>
      </section>

      {/* Decorative line before footer */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-dark-green to-transparent opacity-100"></div>

      {/* Footer */}
      <footer className="py-12 px-4 bg-green text-white text-center">
        <p className="text-2xl font-serif mb-2">Ola & Kacper</p>
        <p className="text-sm font-medium opacity-90">
          28.08.2026 • Tomaszowice
        </p>
        <p className="text-sm font-medium mt-4 opacity-75">
          Nie możemy się doczekać świętowania z Wami! 💕
        </p>
      </footer>
    </div>
  );
}
