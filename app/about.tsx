export default function About() {
    const specs = [
        {
            title: '30+',
            description: 'Años de experiencia'
        },
        {
            title: '200m',
            description: 'Del mar'
        },
        {
            title: '100%',
            description: 'Satisfacción'
        }
    ]
    return (
        <section className="w-full px-10 lg:px-20 xl:px-60 2xl:px-80 flex flex-col gap-4 py-12 bg-stone-bg" id="about">
            <h2 className="text-3xl">Casa Cala</h2>
            <div className="flex flex-col gap-4 text-gray-500">
                <p className="text-pretty">Desde hace más de 30 años, nuestra familia ha compartido la pasión por Villa Gesell y la costa argentina. Lo que comenzó como una casa de verano familiar se ha transformado en un conjunto de propiedades cuidadosamente diseñadas para ofrecer la mejor experiencia vacacional.</p>
                <p className="text-pretty">Ubicadas en una de las zonas más privilegiadas de Villa Gesell, nuestras casas combinan el confort moderno con el encanto playero característico de la región. Cada detalle ha sido pensado para que vos y tu familia se sientan como en casa, pero con el plus de estar a pasos del mar.</p>
                <p className="text-pretty">Hoy seguimos manteniendo ese espíritu familiar y cálido que nos caracteriza, ofreciendo no solo un lugar donde alojarse, sino un verdadero hogar de verano donde crear recuerdos que durarán toda la vida.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-2">
                {specs.map((s, index) => (
                    <div key={index} className='p-4'>
                        <div className='flex justify-center'>
                            <div className="flex flex-col gap-2 text-center">
                                <h2 className="text-primary-1200 text-2xl font-bold">{s.title}</h2>
                                <span className="text-gray-500">{s.description}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}