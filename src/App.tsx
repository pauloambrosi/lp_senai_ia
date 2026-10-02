import { useEffect, useState } from "react";

const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;
const sitePackagePath = `${import.meta.env.BASE_URL}senai-ia-site-completo.zip`;

const videoHero = `${assetPathPrefix}/video-bg-curso-ia.mp4`;
const imgSenaiLogo = `${assetPathPrefix}/f03ca.png`;
const imgImage4 = `${assetPathPrefix}/50635.png`;
const imgImage5 = `${assetPathPrefix}/867ee.png`;
const imgImage6 = `${assetPathPrefix}/9839b.png`;
const imgImage7 = `${assetPathPrefix}/faf5c.png`;
const imgImage8 = `${assetPathPrefix}/51f67.png`;
const imgBulletIcon = `${assetPathPrefix}/dcbc8.svg`;
const imgIconPratica = `${assetPathPrefix}/bb286.svg`;
const imgIconAcessivel = `${assetPathPrefix}/93469.svg`;
const imgIconPhone = `${assetPathPrefix}/547bd.svg`;
const imgIconEmail = `${assetPathPrefix}/5e55a.svg`;
const imgIconInstagram = `${assetPathPrefix}/95d56.svg`;
const imgIconWork = `${assetPathPrefix}/5f27d.svg`;
const imgIconResp = `${assetPathPrefix}/70e8e.svg`;
const imgIconCourse1 = `${assetPathPrefix}/c66c8.svg`;
const imgIconCourse2 = `${assetPathPrefix}/a8014.svg`;
const imgCheckbox = `${assetPathPrefix}/50fdd.svg`;
const imgArrowDown = `${assetPathPrefix}/15be7.svg`;

function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-up, .fade-in, .scale-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay || "0";
            setTimeout(() => {
              el.classList.add("visible");
            }, parseInt(delay));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useParallax() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const layers = document.querySelectorAll("[data-parallax]");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      layers.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speed = parseFloat(htmlEl.dataset.parallax || "0.3");
        htmlEl.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

