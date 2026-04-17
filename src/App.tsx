import { useState } from "react";

const PHONE = "865302851";
const INSTAGRAM = "https://www.instagram.com/bisso.barybrasas";
const MAPS_QUERY = "Bisso+Bar+Brasa+y+Leña";

/* ── Menu data ────────────────────────────────────────────────── */

type Item = { name: string; price: string };
type Section = { title: string; items: Item[] };

const MENU_CARTA: Section[] = [
  {
    title: "Tostadas",
    items: [
      { name: "Mantequilla (pan normal)", price: "1,40" },
      { name: "Mantequilla (pan cereales)", price: "1,90" },
      { name: "Mantequilla (pan sin gluten)", price: "1,90" },
      { name: "Mantequilla y mermelada (pan normal)", price: "1,50" },
      { name: "Mantequilla y mermelada (pan cereales)", price: "2,00" },
      { name: "Mantequilla y mermelada (pan sin gluten)", price: "2,00" },
      { name: "Aceite (pan normal)", price: "1,20" },
      { name: "Aceite (pan cereales)", price: "1,40" },
      { name: "Aceite (pan sin gluten)", price: "1,40" },
    ],
  },
  {
    title: "Tapas Varias",
    items: [
      { name: "Ensaladilla", price: "4,00" },
      { name: "Ensaladilla Murciana", price: "4,00" },
      { name: "Magro con Tomate", price: "4,00" },
      { name: "Tortilla de Patatas", price: "3,00" },
      { name: "Patatas Bravas", price: "5,00" },
      { name: "Patatas Fritas", price: "4,50" },
      { name: "Croquetas de Jamón", price: "2,00" },
      { name: "Croquetas de Pollo", price: "2,00" },
      { name: "Provolone a la Brasa", price: "8,00" },
      { name: "Empanada de Pollo", price: "3,50" },
      { name: "Empanada de Carne", price: "3,50" },
    ],
  },
  {
    title: "Ensaladas",
    items: [
      { name: "Ensalada Caesar", price: "9,00" },
      { name: "Ensalada Mixta", price: "6,50" },
      { name: "Ensalada Mediterránea", price: "7,50" },
    ],
  },
  {
    title: "Platos Combinados",
    items: [
      { name: "Pechuga de Pollo a la Brasa", price: "12,00" },
      { name: "Cachopo de Ternera", price: "16,00" },
      { name: "Chuletón con guarnición patatas o ensalada", price: "Consultar" },
      { name: "Finger de Pollo", price: "10,00" },
      { name: "Milanesa de Ternera", price: "12,00" },
      { name: "Flamenquines", price: "10,00" },
      { name: "Cordon Blue", price: "13,00" },
      { name: "Pulpo Braseado", price: "20,00" },
    ],
  },
  {
    title: "Ricas Carnes a las Brasas",
    items: [
      { name: "Chuletón de Ternera", price: "Consultar" },
      { name: "Costillas de Ternera", price: "Consultar" },
      { name: "Lomo Alto", price: "23,00" },
      { name: "Vacío de Ternera", price: "23,00" },
      { name: "Entrecot", price: "18,00" },
      { name: "Secreto Ibérico", price: "15,00" },
      { name: "Contramuslo Deshuesado", price: "12,00" },
      { name: "Costillas Cerdo (Cocción Lenta)", price: "18,00" },
      { name: "Entrañas de Ternera", price: "15,00" },
    ],
  },
  {
    title: "Parrilladas",
    items: [
      { name: "Parrillada para 2 personas", price: "30,00" },
      { name: "Parrillada para 4 personas", price: "60,00" },
      { name: "Parrillada de Verdura de Estación", price: "Consultar" },
    ],
  },
  {
    title: "Embutidos",
    items: [
      { name: "Chorizo (2 unidades)", price: "8,00" },
      { name: "Morcilla (2 unidades)", price: "3,50" },
      { name: "Salchicha Roja (3 unidades)", price: "3,00" },
      { name: "Salchicha Blanca (3 unidades)", price: "3,00" },
    ],
  },
];

