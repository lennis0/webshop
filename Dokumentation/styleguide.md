# Styleguide – KeyForge (PA03)

## Übersicht

KeyForge ist ein Premium-Webshop für Razer-Produkte (Keyboards, Switches, Keycaps, Accessories).  
Das Design ist dark-mode-first, minimalistisch und technisch – passend zur Gaming-Ästhetik von Razer.  
Inspiriert von einem Workshop-Handbuch: Monospace-Schrift, harte Kanten, kein Weichzeichnen.

---

## Farben

### Primäre Palette

| Name                | Hex       | CSS Variable              | Verwendung                          |
|---------------------|-----------|---------------------------|-------------------------------------|
| Background          | `#0f0f0f` | `--bg-primary`            | Seitenhintergrund                   |
| Surface             | `#1a1a1a` | `--bg-secondary`          | Cards, Sections                     |
| Dark                | `#000000` | `--bg-dark`               | Header-Hintergrund, reines Schwarz  |
| Border              | `#2a2a2a` | `--border-color`          | Trennlinien, Card-Rahmen (2px)      |
| Border Light        | `#3a3a3a` | `--border-light`          | Hover-States                        |

### Akzentfarben

| Name           | Hex       | CSS Variable       | Verwendung                              |
|----------------|-----------|--------------------|-----------------------------------------|
| Razer Green    | `#00d639` | `--accent`         | Primäre CTAs, Links, Highlights         |
| Bright Green   | `#00ff41` | `--accent-2`       | Glow-Effekte, aktive Zustände           |

### Textfarben

| Name           | Hex       | CSS Variable       | Verwendung                              |
|----------------|-----------|--------------------|------------------------------------------|
| Text Primary   | `#e8e8e8` | `--text-primary`   | Haupttext, Überschriften                |
| Text Muted     | `#888888` | `--text-muted`     | Untertitel, Beschreibungen, Labels      |

---

## Typografie

### Schriftarten

**Display-Schrift:** `Bebas Neue` (Google Fonts) – für alle Überschriften, Logo, Hero-Text  
**Body-Schrift:** `IBM Plex Mono` (Google Fonts) – für Fliesstext, Buttons, Labels, Navigation  
**Fallback:** `system-ui, -apple-system, monospace`

```css
/* Display */
font-family: 'Bebas Neue', system-ui, sans-serif;

/* Body / UI */
font-family: 'IBM Plex Mono', 'Courier New', monospace;
```

**Begründung:** Die Kombination aus Display-Font (Bebas Neue) und Monospace-Body (IBM Plex Mono) erzeugt eine technische, gaming-typische Ästhetik ohne auf externe Icon-Libraries angewiesen zu sein.

### Schriftgrössen

| Element         | Grösse                         | Gewicht | Verwendung                    |
|-----------------|-------------------------------|---------|-------------------------------|
| H1              | `clamp(2.8rem, 6vw, 5rem)`    | `400`   | Hero-Titel (Bebas Neue)       |
| H2              | `clamp(2rem, 4vw, 3rem)`      | `400`   | Sektions-Überschriften        |
| H3              | `clamp(1.2rem, 2vw, 1.6rem)`  | `400`   | Card-Überschriften            |
| Body            | `1rem`                        | `400`   | Fliesstext (IBM Plex Mono)    |
| Small / Label   | `0.85rem`                     | `400`   | Badges, Meta-Infos            |
| Micro           | `0.75rem`                     | `400`   | Footer-Text, Hinweise         |

### Zeilenabstand

| Kontext        | Line Height |
|----------------|-------------|
| Überschriften  | `1.1`       |
| Fliesstext     | `1.7`       |
| Buttons/Labels | `1.0`       |

---

## Abstände (Spacing)

Das Layout verwendet ein 8px-Raster.

| Token  | Wert    | Verwendung                    |
|--------|---------|-------------------------------|
| `xs`   | `4px`   | Badge-Innenabstand            |
| `sm`   | `8px`   | Kleine Gaps, Icons            |
| `md`   | `16px`  | Standard Innenabstand         |
| `lg`   | `24px`  | Card-Padding                  |
| `xl`   | `32px`  | Abschnitte                    |
| `2xl`  | `48px`  | Sektionsabstände              |
| `3xl`  | `80px`  | Hero-Padding                  |

