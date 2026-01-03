"use client";

import { useEffect, useMemo, useState } from "react";

interface Gift {
  id: number;
  name: string;
  description?: string;
  icon: string;
  reserved: boolean;
  password?: string;
}

const API_URL =
  "https://script.google.com/macros/s/AKfycby9bD1yDStxIPR7NQaGoagggKdwhS7JL46NBbvuv8J-2ymxu5aKBc7Nw_v23kYyxFf1/exec";

const initialGifts: Gift[] = [
  { id: 1, name: "Zestaw sztućców", icon: "🍴", reserved: false },
  { id: 2, name: "Blender", description: "", icon: "🥤", reserved: false },
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

type RemoteGift = { id: number; reserved: boolean; password?: string };

function mergeRemote(prev: Gift[], remote: RemoteGift[]) {
  const map = new Map<number, RemoteGift>();
  for (const r of remote) map.set(r.id, r);

  return prev.map((g) => {
    const r = map.get(g.id);
    if (!r) return g;
    return {
      ...g,
      reserved: !!r.reserved,
      // UWAGA: nie musisz trzymać password w stanie, ale zostawiam żeby zachować spójność z Twoją logiką
      password: r.password || undefined,
    };
  });
}

async function apiGet(): Promise<RemoteGift[]> {
  const res = await fetch(API_URL, { method: "GET", cache: "no-store" });
  const data = await res.json(); // { gifts: [...] }
  if (!res.ok) throw new Error(data?.error || "GET failed");
  return Array.isArray(data.gifts) ? data.gifts : [];
}

async function apiPost(payload: {
  id: number;
  action: "reserve" | "cancel";
  password: string;
}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = data?.error || "Request failed";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err: any = new Error(msg);
    err.status = res.status;
    throw err;
  }
  return data;
}

export default function GiftList() {
  const [gifts, setGifts] = useState<Gift[]>(initialGifts);

  const [showModal, setShowModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  const [password, setPassword] = useState("");
  const [cancelPassword, setCancelPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const selectedId = useMemo(() => selectedGift?.id ?? null, [selectedGift]);

  const refresh = async () => {
    try {
      const remote = await apiGet();
      setGifts((prev) => mergeRemote(prev, remote));
    } catch (e) {
      console.error("Failed to refresh gifts:", e);
    }
  };

  // initial load + polling co 15s
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh();
    const t = setInterval(refresh, 15000);
    return () => clearInterval(t);
  }, []);

  // Gdy otwierasz modal, wyczyść błędy
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setErrorMessage("");
  }, [showModal, showCancelModal, selectedId]);

  const handleReserve = (gift: Gift) => {
    setSelectedGift(gift);
    setErrorMessage("");

    if (gift.reserved) {
      setShowCancelModal(true);
      return;
    }
    setShowModal(true);
  };

  const closeReserveModal = () => {
    setShowModal(false);
    setPassword("");
    setSelectedGift(null);
    setErrorMessage("");
    setLoading(false);
  };

  const closeCancelModal = () => {
    setShowCancelModal(false);
    setCancelPassword("");
    setSelectedGift(null);
    setErrorMessage("");
    setLoading(false);
  };

  const confirmReservation = async () => {
    if (!password.trim() || !selectedGift) return;

    setLoading(true);
    try {
      await apiPost({
        id: selectedGift.id,
        action: "reserve",
        password: password.trim(),
      });

      // odśwież z “bazy”, żeby mieć prawdę o stanie (i obsłużyć wyścigi)
      await refresh();

      closeReserveModal();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      // 409 = ktoś zdążył zarezerwować
      if (e?.status === 409)
        setErrorMessage("Ktoś właśnie zarezerwował ten prezent 😅 Odświeżam…");
      else setErrorMessage(e?.message || "Nie udało się zarezerwować.");

      await refresh();
      setLoading(false);
    }
  };

  const confirmCancellation = async () => {
    if (!selectedGift || !cancelPassword.trim()) return;

    setLoading(true);
    try {
      await apiPost({
        id: selectedGift.id,
        action: "cancel",
        password: cancelPassword.trim(),
      });

      await refresh();

      closeCancelModal();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      if (e?.status === 403) setErrorMessage("Nieprawidłowe hasło!");
      else setErrorMessage(e?.message || "Nie udało się anulować.");

      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-foreground/60">
          Lista aktualizuje się automatycznie co ~15 sekund.
        </p>
        <button
          onClick={refresh}
          className="px-4 py-2 rounded-lg border-2 border-pastel-pink/30 hover:border-pastel-rose transition-all"
        >
          Odśwież
        </button>
      </div>

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
                Prosimy nie używać ważnych haseł. Hasło służy jedynie do ochrony
                przed przypadkowym anulowaniem rezerwacji.
                <br />
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

              {errorMessage && (
                <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={confirmReservation}
                disabled={!password.trim() || loading}
                className="flex-1 px-6 py-3 bg-pastel-rose text-white rounded-lg font-semibold hover:bg-terracotta transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Rezerwuję..." : "Potwierdź"}
              </button>
              <button
                onClick={closeReserveModal}
                disabled={loading}
                className="flex-1 px-6 py-3 bg-gray-200 text-foreground rounded-lg font-semibold hover:bg-gray-300 transition-colors disabled:opacity-50"
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
                Aby anulować rezerwację, wpisz hasło ustawione podczas
                rezerwacji.
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
                disabled={!cancelPassword.trim() || loading}
                className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Anuluję..." : "Anuluj rezerwację"}
              </button>
              <button
                onClick={closeCancelModal}
                disabled={loading}
                className="flex-1 px-6 py-3 bg-gray-200 text-foreground rounded-lg font-semibold hover:bg-gray-300 transition-colors disabled:opacity-50"
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