function SectionBadge({ children, variant = "yellow" }: { children: React.ReactNode; variant?: "yellow" | "cyan" }) {
  return (
    <div className={`section-badge ${variant} inline-flex items-center gap-2 mb-8`}>
      <img src={variant === "yellow" ? imgBulletIcon : imgBulletIcon} alt="" className="w-3 h-3 opacity-70" />
      {children}
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 bg-gradient-to-b from-[#0f1d49] to-transparent">
      <img src={imgSenaiLogo} alt="SENAI" className="h-10 object-contain" />

      <button
        className="md:hidden text-white p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <div className="w-6 h-0.5 bg-white mb-1 transition-all" style={{ transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
        <div className="w-6 h-0.5 bg-white mb-1 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
        <div className="w-6 h-0.5 bg-white transition-all" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
      </button>

      <div className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-[#0f1d49] md:bg-transparent px-6 md:px-0 pb-6 md:pb-0 gap-4 md:gap-x-[100px] md:gap-y-8 items-start md:items-center`}>
        <a href="#cursos" className="nav-link" onClick={() => setMenuOpen(false)}>Cursos</a>
        <a href="#contato" className="nav-link" onClick={() => setMenuOpen(false)}>Fale Conosco</a>
        <a href="#inscricao" className="btn-cyan-outline text-sm px-6 py-3" onClick={() => setMenuOpen(false)}>INSCREVA-SE</a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0" data-parallax="0.15">
        <video
          src={videoHero}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ minHeight: "100%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1d49] via-[#0f1d49]/80 to-transparent" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none" data-parallax="0.05">
        <div className="absolute top-1/4 right-8 md:right-16 text-[120px] md:text-[200px] lg:text-[260px] font-black italic text-white opacity-5 select-none leading-none">
          IA
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto pl-0 pt-28">
        <div className="max-w-2xl lg:max-w-3xl">
          <p className="fade-in text-[#efefef] text-2xl md:text-3xl lg:text-4xl font-medium italic mb-2" data-delay="100">
            CURSOS DE
          </p>
          <h1 className="fade-in-up font-bold italic text-white text-5xl md:text-7xl lg:text-8xl leading-none mb-8" data-delay="200">
            INTELIGÊNCIA<br />ARTIFICIAL
          </h1>

          <div className="fade-in flex flex-wrap gap-3 mb-10" data-delay="350">
            <span className="hero-badge">
              <img src={imgBulletIcon} alt="" className="w-3 h-3" />
              EAD
            </span>
            <span className="hero-badge">
              <img src={imgBulletIcon} alt="" className="w-3 h-3" />
              20 Horas
            </span>
            <span className="hero-badge">
              <img src={imgBulletIcon} alt="" className="w-3 h-3" />
              Autoinstrucionais
            </span>
          </div>

          <a href="#inscricao" className="btn-yellow fade-in-up inline-flex text-lg md:text-xl px-8 py-4" data-delay="500">
            QUERO APRENDER IA GRÁTIS
          </a>
        </div>
      </div>
    </section>
  );
}

function CoursesSection() {
  return (
    <section id="cursos" className="bg-[#0f1d49] py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <SectionBadge variant="yellow">OS CURSOS</SectionBadge>
          </div>
          <h2 className="fade-in-up font-medium italic text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-8 uppercase">
            A Inteligência Artificial já está<br className="hidden md:block" /> transformando o presente
          </h2>
          <p className="fade-in text-[#efefef] text-lg md:text-2xl max-w-4xl mx-auto" data-delay="150">
            Com o SENAI, você pode desenvolver esse conhecimento e transformar possibilidades em aplicação prática.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="course-card fade-in-up" data-delay="100">
            <div className="flex items-start gap-4 mb-6">
              <div className="icon-box-yellow flex-shrink-0 my-0 ml-0 mr-[69px]">
                <img src={imgIconCourse1} alt="" className="w-10 h-10" />
              </div>
              <div>
                <span className="text-[#1af0ff] text-sm border border-[#1af0ff] rounded-full px-4 py-1">estudantes</span>
                <h3 className="text-white font-bold text-2xl mt-3">INTELIGÊNCIA ARTIFICIAL</h3>
                <p className="text-[#d4db13] text-lg mt-1">Do fundamento à prática</p>
              </div>
            </div>

            <div className="text-[#efefef] text-lg leading-relaxed">
              <p className="font-semibold mb-3">VOCÊ VAI APRENDER A:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Compreender conceitos e possibilidades da IA</li>
                <li>Reconhecer aplicações da IA no trabalho e no dia a dia</li>
                <li>Interagir melhor com ferramentas de IA generativa</li>
                <li>Criar prompts e comandos mais eficazes</li>
                <li>Utilizar IA para produtividade e resolução de problemas</li>
                <li>Avaliar criticamente os resultados gerados</li>
                <li>Reconhecer limitações, riscos e vieses</li>
              </ul>
            </div>

            <div className="mt-8 flex justify-center">
              <a href="#inscricao" className="btn-cyan inline-flex text-base">
                QUERO FAZER ESTE CURSO
              </a>
            </div>
          </div>

          <div className="course-card fade-in-up" data-delay="250">
            <div className="flex items-start gap-4 mb-6">
              <div className="icon-box-yellow flex-shrink-0 my-0 ml-0 mr-[69px]">
                <img src={imgIconCourse2} alt="" className="w-10 h-10" />
              </div>
              <div>
                <span className="text-[#1af0ff] text-sm border border-[#1af0ff] rounded-full px-4 py-1">gestores</span>
                <h3 className="text-white font-bold text-2xl mt-3">INTELIGÊNCIA ARTIFICIAL</h3>
                <p className="text-[#d4db13] text-lg mt-1">Para Gestores da Indústria</p>
              </div>
            </div>

            <div className="text-[#efefef] text-lg leading-relaxed">
              <p className="font-semibold mb-3">VOCÊ VAI APRENDER A:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Compreender conceitos e possibilidades da IA</li>
                <li>Compreender tendências de IA na gestão</li>
                <li>Identificar oportunidades da IA nos processos industriais</li>
                <li>Avaliar como a IA pode contribuir para produtividade</li>
                <li>Utilizar IA no apoio à tomada de decisão</li>
                <li>Criar prompts e comandos mais eficazes</li>
                <li>Compreender os desafios para a adoção de IA</li>
              </ul>
            </div>

            <div className="mt-8 flex justify-center">
              <a href="#inscricao" className="btn-cyan inline-flex text-base">
                QUERO FAZER ESTE CURSO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySenaiSection() {
  return (
    <section className="bg-[#0f1d49] py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-5" data-parallax="0.1">
        <img src={imgImage6} alt="" className="object-cover w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <SectionBadge variant="yellow">IA NO SENAI</SectionBadge>
          </div>
          <h2 className="fade-in-up text-white text-3xl md:text-5xl lg:text-6xl mb-6">
            <span className="font-normal italic">POR QUE APRENDER </span>
            <span className="font-bold italic">IA COM O SENAI?</span>
          </h2>
          <p className="fade-in text-[#efefef] text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed" data-delay="150">
            A transformação digital também está transformando as competências necessárias para o mundo do trabalho. A gente conecta sua experiência em educação profissional e indústria às novas tecnologias.
          </p>
          <p className="fade-in font-bold text-[#1af0ff] text-2xl md:text-3xl mt-8" data-delay="200">
            // CURSOS GRATUITOS! //
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: imgIconPratica,
              iconBox: "cyan",
              title: "Prática",
              bar: "#1af0ff",
              desc: "Conhecimento conectado às possibilidades reais de aplicação da IA.",
              delay: "0",
              iconSize: 78,
            },
            {
              icon: imgIconAcessivel,
              iconBox: "yellow",
              title: "Acessível",
              bar: "#d4db13",
              desc: "Cursos gratuitos, on-line e autoinstrucionais.",
              delay: "100",
              iconSize: 78,
            },
            {
              icon: imgIconWork,
              iconBox: "cyan",
              title: "Conectada ao trabalho",
              bar: "#1af0ff",
              desc: "Conteúdos voltados aos desafios de profissionais.",
              delay: "200",
            },
            {
              icon: imgIconResp,
              iconBox: "yellow",
              title: "Responsável",
              bar: "#d4db13",
              desc: "Uso da Inteligência Artificial com visão crítica, ética e consciente.",
              delay: "300",
            },
          ].map((card) => (
            <div key={card.title} className="feature-card fade-in-up" data-delay={card.delay}>
              <div className={card.iconBox === "yellow" ? "icon-box-yellow" : "icon-box-cyan"}>
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-10 h-10"
                  style={card.iconSize ? { width: card.iconSize, height: card.iconSize } : undefined}
                />
              </div>
              <h3 className="text-white font-bold text-2xl mb-3">{card.title}</h3>
              <div
                className="h-1.5 rounded-full mx-auto mb-4 w-20"
                style={{ background: card.bar }}
              />
              <p className="text-[#efefef] text-lg leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegistrationSection() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    curso: "",
    termos: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm({ ...form, [target.name]: target.checked });
    } else {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inscrição realizada com sucesso! Em breve entraremos em contato.");
  };

  return (
    <section id="inscricao" className="bg-[#0e5e8f] py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" data-parallax="0.08">
        <img src={imgImage5} alt="" className="object-contain w-64 md:w-80" />
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 md:w-1/4 pointer-events-none opacity-30" data-parallax="-0.05">
        <img src={imgImage4} alt="" className="object-contain w-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <SectionBadge variant="cyan">INSCREVA-SE</SectionBadge>
          </div>
          <h2 className="fade-in-up text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-8">
            <span className="font-normal italic">GARANTA SUA VAGA E COMECE<br />AGORA MESMO. </span>
            <span className="font-bold">É GRÁTIS!"</span>
          </h2>
          <p className="fade-in text-[#efefef] text-lg md:text-xl" data-delay="150">
            Preencha o formulário para se inscrever e nossa equipe entrará em contato com você.
          </p>
        </div>

        <div className="bg-[rgba(15,29,73,0.7)] border border-[#1af0ff] rounded-[40px] p-8 md:p-12 fade-in-up" data-delay="200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#9eb3ff] text-lg mb-2">Nome Completo *</label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
                className="form-input"
                style={{ backgroundColor: "rgb(83, 94, 147)", height: "48px" }}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#9eb3ff] text-lg mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="form-input"
                  style={{ backgroundColor: "rgb(83, 94, 147)", height: "48px" }}
                />
              </div>
              <div>
                <label className="block text-[#9eb3ff] text-lg mb-2">Telefone *</label>
                <input
                  type="tel"
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="form-input"
                  style={{ backgroundColor: "rgb(83, 94, 147)", height: "48px" }}
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-[#9eb3ff] text-lg mb-2">Curso</label>
              <select
                name="curso"
                value={form.curso}
                onChange={handleChange}
                className="form-select"
                style={{ height: "48px" }}
              >
                <option value="" disabled>Selecione o curso</option>
                <option value="estudantes">IA para Estudantes</option>
                <option value="gestores">IA para Gestores</option>
              </select>
              <div className="absolute right-6 bottom-4 pointer-events-none">
                <img src={imgArrowDown} alt="" className="w-4 h-4 rotate-90" />
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <img src={imgCheckbox} alt="" className="w-7 h-7" />
              </div>
              <label className="text-[#efefef] text-base leading-relaxed cursor-pointer">
                <input
                  type="checkbox"
                  name="termos"
                  checked={form.termos}
                  onChange={handleChange}
                  className="sr-only"
                />
                Li e concordo com o termos de adesão. Ao continuar, você receberá as orientações necessárias para acessar o curso.
              </label>
            </div>

            <div className="text-center pt-4">
              <button type="submit" className="btn-cyan-outline text-xl px-12 py-4">
                INSCREVER-ME
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="bg-[#0f1d49] py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-1/2 pointer-events-none opacity-40" data-parallax="-0.06">
        <img src={imgImage7} alt="" className="object-contain w-full" />
      </div>
      <div className="absolute right-8 bottom-8 w-1/3 pointer-events-none opacity-60" data-parallax="-0.12">
        <img src={imgImage8} alt="" className="object-contain w-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <SectionBadge variant="yellow">IA NO SENAI</SectionBadge>
          </div>
          <h2 className="fade-in-up text-white text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="font-normal italic">TIRE SUAS </span>
            <span className="font-bold italic">DÚVIDAS</span>
          </h2>
          <p className="fade-in text-[#efefef] text-lg md:text-2xl" data-delay="150">
            Nossa equipe está pronta para ajudá-lo.
          </p>
        </div>

        <div className="space-y-6">
          <div className="contact-card fade-in-up" data-delay="0">
            <div className="flex-shrink-0">
              <div className="icon-box-yellow m-0">
                <img src={imgIconPhone} alt="Telefone" className="w-8 h-8" />
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-2xl">(71) 3287-8058</p>
              <p className="text-[#efefef] text-lg">Seg–Sex, 8h às 18h</p>
            </div>
          </div>

          <div className="contact-card fade-in-up" data-delay="120">
            <div className="flex-shrink-0">
              <div className="icon-box-cyan m-0">
                <img src={imgIconEmail} alt="E-mail" className="w-8 h-8" />
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-2xl">faleconosco@fieb.org.br</p>
              <p className="text-[#efefef] text-lg">Resposta em até 48h</p>
            </div>
          </div>

          <div className="contact-card fade-in-up" data-delay="240">
            <div className="flex-shrink-0">
              <div style={{ background: "rgba(212,219,19,0.15)", border: "1px solid #d4db13" }} className="rounded-[20px] w-20 h-20 flex items-center justify-center m-0">
                <img src={imgIconInstagram} alt="Instagram" className="w-8 h-8" />
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-2xl">@SENAIBahia</p>
              <p className="text-[#efefef] text-lg">Siga-nos no Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a1535] py-8 px-6 md:px-12 text-center">
      <img src={imgSenaiLogo} alt="SENAI" className="h-8 object-contain mx-auto mb-4" />
      <a
        href={sitePackagePath}
        download
        className="inline-block mb-4 text-[#1af0ff] text-sm font-medium underline underline-offset-4 hover:text-white transition-colors"
      >
        Baixar pacote completo do site (.zip)
      </a>
      <p className="text-[#efefef]/60 text-sm">
        © {new Date().getFullYear()} SENAI Bahia. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default function App() {
  useScrollAnimation();
  useParallax();

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <WhySenaiSection />
      <RegistrationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
