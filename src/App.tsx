import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Printer, 
  DollarSign, 
  Gift, 
  Heart, 
  ChevronDown, 
  Check, 
  ShieldCheck, 
  Lock, 
  Star,
  Shirt
} from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { question: 'O que é o E-Book "Do Zero ao Lucro com Ferro de Passar"?', answer: 'É um guia passo a passo que te ensina a criar produtos personalizados usando apenas uma impressora comum e um ferro de passar roupas.' },
    { question: 'Preciso de experiência?', answer: 'Não! O método foi criado exatamente para quem está começando do zero absoluto.' },
    { question: 'Quais impressoras são aceitas?', answer: 'Qualquer impressora jato de tinta comum serve para o processo.' },
    { question: 'Em quanto tempo tenho acesso?', answer: 'O acesso é imediato logo após a confirmação do pagamento.' },
    { question: 'Tem garantia?', answer: 'Sim, você tem 7 dias de garantia incondicional.' },
    { question: 'Como funciona o suporte?', answer: 'Temos um grupo de suporte exclusivo para alunos tirarem todas as dúvidas.' },
    { question: 'O que acontece depois que eu comprar?', answer: 'Você receberá um e-mail com os dados de acesso à nossa plataforma exclusiva.' },
    { question: 'Preciso investir em máquinas caras?', answer: 'Não, o objetivo do curso é justamente te ensinar a lucrar sem precisar de equipamentos caros.' },
    { question: 'Posso parcelar?', answer: 'Sim, você pode parcelar em até 2x no cartão de crédito.' },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#d81b60] text-white py-12 px-4 flex flex-col items-center text-center">
        <img 
          src="https://images.unsplash.com/photo-1585241936939-072171f1122a?q=80&w=800&auto=format&fit=crop" 
          alt="Pessoa passando roupa" 
          className="w-full max-w-md rounded-lg shadow-lg mb-8 object-cover h-64"
          referrerPolicy="no-referrer"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl leading-tight">
          Como criar <span className="text-[#ffeb3b]">produtos personalizados</span> que vendem em até 24 horas usando apenas uma impressora comum e um ferro de passar roupa
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Aprenda um método simples, validado, passo a passo, direto ao ponto de como lucrar vendendo produtos criados em casa.
        </p>
        
        <a href="#comprar" className="bg-[#25d366] hover:bg-[#20b858] text-white font-bold py-4 px-8 rounded-full text-xl w-full max-w-md transition-transform transform hover:scale-105 shadow-lg mb-8">
          QUERO COMEÇAR AGORA
        </a>

        <ul className="text-left space-y-3 max-w-md w-full">
          {[
            'Sem precisar de impressora especial',
            'Sem depender de gráfica',
            'Sem investir pesado',
            'Sem experiência anterior'
          ].map((item, i) => (
            <li key={i} className="flex items-center space-x-3">
              <CheckCircle2 className="text-[#ffeb3b] w-6 h-6 flex-shrink-0" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#fce4ec] py-12 px-4 flex flex-col items-center">
        <div className="max-w-md w-full space-y-4">
          {[
            { icon: Printer, text: 'Qualquer impressora, apenas trocando a recarga com tinta e papel transfer' },
            { icon: Shirt, text: 'Qualquer que seja o seu papel, dá pra usar o seu ferro' },
            { icon: DollarSign, text: 'Receba o produto em casa sem ter que sair, direto da sua casa pra sua família' },
            { icon: Gift, text: 'Crie presentes personalizados que as pessoas realmente valorizam' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center border border-pink-100">
              <div className="bg-[#3e2723] text-white p-4 rounded-full mb-4">
                <item.icon className="w-8 h-8" />
              </div>
              <p className="font-bold text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-[#3e2723] text-white py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center">Tudo isso com:</h2>
        <ul className="space-y-6 max-w-md w-full">
          {[
            'Sua impressora de casa',
            'Um ferro de passar comum',
            'Um papel que custa menos de R$1 a folha'
          ].map((item, i) => (
            <li key={i} className="flex items-center space-x-4 bg-[#4e342e] p-4 rounded-xl">
              <div className="bg-[#25d366] rounded-full p-1 flex-shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Why it works Section */}
      <section className="bg-[#d81b60] text-white py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4 text-center">Por que funciona tão bem?</h2>
        <p className="text-xl mb-8 text-center max-w-md">O que o E-Book te ensinará com:</p>
        
        <div className="max-w-md w-full space-y-4 mb-12">
          {[
            'O mercado que mais cresce',
            'Tendência para presentes personalizados',
            'Lucro de até 300% a 500%',
            'O segredo de fidelização que as gráficas não querem que você saiba'
          ].map((item, i) => (
            <div key={i} className="bg-white text-gray-800 p-4 rounded-xl flex items-center space-x-3 shadow-md">
              <CheckCircle2 className="text-[#d81b60] w-6 h-6 flex-shrink-0" />
              <span className="font-bold">{item}</span>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-6 text-center">Veja as vantagens e características:</h3>
        <ul className="space-y-3 max-w-md w-full">
          {['Fácil de fazer', 'Alta lucratividade', 'Prático', 'Em casa'].map((item, i) => (
            <li key={i} className="flex items-center space-x-3">
              <CheckCircle2 className="text-[#25d366] w-6 h-6 flex-shrink-0" />
              <span className="font-bold text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Imagine Section */}
      <section className="bg-[#fce4ec] py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Imagina isso...</h2>
        <div className="max-w-md w-full space-y-4">
          {[
            { icon: Shirt, text: 'Criar produtos personalizados com um ferro' },
            { icon: Heart, text: 'Fazer presentes para pessoas que você ama' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center border border-pink-100">
              <div className="bg-[#3e2723] text-white p-4 rounded-full mb-4">
                <item.icon className="w-8 h-8" />
              </div>
              <p className="font-bold text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who is it for Section */}
      <section className="bg-white py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Esse método é para você que...</h2>
        <div className="max-w-md w-full space-y-4 mb-8">
          {[
            'Quer empreender em casa',
            'Já trabalha com artesanato',
            'Quer uma renda extra',
            'Gosta de fazer presentes personalizados'
          ].map((item, i) => (
            <div key={i} className="bg-[#d81b60] text-white p-4 rounded-full flex items-center space-x-3 shadow-md">
              <div className="bg-white rounded-full p-1 flex-shrink-0">
                <Check className="w-4 h-4 text-[#d81b60]" />
              </div>
              <span className="font-bold">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="max-w-md w-full border-2 border-[#d81b60] rounded-xl p-4 text-center">
          <p className="text-[#d81b60] font-bold">
            *Se você acha que vai ficar rico apenas "copiando", já pode sair daqui
          </p>
        </div>
      </section>

      {/* What you will learn Section */}
      <section className="bg-gray-50 py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 max-w-2xl">
          O que você leva com o E-Book "Do Zero ao Lucro com Ferro de Passar":
        </h2>
        <img 
          src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop" 
          alt="Detalhe passando roupa" 
          className="w-full max-w-md rounded-lg shadow-lg mb-8 object-cover h-64"
          referrerPolicy="no-referrer"
        />
        
        <div className="max-w-md w-full space-y-4 mb-8">
          {[
            'Onde comprar o papel transfer CERTO para não ter surpresas negativas',
            'Como ajustar a sua impressora para evitar custo de recarga',
            'A configuração certa da sua impressora para evitar erros de cor',
            'Como usar a temperatura do ferro pra ter um bom resultado',
            'Dicas de acabamento para valorizar o produto',
            'Dicas de embalagem que deixam um ar de valor para o cliente'
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-xl flex items-start space-x-3 shadow-sm border border-gray-100">
              <CheckCircle2 className="text-[#d81b60] w-6 h-6 flex-shrink-0 mt-0.5" />
              <span className="font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mb-8 max-w-md">
          Tudo isso em um método simples, validado, passo a passo, direto ao ponto de como lucrar vendendo produtos criados em casa.
        </p>

        <ul className="text-left space-y-3 max-w-md w-full mb-8">
          {[
            'Sem precisar de impressora especial',
            'Sem depender de gráfica',
            'Sem investir pesado',
            'Sem experiência anterior'
          ].map((item, i) => (
            <li key={i} className="flex items-center space-x-3">
              <CheckCircle2 className="text-[#25d366] w-6 h-6 flex-shrink-0" />
              <span className="font-medium text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <a href="#comprar" className="bg-[#25d366] hover:bg-[#20b858] text-white font-bold py-4 px-8 rounded-full text-xl w-full max-w-md text-center transition-transform transform hover:scale-105 shadow-lg">
          QUERO COMEÇAR AGORA
        </a>
      </section>

      {/* Products Carousel (Simplified) */}
      <section className="bg-white py-12 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Produtos que você pode começar a fazer hoje</h2>
        <div className="max-w-md w-full bg-gray-100 rounded-xl p-8 flex items-center justify-between shadow-inner">
          <button className="bg-[#d81b60] text-white rounded-full p-2">
            <ChevronDown className="w-6 h-6 transform rotate-90" />
          </button>
          <div className="text-center font-bold text-lg text-gray-700">
            Camiseta Personalizada
          </div>
          <button className="bg-[#d81b60] text-white rounded-full p-2">
            <ChevronDown className="w-6 h-6 transform -rotate-90" />
          </button>
        </div>
        <div className="flex space-x-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-[#d81b60]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Depoimentos reais:</h2>
        <div className="max-w-md w-full space-y-6">
          {[
            { name: 'Maria Silva', text: '"Fiz 10 peças no fim de semana. Vendi todas! O E-book me ajudou muito!"', initial: 'M' },
            { name: 'Ana Souza', text: '"Nunca pensei que depois de ver um vídeo eu ia ter uma fonte de renda!"', initial: 'A' }
          ].map((item, i) => (
            <div key={i} className="bg-[#3e2723] text-white p-6 rounded-2xl shadow-lg relative">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-white text-[#3e2723] rounded-full flex items-center justify-center font-bold text-xl">
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <div className="flex text-[#ffeb3b]">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
              </div>
              <p className="italic">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bonus Section */}
      <section className="bg-white py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-black mb-2 text-center text-gray-800 uppercase tracking-wide">Bônus Exclusivos</h2>
        <p className="text-[#d81b60] font-bold mb-8 text-center">(Somente hoje)</p>
        
        <div className="max-w-md w-full space-y-4 mb-8">
          {[
            '10 Artes Prontas em Alta Resolução para você usar agora',
            'Acesso Vitalício',
            'Guia de Precificação para Iniciantes',
            'Planilha de Controle de Vendas',
            'Lista Secreta de Fornecedores'
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="bg-[#fce4ec] p-1 rounded-md mt-1">
                <Check className="text-[#d81b60] w-5 h-5 flex-shrink-0" />
              </div>
              <span className="font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 line-through mb-1">Valor total: R$ 197,00</p>
          <p className="text-xl font-bold">Hoje por: <span className="text-[#25d366]">GRÁTIS</span></p>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-[#d81b60] text-white py-12 px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-4">7 Dias de Garantia</h2>
        <p className="text-lg mb-8 max-w-md">
          Se você não gostar do conteúdo, ou achar que não é pra você, devolvemos 100% do seu dinheiro.
        </p>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="border-2 border-white rounded-full p-3 mb-2">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <span className="text-sm font-bold">Garantia</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-2 border-white rounded-full p-3 mb-2">
              <Lock className="w-8 h-8" />
            </div>
            <span className="text-sm font-bold">Seguro</span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="comprar" className="bg-white py-12 px-4 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Esse E-Book poderia facilmente custar</h2>
        <p className="text-3xl text-gray-400 line-through font-bold mb-4">R$ 97,00</p>
        <p className="text-xl font-bold text-gray-800 mb-8">Mas hoje, você leva tudo por:</p>
        
        <div className="bg-[#d81b60] text-white rounded-3xl p-8 w-full max-w-md shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#ffeb3b]"></div>
          <h3 className="text-6xl font-black mb-2">R$ 19,90</h3>
          <p className="text-lg mb-8 opacity-90">ou 2x de R$ 10,30 no cartão</p>
          
          <a href="#comprar" className="block text-center bg-[#25d366] hover:bg-[#20b858] text-white font-bold py-4 px-8 rounded-full text-xl w-full transition-transform transform hover:scale-105 shadow-lg mb-4">
            QUERO COMEÇAR AGORA
          </a>
          <div className="flex justify-center space-x-2 text-sm opacity-80">
            <Lock className="w-4 h-4" />
            <span>Compra 100% Segura</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#3e2723] text-white py-16 px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl">Chega de deixar o ferro de passar encostado.</h2>
        <p className="text-xl mb-8 opacity-90">Faça ele ser a sua fonte de renda.</p>
        <a href="#comprar" className="block text-center bg-[#25d366] hover:bg-[#20b858] text-white font-bold py-4 px-8 rounded-full text-lg w-full max-w-md transition-transform transform hover:scale-105 shadow-lg">
          QUERO COMEÇAR AGORA E LUCRAR COM O MEU FERRO
        </a>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">FAQ - Perguntas Frequentes</h2>
        <div className="max-w-2xl w-full space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#fce4ec] rounded-xl overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-4 flex justify-between items-center font-bold text-[#d81b60] hover:bg-pink-100 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="p-4 bg-white text-gray-700 border-t border-pink-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d1b19] text-gray-400 py-8 px-4 text-center text-sm">
        <p className="mb-4">© 2024 - Todos os direitos reservados</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
