export const projectDescriptions = [
    {
        title: 'Intrinsische Kalibrierung eines rotierenden Laserscanners',
        paragraphs:
            [
                {
                    title: "Auftraggeber: ",
                    text: "DFG"
                },
                {
                    title: "Projekt: ",
                    text: "Mapping on Demand"
                },
                {
                    title: "Projektbeschreibung: ",
                    text: "Im Projekt Mapping on Demand wurde unter anderem eine 3D-Karte der Umgebung erstellt. Diese Karte sollte einem autonomen Copter dazu dienen, sich in seiner Umgebung zurecht zu finden und Hindernissen auszuweichen.\n" +
                        "  Zur Erstellung der Karte wurde ein 2D-Laserscanner auf dem verwendeten Copter montiert. Ein 2D-Laserscanner misst die Distanzen zu den Objekten in seiner Umgebung. Die Höhe des Messbereichs ist dabei sehr schmal. Ähnlich einem Dokumentenscanner, der über ein Dokument gezogen wird, wird der 2D-Laserscanner gedreht, um einen größeren Bereich seiner Umgebung zu erfassen.\n" +
                        "  Um die 2D-Scans zu einem 3D-Scan zu verbinden, benötigt man ein präzises Modell dieser Drehbewegung. Eine Möglichkeit zur Bestimmung dieses Modells besteht darin solange verschiedene Parameter händisch einzustellen bis die resultierenden 3D-Scans zufriedenstellend aussehen. Die Entscheidung wird dabei per Augenmaß getroffen.\n"
                },
                {
                    title: "Meine Aufgabe",
                    text: " bestand darin eine möglichst automatische Methode zu entwerfen die Parameter des Modells einzustellen. Meine Lösung bestand daraus die Parameter durch ein Optimierungsverfahren in kleinen Schritten verändern zu lassen. Nach jedem Schritt wird die \"Schärfe\" der 3D-Scans rechnerisch bestimmt. Dadurch kann das Optimierungs\u00ADverfahren die Parameter nach und nach in die Richtung verändern, die die Qualität der Scans verbessert.\n" +
                        "  Zur Messung der Qualität habe ich sowohl ein bestehendes Verfahren verwendet als auch ein Neues entwickelt. Beide Verfahren arbeiten unter der Annahme, das ein Scan präziser ist, wenn sich Messpunkten, die nahe beieinander liegen, auf einer Ebene befinden. Diese Bedingung ist erfüllt, wenn der Scanner beispielsweise die Wände oder den Boden eines Raums misst und die Parameter des Modells gut eingestellt sind. Sind die Parameter nicht optimal, ergeben sich im Scan gebogene Wände und ein erhöhtes Rauschen der Messpunkte.\n" +
                        "  Nach dem Einstellen der Parameter konnten die Scans dafür verwendet werden eine Karte der Umgebung zu erstellen."
                },
                {
                    title: "Techstack: ",
                    text: "C++, ROS"
                }
            ],
        links:
            [
                {
                    title: "Projektseite",
                    link: "https://gepris.dfg.de/gepris/projekt/166047863?context=projekt&task=showDetail&id=166047863&"
                }
            ]
    },
    {
        title: 'Inbetriebnahme einer Motion Capture Anlage und Softwareupdate',
        paragraphs:
            [
                {
                    title: "Auftraggeber: ",
                    text: "EU"
                },
                {
                    title: "Projekt: ",
                    text: "ChimneySpector & European Robotics Challenge 3"
                },
                {
                    title: "Projektbeschreibung: ",
                    text: "Eine Motion Capture Anlage besteht üblicherweise aus mehreren Kameras mit einer hohen Bildrate. Die Kameras werden so ausgerichtet, dass sie einen Bereich aus mehreren Richtungen aufnehmen. Zusätzlich wird dieser Bereich aus den Perspektiven der Kameras mit Infrarotlicht ausgeleuchtet.\n " +
                        "  Befindet sich ein spezieller Marker, der das Infrarotlicht besonders gut reflektiert, in diesem Feld, so lässt sich seine 3D-Position im Raum mit der Anlange präzisere bestimmen. Montiert man mehrere Marker - beispielsweise an einen Copter - so lässt sich dessen 3D-Pose im Raum präzise ermitteln.\n " +
                        "  Eine solche Anlage habe ich benötigt, um verschiedene Verfahren zur Lokalisierung von Coptern zu evaluieren. Diese Verfahren nutzten nur die Sensoren des Copters und waren weniger präzise in der Bestimmung der Pose. Im Gegensatz zu einer Motion Capture Anlage, die an einen Ort gebunden ist, können diese Verfahren allerdings überall eingesetzt werden."
                },
                {
                    title: "Meine Aufgabe: ",
                    text: "Neben der Inbetriebnahme der Anlage habe ich die Software angepasst, die ein wenig in die Jahre gekommen war. Die Anlage sollte ihre gemessenen Posen in einem Format ausgeben, das den neueren Standards entsprach. Dieses Update war nötig um möglichst ähnliche Testbedingungen zu einem Wettbewerb zu schaffen, der in einer ähnlichen Anlage stattfinden sollte."
                },
                {
                    title: "Techstack: ",
                    text: "C#"
                }
            ]
    },
    {
        title: 'Evaluierung von Verfahren zur simultanen Lokalisierung und Kartierung von 3D-Lasermessungen',
        paragraphs:
            [
                {
                    title: "Auftraggeber: ",
                    text: "DFG"
                },
                {
                    title: "Projekt: ",
                    text: "Mapping on Demand"
                },
                {
                    title: "Projektbeschreibung: ",
                    text: "In diesem Projekt sollten Verfahren benutzt werden, die 3D-Laserscans der Umgebung zu einer größeren Karte verbinden. Diese Verfahren funktionieren ähnlich wie die, die mehrere Fotos so verschieben und transformieren, dass daraus eine Panoramaaufnahme entsteht.\n" +
                        "  Hat man eine Karte aus mehreren 3D-Laserscans erstellt, kann man mit einem neuen Scan herausfinden wo sich der Scanner in dieser Karte befindet. Dafür transformiert man den neuen Scan wieder solange bis dieser möglichst gut mit der Karte überlappt. Wiederholt man diesen Prozess mit mehreren aufeinanderfolgenden Aufnahmen, lässt sich die Bewegung des Scanner und damit des Roboter auf dem dieser montiert ist nachvollziehen."
                },
                {
                    title: "Meine Aufgabe",
                    text: " bestand darin diese Verfahren zu vergleichen und herauszufinden welches sich für das Projekt und den verwendeten Sensor am besten eignet.\n" +
                        "  Hier habe ich den Laserscanner zunächst wie in Projekt 1 beschrieben kalibriert. Anschließend haben wir Laserscans innerhalb der Motion Capture Anlage aus Projekt 2 aufgenommen. Der Sensor war dafür an einem Copter montiert, der während der Aufnahme durch den Raum gesteuert wurde. Die Motion Capture Anlage hat für jeden Laserscan die präzise Pose des Sensors bestimmt. Ziel der getesteten Verfahren sollte es sein, ausschließlich die Laserscans zu benutzen, um möglichst ähnliche Posen des Sensors zu bestimmen.\n" +
                        "  Um die Verfahren in einem weniger strukturierten Setting bewerten zu können, habe ich zusätzlich Aufnahmen eines Fluges außerhalb eines Gebäude zur Evaluation benutzt. Hier konnte keine Motion Capture Anlage eingesetzt werden, um optimale Posen zu bestimmen. Stattdessen ließ ich zunächst jedes Verfahren eine Karte aus den ausgenommenen Laserscans erstellen. Anschließend bewertete ich jede dieser Karten mit den Methoden zur Qualitätsmessung von Laserscans aus Projekt 1.\n" +
                        "  Die Ergebnisse der Evaluation sind daraufhin in meine Bachelorarbeit und eine wissenschaftliche Publikation eingeflossen."
                },
                {
                    title: "Techstack: ",
                    text: "C++, Python, ROS, LaTex, Qt Creator"
                }
            ],
        links:
            [
                {
                    title: "Projektseite",
                    link: "https://gepris.dfg.de/gepris/projekt/166047863?context=projekt&task=showDetail&id=166047863&"
                },
                {
                    title: "Bachelorarbeit",
                    link: "https://www.ais.uni-bonn.de/theses/Jan_Razlaw_Bachelorarbeit_11_2014.pdf"
                },
                {
                    title: "Paper",
                    link: "https://www.researchgate.net/profile/Sven-Behnke-2/publication/280000286_Evaluation_of_Registration_Methods_for_Sparse_3D_Laser_Scans/links/55a2aa6608aea815dffd249d/Evaluation-of-Registration-Methods-for-Sparse-3D-Laser-Scans.pdf"
                }
            ]
    },
    {
        title: 'Extrinsische Kalibrierung von Kameras zu einem Laserscanner',
        paragraphs:
            [
                {
                    title: "Auftraggeber: ",
                    text: "BMWi"
                },
                {
                    title: "Projekt: ",
                    text: "InventAIRy"
                },
                {
                    title: "Projektbeschreibung: ",
                    text: "Im Projekt InvertAIRy sollte ein Copter entwickelt werden, der in einem hohen Lager eine Inventur autonom durchführen kann. Für diese Aufgabe wurde der Copter mit mehreren Kameras und einen 3D-Laserscanner ausgerüstet.\n" +
                        "  Im Allgemeinen messen Laserscanner die Distanz zu ihrer Umgebung. 3D-Scanner messen in viele verschiedene Richtungen, um ein vollständigeres 3D \"Bild\" der Umgebung zu erhalten. Zusätzlich zur Distanz lässt sich die Intensität des zurückkehrenden Laserstrahls messen. Diese kann vage mit einem schwarz-weiß Foto verglichen werden.\n" +
                        "  Kameras auf der anderen Seite messen die Farbwerte der Umgebung aber erfassen keine Distanz. Weiß man wie Kamera und Laserscanner zueinander im Raum positioniert sind, können die Farbwerte der Kamerabilds in den Laserscan projiziert werden. Genauso lässt sich aber auch zu einem Objekt im Kamerabild, eine Distanz vom Laserscanner messen."
                },
                {
                    title: "Meine Aufgabe",
                    text: "bestand darin ein Verfahren zu entwickeln mit dem man herausfinden kann wie Kamera und Laserscanner zueinander im Raum stehen - eine extrinsische Kalibrierung. Dieses Verfahren sollte möglichst wenig Interaktionen durch einen Nutzer erfordern.\n" +
                        "  Mein Lösungsansatz war es ein Optimierungsverfahren systematisch eine 3D-Transformation zwischen Kamera und Laser suchen zu lassen, sodass die Intensitätswerte des Laserscanners möglichst gut mit einem schwarz-weiß Bild aus der Kamera überlappen.\n" +
                        "  Die Schwierigkeit bestand darin, dass dunkle Werte im Kamerabild nicht unbedingt niedrigen Werten in den Intensitäten entsprechen. Zusätzlich hängt die gemessene Intensität vom Winkel ab mit dem ein Laserstrahl auf ein Objekt trifft. So haben runde Objekte an der dem Laser zugewandten Seite eine höhere Intensität als an den anderen Seiten. In Kamerabildern hängt die Helligkeit jedoch stark von den vorhandenen Lichtquellen im Raum ab.\n" +
                        "  Als Lösung habe ich die Kullback-Leibler-Divergenz eingesetzt, welche aussagt wie gut Farbwerte konsistent zueinander passen. Sie ist beispielsweise niedrig, wenn helle Bereiche im Foto immer über dunklen Bereichen im Scan liegen, aber höher wenn helle Bereiche Mal über hellen und Mal über dunklen Bereichen liegen.\n" +
                        "  Mit der Hilfe dieses Wertes konnte das Optimierungsverfahren die 3D-Transformation schrittweise in die Richtung verändern, in der die Daten am besten zueinander passen."
                },
                {
                    title: "Techstack: ",
                    text: "C++, ROS, Point Cloud Library, OpenCV"
                }
            ],
        links:
            [
                {
                    title: "Projektseite",
                    link: "https://www.bmwk.de/Redaktion/DE/Publikationen/Digitale-Welt/autonomik-fuer-industrie-4-0.pdf?__blob=publicationFile&v=9#%5B%7B%22num%22%3A120%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C42%2C770%2Cnull%5D"
                }
            ]
    },
    {
        title: 'Auswahl und Visualisierung relevanter Lasermessungen bei geringen Datenraten',
        paragraphs:
            [
                {
                    title: "Projekt: ",
                    text: "DARPA Robotics Challenge 2015"
                },
                {
                    title: "Projektbeschreibung: ",
                    text: "Die DARPA Robotics Challenge war eine Antwort auf die Fukushima-Katastrophe, bei der ein Kernkraftwerk durch einen Tsunami schwer beschädigt wurde. Durch ein geöffnetes Ventil traten dabei giftige Substanzen in die Umgebung aus. Menschen war es nicht möglich unbeschadet in die Umgebung des Ventils vorzudringen. Auf der anderen Seite gab es zu dem Zeitpunkt keinen Roboter der fähig genug war diese Aufgabe zu übernehmen.\n" +
                        "  In der Challenge wurde den teilnehmenden Teams die Aufgabe gestellt einen solchen Roboter zu entwickeln. Zusätzlich zum Schließen eines Ventils sollte dieser Roboter weitere Aufgaben erfüllen, die ihm in einem ähnlichen Szenario begegnen könnten. Hierzu gehörte das Öffnen einer Tür, das Passieren von unwegsamen Gelände, die Benutzung von Werkzeugen und das Erklimmen von Treppen. Eine zusätzliche Schwierigkeit bestand in einer sehr eingeschränkten Datenrate bei der Kommunikation zwischen der Steuerzentrale und dem Roboter."
                },
                {
                    title: "Meine Aufgabe,",
                    text: "als Neuling im Team NimbRo, bestand darin zu helfen wo auch immer Hilfe gebraucht wurde. Eine der Aufgaben war es möglichst hilfreiche Informationen aus den 3D-Laserscans des Roboters zu kreieren. Vollständige Scans konnten aufgrund der geringen Datenrate nicht übertragen werden. Die Verarbeitung musste dabei möglichst effizient auf der limitierten Hardware des Roboters geschehen, die zusätzlich mit anderen Aufgaben belastet war.\n" +
                        "  Die Idee war es mittels effizienten Kantenfiltern aus der 2D-Computergraphik Messpunkte auf ebenen Flächen heraus zu filtern. So konnte der Steuerende weiterhin erkennen wo die Kanten eines Türgriffs, eines Ventilrads oder eines Werkzeugs sind, um nach diesen zu greifen."
                },
                {
                    title: "Techstack: ",
                    text: "C++, ROS, Point Cloud Library"
                }
            ],
        links:
            [
                {
                    title: "Webseite des Wettbewerbs mit finalem Ranking - Seite lädt lange",
                    link: "http://web.archive.org/web/20150706191042/http://www.theroboticschallenge.org/"
                },
                {
                    title: "Video über den Wettbewerb mit Fokus auf das zweitplatzierte Team",
                    link: "https://www.youtube.com/watch?v=8P9geWwi9e0"
                },
                {
                    title: "Video unseres Durchgangs",
                    link: "https://www.youtube.com/watch?v=NJHSFelPsGc"
                },
                {
                    title: "Paper",
                    link: "https://scholar.google.com/citations?view_op=view_citation&hl=de&user=bcx5-kkAAAAJ&citation_for_view=bcx5-kkAAAAJ:9yKSN-GCB0IC"
                }
            ]
    },
    {
        title: 'Fusionierung von Kamerabildern und Lasermessungen zur Ansicht in einer HTC Vive VR-Brille',
        paragraphs:
            [
                {
                    title: "Auftraggeber: ",
                    text: "EU"
                },
                {
                    title: "Projekt: ",
                    text: "CENTAURO"
                },
                {
                    title: "Projektbeschreibung: ",
                    text: "Im Centauro-Projekt sollte ein Roboter entwickelt werden, der auf vier Beinen steht und einen menschenähnlichen Oberkörper mit zwei Armen besitzt. Dieser Roboter sollte in Katastrophenszenarien eingesetzt werden, in denen es zu gefährlich für Menschen ist. Zu seinen Aufgaben sollte es zählen Menschen akute Ersthilfe zu leisten und die Bedingungen so weit zu verbessern, dass die Umgebung ungefährlich für Menschen wird. Gesteuert werden sollte der Roboter indem er die Bewegungen eines Menschen in einem Exoskelett nachahmt. Da der Mensch keinen Sichtkontakt zum Roboter hat, sollte er durch eine VR-Brille sehen was der Roboter sieht."
                },
                {
                    title: "Meine Aufgabe ",
                    text: "bestand darin eine Ansicht in der VR-Brille bereit zu stellen. Zunächst habe ich, wie in Projekt 2 entwickelt, den Laserscanner zu den Kameras kalibriert. Das diente dazu den 3D-Scan der Umgebung, um die Farbwerte der Kameras zu ergänzen. So konnte sich der Steuerende durch Bewegungen mit der VR Brille in der Umgebung des Roboters umsehen.\n" +
                        "  Dabei musste ich die Ansicht möglichst effizient aktualisieren, damit der Steuerende schnell auf Veränderungen der Umwelt reagieren konnte. Hierbei waren die großen Datenmengen, die benutzte Hardware und die parallel laufende Visualisierung in der Brille die limitierenden Faktoren.\n" +
                        "  Ich habe aufgrund dieser Einschränkungen zunächst mit einem einfachen Ansatz begonnen, der alte Messpunkte löscht sobald sich neue Messungen hinter diesen befinden. Diese Situation tritt vor allem dann auf, wenn sich Objekte bewegen. Aufgrund der hohen Anzahl an Messpunkten stellte sich auch dieser einfache Ansatz als rechenintensiv heraus. Im folgenden Projekt habe ich daraufhin einen anderen Ansatz gewählt, der es zusätzlich erlaubte die bewegten Objekte zu modellieren. Diese Modelle erlauben es autonomen Robotern ihre Aktionen besser planen zu können."
                },
                {
                    title: "Techstack: ",
                    text: "C++, ROS, Point Cloud Library, OpenCV"
                }
            ],
        links:
            [
                {
                    title: "Projektseite",
                    link: "https://www.centauro-project.eu/"
                }
            ]
    },
    {
        title: 'Detektion und Tracking von Objekten in Lasermessungen',
        paragraphs:
            [
                {
                    title: "Projekt: ",
                    text: "Mohamed Bin Zayed International Robotics Challenge 2017"
                },
                {
                    title: "Projektbeschreibung: ",
                    text: "In diesem Wettbewerb sollten insgesamt drei Aufgaben gelöst werden. Eine der Aufgaben bestand darin einen Flugroboter zu entwickeln, der autonom unterschiedliche Objekte auf einem weiten, ebenen Feld findet und in einen Zielbereich bringt. Die Objekte konnten dabei sowohl statisch als auch dynamisch sein und hatten eine Höhe von etwa 20-30 cm.\n" +
                        "  Für die Suche der Objekte haben wir zwei Ansätze verfolgt. Der Erste bestand daraus die Objekte mittels einer Kamera zu finden, da sich diese farblich gut von der Umgebung unterscheiden sollten. Die Nachteile dieser Methode waren der eingeschränkte Sichtbereich von Kameras und die Abhängigkeit von der Umgebungsbeleuchtung.\n" +
                        "  Der zweite Ansatz bestand daraus einen Laserscanner einzusetzen und die Objekte daran zu erkennen, dass diese aus dem Boden herausragen. Der Laserscanner hat dabei die Vorteile eines 360 Grad Blickfelds und der Unabhängigkeit von der Beleuchtung. Ein Nachteil war jedoch, dass die Messpunkte des eingesetzten Laserscanners bei hohen Distanzen weit auseinander liegen und man die Objekte so übersehen kann."
                },
                {
                    title: "Eine meiner Aufgaben",
                    text: " bestand darin eine Methode zu entwickeln die Objekte auf hohe Distanzen in den Laserscans zu finden und die Positionen der dynamischen Objekte zu verfolgen. So sollte es dem Roboter ermöglicht werden die Positionen nach und nach anzufliegen und die Objekte einzusammeln.\n" +
                        "  Meine Lösung bestand darin eine Kombination von Filtern aus der Computer Vision auf die Lasermessungen anzuwenden, um Objekte einer vorgegeben Größe von ihrem Hintergrund zu trennen. Die Positionen der erkannten Objekte habe ich anschließend mit einem Kalman-Filter pro Objekt verfolgt. Dieser Ansatz ist auch bei einer hohen Anzahl von Objekten effizient und lässt dem Roboters möglichst viele Rechen\u00ADkapazitäten für weitere zwingend nötige Aufgaben.\n" +
                        "  Während des eigentlichen Wettbewerbs wurde meine Methode bei dieser Aufgabe nicht angewendet, da eine Gruppe kleinerer Flugroboter ohne Laserscanner zum Einsatz kam.\n" +
                        "  Aufgrund der Flexibilität meiner Methode konnte diese jedoch bei einer anderen Aufgabe im Wettbewerb eingesetzt werden. Die zweite Aufgabe bestand daraus den Roboter einen etwa 2m hohen Block in einer weitläufigen Arena finden zu lassen. An diesem Block war eine Reihe unterschiedlicher Werkzeuge befestigt. Aus diesen sollte das Richtige ausgewählt werden, um damit einen Ventil zu schließen.\n" +
                        "  Hier wurde der Laserscanner einsetzt, um schnell ein umfassendes Bild der Arena zu erhalten.  Ich habe die Parameter meiner Methode angepasst, um den großen Block statt der kleinen Objekte zu finden. Dadurch konnte das Ziel direkt von der Startlinie ausfindig gemacht werden und eine lange Suche entfiel."
                },
                {
                    title: "Techstack: ",
                    text: "C++, ROS, Point Cloud Library"
                }
            ],
        links:
            [
                {
                    title: "Wettbewerb Webseite mit finalem Ranking - Seite lädt lange",
                    link: "http://web.archive.org/web/20180225193543/http://www.mbzirc.com:80/scoreboard/challenge4"
                },
                {
                    title: "Video - Beschreibung der Aufgaben",
                    link: "https://www.youtube.com/watch?v=oVz2Sp3W468"
                },
                {
                    title: "Video - Unser Durchgangs der zweiten Aufgabe",
                    link: "https://www.youtube.com/watch?v=TMiTC9wa5S8"
                },
                {
                    title: "Paper",
                    link: "https://scholar.google.com/citations?view_op=view_citation&hl=de&user=bcx5-kkAAAAJ&sortby=pubdate&citation_for_view=bcx5-kkAAAAJ:IjCSPb-OGe4C"
                }
            ]
    },
    {
        title: 'Tracking von Objekten und Posenschätzung eines Zielmarkers',
        paragraphs:
            [
                {
                    title: "Projekt: ",
                    text: "Mohamed Bin Zayed International Robotics Challenge 2020"
                },
                {
                    title: "Projektbeschreibung: ",
                    text: "Dieser Wettbewerb war unterteilt in drei Aufgaben - Feuer löschen, Mauern bauen und Luftballons zerplatzen. Zur Lösung sollten dabei autonome Robotern eingesetzt werden."
                },
                {
                    title: "Eine meiner Aufgaben",
                    text: " war es den Roboter Bob erkennen zu lassen wo er eine Mauer bauen soll. Die Mauer sollte dabei auf einem Marker entstehen, der zufällig in der Arena platziert wurde. Dieser Marker war gelb und magenta kariert und hatte die Form eines liegenden L.\n" +
                        "  Meine Lösung bestand darin in den Kamerabildern zunächst nach diesen und ähnlichen Farben suchen zu lassen. Traten die Farben dabei in der Nähe voneinander auf, sollte der Roboter mittels eines Eckenfilters kontrollieren, ob es sich dabei um ein Karomuster handelte. Traf auch das zu, wurde dieser Bereich des 2D-Kamerabilds ausgewählt und in 3D auf den Boden projiziert. Hierfür habe ich den Roboter in den Daten eines 3D-Laserscanners eine Bodenebene ermitteln lassen.\n" +
                        "  Jedes Mal, wenn ein Stück des Markers im Kamerabild zu sehen war, wurde die Projektion gespeichert und mit den anderen Projektionen zu einem größeren Bild zusammengesetzt. Der Marker wurde dort vermutet wo die meisten Projektionen zusammenkamen.\n" +
                        "  Da der Roboter zum Bauen der Mauer eine feste Bewegungsabfolge durchführen sollte, musste er, zusätzlich zur Position, die Orientierung des Markers kennen. Zu diesem Zweck habe ich ein Verfahren entwickelt, das beide Schenkel des L-förmigen Markers durch eine Linie approximiert. Dort wo die Distanz der Linien am geringsten ist, muss sich die Ecke befinden.\n" +
                        "  Mit diesen Informationen war es dem Roboter möglich die Mauer zielgerichtet zu platzieren. Zusätzlich konnte mein Tracker aus dem vorherigen Wettbewerb für eine andere Aufgabe erfolgreich eingesetzt werden."
                },
                {
                    title: "Techstack: ",
                    text: "C++, ROS, Point Cloud Library, OpenCV"
                }
            ],
        links:
            [
                {
                    title: "Webseite des Wettbewerbs mit finalem Ranking - Seite lädt lange",
                    link: "http://web.archive.org/web/20200806184940/https://www.mbzirc.com/news/us5-million-mbzirc-2020-winners-awarded-29"
                },
                {
                    title: "Video - Beschreibung der Aufgaben",
                    link: "https://www.youtube.com/watch?v=u106Vy-XJ7c"
                },
                {
                    title: "Video - Zusammenschnitt unserer Durchgänge",
                    link: "https://www.youtube.com/watch?v=E_VratSg6Jo"
                },
                {
                    title: "Paper",
                    link: "https://scholar.google.com/citations?view_op=view_citation&hl=de&user=bcx5-kkAAAAJ&sortby=pubdate&citation_for_view=bcx5-kkAAAAJ:2osOgNQ5qMEC"
                }
            ]
    },
    {
        title: 'Detektion und Tracking von Personen in Lasermessungen',
        paragraphs:
            [
                {
                    title: "Auftraggeber: ",
                    text: "BMBF"
                },
                {
                    title: "Projekt: ",
                    text: "Kompetenzzentrum: Aufbau des Deutschen Rettungsrobotik-Zentrums"
                },
                {
                    title: "Projektbeschreibung: ",
                    text: "In diesem Projekt sollte unter anderem ein Copter zur Ersteinschätzung der Lage an Einsatzorten von Rettungskräften entwickelt werden. Somit sollte dieser in einer Umgebung eingesetzt werden in der potentiell Menschen zu finden sind."
                },
                {
                    title: "Meine Aufgabe",
                    text: " bestand darin ein Verfahren zu entwickeln, um Menschen in den Laserscans des Copters zu finden und ihre Bewegungen nachzuvollziehen. Diese Informationen sollten es dem Copter ermöglichen seine Flugrouten kollisionsfrei zu planen und damit die Sicherheit für Mensch und Maschine zu erhöhen.\n" +
                        "  Da die Ergebnisse meiner Arbeit an diesem Projekt nicht öffentlich zugänglich sind, verzichte ich auf eine tiefergehende Beschreibung meines Lösungsweges."
                },
                {
                    title: "Techstack: ",
                    text: "C++, ROS, Point Cloud Library"
                }
            ],
        links:
            [
                {
                    title: "Projektseite",
                    link: "https://rettungsrobotik.de/home"
                }
            ]
    },
    {
        title: 'Vorhersage von Personenposen mittels Graph Neuronaler Netze',
        paragraphs:
            [
                {
                    title: "Auftraggeber: ",
                    text: "Fraunhofer IAIS"
                },
                {
                    title: "Projekt: ",
                    text: "Collaborative Perception and Prediction with Smart Edge Sensors"
                },
                {
                    title: "Projektbeschreibung: ",
                    text: "In diesem Projekt ..."
                },
                {
                    title: "Meine Aufgabe: ",
                    text: "Meine Aufgabe bestand darin ..."
                },
                {
                    title: "Techstack: ",
                    text: "C++, ..."
                }
            ],
        links:
            [
                {
                    title: "Code",
                    link: "https://github.com/AIS-Bonn/pose_graph_prediction"
                }
            ]
    },
    {
        title: 'RViz Cinematographer',
        paragraphs:
            [
                {
                    title: "Das Problem: ",
                    text: "Während meiner Arbeit mit 3D-Laserscans hat es mich immer wieder gestört, dass es keine zufriedenstellende Methode gab Visualisierungen von 3D-Informationen anderen übersichtlich darzustellen.\n" +
                        "  Ein 2D-Bild kann immer nur eine Perspektive zu einem Zeitpunkt der Aufnahme abbilden.\n" +
                        "  Ein Video aus einer festen Perspektive hat den Nachteil, dass sich dynamische Prozesse schnell aus dem Fokus der Perspektive bewegen können.\n" +
                        "  Ein Video mit einer dynamischen Kamera, die Bewegungen verfolgt oder den Fokus wechselt war zu diesem Zeitpunkt mit viel Arbeit und Zeitaufwand verbunden, den sich viele Wissenschaftlicher nicht leisten konnten oder wollten."
                },
                {
                    title: "Die Lösung: ",
                    text: "Ich habe daraufhin ein nutzerfreundliches Tool entwickelt mit dem man schnell und einfach Kamerafahrten durch 3D-Darstellungen erzeugen kann. Die Nutzer können sich bequem unterschiedliche Punkte auswählen, die die Kamera nacheinander abfahren soll. Zusätzlich können sie entscheiden wie lange die Kamera zwischen den Punkten unterwegs sein wird und wie lange sie an diesen verbleiben soll. Die Aufnahme wird anschließend in der gewählten Qualität und Bildfrequenz aufgenommen - selbst dann, wenn der eingesetzte Computer die Visualisierung nicht in der gewünschten Frequenz bereitstellen kann.\n" +
                        "  Dieses Tool wird aktiv von der Robotik-Community genutzt und erfreut sich wachsender Beliebtheit. Zusätzlich wurde ich darum gebeten den Hauptteil der Funktionen in die offiziellen Pakete des Robot Operating Systems einzubauen.\n" +
                        "  Ich habe mich sehr über das Interesse und Feedback der Community gefreut. Dieses Projekt hat mir nochmals deutlich gezeigt, dass mich die Arbeit an Code und Tools, die von anderen genutzt werden, sehr motiviert und einen Kernpunkt meiner weiteren Arbeit bilden soll."
                },
                {
                    title: "Techstack: ",
                    text: "C++, ROS, Qt Creator"
                }
            ],
        links:
            [
                {
                    title: "Code",
                    link: "https://github.com/AIS-Bonn/rviz_cinematographer"
                }
            ]
    },
    {
        title: 'Wetter Webseite',
        paragraphs:
            [
                {
                    title: "Projektbeschreibung: ",
                    text: "In diesem Projekt ..."
                },
                {
                    title: "Meine Aufgabe: ",
                    text: "Meine Aufgabe bestand darin ..."
                },
                {
                    title: "Techstack: ",
                    text: "C++, ..."
                }
            ],
        links:
            [
                {
                    title: "Code",
                    link: "https://github.com/Razlaw/weather_website/tree/src"
                }
            ]
    }
];