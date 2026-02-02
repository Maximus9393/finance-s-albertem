
## Plán: Email notifikace zdarma pomocí Resend

### Přehled
Implementuji automatické email notifikace při odeslání kontaktního formuláře. Použiji **Resend** - službu pro odesílání emailů s **3 000 emailů měsíčně zdarma**.

### Jak to bude fungovat

```text
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Uživatel vyplní │────▶│ Data se uloží   │────▶│ Edge Function   │────▶│ Email notifikace│
│ kontaktní form  │     │ do Supabase DB  │     │ send-contact-   │     │ na tvůj email   │
│                 │     │ (contacts)      │     │ notification    │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Co budeš potřebovat udělat (jednou)
1. **Registrace na Resend.com** - zdarma, trvá 2 minuty
2. **Vygenerovat API klíč** v Resend dashboardu
3. **Ověřit doménu** (nebo použít testovací `onboarding@resend.dev`)

### Kroky implementace

**Krok 1: Vytvořit Supabase Edge Function**
- Nová funkce `send-contact-notification`
- Přijme data z kontaktního formuláře
- Odešle formátovaný email přes Resend API

**Krok 2: Přidat RESEND_API_KEY secret**
- Do Supabase Edge Function secrets přidat klíč z Resend

**Krok 3: Upravit Contact.tsx**
- Po úspěšném uložení do DB zavolat Edge Function
- Zachovat stávající logiku (data v DB zůstanou jako záloha)

### Struktura emailu
Email bude obsahovat:
- Jméno a kontakt klienta
- Oblast zájmu (pojištění, investice, hypotéky...)
- Zpráva od klienta
- Odkud se o tobě dozvěděl
- Datum a čas odeslání

### Technické detaily

**Edge Function (send-contact-notification/index.ts)**
```typescript
// Volá Resend API pro odeslání emailu
// Formátuje data do přehledné HTML šablony
// Odesílá na albert.gurdzjan@4fin.cz
```

**Úprava Contact.tsx**
```typescript
// Po úspěšném insertu do DB:
await supabase.functions.invoke('send-contact-notification', {
  body: contactData
});
```

### Limity free plánu Resend
- 3 000 emailů/měsíc (cca 100 denně)
- 100 emailů/den první měsíc
- Bez kreditní karty

### Fallback
Pokud email selže, data jsou stále bezpečně uložena v Supabase DB - nic se neztratí.