---

## Layout

### Breakpoints

| Name     | Breite      | Beschreibung                          |
|----------|-------------|---------------------------------------|
| Mobile   | `< 480px`   | 1-Spalten-Grid, Hamburger-Navigation  |
| Tablet   | `480–768px` | 2–3-Spalten-Grid                      |
| Desktop  | `> 768px`   | 4-Spalten-Grid, volle Navigation      |

### Container

```css
max-width: 1400px;
margin: 0 auto;
padding: 0 20px; /* Mobile */
padding: 0 40px; /* Desktop */
```

### Produktgrid

```css
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 24px;
```

### Kategorien-Grid

```css
display: grid;
grid-template-columns: repeat(4, 1fr);   /* Desktop */
grid-template-columns: repeat(2, 1fr);   /* Tablet */
grid-template-columns: 1fr;              /* Mobile */
gap: 16px;
```

---

## Komponenten

### Buttons

**Primary (CTA)**
```css
background: #00d639;
color: #000000;
border: 2px solid #00d639;
border-radius: 0;           /* Harte Kanten – kein border-radius */
padding: 12px 32px;
font-family: 'IBM Plex Mono';
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.1em;
```

**Ghost / Outline**
```css
background: transparent;
border: 2px solid #2a2a2a;
color: #e8e8e8;
/* Hover: border-color: #00d639; color: #00d639; */
```

### Produktkarten

```css
background: #1a1a1a;
border: 2px solid #2a2a2a;
border-radius: 0;
padding: 0;               /* Bild geht bis zum Rand */
transition: border-color 0.2s, transform 0.2s;

/* Hover */
border-color: #00d639;
transform: translateY(-4px);
```

### Kategorie-Labels (auf Produktkarten)

```css
background: #00d639;
color: #000000;
font-size: 0.7rem;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.15em;
padding: 3px 10px;
```

### Navigation / Header

```css
background: rgba(0, 0, 0, 0.98);
backdrop-filter: blur(10px);
border-bottom: 2px solid #1a1a1a;
position: fixed;
top: 0;
width: 100%;
```

### Formularfelder

```css
background: #1a1a1a;
border: 2px solid #2a2a2a;
border-radius: 0;
color: #e8e8e8;
font-family: 'IBM Plex Mono';
padding: 12px 16px;

/* Focus */
border-color: #00d639;
box-shadow: 0 0 0 3px rgba(0, 214, 57, 0.1);
outline: none;
```

### Hero-Karussell

```css
height: 90vh;
min-height: 600px;
overflow: hidden;
position: relative;

/* Slides */
transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

/* Progress Bar */
background: #00d639;
height: 3px;
animation: progress 10s linear;
```

---

## Logo

- Name: **KeyForge** (Text-Logo, kein Bild)
- Schrift: `Bebas Neue`
- Farbe: `#00d639` (Razer Green)
- Schriftgrösse: `1.8rem`
- Letter-spacing: `0.1em`

```css
.logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.8rem;
  color: #00d639;
  letter-spacing: 0.1em;
}
```

---

## Icons & Grafiken

- Produktbilder: transparenter Hintergrund (PNG), 800×800px empfohlen
- Kein Icon-Framework (kein Font Awesome, kein Material Icons)
- UI-Symbole: Unicode-Zeichen (z.B. `→`, `×`, `▲`, `▼`)
- Hamburger-Menü: CSS-gezeichnet (drei Balken mit `::before`/`::after`)

---

## Design-Prinzipien

1. **Harte Kanten** – `border-radius: 0` auf allen interaktiven Elementen
2. **2px Borders** – konsistent auf Cards, Buttons, Inputs
3. **Grün als einzige Akzentfarbe** – sparsam eingesetzt für maximale Wirkung
4. **Monospace everywhere** – IBM Plex Mono für alle Lesetexte, erzeugt technisches Feeling
5. **Kein Framework** – 100% eigenes CSS mit Custom Properties

---

## Tone & Voice

- Kurz, direkt, technisch
- Produktbeschreibungen: max. 1–2 Sätze
- Preise immer mit `CHF`-Währungsangabe
- Kategorien auf Englisch (Keyboards, Switches, Keycaps, Accessories)
- UI-Texte auf Deutsch (de-CH)