const MENU_POSTRES_BEBIDAS: Section[] = [
  {
    title: "Postres",
    items: [
      { name: "Flan de Huevo (sin gluten)", price: "4,00" },
      { name: "Brownie (sin gluten)", price: "5,50" },
      { name: "Chantilly de fresa", price: "5,00" },
      { name: "Tiramisú", price: "5,00" },
      { name: "Helado Bola Chocolate", price: "3,50" },
      { name: "Helado Bola Fresa", price: "3,50" },
      { name: "Helado Bola Limón", price: "3,50" },
      { name: "Postre Casero", price: "Consultar" },
      { name: "Shot de shownie", price: "5,50" },
    ],
  },
  {
    title: "Bebidas",
    items: [
      { name: "Coca-Cola", price: "2,50" },
      { name: "Coca-Cola Zero", price: "2,50" },
      { name: "Coca-Cola Zero Zero", price: "2,50" },
      { name: "Fanta Naranja", price: "2,50" },
      { name: "Fanta Limón", price: "2,50" },
      { name: "Fuze Tea", price: "2,50" },
      { name: "Sprite", price: "2,50" },
      { name: "Aquarius Limón", price: "2,50" },
      { name: "Aquarius Naranja", price: "2,50" },
      { name: "Agua 500 ml", price: "2,00" },
      { name: "Vichy Catalán", price: "2,40" },
      { name: "Tónica", price: "2,20" },
    ],
  },
  {
    title: "Cervezas",
    items: [
      { name: "Tercio Alhambra Reserva", price: "3,00" },
      { name: "Tercio Mahou", price: "2,50" },
      { name: "Tercio Stella", price: "2,50" },
      { name: "Tercio Heineken", price: "2,50" },
    ],
  },
];

const VINOS: Section[] = [
  {
    title: "Vinos Tintos",
    items: [
      { name: "Vino de la Casa (Copa)", price: "2,00" },
      { name: "Vino de la Casa (Botella)", price: "11,00" },
      { name: "Pomal crianza Rioja (Copa)", price: "4,00" },
      { name: "Pomal crianza Rioja (Botella)", price: "17,50" },
      { name: "Legaris Roble Ribera (Copa)", price: "4,00" },
      { name: "Legaris Roble Ribera (Botella)", price: "17,50" },
      { name: "Legaris Páramos Ribera (Copa)", price: "8,00" },
      { name: "Legaris Páramos Ribera (Botella)", price: "38,00" },
      { name: "Portillo Malbec (Copa)", price: "5,00" },
      { name: "Portillo Malbec (Botella)", price: "22,50" },
      { name: "Salentein Cabernet Sauvignon (Copa)", price: "7,30" },
      { name: "Salentein Cabernet Sauvignon (Botella)", price: "33,00" },
      { name: "La Vicalanda (Copa)", price: "8,00" },
      { name: "La Vicalanda (Botella)", price: "38,00" },
      { name: "Salentein Cabernet Franco (Copa)", price: "7,30" },
      { name: "Salentein Cabernet Franco (Botella)", price: "33,00" },
      { name: "Tinto de Verano", price: "2,50" },
    ],
  },
  {
    title: "Vinos Blancos",
    items: [
      { name: "Vino de la Casa (Copa)", price: "2,00" },
      { name: "Vino de la Casa (Botella)", price: "11,00" },
      { name: "Raimat Albariño (Copa)", price: "4,70" },
      { name: "Raimat Albariño (Botella)", price: "20,50" },
      { name: "La Charla Verdejo (Copa)", price: "4,50" },
      { name: "La Charla Verdejo (Botella)", price: "20,00" },
      { name: "Legarís Sauvignon Blanc (Copa)", price: "5,00" },
      { name: "Legarís Sauvignon Blanc (Botella)", price: "22,50" },
      { name: "Villanueva Albariño (Copa)", price: "5,50" },
      { name: "Villanueva Albariño (Botella)", price: "23,50" },
    ],
  },
  {
    title: "Vinos Rosados",
    items: [
      { name: "Pomal Garnacha (Copa)", price: "4,00" },
      { name: "Pomal Garnacha (Botella)", price: "17,50" },
    ],
  },
  {
    title: "Cavas",
    items: [
      { name: "Benjamín Codorníu", price: "5,70" },
      { name: "Cava Ars Collecta", price: "45,00" },
      { name: "Roger de Flor", price: "15,00" },
    ],
  },
  {
    title: "Alcohol",
    items: [
      { name: "Combinados con Ron", price: "Consultar" },
      { name: "Combinados con Vodka", price: "Consultar" },
      { name: "Combinados con Whisky", price: "Consultar" },
    ],
  },
];

