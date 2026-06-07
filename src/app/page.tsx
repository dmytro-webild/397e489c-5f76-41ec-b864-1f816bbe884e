"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Leaf, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="large"
        background="grid"
        cardStyle="inset"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Início",
          id: "#inicio",
        },
        {
          name: "Sobre Nós",
          id: "#sobre-nos",
        },
        {
          name: "Produtos",
          id: "#produtos",
        },
        {
          name: "Coleções",
          id: "#colecoes",
        },
        {
          name: "Depoimentos",
          id: "#depoimentos",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contato",
          id: "#contato",
        },
      ]}
      brandName="Floora Artificials B.V."
      button={{
        text: "Compre Agora",
        href: "#produtos",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="inicio" data-section="inicio">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static",
      }}
      title="Floora Artificials B.V."
      description="Beleza duradoura sem esforço. Descubra a nossa coleção de plantas artificiais de alta qualidade que transformam qualquer espaço em um oásis verde."
      tag="Verde que Dura"
      buttons={[
        {
          text: "Explorar Coleções",
          href: "#colecoes",
        },
        {
          text: "Saber Mais",
          href: "#sobre-nos",
        },
      ]}
      carouselItems={[
        {
          id: "item-1",
          imageSrc: "http://img.b2bpic.net/free-photo/office-plant-frame_23-2148003034.jpg",
          imageAlt: "Planta artificial de folha de violino em sala de estar moderna",
        },
        {
          id: "item-2",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-illustration-botanic-garden_23-2151464668.jpg",
          imageAlt: "Grande planta artificial no lobby do escritório",
        },
        {
          id: "item-3",
          imageSrc: "http://img.b2bpic.net/free-photo/flowerpot-with-plant-box_23-2147761217.jpg",
          imageAlt: "Plantas artificiais suspensas em varanda",
        },
        {
          id: "item-4",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-indoor-plants_23-2151024988.jpg",
          imageAlt: "Arranjo de suculentas artificiais em mesa",
        },
        {
          id: "item-5",
          imageSrc: "http://img.b2bpic.net/free-photo/creative-floral-buttonholes_1304-4064.jpg",
          imageAlt: "Buquê de flores artificiais para decoração",
        },
        {
          id: "item-6",
          imageSrc: "http://img.b2bpic.net/free-photo/green-leaves_1417-1624.jpg",
          imageAlt: "Parede de plantas artificiais em jardim vertical",
        },
      ]}
      autoPlay={true}
      autoPlayInterval={4000}
    />
  </div>

  <div id="sobre-nos" data-section="sobre-nos">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Nossa História"
      title="Floora Artificials B.V.: Onde a Natureza Encontra a Inovação"
      description="Desde 2010, a Floora Artificials B.V. tem sido líder na criação de plantas e flores artificiais de alta qualidade. Acreditamos que todos merecem ter a beleza da natureza por perto, sem o compromisso de manutenção. Nossa paixão é oferecer soluções verdes deslumbrantes e duradouras."
      subdescription="Comprometemo-nos com a excelência em cada detalhe, desde a seleção de materiais premium até o acabamento artesanal de cada peça. Nossa equipe de especialistas trabalha incansavelmente para garantir que cada planta seja uma obra de arte realista, que eleva a estética de qualquer ambiente, seja em sua casa ou escritório."
      icon={Leaf}
      imageSrc="http://img.b2bpic.net/free-photo/smiling-portrait-blonde-young-woman-holding-flower-bouquet-hand-showing-thumb-up-sign_23-2148049422.jpg"
      imageAlt="Mulher arranjando plantas artificiais em uma loja"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="beneficios" data-section="beneficios">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Livre de Manutenção",
          description: "Esqueça a rega, a poda e a luz solar. Nossas plantas permanecem perfeitas o ano todo, sem nenhum esforço.",
          imageSrc: "http://img.b2bpic.net/free-photo/minimal-floral-arrangement-red-surface_58702-17316.jpg",
          imageAlt: "Pessoas não regando uma planta artificial",
        },
        {
          title: "Beleza Duradoura",
          description: "Feitas com materiais de alta qualidade, nossas plantas e flores artificiais mantêm a cor e a forma por anos a fio.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-eucalyptus-plant_23-2149200310.jpg",
          imageAlt: "Pessoas limpando a poeira de uma planta artificial",
        },
        {
          title: "Versatilidade e Adaptação",
          description: "Perfeitas para qualquer ambiente, independentemente da luz ou da temperatura, ideais para áreas internas e externas.",
          imageSrc: "http://img.b2bpic.net/free-photo/colored-leaf-against-simple-background_23-2149337903.jpg",
          imageAlt: "Planta artificial em sala iluminada pelo sol",
        },
      ]}
      title="Porquê Escolher Plantas Artificiais?"
      description="As plantas artificiais da Floora Artificials B.V. oferecem uma beleza incomparável com a conveniência que o seu estilo de vida exige."
      tag="Vantagens Exclusivas"
    />
  </div>

  <div id="produtos" data-section="produtos">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "prod-1",
          name: "Figueira Lira",
          price: "€149.99",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-indoor-plants_23-2151024963.jpg",
          imageAlt: "Grande figueira lira artificial",
        },
        {
          id: "prod-2",
          name: "Espada de São Jorge",
          price: "€59.99",
          imageSrc: "http://img.b2bpic.net/free-photo/cylindrical-snake-plant-gray-pot_53876-134277.jpg",
          imageAlt: "Pequena planta artificial Espada de São Jorge",
        },
        {
          id: "prod-3",
          name: "Monstera Deliciosa",
          price: "€129.99",
          imageSrc: "http://img.b2bpic.net/free-photo/minimal-tropical-plant-composition_23-2148955713.jpg",
          imageAlt: "Planta artificial Monstera Deliciosa",
        },
        {
          id: "prod-4",
          name: "Oliveira Mediterrânea",
          price: "€189.99",
          imageSrc: "http://img.b2bpic.net/free-photo/olive-word-with-olive-branch_23-2147853920.jpg",
          imageAlt: "Árvore de oliveira artificial",
        },
        {
          id: "prod-5",
          name: "Ramos de Eucalipto",
          price: "€34.99",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-beautiful-florist-woman_23-2149215251.jpg",
          imageAlt: "Ramos de eucalipto artificial em um vaso",
        },
        {
          id: "prod-6",
          name: "Orquídea Phalaenopsis",
          price: "€79.99",
          imageSrc: "http://img.b2bpic.net/free-photo/blossoms-colorful-backdrops_23-2151916647.jpg",
          imageAlt: "Planta de orquídea artificial com flores brancas",
        },
      ]}
      title="Nossos Produtos Mais Populares"
      description="Descubra uma vasta gama de plantas e flores artificiais, meticulosamente criadas para replicar a beleza natural com perfeição."
      tag="Explore a Coleção"
    />
  </div>

  <div id="colecoes" data-section="colecoes">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "luxo",
          badge: "Premium",
          badgeIcon: Sparkles,
          price: "A partir de €250",
          subtitle: "Elegância e sofisticação para ambientes exclusivos.",
          buttons: [
            {
              text: "Ver Coleção Luxo",
              href: "#",
            },
          ],
          features: [
            "Plantas de grande porte",
            "Materiais de alta gama",
            "Design exclusivo",
            "Aconselhamento personalizado",
          ],
        },
        {
          id: "minimalista",
          badge: "Popular",
          badgeIcon: Star,
          price: "A partir de €99",
          subtitle: "Beleza simples e clean para espaços modernos e minimalistas.",
          buttons: [
            {
              text: "Ver Coleção Minimalista",
              href: "#",
            },
          ],
          features: [
            "Design clean e funcional",
            "Plantas de porte médio",
            "Vases de cerâmica neutros",
            "Adapta-se a qualquer espaço",
          ],
        },
        {
          id: "tropical",
          badge: "Novo",
          badgeIcon: Leaf,
          price: "A partir de €180",
          subtitle: "Crie um oásis exuberante com a nossa seleção tropical.",
          buttons: [
            {
              text: "Ver Coleção Tropical",
              href: "#",
            },
          ],
          features: [
            "Folhagens exóticas e vibrantes",
            "Cores ricas e texturas",
            "Plantas de porte variado",
            "Ideal para ambientes amplos",
          ],
        },
      ]}
      title="Coleções Exclusivas Floora"
      description="Descubra nossas coleções cuidadosamente curadas para complementar perfeitamente qualquer estilo de design de interiores."
      tag="Edições Limitadas"
    />
  </div>

  <div id="depoimentos" data-section="depoimentos">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Qualidade Insuperável!",
          quote: "As plantas da Floora Artificials B.V. superaram todas as minhas expectativas. São incrivelmente realistas e adicionaram um toque de frescor à minha sala de estar sem qualquer manutenção. Adoro!",
          name: "Ana Maria Silva",
          role: "Designer de Interiores",
          imageSrc: "http://img.b2bpic.net/free-photo/gardener-talking-phone-with-client_23-2148851423.jpg",
          imageAlt: "Ana Maria Silva",
        },
        {
          id: "2",
          title: "Transformação Instantânea",
          quote: "Meu escritório ganhou vida com as plantas artificiais. É impressionante como elas parecem verdadeiras. Recomendo a todos que buscam beleza e praticidade.",
          name: "João Pedro Santos",
          role: "Arquiteto",
          imageSrc: "http://img.b2bpic.net/free-photo/greenhouse-owner-presenting-flowers-options-potential-customer-retailer-using-laptop_158595-7058.jpg",
          imageAlt: "João Pedro Santos",
        },
        {
          id: "3",
          title: "Produto Fantástico!",
          quote: "Comprei várias peças para a minha casa e estou absolutamente encantada. A qualidade é excepcional e o atendimento ao cliente foi impecável. Voltarei a comprar!",
          name: "Mariana Costa",
          role: "Empresária",
          imageSrc: "http://img.b2bpic.net/free-photo/small-happy-family-is-starting-their-day-together-kitchen_613910-3130.jpg",
          imageAlt: "Mariana Costa",
        },
        {
          id: "4",
          title: "Durabilidade e Beleza",
          quote: "As plantas da Floora Artificials B.V. são o investimento perfeito. Elas duram muito tempo, mantêm-se lindas e criam uma atmosfera acolhedora em qualquer lugar.",
          name: "Carlos Rodrigues",
          role: "Proprietário de Restaurante",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-kitchen-interior-design_23-2151821265.jpg",
          imageAlt: "Carlos Rodrigues",
        },
        {
          id: "5",
          title: "Realismo Impressionante",
          quote: "Fiquei impressionado com o realismo das plantas artificiais. É difícil distinguir das naturais. Perfeito para eventos e decoração permanente.",
          name: "Sofia Almeida",
          role: "Organizadora de Eventos",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-woman-arranging-shop-window_23-2147760973.jpg",
          imageAlt: "Sofia Almeida",
        },
      ]}
      title="O Que Nossos Clientes Dizem"
      description="A satisfação dos nossos clientes é a nossa maior recompensa. Veja como a Floora Artificials B.V. transformou seus espaços."
      tag="Histórias de Sucesso"
    />
  </div>

  <div id="clientes" data-section="clientes">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Asset Architects",
        "Grand Hotels Group",
        "Urban Coffee Co.",
        "Design Interiors NL",
        "EcoLife Offices",
        "Bloom Events",
        "Green Spaces Corp.",
      ]}
      title="Confiam na Nossa Qualidade"
      description="Temos o orgulho de colaborar com uma vasta gama de empresas e projetos, adicionando um toque de verde aos seus espaços."
      tag="Parceiros"
      showCard={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "As plantas artificiais parecem realistas?",
          content: "Sim! Nossas plantas são criadas com atenção meticulosa aos detalhes, utilizando materiais de alta qualidade para replicar a textura, cor e forma das plantas naturais com impressionante fidelidade.",
        },
        {
          id: "faq-2",
          title: "Como devo cuidar das minhas plantas artificiais?",
          content: "A manutenção é mínima. Recomendamos limpar o pó regularmente com um pano macio ou espanador para que elas mantenham a aparência fresca e vibrante. Evite a exposição direta e prolongada ao sol para as plantas de interior, para preservar as cores.",
        },
        {
          id: "faq-3",
          title: "Elas são adequadas para uso exterior?",
          content: "Temos uma seleção específica de plantas artificiais tratadas com proteção UV, ideais para uso exterior. Consulte a descrição do produto para verificar a adequação.",
        },
        {
          id: "faq-4",
          title: "Posso personalizar um arranjo?",
          content: "Oferecemos serviços de design personalizados para projetos maiores. Entre em contato conosco para discutir suas necessidades e criar um arranjo exclusivo para o seu espaço.",
        },
        {
          id: "faq-5",
          title: "Qual é a política de devolução?",
          content: "Aceitamos devoluções dentro de 30 dias após a compra, desde que os produtos estejam em sua condição original. Consulte nossa página de 'Política de Devolução' para mais detalhes.",
        },
        {
          id: "faq-6",
          title: "As plantas são seguras para animais de estimação?",
          content: "Sim, ao contrário de algumas plantas naturais, nossas plantas artificiais são seguras para animais de estimação e crianças, pois não são tóxicas.",
        },
      ]}
      title="Perguntas Frequentes"
      description="Tire suas dúvidas sobre nossas plantas artificiais e descubra como elas podem transformar seu ambiente."
      tag="Suporte Floora"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contato" data-section="contato">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Fale Conosco"
      title="Pronto para Transformar seu Espaço?"
      description="Nossa equipa está pronta para ajudar. Entre em contato hoje para descobrir a solução perfeita de plantas artificiais para você."
      buttons={[
        {
          text: "Enviar Mensagem",
          href: "mailto:info@flooraartificials.com",
        },
        {
          text: "Ligar Agora",
          href: "tel:+3112345678",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Floora Artificials B.V."
      columns={[
        {
          title: "Companhia",
          items: [
            {
              label: "Sobre Nós",
              href: "#sobre-nos",
            },
            {
              label: "Benefícios",
              href: "#beneficios",
            },
            {
              label: "Depoimentos",
              href: "#depoimentos",
            },
          ],
        },
        {
          title: "Produtos",
          items: [
            {
              label: "Plantas Populares",
              href: "#produtos",
            },
            {
              label: "Coleções",
              href: "#colecoes",
            },
            {
              label: "Novidades",
              href: "#produtos",
            },
          ],
        },
        {
          title: "Suporte",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contato",
              href: "#contato",
            },
            {
              label: "Política de Devolução",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Floora Artificials B.V. Todos os direitos reservados."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
