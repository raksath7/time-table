export let year = "2023";
export let semester = "Odd";

function college(code, name, courses) {
  this.code = code;
  this.name = name;
  this.courses = courses;
}

export function short_name(school) {
  return school.name.split(" ").slice(2).join(" ");
}

function Course(name, nick, slot) {
  this.name = name;
  this.nick = nick;
  this.slot = slot;
}

export let schools = {
  SEM1: new college("a", "college of Chemical Sciences", []),
  SEM2: new college("B", "college of Biological Sciences", []),
  SEM3: new college("P", "college of Physical Sciences", []),
  SEM4: new college("M", "college of Mathematical Sciences", []),
  SEM5: new college("CS", "college of Computer Sciences", []),
  SEM6: new college("H", "college of Humanities and Social Sciences", []),
  SEM7: new college("y", "college of Humanities and Social Sciences", []),
  SEM8: new college("z", "college of Humanities and Social Sciences", []),
};

export let courses = {
  // always use A1, A2, ... for degenerates of slot A
  /* Biology */
  B204: new Course("Cell Biology (LH2)", "CellBio", "D"),
  
  z206: new Course("Moleclar Biology (LH2)", "MolBio", "F"),
  a206: new Course("Moleclar Biology (LH2)", "MolBio", "F"),
  B206: new Course("Moleclar Biology (LH2)", "MolBio", "F"),
  B305: new Course("Immunology (B2)", "Immuno", "B"),
  B307: new Course("Genetics (B2)", "Gene", "A"),
  B353: new Course("Plant Developmental Biology (B3)", "PlantDev Bio", "D"),

  B405: new Course("Biotechniques (B6)", "Biotech", "B"),
  B453: new Course("Advanced Biochemistry (B3)", "Adv Biochem", "A"),
  B454: new Course("Advanced Microbiology (B2)", "Adv MicroBio", "C"),
  B455: new Course("Enzymology (LH1)", "Enzymo", "E"),
  B456: new Course("Advanced Neurobiology (B1)", "Adv NeuroBio", "F"),

  B554: new Course("Cancer Biology (B4)", "CancerBio", "A"),
  B558: new Course("Quantitative Biology (B6)", "QuantiBio", "E"),

  /* Chemistry */
  // C204: new Course("Reagents in Organic Syntheses (LH2)", "Organic", "B"),
  // C205: new Course(
  //   "Main Group and Organometallic Chemistry (LH2)",
  //   "Inorganic",
  //   "E"
  // ),
  // C206: new Course("Quantum Chemistry - I (LH1)", "QC1", "F"),

  // C304: new Course("Coordination Chemistry (LH3)", "CoordChem", "E"),
  // C305: new Course("Chemical Binding (LH4)", "ChemBind", "B"),
  // C306: new Course("Physical Methods in Chemistry - I (LH2)", "PMC", "C"),

  // C402: new Course("Chemical Rate Processes (C5)", "ChemRate", "F"),

  // C554: new Course("Crystallography (C2)", "Crystallo", "C"),
  // C556: new Course(
  //   "Advanced Bio-Inorganic Chemistry (LH3)",
  //   "Bio InorgChem",
  //   "A"
  // ),
  C565: new Course("Technical english (C1)", "Organo", "D"),
  C567: new Course("Engineering maths (C2)", "MainGrp Chem", "A"),
  C571: new Course("Engineering chemistry (LH1)", "StatMech", "A"),

  /* Computer Science */
  CS202: new Course("Discrete Structures and Computation (LH2)", "DSC", "E"),
  CS460: new Course("Machine Learning (M3)", "ML", "D"),
  CS458: new Course("Approximation Algorithms (M3)", "AppAlgo", "F"),

  /* Mathematics */
  M202: new Course("Group Theory (M1)", "GrpTheory", "F"),
  M204: new Course("Metric Spaces (M1)", "MetSpace", "D"),
  M206: new Course("Probability Theory (M1)", "PT", "C"),

  M301: new Course("Lebesque Integration (M2)", "LI", "E"),
  M307: new Course("Field Theory (M2)", "FT", "A"),
  M308: new Course("Complex Analysis (M2)", "CA", "G"),
  M309: new Course("Graph Theory (M2)", "GraphTheo", "B"),
  M311: new Course("Numerical Analysis (M5)", "H"),

  M402: new Course("Representations of Finite Groups (M2)", "FG", "H"),
  M404: new Course("Algebraic Topology (M2)", "AT", "G"),
  M456: new Course("Algebraic Geometry (M3)", "AG", "C"),
  M470: new Course("Abstract Harmonic Analysis (M2)", "Abs HarmAnal", "D"),
  M452: new Course("Advanced Functional Analysis (M3)", "Adv FuncAnal", "B"),
  M483: new Course("Introduction to Manifolds (M4)", "Manifolds", "B"),
  M463: new Course("Finite Fields (M5)", "FF", "B"),
  M451: new Course("Advanced Complex Analysis (M1)", "Adv CompAnal", "I"),

  M561: new Course("Elliptical Curves (M1)", "EC", "A"),
  M554: new Course("Ergodic Theory (M3)", "ET", "A"),

  /* Physics */
  P204: new Course("Electromagnetism I (P107)", "EM1", "D"),
  P205: new Course("Mathematical Methods II (P107)", "MM2", "B"),
  P206: new Course("Quantum Mechanics - I (P107)", "QM1", "A"),

  P301: new Course("Electromagnetism - II (P107)", "EM2", "E"),

  P307: new Course("Nuclei and Particles (LH3)", "Nuclei", "C"),

  P454: new Course("Particle Physics (P126)", "PP", "B"),
  P455: new Course(
    "Introduction to Phase Transition and Critical Phenomena (P127)",
    "PT&CP",
    "F"
  ),
  P457: new Course(
    "General Theory of Relativity and Cosmology (P108)",
    "GTR",
    "A"
  ),
  P461: new Course("Physics of Mesoscopic Systems (P109)", "PMS", "A"),
  P468: new Course("Magnetism and Superconductivity (P108)", "Mag&Sup", "E"),
  P477: new Course(
    "Relativistic Nucleus - Nucleus Collision and Quark Gluon Plasma (P126)",
    "RN",
    "D"
  ),

  /* CMRP */
  R121: new Course("Quantum Mechanics (CR-101)", "QM", "B"),
  R122: new Course("Electronics and Instrumentation (CR-101)", "E&I", "C"),
  R123: new Course("Solid State Physics (CR-101)", "SSP", "D"),
  R124: new Course("Nuclear Physics (CR-101)", "NP", "E"),
};

for (let course in courses) {
  for (let school in schools) {
    if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
      schools[school].courses.push(course);
    }
  }
}

// Colorblindness-friendly color palette from: https://davidmathlogic.com/colorblind/
export let colors = [
  "#117733",
  "#44aa99",
  "#d55e00",
  "#88ccee",
  "#0072b2",
  "#ddcc77",
  "#cc6677",
  "#aa4499",
  "#882255",
  "#e69f00",
];
