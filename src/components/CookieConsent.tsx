import { useState, useEffect } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CookiePreferences {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }

    // Listen for cookie settings opening
    const handleOpenSettings = () => {
      setShowSettings(true);
    };
    
    window.addEventListener('openCookieSettings', handleOpenSettings);
    return () => window.removeEventListener('openCookieSettings', handleOpenSettings);
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
    };
    savePreferences(necessaryOnly);
  };

  const updatePreference = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'necessary') return; // Necessary cookies can't be disabled
    setPreferences(prev => ({ ...prev, [type]: value }));
  };

  const generateConsentId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50 p-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold mb-2 text-card-foreground">Používáme cookies</h3>
                <p className="text-sm text-card-foreground/80">
                  Používáme cookies k personalizaci obsahu a reklam, poskytování funkcí sociálních médií a analýze našeho provozu. 
                  Informace o vašem používání našich stránek také sdílíme s našimi partnery.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm" onClick={acceptNecessary}>
                  Pouze nutné
                </Button>
                <Button variant="outline" size="sm" onClick={() => setShowSettings(true)}>
                  Nastavení
                </Button>
                <Button size="sm" onClick={acceptAll}>
                  Přijmout vše
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              Cookie nastavení
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-3">Váš současný stav</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                  </div>
                  <span className="text-sm">Nutné</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="preferences"
                    checked={preferences.preferences}
                    onCheckedChange={(checked) => updatePreference('preferences', checked as boolean)}
                  />
                  <label htmlFor="preferences" className="text-sm">Preferenční</label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="statistics"
                    checked={preferences.statistics}
                    onCheckedChange={(checked) => updatePreference('statistics', checked as boolean)}
                  />
                  <label htmlFor="statistics" className="text-sm">Statistické</label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="marketing"
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => updatePreference('marketing', checked as boolean)}
                  />
                  <label htmlFor="marketing" className="text-sm">Marketingové</label>
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-2 p-0 h-auto text-blue-600 hover:text-blue-700"
            >
              {showDetails ? 'Skrýt detaily' : 'Zobrazit detaily'}
              {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>

            {showDetails && (
              <div className="bg-muted p-3 rounded text-xs space-y-2">
                <div>
                  <strong>Datum souhlasu:</strong><br />
                  {new Date().toLocaleString('cs-CZ')} SELČ
                </div>
                <div>
                  <strong>ID Vašeho souhlasu:</strong><br />
                  {generateConsentId()}
                </div>
              </div>
            )}

            <div className="flex gap-2 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => savePreferences({ necessary: true, preferences: false, statistics: false, marketing: false })}
                className="flex-1"
              >
                Odebrat souhlas
              </Button>
              <Button
                size="sm"
                onClick={() => savePreferences(preferences)}
                className="flex-1"
              >
                Změnit souhlas
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;