const NAV_LINKS = [
  { label: "Carta", href: "#carta" },
  { label: "Vinos", href: "#vinos" },
  { label: "Horario", href: "#horario" },
  { label: "Contacto", href: "#contacto" },
];

/* ── Components ───────────────────────────────────────────────── */

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-xl border-b border-gold/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img src="/bisso-logo.png" alt="Bisso" className="h-10 w-10 rounded-full" />
          <span className="font-serif text-lg text-gold-light tracking-wide hidden sm:block">
            Bisso
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-medium tracking-[0.2em] uppercase text-white/50 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-wider uppercase text-gold/70 hover:text-gold transition-colors px-3 py-1.5 rounded-full border border-gold/20 hover:border-gold/40"
          >
            Instagram
          </a>
          <a
            href={`tel:${PHONE}`}
            className="text-xs font-semibold tracking-wider uppercase bg-gold text-bg px-4 py-1.5 rounded-full hover:bg-gold-light transition-colors"
          >
            Reservar
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white/60 hover:text-white p-1"
          aria-label="Menú"
        >
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-t border-gold/10 px-5 pb-5">
          <ul className="flex flex-col gap-4 py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium tracking-widest uppercase text-white/70 hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-wider uppercase text-gold text-center py-2.5 rounded-full border border-gold/30"
            >
              Instagram
            </a>
            <a
              href={`tel:${PHONE}`}
              className="text-xs font-semibold tracking-wider uppercase bg-gold text-bg text-center py-2.5 rounded-full"
            >
              Reservar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] sm:min-h-screen px-5 pt-24 pb-16 text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold/[0.06] rounded-full blur-[120px]" />
      </div>
      <img
        src="/bisso-logo.png"
        alt="Bisso Bar y Brasas"
        className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 mb-8 drop-shadow-2xl"
      />
      <h1 className="relative z-10 font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-gold-light tracking-wide mb-4">
        Bisso
      </h1>
      <p className="relative z-10 text-sm sm:text-base tracking-[0.35em] uppercase text-white/40 mb-10 font-light">
        Bar y Brasas
      </p>
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3">
        <a
          href={`tel:${PHONE}`}
          className="rounded-full px-8 py-3.5 bg-gold text-bg text-sm font-semibold tracking-wider hover:bg-gold-light active:scale-95 transition-all"
        >
          Reservar mesa
        </a>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-8 py-3.5 border border-gold/30 text-gold text-sm font-semibold tracking-wider hover:border-gold/60 hover:text-gold-light active:scale-95 transition-all"
        >
          Síguenos en Instagram
        </a>
      </div>
      <a
        href="#carta"
        className="relative z-10 mt-14 sm:mt-20 flex flex-col items-center gap-2 text-[10px] font-semibold tracking-[0.3em] uppercase text-white/30 hover:text-gold/60 transition-colors"
      >
        <span>Ver carta</span>
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
          <path d="M4 7l5 5 5-5" />
        </svg>
      </a>
    </section>
  );
}

