"use client";

import { useState } from "react";

interface Gift {
  id: number;
  name: string;
  description?: string;
  icon: string;
  reserved: boolean;
  password?: string;
}

const initialGifts: Gift[] = [
  { id: 1, name: "Zestaw sztućców", icon: "🍴", reserved: false },
  {
    id: 2,
    name: "Blender",
    description: "",
    icon: "🥤",
    reserved: false,
  },
  {
    id: 3,
    name: "Kieliszki do wina",
    description: "",
    icon: "🍷",
    reserved: false,
  },
  {
    id: 4,
    name: "Zestaw garnków",
    icon: "🍳",
    description: "indukcja",
    reserved: false,
  },
  { id: 5, name: "Thermomix", icon: "🤖", reserved: false },
  {
    id: 6,
    name: "Zestaw ręczników",
    icon: "🧺",
    description: "kolorysyka TODO",
    reserved: false,
  },
  { id: 7, name: "", icon: "🧺", reserved: false },
  { id: 8, name: "", icon: "🖼️", reserved: false },
  { id: 9, name: "", icon: "🪴", reserved: false },
  { id: 10, name: "", icon: "🕯️", reserved: false },
  { id: 11, name: "", icon: "🛋️", reserved: false },
  {
    id: 12,
    name: "Kieliszki do wina",
    description: "",
    icon: "🛏️",
    reserved: false,
  },
];

export default function GiftList() {
  const [gifts, setGifts] = useState<Gift[]>(initialGifts);
  const [showModal, setShowModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [password, setPassword] = useState("");
  const [cancelPassword, setCancelPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleReserve = (gift: Gift) => {
    if (gift.reserved) {
      // Jeśli zarezerwowane, otwórz modal anulowania
      setSelectedGift(gift);
      setShowCancelModal(true);
      setErrorMessage("");
      return;
    }
    setSelectedGift(gift);
    setShowModal(true);
  };

  const confirmReservation = () => {
    if (!password.trim() || !selectedGift) return;

    setGifts(
      gifts.map((g) =>
        g.id === selectedGift.id
          ? {
              ...g,
              reserved: true,
              password: password.trim(),
            }
          : g
      )
    );

    setShowModal(false);
    setPassword("");
    setSelectedGift(null);
  };

  const confirmCancellation = () => {
    if (!selectedGift || !cancelPassword.trim()) return;

    // Sprawdź czy hasło się zgadza
    if (selectedGift.password !== cancelPassword.trim()) {
      setErrorMessage("Nieprawidłowe hasło!");
      return;
    }

    setGifts(
      gifts.map((g) =>
        g.id === selectedGift.id
          ? {
              ...g,
              reserved: false,
              reservedBy: undefined,
              password: undefined,
            }
          : g
      )
    );

    setShowCancelModal(false);
    setCancelPassword("");
    setErrorMessage("");
    setSelectedGift(null);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gifts.map((gift) => (
          <div
            key={gift.id}
            className={`p-6 rounded-lg border-2 transition-all cursor-pointer ${
              gift.reserved
                ? "bg-gray-100 border-gray-300 hover:border-gray-400 hover:shadow-md"
                : "bg-white border-pastel-pink/30 hover:border-pastel-rose hover:shadow-lg"
            }`}
            onClick={() => handleReserve(gift)}
          >
            <div className="text-4xl mb-3 text-center">{gift.icon}</div>
            <h3 className="font-serif text-lg text-pastel-rose text-center mb-2">
              {gift.name}
            </h3>
            {gift.description && (
              <p className="text-sm text-foreground/60 text-center mb-3">
                {gift.description}
              </p>
            )}
            {gift.reserved ? (
              <div className="text-center">
                <p className="text-sm text-green-600 font-semibold mb-2">
                  ✓ Zarezerwowane
                </p>
                <p className="text-xs text-pastel-rose font-medium">
                  Kliknij aby anulować
                </p>
              </div>
            ) : (
              <p className="text-sm text-pastel-rose text-center font-medium">
                Kliknij aby zarezerwować
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Modal rezerwacji */}
      {showModal && selectedGift && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="font-serif text-2xl text-pastel-rose mb-4">
              Rezerwacja prezentu
            </h3>
            <div className="mb-6">
              <p className="text-lg mb-2">
                <span className="text-3xl mr-2">{selectedGift.icon}</span>
                {selectedGift.name}
              </p>
              {selectedGift.description && (
                <p className="text-sm text-foreground/60">
                  {selectedGift.description}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground/80 mb-2">
                Ustaw hasło (do anulowania rezerwacji):
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border-2 border-pastel-pink/30 rounded-lg focus:border-pastel-rose focus:outline-none"
                placeholder="Wpisz hasło"
                autoFocus
              />
              <p className="text-xs text-foreground/50 mt-1">
                Zapamiętaj to hasło - będzie potrzebne do anulowania rezerwacji
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={confirmReservation}
                disabled={!password.trim()}
                className="flex-1 px-6 py-3 bg-pastel-rose text-white rounded-lg font-semibold hover:bg-terracotta transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Potwierdź
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  setPassword("");
                  setSelectedGift(null);
                }}
                className="flex-1 px-6 py-3 bg-gray-200 text-foreground rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Anuluj
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal anulowania rezerwacji */}
      {showCancelModal && selectedGift && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="font-serif text-2xl text-pastel-rose mb-4">
              Anulowanie rezerwacji
            </h3>
            <div className="mb-6">
              <p className="text-lg mb-4">
                <span className="text-3xl mr-2">{selectedGift.icon}</span>
                {selectedGift.name}
              </p>
              <p className="text-sm text-foreground/70 mb-4">
                Aby anulować rezerwację, wpisz hasło które zostało ustawione
                podczas rezerwacji.
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-foreground/80 mb-2">
                Hasło:
              </label>
              <input
                type="password"
                value={cancelPassword}
                onChange={(e) => {
                  setCancelPassword(e.target.value);
                  setErrorMessage("");
                }}
                className="w-full px-4 py-2 border-2 border-pastel-pink/30 rounded-lg focus:border-pastel-rose focus:outline-none"
                placeholder="Wpisz hasło"
                autoFocus
              />
              {errorMessage && (
                <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
              )}
            </div>
            <div className="flex gap-3">
              <button
                onClick={confirmCancellation}
                disabled={!cancelPassword.trim()}
                className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Anuluj rezerwację
              </button>
              <button
                onClick={() => {
                  setShowCancelModal(false);
                  setCancelPassword("");
                  setErrorMessage("");
                  setSelectedGift(null);
                }}
                className="flex-1 px-6 py-3 bg-gray-200 text-foreground rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
