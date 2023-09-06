const texts = [
  {
    title: "Wir webdesignen für Sie…",
    desc: "Sie möchten einen Internetauftritt, der Ihre Besucher von der Qualität Ihres Unternehmens überzeugt? Sie suchen eine Agentur für professionelles Webdesign und gekonnte Web-Entwicklung in Wien? Dann sind Sie hier genau richtig. Wir fertigen Ihren Webauftritt von Hand und setzen Sie mit Ihrer Webseite in Ihrem umkämpften Markt auf die Überholspur.",
  },
  {
    title: "Als Agentur für professionelles Webdesign…",
    desc: "Wir designen und entwickeln als wiener Agentur für Webdesign individuell angepasste, professionelle und überzeugende Webseiten und Online-Shops, die hohe moderne Ansprüche an überzeugendes Design, nutzerfreundliche Logik und einwandfreie Performance vereinen. So können unsere Kunden in der digitalen Welt nachhaltig wachsen.",
  },
  {
    title: "High-Performance Webdesign für Unternehmen in Wien…",
    desc: "Wir können eine langjährige Erfahrung in der Konzeption und Entwicklung von Webseiten und Online-Shops vorweisen. Zu unseren Kunden zählen Unternehmen von Neustartern und EPUs über etablierte Unternehmen bis hin zu Marktführern und globalen Marken. Wir bieten Webdesign und Website-Entwicklung speziell für Unternehmen mit Sitz in Wien an, da durch die räumliche Nähe persönliche Termine leicht vereinbart werden können.",
  },
  {
    title:
      "Optional komplett individuelles Webdesign von ausgezeichneten Designern…",
    desc: "Ihre Anforderungen werden von unserem Gründer und Webdesigner Arian Simon und seinem Team mit einem Blick für Details verlässlich, flexibel und individuell entwickelt. In Zusammenarbeit mit den Partnern für Corporate Design und SEO (Suchmaschinenoptimierung) gestalten und entwickeln wir Ihren Internetauftritt rundum erfolgreich.",
  },
  {
    title: "Natürlich responsive Webdesign…",
    desc: "Nach dem Motto „Mobile First“ und mit dem Anspruch hoher Nutzerfreundlichkeit arbeiten wir bei allen unseren Projekten mit Responsive Webdesign oder entwickeln verschiedenen Versionen für unterschiedliche Endgeräte.",
  },
  {
    title: "Im Zusammenspiel mit Ihrem gesamten Online Marketing…",
    desc: "Der Erfolg unserer Kunden ist uns ein großes Anliegen. Daher arbeiten Spezialisten für Design, Technik, Content und Suchmaschinenoptimierung (SEO) aus Wien zusammen, um Ihr Projekt erfolgreich umzusetzen und für Ihren Unternehmenserfolg zu optimieren.",
  },
  {
    title: "Exklusives Grafikdesign von kreativen Designern…",
    desc: "Webdesign und Grafik gehen Hand in Hand. Dazu arbeiten Experten aus beiden Bereichen in engem Austausch zusammen, um Ihre Homepage sowie die Unterseiten überzeugend und detailreich zu gestalten.",
  },
  {
    title: "Ein routinierter Ablauf für Ihre Webprojekte…",
    desc: "In einem Erstgespräch arbeiten wir Ihre Ziele heraus und machen Vorschläge für die Umsetzung und Entwicklung. Im Anschluss an das Erstgespräch erarbeiten wir ein Konzept und passen dieses in enger Zusammenarbeit mit Ihnen flexibel an Ihre Wünsche an. Sobald die Website fertig entwickelt ist und Ihren Wünschen entspricht, wird sie sowohl technisch als auch hinsichtlich SEO-Kriterien optimiert, bevor Ihr Projekt online geht. Auch nach dem Online-Gang Ihrer Website können Sie selbstverständlich weiterhin auf unsere Betreuung für Folgeentwicklungen und Erweiterungen zählen.",
  },
  {
    title:
      "Programmierungen für Ihre WordPress-CMS-Webseite von WordPress-Experten…",
    desc: "Wir sind Spezialisten für das Content Management System (CMS) WordPress und müssen daher bei der Webentwicklung nicht auf zugekaufte Templates/Themes oder Plugins vertrauen, bei denen Sie Kompromisse eingehen müssten. Sie bekommen bei uns entweder Empfehlungen für Themes und Plugins von Drittanbietern, die über jeden Zweifel erhaben sind, oder wir entwickeln Ihre Lösungen selbst. Das heißt, sollte es keine empfehlenswerten Themes oder Plugins für Ihre Anforderungen geben, können wir alle Aspekte Ihres Webauftritts individuell von Expertenhand erstellen. Wussten Sie folgendes? Der Vorteil von Content Management Systemen (CMS) ist, dass Sie nach einer Einschulung auf Wunsch selbstständig Änderungen an Ihrer CMS-Webseite vornehmen können. Dies ist besonders für Neugründer und KMU von großem Vorteil, da sich dadurch der finanzielle Aufwand für die weiterführende Betreuung, Webdesign-Arbeiten und Entwicklung minimiert.",
  },
  {
    title:
      "Kalkulierbare Investitionshöhen für Ihre Webseiten und Online Shops…",
    desc: "Die Mehrzahl unserer Kunden investiert zwischen € 4.000 und € 6.000 (exkl. USt.) für das Design und die Entwicklung des eigenen Internetauftritts. Da wir wissen, dass eine solche Investition gut überlegt sein muss, vor allem bei Neugründern und KMU sind die finanziellen Ressourcen oft knapp, teilen wir unser Webdesign-Angebot in 3 Stufen:",
  },
  { title: "", desc: "" },
];

export default function Text() {
  return (
    <div className="mx-auto mt-32 max-w-full px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-full lg:mx-0">
        {texts.map((text) => (
          <div className="mb-4" key={text.title}>
            <p className="sm:text-2xl text-2xl font-bold  uppercase ">
              {text.title}
            </p>
            <p className="leading-relaxed text-gray-900">{text.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
