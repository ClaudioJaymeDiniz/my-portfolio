import { experiencias, formacoes, idiomas } from '../../data/curriculo';

export default function Carreira() {
  return (
    <main className="min-h-screen py-16 px-6 md:px-20 bg-transparent">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="font-heading text-4xl text-brand-white mb-12 flex items-center gap-4">
          <span className="h-1 w-12 bg-brand-neon"></span>
          Trajetória
        </h2>

        {/* Mapeando as Experiências */}
        <div className="space-y-12 mb-20">
          <h3 className="font-heading text-xl text-brand-neon uppercase tracking-widest border-b border-brand-neon/20 pb-2">Experiência</h3>
          {experiencias.map((exp) => (
            <div key={exp.id} className="relative pl-8 border-l-2 border-slate-700 hover:border-brand-neon transition-colors group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-dark border-2 border-slate-700 group-hover:border-brand-neon transition-colors"></div>
              <span className="font-body text-xs text-brand-neon font-bold uppercase">{exp.data}</span>
              <h4 className="font-heading text-2xl text-brand-white mt-1">{exp.cargo}</h4>
              <p className="font-body text-brand-neon/80 font-medium mb-2">{exp.empresa}</p>
              <p className="font-body text-brand-text text-sm leading-relaxed max-w-2xl">{exp.descricao}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mapeando Formação */}
          <div>
            <h3 className="font-heading text-xl text-brand-neon uppercase tracking-widest border-b border-brand-neon/20 pb-2">Educação</h3>
            <div className="mt-6 space-y-4">
              {formacoes.map((edu) => (
                <div key={edu.id} className="bg-brand-card p-4 rounded-xl border border-slate-700/50">
                  <h4 className="font-heading text-brand-white text-lg">{edu.titulo}</h4>
                  <p className="font-body text-brand-text text-sm">{edu.instituicao} — {edu.status}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mapeando Idiomas */}
          <div>
            <h3 className="font-heading text-xl text-brand-neon uppercase tracking-widest border-b border-brand-neon/20 pb-2">Idiomas</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {idiomas.map((idioma) => (
                <span key={idioma} className="px-4 py-2 rounded-full bg-slate-800 border border-brand-neon text-brand-neon font-body text-xs font-bold uppercase">
                  {idioma}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}