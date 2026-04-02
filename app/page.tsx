import Calculator from "@/components/Calculator";
import AdBanner from "@/components/AdBanner";

export const metadata = {
  title: "Calculadora de calorías gratis",
  description:
    "Calcula tus calorías diarias para perder peso, mantenerte o ganar masa muscular de forma rápida y sencilla.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO + TOOL */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Calculadora de calorías
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Descubre cuántas calorías necesitas al día según tu objetivo: perder grasa, mantenerte o ganar masa muscular.
        </p>

        {/* ANUNCIO 1 (TOP - buen CTR) */}
        <div className="my-6">
          <AdBanner />
        </div>

        {/* TOOL */}
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10">
          <Calculator />
        </div>

        {/* ANUNCIO 2 (MEJOR CONVERSIÓN) */}
        <div className="my-6">
          <AdBanner />
        </div>
      </section>

      {/* CONTENIDO SEO */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-left">
        <h2 className="text-2xl font-semibold mb-4">
          ¿Cómo funciona esta calculadora de calorías?
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Esta calculadora utiliza la fórmula de Mifflin-St Jeor, considerada una de las más precisas para estimar el metabolismo basal (TMB). A partir de ahí, se ajusta según tu nivel de actividad física para calcular tu gasto calórico diario.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          El resultado indica cuántas calorías necesitas consumir para mantener tu peso actual. Además, puedes ver estimaciones ajustadas si tu objetivo es perder grasa o ganar masa muscular.
        </p>

        {/* ANUNCIO 3 (in-content) */}
        <div className="my-6">
          <AdBanner />
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          ¿Cómo usar esta calculadora?
        </h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Introduce tu edad, peso y altura</li>
          <li>Selecciona tu nivel de actividad diaria</li>
          <li>Elige tu objetivo (perder, mantener o ganar peso)</li>
          <li>Obtén tu recomendación de calorías al instante</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          ¿Es precisa esta calculadora?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Aunque es una estimación muy fiable, cada cuerpo es diferente. Se recomienda ajustar las calorías según tus resultados reales a lo largo del tiempo.
        </p>
      </section>

      {/* CTA FUTURO (monetización) */}
      <section className="max-w-4xl mx-auto px-6 pb-16 text-center">
        <div className="bg-blue-600 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-2">
            Próximamente: dieta personalizada
          </h3>
          <p className="mb-4">
            Genera un plan de alimentación adaptado a tus calorías y objetivos.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium">
            Próximamente
          </button>
        </div>
      </section>

    </main>
  );
}