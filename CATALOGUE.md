# Max Examples — catalogue / Katalog

A bilingual, readable companion to the [interactive catalogue](https://adrianartacho.github.io/max-examples/).

Generated from [`data/projects.json`](data/projects.json). Edit that file, then run `python3 scripts/validate.py --write-catalogue`.

**33 entries · Updated / Aktualisiert: 2026-10-21**

The source-check dates refer to the linked documentation. Patches were not executed as part of this catalogue. Difficulty and student prompts are editorial suggestions. The original artworks, patches and media remain credited to their creators.

Die Prüfdatumsangaben beziehen sich auf die verlinkte Dokumentation. Die Patches wurden für diesen Katalog nicht ausgeführt. Schwierigkeitsstufen und Projektimpulse sind redaktionelle Vorschläge. Urheber:innen der Originalwerke, Patches und Medien sind jeweils genannt.

## Contents / Inhalt

- [Lumière](#lumiere)
- [BEAP — a modular synthesizer in Max](#beap-modular)
- [MIGSI / Pocket Fig](#migsi-pocket-fig)
- [VIZZIE — an instant video performance rig](#vizzie)
- [FluCoMa — 2D Corpus Explorer](#flucoma-corpus-explorer)
- [Forester](#forester)
- [Skin Music](#skin-music)
- [bach + cage — compose with live notation](#bach-cage)
- [Granulator III](#granulator-iii)
- [Video Music Machine](#video-music-machine)
- [Voyager](#voyager)
- [dada — playful interfaces for composing](#dada)
- [ppooll — build your own performance environment](#ppooll)
- [lady’s glove](#ladys-glove)
- [Circular Sequencer](#circular-sequencer)
- [SVEN](#sven)
- [Voci / voice and electronics](#pamela-z-voci)
- [Semita — music theory as a playable experiment](#semita)
- [Mutable VR](#mutable-vr)
- [Der Cryptochron](#der-cryptochron)
- [Automatonism](#automatonism)
- [Interactive Particles](#touchdesigner-interactive-particles)
- [Belle Box](#bela-belle-box)
- [sc140 — music in 140 characters](#supercollider-sc140)
- [Sonic Pi — Live Loops](#sonic-pi-live-loops)
- [\[re\]capture — an installation scored with sensor data](#ossia-recapture)
- [plugdata — patch an instrument inside a DAW](#plugdata)
- [VCV Rack — from keyboard to modular instrument](#vcv-rack-first-patch)
- [mesh2audio — play a 3D shape](#mesh2audio)
- [Max Cookbook](#max-cookbook)
- [Cycling ’74 — User Projects](#cycling74-projects)
- [MaxforLive.com — Device Library](#maxforlive-library)
- [Patchstorage](#patchstorage)

---

<a id="lumiere"></a>

## 01. Lumière

**Robert Henke**

Project / Projekt · Visuals & audiovisual / Visuals & Audiovisuelles · Inspiration / Anschauen

**Environment / Umgebung:** Max/MSP, gen~, Ableton Live

**EN:** An audiovisual performance in which laser shapes and electronic sounds become coordinated musical events. Henke built a dedicated control and synthesis system in Max and gen~.

**Project prompt:** Make one MIDI note trigger both a sound and a Jitter shape. Give them a shared envelope, then explore independent colours and timbres.

**Access & requirements:** Performance video and development notes; no public patch linked. The original uses a custom laser setup; explore the idea on a screen.

**DE:** Eine audiovisuelle Performance, in der Laserformen und elektronische Klänge zu gemeinsamen musikalischen Ereignissen werden. Henke entwickelte dafür eine eigene Steuerungs- und Syntheseumgebung in Max und gen~.

**Projektimpuls:** Lass eine MIDI-Note gleichzeitig einen Klang und eine Jitter-Form auslösen. Beide erhalten eine gemeinsame Hüllkurve; Farbe und Klangfarbe kannst du getrennt variieren.

**Zugang & Voraussetzungen:** Performancevideo und Entwicklungsnotizen; kein öffentlicher Patch verlinkt. Das Original verwendet ein spezielles Lasersystem; die Idee lässt sich am Bildschirm erkunden.

**Links**

- [Project](<https://roberthenke.com/concerts/lumiere.html>) · project
- [Lumière II — live](<https://www.youtube.com/watch?v=7cmkZfkuMR8>) · video
- [Development notes](<https://roberthenke.com/technology/blog.html>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. roberthenke.com](<https://roberthenke.com/concerts/lumiere.html>)
- [2. roberthenke.com](<https://roberthenke.com/technology/blog.html>)
- [3. boilerroom.tv](<https://boilerroom.tv/session/mutek-mx-robert-henke-koreless-emmanuel-biard/>)

Image credit / Bildnachweis: [Robert Henke](<https://roberthenke.com/concerts/lumiere.html>).

---

<a id="beap-modular"></a>

## 02. BEAP — a modular synthesizer in Max

**Matthew Davidson; tutorial by Darwin Grosse / Cycling ’74**

Tool / Werkzeug · Sound & instruments / Klang & Instrumente · Beginner / Einstieg

**Environment / Umgebung:** Max

**EN:** Connect ready-made oscillators, filters, envelopes and control modules to build a playable synthesizer. The introductory video assembles a first instrument step by step.

**Project prompt:** Build an instrument with just three controls. Decide which changes should happen together when one control moves.

**Access & requirements:** BEAP modules are bundled with Max; source and examples are also available on GitHub. The tutorial uses an older Max interface.

**DE:** Verbinde fertige Oszillatoren, Filter, Hüllkurven und Steuermodule zu einem spielbaren Synthesizer. Das Einführungsvideo baut Schritt für Schritt ein erstes Instrument auf.

**Projektimpuls:** Baue ein Instrument mit nur drei Reglern. Entscheide, welche Veränderungen beim Bewegen eines Reglers gemeinsam passieren sollen.

**Zugang & Voraussetzungen:** BEAP-Module sind in Max enthalten; Quellpatches und Beispiele gibt es auch auf GitHub. Das Tutorial zeigt eine ältere Max-Oberfläche.

**Links**

- [BEAP tutorial + video](<https://cycling74.com/tutorials/a-few-minutes-with-beap-tutorial-series>) · video
- [Modules and example patches](<https://github.com/stretta/BEAP>) · patch

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. cycling74.com](<https://cycling74.com/tutorials/a-few-minutes-with-beap-tutorial-series>)
- [2. github.com](<https://github.com/stretta/BEAP>)
- [3. cycling74.com](<https://cycling74.com/tutorials/package-authoring-an-introduction>)

---

<a id="migsi-pocket-fig"></a>

## 03. MIGSI / Pocket Fig

**Sarah Belle Reid & Ryan Gaston**

Project / Projekt · Interaction & sensors / Interaktion & Sensoren · Advanced / Fortgeschritten

**Environment / Umgebung:** Max/MSP, Arduino, OSC

**EN:** An augmented trumpet captures valve movement, hand pressure and instrument orientation. In Pocket Fig, those gestures drive stutters and granular transformations of trumpet and voice in Max.

**Project prompt:** Add one sensor or MIDI control to an acoustic instrument. Map it to one transformation, then decide which gestures should leave the acoustic sound untouched.

**Access & requirements:** Open-source hardware project with a design paper and videos. Requires a trumpet and custom electronics; the cited pages do not offer a ready-to-run Max patch download.

**DE:** Eine erweiterte Trompete erfasst Ventilbewegung, Handdruck und Instrumentenausrichtung. In Pocket Fig steuern diese Gesten Stottereffekte und granulare Verwandlungen von Trompete und Stimme in Max.

**Projektimpuls:** Ergänze ein akustisches Instrument um einen Sensor oder MIDI-Regler. Steuere damit eine Klangveränderung und entscheide, welche Gesten den akustischen Klang unverändert lassen sollen.

**Zugang & Voraussetzungen:** Open-Source-Hardwareprojekt mit Fachartikel und Videos. Benötigt eine Trompete und eigene Elektronik; die verlinkten Seiten bieten keinen direkt ausführbaren Max-Patch zum Download.

**Links**

- [Project](<https://www.migsitrumpet.com/>) · project
- [MIGSI demonstration](<https://www.youtube.com/watch?v=tbXgUDQaNv0>) · video
- [Pocket Fig](<https://www.migsitrumpet.com/projects>) · project
- [Design paper](<https://www.nime.org/proceedings/2016/nime2016_paper0082.pdf>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. www.migsitrumpet.com](<https://www.migsitrumpet.com/>)
- [2. www.migsitrumpet.com](<https://www.migsitrumpet.com/projects>)
- [3. www.sarahbellereid.com](<https://www.sarahbellereid.com/migsi/>)

---

<a id="vizzie"></a>

## 04. VIZZIE — an instant video performance rig

**Cycling ’74; tutorial by Gregory Taylor**

Tool / Werkzeug · Visuals & audiovisual / Visuals & Audiovisuelles · Beginner / Einstieg

**Environment / Umgebung:** Max, Jitter

**EN:** Video players, effects and control modules connect into a live visual instrument. VIZZIE offers an approachable first encounter with Jitter without starting at the lowest level.

**Project prompt:** Turn one everyday video clip into a visual score. Map a MIDI knob to colour and another to playback behaviour.

**Access & requirements:** Included with Max; updates are available in Package Manager. The linked introduction is older, so individual module interfaces may differ.

**DE:** Videoplayer, Effekte und Steuermodule werden zu einem Instrument für Live-Visuals verbunden. VIZZIE bietet einen zugänglichen Einstieg in Jitter mit fertigen Bausteinen.

**Projektimpuls:** Verwandle einen alltäglichen Videoclip in eine visuelle Partitur. Steuere die Farbe mit einem MIDI-Regler und das Abspielverhalten mit einem zweiten.

**Zugang & Voraussetzungen:** In Max enthalten; Updates gibt es im Package Manager. Die verlinkte Einführung ist älter, einzelne Moduloberflächen können abweichen.

**Links**

- [Introduction + video](<https://cycling74.com/tutorials/a-brief-introduction-to-vizzie>) · video
- [VIZZIE package](<https://cycling74.com/packages/vizzie>) · patch
- [Overview](<https://cycling74.com/articles/introducing-vizzie>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. cycling74.com](<https://cycling74.com/packages/vizzie>)
- [2. cycling74.com](<https://cycling74.com/tutorials/a-brief-introduction-to-vizzie>)
- [3. cycling74.com](<https://cycling74.com/articles/introducing-vizzie>)

---

<a id="flucoma-corpus-explorer"></a>

## 05. FluCoMa — 2D Corpus Explorer

**James Bradbury / FluCoMa**

Project / Projekt · Sound & instruments / Klang & Instrumente · Intermediate / Vertiefung

**Environment / Umgebung:** Max, FluCoMa

**EN:** Slice a recording, analyse the fragments and arrange them as points on a two-dimensional map. Moving through the map becomes a way to discover and play sounds.

**Project prompt:** Record twenty sounds from your classroom. Compare a map based on loudness and brightness with the groups you would make by listening.

**Access & requirements:** Requires Max and the free FluCoMa package. Tutorial code and corrections are discussed in the linked forum thread; the package also includes examples.

**DE:** Zerlege eine Aufnahme, analysiere die Fragmente und ordne sie als Punkte auf einer zweidimensionalen Karte an. Die Bewegung durch die Karte wird zum Entdecken und Spielen von Klängen.

**Projektimpuls:** Nimm zwanzig Klänge im Unterrichtsraum auf. Vergleiche eine Karte nach Lautheit und Helligkeit mit einer Gruppierung, die du nach Gehör erstellen würdest.

**Zugang & Voraussetzungen:** Benötigt Max und das kostenlose FluCoMa-Paket. Tutorialcode und Korrekturen stehen im verlinkten Forum; auch das Paket enthält Beispiele.

**Links**

- [Tutorial + videos](<https://learn.flucoma.org/learn/2d-corpus-explorer/>) · video
- [Tutorial patches + corrections](<https://discourse.flucoma.org/t/creating-a-2d-corpus-explorer-video-tutorial-series/1157>) · patch
- [Install FluCoMa](<https://www.flucoma.org/download/>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. learn.flucoma.org](<https://learn.flucoma.org/learn/2d-corpus-explorer/>)
- [2. discourse.flucoma.org](<https://discourse.flucoma.org/t/creating-a-2d-corpus-explorer-video-tutorial-series/1157>)
- [3. www.flucoma.org](<https://www.flucoma.org/download/>)

---

<a id="forester"></a>

## 06. Forester

**Leafcutter John**

Tool / Werkzeug · Sound & instruments / Klang & Instrumente · Beginner / Einstieg

**Environment / Umgebung:** Max/MSP

**EN:** A modular sonic playground whose forest-like interface turns movement between nodes into sound transformations. Feed it field recordings, live inputs or stems and explore it as a performance instrument.

**Project prompt:** Place three recordings at different positions in a two-dimensional space. Crossfade between them with the mouse, then make the cursor wander automatically.

**Access & requirements:** Paid/donation-based download from the creator; runs inside Max, not Max for Live. Check the creator’s current requirements and purchase terms.

**DE:** Eine modulare Klangumgebung mit einer waldartigen Oberfläche: Bewegungen zwischen Knoten verändern den Klang. Field Recordings, Live-Eingänge oder Stems werden zum Material eines spielbaren Instruments.

**Projektimpuls:** Verteile drei Aufnahmen in einer zweidimensionalen Fläche. Überblende mit der Maus zwischen ihnen und lass den Cursor anschließend selbstständig wandern.

**Zugang & Voraussetzungen:** Download gegen Bezahlung/Spende beim Künstler; läuft in Max, nicht in Max for Live. Aktuelle Voraussetzungen und Konditionen stehen auf der Projektseite.

**Links**

- [Project & download](<https://leafcutterjohn.com/forester-2022/>) · patch
- [Build your first forest](<https://www.youtube.com/watch?v=mPwkNOkctj8>) · video
- [Artist interview](<https://cycling74.com/articles/an-interview-with-leafcutter-john>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. leafcutterjohn.com](<https://leafcutterjohn.com/forester-2022/>)
- [2. cycling74.com](<https://cycling74.com/articles/an-interview-with-leafcutter-john>)

---

<a id="skin-music"></a>

## 07. Skin Music

**Lauren Sarah Hayes**

Project / Projekt · Interaction & sensors / Interaktion & Sensoren · Inspiration / Anschauen

**Environment / Umgebung:** Max/MSP, Arduino

**EN:** An audio-haptic composition experienced on a chaise longue. Max coordinates sound, vibration motors and tactile transducers, making musical structure something listeners can feel through their bodies.

**Project prompt:** Compose a short rhythm with two outputs: an audible sound and a visual pulse. Compare synchrony, delay and independent patterns before exploring tactile hardware.

**Access & requirements:** 2012 artwork documented with video and a technical overview. The original requires a custom chair, Arduino and vibration hardware; no patch linked.

**DE:** Eine audiohaptische Komposition auf einer Liege. Max koordiniert Klang, Vibrationsmotoren und Körperschallwandler: Musikalische Strukturen werden am eigenen Körper spürbar.

**Projektimpuls:** Komponiere einen kurzen Rhythmus mit zwei Ausgaben: hörbarer Klang und sichtbarer Puls. Vergleiche Synchronität, Verzögerung und unabhängige Muster, bevor du haptische Hardware einsetzt.

**Zugang & Voraussetzungen:** Kunstwerk von 2012 mit Video und technischer Übersicht. Das Original benötigt eine spezielle Liege, Arduino und Vibrationshardware; kein Patch verlinkt.

**Links**

- [Project](<https://cycling74.com/projects/skin-music-an-audio-haptic-composition>) · project
- [Video](<https://vimeo.com/77170690>) · video

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. cycling74.com](<https://cycling74.com/projects/skin-music-an-audio-haptic-composition>)

Image credit / Bildnachweis: [Lauren Sarah Hayes — project documentation](<https://cycling74.com/projects/skin-music-an-audio-haptic-composition>).

---

<a id="bach-cage"></a>

## 08. bach + cage — compose with live notation

**Andrea Agostini and Daniele Ghisi**

Tool / Werkzeug · Generative music / Generative Musik · Intermediate / Vertiefung

**Environment / Umgebung:** Max, bach, cage

**EN:** Bring musical notation into a Max patch: generate, transform and display scores while a system runs. The companion cage library supplies higher-level composition tools and tutorials.

**Project prompt:** Record a short MIDI phrase, then show three transformations as notation. Let a performer choose which version becomes the next phrase.

**Access & requirements:** Free packages for Max, available through Package Manager. Check the package’s platform compatibility; included overview patches lead to help files and tutorials.

**DE:** Bringe Notenschrift in einen Max-Patch: Erzeuge, verändere und zeige Partituren, während das System läuft. Die ergänzende cage-Bibliothek bietet größere kompositorische Bausteine und Tutorials.

**Projektimpuls:** Nimm eine kurze MIDI-Phrase auf und zeige drei Varianten als Noten. Eine spielende Person entscheidet, welche Variante zur nächsten Phrase wird.

**Zugang & Voraussetzungen:** Kostenlose Pakete für Max, erhältlich im Package Manager. Plattformkompatibilität prüfen; die enthaltenen Übersichtspatches führen zu Hilfedateien und Tutorials.

**Links**

- [Notation capabilities](<https://www.bachproject.net/features/>) · project
- [Install bach / cage](<https://www.bachproject.net/dl/>) · patch
- [cage source + tutorial guidance](<https://github.com/bachfamily/cage>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. www.bachproject.net](<https://www.bachproject.net/features/>)
- [2. www.bachproject.net](<https://www.bachproject.net/dl/>)
- [3. github.com](<https://github.com/bachfamily/cage>)
- [4. www.andreaagostini.eu](<https://www.andreaagostini.eu/software/>)

---

<a id="granulator-iii"></a>

## 09. Granulator III

**Robert Henke with Ableton**

Project / Projekt · Sound & instruments / Klang & Instrumente · Beginner / Einstieg

**Environment / Umgebung:** Max for Live, Ableton Live

**EN:** A playable granular instrument that transforms tiny sample fragments into evolving textures. It can capture live audio and use MPE gestures to shape individual notes.

**Project prompt:** Use one spoken syllable as the only sound source. Create a sustained texture, a rhythmic passage and a recognisable voice from it.

**Access & requirements:** A Max for Live device, not a standalone Max patch. Ableton lists Live 12 Standard with Max for Live as the requirement; included with Live 12 Suite. Download requires an account.

**DE:** Ein spielbares Granularinstrument verwandelt kleinste Samplefragmente in sich wandelnde Texturen. Es kann Live-Audio aufnehmen und einzelne Töne durch MPE-Gesten gestalten.

**Projektimpuls:** Verwende eine gesprochene Silbe als einzige Klangquelle. Entwickle daraus eine Liegetextur, eine rhythmische Passage und eine erkennbare Stimme.

**Zugang & Voraussetzungen:** Ein Max-for-Live-Gerät, kein eigenständiger Max-Patch. Ableton nennt Live 12 Standard mit Max for Live als Voraussetzung; in Live 12 Suite enthalten. Download mit Benutzerkonto.

**Links**

- [Device + audio examples](<https://www.ableton.com/en/packs/granulator-iii/>) · project
- [Download device](<https://www.ableton.com/en/packs/granulator-iii/>) · patch
- [Creator’s guide](<https://roberthenke.com/technology/granulator3.html>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. www.ableton.com](<https://www.ableton.com/en/packs/granulator-iii/>)
- [2. roberthenke.com](<https://roberthenke.com/technology/granulator3.html>)

---

<a id="video-music-machine"></a>

## 10. Video Music Machine

**Amit Segall**

Project / Projekt · Generative music / Generative Musik · Inspiration / Anschauen

**Environment / Umgebung:** Max/MSP, Jitter

**EN:** A student project that turns video into an 8 × 16 musical step sequencer. Video clips or a live camera generate musical patterns, with internal sound generation and MIDI output.

**Project prompt:** Read the brightness of a few webcam regions and map it to note velocity. Add thresholds so only bright regions trigger notes.

**Access & requirements:** Demo and creator description; no public patch linked on the project page. A strong example of an achievable student concept.

**DE:** Ein Studienprojekt, das Video in einen musikalischen 8 × 16-Step-Sequencer verwandelt. Clips oder eine Livekamera erzeugen musikalische Muster, mit interner Klangerzeugung und MIDI-Ausgabe.

**Projektimpuls:** Lies die Helligkeit einiger Webcam-Bildbereiche aus und übertrage sie auf die Anschlagsstärke. Mit Schwellenwerten lösen nur helle Bereiche Noten aus.

**Zugang & Voraussetzungen:** Demo und Beschreibung des Entwicklers; auf der Projektseite ist kein öffentlicher Patch verlinkt. Ein gutes Beispiel für eine klar umrissene studentische Projektidee.

**Links**

- [Project](<https://cycling74.com/projects/video-music-machine>) · project
- [Demo](<https://www.youtube.com/watch?v=ndsxA_quX_k>) · video

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. cycling74.com](<https://cycling74.com/projects/video-music-machine>)

---

<a id="voyager"></a>

## 11. Voyager

**George Lewis; Max implementation with Damon Holzborn**

Project / Projekt · Generative music / Generative Musik · Inspiration / Anschauen

**Environment / Umgebung:** Max/MSP, MIDI

**EN:** An improvising computer partner that can follow a musician, contrast with them or pursue its own behaviour. The long-running project was translated from FORTH into Max, including a Disklavier piano version.

**Project prompt:** Build a partner with three states: imitate, contrast and play independently. Let note density or pauses influence state changes.

**Access & requirements:** Performance examples and an extensive interview explaining the system. No public patch download linked; the project predates its Max implementation.

**DE:** Ein improvisierender Computerpartner, der Musiker:innen folgen, ihnen widersprechen oder eigene Wege verfolgen kann. Das langjährige Projekt wurde von FORTH nach Max übertragen, unter anderem als Disklavier-Version.

**Projektimpuls:** Baue einen Partner mit drei Zuständen: imitieren, kontrastieren und selbstständig spielen. Lass Notendichte oder Pausen die Zustandswechsel beeinflussen.

**Zugang & Voraussetzungen:** Performancebeispiele und ein ausführliches Interview zur Funktionsweise. Kein öffentlicher Patch-Download verlinkt; das Projekt entstand vor seiner Max-Implementierung.

**Links**

- [How Voyager works](<https://cycling74.com/articles/an-interview-with-george-lewis-and-damon-holzborn-part-1>) · project
- [Voyager & percussion](<https://www.youtube.com/watch?v=HaPSvqNQtOI>) · video
- [Technical interview, part 2](<https://cycling74.com/articles/an-interview-with-george-lewis-and-damon-holzborn-part-2>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. cycling74.com](<https://cycling74.com/articles/an-interview-with-george-lewis-and-damon-holzborn-part-1>)
- [2. cycling74.com](<https://cycling74.com/articles/an-interview-with-george-lewis-and-damon-holzborn-part-2>)

---

<a id="dada"></a>

## 12. dada — playful interfaces for composing

**Daniele Ghisi / bach family**

Tool / Werkzeug · Generative music / Generative Musik · Intermediate / Vertiefung

**Environment / Umgebung:** Max, bach, dada

**EN:** Explore musical material through unusual two-dimensional interfaces inspired by geometry, games, physical models and recreational mathematics. The interface itself can suggest a compositional method.

**Project prompt:** Choose a geometric rule and turn it into a musical rule. Compare what changes when you draw the form instead of writing notes.

**Access & requirements:** Free Max library; requires bach. Install compatible versions via Package Manager and start with the included help patches.

**DE:** Erkunde musikalisches Material mit ungewöhnlichen zweidimensionalen Oberflächen aus Geometrie, Spielen, physikalischen Modellen und mathematischen Experimenten. Die Oberfläche selbst kann eine Kompositionsmethode anregen.

**Projektimpuls:** Wähle eine geometrische Regel und mache daraus eine musikalische Regel. Was verändert sich, wenn du die Form zeichnest, statt Noten zu schreiben?

**Zugang & Voraussetzungen:** Kostenlose Max-Bibliothek; benötigt bach. Kompatible Versionen über den Package Manager installieren und mit den enthaltenen Hilfepatches beginnen.

**Links**

- [Project overview](<https://www.bachproject.net/dada/>) · project
- [Install dada](<https://www.bachproject.net/dl/>) · patch
- [Source + help patches](<https://github.com/bachfamily/dada>) · patch

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. www.bachproject.net](<https://www.bachproject.net/dada/>)
- [2. www.bachproject.net](<https://www.bachproject.net/dl/>)
- [3. www.tenor-conference.org](<https://www.tenor-conference.org/proceedings/2018/19_Ghisi_tenor18.pdf>)

---

<a id="ppooll"></a>

## 13. ppooll — build your own performance environment

**Klaus Filip and the ppooll community**

Tool / Werkzeug · Performance & live electronics / Performance & Live-Elektronik · Intermediate / Vertiefung

**Environment / Umgebung:** Max, Jitter, ppooll

**EN:** A network of interacting audio and visual patches for improvisation and installations. Combine modules into a personal performance setup and extend it with your own patches.

**Project prompt:** Design a ten-minute improvisation setup using one recorded sound, one transformation and one unpredictable process. Rehearse how you enter and leave each state.

**Access & requirements:** Free source and release downloads. The current README requires Max 9 plus additional packages; dependencies vary with the modules you use.

**DE:** Ein Netzwerk miteinander verbundener Audio- und Videopatches für Improvisation und Installationen. Kombiniere Module zu einem persönlichen Performance-Setup und ergänze eigene Patches.

**Projektimpuls:** Entwirf ein Setup für zehn Minuten Improvisation: ein aufgenommener Klang, eine Transformation und ein unvorhersehbarer Prozess. Probe die Übergänge zwischen den Zuständen.

**Zugang & Voraussetzungen:** Quellpatches und Releases sind kostenlos verfügbar. Die aktuelle README verlangt Max 9 und zusätzliche Pakete; Abhängigkeiten richten sich nach den verwendeten Modulen.

**Links**

- [Project + installation](<https://github.com/ppooll-dev/ppooll>) · project
- [Download release](<https://github.com/ppooll-dev/ppooll/releases>) · patch
- [Quick-start guide (PDF)](<https://ppooll.klingt.org/wp-content/uploads/2023/07/ppooll-quickstart.pdf>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. github.com](<https://github.com/ppooll-dev/ppooll>)
- [2. github.com](<https://github.com/ppooll-dev/ppooll/releases>)
- [3. ppooll.klingt.org](<https://ppooll.klingt.org/wp-content/uploads/2023/07/ppooll-quickstart.pdf>)

---

<a id="ladys-glove"></a>

## 14. lady’s glove

**Laetitia Sonami**

Project / Projekt · Interaction & sensors / Interaktion & Sensoren · Inspiration / Anschauen

**Environment / Umgebung:** Max/MSP, Jitter, MIDI

**EN:** A sensor-covered glove turns nuanced hand and arm gestures into simultaneous control of sound, and sometimes lights, motors or video. Each composition gives the same gestures different mappings.

**Project prompt:** Choose one familiar gesture and map it to two musical parameters at once. Compare a direct mapping with one that changes depending on a performance mode.

**Access & requirements:** Historical instrument with artist documentation and archival performances. Custom sensors and mapping software; no public patch linked.

**DE:** Ein Handschuh voller Sensoren übersetzt feine Hand- und Armbewegungen in die gleichzeitige Steuerung von Klang und teilweise Licht, Motoren oder Video. Jede Komposition ordnet den Gesten andere Funktionen zu.

**Projektimpuls:** Wähle eine vertraute Geste und steuere damit gleichzeitig zwei musikalische Parameter. Vergleiche eine direkte Zuordnung mit einer Zuordnung, die sich je nach Spielmodus verändert.

**Zugang & Voraussetzungen:** Historisches Instrument mit Dokumentation der Künstlerin und archivierten Performances. Eigene Sensorik und Mapping-Software; kein öffentlicher Patch verlinkt.

**Links**

- [Instrument & history](<https://sonami.net/portfolio/items/ladys-glove/>) · project
- [Archival performances](<https://vimeo.com/632314493>) · video

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. sonami.net](<https://sonami.net/portfolio/items/ladys-glove/>)

---

<a id="circular-sequencer"></a>

## 15. Circular Sequencer

**Michael Reichmann**

Project / Projekt · Generative music / Generative Musik · Beginner / Einstieg

**Environment / Umgebung:** Max for Live, Ableton Live

**EN:** Moving agents trace circles, squares and other paths across a note grid. Crossing a tile triggers a MIDI note, turning geometric movement into musical sequences.

**Project prompt:** Keep the notes fixed and change only the path and speed. Describe the resulting musical form, then try two independent moving agents.

**Access & requirements:** The .amxd device is available in the repository. Requires Ableton Live with Max for Live; the author documents Max 8.5. Start Live’s transport to move the agents.

**DE:** Bewegte Punkte ziehen Kreise, Quadrate und andere Bahnen über ein Notenraster. Beim Überqueren eines Feldes erklingt eine MIDI-Note: Geometrische Bewegung wird zur Sequenz.

**Projektimpuls:** Lass die Tonhöhen gleich und verändere nur Bahn und Geschwindigkeit. Beschreibe die entstehende Form und probiere anschließend zwei unabhängig bewegte Punkte.

**Zugang & Voraussetzungen:** Die .amxd-Datei liegt im Repository. Benötigt Ableton Live mit Max for Live; der Autor nennt Max 8.5. Die Punkte bewegen sich bei laufendem Live-Transport.

**Links**

- [Project + screenshots](<https://cycling74.com/projects/circular-sequencer>) · project
- [Device + instructions](<https://github.com/michaelreichmann/Circular_Sequencer>) · patch

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. cycling74.com](<https://cycling74.com/projects/circular-sequencer>)
- [2. github.com](<https://github.com/michaelreichmann/Circular_Sequencer>)

---

<a id="sven"></a>

## 16. SVEN

**Amy Alexander and team; Max patch mainly by Wojciech Kosma**

Project / Projekt · Visuals & audiovisual / Visuals & Audiovisuelles · Inspiration / Anschauen

**Environment / Umgebung:** Max, Jitter, Computer vision

**EN:** A playful surveillance installation that transforms pedestrians into music-video stars. A separate vision system sends body and appearance data to Jitter, which selects and applies video treatments.

**Project prompt:** Turn a webcam into an imaginary music-video booth: use simple movement detection to switch between three deliberately different visual styles.

**Access & requirements:** Historical project with video and creator documentation. The original vision system runs separately from Max; no public patch linked in the cited pages.

**DE:** Eine spielerische Überwachungsinstallation verwandelt Passant:innen in Musikvideostars. Ein separates Bildanalysesystem sendet Körper- und Erscheinungsdaten an Jitter, das passende Videoeffekte auswählt.

**Projektimpuls:** Verwandle die Webcam in eine imaginäre Musikvideokabine: Eine einfache Bewegungserkennung schaltet zwischen drei bewusst unterschiedlichen Bildstilen um.

**Zugang & Voraussetzungen:** Historisches Projekt mit Video und Dokumentation der Künstlerin. Das ursprüngliche Bildanalysesystem läuft getrennt von Max; in den verlinkten Seiten kein öffentlicher Patch.

**Links**

- [Artist’s project page](<https://amy-alexander.com/live-performance/sven/>) · project
- [Demo](<https://www.youtube.com/watch?v=jJK6DGnUj5w>) · video
- [Technical overview](<https://cycling74.com/projects/sven-surveillance-video-entertainment-network>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. amy-alexander.com](<https://amy-alexander.com/live-performance/sven/>)
- [2. cycling74.com](<https://cycling74.com/projects/sven-surveillance-video-entertainment-network>)

Image credit / Bildnachweis: [SVEN / Amy Alexander and team — project documentation](<https://cycling74.com/projects/sven-surveillance-video-entertainment-network>).

---

<a id="pamela-z-voci"></a>

## 17. Voci / voice and electronics

**Pamela Z**

Project / Projekt · Performance & live electronics / Performance & Live-Elektronik · Inspiration / Anschauen

**Environment / Umgebung:** Max/MSP, MIDI, Video

**EN:** Pamela Z’s vocal performance practice combines live processing, samples and gesture controllers. Voci expands this into a multimedia work about the many physical, cultural and musical meanings of voice.

**Project prompt:** Build a short vocal scene from one spoken sentence: record it, repeat it at different speeds, and let a gesture switch between live voice and memory.

**Access & requirements:** Artist documentation and performance excerpts; no public patch linked. The repertoire spans several generations of equipment.

**DE:** Pamela Z verbindet Stimme, Livebearbeitung, Samples und Gestencontroller. Voci erweitert diese Praxis zu einem multimedialen Werk über die körperlichen, kulturellen und musikalischen Bedeutungen der Stimme.

**Projektimpuls:** Entwickle aus einem gesprochenen Satz eine kurze Stimmszene: aufnehmen, in verschiedenen Geschwindigkeiten wiederholen und mit einer Geste zwischen Live-Stimme und Erinnerung wechseln.

**Zugang & Voraussetzungen:** Dokumentation der Künstlerin und Performanceausschnitte; kein öffentlicher Patch verlinkt. Das Repertoire umfasst mehrere Generationen technischer Ausstattung.

**Links**

- [Voci](<https://archive.pamelaz.com/voci.html>) · project
- [Voci excerpts](<https://www.youtube.com/watch?v=PqGD2N1FLGg>) · video
- [More performances](<https://pamelaz.com/video/>) · video
- [Voice & electronics practice](<https://pamelaz.com/about/bio/>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. archive.pamelaz.com](<https://archive.pamelaz.com/voci.html>)
- [2. archive.pamelaz.com](<https://archive.pamelaz.com/repertoire.html>)
- [3. pamelaz.com](<https://pamelaz.com/video/>)
- [4. pamelaz.com](<https://pamelaz.com/about/bio/>)

---

<a id="semita"></a>

## 18. Semita — music theory as a playable experiment

**Paul V. Miller**

Tool / Werkzeug · Generative music / Generative Musik · Beginner / Einstieg

**Environment / Umgebung:** Max, bach, cage

**EN:** A teaching patch collection covering Euclidean rhythms, tuning, twelve-tone structures and synthesis. Musical ideas become things you can adjust, hear and inspect.

**Project prompt:** Choose one concept from music theory and build a small instrument around it. Could a tuning comparison or a rhythm generator become a piece?

**Access & requirements:** Free source patches. Most require bach/cage; some use extra files included in the repository. Keep the supplied dependencies with the patches.

**DE:** Eine Lehrpatch-Sammlung zu euklidischen Rhythmen, Stimmungen, Zwölftonstrukturen und Synthese. Musikalische Ideen werden veränderbar, hörbar und sichtbar.

**Projektimpuls:** Wähle ein musiktheoretisches Konzept und baue ein kleines Instrument darum. Könnte aus einem Stimmungsvergleich oder Rhythmusgenerator ein Stück entstehen?

**Zugang & Voraussetzungen:** Kostenlose Quellpatches. Die meisten benötigen bach/cage; einige verwenden mitgelieferte Zusatzdateien. Diese Abhängigkeiten beim Kopieren mitnehmen.

**Links**

- [Patches + descriptions](<https://github.com/lauprellim/semita>) · patch
- [Install bach / cage](<https://www.bachproject.net/dl/>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. github.com](<https://github.com/lauprellim/semita>)
- [2. github.com](<https://github.com/lauprellim>)

---

<a id="mutable-vr"></a>

## 19. Mutable VR

**Chris Speed Visuals**

Project / Projekt · Space & spatial audio / Raum & räumliches Audio · Inspiration / Anschauen

**Environment / Umgebung:** Max/MSP, OSC, VR

**EN:** A student-built immersive instrument where tracked hands shape synthesis and spatial sound inside virtual reality. OSC connects hand tracking to an eight-channel Max audio system.

**Project prompt:** Begin without VR: use an XY controller to move one sound around a stereo or quadraphonic space, then make height control timbre.

**Access & requirements:** 2019 project documentation and video. Original setup uses Leap Motion, Vive and additional spatial-audio tools; no public patch linked.

**DE:** Ein im Studium entwickeltes immersives Instrument: Getrackte Hände formen Synthese und Raumklang in einer virtuellen Umgebung. OSC verbindet das Handtracking mit einem achtkanaligen Max-Audiosystem.

**Projektimpuls:** Beginne ohne VR: Bewege mit einem XY-Regler einen Klang im Stereo- oder Vierkanalraum und lass eine Höhenachse die Klangfarbe steuern.

**Zugang & Voraussetzungen:** Projektdokumentation und Video von 2019. Das Original nutzt Leap Motion, Vive und zusätzliche Raumklangwerkzeuge; kein öffentlicher Patch verlinkt.

**Links**

- [Project](<https://cycling74.com/projects/mutable-vr>) · project
- [Demo](<https://vimeo.com/360105385>) · video

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. cycling74.com](<https://cycling74.com/projects/mutable-vr>)

Image credit / Bildnachweis: [Chris Speed Visuals — project documentation](<https://cycling74.com/projects/mutable-vr>).

---

<a id="der-cryptochron"></a>

## 20. Der Cryptochron

**karl krach**

Project / Projekt · Visuals & audiovisual / Visuals & Audiovisuelles · Inspiration / Anschauen

**Environment / Umgebung:** Max, Jitter, Kinect

**EN:** An interactive video installation that separates a visitor’s movement from the apparent flow of time in the surroundings. Spatial interaction becomes a way to manipulate recorded time.

**Project prompt:** Store a short webcam history and let mouse position choose the playback delay. Extend the idea so different image regions reveal different moments.

**Access & requirements:** 2016 installation with demo; no patch linked. Original dependencies include Kinect and external Max objects, so treat it as a concept reference.

**DE:** Eine interaktive Videoinstallation trennt die Bewegung der Besucher:innen vom scheinbaren Zeitfluss ihrer Umgebung. Räumliche Interaktion wird zur Möglichkeit, aufgezeichnete Zeit zu verändern.

**Projektimpuls:** Speichere einen kurzen Webcam-Verlauf und wähle die Wiedergabeverzögerung mit der Maus. Erweitere die Idee so, dass verschiedene Bildbereiche unterschiedliche Zeitpunkte zeigen.

**Zugang & Voraussetzungen:** Installation von 2016 mit Demo; kein Patch verlinkt. Das Original benötigt Kinect und externe Max-Objekte und dient hier als konzeptionelle Referenz.

**Links**

- [Project](<https://cycling74.com/projects/der-cryptochron>) · project
- [Installation demo](<https://vimeo.com/180166029>) · video

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. cycling74.com](<https://cycling74.com/projects/der-cryptochron>)

---

<a id="automatonism"></a>

## 21. Automatonism

**Johan Eriksson**

Tool / Werkzeug · Generative music / Generative Musik · Beginner / Einstieg

**Environment / Umgebung:** Pure Data

**EN:** A playable modular synthesizer built from Pure Data patches. Its modules, preset system and parameter mappings invite experiments with rhythms, synthesis and self-running musical structures.

**Project prompt:** Connect a sequencer, oscillator and envelope; then let a slow random process change just one parameter. Compare surprise with repetition.

**Access & requirements:** Free software for Pure Data Vanilla, outside Max. The creator provides the patch collection and downloadable Synth Recipes; this is a longstanding collection, so check the included instructions.

**DE:** Ein spielbarer modularer Synthesizer aus Pure-Data-Patches. Module, Presets und Parameterzuordnungen laden zu Experimenten mit Rhythmen, Klängen und selbstständig ablaufenden musikalischen Strukturen ein.

**Projektimpuls:** Verbinde Sequencer, Oszillator und Hüllkurve. Verändere anschließend einen einzigen Parameter langsam per Zufall. Vergleiche Überraschung und Wiederholung.

**Zugang & Voraussetzungen:** Freie Software für Pure Data Vanilla, außerhalb von Max. Der Entwickler bietet die Patch-Sammlung und herunterladbare Synth Recipes an. Bei dieser älteren Sammlung die beiliegende Anleitung beachten.

**Links**

- [Project & download](<https://www.automatonism.com/the-software>) · patch
- [Synth Recipes: videos & patches](<https://www.automatonism.com/synth-recipes>) · video

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. www.automatonism.com](<https://www.automatonism.com/the-software>)
- [2. www.automatonism.com](<https://www.automatonism.com/synth-recipes>)

---

<a id="touchdesigner-interactive-particles"></a>

## 22. Interactive Particles

**Bileam Tschepe / elekktronaut**

Project / Projekt · Interaction & sensors / Interaktion & Sensoren · Intermediate / Vertiefung

**Environment / Umgebung:** TouchDesigner

**EN:** A tutorial in which movement drives a cloud of particles. Optical flow and the particlesGPU component turn a camera image into forces and visual behaviour.

**Project prompt:** Make a visual instrument that responds differently to stillness, a small hand gesture and a large body movement.

**Access & requirements:** Runs in TouchDesigner, not Max. The demonstrated sensor setup uses Kinect; the creator also links a webcam optical-flow approach. Video instructions verified; no free project-file download confirmed.

**DE:** Ein Tutorial, in dem Bewegung eine Partikelwolke steuert. Optical Flow und die Komponente particlesGPU übersetzen ein Kamerabild in Kräfte und visuelles Verhalten.

**Projektimpuls:** Entwirf ein visuelles Instrument, das auf Stillstand, eine kleine Handgeste und eine große Körperbewegung unterschiedlich reagiert.

**Zugang & Voraussetzungen:** Läuft in TouchDesigner, nicht in Max. Das gezeigte Sensorsystem nutzt Kinect; der Autor verlinkt auch einen Optical-Flow-Ansatz mit Webcam. Videoanleitung geprüft; kein kostenloser Projektdatei-Download bestätigt.

**Links**

- [Tutorial & related examples](<https://www.elekktronaut.com/tutorials/interactive-particles>) · docs
- [Watch the tutorial](<https://www.youtube.com/watch?v=GDZoOnzLYGo>) · video

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. www.elekktronaut.com](<https://www.elekktronaut.com/tutorials/interactive-particles>)
- [2. derivative.ca](<https://derivative.ca/community-post/tutorial/interactive-particles-kinect/63905>)

---

<a id="bela-belle-box"></a>

## 23. Belle Box

**Alex Tkalenko**

Project / Projekt · Interaction & sensors / Interaktion & Sensoren · Inspiration / Anschauen

**Environment / Umgebung:** Bela, Pure Data, SuperCollider

**EN:** A portable instrument-design laboratory with light sensors, knobs and buttons connected to a Bela board. Pure Data and SuperCollider sketches let the maker explore how an instrument should feel before fixing its final form.

**Project prompt:** Design a sound that can be played with light and shadow. First prototype the mapping with a slider, then decide what physical gesture it needs.

**Access & requirements:** Project documentation and embedded demonstration videos. Recreating the physical instrument needs Bela hardware and sensors; a complete downloadable Belle Box patch was not confirmed.

**DE:** Ein tragbares Labor für den Instrumentenbau mit Lichtsensoren, Reglern und Tastern an einem Bela-Board. Skizzen in Pure Data und SuperCollider erproben das Spielgefühl, bevor die endgültige Form feststeht.

**Projektimpuls:** Entwirf einen Klang, der sich mit Licht und Schatten spielen lässt. Erprobe die Zuordnung zunächst mit einem Schieberegler und überlege dann, welche körperliche Geste dazu passt.

**Zugang & Voraussetzungen:** Projektdokumentation mit eingebetteten Demonstrationsvideos. Für den physischen Nachbau braucht es Bela-Hardware und Sensoren; ein vollständiger Belle-Box-Patch zum Download wurde nicht bestätigt.

**Links**

- [Project & demonstration videos](<https://blog.bela.io/belle-box-synth-building-lab/>) · video
- [Pure Data on Bela](<https://learn.bela.io/using-bela/languages/pure-data/>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. blog.bela.io](<https://blog.bela.io/belle-box-synth-building-lab/>)
- [2. learn.bela.io](<https://learn.bela.io/using-bela/languages/pure-data/>)

---

<a id="supercollider-sc140"></a>

## 24. sc140 — music in 140 characters

**SuperCollider community**

Project / Projekt · Generative music / Generative Musik · Advanced / Fortgeschritten

**Environment / Umgebung:** SuperCollider

**EN:** An album of musical miniatures, each generated by just 140 characters of SuperCollider code. The recordings and source text reveal how a tiny set of rules can produce surprisingly rich results.

**Project prompt:** Listen to one miniature and change one number in its code. For a Max variation, impose a limit of five sound-producing or control objects.

**Access & requirements:** Audio and source text are archived together. Requires SuperCollider, not Max. This is a historical 2009 collection; individual snippets can have old assumptions or extra dependencies.

**DE:** Ein Album musikalischer Miniaturen, die jeweils aus nur 140 Zeichen SuperCollider-Code entstehen. Aufnahmen und Quelltext zeigen, wie wenige Regeln überraschend vielfältige Ergebnisse hervorbringen können.

**Projektimpuls:** Höre eine Miniatur und verändere eine Zahl im Code. Als Max-Variante: Beschränke dich auf fünf klangerzeugende oder steuernde Objekte.

**Zugang & Voraussetzungen:** Audio und Quelltext sind gemeinsam archiviert. Benötigt SuperCollider, nicht Max. Die Sammlung stammt aus 2009; einzelne Beispiele können ältere Voraussetzungen oder zusätzliche Abhängigkeiten haben.

**Links**

- [Listen & download source](<https://archive.org/details/sc140>) · patch
- [Original project announcement](<https://supercollider.github.io/online%20events/2009/10/21/sc140.html>) · project
- [More SuperCollider examples](<https://supercollider.github.io/examples>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. archive.org](<https://archive.org/details/sc140>)
- [2. supercollider.github.io](<https://supercollider.github.io/online%20events/2009/10/21/sc140.html>)
- [3. supercollider.github.io](<https://supercollider.github.io/examples>)

---

<a id="sonic-pi-live-loops"></a>

## 25. Sonic Pi — Live Loops

**Sam Aaron & Sonic Pi community**

Tool / Werkzeug · Performance & live electronics / Performance & Live-Elektronik · Beginner / Einstieg

**Environment / Umgebung:** Sonic Pi

**EN:** Write and change a running musical loop as a performance. The official examples gradually combine notes, synthesis, samples and synchronised loops, while the project site presents live performances.

**Project prompt:** Perform a one-minute piece by editing three running loops: rhythm, bass and texture. Translate the same rules into a Max sequencer afterwards.

**Access & requirements:** Free, open-source environment with text-based code, outside Max. The tutorial includes runnable examples; the project offers app and web versions with different input/output capabilities.

**DE:** Eine laufende musikalische Schleife schreiben und während der Aufführung verändern. Die offiziellen Beispiele verbinden schrittweise Töne, Synthese, Samples und synchronisierte Loops; die Projektseite zeigt Liveauftritte.

**Projektimpuls:** Spiele ein einminütiges Stück, indem du drei laufende Loops veränderst: Rhythmus, Bass und Textur. Übertrage dieselben Regeln anschließend auf einen Max-Sequencer.

**Zugang & Voraussetzungen:** Freie, quelloffene Umgebung mit textbasiertem Code, außerhalb von Max. Das Tutorial enthält ausführbare Beispiele; App- und Webversion unterscheiden sich bei Ein- und Ausgabemöglichkeiten.

**Links**

- [Live Loops tutorial & code](<https://sonic-pi.net/tutorial-09.html>) · patch
- [Project & performance videos](<https://sonic-pi.net/>) · video

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. sonic-pi.net](<https://sonic-pi.net/tutorial-09.html>)
- [2. sonic-pi.net](<https://sonic-pi.net/>)

---

<a id="ossia-recapture"></a>

## 26. [re]capture — an installation scored with sensor data

**Alice Jarry & team, Concordia University**

Project / Projekt · Interaction & sensors / Interaktion & Sensoren · Inspiration / Anschauen

**Environment / Umgebung:** ossia score, OSC, Sensors

**EN:** An installation that connects air-quality measurements to motors, fans, LEDs and projected video. Its detailed ossia score case study shows how mappings and timed sequences can form an artwork's changing behaviour.

**Project prompt:** Create three contrasting scenes for one sensor: direct control, a timed response and a threshold-triggered event. Try simulated sensor values before adding hardware.

**Access & requirements:** A documented artwork and technical case study, not a ready-to-run Max patch. The original uses custom physical hardware; the mapping ideas can be prototyped in software.

**DE:** Eine Installation, die Luftqualitätsmessungen mit Motoren, Ventilatoren, LEDs und Video verbindet. Die ausführliche Fallstudie in ossia score zeigt, wie Zuordnungen und zeitliche Abläufe das wechselnde Verhalten eines Kunstwerks gestalten.

**Projektimpuls:** Entwirf drei unterschiedliche Szenen für einen Sensor: direkte Steuerung, eine zeitliche Reaktion und ein Ereignis beim Überschreiten einer Schwelle. Beginne mit simulierten Sensorwerten.

**Zugang & Voraussetzungen:** Dokumentiertes Kunstwerk und technische Fallstudie, kein direkt ausführbarer Max-Patch. Das Original nutzt eigene Hardware; die Zuordnungsideen lassen sich zunächst in Software erproben.

**Links**

- [Project & technical case study](<https://ossia.io/posts/air-filtration/>) · docs
- [ossia project](<https://ossia.io/project.html>) · project

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. ossia.io](<https://ossia.io/posts/air-filtration/>)
- [2. ossia.io](<https://ossia.io/project.html>)

---

<a id="plugdata"></a>

## 27. plugdata — patch an instrument inside a DAW

**plugdata contributors**

Tool / Werkzeug · Sound & instruments / Klang & Instrumente · Beginner / Einstieg

**Environment / Umgebung:** plugdata, Pure Data

**EN:** A Pure Data-based visual programming environment that also runs as a DAW plug-in. Its community patch store is a place to discover instruments and effects and inspect how patching can become a personal studio tool.

**Project prompt:** Build a two-control effect: one control changes the sound, the other changes how strongly that transformation follows the incoming volume.

**Access & requirements:** Free, open-source software; standalone use needs no DAW. Runs Pure Data patches, not Max patch files. Check each community patch's terms and dependencies separately.

**DE:** Eine visuelle Programmierumgebung auf Basis von Pure Data, die auch als DAW-Plug-in läuft. Im Community-Patch-Store lassen sich Instrumente und Effekte entdecken und als Ausgangspunkt für eigene Studiowerkzeuge untersuchen.

**Projektimpuls:** Baue einen Effekt mit zwei Reglern: Einer verändert den Klang, der andere bestimmt, wie stark diese Veränderung der Eingangslautstärke folgt.

**Zugang & Voraussetzungen:** Freie, quelloffene Software; eigenständige Nutzung braucht keine DAW. Führt Pure-Data-Patches aus, keine Max-Patchdateien. Bedingungen und Abhängigkeiten einzelner Community-Patches gesondert prüfen.

**Links**

- [Project & download](<https://plugdata.org/>) · project
- [Community patch store](<https://plugdata.org/store.html>) · patch
- [Guides & tutorials](<https://plugdata.org/documentation.html>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. plugdata.org](<https://plugdata.org/>)
- [2. plugdata.org](<https://plugdata.org/store.html>)
- [3. plugdata.org](<https://plugdata.org/documentation.html>)

---

<a id="vcv-rack-first-patch"></a>

## 28. VCV Rack — from keyboard to modular instrument

**VCV**

Tool / Werkzeug · Sound & instruments / Klang & Instrumente · Beginner / Einstieg

**Environment / Umgebung:** VCV Rack

**EN:** The official starter patch connects MIDI, oscillators and audio output in a virtual modular synthesizer. It makes the relationship between pitch, gates, envelopes and modulation tangible before building similar structures in Max.

**Project prompt:** Replace keyboard input with a slow pattern and an independent modulation source. Build a machine that keeps playing but never repeats in exactly the same way.

**Access & requirements:** Runs in VCV Rack, outside Max; the starter patch comes with the application. Start with included modules. Additional modules and editions have their own availability and terms.

**DE:** Der offizielle Einstiegspatch verbindet MIDI, Oszillatoren und Audioausgabe in einem virtuellen modularen Synthesizer. Tonhöhe, Gates, Hüllkurven und Modulation werden greifbar, bevor man ähnliche Strukturen in Max baut.

**Projektimpuls:** Ersetze die Tastatur durch ein langsames Muster und eine unabhängige Modulationsquelle. Baue eine Maschine, die weiterspielt, sich aber nie exakt wiederholt.

**Zugang & Voraussetzungen:** Läuft in VCV Rack, außerhalb von Max; der Einstiegspatch ist in der Anwendung enthalten. Beginne mit den mitgelieferten Modulen. Für Zusatzmodule und Editionen gelten eigene Bedingungen.

**Links**

- [Starter patch walkthrough](<https://vcvrack.com/manual/GettingStarted>) · docs
- [Module library](<https://library.vcvrack.com/>) · project

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. vcvrack.com](<https://vcvrack.com/manual/GettingStarted>)

---

<a id="mesh2audio"></a>

## 29. mesh2audio — play a 3D shape

**Karl Hiner & Ben Wilfong**

Project / Projekt · Sound & instruments / Klang & Instrumente · Advanced / Fortgeschritten

**Environment / Umgebung:** Faust, C++

**EN:** Generate or import a 3D object, turn its shape into a physical sound model, and play it by striking points on the mesh. A vivid bridge between sculpture, acoustics and instrument design.

**Project prompt:** Sketch three imaginary resonant objects and predict their sounds. For a smaller Max project, approximate one with a bank of tuned resonators.

**Access & requirements:** Open-source C++/Faust application with build instructions and demo video; not a Max patch or a one-click beginner installation. The repository points to continued development separately.

**DE:** Ein 3D-Objekt erzeugen oder importieren, seine Form in ein physikalisches Klangmodell verwandeln und Punkte des Modells anschlagen. Eine anschauliche Verbindung von Skulptur, Akustik und Instrumentenbau.

**Projektimpuls:** Skizziere drei imaginäre Resonanzkörper und vermute ihre Klänge. Als kleinere Max-Aufgabe lässt sich einer davon mit einer Bank gestimmter Resonatoren annähern.

**Zugang & Voraussetzungen:** Quelloffene C++/Faust-Anwendung mit Build-Anleitung und Demonstrationsvideo; kein Max-Patch und keine einfache Einstiegsinstallation. Das Repository verweist gesondert auf die Weiterentwicklung.

**Links**

- [Source & build instructions](<https://github.com/khiner/mesh2audio>) · patch
- [Watch project demonstration](<https://youtu.be/RwxgOHVBDvc>) · video
- [More projects using Faust](<https://faust.grame.fr/community/powered-by-faust/>) · project

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. github.com](<https://github.com/khiner/mesh2audio>)
- [2. github.com](<https://github.com/GATech-CSE-6730-Spring-2023-Project/mesh2audio>)
- [3. faust.grame.fr](<https://faust.grame.fr/community/powered-by-faust/>)

---

<a id="max-cookbook"></a>

## 30. Max Cookbook

**Christopher Dobrian / University of California, Irvine**

Directory / Sammlung · Sound & instruments / Klang & Instrumente · Beginner / Einstieg

**Environment / Umgebung:** Max, MSP, Jitter

**EN:** A searchable collection of compact examples with explanations and downloadable patches. Useful when a project idea needs one missing ingredient: MIDI, timing, synthesis or interaction.

**Project prompt:** Choose two recipes that solve different problems and combine them. For example, let a rhythmic process control a synthesis parameter.

**Access & requirements:** Public teaching resource. Examples span older Max versions; some historical video objects need adaptation in current Max.

**DE:** Eine durchsuchbare Sammlung kleiner Beispiele mit Erklärungen und herunterladbaren Patches. Hilfreich, wenn einer Projektidee noch ein Baustein fehlt: MIDI, Timing, Synthese oder Interaktion.

**Projektimpuls:** Kombiniere zwei Beispiele, die unterschiedliche Probleme lösen. Lass etwa einen rhythmischen Prozess einen Syntheseparameter steuern.

**Zugang & Voraussetzungen:** Öffentliches Lehrmaterial. Beispiele stammen aus unterschiedlichen Max-Versionen; manche historischen Videoobjekte müssen für aktuelles Max angepasst werden.

**Links**

- [Browse Max Cookbook](<https://music.arts.uci.edu/dobrian/maxcookbook/>) · project
- [Max example collection](<https://music.arts.uci.edu/dobrian/maxcookbook/chapter/max>) · patch
- [FM synthesis examples](<https://music.arts.uci.edu/dobrian/maxcookbook/keywords/fm>) · patch

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. music.arts.uci.edu](<https://music.arts.uci.edu/dobrian/maxcookbook/>)
- [2. music.arts.uci.edu](<https://music.arts.uci.edu/dobrian/maxcookbook/chapter/max>)
- [3. music.arts.uci.edu](<https://music.arts.uci.edu/dobrian/maxcookbook/keywords/fm>)
- [4. music.arts.uci.edu](<https://music.arts.uci.edu/dobrian/maxcookbook/load-movies>)

---

<a id="cycling74-projects"></a>

## 31. Cycling ’74 — User Projects

**Max community / Cycling ’74**

Directory / Sammlung · Performance & live electronics / Performance & Live-Elektronik · Inspiration / Anschauen

**Environment / Umgebung:** Max, MSP, Jitter, Max for Live, RNBO

**EN:** An ongoing showcase of projects submitted by Max users: instruments, installations, performances, utilities and unusual interfaces. It is a broad starting point for finding a direction of your own.

**Project prompt:** Choose one project far from your usual musical interests. Identify its input, transformation and output, then propose a smaller version for class.

**Access & requirements:** Public showcase. Patch downloads and videos depend on the individual entry; a featured project does not automatically include its source code.

**DE:** Eine laufende Sammlung von Projekten aus der Max-Community: Instrumente, Installationen, Performances, Werkzeuge und ungewöhnliche Oberflächen. Ein breiter Ausgangspunkt für die eigene Projektidee.

**Projektimpuls:** Wähle ein Projekt außerhalb deiner üblichen musikalischen Interessen. Bestimme Eingang, Verarbeitung und Ausgang und schlage eine kleinere Version für den Unterricht vor.

**Zugang & Voraussetzungen:** Öffentliche Projektschau. Patchdownloads und Videos hängen vom Eintrag ab; eine Vorstellung bedeutet nicht automatisch, dass der Quellcode verfügbar ist.

**Links**

- [Browse User Projects](<https://cycling74.com/projects>) · project
- [Tutorials with video / patch filters](<https://cycling74.com/tutorials>) · docs

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. cycling74.com](<https://cycling74.com/projects>)
- [2. cycling74.com](<https://cycling74.com/tutorials?category=beginner>)

---

<a id="maxforlive-library"></a>

## 32. MaxforLive.com — Device Library

**Max for Live community / Cycling ’74**

Directory / Sammlung · Performance & live electronics / Performance & Live-Elektronik · Beginner / Einstieg

**Environment / Umgebung:** Max for Live, Ableton Live

**EN:** Browse community-made instruments, audio effects, MIDI effects, generators and transformations. A useful place to discover how a focused musical idea becomes a small, usable tool.

**Project prompt:** Find three devices that solve the same musical problem. Compare their controls, then sketch the simplest version you would want to build.

**Access & requirements:** Entries include free and paid devices with different requirements. Check each author’s page; these devices generally require Ableton Live with Max for Live.

**DE:** Entdecke Instrumente, Audioeffekte, MIDI-Effekte, Generatoren und Transformationen aus der Community. Die Sammlung zeigt, wie aus einer konkreten musikalischen Idee ein kleines Werkzeug wird.

**Projektimpuls:** Finde drei Geräte für dieselbe musikalische Aufgabe. Vergleiche ihre Bedienelemente und skizziere die einfachste Version, die du selbst bauen möchtest.

**Zugang & Voraussetzungen:** Enthält kostenlose und kostenpflichtige Geräte mit unterschiedlichen Voraussetzungen. Angaben der Autor:innen prüfen; normalerweise wird Ableton Live mit Max for Live benötigt.

**Links**

- [Browse Device Library](<https://maxforlive.com/library/>) · project

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. maxforlive.com](<https://maxforlive.com/library/>)

---

<a id="patchstorage"></a>

## 33. Patchstorage

**Patchstorage community**

Directory / Sammlung · Sound & instruments / Klang & Instrumente · Beginner / Einstieg

**Environment / Umgebung:** Pure Data, VCV Rack, Bela, Other

**EN:** A community repository for patches across audio and visual platforms. Browse by the environment you actually use, compare different approaches to the same idea, and follow creators to more work.

**Project prompt:** Find two patches with the same goal, such as a drone or sequencer. Describe one design choice you would borrow from each before building your own version.

**Access & requirements:** A discovery directory, not one universal patch format. Host application, modules, hardware and licence vary by entry; use each creator's notes to check what is needed.

**DE:** Ein Community-Verzeichnis für Patches unterschiedlicher Audio- und Visual-Plattformen. Suche nach deiner Umgebung, vergleiche verschiedene Umsetzungen derselben Idee und entdecke weitere Arbeiten der Autor:innen.

**Projektimpuls:** Finde zwei Patches mit demselben Ziel, etwa einen Drone oder Sequencer. Beschreibe je eine Gestaltungsidee, die du übernehmen würdest, bevor du deine eigene Version baust.

**Zugang & Voraussetzungen:** Ein Verzeichnis zum Entdecken, kein einheitliches Patchformat. Anwendung, Module, Hardware und Lizenz variieren je Eintrag; prüfe die jeweiligen Hinweise der Autor:innen.

**Links**

- [Browse platforms & projects](<https://patchstorage.com/>) · project

**Sources / Quellen · checked / geprüft 2026-10-21**

- [1. patchstorage.com](<https://patchstorage.com/>)
