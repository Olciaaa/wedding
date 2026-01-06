"use client";

import GiftList from "./components/GiftList";
import Image from "next/image";

const Icon = {
  Church({ className = "w-10 h-10 text-green" }: { className?: string }) {
    return (
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.4481 13.1661C23.7827 12.9446 24.2173 12.9446 24.5519 13.1661L31.3519 17.6661C31.6317 17.8513 31.8 18.1644 31.8 18.5V22.8009L41.2658 25.411C41.6995 25.5306 42 25.9251 42 26.375V42H40V27.1366L30.5342 24.5265C30.1005 24.4069 29.8 24.0124 29.8 23.5625V19.0374L24 15.1991L18.2 19.0374V23.5625C18.2 23.9758 17.9457 24.3466 17.5601 24.4954L8 28.1859V42H6V27.5C6 27.0867 6.25428 26.7159 6.63987 26.5671L16.2 22.8766V18.5C16.2 18.1644 16.3683 17.8513 16.6481 17.6661L23.4481 13.1661Z"
          fill="currentColor"
          strokeWidth="0.9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 27L18 42L16 42L16 27L18 27Z"
          fill="currentColor"
          strokeWidth="0.9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 27L32 42L30 42L30 27L32 27Z"
          fill="currentColor"
          strokeWidth="0.9"
        />
        <path
          d="M21 32C21 30.3431 22.3431 29 24 29C25.6569 29 27 30.3431 27 32V42H21V32Z"
          fill="currentColor"
          strokeWidth="0.9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 14V6H25V14H23Z"
          fill="currentColor"
          strokeWidth="0.9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28 11L20 11L20 9L28 9L28 11Z"
          fill="currentColor"
          strokeWidth="0.9"
        />
      </svg>
    );
  },
  Cheers({ className = "w-10 h-10 text-green" }: { className?: string }) {
    return (
      <svg
        viewBox="0 0 16.933333 16.933334"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
      >
        <g transform="translate(0 -280.067)">
          <path
            fill="currentColor"
            d="m8.4630513 280.32814a.26460982.26460982 0 0 0 -.262001.26768v1.85157a.26465001.26465001 0 1 0 .529166 0v-1.85157a.26460982.26460982 0 0 0 -.267165-.26768zm-1.861386.24804a.26460982.26460982 0 0 0 -.217041.4005l.926042 1.60352a.26466279.26466279 0 1 0 .458885-.26355l-.926041-1.60559a.26460982.26460982 0 0 0 -.241845-.13488zm3.7207027 0a.26460982.26460982 0 0 0 -.232542.13488l-.9255257 1.60559a.26460982.26460982 0 1 0 .456819.26355l.9275917-1.60352a.26460982.26460982 0 0 0 -.226343-.4005zm-6.3437982 1.71463a.26460982.26460982 0 0 0 -.2072216.11524c-1.1557107 1.67194-1.7288564 3.81819-1.8086759 5.62498-.039899.90339.043238 1.72026.2542487 2.36523.1810359.55329.4686327 1.00205.8872829 1.21026l-.7890987 2.94245-1.91461222.50385a.26460982.26460982 0 0 0 0 .5116l3.32227772.8909a.26460982.26460982 0 0 0 .2676842-.42995l-1.1668522-1.32757.7963324-2.96984c.4477596.005.9056212-.22625 1.3353202-.59118.5255-.44629 1.032206-1.1069 1.466575-1.90634.868722-1.5989 1.448398-3.75347 1.150318-5.82239a.26460982.26460982 0 0 0 -.19327-.21652l-3.3222775-.8909a.26460982.26460982 0 0 0 -.078031-.01zm8.9395062 0a.26460982.26460982 0 0 0 -.05891.01l-3.3222777.8909a.26460982.26460982 0 0 0 -.19327.21652c-.29808 2.06892.281588 4.22349 1.1503187 5.82239.434358.79944.941583 1.46005 1.467093 1.90634.429776.36499.887487.59653 1.33532.59118l.795817 2.97036-1.166336 1.32705a.26460982.26460982 0 0 0 .267681.42995l3.322281-.8909a.26460982.26460982 0 0 0 -.0021-.5116l-1.914612-.50436-.787033-2.94194c.418621-.20822.70625-.65699.887286-1.21026.211029-.64497.293642-1.46184.25373-2.36523-.0798-1.80679-.652955-3.95304-1.808673-5.62498a.26460982.26460982 0 0 0 -.226343-.11524zm-8.7870612.57826 2.9099005.77721c.129691 1.08262.0087 2.20119-.266133 3.23805-.437886-.068-.847442-.0333-1.227834.0568-.470929.11155-.898242.3033-1.2851923.47284-.3869505.16954-.7393014.3184-1.050581.36897-.2483697.0403-.4650793.0241-.6914304-.0811.129622-1.58253.6656864-3.39507 1.6112702-4.83278zm8.6542542 0c.94557 1.4377 1.481121 3.25026 1.610754 4.83278-.226856.10523-.444611.12148-.692981.0811-.311282-.0506-.661567-.19943-1.048517-.36897-.386959-.16954-.816338-.36129-1.287259-.47284-.380312-.0901-.788472-.12477-1.225764-.0568-.2748287-1.03686-.3963437-2.15543-.2666497-3.23805zm-8.5731223.32401a.26460982.26460982 0 0 0 -.00106.00053.26460982.26460982 0 0 0 -.2325449.14056c-.065299.11823-.127426.23828-.187587.35915a.26509271.26509271 0 1 0 .47439.23616c.057002-.11457.1163585-.2283.1777683-.33951a.26460982.26460982 0 0 0 -.2309929-.39688zm8.4852693.00053a.26460982.26460982 0 0 0 -.224792.39636c.0614.11121.120737.22494.177768.33951a.26509718.26509718 0 1 0 .47439-.23616c-.0602-.12087-.123857-.24092-.189137-.35915a.26460982.26460982 0 0 0 -.238229-.14056zm-8.9570744.97255a.26460982.26460982 0 0 0 -.2402945.16588c-.1380517.33253-.2587255.67305-.3632862 1.01389a.26460982.26460982 0 1 0 .5059125.154c.099899-.32553.2145453-.64883.3457151-.9648a.26460982.26460982 0 0 0 -.2480469-.36897zm9.4278484 0a.26460982.26460982 0 0 0 -.242361.36897c.131169.31597.247922.63927.347781.9648a.26460982.26460982 0 1 0 .505913-.154c-.104561-.34084-.225245-.68136-.363287-1.01389a.26460982.26460982 0 0 0 -.248046-.16588zm-6.8822687 3.20859c.110871-.002.224079.006.338998.0202-.183452.5667-.407964 1.10385-.66766 1.58182-.41007.75474-.888884 1.37092-1.344102 1.75751-.4374279.37149-.8301304.51037-1.1182802.45165a.26460982.26460982 0 0 0 -.041857-.009c-.2883323-.0808-.5537253-.3927-.7343219-.94465-.1672115-.51104-.2454276-1.20329-.2284096-1.9761.2705286.0824.545047.0911.8066697.0486.4046696-.0657.7887864-.23629 1.1777054-.40669.5833876-.2556 1.1656536-.51467 1.8112586-.52348zm4.3439217 0c.645602.009 1.228389.26788 1.811777.52348.388919.1704.773036.34095 1.177705.40669.261766.0425.535991.034.80667-.0486.01672.77281-.06327 1.46506-.230479 1.9761-.18017.55065-.442679.86248-.730186.94413a.26460982.26460982 0 0 0 -.04961.01c-.28765.0558-.678474-.0831-1.113111-.45217-.45521-.38659-.933508-1.00277-1.343588-1.75751-.259681-.47795-.484211-1.01515-.66766-1.58182.114919-.0145.227613-.0217.338481-.0202zm3.844727 7.6879.941543.24805-1.517734.40617zm-12.0349254.002.5741247.65268-1.5136019-.40618z"
          />
        </g>
      </svg>
    );
  },
  Hotel({ className = "w-10 h-10 text-green" }: { className?: string }) {
    return (
      <svg
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
      >
        <path
          fill="currentColor"
          d="m125.839 35.423-6.509-15.21a2 2 0 0 0 -1.839-1.213h-9.237a2 2 0 0 0 -1.839 1.213l-6.509 15.21a2 2 0 0 0 1.839 2.787h9.128v32.272l-12.873-10.815v-11.524a11.041 11.041 0 0 0 -11.028-11.029h-53.943a11.041 11.041 0 0 0 -11.028 11.029v11.524l-19.286 16.203a1.997 1.997 0 0 0 -.714 1.531v18.885a2 2 0 0 0 2 2h3v8.713a2 2 0 0 0 2 2h9.739a2 2 0 0 0 2-2v-8.713h78.521v8.713a2 2 0 0 0 2 2h9.739a2 2 0 0 0 2-2v-8.713h3a2 2 0 0 0 2-2v-18.885a1.997 1.997 0 0 0 -.714-1.531l-2.413-2.027v-35.633h9.127a2 2 0 0 0 1.839-2.787zm-101.11 27.175h70.543l15.239 12.803h-101.021zm26.984-4h-15.413v-2.134a1.364 1.364 0 0 1 1.362-1.363h12.688a1.364 1.364 0 0 1 1.362 1.363zm31.987 0h-15.413v-2.134a1.364 1.364 0 0 1 1.362-1.363h12.688a1.364 1.364 0 0 1 1.362 1.363zm-57.7-10.455a7.037 7.037 0 0 1 7.028-7.029h53.943a7.037 7.037 0 0 1 7.028 7.029v10.455h-6.3v-2.134a5.368 5.368 0 0 0 -5.362-5.363h-12.688a5.368 5.368 0 0 0 -5.362 5.363v2.134h-8.574v-2.134a5.368 5.368 0 0 0 -5.362-5.363h-12.688a5.368 5.368 0 0 0 -5.362 5.363v2.134h-6.3zm-9.261 56.856h-5.739v-6.713h5.739zm92.261 0h-5.739v-6.713h5.739zm-103-10.713v-14.885h108v14.885zm98.776-60.077 4.797-11.21h6.599l4.797 11.21z"
        />
      </svg>
    );
  },
  Car({ className = "w-9 h-9 text-green" }: { className?: string }) {
    return (
      <svg
        viewBox="-1.5 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g id="icomoon-ignore"></g>

          <path
            d="M5.867 15.467c-1.173 0-2.133 0.96-2.133 2.133s0.96 2.133 2.133 2.133 2.133-0.96 2.133-2.133-0.96-2.133-2.133-2.133zM5.867 18.667c-0.587 0-1.067-0.48-1.067-1.067s0.48-1.067 1.067-1.067c0.587 0 1.067 0.48 1.067 1.067s-0.48 1.067-1.067 1.067z"
            fill="currentColor"
          />

          <path
            d="M22.933 15.467c-1.173 0-2.133 0.96-2.133 2.133s0.96 2.133 2.133 2.133c1.173 0 2.133-0.96 2.133-2.133s-0.96-2.133-2.133-2.133zM22.933 18.667c-0.587 0-1.067-0.48-1.067-1.067s0.48-1.067 1.067-1.067c0.587 0 1.067 0.48 1.067 1.067s-0.48 1.067-1.067 1.067z"
            fill="currentColor"
          />

          <path
            d="M25.12 11.2l-0.907-4.267c-0.373-1.387-1.44-2.133-2.88-2.133h-13.867c-1.493 0-2.347 0.747-2.773 2.133l-0.96 4.267h-3.733v1.067h3.467v0.053c-1.653 0.107-2.933 1.493-2.933 3.2v7.413h1.6v1.6c0 1.493 1.173 2.667 2.667 2.667s2.667-1.173 2.667-2.667v-1.6h13.867v1.6c0 1.493 1.173 2.667 2.667 2.667s2.667-1.173 2.667-2.667v-1.6h1.6v-7.413c0-1.653-1.28-3.040-2.88-3.2v-0.053h3.413v-1.067h-3.68zM5.707 7.253c0.32-0.96 0.8-1.387 1.76-1.387h13.867c1.013 0 1.6 0.427 1.867 1.333l1.067 5.12h-19.733l1.173-5.067zM6.4 24.533c0 0.907-0.693 1.6-1.6 1.6s-1.6-0.693-1.6-1.6v-1.6h3.2v1.6zM25.6 24.533c0 0.907-0.693 1.6-1.6 1.6s-1.6-0.693-1.6-1.6v-1.6h3.2v1.6zM27.2 15.52v6.347h-25.6v-6.347c0-1.173 0.96-2.133 2.133-2.133h21.333c1.173 0 2.133 0.96 2.133 2.133z"
            fill="currentColor"
          />
        </g>
      </svg>
    );
  },
  Camera({ className = "w-9 h-9 text-green" }: { className?: string }) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
      >
        <path
          d="M3 8C3 7.44772 3.44772 7 4 7H8.5L9.5 4H14.5L15.5 7H20C20.5523 7 21 7.44772 21 8V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V8Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.9"
        />
        <circle
          cx="12"
          cy="13"
          r="3"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-pastel-pink/20 to-cream">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="mb-4 flex justify-center">
              <Image
                src="/kotki.png"
                alt="Kotki"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl text-pastel-rose mb-4 tracking-wide">
              Ola & Kacper
            </h1>
            <svg
              width="120"
              height="6"
              viewBox="0 0 120 6"
              className="mx-auto mb-6 text-green"
              aria-hidden
            >
              <defs>
                <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="20%" stopColor="currentColor" />
                  <stop offset="80%" stopColor="currentColor" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>

              <rect
                x="0"
                y="2"
                width="120"
                height="2"
                fill="url(#fade)"
                rx="1"
              />
            </svg>
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
          <h2 className="font-serif text-4xl md:text-5xl text-center text-pastel-rose mb-16">
            Szczegóły
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Ceremonia */}
            <div className="text-center p-8 rounded-lg bg-cream/50 border-2 border-pastel-pink/30">
              <div className="text-4xl mb-4">
                <div className="mb-4 flex justify-center">
                  <Icon.Church className="w-11 h-11 text-green" />
                </div>
              </div>
              <h3 className="font-serif text-2xl text-pastel-rose mb-4">
                Ceremonia
              </h3>
              <p className="text-foreground/80 mb-2">
                Kościół św. Piotra i Pawła w Tyńcu
              </p>
              <p className="text-foreground/60 text-sm mb-4">
                ul. Benedyktyńska 37, Kraków
              </p>
              <p className="text-lg font-semibold text-pastel-rose">15:00</p>
            </div>

            {/* Wesele */}
            <div className="text-center p-8 rounded-lg bg-cream/50 border-2 border-pastel-pink/30">
              <div className="text-4xl mb-4">
                <div className="mb-4 flex justify-center">
                  <Icon.Cheers className="w-10 h-10 text-green" />
                </div>
              </div>
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
              <div className="text-4xl mb-4">
                <div className="mb-4 flex justify-center">
                  <Icon.Hotel className="w-10 h-10 text-green" />
                </div>
              </div>
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
              <div className="text-4xl mb-4">
                <div className="mb-4 flex justify-center">
                  <Icon.Car className="w-10 h-10 text-green" />
                </div>
              </div>
              <h3 className="font-serif text-xl text-pastel-rose mb-3">
                Dojazd
              </h3>
              <p className="text-foreground/70 text-sm">
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
            <br />
            Zachęcamy do łączenia sił, prezenty wspólne są jak najbardziej mile
            widziane.
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
