# AI Insights

## 1. Úvod

**AI Insights** je jednoduchý více-stránkový prezentační web o umělé inteligenci. Cílem je představit základní principy AI, její využití a dokumentaci technických rozhodnutí v přehledné a responzivní podobě.

Živý web: https://goosening.github.io/AI_Vyuziti_Web/

## 2. Použité technologie

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- Žádné externí frameworky
- Systémové fonty místo Google Fonts

## 3. Adresářová struktura

- `index.html` – úvodní stránka projektu
- `proc-ai.html` – stránka „Proč AI“
- `vyuziti.html` – stránka s příklady využití AI
- `zkusenost.html` – stránka s osobní zkušeností
- `dokumentace.html` – technická dokumentace projektu
- `style.css` – hlavní styly
- `script.js` – navigace, aktivní odkaz a animace scrollu
- `robots.txt` / `sitemap.xml` – SEO soubory

## 4. Technický rozbor

Pro každou z šesti oblastí optimalizace obsahuje tento rozbor:
- teoretický popis řešení
- výstřižek kódu s komentářem, jak problém řeší

### Výkon
Web používá co nejméně externích zdrojů.

- JavaScript je načítán s atributem `defer`, aby se neblokovalo vykreslování.
- Použity jsou systémové fonty místo stahování webových fontů.

```html
<script src="script.js" defer></script>
```

### SEO
Stránky obsahují základní SEO meta tagy a strukturu.

- `lang="cs"` v `<html>`
- `meta description`
- `link rel="canonical"`
- `robots.txt` a `sitemap.xml`

```html
<meta name="description" content="Simplistický úvod do světa umělé inteligence.">
<link rel="canonical" href="https://goosening.github.io/AI_Vyuziti_Web/">
```

### Přístupnost
Projekt používá sémantické HTML a základní ARIA prvky.

- `aside`, `main`, `section`
- `aria-label` na navigaci
- Skip link pro rychlý přeskok na obsah
- Viditelné fokusové styly pro klávesnici

```html
<a href="#main-content" class="skip-link">Přejít na obsah</a>
```

### Sociální metadata
Do hlaviček byly přidány Open Graph a Twitter tagy pro lepší sdílení.

```html
<meta property="og:title" content="Potenciál a Síla Umělé Inteligence - Úvod">
<meta name="twitter:card" content="summary_large_image">
```

### UI/UX a responzivita
Web je navržen responsivně.

- `meta viewport`
- adaptivní postranní panel pro menší obrazovky
- `clamp()` pro plynulé titulky

```css
#hero-title {
    font-size: clamp(3rem, 5vw, 5rem);
}
```

### Validita a čistota kódu
Web je postaven bez zbytečných knihoven a obsahuje minimální množství CSS/JS. Kód je dobře strukturovaný a snadno čitelný.

## 5. AI Deník

Při práci na projektu jsem použil AI jako asistenta pro:

- tvorbu technické dokumentace
- návrh SEO a sociálních meta tagů
- kontrolu přístupnosti a UX
- sepsání tohoto `README.md`

Pár použitých promptů:

- „Jaké jsou nejlepší praktiky pro přístupnost v jednoduchém HTML/CSS projektu?"
- „Zkontroloval by jsi můj kód prosím?"

## 6. Instalace a spuštění

### Lokálně otevřít soubor
Otevřete `index.html` přímo v prohlížeči.

### Spuštění z lokálního serveru
Pokud používáte Python, můžete spustit lokální server:

```powershell
# Spusťte příkaz v kořenovém adresáři projektu
python -m http.server 8000
```

Pak otevřete v prohlížeči: `http://localhost:8000`

### Umístění obrázků
V projektu vytvořte složku `images/` v kořenovém adresáři a ukládejte tam všechny obrázky použitá na stránkách. Doporučená struktura:

- `images/screenshots/` — screenshoty desktop / mobil
- `images/assets/` — ikony, ilustrace, optimalizované obrázky pro web

Pravidla a doporučení:
- Používejte relativní cesty v HTML, např. `<img src="images/screenshots/home-desktop.png" alt="Úvodní strana - desktop">`.
- Preferujte moderní formáty (WebP) pro fotografie a PNG/SVG pro grafiku.
- Optimalizujte rozměry a velikost souborů pro rychlé načítání.
- Vždy vyplňte `alt` atribut pro přístupnost.

## 7. Galerie

- Desktop verze: úvodní stránka se sidebar navigací.
- Mobilní verze: postranní panel se mění na horní navigaci a obsah je čitelný na malých obrazovkách.
- Klíčové funkce: aktivní odkaz v navigaci, skip link, responsivní rozvržení, animace načítání obsahu.
