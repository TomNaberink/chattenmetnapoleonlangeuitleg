import TestChatBot from '@/components/TestChatBot'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-blue-600 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">👑</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Chat met Napoleon Bonaparte
          </h1>
          
          <p className="text-xl text-blue-700 font-medium mb-6">
            Stel vragen aan de Franse keizer over zijn leven, oorlogen en het Franse Keizerrijk
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              🎓 Voor HAVO 5 Geschiedenis
            </h2>
            <p className="text-gray-600 text-sm">
              Deze AI-chatbot helpt je bij het leren over Napoleon Bonaparte en zijn tijd. 
              Stel vragen over zijn militaire campagnes, politieke hervormingen, of het dagelijks leven in het Franse Keizerrijk.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <TestChatBot />
          
          {/* Voorbeeldvragen */}
          <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                💡
              </span>
              Voorbeeldvragen om te stellen
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-800">⚔️ Militaire Geschiedenis</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• "Vertel over de Slag bij Austerlitz"</li>
                  <li>• "Waarom faalde de Russische campagne?"</li>
                  <li>• "Hoe organiseerde je je Grande Armée?"</li>
                  <li>• "Wat was je grootste militaire overwinning?"</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-red-800">👑 Politiek & Bestuur</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• "Wat was de Code Napoleon?"</li>
                  <li>• "Hoe werd je keizer van Frankrijk?"</li>
                  <li>• "Vertel over het Continentaal Stelsel"</li>
                  <li>• "Welke hervormingen voerde je door?"</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-green-800">🏛️ Maatschappij & Cultuur</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• "Hoe was het dagelijks leven in jouw tijd?"</li>
                  <li>• "Wat vond je van de Verlichting?"</li>
                  <li>• "Hoe veranderde je het onderwijs?"</li>
                  <li>• "Vertel over je relatie met Joséphine"</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-800">🌍 Europa & Erfenis</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• "Hoe veranderde je Europa?"</li>
                  <li>• "Wat is je belangrijkste erfenis?"</li>
                  <li>• "Vertel over je ballingschap op Elba"</li>
                  <li>• "Hoe denk je over je nederlaag bij Waterloo?"</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Instructies voor docenten */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm">👨‍🏫</span>
              </span>
              Voor de docent
            </h3>
            
            <div className="space-y-4 text-sm text-blue-700">
              <div>
                <h4 className="font-semibold mb-2">🎯 Leerdoelen</h4>
                <ul className="space-y-1 ml-4">
                  <li>• Begrip van Napoleon als historische figuur</li>
                  <li>• Inzicht in de gevolgen van de Franse Revolutie</li>
                  <li>• Kennis van Europese geschiedenis rond 1800</li>
                  <li>• Ontwikkeling van historisch denken</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">📚 Didactische tips</h4>
                <ul className="space-y-1 ml-4">
                  <li>• Laat leerlingen eerst zelf vragen bedenken</li>
                  <li>• Vergelijk antwoorden met het geschiedenisboek</li>
                  <li>• Bespreek de betrouwbaarheid van AI-antwoorden</li>
                  <li>• Gebruik als aanvulling op traditionele bronnen</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 text-blue-600">
              <span>⚔️</span>
              <span>Vive l'Empereur!</span>
              <span>👑</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Napoleon Chatbot voor HAVO 5 Geschiedenis • Powered by Gemini AI
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}