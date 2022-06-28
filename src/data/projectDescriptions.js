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
                    text: "In diesem Projekt wurde unter anderem eine 3D Karte der Umgebung erstellt.\n" +
                        "Diese Karte sollte einem autonomen Copter dazu dienen, sich in seiner Umgebung zurecht zu finden und Hindernissen auszuweichen.\n" +
                        "Zur Erstellung der Karte wurde ein 2D Laserscanner auf den Copter montiert.\n" +
                        "Ein 2D Laserscanner misst die Distanzen zu seiner Umgebung in einem schmalen Kreis.\n" +
                        "Ähnlich einem Dokumentenscanner, der über ein Dokument gezogen wird, wird der 2D Laserscanner gedreht, um mehr seiner Umgebung zu erfassen.\n"
                },
                {
                    title: "Meine Aufgabe: ",
                    text: "Meine Aufgabe bestand darin diese Drehung möglichst exakt zu modellieren.\n" +
                        "Mit einem präzisen Modell lassen sich die 2D ..."
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
                    text: "In diesem Projekt ..."
                },
                {
                    title: "Meine Aufgabe: ",
                    text: "Meine Aufgabe bestand darin ..."
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
                    text: "Eine Motion Capture Anlage besteht üblicherweise aus mehreren Kameras mit einer hohen Bildrate. Die Kameras werden so ausgerichtet, dass sie ein Feld aus mehreren Richtungen aufnehmen. Zusätzlich wird das Feld aus den Perspektiven der Kameras mit Infrarot Licht ausgeleuchtet. Befindet sich ein spezieller Marker, der das Infrarot Licht besonders gut reflektiert, in diesem Feld, so lässt sich seine 3D Position im Raum präzisere messen. Montiert man mehrere Marker beispielsweise an einem Copter so lässt sich dessen 3D Pose im Raum präzise bestimmen. Eine solche Anlage habe ich benötigt, um verschiedene Verfahren zur Lokalisierung von Coptern zu evaluieren. Diese Verfahren nutzten die Sensoren des Copters und waren weniger präzise in der Bestimmung der Pose. Im Gegensatz zu einer Motion Capture Anlage jedoch nicht an einen Ort gebunden. "
                },
                {
                    title: "Meine Aufgabe: ",
                    text: "Neben der Inbetriebnahme habe ich die Software der Anlage, die ein wenig in die Jahre gekommen war, angepasst. Die Anlage sollte ihre gemessenen Posen in einem Format ausgeben, das den damaligen Standards entsprach. Nötig war das für die Testläufe eines Robotik-Wettbewerbs, da während der Wettbewerbs eine standardisierte Anlage verwendet wurde."
                },
                {
                    title: "Techstack: ",
                    text: "C#"
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
                    text: "Im Projekt InvertAIRy sollte ein Copter entwickelt werden, der in einem hohen Lager eine Inventur autonom durchführen sollte. Für diese Aufgabe wurde der Copter mit mehreren Kameras und einen 3D Laserscanner ausgerüstet. Laserscanner generell messen die Distanz zu ihrer Umgebung. 3D Scanner messen in viele verschiedene Richtungen um ein vollständigeres 3D \"Bild\" der Umgebung zu erhalten. Zusätzlich zur Distanz lässt sich die Intensität des zurückkehrenden Laserstrahls messen. Diese kann vage mit einem schwarz weiß Foto verglichen werden. Kameras auf der anderen Seite messen die Farbwerte der Umgebung aber erfassen keine Distanz. Wenn man weiß wie Kamera und Laserscanner zueinander im Raum positioniert sind, lässt sich beispielsweise zu einem Objekt, welches in der Kamera zu sehen ist, ein Distanzwert vom Laserscanner bestimmen. "
                },
                {
                    title: "Meine Aufgabe: ",
                    text: "Meine Aufgabe bestand darin ein Verfahren zu entwickeln mit dem man herausfinden kann wie Kamera und Laserscanner zueinander im Raum stehen - eine extrinsische Kalibrierung. Dieses Verfahren sollte möglichst wenig Interaktionen durch einen Nutzer erfordern.\n   Mein Lösungsansatz war es systematisch eine 3D Transformation zwischen Kamera und Laser zu suchen, sodass die Intensitätswerte des Laserscanners möglichst gut mit einem schwarz weiß Bild aus der Kamera überlappen. Die Schwierigkeit bestand darin, dass dunkle Werte im Kamerabild nicht unbedingt niedrigen Werten in den Intensitäten entsprechen. Zusätzlich hängt die gemessene Intensität von dem Winkel ab mit der ein Laserstrahl auf ein Objekt trifft. So haben Runde Objekte an ihrer dem Laser zugewandten Seite eine höhere Intensität als an ihren Seiten. In Kamerabildern hängt die Helligkeit jedoch stark von den vorhandenen Lichtquellen im Raum ab. Als Lösung habe ich die kulbeck leibner ??? Divergenz eingesetzt, welche aussagt wie gut Farbwerte konsistent zueinander passen. Sie ist beispielsweise niedrig wenn helle Bereiche im Foto immer über dunklen Bereichen im Scan liegen, aber höher wenn helle Bereiche Mal über hellen und Mal über dunklen Bereichen liegen. Zusätzlich habe ich eine Umgebung für die Aufnahme gewählt in der die unterschiedlichen Effekte der beiden Sensoren möglichst selten auftreten. Dabei war es hilfreich, wenn wenig spiegelnde Flächen oder runde Objekte im Kamerabild zu sehen waren. Diese eher schwache Einschränkung ließ in jedem klassischen Büro eine geeignete Stelle zum Kalibrieren finden."
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
                    title: "Wettbewerb Webseite mit finalem Ranking - Seite lädt lange",
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
                    title: "Wettbewerb Webseite mit finalem Ranking - Seite lädt lange",
                    link: "http://web.archive.org/web/20180225193543/http://www.mbzirc.com:80/scoreboard/challenge4"
                },
                {
                    title: "Video mit Beschreibung der Aufgaben",
                    link: "https://www.youtube.com/watch?v=oVz2Sp3W468"
                },
                {
                    title: "Video unseres Durchgangs - Aufgabe 2",
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
                    title: "Wettbewerb Webseite mit finalem Ranking - Seite lädt lange",
                    link: "http://web.archive.org/web/20200806184940/https://www.mbzirc.com/news/us5-million-mbzirc-2020-winners-awarded-29"
                },
                {
                    title: "Video mit Beschreibung der Aufgaben",
                    link: "https://www.youtube.com/watch?v=u106Vy-XJ7c"
                },
                {
                    title: "Video Zusammenschnitt unserer Durchgänge",
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