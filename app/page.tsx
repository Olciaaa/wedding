"use client";

import GiftList from "./components/GiftList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-pastel-pink/20 to-cream">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="mb-4 flex justify-center">
              <Image
                src="wedding/kotki.png"
                alt="Kotki"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl text-pastel-rose mb-4 tracking-wide">
              Ola & Kacper
            </h1>
            <div className="w-24 h-1 bg-pastel-rose mx-auto mb-6"></div>
            <p className="text-2xl md:text-3xl text-foreground/80 font-light">
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
            className="w-6 h-6 text-pastel-rose"
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
          <h2 className="font-serif text-4xl md:text-5xl text-center text-pastel-rose mb-16">
            Szczegóły
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Ceremonia */}
            <div className="text-center p-8 rounded-lg bg-cream/50 border-2 border-pastel-pink/30">
              <div className="text-4xl mb-4">⛪</div>
              <h3 className="font-serif text-2xl text-pastel-rose mb-4">
                Ceremonia
              </h3>
              <p className="text-foreground/80 mb-2">
                Kościół św. Piotra i Pawła w Tyńcu
              </p>
              <p className="text-foreground/60 text-sm mb-4">
                ul. Benedyktyńskan 37, Kraków
              </p>
              <p className="text-lg font-semibold text-pastel-rose">15:00</p>
            </div>

            {/* Wesele */}
            <div className="text-center p-8 rounded-lg bg-cream/50 border-2 border-pastel-pink/30">
              <div className="text-4xl mb-4">🥂</div>
              <h3 className="font-serif text-2xl text-pastel-rose mb-4">
                Wesele
              </h3>
              <p className="text-foreground/80 mb-2">Dworek w Tomaszowicach</p>
              <p className="text-foreground/60 text-sm mb-4">
                ul. Parkowa 12, Tomaszowice
              </p>
              <p className="text-lg font-semibold text-pastel-rose">17:30</p>
            </div>
          </div>
        </div>
      </section>

      {/* Harmonogram */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pastel-pink/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-pastel-rose mb-16">
            Harmonogram
          </h2>
          <div className="space-y-6">
            {[
              { time: "15:00", event: "Ceremonia ślubna", icon: "💒" },
              {
                time: "16:00",
                event: "Grupowa sesja zdjęciowa",
                icon: "📸",
              },
              { time: "16:30", event: "Życzenia", icon: "💝" },
              { time: "17:30", event: "Powitanie i toast", icon: "🥂" },
              { time: "18:00", event: "Obiad weselny", icon: "🍽️" },
              { time: "19:00", event: "Pierwszy taniec", icon: "💃" },
              { time: "19:30", event: "Zabawa do białego rana", icon: "🎉" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl">{item.icon}</div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-pastel-rose">
                    {item.time}
                  </p>
                  <p className="text-foreground/80">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-20 px-4 bg-pastel-pink/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-pastel-rose mb-8">
            Potwierdzenie obecności
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Będzie nam niezmiernie miło, jeśli potwierdzisz swoją obecność przed
            <b> 30 maja 2026</b>
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfeF_OohqFE59AGbw9b1pWv-q2Dhdhh43VZX-bfOM_y0YkPWg/viewform?usp=sharing&ouid=102320113000128970623"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-pastel-rose text-white rounded-full text-lg font-semibold hover:bg-terracotta transition-colors shadow-lg hover:shadow-xl"
          >
            Potwierdź obecność
          </a>
        </div>
      </section>

      {/* Dodatkowe informacje */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-pastel-rose mb-16">
            Praktyczne informacje
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="font-serif text-xl text-pastel-rose mb-3">
                Noclegi
              </h3>
              <p className="text-foreground/70 text-sm">
                Ze względu na bliską odległość od Krakowa, nocleg w okolicy jest
                bez problemu dostępny, a w razie potrzeby oczywiście służymy
                pomocą.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="font-serif text-xl text-pastel-rose mb-3">
                Dojazd
              </h3>
              <p className="text-foreground/70 text-sm">
                Na miejscu dostępny jest duży parking, a dojazd z Krakowa
                możliwy jest zarówno autobusem linii 230, jak i taksówką.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="font-serif text-xl text-pastel-rose mb-3">
                Fotki
              </h3>
              <p className="text-foreground/70 text-sm">
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
          <h2 className="font-serif text-4xl md:text-5xl text-center text-pastel-rose mb-6">
            Lista prezentów
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Najważniejsze jest dla nas to, że będziecie z nami 🤍 <br />
            Jeśli jednak ktoś z Was zastanawia się co nam podarować,
            przygotowaliśmy pomocniczą listę rzeczy, które z pewnością przydadzą
            nam się w nowym mieszkaniu.
          </p>
          <GiftList />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-pastel-rose text-white text-center">
        <p className="text-2xl font-serif mb-2">Ola & Kacper</p>
        <p className="text-sm opacity-90">28.08.2026 • Tomaszowice</p>
        <p className="text-sm mt-4 opacity-75">
          Nie możemy się doczekać świętowania z Wami! 💕
        </p>
      </footer>
    </div>
  );
}
