import React, { useState } from 'react';
import { CheckCircle2, Printer, DollarSign, Gift, Heart, ChevronDown, Check, ShieldCheck, Lock, Star, Shirt, X } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    { question: 'O que é o E-Book "Do Zero ao Lucro com Ferro de Passar"?', answer: 'É um guia passo a passo que te ensina a criar produtos personalizados usando apenas uma impressora comum e um ferro de passar roupas.' },
    { question: 'Preciso de experiência?', answer: 'Não! O método foi criado exatamente para quem está começando do zero absoluto.' },
    { question: 'Quais impressoras são aceitas?', answer: 'Qualquer impressora jato de tinta comum serve para o processo.' },
    { question: 'Em quanto tempo tenho acesso?', answer: 'O acesso é imediato logo após a confirmação do pagamento.' },
    { question: 'Tem garantia?', answer: 'Sim, você tem 7 dias de garantia incondicional.' },
    { question: 'Como funciona o suporte?', answer: 'Temos um grupo de suporte exclusivo para alunos tirarem todas as dúvidas.' },
    { question: 'O que acontece depois que eu comprar?', answer: 'Você receberá um e-mail com os dados de acesso à nossa plataforma exclusiva.' },
    { question: 'Preciso investir em máquinas caras?', answer: 'Não, o objetivo do curso é justamente te ensinar a lucrar sem precisar de equipamentos caros.' },
    { question: 'Posso parcelar?', answer: 'Sim, você pode parcelar no cartão de crédito.' },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#9966CC] to-[#7B43A8] text-white py-16 px-4 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <h1 className="text-4xl md:text-5xl font-black mb-6 max-w-3xl leading-tight mt-4 relative z-10 drop-shadow-md">
          De zero a suas primeiras vendas em 48 horas criando <span className="text-[#ffeb3b]">produtos personalizados</span> dentro de casa
        </h1>

        <p className="text-xl md:text-2xl mb-10 max-w-2xl relative z-10 font-medium text-purple-100">
          Sem experiência, sem investimento alto e sem depender de ninguém
        </p>
        
        <img 
          src="https://i.ibb.co/39BNDWGZ/image.png" 
          alt="Destaque" 
          className="w-full max-w-2xl mb-8 relative z-10 object-contain bg-transparent"
          referrerPolicy="no-referrer"
        />
        
        <a href="#comprar" className="relative z-10 bg-[#25d366] hover:bg-[#20b858] text-white font-black py-5 px-10 rounded-full text-2xl w-full max-w-md transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.4)] mb-10 flex items-center justify-center whitespace-nowrap">
          👉 COMEÇAR AGORA
        </a>

        <ul className="relative z-10 text-left space-y-4 max-w-md w-full bg-black/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
          {['Liberdade para trabalhar de casa', 'Renda extra (ou principal)', 'Processo fácil de aplicar', 'Ideal para iniciantes'].map((item, i) => (
            <li key={i} className="flex items-center space-x-3">
              <CheckCircle2 className="text-[#ffeb3b] w-6 h-6 flex-shrink-0" />
              <span className="font-medium text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#F3E8FF] py-16 px-4 flex flex-col items-center">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: Printer, text: 'Qualquer impressora, apenas trocando a recarga com tinta e papel transfer' },
            { icon: Shirt, text: 'Qualquer que seja o seu papel, dá pra usar o seu ferro' },
            { icon: DollarSign, text: 'Receba o produto em casa sem ter que sair, direto da sua casa pra sua família' },
            { icon: Gift, text: 'Crie presentes personalizados que as pessoas realmente valorizam' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-purple-100 group">
              <div className="bg-[#4C1D95] text-white p-5 rounded-2xl mb-6 transform group-hover:rotate-6 transition-transform shadow-lg">
                <item.icon className="w-10 h-10" />
              </div>
              <p className="font-bold text-gray-800 text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-[#4C1D95] text-white py-16 px-4 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#5B21B6] rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#9966CC] rounded-full blur-3xl opacity-30 -ml-20 -mb-20"></div>
        
        <h2 className="text-4xl font-black mb-12 text-center relative z-10">Tudo isso com:</h2>
        <ul className="space-y-6 max-w-lg w-full relative z-10">
          {['Sua impressora de casa', 'Um ferro de passar comum', 'Um papel que custa menos de R$1 a folha'].map((item, i) => (
            <li key={i} className="flex items-center space-x-5 bg-[#5B21B6]/50 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl">
              <div className="bg-[#25d366] rounded-full p-2 flex-shrink-0 shadow-lg">
                <Check className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Why it works Section */}
      <section className="bg-white py-16 px-4 flex flex-col items-center">
        <h2 className="text-4xl font-black mb-4 text-center text-gray-900">Por que funciona tão bem?</h2>
        <p className="text-xl mb-12 text-center max-w-md text-gray-600">O que o E-Book te ensinará com:</p>
        
        <div className="max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {['O mercado que mais cresce', 'Tendência para presentes', 'Lucro de até 300% a 500%', 'O segredo de fidelização'].map((item, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 text-gray-800 p-5 rounded-2xl flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle2 className="text-[#9966CC] w-8 h-8 flex-shrink-0" />
              <span className="font-bold text-lg">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#F3E8FF] rounded-3xl p-8 max-w-3xl w-full border border-purple-100 shadow-inner">
          <h3 className="text-2xl font-bold mb-8 text-center text-[#4C1D95]">Veja as vantagens e características:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['🧩 Fácil de fazer', '💰 Alta lucratividade', '⚡ Prático', '🏠 Em casa'].map((item, i) => (
              <div key={i} className="flex items-center justify-center bg-white px-6 py-3 rounded-full shadow-sm border border-purple-50 text-center">
                <span className="font-bold text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imagine Section */}
      <section className="bg-[#9966CC] text-white py-16 px-4 flex flex-col items-center">
        <h2 className="text-4xl font-black mb-12 text-center">Imagina isso...</h2>
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Shirt, text: 'Criar produtos personalizados com um ferro' },
            { icon: Heart, text: 'Fazer presentes para pessoas que você ama' }
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl flex flex-col items-center text-center border border-white/20">
              <div className="bg-white text-[#9966CC] p-5 rounded-2xl mb-6 shadow-lg">
                <item.icon className="w-10 h-10" />
              </div>
              <p className="font-bold text-xl">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who is it for Section */}
      <section className="bg-white py-16 px-4 flex flex-col items-center">
        <h2 className="text-4xl font-black mb-12 text-center text-gray-900">Esse método é para você que...</h2>
        <div className="max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {['Quer empreender em casa', 'Já trabalha com artesanato', 'Quer uma renda extra', 'Gosta de fazer presentes'].map((item, i) => (
            <div key={i} className="bg-[#F3E8FF] text-[#4C1D95] p-5 rounded-2xl flex items-center space-x-4 shadow-sm border border-purple-100">
              <div className="bg-[#9966CC] rounded-full p-1.5 flex-shrink-0 shadow-sm">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="max-w-2xl w-full border-l-4 border-[#9966CC] bg-purple-50 rounded-r-2xl p-6 shadow-sm">
          <p className="text-[#4C1D95] font-bold text-lg flex items-center">
            <span className="text-2xl mr-2">⚠️</span>
            Se você sabe ligar um ferro e apertar “imprimir”, já pode começar.
          </p>
        </div>
      </section>

      {/* What you will learn Section */}
      <section className="bg-gray-50 py-16 px-4 flex flex-col items-center">
        <h2 className="text-4xl font-black mb-12 text-center text-gray-900 max-w-3xl leading-tight">
          O que você leva com o E-Book <br/><span className="text-[#9966CC]">"Do Zero ao Lucro com Ferro de Passar"</span>
        </h2>
        
        <div className="max-w-5xl w-full flex flex-col lg:flex-row gap-12 items-center mb-12">
          <div className="flex-1 w-full relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#9966CC] to-[#F3E8FF] rounded-3xl blur-lg opacity-50"></div>
            <img 
              src="https://i.ibb.co/HLLyB4dN/image.png" 
              alt="Detalhe passando roupa" 
              className="w-full rounded-2xl shadow-2xl object-cover h-80 relative z-10 border border-white"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex-1 w-full space-y-4">
            {[
              'Onde comprar o papel transfer CERTO para não ter surpresas',
              'Como ajustar a sua impressora para evitar custo de recarga',
              'A configuração certa para evitar erros de cor',
              'Como usar a temperatura do ferro pra ter um bom resultado',
              'Dicas de acabamento para valorizar o produto',
              'Dicas de embalagem que deixam um ar de valor'
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl flex items-start space-x-4 shadow-sm border border-gray-100 hover:border-purple-200 transition-colors">
                <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="text-[#9966CC] w-6 h-6" />
                </div>
                <span className="font-medium text-gray-700 text-lg leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <a href="#comprar" className="bg-[#25d366] hover:bg-[#20b858] text-white font-black py-5 px-10 rounded-full text-xl w-full max-w-md text-center transition-transform transform hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.3)] flex items-center justify-center whitespace-nowrap">
          QUERO COMEÇAR AGORA
        </a>
      </section>

      {/* Image Carousel Section */}
      <section className="bg-white py-16 overflow-hidden flex flex-col items-center border-b border-gray-100">
        <h2 className="text-3xl md:text-4xl font-black mb-10 text-center text-gray-900 px-4">Produtos que você pode começar a fazer hoje</h2>
        <div className="w-full relative overflow-hidden p-2">
          <div className="relative z-10 flex space-x-4 animate-marquee w-max">
            {[
              'https://i.ibb.co/9JPdZcY/image.png',
              'https://i.ibb.co/jvXp97R8/image.png',
              'https://i.ibb.co/ccPrhqR3/image.png',
              'https://i.ibb.co/xtnZ9Vp3/image.png',
              'https://i.ibb.co/xqHk3JCf/image.png',
              'https://i.ibb.co/9JPdZcY/image.png',
              'https://i.ibb.co/jvXp97R8/image.png',
              'https://i.ibb.co/ccPrhqR3/image.png',
              'https://i.ibb.co/xtnZ9Vp3/image.png',
              'https://i.ibb.co/xqHk3JCf/image.png'
            ].map((src, i) => (
              <img 
                key={i}
                src={src} 
                alt={`Produto personalizado ${i + 1}`} 
                className="w-64 h-64 rounded-2xl shadow-xl object-cover border-4 border-gray-100 flex-shrink-0"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-4 flex flex-col items-center">
        <h2 className="text-4xl font-black mb-12 text-center text-gray-900">Depoimentos reais</h2>
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: 'Maria Silva', text: '"Fiz 10 peças no fim de semana. Vendi todas! O E-book me ajudou muito!"', initial: 'M' },
            { name: 'Ana Souza', text: '"Nunca pensei que depois de ver um vídeo eu ia ter uma fonte de renda!"', initial: 'A' }
          ].map((item, i) => (
            <div key={i} className="bg-[#F3E8FF] text-gray-800 p-8 rounded-3xl shadow-sm border border-purple-100 relative">
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <div className="bg-[#9966CC] text-white p-3 rounded-full shadow-lg">
                  <Star className="w-6 h-6 fill-current" />
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-[#4C1D95] text-white rounded-full flex items-center justify-center font-black text-2xl shadow-inner">
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-bold text-xl">{item.name}</h4>
                  <div className="flex text-[#ffeb3b] mt-1">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
              </div>
              <p className="italic text-lg text-gray-700 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="comprar" className="bg-gray-50 py-20 px-4 flex flex-col items-center relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
        </div>

        <h2 className="text-4xl font-black text-gray-900 mb-4 text-center relative z-10">Escolha o seu pacote</h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-2xl relative z-10">Comece a lucrar hoje mesmo com a opção ideal para você. O acesso é imediato.</p>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl w-full justify-center items-stretch relative z-10">
          {/* Pacote Básico */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 flex-1 flex flex-col relative shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-3xl font-black text-gray-800 mb-2">Pacote Básico</h3>
            <p className="text-gray-500 mb-8 text-lg">O essencial para começar</p>
            <div className="mb-8">
              <span className="text-6xl font-black text-gray-900">R$ 10<span className="text-3xl">,00</span></span>
            </div>
            <ul className="space-y-5 mb-10 flex-1">
              <li className="flex items-start space-x-4">
                <CheckCircle2 className="text-[#9966CC] w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium text-lg">E-Book Completo</span>
              </li>
              <li className="flex items-start space-x-4">
                <CheckCircle2 className="text-[#9966CC] w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium text-lg">Acesso Vitalício</span>
              </li>
            </ul>
            <button 
              onClick={() => setShowPopup(true)}
              className="w-full py-5 rounded-full font-black text-lg border-2 border-[#9966CC] text-[#9966CC] hover:bg-[#F3E8FF] transition-colors"
            >
              COMPRAR PACOTE BÁSICO
            </button>
          </div>

          {/* Pacote Premium */}
          <div className="bg-gradient-to-b from-[#4C1D95] to-[#3B0764] text-white rounded-3xl p-8 flex-1 flex flex-col relative shadow-2xl transform lg:-translate-y-6 border-4 border-[#ffeb3b]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffeb3b] text-gray-900 font-black px-8 py-2 rounded-full text-sm uppercase tracking-widest shadow-lg whitespace-nowrap">
              Mais Recomendado
            </div>
            <h3 className="text-3xl font-black mb-2 mt-4 text-white">Pacote Premium</h3>
            <p className="text-purple-200 mb-8 text-lg">Tudo do básico + Bônus Exclusivos</p>
            <div className="mb-8">
              <span className="text-6xl font-black text-[#25d366]">R$ 29<span className="text-3xl">,90</span></span>
            </div>
            <ul className="space-y-3 mb-10 flex-1">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="text-[#ffeb3b] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-medium text-base">E-Book Completo</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="text-[#ffeb3b] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-medium text-base">Acesso Vitalício</span>
              </li>
              <li className="flex items-start space-x-3 bg-white/10 p-2 rounded-lg">
                <Gift className="text-[#ffeb3b] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-[#ffeb3b]">🎨 250 Artes Prontas em Alta Resolução (é só imprimir e vender)</span>
              </li>
              <li className="flex items-start space-x-3 bg-white/10 p-2 rounded-lg">
                <Gift className="text-[#ffeb3b] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-[#ffeb3b]">💰 Guia de Precificação Estratégica</span>
              </li>
              <li className="flex items-start space-x-3 bg-white/10 p-2 rounded-lg">
                <Gift className="text-[#ffeb3b] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-[#ffeb3b]">📊 Planilha de Controle de Vendas</span>
              </li>
              <li className="flex items-start space-x-3 bg-white/10 p-2 rounded-lg">
                <Gift className="text-[#ffeb3b] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-[#ffeb3b]">🔎 Lista de Fornecedores Baratos</span>
              </li>
              <li className="flex items-start space-x-3 bg-white/10 p-2 rounded-lg">
                <Gift className="text-[#ffeb3b] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-[#ffeb3b]">📦 Lista de Produtos Mais Vendidos</span>
              </li>
              <li className="flex items-start space-x-3 bg-white/10 p-2 rounded-lg">
                <Gift className="text-[#ffeb3b] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-[#ffeb3b]">🧠 Ideias de Personalizados Lucrativos</span>
              </li>
              <li className="flex items-start space-x-3 bg-white/10 p-2 rounded-lg">
                <Gift className="text-[#ffeb3b] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-[#ffeb3b]">🎯 Guia de Primeiras Vendas em 48h</span>
              </li>
              <li className="flex items-start space-x-3 bg-white/10 p-2 rounded-lg">
                <Gift className="text-[#ffeb3b] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-[#ffeb3b]">📲 Modelos de Posts para Divulgação</span>
              </li>
              <li className="flex items-start space-x-3 bg-white/10 p-2 rounded-lg">
                <Gift className="text-[#ffeb3b] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-[#ffeb3b]">💬 Scripts prontos para vender no WhatsApp</span>
              </li>
              <li className="flex items-start space-x-3 bg-white/10 p-2 rounded-lg">
                <Gift className="text-[#ffeb3b] w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-[#ffeb3b]">🏷️ Modelos de nomes e frases que vendem</span>
              </li>
            </ul>
            <a 
              href="https://pay.lowify.com.br/go.php?offer=fkphscr"
              className="flex items-center justify-center w-full py-5 rounded-full font-black text-xl bg-[#25d366] hover:bg-[#20b858] text-white transition-transform transform hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.4)] whitespace-nowrap"
            >
              PACOTE PREMIUM
            </a>
            <div className="flex justify-center space-x-2 text-sm opacity-80 mt-6">
              <Lock className="w-5 h-5" />
              <span>Compra 100% Segura e Criptografada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-white py-16 px-4 flex flex-col items-center text-center">
        <div className="max-w-3xl w-full bg-[#F3E8FF] rounded-3xl p-10 border border-purple-100 shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="bg-[#9966CC] text-white p-6 rounded-full shadow-inner flex-shrink-0">
            <ShieldCheck className="w-16 h-16" />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-black mb-4 text-[#4C1D95]">7 Dias de Garantia</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Se você não gostar do conteúdo, ou achar que não é pra você, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 px-4 flex flex-col items-center">
        <h2 className="text-4xl font-black mb-12 text-center text-gray-900">Perguntas Frequentes</h2>
        <div className="max-w-3xl w-full space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 flex justify-between items-center font-bold text-lg text-gray-800 hover:bg-gray-50 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-6 h-6 text-[#9966CC] transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="p-6 pt-0 bg-white text-gray-600 text-lg border-t border-gray-50 mt-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3B0764] text-purple-200 py-12 px-4 text-center text-sm">
        <p className="mb-6 opacity-80">© 2024 - Todos os direitos reservados</p>
        <div className="flex justify-center space-x-6 opacity-80">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
        </div>
      </footer>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 bg-gray-100 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-8 mt-4">
              <div className="bg-red-100 text-red-600 font-black px-5 py-2 rounded-full inline-block mb-6 text-sm uppercase tracking-widest">
                Espere! Oferta Única
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4 leading-tight">Leve o Pacote Premium com Desconto!</h3>
              <p className="text-gray-600 text-lg mb-6">
                Antes de finalizar, que tal levar todos os bônus exclusivos do Pacote Premium <span className="whitespace-nowrap">por apenas <span className="font-black text-[#25d366] text-2xl ml-1">R$ 17,90</span>?</span>
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-4 mb-6 text-left border border-gray-100 h-48 overflow-y-auto">
                <p className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wider">O que você vai levar a mais:</p>
                <ul className="space-y-2">
                  {[
                    '🎨 250 Artes Prontas em Alta Resolução',
                    '💰 Guia de Precificação Estratégica',
                    '📊 Planilha de Controle de Vendas',
                    '🔎 Lista de Fornecedores Baratos',
                    '📦 Lista de Produtos Mais Vendidos',
                    '🧠 Ideias de Personalizados Lucrativos',
                    '🎯 Guia de Primeiras Vendas em 48h',
                    '📲 Modelos de Posts para Divulgação',
                    '💬 Scripts prontos para vender no WhatsApp',
                    '🏷️ Modelos de nomes e frases que vendem'
                  ].map((bonus, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm">
                      <CheckCircle2 className="text-[#25d366] w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <a 
                href="https://pay.lowify.com.br/go.php?offer=hc10iy4"
                className="block text-center w-full py-5 rounded-2xl font-black text-xl bg-[#25d366] hover:bg-[#20b858] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-transform transform hover:scale-105"
              >
                SIM! QUERO O PREMIUM POR R$ 17,90
              </a>
              
              <a 
                href="https://pay.lowify.com.br/checkout.php?product_id=j69gPp"
                className="block text-center w-full py-4 rounded-2xl font-bold text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
              >
                Não, obrigado. Quero continuar com o plano básico.
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
