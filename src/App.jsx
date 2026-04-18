import React from 'react';
import { Mail, Phone, Globe, Download, Instagram, Facebook, Youtube, Music, Music3, ChevronRight, MessageCircle, FileText, Mic2, CalendarHeart, Headphones } from 'lucide-react';

const SeviAIHub = () => {
  const hubData = {
    name: "Oliver Barranco Trumpet",
    activity: "Trompetista cubano",
    person: "Oliver Barranco",
    mainHeadline: "Soy Oliver Barranco, trompetista, compositor y productor cubano afincado en Barcelona. Mi trabajo nace de un profundo compromiso con la expresión artística, fusionando el jazz afro-cubano, la música tradicional cubana y sonoridades contemporáneas en un lenguaje propio y sofisticado.",
    email: "obarranco1988@gmail.com",
    phone: "+34 643 44 56 50",
    whatsapp: "34643445650",
    logoUrl: "/logo_oliver.png",
    profilePicture: "/foto_oliver.png",
    backgroundImage: "/hero_oliver.jpg",
    hubUrl: "https://www.oliverbarrancotrumpet.com/"
  };

  const specialLinks = [
    { id: 'dossier-pro', title: "Descargar dossier profesional", url: "https://www.oliverbarrancotrumpet.com/epk", icon: FileText, subtitle: "Promotores, salas y prensa" },
    { id: 'dossier-intl', title: "Ver dossier internacional", url: "https://www.oliverbarrancotrumpet.com/intl-epk", icon: FileText, subtitle: "Mercado internacional y booking" }
  ];

  const mainLinks = [
    { id: 'web', title: "Web oficial", url: "https://www.oliverbarrancotrumpet.com/", icon: Globe, subtitle: "oliverbarrancotrumpet.com" },
    { id: 'instagram', title: "Instagram", url: "https://www.instagram.com/oliverbarrancotrumpet/", icon: Instagram, subtitle: "@oliverbarrancotrumpet" },
    { id: 'youtube', title: "YouTube", url: "https://www.youtube.com/channel/UCEZ1ZeCuiwaKARVFWcFAI7w", icon: Youtube, subtitle: "Canal oficial" },
    { id: 'spotify', title: "Escuchar en Spotify", url: "https://open.spotify.com/intl-es/artist/7xOPoiR8moem4Uu6mnesHI", icon: Music, subtitle: "Perfil de artista" },
    { id: 'applemusic', title: "Escuchar en Apple Music", url: "https://music.apple.com/es/artist/oliver-barranco-trumpet/1741434385", icon: Music3, subtitle: "Perfil de artista" },
    { id: 'facebook', title: "Facebook", url: "https://www.facebook.com/artistaoliver/?locale=es_LA", icon: Facebook, subtitle: "Página oficial" }
  ];

  const services = [
    { id: 'eventos', title: "Eventos privados", description: "Actuaciones en vivo para bodas, celebraciones y eventos corporativos con una propuesta cuidada y adaptable.", icon: CalendarHeart },
    { id: 'conciertos', title: "Conciertos", description: "Espectáculos para salas, festivales y espacios culturales con repertorio, estilo y presencia escénica propia.", icon: Mic2 },
    { id: 'produccion', title: "Producción musical", description: "Producción, arreglos y desarrollo artístico para proyectos que buscan un sonido sólido y personalidad.", icon: Headphones }
  ];

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN:${hubData.person}\r\nORG:${hubData.name}\r\nTITLE:${hubData.activity}\r\nTEL;TYPE=WORK,VOICE:${hubData.phone}\r\nEMAIL;TYPE=INTERNET:${hubData.email}\r\nURL:${hubData.hubUrl}\r\nNOTE:Trompetista, compositor y productor cubano afincado en Barcelona.\r\nEND:VCARD`;
    
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Oliver_Barranco_Trumpet.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-black font-sans flex flex-col items-center selection:bg-[#DCAE56] selection:text-white relative">
      
      {/* Fondo Opcional */}
      {hubData.backgroundImage ? (
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(250, 249, 246, 0.96), rgba(250, 249, 246, 0.99)), url('${hubData.backgroundImage}')` 
          }}
        ></div>
      ) : (
        <div className="fixed inset-0 z-0 bg-[#faf9f6]"></div>
      )}

      {/* Contenedor Principal (Mobile First) */}
      <div className="w-full max-w-md min-h-screen flex flex-col relative z-10 mx-auto bg-transparent pb-10">
        
        {/* Cabecera visual y perfil */}
        <div className="pt-14 px-8 flex flex-col items-center text-center">
          
          <div className="mb-8">
            <img 
              src={hubData.logoUrl} 
              alt={`Logo ${hubData.name}`} 
              className="h-16 sm:h-20 w-auto object-contain mx-auto drop-shadow-sm transition-all"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Foto de perfil */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-[#DCAE56]/30 shadow-2xl overflow-hidden mb-6 bg-black relative flex items-center justify-center p-1 transition-all group">
             <div className="w-full h-full rounded-full overflow-hidden bg-[#111]">
                <img 
                src={hubData.profilePicture} 
                alt={hubData.person} 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                onError={(e) => { 
                    e.target.src = "https://ui-avatars.com/api/?name=OB&background=000&color=DCAE56&size=200&font-size=0.3"; 
                }}
                />
             </div>
          </div>

          {/* Nombre y Actividad */}
          <h1 className="text-3xl font-black text-black mb-1.5 leading-tight tracking-tight">
            {hubData.name}
          </h1>
          
          <h2 className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#DCAE56] mb-6">
            {hubData.activity}
          </h2>

          {/* Contacto Directo Cabecera */}
          <div className="flex flex-col gap-3 w-full max-w-sm mb-8">
            <a href={`mailto:${hubData.email}`} className="text-black/70 hover:text-[#DCAE56] font-medium text-[15px] flex justify-center items-center gap-2.5 transition-colors">
              <Mail className="w-4 h-4 text-[#DCAE56]" /> {hubData.email}
            </a>
            <a href={`tel:${hubData.phone}`} className="text-black/70 hover:text-[#DCAE56] font-medium text-[15px] flex justify-center items-center gap-2.5 transition-colors">
              <Phone className="w-4 h-4 text-[#DCAE56]" /> {hubData.phone}
            </a>
          </div>
          
          {/* Frase Principal */}
          {hubData.mainHeadline && (
            <div className="relative mb-10 w-full px-2">
               <div className="absolute top-0 left-4 w-4 h-px bg-[#DCAE56]"></div>
               <p className="text-[15px] text-black/80 font-medium leading-relaxed pt-5 text-center px-4">
                 {hubData.mainHeadline}
               </p>
               <div className="absolute bottom-0 right-4 w-4 h-px bg-[#DCAE56]"></div>
            </div>
          )}

        </div>

        {/* Zona de Botones y Enlaces */}
        <div className="px-6 flex flex-col gap-0 w-full flex-grow">
          
          {/* Enlaces Especiales (Dossier) */}
          <div className="mb-8">
            <h3 className="text-[10px] font-bold text-[#DCAE56] uppercase tracking-[0.2em] mb-4 px-2 text-center">
              Booking & Prensa
            </h3>
            {specialLinks.map((link) => (
               <a 
               key={link.id} 
               href={link.url} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="group flex items-center justify-between p-4 bg-black border border-[#DCAE56]/30 hover:border-[#DCAE56] rounded-2xl transition-all shadow-lg mb-3 active:scale-[0.98]"
             >
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center text-[#DCAE56] transition-colors border border-[#DCAE56]/20">
                   <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                 </div>
                 <div>
                   <span className="block font-bold text-white text-[16px] leading-tight mb-1">{link.title}</span>
                   <span className="text-[11px] text-[#DCAE56]/80 font-medium uppercase tracking-wider">{link.subtitle}</span>
                 </div>
               </div>
               <ChevronRight className="w-5 h-5 text-[#DCAE56]/50 group-hover:text-[#DCAE56] transform group-hover:translate-x-1 transition-all" />
             </a>
            ))}
          </div>

          {/* Enlaces Principales */}
          <div className="mb-10">
            <h3 className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em] mb-4 px-2 text-center">
              Plataformas Oficiales
            </h3>
            {mainLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-between p-4 bg-white/60 hover:bg-white border border-black/5 hover:border-[#DCAE56]/40 rounded-2xl transition-all shadow-sm mb-3 active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#faf9f6] flex items-center justify-center text-black group-hover:text-[#DCAE56] transition-colors shadow-sm">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-black text-[15px] leading-tight">{link.title}</span>
                    <span className="text-[12px] text-black/50 font-medium">{link.subtitle}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-black/20 group-hover:text-[#DCAE56] transform group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          {/* Servicios Artísticos */}
          <div className="mb-8 relative pb-8">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-px bg-[#DCAE56]"></div>
             
             <h3 className="text-xl font-black text-black text-center mt-8 mb-6 font-serif">
                Servicios Artísticos
             </h3>
             
             <div className="flex flex-col gap-4">
                {services.map((service) => (
                   <div key={service.id} className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                         <service.icon className="w-5 h-5 text-[#DCAE56]" />
                         <h4 className="font-bold text-black text-lg">{service.title}</h4>
                      </div>
                      <p className="text-black/70 text-sm leading-relaxed">
                         {service.description}
                      </p>
                   </div>
                ))}
             </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 px-8 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity pb-8">
          <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-black text-center mb-4">
            © 2026 {hubData.name}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 flex items-center gap-2 justify-center hover:text-[#DCAE56] transition-colors">
            SeviAI Ecosystem
            <img src="/logo_sin_fondo.png" alt="SeviAI" className="h-3 w-auto opacity-40 grayscale" />
          </p>
        </div>

      </div>

      {/* Floating VCard */}
      <button 
        onClick={handleSaveContact} 
        className="fixed top-5 right-5 w-12 h-12 sm:w-14 sm:h-14 bg-black shadow-xl hover:shadow-[#DCAE56]/20 hover:scale-105 transition-all duration-300 z-50 rounded-full flex items-center justify-center group border border-[#DCAE56]/30 cursor-pointer"
        title="Guardar como contacto"
      >
        <Download className="w-5 h-5 text-[#DCAE56] drop-shadow-sm" />
      </button>

      {/* Floating WhatsApp - Dorado Oscuro */}
      <a 
        href={`https://wa.me/${hubData.whatsapp}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#DCAE56] shadow-xl hover:shadow-[#DCAE56]/40 hover:-translate-y-1 transition-all duration-300 z-50 rounded-full flex items-center justify-center group cursor-pointer border-2 border-white"
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white drop-shadow-sm" />
      </a>

    </div>
  );
};

export default SeviAIHub;
