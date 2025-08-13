const Partners = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#8B1538] to-[#B91C5C]">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partnerské finanční instituce
          </h2>
          
          {/* Values Icons */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-2xl">=</span>
              </div>
              <span className="text-lg font-medium">partnerství</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-2xl">→</span>
              </div>
              <span className="text-lg font-medium">inovace</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-2xl">+</span>
              </div>
              <span className="text-lg font-medium">kvalita</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <span className="text-lg font-medium">růst</span>
            </div>
          </div>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Spolupracujeme s předními finančními institucemi v České republice pro zajištění 
            nejlepších produktů a služeb pro naše klienty.
          </p>
        </header>

        {/* Partner Logos */}
        <div className="space-y-12 animate-scale-in">
          {/* Investment Companies */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Investiční společnosti</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-gray-700">Cofidis</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-gray-700">CYRRUS</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-gray-700">ČSOB Leasing</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-gray-700">ekka gold</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-gray-700">IBIS INGOLD</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-gray-700">NEY</span>
              </div>
            </div>
          </div>

          {/* Banks & Financial Institutions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Banky a finanční instituce</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-blue-600">Allianz</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-gray-700">CONSEQ</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-gray-700">ČSOB</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-blue-600">Generali</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-blue-600">KB</span>
              </div>
            </div>
          </div>

          {/* Insurance Companies */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Pojišťovny</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-gray-700">Česká pojišťovna</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-gray-700">UNIQA</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-blue-600">NN</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-green-600">ČSOB Pojišťovna</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-gray-700">Colonnade</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-blue-600">MetLife</span>
              </div>
            </div>
          </div>

          {/* Building Savings */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Stavební spořitelny</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-gray-700">Stavební spořitelna ČS</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-blue-600">Modrá pyramida</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <span className="text-sm font-bold text-black">Raiffeisen stavební spořitelna</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;