function MenuSection({ section }: { section: Section }) {
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="font-serif text-xl sm:text-2xl text-gold mb-5 pb-2 border-b border-gold/20">
        {section.title}
      </h3>
      <ul className="space-y-2.5">
        {section.items.map((item) => (
          <li key={item.name} className="flex justify-between items-baseline gap-3">
            <span className="text-sm sm:text-[15px] text-white/80 leading-snug">{item.name}</span>
            <span className="shrink-0 text-sm font-medium text-gold-light">
              {item.price === "Consultar" ? item.price : `€ ${item.price}`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Carta() {
  return (
    <section id="carta" className="bg-bg-card py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold/60">
            Nuestra carta
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-light mt-3">
            Tostadas, Tapas &amp; Platos
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
          <div>
            {MENU_CARTA.slice(0, 3).map((s) => (
              <MenuSection key={s.title} section={s} />
            ))}
          </div>
          <div>
            {MENU_CARTA.slice(3, 6).map((s) => (
              <MenuSection key={s.title} section={s} />
            ))}
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            {MENU_CARTA.slice(6).map((s) => (
              <MenuSection key={s.title} section={s} />
            ))}
            {MENU_POSTRES_BEBIDAS.map((s) => (
              <MenuSection key={s.title} section={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VinosSection() {
  return (
    <section id="vinos" className="bg-bg py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold/60">
            Selección
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-light mt-3">
            Vinos y Más
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
          <div>
            {VINOS.slice(0, 2).map((s) => (
              <MenuSection key={s.title} section={s} />
            ))}
          </div>
          <div>
            <MenuSection section={VINOS[2]} />
            <MenuSection section={VINOS[3]} />
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <MenuSection section={VINOS[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Horario() {
  return (
    <section id="horario" className="bg-bg-card py-20 sm:py-28 px-5">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold/60">
          Cuándo visitarnos
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-light mt-3 mb-12">
          Horario
        </h2>
        <div className="bg-bg rounded-2xl border border-gold/10 p-8 sm:p-10 space-y-6">
          <p className="font-serif text-2xl sm:text-3xl text-gold-light">
            8:00 — 00:00
          </p>
          <div className="space-y-3 text-sm sm:text-base text-white/60">
            <p><span className="text-gold font-medium">Desayunos</span> — 8:00 a 12:00</p>
            <p><span className="text-gold font-medium">Comidas</span> — 12:00 a 15:30</p>
            <p><span className="text-gold font-medium">Cenas</span> — 20:00 a 23:00</p>
          </div>
          <div className="pt-4 border-t border-gold/10">
            <p className="text-sm text-white/40 tracking-wider uppercase">Martes cerrado</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-bg py-20 sm:py-28 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold/60">
            Encuéntranos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-light mt-3">
            Contacto
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-bg-card rounded-2xl border border-gold/10 p-8 flex flex-col items-center justify-center text-center gap-6">
            <p className="text-sm text-white/40 tracking-wider uppercase">Reservas</p>
            <a
              href={`tel:${PHONE}`}
              className="font-serif text-3xl sm:text-4xl text-gold-light hover:text-gold transition-colors"
            >
              {PHONE.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}
            </a>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <a
                href={`tel:${PHONE}`}
                className="flex-1 rounded-full py-3 bg-gold text-bg text-sm font-semibold tracking-wider text-center hover:bg-gold-light transition-colors"
              >
                Llamar
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full py-3 border border-gold/30 text-gold text-sm font-semibold tracking-wider text-center hover:border-gold/60 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gold/10 min-h-[300px]">
            <iframe
              title="Ubicación Bisso Bar"
              src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              className="w-full h-full min-h-[300px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-bg-card border-t border-gold/10 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/bisso-logo.png" alt="Bisso" className="h-8 w-8 rounded-full opacity-70" />
          <span className="text-xs text-white/30 tracking-widest uppercase">
            Bar y Brasas
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs text-white/30">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            @bisso.barybrasas
          </a>
          <a href={`tel:${PHONE}`} className="hover:text-gold transition-colors">
            {PHONE.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ── App ──────────────────────────────────────────────────────── */

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Nav />
      <Hero />
      <Carta />
      <VinosSection />
      <Horario />
      <Contacto />
      <Footer />
    </div>
  );
}
