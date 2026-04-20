import React from 'react';
import { CheckCircle, TrendingUp, Award, Store, FileSpreadsheet, PenTool, Instagram, MessageCircle, ChevronRight, ArrowDown, Beef, Target, LayoutDashboard, BadgeCheck } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500/30">
      
      {/* HEADER / HERO SECTION */}
      <header className="relative overflow-hidden min-h-[85vh] flex items-center py-16 lg:py-24">
        {/* Background with Ken Burns Effect */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=2000" 
            alt="Fundo mostrando açougueiro profissional preparando carne" 
            className="w-full h-full object-cover opacity-40"
            style={{ animation: 'kenBurns 20s ease-out infinite alternate' }}
            loading="eager" decoding="async" fetchPriority="high"
          />
          {/* Premium Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_120%)]"></div>
        </div>

        <style>{`
          @keyframes kenBurns {
            0% { transform: scale(1) translate(0, 0); }
            100% { transform: scale(1.08) translate(-1%, -1%); }
          }
        `}</style>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center lg:items-start max-w-3xl">
            {/* Logo */}
            <div className="w-32 h-32 lg:w-40 lg:h-40 mb-8 relative group">
              <div className="absolute inset-0 rounded-full border-t-2 border-[#d4af37] animate-[spin_4s_linear_infinite] opacity-70"></div>
              <img 
                src="https://i.ibb.co/7Jfg2T4x/IMG-4648.png" 
                alt="Logomarca da LF Consultoria" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]" 
                loading="eager" decoding="async" fetchPriority="high"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-center lg:text-left drop-shadow-2xl">
              TRANSFORME SEU AÇOUGUE EM UM NEGÓCIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#fceabb] to-[#d4af37] animate-pulse">PROFISSIONAL E IRRESISTÍVEL</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 text-center lg:text-left max-w-2xl font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Pare de perder dinheiro com desorganização e falta de padrão no seu açougue.
            </p>

            <a href="https://wa.link/8xjwzs" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-gradient-to-r from-[#d4af37] via-[#e5c048] to-[#b5952f] hover:from-[#e5c048] hover:via-[#fceabb] hover:to-[#c6a640] text-black font-black py-4 sm:py-5 px-6 sm:px-10 rounded-lg text-base sm:text-lg md:text-xl transition-all transform hover:-translate-y-1 hover:scale-105 shadow-[0_10px_40px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 sm:gap-3 group text-center">
              QUERO TRANSFORMAR MEU AÇOUGUE
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform shrink-0" />
            </a>

            <div className="mt-10 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base font-medium text-gray-300 bg-black/40 backdrop-blur-md py-3 px-4 sm:px-6 rounded-2xl sm:rounded-full border border-white/10 shadow-xl text-center max-w-full">
              <span className="text-green-500 animate-bounce shrink-0">🇧🇷</span>
              <span>Método validado em mais de <strong className="text-white">300 lojas</strong> no Brasil</span>
            </div>
          </div>
        </div>
      </header>

      {/* AÇOUGUE PRÓ 2.0 BANNER */}
      <section className="bg-gradient-to-b from-neutral-950 via-red-950/20 to-black py-16 sm:py-24 border-y border-red-900/30 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm">
            <p className="text-sm sm:text-base font-bold text-[#d4af37] uppercase tracking-widest">
              A Consultoria que te traz lucro
            </p>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white mb-12 drop-shadow-2xl">
            AÇOUGUE PRÓ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">2.0</span>
          </h2>

          <div className="flex flex-col gap-4 sm:gap-6 max-w-4xl mx-auto text-left">
            {[
              "Layoutização / Treinamento de Cortes Especiais / Técnicas de Montagem de Balcões",
              "Treinamento de Produtos Artesanais",
              "Treinamento de Gestão de Açougue",
              "Treinamento Operacional do Açougue"
            ].map((text, i) => (
              <div key={i} className="group flex items-center gap-4 sm:gap-6 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/5 hover:border-[#d4af37]/50 p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:-translate-y-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b5952f] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
                <p className="text-base sm:text-lg md:text-xl font-bold text-gray-200 group-hover:text-white transition-colors">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS VISÍVEIS */}
      <section className="py-12 sm:py-20 bg-[#111]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">RESULTADOS VISÍVEIS DE TRANSFORMAÇÃO</h2>
            <div className="w-16 sm:w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="space-y-4">
              <div className="aspect-[9/16] bg-neutral-800 rounded-xl overflow-hidden border-4 border-neutral-700 relative group">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/lkLa_sYICpY" title="Vídeo mostrando exposição desorganizada antes da consultoria" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase rounded pointer-events-none" aria-hidden="true">Antes</div>
              </div>
              <p className="text-center text-gray-400 font-medium">Exposição desorganizada e iluminação deficiente</p>
            </div>
            
            <div className="space-y-4">
              <div className="aspect-[9/16] bg-neutral-800 rounded-xl overflow-hidden border-4 border-[#d4af37] relative">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/mVmPZjHSNNE" title="Vídeo mostrando cortes organizados e atraentes depois da consultoria" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 uppercase rounded pointer-events-none" aria-hidden="true">Depois</div>
              </div>
              <p className="text-center text-[#d4af37] font-bold">Vitrines limpas, cortes organizados e atraentes</p>
            </div>

            <div className="space-y-4">
              <div className="aspect-[9/16] bg-neutral-800 rounded-xl overflow-hidden border-4 border-neutral-700 relative group">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/wTBcIhaacoY" title="Vídeo mostrando falta de padrão antes da consultoria" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase rounded pointer-events-none" aria-hidden="true">Antes</div>
              </div>
              <p className="text-center text-gray-400 font-medium">Aparência de "velho" e falta de padrão</p>
            </div>
            
            <div className="space-y-4">
              <div className="aspect-[9/16] bg-neutral-800 rounded-xl overflow-hidden border-4 border-[#d4af37] relative">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/zYFeRgmQ5lo" title="Vídeo mostrando padrão profissional de exposição depois da consultoria" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 uppercase rounded pointer-events-none" aria-hidden="true">Depois</div>
              </div>
              <p className="text-center text-[#d4af37] font-bold">Padrão profissional de exposição e apresentação</p>
            </div>
          </div>

          {/* MORE GALLERY SECTIONS */}
          <div className="space-y-16 sm:space-y-20 max-w-5xl mx-auto border-t border-neutral-800 pt-12 sm:pt-16">
            
            {/* CÂMARA FRIA */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-center mb-6 sm:mb-8 uppercase tracking-widest">Câmara Fria</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-[9/16] bg-neutral-800 rounded-lg overflow-hidden relative group border-4 border-neutral-700">
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/kS3cC5m1Vtg" title="Vídeo da câmara fria antes da organização" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase rounded pointer-events-none" aria-hidden="true">Antes</div>
                </div>
                <div className="aspect-[9/16] bg-neutral-800 rounded-lg overflow-hidden relative border-4 border-[#d4af37]">
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/yBSP1AO6s74" title="Vídeo da câmara fria organizada depois da consultoria" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 uppercase rounded pointer-events-none" aria-hidden="true">Depois</div>
                </div>
              </div>
            </div>

            {/* CORTES ESPECIAIS */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-center mb-6 sm:mb-8 uppercase tracking-widest">Cortes Especiais</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src="https://i.ibb.co/KC3dZf0/IMG-7834-JPG.jpg" alt="Corte Especial 1" className="w-full aspect-square object-cover rounded-lg border-2 border-neutral-800 hover:border-[#d4af37] transition-colors" loading="lazy" decoding="async" />
                <img src="https://i.ibb.co/tTLQsHVh/IMG-7835-JPG.jpg" alt="Corte Especial 2" className="w-full aspect-square object-cover rounded-lg border-2 border-neutral-800 hover:border-[#d4af37] transition-colors" loading="lazy" decoding="async" />
                <img src="https://i.ibb.co/hFYzt05h/IMG-7836-JPG.jpg" alt="Corte Especial 3" className="w-full aspect-square object-cover rounded-lg border-2 border-neutral-800 hover:border-[#d4af37] transition-colors" loading="lazy" decoding="async" />
                <img src="https://i.ibb.co/bMNxNbBg/IMG-7837-JPG.jpg" alt="Corte Especial 4" className="w-full aspect-square object-cover rounded-lg border-2 border-neutral-800 hover:border-[#d4af37] transition-colors" loading="lazy" decoding="async" />
                <img src="https://i.ibb.co/mV5hm6xF/IMG-7838-JPG.jpg" alt="Corte Especial 5" className="w-full aspect-square object-cover rounded-lg border-2 border-neutral-800 hover:border-[#d4af37] transition-colors" loading="lazy" decoding="async" />
                <img src="https://i.ibb.co/23RMrjX7/IMG-7839-JPG.jpg" alt="Corte Especial 6" className="w-full aspect-square object-cover rounded-lg border-2 border-neutral-800 hover:border-[#d4af37] transition-colors" loading="lazy" decoding="async" />
              </div>
            </div>

            {/* PRODUTOS ARTESANAIS */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-center mb-6 sm:mb-8 uppercase tracking-widest">Treinamento de Produtos Artesanais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img src="https://i.ibb.co/mCG0pVpY/12-1.jpg" alt="Produto Artesanal acompanhamento do treinamento 1" className="w-full aspect-square object-cover rounded-lg border-2 border-neutral-800 hover:border-[#d4af37] transition-colors" loading="lazy" decoding="async" />
                <img src="https://i.ibb.co/bM7Jd64h/12-2.jpg" alt="Produto Artesanal acompanhamento do treinamento 2" className="w-full aspect-square object-cover rounded-lg border-2 border-neutral-800 hover:border-[#d4af37] transition-colors" loading="lazy" decoding="async" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* O SISTEMA ESTRUTURADO */}
      <section className="py-16 sm:py-20 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-black to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 text-[#d4af37]">O SISTEMA ESTRUTURADO PARA O SUCESSO</h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">Nossa metodologia cobre todos os pilares necessários para transformar seu açougue em uma máquina de vendas.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { icon: Beef, title: "Cortes Especiais" },
              { icon: LayoutDashboard, title: "Layoutização" },
              { icon: Store, title: "Fachada & Loja" },
              { icon: FileSpreadsheet, title: "Gestão & Lucro" },
              { icon: Target, title: "Operacional" }
            ].map((item, i) => (
              <div key={i} className={`bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center gap-3 sm:gap-4 transform transition-transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] ${i === 4 ? 'col-span-2 md:col-span-1 w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)] md:w-full mx-auto' : ''}`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-yellow-50 flex items-center justify-center text-[#d4af37]">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-black font-bold text-xs sm:text-sm md:text-base uppercase">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE ESCOLHER */}
      <section className="py-16 sm:py-20 bg-[#111] border-t border-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-12 sm:mb-16">POR QUE ESCOLHER A LF CONSULTORIA?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#d4af37]">
                <Beef className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Especialização no Nicho</h3>
              <p className="text-gray-300 text-sm">Foco 100% em açougues e casas de carnes. Entendemos a sua realidade.</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-neutral-900 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] relative">
                <BadgeCheck className="w-10 h-10 sm:w-12 sm:h-12" />
                <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">300+</div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Método Validado na Prática</h3>
              <p className="text-gray-300 text-sm">Mais de 300 lojas transformadas em todo o Brasil com resultados reais.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#d4af37]">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Resultados Visuais Comprovados</h3>
              <p className="text-gray-300 text-sm">Transformação estética que atrai clientes e aumenta o ticket médio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO PREMIUM */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-neutral-950 to-red-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-md border border-red-900/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#d4af37] mb-6 sm:mb-8 text-center">
              SOLUÇÃO PREMIUM PARA SEU AÇOUGUE
            </h2>
            
            <ul className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {[
                "Transformação de um ambiente desorganizado para uma boutique de carnes.",
                "Implementação de cortes especiais e produtos artesanais de alta rentabilidade.",
                "Técnicas de exposição que vendem sozinhas e reduzem perdas.",
                "Solução premium completa: do layout à gestão financeira."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37] shrink-0 mt-1" />
                  <span className="text-base sm:text-lg md:text-xl text-gray-100 font-medium">{text}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <a href="https://wa.link/8xjwzs" target="_blank" rel="noopener noreferrer" className="inline-block w-full md:w-auto bg-gradient-to-r from-[#d4af37] to-[#b5952f] hover:from-[#e5c048] hover:to-[#c6a640] text-black font-black py-4 sm:py-5 px-6 sm:px-12 rounded-lg text-lg sm:text-xl transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                AGENDAR MINHA CONSULTORIA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VAGAS LIMITADAS */}
      <section className="py-12 sm:py-16 bg-[#d4af37] text-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-2">Vagas limitadas para o curso presencial</h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-red-700 mb-6 sm:mb-8 animate-pulse">Últimas 7 vagas</p>
          
          <a href="https://wa.link/8xjwzs" target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto bg-black text-white font-black py-4 px-6 sm:px-10 rounded-lg text-lg sm:text-xl hover:bg-neutral-800 transition-colors items-center justify-center gap-2 mx-auto">
            QUERO GARANTIR MINHA VAGA NO CURSO PRESENCIAL
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </section>

      {/* SOCIAL & FOOTER */}
      <footer className="bg-black pt-16 pb-8 border-t border-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <a href="https://www.instagram.com/lfconsultoria.oficial?igsh=MW45ODRxNXFmMjUzdQ==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-xl hover:scale-105 transition-transform">
              <div className="bg-black/20 backdrop-blur-sm px-6 py-4 rounded-lg flex items-center gap-4 w-full">
                <Instagram className="w-8 h-8 text-white" />
                <div className="text-left">
                  <p className="text-xs font-bold text-white/80 uppercase">Me acompanhe no</p>
                  <p className="text-xl font-black text-white">INSTAGRAM</p>
                </div>
              </div>
            </a>
            
            <a href="https://wa.link/8xjwzs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-gradient-to-r from-green-500 to-emerald-700 p-1 rounded-xl hover:scale-105 transition-transform">
              <div className="bg-black/20 backdrop-blur-sm px-6 py-4 rounded-lg flex items-center gap-4 w-full">
                <MessageCircle className="w-8 h-8 text-white" />
                <div className="text-left">
                  <p className="text-xs font-bold text-white/80 uppercase">Fale comigo no</p>
                  <p className="text-xl font-black text-white">WHATSAPP</p>
                </div>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-500 border-t border-neutral-900 pt-8">
            <div className="col-span-1 md:col-span-1 flex items-center justify-center md:justify-start">
              <img 
                src="https://i.ibb.co/7Jfg2T4x/IMG-4648.png" 
                alt="Logomarca da LF Consultoria no rodapé" 
                className="w-24 h-auto object-contain drop-shadow-lg" 
                loading="lazy" decoding="async"
              />
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase">Consultoria</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">Consultoria Online</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">Consultoria Presencial</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">Cursos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase">Contato</h4>
              <ul className="space-y-2">
                <li><a href="mailto:Leomaroliveira73@gmail.com" className="hover:text-[#d4af37] transition-colors">Leomaroliveira73@gmail.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-gray-600 text-xs mt-12">
            &copy; {new Date().getFullYear()} LF Consultoria. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
