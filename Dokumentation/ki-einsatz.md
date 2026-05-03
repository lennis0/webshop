# KI-Einsatz Dokumentation – KeyForge (PA03)

## Übersicht

In diesem Projektauftrag habe ich zwei verschiedene KI-Tools eingesetzt:

1. **Claude (Anthropic)** – Hauptwerkzeug für Codeentwicklung, Strukturierung und Dokumentation
2. **GitHub Copilot** – Inline-Autocomplete während der Entwicklung im Editor

---

## Eingesetzte KI-Tools

### 1. Claude (claude.ai)

**Einsatzgebiet:** Konzept, Struktur, HTML/CSS-Generierung, Debugging, Dokumentation

**Konkrete Nutzung:**

| Aufgabe | Prompt-Ansatz | Ergebnis |
|---|---|---|
| Grundstruktur HTML/CSS | "Erstelle mir die Grundstruktur für einen Gaming-Webshop für Razer-Produkte mit Header, Grid-Layout und Footer" | Saubere semantische HTML-Struktur mit CSS Custom Properties |
| Produktkarten | "Ich brauche Produktkarten mit Bild, Kategorie-Label, Name und Preis für einen Dark-Mode-Shop" | Fertige Card-Komponente, mehrfach wiederverwendet |
| Hero-Karussell (JS) | "Wie baue ich ein automatisches Bild-Karussell mit Touch-Support und Tastaturnavigation ohne Framework?" | Reines JavaScript mit Touch-Events und Arrow-Key-Support |
| CSS-Filter ohne JS | "Wie kann ich Produktkarten per Filterbutton ein-/ausblenden, ohne JavaScript zu verwenden?" | Lösung mit CSS :checked-Selector und benachbarten Geschwister-Selektoren |
| Responsives Grid | "Mach das Produktgrid responsive: Mobile 1-spaltig, Tablet 2–3-spaltig, Desktop 4-spaltig" | auto-fill minmax Grid mit passenden Breakpoints |
| Kontaktformular | "Füge ein Kontaktformular mit Dropdown für Betreffzeilen und Team-Sektion hinzu" | Vollständiges Formular mit Accessibility-Attributen |
| Switch-Guide (Accordion) | "Implementiere einen Schalter-Vergleich als Accordion mit Radio-Tabs, komplett in CSS/HTML" | Checkbox-basiertes Accordion ohne JavaScript |
| CSS Dark Theme | "Erstelle ein konsistentes Dark Theme mit Razer-Grün als Akzentfarbe und CSS Custom Properties" | Vollständiges CSS-Variablen-System |
| Debugging | "Das mobile Hamburger-Menü bleibt nach dem Klick auf einen Link offen" | Fix mit JavaScript-Event-Listener zum Schliessen der Navigation |

**Stärken von Claude:**
- Versteht Kontext über mehrere Gesprächsrunden
- Erklärt warum eine Lösung so aufgebaut ist
- Generiert sauberen, gut strukturierten Code
- Kann bestehenden Code refaktorieren und Fehler erklären

**Schwächen von Claude:**
- Kennt manchmal nicht den aktuellsten Stand von Browser-APIs
- Bei sehr spezifischem visuellen Design braucht man mehrere Iterationen

---

### 2. GitHub Copilot (VS Code Extension)

**Einsatzgebiet:** Autocomplete während dem Schreiben, Boilerplate, Wiederholende Strukturen

**Konkrete Nutzung:**

| Aufgabe | Wie eingesetzt | Ergebnis |
|---|---|---|
| Produktdaten | 1 Produkt als Vorlage geschrieben, Copilot hat die restlichen ergänzt | Alle Produkte schnell strukturiert |
| CSS Custom Properties | Erste Farbvariablen definiert, Copilot vervollständigt | Konsistentes Variablen-System |
| Meta-Tags | `<meta name="` getippt – Copilot schlägt alle wichtigen Tags vor | Vollständige SEO-Tags auf allen Seiten |
| Navigationslinks | Erste 2 Links geschrieben – Copilot ergänzt restliche | Konsistente Nav-Struktur |
| Produktbeschreibungen | Ersten Satz geschrieben – Copilot schlägt passende Fortsetzung vor | Einheitlicher Schreibstil über alle Produktseiten |

**Stärken von GitHub Copilot:**
- Sehr schnell bei wiederholenden Strukturen
- Perfekt für Copy-Paste-lastigen Code (Produktdaten, Meta-Tags)
- Bleibt im Editor, kein Kontextwechsel nötig

**Schwächen von GitHub Copilot:**
- Für neue Konzepte weniger geeignet
- Halluziniert manchmal CSS-Klassen oder Funktionen, die nicht existieren
- Kein Erklärungsmodus – man bekommt Code ohne Begründung

---

## Vergleich der zwei KI-Tools

| Kriterium | Claude | GitHub Copilot |
|---|---|---|
| **Kontext verstehen** | ★★★★★ | ★★☆☆☆ |
| **Code-Qualität** | ★★★★☆ | ★★★☆☆ |
| **Geschwindigkeit** | ★★★☆☆ | ★★★★★ |
| **Erklärungen** | ★★★★★ | ★☆☆☆☆ |
| **Debugging** | ★★★★★ | ★★☆☆☆ |
| **Repetitive Tasks** | ★★★☆☆ | ★★★★★ |
| **Neues lernen** | ★★★★★ | ★★☆☆☆ |

**Fazit:** Für dieses Projekt habe ich Claude für Konzept, Struktur und Problemlösung verwendet, und GitHub Copilot für schnelle Autocomplete-Unterstützung beim Schreiben. Die Kombination funktioniert gut: Claude für das «Was» und «Warum», Copilot für das schnelle «Wie».

---

## Selbstdefinierte Vergleichskriterien

Ich habe die Tools nach folgenden selbst definierten Kriterien bewertet:

1. **Kontextverständnis** – Versteht das Tool den Aufbau des gesamten Projekts?
2. **Code-Qualität** – Wie sauber und wartbar ist der generierte Code?
3. **Geschwindigkeit** – Wie schnell bekomme ich eine nutzbare Antwort?
4. **Lerneffekt** – Lerne ich dabei etwas über HTML/CSS/JS?
5. **Debugging-Unterstützung** – Kann das Tool Fehler erkennen und beheben?
6. **Eignung für Wiederholung** – Wie gut ist es bei repetitiven Aufgaben?

---

## Learnings

- KI generiert guten Startcode, aber man muss den Output immer überprüfen
- Prompts müssen präzise sein: "mach eine Produktseite" funktioniert schlechter als "erstelle eine responsive Produktdetailseite mit Bild oben, Infos unten, ohne CSS-Framework"
- KI-Tools ersetzen das eigene Verständnis nicht – wer den Code nicht versteht, kann ihn auch nicht debuggen
- Die Kombination zweier Tools (Chat-KI + Inline-KI) ist effektiver als nur eines
- CSS-only-Lösungen (Filter, Accordion) sind oft eleganter als gedacht – Claude hat mich auf diese Möglichkeiten hingewiesen

---

## Verwendete Prompting-Techniken

| Technik | Beispiel |
|---|---|
| **Constraint-Prompting** | "ohne CSS-Framework, 100% eigener Code" |
| **Persona-Setting** | "Ich entwickle einen Schul-Webshop für M293, Razer-Produkte" |
| **Iterativer Aufbau** | Erst Grundstruktur, dann einzelne Komponenten |
| **Fehler direkt reingeben** | Fehlermeldung + Code in Claude eingefügt |
| **Vergleichsfragen** | "Was ist besser: CSS :checked-Filter oder JavaScript für diesen Case?" |
