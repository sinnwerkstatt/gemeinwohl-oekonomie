Data.quickTest = {
    name : 'Schnelltest „Gemeinwohl-Ökonomie“',
    structure : {
        testTypes : [
            {
                id : 'calculateOneOfManyAnswers',
                individualAnswer : {
                    evaluationType : 'number',
                    evaluationValues : [
                        {
                            value : 0,
                            text : 'trifft nicht zu'
                        },
                        {
                            value : 1,
                            text : 'trifft in Ansätzen zu'
                        },
                        {
                            value : 2,
                            text : 'trifft mäßig zu'
                        },
                        {
                            value : 3,
                            text : 'trifft überwiegend zu'
                        },
                        {
                            value : 4,
                            text : 'trifft zu'
                        }
                    ]
                },
                participants : [
                    {
                        type : 'company',
                        name : 'Unternehmen',
                        text : 'Nein'
                    },
                    {
                        type : 'oneperson',
                        name : 'Einzelunternehmen',
                        text : 'Ja'
                    }
                ],
                result : {
                    operandOnIndividualResults : 'add',
                    finalCalculation : [
                        {
                            participantType : 'company',
                            multiplyBy : 1
                        },
                        {
                            participantType : 'oneperson',
                            multiplyBy : 1.33
                        }
                    ],
                    feedbacks : [
                        {
                            minValue: 0,
                            maxValue: 32,
                            content :
                                '<p>Ihr Unternehmen setzt sich mit gemeinwohlorientierten Aspekten auseinander und geht damit bereits über die gesetzlichen Mindeststandards hinaus. Allerdings gibt es noch ein sehr hohes Entwicklungspotenzial in Richtung Gemeinwohl und Nachhaltigkeit.</p>'+
                                '<p>Allerdings gibt es noch ein sehr hohes Entwicklungspotenzial in Richtung Gemeinwohl und Nachhaltigkeit.</p>'+
                                '<p>Der interne Gemeinwohl-Bericht kann helfen, den Status quo detaillierter zu ermitteln und darauf aufbauend Ziele und Maßnahmen für das nächste Jahr zu setzen.</p>'
                        },
                        {
                            minValue: 33,
                            maxValue: 62,
                            content :
                                '<p>Ihr Unternehmen hat bereits mehr als 25% der Gemeinwohl-Aspekte verwirklicht und befindet sich auf einem „guten“ Weg.</p>'+
                                '<p>Für einen besseren Überblick könnten Sie jetzt eine Einstiegsbilanz erstellen, die eine  detailliertere Auseinandersetzung ermöglicht und gleichzeitig weniger Zeit benötigt als eine vollständige Gemeinwohl-Bilanz.</p>'
                        },
                        {
                            minValue: 63,
                            maxValue: 94,
                            content :
                                '<p>Ihr Unternehmen ist schon sehr nachhaltigkeitsorientiert und legt gesteigerten Wert auf sozial- und umweltgerechtes Wirtschaften. Erstellen Sie wenn möglich einen Gemeinwohl-Bericht und treten Sie, falls noch nicht geschehen, in Kontakt mit gleichgesinnten Unternehmen, um gemeinsam effektiver zu lernen.</p>'+
                                '<p>Ein Gemeinwohl-Bericht ermöglicht eine detaillierte Aufschlüsselung ihres aktuellen Stands und hilft Ihnen, Bereiche mit Entwicklungspotenzial zu definieren sowie weitere Verbesserungen strategisch anzugehen.</p>'
                        },
                        {
                            minValue: 95,
                            maxValue: 126,
                            content :
                                '<p>Ihr Unternehmen ist bereits vorbildlich in Bezug auf viele Kriterien und Ziele der Gemeinwohlökonomie.</p>'+
                                '<p>Wahrscheinlich sind Sie schon ein GWÖ-Unternehmen oder seit Jahren branchenführend in der Nachhaltigkeits- oder Social-Business-Szene. Als VorreiterIn und PionierIn sind Sie Vorbild für ihre Mitunternehmen und Inspiration für andere ethisch interessierte Betriebe. Wir laden Sie herzlich ein, einen Gemeinwohl-Bericht zu verfassen und ihre Erfahrung weiterzugeben!</p>'
                        }
                    ]
                }
            }
        ]
    },
    data : {
        name : 'this is data name',
        tests : [
            {
                type : 'calculateOneOfManyAnswers',
                introduction : {
                    content :
                        '<p>Die Gemeinwohl-Ökonomie ist eine Vision für eine menschenwürdige und nachhaltige Wirtschafts- und Lebensweise. Die Wirtschaft soll nach denselben Werten gestaltet werden, die menschliche Beziehungen gelingen lassen und zudem bereits in den Verfassungen verankert sind. Das erste Ziel des Wirtschaftens ist nicht mehr Profitmaximierung, sondern die Mehrung des Gemeinwohls.</p>'+
                        '<p>Der Beitrag eines Unternehmens zum Gemeinwohl wird auf Basis der Gemeinwohl-Matrix definiert und messbar gemacht.</p>'+
                        '<p>Die Gemeinwohl-Bilanz beantwortet, wie ich als UnternehmerIn fünf Grundwerte (neben der Freiheit die häufigsten Verfassungswerte demokratischer Staaten): Menschenwürde, Solidarität, Ökologische Nachhaltigkeit, soziale Gerechtigkeit und Demokratie/Transparenz lebe - im Kontakt mit den wichtigsten Berührungsgruppen: LieferantInnen, GeldgeberInnen, MitarbeiterInnen, KundInnen/Mitunternehmen (heute: KonkurrentInnen) und dem gesellschaftlichen Umfeld.</p>'+
                        '<p>So entstehen an den Schnittstellen von Werten und Berührungsgruppen 17 Indikatoren, die den Beitrag eines Unternehmens zum Gemeinwohl messen. Zum Beispiel steht an der Schnittstelle „Menschenwürde“ und  „MitarbeiterInnen“ der Indikator C1 „Arbeitsplatzqualität“.</p>'+
                        '<p>Mit Hilfe eines Gemeinwohl-Berichtes gibt ein Unternehmen detailliert Auskunft über seine Leistungen und seinen Beitrag zum Gemeinwohl, anhand dieser 17 Indikatoren. Diese Auseinandersetzung braucht Vertiefung und Zeit, die viele Unternehmen aufgrund wirtschaftlicher Zwänge, knapper Ressourcen oder anderer Umstände nicht immer haben.</p>'+
                        '<p>Um einen „schnellen“ ersten Einblick zu bekommen, haben wir deshalb diesen Schnelltest von Thomas Haderlapp für die Matrix 4.1 modifiziert und neu gestaltet. Innerhalb einer halben Stunde gewinnen Sie einen Eindruck, worum es in der GWÖ geht und zudem ein grobes Erstergebnis, wie gemeinwohlorientiert Sie wirtschaften.</p>'+
                        '<p>Der darauf folgende Schritt könnte sein, eine „Einstiegsbilanz“ zu erstellen, das ist eine vereinfachte Form der Gemeinwohl-Bilanz. Unterhalb der fortlaufenden Fragen-Nummern haben wir in Blau die zugehörigen Indikatoren der GWÖ-Matrix angegeben. Zum Beispiel steht unter der Frage „1.“ der Indikator „A1“ (= Ethisches Beschaffungswesen). So können Sie bei Interesse jederzeit im Handbuch nachschlagen und dort Hintergrundinformationen zum jeweiligen Indikator nachlesen.</p>'+
                        '<p>Die Matrix, das dazugehörige Handbuch zur Bilanzerstellung und weitere hilfreiche Dokumente finden Sie hier: <a href="http://gemeinwohl-oekonomie.org/de/content/downloads">Link GWÖ-Dokumente</a>.</p>'+
                        '<p>Christian Rüther und das Matrix-Entwicklungsteam</p>'+
                        '<p><strong>Hinweis</strong>: Ihre Daten werden nicht über das Internet übertragen und dementsprechend nicht gespeichert!</p>'
                },
                questions : [
                    {
                        stakeholders : 'A',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethisches Beschaffungsmanagement',
                        text : 'Mein Unternehmen berücksichtigt bei allen wesentlichen zugekauften Produkten und Dienstleistungen (P/D) die besten regionalen, sozialen und ökologischen Alternativen und findet innovative Lösungen zur Vermeidung kritischer Stoffe, für die es keine höherwertige Alternative gibt.'
                    },
                    {
                        stakeholders : 'A',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethisches Beschaffungsmanagement',
                        text : 'Mein Unternehmen kooperiert aktiv mit LieferantInnen, um soziale und ökologische Aspekte besser umzusetzen. Es gibt ein nachgewiesenes Controlling, d.h. alle zugekauften P/D sind intern oder extern zertifiziert (z.B. mit den Labels „Bio“, „Fairtrade“, ...).'
                    },
                    {
                        stakeholders : 'A',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethisches Beschaffungsmanagement',
                        text : 'Mein Unternehmen zahlt faire Preise, pflegt langfristige Kooperationen mit den LieferantInnen und hat erste innovative Strukturen mit dem Ziel der Preisgerechtigkeit entwickelt.'
                    },
                    {
                        stakeholders : 'B',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethisches Finanzmanagement',
                        text : 'Mein Unternehmen arbeitet ausschließlich mit ethisch-ökologischen FinanzdienstleisterInnen (Bank, Vorsorgekasse) und veranlagt/finanziert sich dort zu 100%.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '1',
                        indicatorTitle : 'MitarbeiterInnen inklusive EigentümerInnen',
                        text : 'Mein Unternehmen bietet allen Menschen, die im Unternehmen tätig sind, in ihrer individuellen Verschiedenheit Strukturen und Entwicklungsmöglichkeiten, die ihren persönlichen und beruflichen Bedürfnissen gerecht werden.',
                        textEPU : 'Meine Arbeitssituation entspricht meinen Bedürfnissen und ermöglicht mir ein gutes Leben/Arbeiten.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '1',
                        indicatorTitle : 'MitarbeiterInnen inklusive EigentümerInnen',
                        text : 'Mein Unternehmen bietet höchste Arbeitsplatzsicherheit und eine gesundheitsfördernde Arbeitsgestaltung für alle Menschen, die im Unternehmen tätig sind. Verschiedene Arbeitszeit-Modelle und familienfreundliche Rahmenbedingungen ermöglichen es allen im Unternehmen Beschäftigten, ihre persönliche Work-Life-Balance zu leben.',
                        textEPU : 'Ich lebe eine für mich persönlich optimale Work-Life-Balance und gestalte meine Arbeit umfassend gesundheitssensibel.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '1',
                        indicatorTitle : 'MitarbeiterInnen inklusive EigentümerInnen',
                        text : 'Mein Unternehmen leistet einen aktiven Beitrag zur Gleichstellung und fördert Diversität im Hinblick auf Geschlecht, Herkunft, Alter, Behinderung, sexuelle Orientierung u. a. durch strukturelle und bewusstseinsbildende Maßnahmen. Es gibt gleiche Bezahlung für gleiche Tätigkeiten, Menschen sind in ihrer ganzen Vielfalt auf allen Hierarchieebenen des Unternehmens gleichwertig vertreten. Wir zahlen keine Ausgleichstaxe.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '2',
                        indicatorTitle : 'Gerechte Verteilung der Erwerbsarbeit',
                        text : 'Mein Unternehmen hat keine All-Inclusive- Verträge und baut Überstunden ab. Statt neuer Überstunden werden neue MitarbeiterInnen eingestellt. Wir leisten einen Beitrag zur Reduktion der Arbeitslosigkeit.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '3',
                        indicatorTitle : 'Förderung ökologischen Verhaltens der MitarbeiterInnen',
                        text : 'Mein Unternehmen fördert und fordert ein ökologisch nachhaltiges Verhalten der MitarbeiterInnen (z.B. eine biologische, regionale, fleischarme/fleischlose Ernährung, Nutzung umweltfreundlicher Verkehrsmittel etc.) durch umfassende Weiterbildungsmaßnahmen und finanzielle Förderungen.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '4',
                        indicatorTitle : 'Gerechte Verteilung des Einkommens',
                        text : 'In meinem Unternehmen gibt es eine maximale Einkommensspreizung von 1:4, d.h. der bezahlte Höchstlohn entspricht max. dem Vierfachen des bezahlten Niedrigstlohns.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '4',
                        indicatorTitle : 'Gerechte Verteilung des Einkommens',
                        text : 'Mein Unternehmen zahlt mindestens 1250 Euro monatlich netto für eine Vollzeitstelle.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '5',
                        indicatorTitle : 'Innerbetriebliche Demokratie und Transparenz',
                        text : 'Mein Unternehmen hat eine hohe interne Transparenz und alle MitarbeiterInnen können konsensual die Grundsatzentscheidungen in ihrem Team mitbestimmen.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '5',
                        indicatorTitle : 'Innerbetriebliche Demokratie und Transparenz',
                        text : 'In meinem Unternehmen werden die Führungskräfte von ihren MitarbeiterInnen eingestellt, regelmäßig evaluiert und können auch von ihnen entlassen werden.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '5',
                        indicatorTitle : 'Innerbetriebliche Demokratie und Transparenz',
                        text : 'Unser Unternehmen gehört allen MitarbeiterInnen oder einer unabhängigen Stiftung. Es gibt keine „Übermacht“ einiger weniger EigentümerInnen.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethische Kundenbeziehung',
                        text : 'Mein Unternehmen hat ein Gesamtkonzept für Ethik im Verkauf und sorgt für Preistransparenz, faire Preise und meidet KundInnen, die ethisch bedenklich handeln (insbesondere bei GeschäftskundInnen und anderen Unternehmen).'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethische Kundenbeziehung',
                        text : 'Mein Unternehmen bezieht die KundInnen in die Produktentwicklung und in relevante Entscheidungen mit ein.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '2',
                        indicatorTitle : 'Solidarität mit Mitunternehmen',
                        text : 'Mein Unternehmen pflegt eine Open-Source-Politik und gibt das eigene Know-How, Kalkulationen und Lieferquellen an kooperative Mitunternehmen weiter. Gemeinsam wird an einem unabhängigen Produktinformationssystem gearbeitet, so dass die KundInnen optimal informiert sind und angebotene Leistungen gut vergleichen können.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '2',
                        indicatorTitle : 'Solidarität mit Mitunternehmen',
                        text : 'Mein Unternehmen gibt Aufträge an Mitunternehmen weiter, wenn es sie nicht selbst bedienen kann, unterstützt Mitunternehmen mit eigenen Arbeitskräften bei Engpässen und stellt kooperativen Mitunternehmen Fremdkapital zu einem angemessenen Zinssatz zur Verfügung.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '3',
                        indicatorTitle : 'Ökologische Gestaltung der Produkte und Dienstleistungen',
                        text : 'Die P/D meines Unternehmens sind im Vergleich zu den Mitunternehmen ökologisch branchenführend bzw. auf höchstem Standard z.B. Energie-Effizienz oder Cradle-to-cradle. Wir sind VorreiterInnen bei der ökologischen Qualität und der Minimierung des ökologischen Fußabdrucks der P/D.',
                        weight : 2
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '3',
                        indicatorTitle : 'Ökologische Gestaltung der Produkte und Dienstleistungen',
                        text : 'Mein Unternehmen fördert ökologisch nachhaltiges Verhalten unserer KundInnen. Preisvorteile und Anreizsysteme für Reparatur, Wiederverwendung und gemeinschaftliche Nutzung sind wesentliche Bestandteile unseres Geschäftsmodells.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '4',
                        indicatorTitle : 'Soziale Gestaltung der Produkte und Dienstleistungen',
                        text : 'Mein Unternehmen setzt sich aktiv für den Zugang „benachteiligter“ KundInnengruppen (GeringverdienerInnen, MigrantInnen, ältere Menschen, Behinderte) zu unseren P/D ein.',
                        weight : 2
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '5',
                        indicatorTitle : 'Erhöhung der sozialen und ökologischen Branchenstandards',
                        text : 'Mein Unternehmen arbeitet mit den Mitunternehmen aktiv an höheren sozialen und ökologischen Branchenstandards und betreibt hier Lobbying im Interesse des Gemeinwohls.'
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '1',
                        indicatorTitle : 'Sinn und Gesellschaftliche Wirkung der Produkte / Dienstleistungen',
                        text : 'Mein Unternehmen stellt P/D her, die einen positiven Nutzen für die gesamte Gesellschaft (nicht primär für einzelne KundInnen) haben. 75% bis 100% der P/D decken den Grundbedarf, dienen der menschlichen Entwicklung oder lösen wesentliche gesellschaftliche Probleme (Social Business).',
                        weight : 2
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '2',
                        indicatorTitle : 'Beitrag zum Gemeinwesen',
                        text : 'Mein Unternehmen engagiert sich kraftvoll für die Gesellschaft und fördert solches Engagement, das über ein reines Eigeninteresse hinausgeht (Richtwert >2,5% des Umsatzes). Es existiert eine umfassende Strategie und ein Management für dieses Engagement.'
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '3',
                        indicatorTitle : 'Reduktion ökologischer Auswirkungen',
                        text : 'Mein Unternehmen kennt seinen ökologischen Fußabdruck und ist im Branchendurchschnitt vorbildlich. Unsere negativen ökologischen Auswirkungen sind sehr gering.',
                        weight : 2
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '4',
                        indicatorTitle : 'Gemeinwohlorientierte Gewinn-Verteilung',
                        text : 'Unsere Gewinne werden möglichst nicht an Externe ausgeschüttet, sondern zwischen ArbeitnehmerInnen und KapitalgeberInnen gerecht verteilt oder zur Erhöhung der Eigenkapitalquote und für gemeinwohlfördernde Investitionen eingesetzt.',
                        excludedParticipants : ['oneperson'],
                        weight : 2
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '5',
                        indicatorTitle : 'Gesellschaftliche Transparenz und Mitbestimmung',
                        text : 'Mein Unternehmen publiziert einen Gemeinwohlbericht oder einen umfassenden Nachhaltigkeitsbericht (z. B. Global Reporting Initiative GRI). Darüber hinaus beziehen wir die gesellschaftlichen Berührungsgruppen bei wesentlichen Entscheidungen mit ein.'
                    }
                ]
            }
        ]
    }
};
