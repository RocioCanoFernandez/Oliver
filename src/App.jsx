import React, { useState } from 'react';
import { Mail, Phone, Globe, Download, Instagram, Facebook, Youtube, Music, Music3, ChevronRight, MessageCircle, FileText, Mic2, CalendarHeart, Headphones } from 'lucide-react';

const SeviAIHub = () => {
  // Estados para el Filtro de Confianza (EPK)
  const [selectedEpk, setSelectedEpk] = useState(null);
  const [showPasswordStep, setShowPasswordStep] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

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
    { id: 'dossier-pro', title: "Descargar dossier profesional", url: "https://www.oliverbarrancotrumpet.com/epk", icon: FileText, subtitle: "Promotores, salas y prensa", password: "OliverBarrancoTrumpetPrensa" },
    { id: 'dossier-intl', title: "Ver dossier internacional", url: "https://www.oliverbarrancotrumpet.com/intl-epk", icon: FileText, subtitle: "Mercado internacional y booking", password: "PressOliverBarranco" }
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
    const vcard = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN:${hubData.person}\r\nORG:${hubData.name}\r\nTITLE:${hubData.activity}\r\nTEL;TYPE=WORK,VOICE:${hubData.phone}\r\nEMAIL;TYPE=INTERNET:${hubData.email}\r\nURL:${hubData.hubUrl}\r\nURL:https://hub-hub-oliver.npfusf.easypanel.host/\r\nNOTE:Trompetista, compositor y productor cubano afincado en Barcelona.\r\nEND:VCARD`;
    
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

  const handleEpkClick = (e, link) => {
    e.preventDefault();
    setSelectedEpk(link);
    setShowPasswordStep(false);
    setIsCopied(false);
  };

  const handleCopyPassword = () => {
    if (selectedEpk?.password) {
      navigator.clipboard.writeText(selectedEpk.password);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-black font-sans flex flex-col items-center selection:bg-[#DCAE56] selection:text-white relative pb-8">
      
      {/* Fondo Opcional */}
      {hubData.backgroundImage ? (
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center opacity-30 blur-2xl"
          style={{ 
            backgroundImage: `url('${hubData.backgroundImage}')` 
          }}
        ></div>
      ) : (
        <div className="fixed inset-0 z-0 bg-[#faf9f6]"></div>
      )}

      {/* Contenedor Principal (Mobile First) */}
      <div className="w-full max-w-md min-h-screen flex flex-col relative z-10 mx-auto bg-transparent bg-white/60 backdrop-blur-md sm:shadow-2xl">
        
        {/* Héroe Visual y Logo */}
        {hubData.backgroundImage && (
          <div className="w-full h-56 sm:h-64 relative mb-2">
             <div className="w-full h-full relative overflow-hidden">
                <img 
                   src={hubData.backgroundImage} 
                   alt="Oliver Barranco" 
                   className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
             </div>
             
             {/* Logo superpuesto como un sellito */}
             <div className="absolute -bottom-6 right-3 sm:right-4 z-30">
               <img 
                 src={hubData.logoUrl} 
                 alt={`Logo ${hubData.name}`} 
                 className="h-12 sm:h-14 w-auto object-contain drop-shadow-xl"
                 onError={(e) => { e.target.style.display = 'none'; }}
               />
             </div>
          </div>
        )}

        {/* Cabecera visual y perfil */}
        <div className={`px-8 flex flex-col items-center text-center ${hubData.backgroundImage ? '-mt-16 relative z-20' : 'pt-14'}`}>
          
          {/* Foto de perfil */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-[#DCAE56]/50 shadow-2xl overflow-hidden mb-6 bg-black relative flex items-center justify-center p-1 transition-all group">
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
          <h1 className="text-3xl font-black text-[#1a1a1a] mb-1.5 leading-tight tracking-tight drop-shadow-sm">
            {hubData.name}
          </h1>
          
          <h2 className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#DCAE56] mb-6">
            {hubData.activity}
          </h2>

          {/* Contacto Directo Cabecera */}
          <div className="flex flex-col gap-3 w-full max-w-sm mb-6">
            <a href={`mailto:${hubData.email}`} className="text-[#1a1a1a]/70 hover:text-[#DCAE56] font-medium text-[15px] flex justify-center items-center gap-2.5 transition-colors">
              <Mail className="w-4 h-4 text-[#DCAE56]" /> {hubData.email}
            </a>
            <a href={`tel:${hubData.phone}`} className="text-[#1a1a1a]/70 hover:text-[#DCAE56] font-medium text-[15px] flex justify-center items-center gap-2.5 transition-colors">
              <Phone className="w-4 h-4 text-[#DCAE56]" /> {hubData.phone}
            </a>
          </div>
          
          {/* Frase Principal */}
          {hubData.mainHeadline && (
            <div className="relative mb-12 w-full px-6 mt-4 py-8 bg-gradient-to-r from-transparent via-[#DCAE56]/5 to-transparent border-y border-[#DCAE56]/20">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3 bg-[#faf9f6] px-2 rounded-full">
                 <Music className="w-5 h-5 text-[#DCAE56]" />
               </div>
               <p className="text-[17px] sm:text-[19px] text-[#1a1a1a] font-serif italic leading-[1.8] text-center tracking-wide">
                 <span className="text-3xl text-[#DCAE56] font-serif mr-1 leading-none">"</span>
                 {hubData.mainHeadline}
                 <span className="text-3xl text-[#DCAE56] font-serif ml-1 leading-none align-bottom">"</span>
               </p>
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#faf9f6] px-4">
                 <div className="w-2 h-2 rounded-full bg-[#DCAE56]/40"></div>
               </div>
            </div>
          )}

        </div>

        {/* Zona de Botones y Enlaces */}
        <div className="px-6 flex flex-col gap-0 w-full flex-grow pt-2">
          
          {/* 1. Enlaces Principales */}
          <div className="mb-10">
            <h3 className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em] mb-5 px-2 text-center">
              Plataformas Oficiales
            </h3>
            {mainLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-between p-4 bg-white/80 hover:bg-white border border-black/5 hover:border-[#DCAE56]/40 rounded-2xl transition-all shadow-sm mb-3 active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#faf9f6] flex items-center justify-center text-black group-hover:text-[#DCAE56] transition-colors shadow-sm border border-black/5">
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

          {/* 2. Servicios Artísticos */}
          <div className="mb-10 relative pb-4">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px bg-[#DCAE56]/50"></div>
             
             <h3 className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em] mt-8 mb-6 text-center">
                Servicios Artísticos
             </h3>
             
             <div className="flex flex-col gap-4">
                {services.map((service) => (
                   <div key={service.id} className="bg-white/80 p-6 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                         <div className="w-8 h-8 rounded-full bg-[#DCAE56]/10 flex items-center justify-center">
                           <service.icon className="w-4 h-4 text-[#DCAE56]" />
                         </div>
                         <h4 className="font-bold text-black text-[16px]">{service.title}</h4>
                      </div>
                      <p className="text-black/70 text-[14px] leading-relaxed pl-1">
                         {service.description}
                      </p>
                   </div>
                ))}
             </div>
          </div>

          {/* 3. Enlaces Especiales (Dossier / Prensa) */}
          <div className="mb-4 relative pt-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px bg-[#DCAE56]/50"></div>
            <h3 className="text-[10px] font-bold text-[#DCAE56] uppercase tracking-[0.2em] mb-5 px-2 text-center pt-4">
              Booking & Prensa
            </h3>
            {specialLinks.map((link) => (
               <a 
               key={link.id} 
               href={link.url} 
               onClick={(e) => handleEpkClick(e, link)}
               className="group flex flex-col justify-center p-4 bg-black border border-[#DCAE56]/30 hover:border-[#DCAE56] rounded-2xl transition-all shadow-lg mb-3 active:scale-[0.98] cursor-pointer relative"
             >
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center text-[#DCAE56] transition-colors border border-[#DCAE56]/20 shrink-0">
                   <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                 </div>
                 <div className="flex-1 pr-6">
                   <span className="block font-bold text-white text-[15px] sm:text-[16px] leading-tight mb-1">{link.title}</span>
                   <span className="block text-[10px] sm:text-[11px] text-[#DCAE56]/80 font-medium uppercase tracking-wider overflow-hidden text-ellipsis whitespace-nowrap">{link.subtitle}</span>
                 </div>
               </div>
               <div className="absolute right-4 top-1/2 -translate-y-1/2">
                 <ChevronRight className="w-5 h-5 text-[#DCAE56]/50 group-hover:text-[#DCAE56] transform group-hover:translate-x-1 transition-all" />
               </div>
             </a>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 px-8 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity pb-8">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-black text-center mb-4">
            © 2026 {hubData.name}
          </p>
          <a 
            href="https://www.seviai.es/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[12px] uppercase tracking-[0.2em] font-bold text-black/70 flex items-center gap-2 justify-center hover:text-[#DCAE56] transition-colors group"
          >
            SeviAI Ecosystem
            <img src="/logo_sin_fondo.png" alt="SeviAI" className="h-4 w-auto opacity-70 group-hover:opacity-100 grayscale transition-opacity" />
          </a>
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

      {/* Floating WhatsApp */}
      <a 
        href={`https://wa.me/${hubData.whatsapp}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#DCAE56] shadow-xl hover:shadow-[#DCAE56]/40 hover:-translate-y-1 transition-all duration-300 z-50 rounded-full flex items-center justify-center group cursor-pointer border-2 border-white"
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white drop-shadow-sm" />
      </a>

      {/* Modal EPK (Filtro de Confianza) */}
      {selectedEpk && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-[#faf9f6] w-full max-w-[90%] sm:max-w-sm rounded-[2rem] p-8 shadow-2xl relative border border-[#DCAE56]/20">
             
             {/* Botón Cerrar */}
             <button onClick={() => setSelectedEpk(null)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors text-black/50">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
             </button>

             {!showPasswordStep ? (
               <div className="flex flex-col items-center text-center">
                 <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-[#DCAE56] mb-6 shadow-md border border-[#DCAE56]/20">
                   <FileText className="w-8 h-8" />
                 </div>
                 <h3 className="text-[22px] font-black text-black mb-3 leading-tight">Área Profesional</h3>
                 <p className="text-black/70 text-[15px] leading-relaxed mb-8">
                   Este acceso web es exclusivo para profesionales del sector musical. ¿Accedes como promotor, prensa, o booking?
                 </p>
                 <div className="flex flex-col w-full gap-3">
                   <button onClick={() => setShowPasswordStep(true)} className="w-full py-3.5 px-4 rounded-xl bg-black text-[#DCAE56] font-bold text-[15px] shadow-lg hover:shadow-xl transition-all active:scale-[0.98] border border-[#DCAE56]/30">
                     Sí, soy profesional
                   </button>
                   <button onClick={() => setSelectedEpk(null)} className="w-full py-3 px-4 rounded-xl text-black/40 hover:text-black/80 font-bold text-[13px] hover:bg-black/5 transition-colors">
                     No, cancelar
                   </button>
                 </div>
               </div>
             ) : (
               <div className="flex flex-col items-center text-center">
                 <div className="w-16 h-16 rounded-full bg-[#DCAE56]/15 flex items-center justify-center text-[#DCAE56] mb-6 border border-[#DCAE56]/30">
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                 </div>
                 <h3 className="text-xl font-black text-black mb-2">Contraseña requerida</h3>
                 <p className="text-black/60 text-[14px] leading-relaxed mb-6">
                   Copia la contraseña para acceder al sistema privado de dossieres.
                 </p>
                 
                 {/* Caja de Contraseña Oculta */}
                 <div className="w-full bg-white border border-black/10 rounded-xl p-3 flex items-center justify-between shadow-sm mb-8 relative">
                   <div className="flex-1 text-center font-mono text-[24px] text-black/50 tracking-[0.2em] leading-none pt-2">
                      ••••••••
                   </div>
                   <button 
                     onClick={handleCopyPassword}
                     className={`w-12 h-12 flex items-center justify-center rounded-lg shadow-md transition-colors ${isCopied ? 'bg-green-500 text-white' : 'bg-[#DCAE56] text-white hover:bg-[#c99a45]'}`}
                     title="Copiar contraseña"
                   >
                     {isCopied ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>}
                   </button>
                   {isCopied && <div className="absolute -top-10 right-0 bg-black text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg">¡Copiada en portada papeles!</div>}
                 </div>

                 <a 
                   href={selectedEpk.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   onClick={() => setSelectedEpk(null)}
                   className="w-full block py-4 rounded-xl bg-black text-[#DCAE56] font-bold text-[15px] shadow-lg hover:shadow-xl transition-all active:scale-[0.98] border border-[#DCAE56]/30 uppercase tracking-widest"
                 >
                   Abrir el Dossier
                 </a>
               </div>
             )}
          </div>
        </div>
      )}

    </div>
  );
};

export default SeviAIHub;
