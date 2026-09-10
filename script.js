// ===== TOGGLE MENU =====
function toggleMenu() {
  document.getElementById('navbar').classList.toggle('active');
}
  
// ===== QUESTION BANK - ADD MORE HERE =====
const questions = [
  {
    id: 1,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Which tooth has 5 cusps and is the largest tooth in the mouth?",
    options: ["Maxillary First Molar", "Mandibular First Molar", "Maxillary Canine", "Mandibular Premolar"],
    answer: 1,
    explanation: "The mandibular first molar is the largest tooth and typically has 5 cusps: 2 buccal, 2 lingual, and 1 distal."
  },
  {
    id: 2,
    module: "Oral Pathology",
    type: "MCQ", 
    question: "White patch that cannot be scraped off and cannot be attributed to any other condition is:",
    options: ["Candidiasis", "Leukoplakia", "Lichen Planus", "Geographic Tongue"],
    answer: 1,
    explanation: "Leukoplakia is a premalignant white patch. Key feature: cannot be wiped off. Requires biopsy."
  },
  {
    id: 3,
    module: "Dental Surgery",
    type: "Practical",
    image: "", // tooth extraction
    question: "Looking at the image, what is the correct instrument for extracting a maxillary central incisor?",
    options: ["Extraction Forceps #150", "Extraction Forceps #18R", "Extraction Forceps #88R", "Extraction Forceps #210"],
    answer: 0,
    explanation: "#150 forceps are universal maxillary forceps. Used for centrals, laterals and canines. #18R is for maxillary molars."
  },
  {
    id: 4,
    module: "Conservative",
    type: "MCQ",
    question: "The most common site for dental caries in permanent molars is:",
    options: ["Smooth surface", "Pits and fissures", "Root surface", "Proximal surface"],
    answer: 1,
    explanation: "Pits and fissures trap plaque and food. Fluoride sealants are used for prevention here."
  },
  {
    id: 5,
    module: "Oral Pathology",
    type: "Practical",
    image: "five.jpg", // oral lesion
    question: "This clinical photo shows an ulcer with a white pseudomembrane. Most likely diagnosis is?",
    options: ["Aphthous Ulcer", "Herpetic Ulcer", "Traumatic Ulcer", "Squamous Cell Carcinoma"],
    answer: 0,
    explanation: "Aphthous ulcers: round, <1cm, with erythematous halo and yellow-white center. Not infectious. Usually heals in 10-14 days."
  },
  {
    id: 6,
    module: "Oral Pathology",
    type: "MCQ",
    question: "The invasion of the body by pathogenic organisms and their subsequent multiplication is known as?",
    options: ["Pathogenisis", "Etiology", "Infection", "Ludwig's angina"],
    answer: 2,
    explanation: "Infection is the invasion of pathogenic organisms and their subsequent multiplication."
  },

  {
    id: 7,
    module: "Oral Pathology",
    type: "Practical",
    image: "seven.jpg", // oral lesion
    question: "looking at the image, what is the condition?",
    options: ["Abscess", "Cellulitis", "Melanoma", "Ludwig's angina"],
    answer: 1,
    explanation: "Cellulitis is a diffuse inflamation of soft tissue which is not confined to one area. It occurs s a result of infection to maxillofacial region by enzymes producing organisms e.g staphylococcus(hyaluronidase) and streptococcus(fibrinolysin)."
  },
  {
    id: 8,
    module: "Oral Anatomy",
    type: "Practical",
    image: "eight.jpg", // Upper jaw
    question: "With the aid of the image, what nerve innervates 26 to 28 (FDI) ?",
    options: ["Greater palatine nerve", "Mental nerve", "Molar nerve", "Posterior superior alveolar nerve"],
    answer: 3,
    explanation: "Posterior superior alveolar nerve, a branch of superior alveolar nerve innervates the maxillary third molars."
  },

  {
    id: 9,
    module: "Oral Pathology",
    type: "Practical",
    image: "nine.jpg", // oral lesion
    question: "What is the condition in the image?",
    options: ["Carsinoma", "Osteosarcoma", "Pleomorphic adenoma", "Papilloma"],
    answer: 3,
    explanation: "Papillomas are made up of numerous small finger-like projections resulting into a lesion with a roughened, verrucous or cauliflower-like surface and its avarage size is less than 2cm."
  },

  {
    id: 10,
    module: "Oral Pathology",
    type: "Practical",
    image: "ten.jpg", // oral lesion
    question: "What is the condition?",
    options: ["Pyogenic granuloma", "Fibroma", "Pregnancy tumour", "Squamous Cell Carcinoma"],
    answer: 1,
    explanation: "Fibroma is a begnin neoplasm of fibrous connective tissue origin and the most common connective tissue tumour that is small, well circumscribed asymptomatic and slow enlarging."
  },

  {
    id: 11,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Danger area refers to the region involving the?",
    options: ["Eye", "Upper lip and nose", "Floor of the mouth", "Ear"],
    answer: 1,
    explanation: "The communication of the facial vein can lead to retrograde spread of infection from the face, especialy the nose and the upper lip to the carvernous sinus of the middle cranial fossa, therefore this region is called the danger area of the face."
  },

  {
    id: 12,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Sensory nerves carry impulses from?",
    options: ["Brain to periphery", "periphery to brain", "Skin to heart", "Skin to joints"],
    answer: 1,
    explanation: "Nerves are classified by direction. Sensory/afferent nerves carry impulses FROM the periphery - skin, mucosa, teeth, joints - TOWARD the brain and spinal cord for interpretation."
  },

  {
    id: 13,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Ganglion is a?",
    options: ["Collection of nerve cell bodies", "Collection of axons", "Collection of muscle fiber", "Collection of nuclei"],
    answer: 0,
    explanation: "A ganglion is a cluster of neuron cell bodies located outside the CNS. Think of it as a relay station Examples: Trigeminal ganglion, Ciliary ganglion. "
  },

    {
    id: 14,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "The ciliary ganglion is situated near the?",
    options: ["Orbit", "Oral cavity", "Ear", "Cranium"],
    answer: 0,
    explanation: "The ciliary ganglion is a parasympathetic ganglion located in the posterior part of the orbit about 1cm in front of the apex. It receives preganglionic fibers from the oculomotor nerve and sends postganglionic fibers via short ciliary nerves to supply the sphincter pupillae and ciliary muscle for pupillary constriction and accommodation."

  },

  {
    id: 15,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "The Trigeminothalamic tract caries the sensation of?",
    options: ["pain", "temperature", "pain and temperature", "pressure"],
    answer: 2,
    explanation: "This is the main sensory pathway for the face. First order neurons in the trigeminal ganglion carry pain, temperature, and crude touch. They synapse in the trigeminal nucleus. Second order neurons then cross and ascend as the trigeminothalamic tract to the thalamus."

},

  {
    id: 16,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "The semilunar ganglion occupies the cavity called the Meckel's cave present in the?",
    options: ["frontal bone", "temporal bone", "zygomatic bone", "maxilla"],
    answer: 1,
    explanation: "The trigeminal ganglion is also called semilunar ganglion due to its shape. It sits in a dural pouch called Meckel’s cave or cavum trigeminale, on the anterior surface of the petrous part of the _temporal bone_. This is a common site for surgical procedures in trigeminal neuralgia."
},
{
    id: 17,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "The maxillary nerve passes through the?",
    options: ["foramen rotundum", "foramen lacerum", "carotid canal", "superior orbital fissure"],
    answer: 0,
    explanation: "V2 exits the middle cranial fossa through foramen rotundum to enter the pterygopalatine fossa. From there it gives branches to maxillary teeth, palate, nose, and skin of cheek.  "
},
{
    id: 18,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "The posterior superior alveolar nerve is a branch of the?",
    options: ["mandibular nerve", "abduscent nerve", "maxillary nerve", "hypoglossal nerve"],
    answer: 2,
    explanation: "V2 gives 3 major branches in pterygopalatine fossa: PSA, MSA, ASA. The Posterior Superior Alveolar nerve descends to supply the maxillary molars, adjacent buccal gingiva, and maxillary sinus mucosa. This is why a PSA block anesthetizes upper molars."
},
{
    id: 19,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "The mandibular nerve is?",
    options: ["mixed", "sensory", "motor", "secretomotor"],
    answer: 0,
    explanation: "CN V3 is the only division of trigeminal with both sensory and motor components.  Sensory: lower face, lower lip, chin, anterior two thirds tongue, lower teeth, TMJ. Motor: muscles of mastication - masseter, temporalis, medial and lateral pterygoid, plus mylohyoid, ant. digastric, tensor tympani, tensor veli palatini."
},
  {
    id: 20,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "The test sensation to the tongue is provided by?",
    options: ["lingual nerve", "petrosal nerve", "palatine nerve", "chorda tympani"],
    answer: 3,
    explanation: "General sensation and taste are separate. Taste: Anterior 2/3 tongue = *Chorda tympani*, a branch of facial nerve CN VII. Posterior 1/3 tongue = Glossopharyngeal CN IX. Lingual nerve CN V3 carries general sensation/pain/temp from anterior 2/3 tongue, NOT taste. This is why patients can lose taste but still feel touch if only chorda is damaged."
},  

    {
    id: 21,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Bell's palsy results due to the involvement of the following cranial nerve:",
    options: ["facial merve", "trigeminal nerve", "Glossopharyngeal nerve", "trochlear nerve"],
    answer: 0,
    explanation: ""
},  
  {
    id: 22,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Parathesia is?",
    options: ["abnormal growth of nerve", "tumour of nerve", "loss of sensation", "abnormal sensation of pain"],
    answer: 3,
    explanation: ""
},   
// ===== 50 CONSERVATIVE DENTISTRY QUESTIONS - FINAL VERIFIED =====
{
    id: 23,
    module: "Conservative",
    type: "MCQ",
    question: "The most caries-susceptible area in posterior teeth is:",
    options: ["Smooth surface", "Pits and fissures", "Cementoenamel junction", "Root surface"],
    answer: 1,
    explanation: "Pits and fissures trap plaque and are difficult to clean. Hence pit and fissure sealants are indicated for prevention."
  },
  {
    id: 24,
    module: "Conservative",
    type: "MCQ",
    question: "GV Black's Class I cavity involves:",
    options: ["Proximal surface of anterior", "Occlusal surface of posterior", "Cervical 1/3 of tooth", "Incisal edge"],
    answer: 1,
    explanation: "Class I: Pits, fissures, and defects on occlusal of molars/premolars, buccal/lingual of molars, lingual of incisors."
  },
  {
    id: 25,
    module: "Conservative",
    type: "MCQ",
    question: "Best material for direct pulp capping in deep cavity is:",
    options: ["Zinc phosphate", "Glass ionomer", "Calcium hydroxide", "ZOE"],
    answer: 2,
    explanation: "Calcium hydroxide has high pH, antibacterial effect and stimulates reparative dentin bridge formation."
  },
  {
    id: 26,
    module: "Conservative",
    type: "MCQ",
    question: "Polymerization shrinkage is a major disadvantage of:",
    options: ["Amalgam", "GIC", "Composite resin", "Gold"],
    answer: 2,
    explanation: "Composite shrinks 2-5% during curing causing microleakage and post-op sensitivity. Managed by incremental technique."
  },
  {
    id: 27,
    module: "Conservative",
    type: "MCQ",
    question: "Rubber dam is primarily used for:",
    options: ["Patient comfort", "Isolation and moisture control", "Retraction of tongue", "Anesthesia"],
    answer: 1,
    explanation: "Rubber dam provides aseptic field, prevents saliva contamination, and protects airway during restorative procedures."
  },
  {
    id: 28,
    module: "Conservative",
    type: "MCQ",
    question: "Etching of enamel with 37% phosphoric acid for composite creates:",
    options: ["Smear layer", "Microporosities", "Dentin tubule occlusion", "Fluoride release"],
    answer: 1,
    explanation: "Acid etching removes smear layer and creates 5-50μm microporosities for micromechanical retention of resin tags."
  },
  {
    id: 29,
    module: "Conservative",
    type: "MCQ",
    question: "The most cariogenic carbohydrate is:",
    options: ["Glucose", "Fructose", "Sucrose", "Lactose"],
    answer: 2,
    explanation: "Sucrose is most cariogenic because bacteria metabolize it to acids and use it to make sticky glucans for plaque adhesion."
  },
  {
    id: 30,
    module: "Conservative",
    type: "MCQ",
    question: "Dentin hypersensitivity is best explained by:",
    options: ["Neural theory", "Odontoblast theory", "Hydrodynamic theory", "Gate control theory"],
    answer: 2,
    explanation: "Hydrodynamic theory: fluid movement in open dentinal tubules stimulates nerve endings causing pain."
  },
  {
    id: 31,
    module: "Conservative",
    type: "MCQ",
    question: "Primary retention form for amalgam cavity preparation is:",
    options: ["Resistance form", "Mechanical interlocking", "Adhesion", "Friction"],
    answer: 1,
    explanation: "For amalgam: mechanical interlocking. For composite: adhesion. Resistance form prevents fracture of tooth/restoration."
  },
  {
    id: 32,
    module: "Conservative",
    type: "MCQ",
    question: "C-factor refers to:",
    options: ["Caries index", "Configuration factor", "Compressive strength", "Curing factor"],
    answer: 1,
    explanation: "C-factor = Number of bonded surfaces / Number of unbonded surfaces. High C-factor in Class I increases polymerization shrinkage stress."
  },
  {
    id: 33,
    module: "Conservative",
    type: "MCQ",
    question: "Best bur for finishing composite is:",
    options: ["Coarse diamond", "12-fluted carbide", "30-fluted carbide", "Cross-cut fissure"],
    answer: 2,
    explanation: "30-fluted carbide gives smooth finish. Coarse burs create scratches that lead to staining."
  },
  {
    id: 34,
    module: "Conservative",
    type: "MCQ",
    question: "Matrix band is essential during restoration of:",
    options: ["Class I", "Class II", "Class III", "Class V"],
    answer: 1,
    explanation: "Class II cavities need matrix to restore proximal contact and contour."
  },
  {
    id: 35,
    module: "Conservative",
    type: "MCQ",
    question: "Bevel in composite preparation is given for:",
    options: ["Retention", "Resistance", "Esthetics and sealing", "Convenience"],
    answer: 2,
    explanation: "Bevel increases surface area for bonding, removes unsupported enamel rods, and hides the restoration margin for better esthetics."
  },
  {
    id: 36,
    module: "Conservative",
    type: "MCQ",
    question: "Liner is indicated when remaining dentin thickness is:",
    options: ["<0.5mm", "<1mm", "<2mm", ">2mm"],
    answer: 2,
    explanation: "If RDT <2mm, use liner like CaOH or GIC to protect pulp from thermal, chemical and electrical irritation."
  },
  {
    id: 37,
    module: "Conservative",
    type: "MCQ",
    question: "Most common cause of secondary caries is:",
    options: ["Poor oral hygiene", "Microleakage", "Wrong material", "Bruxism"],
    answer: 1,
    explanation: "Microleakage at restoration margins allows bacteria and fluid ingress leading to recurrent decay."
  },
  {
    id: 38,
    module: "Conservative",
    type: "MCQ",
    question: "Incremental layering technique in composite is done to:",
    options: ["Save material", "Reduce polymerization shrinkage stress", "Increase strength", "Reduce time"],
    answer: 1,
    explanation: "Layers <2mm reduce C-factor and shrinkage stress, improving marginal adaptation."
  },
  {
    id: 39,
    module: "Conservative",
    type: "MCQ",
    question: "Amalgam tattoo is due to:",
    options: ["Silver particles", "Mercury", "Copper", "Zinc"],
    answer: 0,
    explanation: "Silver particles from amalgam get embedded in mucosa during cavity prep, causing black/blue discoloration."
  },
  {
    id: 40,
    module: "Conservative",
    type: "MCQ",
    question: "GIC bonds to tooth by:",
    options: ["Micromechanical", "Chemical adhesion", "Friction", "Pins"],
    answer: 1,
    explanation: "Glass ionomer forms ionic bond with Ca in hydroxyapatite. Also releases fluoride."
  },
  {
    id: 41,
    module: "Conservative",
    type: "MCQ",
    question: "Ideal cavity wall for amalgam is:",
    options: ["Beveled", "Rounded", "Flat and perpendicular to DEJ", "Concave"],
    answer: 2,
    explanation: "Flat walls and 90 degree cavosurface angle give strength to brittle amalgam and prevent marginal ditching."
  },
  {
    id: 42,
    module: "Conservative",
    type: "Practical",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f70?w=800",
    question: "This early lesion on occlusal surface with no cavitation is best treated by:",
    options: ["Composite restoration", "Pit and fissure sealant", "Crown", "Extraction"],
    answer: 1,
    explanation: "Non-cavitated pit lesion = sealant. It blocks plaque and arrests progression."
  },
  {
    id: 43,
    module: "Conservative",
    type: "MCQ",
    question: "Post-operative sensitivity after composite is commonly due to:",
    options: ["Overheating", "Improper etching", "Polymerization shrinkage", "Wrong shade"],
    answer: 2,
    explanation: "Polymerization shrinkage pulls composite away from cavity walls creating gap. Fluid movement causes sensitivity."
  },
  {
    id: 44,
    module: "Conservative",
    type: "MCQ",
    question: "The instrument used for carving amalgam is:",
    options: ["Burnisher", "Carver", "Condenser", "Explorer"],
    answer: 1,
    explanation: "Hollenback carver, discoid-cleoid carvers are used to carve anatomy in amalgam."
  },
  {
    id: 45,
    module: "Conservative",
    type: "MCQ",
    question: "Direct pulp capping material of choice is:",
    options: ["ZOE", "GIC", "Calcium hydroxide", "Composite"],
    answer: 2,
    explanation: "Calcium hydroxide has high pH, antibacterial property, and induces dentin bridge formation."
  },
  {
    id: 46,
    module: "Conservative",
    type: "MCQ",
    question: "Sandwich technique uses:",
    options: ["Amalgam + Composite", "GIC + Composite", "ZOE + GIC", "Composite + Gold"],
    answer: 1,
    explanation: "GIC base for fluoride release + chemical bond, composite on top for esthetics and strength."
  },
  {
    id: 47,
    module: "Conservative",
    type: "MCQ",
    question: "Tunnel preparation is indicated for:",
    options: ["Class I", "Class II with intact marginal ridge", "Class III", "Class V"],
    answer: 1,
    explanation: "Access proximal caries from occlusal without cutting marginal ridge to preserve tooth strength."
  },
  {
    id: 48,
    module: "Conservative",
    type: "MCQ",
    question: "The setting reaction of GIC is:",
    options: ["Polymerization", "Acid-base", "Crystallization", "Oxidation"],
    answer: 1,
    explanation: "Polyacrylic acid reacts with fluoroaluminosilicate glass powder = acid-base reaction."
  },
  {
    id: 49,
    module: "Conservative",
    type: "MCQ",
    question: "Wear resistance is highest in:",
    options: ["Microfilled composite", "Hybrid composite", "Flowable composite", "Compomer"],
    answer: 1,
    explanation: "Hybrid composites have both micro and macro fillers, best for stress-bearing posterior areas."
  },
  {
    id: 50,
    module: "Conservative",
    type: "MCQ",
    question: "DIAGNOdent is used to detect:",
    options: ["Periodontal pocket", "Caries", "Fracture", "Calculus"],
    answer: 1,
    explanation: "Laser fluorescence device to detect early occlusal caries not visible clinically or on radiograph."
  },
  {
    id: 51,
    module: "Conservative",
    type: "MCQ",
    question: "The main disadvantage of amalgam is:",
    options: ["Low strength", "Poor esthetics", "High solubility", "No fluoride release"],
    answer: 1,
    explanation: "Amalgam is durable but silver-gray color makes it unsuitable for anterior teeth."
  },
  {
    id: 52,
    module: "Conservative",
    type: "MCQ",
    question: "Smear layer is removed during bonding by:",
    options: ["NaOCl", "EDTA", "Phosphoric acid", "Chlorhexidine"],
    answer: 2,
    explanation: "37% phosphoric acid removes smear layer and demineralizes enamel/dentin for bonding."
  },
  {
    id: 53,
    module: "Conservative",
    type: "MCQ",
    question: "Class V lesion commonly caused by tooth flexure is:",
    options: ["Attrition", "Abrasion", "Erosion", "Abfraction"],
    answer: 3,
    explanation: "Abfraction: flexural stresses at CEJ causing V-shaped lesions. Common in bruxism."
  },
  {
    id: 54,
    module: "Conservative",
    type: "MCQ",
    question: "Best material for core build-up is:",
    options: ["Composite", "GIC", "Amalgam", "ZOE"],
    answer: 0,
    explanation: "Composite resin core bonds to tooth, builds quickly, and can be prepared immediately."
  },
  {
    id: 55,
    module: "Conservative",
    type: "MCQ",
    question: "Wedge is placed in Class II restoration to:",
    options: ["Isolate tooth", "Create separation", "Protect gingiva", "All of the above"],
    answer: 3,
    explanation: "Wooden wedge: creates separation, protects papilla, and seals gingival margin from material extrusion."
  },
  {
    id: 56,
    module: "Conservative",
    type: "MCQ",
    question: "Delayed expansion occurs in amalgam due to:",
    options: ["Mercury contamination", "Moisture contamination of zinc alloy", "Copper content", "Over trituration"],
    answer: 1,
    explanation: "Zinc-containing amalgam expands if moisture contaminates during mixing = delayed expansion and restoration fracture."
  },
  {
    id: 57,
    module: "Conservative",
    type: "MCQ",
    question: "The depth of cure for most composites is:",
    options: ["1mm", "2mm", "4mm", "6mm"],
    answer: 1,
    explanation: "Light penetrates ~2mm. Thicker increments cause inadequate cure at bottom and increased shrinkage."
  },
  {
    id: 58,
    module: "Conservative",
    type: "MCQ",
    question: "Desensitizing agent that occludes dentinal tubules:",
    options: ["Fluoride varnish", "Glutaraldehyde", "Potassium nitrate", "All of the above"],
    answer: 3,
    explanation: "Fluoride forms CaF2, glutaraldehyde coagulates proteins, KNO3 depolarizes nerves. All reduce sensitivity."
  },
  {
    id: 59,
    module: "Conservative",
    type: "MCQ",
    question: "ART technique stands for:",
    options: ["Advanced Restorative Technique", "Atraumatic Restorative Treatment", "Aesthetic Repair Technique", "Amalgam Removal Technique"],
    answer: 1,
    explanation: "Atraumatic Restorative Treatment: hand instruments + GIC. Used in field settings without electricity."
  },
  {
    id: 60,
    module: "Conservative",
    type: "MCQ",
    question: "The most important factor for longevity of restoration is:",
    options: ["Material", "Cavity design", "Operator skill and isolation", "Patient age"],
    answer: 2,
    explanation: "Even best material fails with poor isolation and technique. Moisture control is key."
  },
  {
    id: 61,
    module: "Conservative",
    type: "MCQ",
    question: "Flowable composite is best used for:",
    options: ["Class IV", "Liner/base", "Small pits and sealants", "Core build-up"],
    answer: 2,
    explanation: "Low viscosity allows it to flow into pits and fissures. Low wear resistance so not for stress-bearing areas."
  },
  {
    id: 62,
    module: "Conservative",
    type: "MCQ",
    question: "Compomer is:",
    options: ["Composite + GIC", "Ceramic + Metal", "Amalgam + Composite", "Resin + Porcelain"],
    answer: 0,
    explanation: "Polyacid-modified composite. Has some fluoride release like GIC but better esthetics and strength."
  },
  {
    id: 63,
    module: "Conservative",
    type: "MCQ",
    question: "The purpose of bevel in Class IV composite is:",
    options: ["Retention", "Strength", "Masking margin", "Resistance"],
    answer: 2,
    explanation: "Long bevel on labial creates gradual transition, making composite margin invisible."
  },
  {
    id: 64,
    module: "Conservative",
    type: "MCQ",
    question: "Pulpotomy is done in:",
    options: ["Permanent tooth with irreversible pulpitis", "Primary tooth with carious exposure", "Necrotic pulp", "Periapical abscess"],
    answer: 1,
    explanation: "In primary teeth, remove coronal pulp and place medicament to keep radicular pulp vital."
  },
  {
    id: 65,
    module: "Conservative",
    type: "MCQ",
    question: "Silver diamine fluoride is used for:",
    options: ["Whitening", "Caries arrest", "Desensitization", "Bleeding control"],
    answer: 1,
    explanation: "SDF arrests caries by antibacterial effect and fluoride. Causes black staining of carious dentin."
  },
  {
    id: 66,
    module: "Conservative",
    type: "MCQ",
    question: "Cusp capping is indicated when isthmus width is:",
    options: [">1/4 intercuspal distance", ">1/2 intercuspal distance", ">3/4 intercuspal distance", "Any width"],
    answer: 2,
    explanation: "If cavity width >3/4 intercuspal distance, cusp is weakened. Cover with onlay to prevent fracture."
  },
  {
    id: 67,
    module: "Conservative",
    type: "MCQ",
    question: "Best test to differentiate reversible vs irreversible pulpitis:",
    options: ["Percussion", "Palpation", "Cold test", "Mobility"],
    answer: 2,
    explanation: "Reversible: brief pain to cold. Irreversible: lingering pain >30sec after stimulus removed."
  },
  {
    id: 68,
    module: "Conservative",
    type: "MCQ",
    question: "Nano-composites have particle size of:",
    options: ["10-100nm", "1-10μm", "100-1000μm", ">1mm"],
    answer: 0,
    explanation: "Nanofillers 10-100nm give high polish, low wear, and good optical properties."
  },
  {
    id: 69,
    module: "Conservative",
    type: "MCQ",
    question: "The main reason for cusp fracture in endodontically treated tooth is:",
    options: ["Loss of moisture", "Loss of marginal ridge", "Large access cavity", "All of the above"],
    answer: 3,
    explanation: "Endo treatment + large cavity removes structural integrity. Needs cusp protection with crown/onlay."
  },
  {
    id: 70,
    module: "Conservative",
    type: "MCQ",
    question: "Tooth whitening works by:",
    options: ["Abrasion", "Oxidation", "Acid dissolution", "Stain adsorption"],
    answer: 1,
    explanation: "Carbamide/Hydrogen peroxide releases oxygen radicals that break down chromophores in enamel."
  },
  {
    id: 71,
    module: "Conservative",
    type: "MCQ",
    question: "The critical pH for demineralization of enamel is:",
    options: ["7.0", "6.5", "5.5", "4.5"],
    answer: 2,
    explanation: "Critical pH for enamel = 5.5. Below this hydroxyapatite dissolves and caries starts."
  },
  {
    id: 72,
    module: "Conservative",
    type: "MCQ",
    question: "Immediate dentin sealing is done before:",
    options: ["Amalgam", "Composite", "Indirect restoration", "GIC"],
    answer: 2,
    explanation: "Apply bonding agent to fresh dentin before impression for indirect restoration. Reduces sensitivity and improves bond."
  },

  // ===== 100 ORAL SURGERY QUESTIONS - FINAL VERIFIED v3 =====
{
   id: 73, 
    module: "Dental Surgery", 
    type: "MCQ",
    question: "The most common complication after extraction is:",
    options: ["Dry socket", "Hemorrhage", "Fracture", "Nerve injury"],
    answer: 1, explanation: "Post-extraction bleeding is the most common complication overall. Dry socket is most common for mandibular 3rd molars."
  },
  { id: 74, module: "Dental Surgery", type: "MCQ", question: "Alveolar osteitis is commonly called:", options: ["Cellulitis", "Dry socket", "Osteomyelitis", "Abscess"], answer: 1, explanation: "Dry socket = alveolar osteitis. Loss of blood clot 2-4 days post extraction. Severe radiating pain." },
  { id: 75, module: "Dental Surgery", type: "MCQ", question: "Forceps used for extraction of maxillary central incisor:", options: ["150", "18R", "88R", "210"], answer: 0, explanation: "#150 universal maxillary forceps. Used for centrals, laterals, canines." },
  { id: 76, module: "Dental Surgery", type: "MCQ", question: "Forceps used for mandibular molars:", options: ["150", "18L", "23", "222"], answer: 2, explanation: "#23 cowhorn forceps engages bifurcation. #222 is universal mandibular molar forceps." },
  { id: 77, module: "Dental Surgery", type: "MCQ", question: "Inferior alveolar nerve block anesthetizes:", options: ["All maxillary teeth", "Mandibular teeth to midline", "Tongue only", "Buccal mucosa of all mandibular teeth"], answer: 1, explanation: "IANB blocks mandibular teeth, ant 2/3 tongue, floor of mouth. Does NOT block buccal mucosa of molars - need long buccal." },
  { id: 78, module: "Dental Surgery", type: "MCQ", question: "Posterior superior alveolar nerve block is used for:", options: ["Maxillary molars", "Maxillary incisors", "Mandibular molars", "Palate"], answer: 0, explanation: "PSA block anesthetizes maxillary molars and buccal gingiva. Palatal needs separate injection." },
  { id: 79, module: "Dental Surgery", type: "MCQ", question: "Ludwig's angina involves spaces:", options: ["Submandibular + Sublingual + Submental", "Buccal + Canine", "Temporal + Infratemporal", "Pterygomandibular"], answer: 0, explanation: "Ludwig's angina = bilateral cellulitis of submandibular, sublingual, submental spaces. Airway emergency." },
  { id: 80, module: "Dental Surgery", type: "MCQ", question: "Best incision for drainage of submandibular abscess:", options: ["Intraoral", "Extraoral submandibular", "Midline", "No incision"], answer: 1, explanation: "Extraoral incision 2cm below angle of mandible to avoid marginal mandibular nerve." },
  { id: 81, module: "Dental Surgery", type: "MCQ", question: "Dry socket is most common in:", options: ["Maxillary incisors", "Mandibular 3rd molar", "Maxillary premolars", "Mandibular premolars"], answer: 1, explanation: "Mandibular 3rd molars due to poor blood supply and surgical trauma. Smoking increases risk 3x." },
  { id: 82, module: "Dental Surgery", type: "MCQ", question: "Treatment of dry socket includes:", options: ["Antibiotics", "Alveogyl dressing", "Re-extraction", "Extraction of opposite tooth"], answer: 1, explanation: "Irrigation + Alveogyl/ZOE dressing with eugenol. Antibiotics only if systemic signs." },
  { id: 83, module: "Dental Surgery", type: "MCQ", question: "Nerve most commonly injured during mandibular 3rd molar surgery:", options: ["Facial nerve", "Lingual nerve", "Hypoglossal", "Accessory"], answer: 1, explanation: "Lingual nerve at risk during lingual retraction. IAN also at risk. Incidence 0.5-2%." },
  { id: 84, module: "Dental Surgery", type: "MCQ", question: "Pederson difficulty index is used for:", options: ["Fracture risk", "Impaction difficulty", "Anesthesia", "Bleeding"], answer: 1, explanation: "Pederson scores: Angulation + Depth + Ramus relation. 3-10. >7 = very difficult." },
  { id: 85, module: "Dental Surgery", type: "MCQ", question: "Winter's classification is based on:", options: ["Depth", "Angulation", "Ramus relation", "Root number"], answer: 1, explanation: "Winter's: Mesioangular, Distoangular, Vertical, Horizontal, Buccolingual, Inverted." },
  { id: 86, module: "Dental Surgery", type: "MCQ", question: "Most common type of mandibular 3rd molar impaction:", options: ["Vertical", "Horizontal", "Mesioangular", "Distoangular"], answer: 2, explanation: "Mesioangular ~43% is most common." },
  { id: 87, module: "Dental Surgery", type: "MCQ", question: "Suture material of choice for oral mucosa:", options: ["Silk", "Vicryl", "Nylon", "Steel"], answer: 0, explanation: "3-0 or 4-0 black braided silk. Non-absorbable, good knot security." },
  { id: 88, module: "Dental Surgery", type: "MCQ", question: "Osteotomy means:", options: ["Bone cutting", "Tooth sectioning", "Flap reflection", "Suturing"], answer: 0, explanation: "Osteotomy = surgical cutting of bone. Odontotomy = tooth sectioning." },
  { id: 89, module: "Dental Surgery", type: "MCQ", question: "Best flap design for mandibular 3rd molar:", options: ["Envelope", "Triangular", "Rectangular", "Palatal"], answer: 1, explanation: "Triangular flap gives best visibility and vascularity." },
  { id: 90, module: "Dental Surgery", type: "MCQ", question: "Elevator used to luxate teeth:", options: ["Periosteal elevator", "Cryer", "Molt", "Bone file"], answer: 1, explanation: "Cryer and Warwick elevators for luxation and elevation of roots." },
  { id: 91, module: "Dental Surgery", type: "MCQ", question: "Contraindication for extraction:", options: ["Acute pericoronitis", "Uncontrolled diabetes", "Dental caries", "Mobility"], answer: 1, explanation: "Uncontrolled DM, recent MI <6mo, BP >180/110 are absolute contraindications." },
  { id: 92, module: "Dental Surgery", type: "MCQ", question: "Hemostat used to control bleeding:", options: ["Artery forceps", "Needle holder", "Tissue forceps", "Scissors"], answer: 0, explanation: "Mosquito/Artery forceps to clamp bleeding vessel." },
  { id: 93, module: "Dental Surgery", type: "MCQ", question: "Most common cause of post-op infection:", options: ["Poor asepsis", "Patient age", "Antibiotics", "Suture material"], answer: 0, explanation: "Break in aseptic technique is leading cause." },
  { id: 94, module: "Dental Surgery", type: "MCQ", question: "Trismus means:", options: ["Pain", "Swelling", "Limited mouth opening", "Bleeding"], answer: 2, explanation: "Trismus = restriction of mouth opening <35mm. Common after 3rd molar surgery." },
  { id: 95, module: "Dental Surgery", type: "MCQ", question: "Antibiotic prophylaxis is indicated for:", options: ["Simple extraction", "Immunocompromised patients", "All patients", "No one"], answer: 1, explanation: "Indicated for cardiac risk, immunocompromised, prolonged surgery >1hr." },
  { id: 96, module: "Dental Surgery", type: "MCQ", question: "Paresthesia after IANB is most commonly due to:", options: ["Needle trauma", "Drug toxicity", "Allergy", "Overdose"], answer: 0, explanation: "Direct needle trauma + neurotoxicity. Usually temporary." },
  { id: 97, module: "Dental Surgery", type: "MCQ", question: "Best position for patient during maxillary extraction:", options: ["Supine", "45 degree", "Upright", "Prone"], answer: 1, explanation: "45 degree for maxilla. 90 degree upright for mandible." },
  { id: 98, module: "Dental Surgery", type: "MCQ", question: "Forceps used for mandibular premolars:", options: ["150", "151", "222", "18R"], answer: 1, explanation: "#151 universal mandibular forceps for premolars and incisors." },
  { id: 99, module: "Dental Surgery", type: "MCQ", question: "Root fracture during extraction is managed by:", options: ["Leave it", "Surgical removal", "Antibiotics", "Ignore"], answer: 1, explanation: "Remove if >3-4mm, symptomatic, or infected. Small asymptomatic can be left." },
  { id: 100, module: "Dental Surgery", type: "MCQ", question: "Fracture of maxillary tuberosity occurs during extraction of:", options: ["Incisor", "Canine", "Premolar", "3rd molar"], answer: 3, explanation: "Maxillary 3rd molar due to thin tuberosity." },
  { id: 101, module: "Dental Surgery", type: "MCQ", question: "Aspiration pneumonia risk is highest in:", options: ["Local anesthesia", "General anesthesia", "Sedation", "No anesthesia"], answer: 1, explanation: "GA with poor airway protection. Use throat pack." },
  { id: 102, module: "Dental Surgery", type: "MCQ", question: "Gold standard for diagnosis of jaw fracture:", options: ["OPG", "CT scan", "X-ray", "Clinical exam"], answer: 1, explanation: "CT with 3D reconstruction is gold standard for facial fractures." },
  { id: 103, module: "Dental Surgery", type: "MCQ", question: "Most common site of mandibular fracture:", options: ["Symphysis", "Body", "Condyle", "Angle"], answer: 2, explanation: "Condyle is weakest point. Angle is 2nd most common." },
  { id: 104, module: "Dental Surgery", type: "MCQ", question: "LeFort I fracture involves:", options: ["Alveolar process", "Zygoma", "Orbit", "Cranial base"], answer: 0, explanation: "LeFort I: horizontal fracture above apices. Floating palate." },
  { id: 105, module: "Dental Surgery", type: "MCQ", question: "Epistaxis is most common in:", options: ["LeFort I", "LeFort II", "LeFort III", "Mandible"], answer: 2, explanation: "LeFort III = craniofacial disjunction. Dish face deformity." },
  { id: 106, module: "Dental Surgery", type: "MCQ", question: "MMF stands for:", options: ["Maxillomandibular fixation", "Minimally invasive surgery", "Major fracture", "Muscle flap"], answer: 0, explanation: "Maxillomandibular fixation for fracture or orthognathic surgery." },
  { id: 107, module: "Dental Surgery", type: "MCQ", question: "Treatment of choice for displaced condylar fracture in adult:", options: ["MMF only", "Open reduction", "No treatment", "Extraction"], answer: 1, explanation: "Adults often need ORIF. Children remodel well with conservative." },
  { id: 108, module: "Dental Surgery", type: "MCQ", question: "Cystic lesion in jaw associated with impacted tooth:", options: ["Radicular cyst", "Dentigerous cyst", "Keratocyst", "Nasopalatine cyst"], answer: 1, explanation: "Dentigerous cyst surrounds crown, attaches at CEJ." },
  { id: 109, module: "Dental Surgery", type: "MCQ", question: "Marsupialization is done for:", options: ["Small cyst", "Large cyst", "Abscess", "Tumor"], answer: 1, explanation: "Decompress large cyst to prevent pathologic fracture before enucleation." },
  { id: 110, module: "Dental Surgery", type: "MCQ", question: "Biopsy of suspicious oral lesion should be:", options: ["Incisional", "Excisional", "FNAC", "No biopsy"], answer: 0, explanation: "Incisional biopsy for lesions >2cm to get representative tissue." },
  { id: 111, module: "Dental Surgery", type: "MCQ", question: "Most common benign tumor of salivary gland:", options: ["Warthin", "Adenoid cystic", "Pleomorphic adenoma", "Mucoepidermoid"], answer: 2, explanation: "Pleomorphic adenoma = mixed tumor. Most common in parotid." },
  { id: 112, module: "Dental Surgery", type: "MCQ", question: "Facial nerve runs through:", options: ["Parotid gland", "Submandibular gland", "Sublingual", "Thyroid"], answer: 0, explanation: "Facial nerve divides parotid into superficial and deep lobes." },
  { id: 113, module: "Dental Surgery", type: "MCQ", question: "Ranula is cyst of:", options: ["Parotid", "Submandibular duct", "Sublingual gland", "Palate"], answer: 2, explanation: "Ranula = mucocele of sublingual gland. Blue translucent swelling." },
  { id: 114, module: "Dental Surgery", type: "MCQ", question: "Most common oral cancer:", options: ["Adenocarcinoma", "Squamous cell carcinoma", "Melanoma", "Lymphoma"], answer: 1, explanation: "SCC accounts for >90% of oral malignancies." },
  { id: 115, module: "Dental Surgery", type: "MCQ", question: "TNM staging is for:", options: ["Cyst", "Fracture", "Tumor", "Infection"], answer: 2, explanation: "TNM: Tumor, Node, Metastasis for oral cancer." },
  { id: 116, module: "Dental Surgery", type: "MCQ", question: "Reconstruction plate is used for:", options: ["Cyst", "Fracture of mandible", "Extraction", "Biopsy"], answer: 1, explanation: "2.4mm reconstruction plate for mandibular continuity defects." },
  { id: 117, module: "Dental Surgery", type: "MCQ", question: "Dental implant failure most commonly due to:", options: ["Peri-implantitis", "Fracture", "Wrong shade", "Pain"], answer: 0, explanation: "Peri-implantitis = inflammation + bone loss around implant." },
  { id: 118, module: "Dental Surgery", type: "MCQ", question: "Osteoradionecrosis is complication of:", options: ["Chemotherapy", "Radiotherapy", "Antibiotics", "Extraction"], answer: 1, explanation: "ORN: exposed necrotic bone in irradiated patient >3 months." },
  { id: 119, module: "Dental Surgery", type: "MCQ", question: "Hyperbaric oxygen is used in:", options: ["Dry socket", "ORN", "Abscess", "Cyst"], answer: 1, explanation: "HBO before and after surgery in irradiated patients to prevent ORN." },
  { id: 120, module: "Dental Surgery", type: "MCQ", question: "Most common TMJ disorder:", options: ["Ankylosis", "Dislocation", "Internal derangement", "Arthritis"], answer: 2, explanation: "Internal derangement: disc displacement with/without reduction." },
  { id: 121, module: "Dental Surgery", type: "MCQ", question: "Clicking in TMJ indicates:", options: ["Ankylosis", "Disc displacement", "Fracture", "Normal"], answer: 1, explanation: "Click = disc reducing onto condyle during opening." },
  { id: 122, module: "Dental Surgery", type: "MCQ", question: "Arthrocentesis is done for:", options: ["Fracture", "Internal derangement", "Tumor", "Infection"], answer: 1, explanation: "Lavaging TMJ to remove inflammatory mediators." },
  { id: 123, module: "Dental Surgery", type: "MCQ", question: "Best radiograph for TMJ bony changes:", options: ["OPG", "CBCT", "PA skull", "Bitewing"], answer: 1, explanation: "CBCT for bone. MRI for disc." },
  { id: 124, module: "Dental Surgery", type: "MCQ", question: "Local anesthetic with longest duration:", options: ["Lidocaine", "Bupivacaine", "Articaine", "Procaine"], answer: 1, explanation: "Bupivacaine 0.5% lasts 4-8 hours." },
  { id: 125, module: "Dental Surgery", type: "MCQ", question: "Vasoconstrictor in LA cartridge:", options: ["Adrenaline", "Atropine", "Morphine", "Diazepam"], answer: 0, explanation: "1:80,000 or 1:200,000 adrenaline prolongs anesthesia." },
  { id: 126, module: "Dental Surgery", type: "MCQ", question: "Maximum lidocaine with adrenaline in adult:", options: ["2mg/kg", "4.4mg/kg", "7mg/kg", "10mg/kg"], answer: 2, explanation: "Max 7mg/kg with adrenaline. Without adrenaline = 4.4mg/kg." },
  { id: 127, module: "Dental Surgery", type: "MCQ", question: "Allergy to LA is most common with:", options: ["Amides", "Esters", "Both", "None"], answer: 1, explanation: "Esters metabolize to PABA which is allergenic." },
  { id: 128, module: "Dental Surgery", type: "MCQ", question: "Treatment of LA toxicity seizure:", options: ["Oxygen + Diazepam", "Adrenaline", "Steroids", "Antihistamine"], answer: 0, explanation: "ABC, 100% O2, IV diazepam/midazolam." },
  { id: 129, module: "Dental Surgery", type: "MCQ", question: "Cleft lip and palate is due to failure of fusion of:", options: ["Frontonasal", "Maxillary and medial nasal", "Mandibular", "All"], answer: 1, explanation: "Failure of fusion of maxillary process with medial nasal process." },
  { id: 130, module: "Dental Surgery", type: "MCQ", question: "Best time for cleft lip repair:", options: ["Birth", "3 months", "1 year", "5 years"], answer: 1, explanation: "Rule of 10s: 10 weeks, 10lbs, 10g Hb." },
  { id: 131, module: "Dental Surgery", type: "MCQ", question: "Best time for cleft palate repair:", options: ["3 months", "6-12 months", "2 years", "5 years"], answer: 1, explanation: "6-12 months, before speech development." },
  { id: 132, module: "Dental Surgery", type: "MCQ", question: "Orthognathic surgery for mandibular prognathism:", options: ["LeFort I", "BSSO", "Genioplasty", "Distraction"], answer: 1, explanation: "Bilateral sagittal split osteotomy for mandibular setback." },
  { id: 133, module: "Dental Surgery", type: "MCQ", question: "Distraction osteogenesis is used for:", options: ["Cyst", "Bone lengthening", "Extraction", "Biopsy"], answer: 1, explanation: "Gradual bone lengthening by callus distraction." },
  { id: 134, module: "Dental Surgery", type: "MCQ", question: "Most common complication of BSSO:", options: ["Bleeding", "Nerve injury", "Infection", "Relapse"], answer: 1, explanation: "Inferior alveolar nerve paresthesia is most common." },
  { id: 135, module: "Dental Surgery", type: "Practical", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800", question: "Instrument shown is used for:", options: ["Extraction", "Flap reflection", "Suturing", "Bone cutting"], answer: 0, explanation: "Extraction forceps for grasping and removing tooth." },
  { id: 136, module: "Dental Surgery", type: "Practical", image: "", question: "This swelling in floor of mouth is likely:", options: ["Ranula", "Abscess", "Tumor", "Calculus"], answer: 0, explanation: "Ranula: bluish translucent swelling of sublingual gland." },
  { id: 137, module: "Dental Surgery", type: "MCQ", question: "First aid for avulsed tooth:", options: ["Dry storage", "Milk/saliva", "Water", "Discard"], answer: 1, explanation: "Store in milk, saline, or saliva. Reimplant within 60 min." },
  { id: 138, module: "Dental Surgery", type: "MCQ", question: "Splinting time for avulsed tooth:", options: ["1 week", "2 weeks", "4 weeks", "8 weeks"], answer: 1, explanation: "Flexible splint for 2 weeks to prevent ankylosis." },
  { id: 139, module: "Dental Surgery", type: "MCQ", question: "Alveoloplasty is done to:", options: ["Remove cyst", "Smooth alveolar ridge", "Extract tooth", "Biopsy"], answer: 1, explanation: "Smooth bony spicules after multiple extractions for denture." },
  { id: 140, module: "Dental Surgery", type: "MCQ", question: "Frenectomy is done to:", options: ["Remove frenum", "Extract tooth", "Drain abscess", "Biopsy"], answer: 0, explanation: "Remove abnormal frenum causing diastema or speech issues." },
  { id: 141, module: "Dental Surgery", type: "MCQ", question: "Most common odontogenic infection:", options: ["Viral", "Fungal", "Bacterial", "Parasitic"], answer: 2, explanation: "Mixed bacterial infection from caries or pericoronitis." },
  { id: 142, module: "Dental Surgery", type: "MCQ", question: "Antibiotic of choice for odontogenic infection:", options: ["Penicillin", "Tetracycline", "Erythromycin", "Metronidazole"], answer: 0, explanation: "Penicillin/Amoxicillin first line. Add metronidazole for anaerobes." },
  { id: 143, module: "Dental Surgery", type: "MCQ", question: "Cellulitis differs from abscess by:", options: ["Pain", "Swelling", "No pus collection", "Fever"], answer: 2, explanation: "Cellulitis = diffuse, no pus. Abscess = localized pus." },
  { id: 144, module: "Dental Surgery", type: "MCQ", question: "Danger space extends from skull base to:", options: ["Hyoid", "Diaphragm", "Clavicle", "Sternum"], answer: 1, explanation: "Infection can spread to mediastinum." },
  { id: 145, module: "Dental Surgery", type: "MCQ", question: "Necrotizing fasciitis is:", options: ["Benign tumor", "Rapidly spreading infection", "Cyst", "Fracture"], answer: 1, explanation: "Life threatening necrotizing infection of fascia." },
  { id: 146, module: "Dental Surgery", type: "MCQ", question: "Most common site for implant placement:", options: ["Maxillary anterior", "Mandibular posterior", "Palate", "Tongue"], answer: 1, explanation: "Mandibular posterior has best bone density." },
  { id: 147, module: "Dental Surgery", type: "MCQ", question: "Sinus lift is done for:", options: ["Cyst", "Implant in posterior maxilla", "Fracture", "Tumor"], answer: 1, explanation: "Bone graft in sinus to increase height for implants." },
  { id: 148, module: "Dental Surgery", type: "MCQ", question: "BRONJ is associated with:", options: ["Antibiotics", "Bisphosphonates", "Steroids", "Diabetes"], answer: 1, explanation: "Bisphosphonate Related OsteoNecrosis of Jaw." },
  { id: 149, module: "Dental Surgery", type: "MCQ", question: "Precaution before extraction in patient on bisphosphonates:", options: ["Stop drug", "No extraction", "Hyperbaric O2", "Consult physician"], answer: 3, explanation: "High risk of BRONJ. Consult physician first." },
  { id: 150, module: "Dental Surgery", type: "MCQ", question: "Post-op instruction after extraction:", options: ["Hot fomentation", "Cold fomentation", "No rinse", "Smoking"], answer: 1, explanation: "Ice pack first 24h. No smoking, no straw, no vigorous rinsing." },
  { id: 151, module: "Dental Surgery", type: "MCQ", question: "Gauze pack after extraction should be bitten for:", options: ["10 min", "30 min", "2 hours", "24 hours"], answer: 1, explanation: "30 min firm pressure for clot formation." },
  { id: 152, module: "Dental Surgery", type: "MCQ", question: "Indication for extraction:", options: ["Irreversible pulpitis", "Mobility grade 3", "Caries", "All of above"], answer: 3, explanation: "Non-restorable tooth, severe perio, infection, orthodontic reasons." },
  { id: 153, module: "Dental Surgery", type: "MCQ", question: "Contraindication for IANB:", options: ["Infection", "Pregnancy", "Diabetes", "Hypertension"], answer: 0, explanation: "LA in infected area may fail and spread infection." },
  { id: 154, module: "Dental Surgery", type: "MCQ", question: "Positive aspiration means:", options: ["In vessel", "In muscle", "In bone", "In air"], answer: 0, explanation: "Blood in syringe = needle in blood vessel. Reposition." },
  { id: 155, module: "Dental Surgery", type: "MCQ", question: "Most common cause of trismus post extraction:", options: ["Infection", "Muscle trauma", "Allergy", "Fracture"], answer: 1, explanation: "Trauma to medial pterygoid during IANB or surgery." },
  { id: 156, module: "Dental Surgery", type: "MCQ", question: "Treatment of trismus:", options: ["Antibiotics", "Heat + physiotherapy", "Extraction", "Surgery"], answer: 1, explanation: "Heat, NSAIDs, mouth opening exercises." },
  { id: 157, module: "Dental Surgery", type: "MCQ", question: "Most common benign tumor of jaw in children:", options: ["Ameloblastoma", "Dentigerous cyst", "Osteosarcoma", "Fibroma"], answer: 1, explanation: "Dentigerous cyst is most common developmental cyst." },
  { id: 158, module: "Dental Surgery", type: "MCQ", question: "Ameloblastoma is:", options: ["Malignant", "Benign but locally aggressive", "Cyst", "Infection"], answer: 1, explanation: "Benign but locally invasive with high recurrence." },
  { id: 159, module: "Dental Surgery", type: "MCQ", question: "Treatment of ameloblastoma:", options: ["Curettage", "Resection with margin", "Radiation", "Chemotherapy"], answer: 1, explanation: "Wide resection with 1cm margin due to infiltrative nature." },
  { id: 160, module: "Dental Surgery", type: "MCQ", question: "Most common site for ameloblastoma:", options: ["Maxilla", "Mandibular ramus", "Palate", "Tongue"], answer: 1, explanation: "80% occur in posterior mandible, ramus area." },
  { id: 161, module: "Dental Surgery", type: "MCQ", question: "Oral and maxillofacial surgeon can prescribe:", options: ["Antibiotics", "Analgesics", "Both", "None"], answer: 2, explanation: "Can prescribe drugs related to surgical management." },
  { id: 162, module: "Dental Surgery", type: "MCQ", question: "Informed consent must include:", options: ["Diagnosis", "Treatment options", "Risks", "All of above"], answer: 3, explanation: "Patient must understand diagnosis, options, risks, benefits." },
  { id: 163, module: "Dental Surgery", type: "MCQ", question: "Sterilization of surgical instruments:", options: ["Boiling", "Autoclave", "Alcohol", "UV"], answer: 1, explanation: "Autoclave 121C 15psi for 15-20 min is gold standard." },
  { id: 164, module: "Dental Surgery", type: "MCQ", question: "Universal precaution includes:", options: ["Gloves", "Mask", "Eye protection", "All"], answer: 3, explanation: "Treat all patients as potentially infectious." },
  { id: 165, module: "Dental Surgery", type: "MCQ", question: "Most common emergency in dental office:", options: ["Cardiac arrest", "Syncope", "Anaphylaxis", "Seizure"], answer: 1, explanation: "Vasovagal syncope is most common. Lay patient flat." },
  { id: 166, module: "Dental Surgery", type: "MCQ", question: "Treatment of anaphylaxis:", options: ["Oxygen", "Adrenaline IM", "Antihistamine", "All"], answer: 3, explanation: "ABC, 0.3-0.5mg adrenaline IM, O2, antihistamine, steroids." },
  { id: 167, module: "Dental Surgery", type: "MCQ", question: "LA with no vasoconstrictor used in:", options: ["Hypertensive patient", "Diabetic", "Pregnant", "Child"], answer: 0, explanation: "Avoid adrenaline in uncontrolled hypertension. Use plain lidocaine." },
  { id: 168, module: "Dental Surgery", type: "MCQ", question: "Aspiration of tooth into airway requires:", options: ["Observation", "Bronchoscopy", "Antibiotics", "Extraction"], answer: 1, explanation: "Rigid bronchoscopy to retrieve foreign body." },
  { id: 169, module: "Dental Surgery", type: "MCQ", question: "Post-op bleeding controlled by:", options: ["Pressure pack", "Suturing", "Cautery", "All of the above"], answer: 3, explanation: "First: pressure pack 30min. If fails: suture, ligation, or cautery." },
  { id: 170, module: "Dental Surgery", type: "MCQ", question: "Most common nerve injured in sagittal split osteotomy:", options: ["Facial nerve", "Inferior alveolar nerve", "Lingual nerve", "Trigeminal nerve"], answer: 1, explanation: "IAN runs in path of osteotomy. Paresthesia common but usually temporary." },
  { id: 171, module: "Dental Surgery", type: "MCQ", question: "Zygomatic bone fracture causes:", options: ["Trismus", "Diplopia", "Epistaxis", "All of above"], answer: 3, explanation: "Zygoma fracture: trismus, diplopia, infraorbital nerve paresthesia, epistaxis." },
  { id: 172, module: "Dental Surgery", type: "MCQ", question: "Best radiograph for impacted 3rd molar:", options: ["Bitewing", "OPG", "PA", "CBCT"], answer: 1, explanation: "OPG is standard. CBCT if close to IAN canal."
  },
// ===== 60 MORE ORAL & MAXILLOFACIAL SURGERY QUESTIONS =====
{
    id: 173,
    module: "Dental Surgery",
    type: "MCQ",
    question: "The space of Pirogoff is located:",
    options: ["Submandibular region", "Floor of mouth", "Between mylohyoid and hyoglossus", "Infratemporal fossa"],
    answer: 2,
    explanation: "Pirogoff space is between mylohyoid and hyoglossus. Important for spread of submandibular infection."
  },
  {
    id: 174,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Most common cause of oroantral communication:",
    options: ["Trauma", "Extraction of maxillary molar", "Cyst", "Tumor"],
    answer: 1,
    explanation: "Extraction of maxillary 1st/2nd molar with close sinus floor is most common cause."
  },
  {
    id: 175,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Treatment of small oroantral fistula <2mm:",
    options: ["Immediate closure", "Blood clot + antibiotics", "Sinus lift", "Implant"],
    answer: 1,
    explanation: "Small OAC <2mm usually closes with blood clot. Antibiotics + decongestants for 5-7 days."
  },
  {
    id: 176,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Buccal fat pad flap is used for:",
    options: ["Gingival graft", "Closure of OAF", "Cyst enucleation", "Fracture fixation"],
    answer: 1,
    explanation: "Buccal fat pad is excellent for closure of large oroantral fistulas."
  },
  {
    id: 177,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Most common complication of sagittal split osteotomy:",
    options: ["Bad split", "Nerve injury", "Bleeding", "Infection"],
    answer: 1,
    explanation: "Inferior alveolar nerve paresthesia is most common. Usually temporary."
  },
  {
    id: 178,
    module: "Dental Surgery",
    type: "MCQ",
    question: "LeFort II fracture is also called:",
    options: ["Guerin fracture", "Pyramidal fracture", "Craniofacial disjunction", "Floating palate"],
    answer: 1,
    explanation: "LeFort II = Pyramidal fracture. Involves nose, maxilla, orbital floor."
  },
  {
    id: 179,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Sign of LeFort III fracture:",
    options: ["Dish face", "Floating palate", "CSF rhinorrhea", "Trismus"],
    answer: 2,
    explanation: "LeFort III = craniofacial disjunction. CSF rhinorrhea due to skull base involvement."
  },
  {
    id: 180,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Nasotracheal intubation is contraindicated in:",
    options: ["LeFort I", "LeFort II", "LeFort III", "Mandible fracture"],
    answer: 2,
    explanation: "LeFort III involves skull base. Nasotracheal tube can enter cranium."
  },
  {
    id: 181,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Arch bar is used for:",
    options: ["MMF", "Bone grafting", "Cyst treatment", "Implant"],
    answer: 0,
    explanation: "Arch bars with wires are used for maxillomandibular fixation."
  },
  {
    id: 182,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Wire used for MMF:",
    options: ["20 gauge", "24 gauge", "26 gauge", "28 gauge"],
    answer: 1,
    explanation: "24 gauge stainless steel wire is standard for MMF."
  },
  {
    id: 183,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Most common site of zygomatic fracture:",
    options: ["Frontozygomatic suture", "Zygomatic arch", "Infraorbital rim", "All of above"],
    answer: 3,
    explanation: "Zygoma has 4 articulations. All can fracture in tripod fracture."
  },
  {
    id: 184,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Gillies approach is used for:",
    options: ["Mandible", "Zygomatic arch", "Maxilla", "Orbit"],
    answer: 1,
    explanation: "Gillies temporal approach for reduction of depressed zygomatic arch."
  },
  {
    id: 185,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Diplopia after zygoma fracture is due to:",
    options: ["Optic nerve injury", "Entrapment of inferior rectus", "Retinal detachment", "Corneal injury"],
    answer: 1,
    explanation: "Entrapment of inferior rectus muscle in orbital floor fracture."
  },
  {
    id: 186,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Battle sign indicates:",
    options: ["Mandible fracture", "Basilar skull fracture", "Zygoma fracture", "LeFort I"],
    answer: 1,
    explanation: "Battle sign = bruising behind ear. Sign of basilar skull fracture."
  },
  {
    id: 187,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Raccoon eyes indicate:",
    options: ["Orbital fracture", "Basilar skull fracture", "LeFort I", "Nasal fracture"],
    answer: 1,
    explanation: "Periorbital ecchymosis = basilar skull fracture."
  },
  {
    id: 188,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Treatment of condylar fracture in child:",
    options: ["ORIF", "MMF 6 weeks", "Soft diet + physiotherapy", "Extraction"],
    answer: 2,
    explanation: "Children have great remodeling capacity. Conservative management preferred."
  },
  {
    id: 189,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Open reduction is preferred for:",
    options: ["Undisplaced fracture", "Displaced angle fracture", "Greenstick fracture", "Child fracture"],
    answer: 1,
    explanation: "Displaced angle fracture in adult needs ORIF with miniplates."
  },
  {
    id: 190,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Champy plate is used for:",
    options: ["LeFort I", "Mandible", "Zygoma", "Orbit"],
    answer: 1,
    explanation: "Champy’s line of osteosynthesis: ideal lines for miniplate placement in mandible."
  },
  {
    id: 191,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Tension band is placed on:",
    options: ["Inferior border", "Superior border", "Lingual side", "Buccal side"],
    answer: 1,
    explanation: "Tension band on superior border, compression plate on inferior border."
  },
  {
    id: 192,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Most common odontogenic tumor:",
    options: ["Ameloblastoma", "Odontoma", "Myxoma", "Fibroma"],
    answer: 1,
    explanation: "Odontoma is most common odontogenic tumor. Usually asymptomatic."
  },
  {
    id: 193,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Compound odontoma looks like:",
    options: ["Radioopaque mass", "Multiple tooth-like structures", "Soap bubble", "Sunburst"],
    answer: 1,
    explanation: "Compound odontoma = multiple small tooth-like radiopacities."
  },
  {
    id: 194,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Complex odontoma looks like:",
    options: ["Tooth-like structures", "Amorphous radioopaque mass", "Cystic", "Moth eaten"],
    answer: 1,
    explanation: "Complex odontoma = amorphous calcified mass."
  },
  {
    id: 195,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Keratocystic odontogenic tumor is:",
    options: ["Benign", "Aggressive", "Malignant", "Normal"],
    answer: 1,
    explanation: "KCOT is aggressive with high recurrence rate. Thin lining."
  },
  {
    id: 196,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Treatment of large KCOT:",
    options: ["Enucleation", "Marsupialization then enucleation", "Radiation", "Chemotherapy"],
    answer: 1,
    explanation: "Decompress first, then enucleation to reduce recurrence and morbidity."
  },
  {
    id: 197,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Most common salivary gland tumor:",
    options: ["Parotid", "Submandibular", "Sublingual", "Minor"],
    answer: 0,
    explanation: "80% of salivary tumors occur in parotid. 80% of those are benign."
  },
  {
    id: 198,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Warthin tumor occurs most in:",
    options: ["Young females", "Elderly males smokers", "Children", "Pregnant women"],
    answer: 1,
    explanation: "Warthin tumor = papillary cystadenoma lymphomatosum. Elderly male smokers, bilateral in 10%."
  },
  {
    id: 199,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Malignant tumor of salivary gland with perineural spread:",
    options: ["Mucoepidermoid", "Adenoid cystic carcinoma", "Pleomorphic adenoma", "Warthin"],
    answer: 1,
    explanation: "Adenoid cystic carcinoma has propensity for perineural invasion and late metastasis."
  },
  {
    id: 200,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Freys syndrome is due to:",
    options: ["Facial nerve injury", "Auriculotemporal nerve injury", "Trigeminal injury", "Glossopharyngeal injury"],
    answer: 1,
    explanation: "Gustatory sweating after parotid surgery due to aberrant regeneration of auriculotemporal nerve."
  },
  {
    id: 201,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Treatment of Frey syndrome:",
    options: ["Antibiotics", "Botox injection", "Surgery", "Radiation"],
    answer: 1,
    explanation: "Botox injection is treatment of choice for Frey syndrome."
  },
  {
    id: 202,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Most common site of oral cancer:",
    options: ["Buccal mucosa", "Tongue", "Floor of mouth", "Palate"],
    answer: 1,
    explanation: "Lateral border of tongue is most common site for oral SCC."
  },
  {
    id: 203,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Neck dissection that preserves SCM, IJV, SAN:",
    options: ["Radical", "Modified radical", "Selective", "Extended"],
    answer: 1,
    explanation: "Modified radical neck dissection preserves one or more of SCM, IJV, SAN."
  },
  {
    id: 204,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Sentinel lymph node biopsy is used for:",
    options: ["Cyst", "Fracture", "Oral cancer", "Abscess"],
    answer: 2,
    explanation: "SLNB for early oral cancer to check metastasis without full neck dissection."
  },
  {
    id: 205,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Most common site of metastasis of oral cancer:",
    options: ["Liver", "Lung", "Cervical lymph nodes", "Bone"],
    answer: 2,
    explanation: "Cervical lymph nodes are first site of metastasis for oral SCC."
  },
  {
    id: 206,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Radiation dose that causes ORN:",
    options: [">20 Gy", ">40 Gy", ">60 Gy", ">80 Gy"],
    answer: 2,
    explanation: "Risk of ORN increases significantly >60 Gy to jaw."
  },
  {
    id: 207,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Marx protocol is for:",
    options: ["Fracture", "ORN", "Cyst", "Implant"],
    answer: 1,
    explanation: "Marx protocol: HBO before and after surgery in irradiated patients to prevent ORN."
  },
  {
    id: 208,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Bisphosphonate with highest risk of BRONJ:",
    options: ["Oral alendronate", "IV zoledronic acid", "IV pamidronate", "Oral risedronate"],
    answer: 1,
    explanation: "IV zoledronic acid for cancer has highest risk of BRONJ."
  },
  {
    id: 209,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Stage 1 BRONJ treatment:",
    options: ["Resection", "Antibiotics + chlorhexidine rinse", "HBO", "Extraction"],
    answer: 1,
    explanation: "Stage 1: asymptomatic exposed bone. Treat with antibiotics and chlorhexidine."
  },
  {
    id: 210,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Most common complication of LeFort I osteotomy:",
    options: ["Nerve injury", "Bleeding", "Relapse", "Infection"],
    answer: 2,
    explanation: "Skeletal relapse is most common long-term complication."
  },
  {
    id: 211,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Genioplasty is done for:",
    options: ["Maxillary excess", "Mandibular deficiency", "Chin deformity", "Cleft"],
    answer: 2,
    explanation: "Genioplasty = surgery of chin for esthetics or occlusion."
  },
  {
    id: 212,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Distraction rate is:",
    options: ["0.5mm/day", "1mm/day", "2mm/day", "5mm/day"],
    answer: 1,
    explanation: "Standard distraction rate is 1mm per day to allow bone formation."
  },
  {
    id: 213,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Latency period in distraction osteogenesis:",
    options: ["0 days", "3-5 days", "2 weeks", "1 month"],
    answer: 1,
    explanation: "3-5 days latency to allow callus formation before distraction."
  },
  {
    id: 214,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Most common TMJ ankylosis cause:",
    options: ["Trauma", "Infection", "Arthritis", "Tumor"],
    answer: 0,
    explanation: "Trauma is most common cause of TMJ ankylosis, especially in children."
  },
  {
    id: 215,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Treatment of TMJ ankylosis:",
    options: ["Arthroscopy", "Gap arthroplasty", "Medication", "Radiation"],
    answer: 1,
    explanation: "Gap arthroplasty with interpositional material is treatment of choice."
  },
  {
    id: 216,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Best graft material for TMJ ankylosis:",
    options: ["Fat", "Silastic", "Temporalis fascia", "Cartilage"],
    answer: 2,
    explanation: "Temporalis fascia or muscle flap is commonly used as interpositional material."
  },
  {
    id: 217,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Open bite after orthognathic surgery is due to:",
    options: ["Bad split", "Condylar resorption", "Infection", "All"],
    answer: 1,
    explanation: "Condylar resorption after BSSO can cause anterior open bite."
  },
  {
    id: 218,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Nerve most at risk during genioplasty:",
    options: ["Facial", "Mental", "Lingual", "Hypoglossal"],
    answer: 1,
    explanation: "Mental nerve is at risk during genioplasty. Must be identified."
  },
  {
    id: 219,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Most common cause of post-op paresthesia:",
    options: ["Infection", "Nerve stretch", "Hematoma", "Allergy"],
    answer: 1,
    explanation: "Nerve stretch or compression during surgery is most common cause."
  },
  {
    id: 220,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Recovery time for neurapraxia:",
    options: ["Days to weeks", "Months", "Years", "Never"],
    answer: 0,
    explanation: "Neurapraxia recovers in days to weeks. Axonotmesis takes months."
  },
  {
    id: 221,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Best test for nerve injury:",
    options: ["X-ray", "CT", "2-point discrimination", "OPG"],
    answer: 2,
    explanation: "2-point discrimination and light touch test for sensory nerve function."
  },
  {
    id: 222,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Treatment of persistent paresthesia >6 months:",
    options: ["Wait", "Steroids", "Nerve repair", "Radiation"],
    answer: 2,
    explanation: "If no recovery in 6 months, consider nerve repair or grafting."
  },
  {
    id: 223,
    module: "Dental Surgery",
    type: "Practical",
    image: "",
    question: "This extraoral swelling is most likely:",
    options: ["Parotid tumor", "Submandibular sialolith", "Lymph node", "Abscess"],
    answer: 0,
    explanation: "Swelling in front of ear = parotid gland tumor."
  },
  {
    id: 224,
    module: "Dental Surgery",
    type: "Practical",
    image: "",
    question: "Instrument used to reflect mucoperiosteum:",
    options: ["Elevator", "Periosteal elevator", "Forceps", "Scissors"],
    answer: 1,
    explanation: "Molt or Howarth periosteal elevator is used to reflect flap."
  },
  {
    id: 225,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Most common cause of post-op hematoma:",
    options: ["Hypertension", "Infection", "Poor technique", "Allergy"],
    answer: 0,
    explanation: "Uncontrolled hypertension is major risk factor for post-op bleeding."
  },
  {
    id: 226,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Treatment of large hematoma:",
    options: ["Ice pack", "Drainage", "Antibiotics", "Observation"],
    answer: 1,
    explanation: "Large expanding hematoma needs surgical drainage and hemostasis."
  },
  {
    id: 227,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Local complication of LA injection:",
    options: ["Syncope", "Trismus", "Allergy", "All"],
    answer: 3,
    explanation: "LA complications: syncope, trismus, allergy, hematoma, paresthesia."
  },
  {
    id: 228,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Maximum articaine with epinephrine:",
    options: ["4mg/kg", "5mg/kg", "7mg/kg", "10mg/kg"],
    answer: 1,
    explanation: "Max articaine = 5mg/kg with epi. Less than lidocaine."
  },
  {
    id: 229,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Sign of intravascular injection:",
    options: ["Tachycardia", "Bradycardia", "Hypotension", "No sign"],
    answer: 0,
    explanation: "Adrenaline in vessel causes tachycardia, palpitation. Stop injection."
  },
  {
    id: 230,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Most common cause of death in oral surgery:",
    options: ["Bleeding", "Airway obstruction", "Cardiac arrest", "Anaphylaxis"],
    answer: 1,
    explanation: "Airway obstruction due to blood, swelling, or foreign body is most common cause."
  },
  {
    id: 231,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Position for patient who faints:",
    options: ["Sitting", "Trendelenburg", "Prone", "Lateral"],
    answer: 1,
    explanation: "Trendelenburg: legs elevated, head down to increase cerebral blood flow."
  },
  {
    id: 232,
    module: "Dental Surgery",
    type: "MCQ",
    question: "Drug of choice for anaphylaxis:",
    options: ["Antihistamine", "Steroid", "Adrenaline", "Oxygen"],
    answer: 2,
    explanation: "0.3-0.5mg adrenaline IM is drug of choice for anaphylaxis."
  },
  
// ===== 50 ORAL PATHOLOGY QUESTIONS - FINAL LOCKED VERSION =====
{
    id: 233,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Most common oral mucosal lesion is:",
    options: ["Leukoplakia", "Aphthous ulcer", "Lichen planus", "Candidiasis"],
    answer: 1,
    explanation: "Recurrent aphthous stomatitis is the most common oral mucosal lesion. It affects about 20 percent of people."
  },
  {
    id: 234,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Leukoplakia is classified as:",
    options: ["Benign", "Premalignant", "Malignant", "Infectious"],
    answer: 1,
    explanation: "Leukoplakia is a premalignant white patch that cannot be scraped off. It has a 5 to 10 percent risk of turning into cancer."
  },
  {
    id: 235,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Erythroplakia has higher malignant potential compared to:",
    options: ["Leukoplakia", "Lichen planus", "Candidiasis", "Fordyce granules"],
    answer: 0,
    explanation: "Erythroplakia has about 90 percent risk of dysplasia or cancer. This risk is much higher than that of leukoplakia."
  },
  {
    id: 236,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Oral submucous fibrosis is most commonly associated with:",
    options: ["Smoking", "Areca nut chewing", "Alcohol", "Virus"],
    answer: 1,
    explanation: "Areca nut chewing is the main cause. It is a premalignant condition common in Asia with 7 to 13 percent transformation rate."
  },
  {
    id: 237,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Trismus in oral submucous fibrosis is due to:",
    options: ["Muscle atrophy", "Fibrosis of bands", "Bone involvement", "Nerve damage"],
    answer: 1,
    explanation: "Fibrous bands in the buccal mucosa and pterygomandibular raphe cause restricted mouth opening."
  },
  {
    id: 238,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Lichen planus is an:",
    options: ["Infectious disease", "Autoimmune disease", "Genetic disease", "Nutritional disease"],
    answer: 1,
    explanation: "Lichen planus is a T cell mediated autoimmune disease. Wickham striae is the characteristic finding."
  },
  {
    id: 239,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Most common clinical type of oral lichen planus is:",
    options: ["Erosive", "Reticular", "Plaque", "Atrophic"],
    answer: 1,
    explanation: "Reticular type with white lacy striae is most common and usually without symptoms."
  },
  {
    id: 240,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Pemphigus vulgaris affects:",
    options: ["Skin only", "Mucosa only", "Both skin and mucosa", "Bone"],
    answer: 2,
    explanation: "Pemphigus vulgaris causes intraepithelial blisters. In 70 percent of cases oral lesions appear before skin lesions."
  },
  {
    id: 241,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Nikolsky sign is positive in:",
    options: ["Lichen planus", "Pemphigus", "Aphthous ulcer", "Herpes"],
    answer: 1,
    explanation: "In pemphigus, lateral pressure causes sloughing of epithelium due to loss of cell to cell attachment."
  },
  {
    id: 242,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Bullous pemphigoid blister is located:",
    options: ["Intraepithelial", "Subepithelial", "Intraosseous", "Intravascular"],
    answer: 1,
    explanation: "Bullous pemphigoid is a subepithelial blistering disease. It is less severe than pemphigus vulgaris."
  },
  {
    id: 243,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Primary herpetic gingivostomatitis is caused by:",
    options: ["Herpes simplex virus type 1", "Herpes simplex virus type 2", "Varicella zoster virus", "Epstein Barr virus"],
    answer: 0,
    explanation: "Herpes simplex virus type 1 causes primary infection in children under 6 years. It presents with fever and multiple oral ulcers."
  },
  {
    id: 244,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Recurrent herpes labialis occurs most commonly on:",
    options: ["Buccal mucosa", "Tongue", "Vermillion border of lip", "Palate"],
    answer: 2,
    explanation: "Recurrent herpes occurs at the vermillion border of the lip because the virus stays latent in the trigeminal ganglion."
  },
  {
    id: 245,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Angular cheilitis is most commonly caused by:",
    options: ["Virus", "Fungus", "Bacteria", "Vitamin deficiency"],
    answer: 1,
    explanation: "Candida albicans is the most common cause. It is also seen with vitamin B12, iron and folate deficiency."
  },
  {
    id: 246,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Thrush refers to:",
    options: ["Bacterial infection", "Fungal infection", "Viral infection", "Autoimmune condition"],
    answer: 1,
    explanation: "Oral candidiasis. White curdy plaques that can be wiped off leaving a red base."
  },
  {
    id: 247,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Geographic tongue is also called:",
    options: ["Malignant glossitis", "Premalignant glossitis", "Benign migratory glossitis", "Infectious glossitis"],
    answer: 2,
    explanation: "Benign condition. It shows map like areas of lost papillae with a yellow white border that keeps changing."
  },
  {
    id: 248,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Fissured tongue is associated with:",
    options: ["Down syndrome", "Melkersson Rosenthal syndrome", "Both", "None"],
    answer: 2,
    explanation: "Fissured tongue is seen in Down syndrome and in Melkersson Rosenthal syndrome."
  },
  {
    id: 249,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Median rhomboid glossitis is considered to be:",
    options: ["Developmental defect", "Chronic candidal infection", "Neoplastic", "Autoimmune"],
    answer: 1,
    explanation: "It is central papillary atrophy of the tongue. Now it is considered a form of chronic candidiasis."
  },
  {
    id: 250,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Most common benign tumor of oral cavity is:",
    options: ["Fibroma", "Papilloma", "Hemangioma", "Lipoma"],
    answer: 0,
    explanation: "Irritation fibroma due to chronic trauma is the most common benign soft tissue tumor in the mouth."
  },
  {
    id: 251,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Pyogenic granuloma is a:",
    options: ["True neoplasm", "Reactive hyperplasia", "Infectious lesion", "Cyst"],
    answer: 1,
    explanation: "It is a reactive lesion due to trauma or hormones. It bleeds easily. It is common during pregnancy."
  },
  {
    id: 252,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Peripheral giant cell granuloma originates from:",
    options: ["Bone", "Periodontal ligament", "Gingiva", "Muscle"],
    answer: 1,
    explanation: "It is a reactive lesion arising from the periodontal ligament. It appears as a purple red gingival mass with giant cells."
  },
  {
    id: 253,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Most common salivary gland tumor is:",
    options: ["Warthin tumor", "Mucoepidermoid carcinoma", "Pleomorphic adenoma", "Adenoid cystic carcinoma"],
    answer: 2,
    explanation: "Pleomorphic adenoma is also called mixed tumor. It is the most common benign salivary gland tumor."
  },
  {
    id: 254,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Mucocele is most commonly an:",
    options: ["Neoplasm", "Retention cyst", "Extravasation cyst", "Infectious lesion"],
    answer: 2,
    explanation: "Most mucoceles are extravasation type due to trauma to a minor salivary gland duct."
  },
  {
    id: 255,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Ranula is a mucocele of which gland:",
    options: ["Parotid gland", "Submandibular gland", "Sublingual gland", "Palatal gland"],
    answer: 2,
    explanation: "Ranula is a mucocele of the sublingual gland. It appears as a blue dome shaped swelling in the floor of mouth."
  },
  {
    id: 256,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Most common odontogenic cyst is:",
    options: ["Dentigerous cyst", "Radicular cyst", "Keratocyst", "Lateral periodontal cyst"],
    answer: 1,
    explanation: "Radicular cyst arises from a necrotic pulp. It is the most common odontogenic cyst."
  },
  {
    id: 257,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Dentigerous cyst is associated with:",
    options: ["Erupted tooth", "Impacted tooth", "Deciduous tooth", "Supernumerary tooth"],
    answer: 1,
    explanation: "It encloses the crown of an unerupted tooth and attaches at the cemento enamel junction."
  },
  {
    id: 258,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Keratocystic odontogenic tumor is characterized by:",
    options: ["Thick lining", "Satellite cysts", "Thin corrugated lining", "Calcification"],
    answer: 2,
    explanation: "It has a thin 6 to 10 cell thick parakeratinized corrugated lining. It has a high recurrence rate."
  },
  {
    id: 259,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Multiple keratocystic odontogenic tumors are seen in:",
    options: ["Dentigerous cyst syndrome", "Gorlin syndrome", "Radicular cyst syndrome", "Nasopalatine cyst syndrome"],
    answer: 1,
    explanation: "Multiple keratocystic odontogenic tumors are seen in Gorlin syndrome also called nevoid basal cell carcinoma syndrome."
  },
  {
    id: 260,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Most common odontogenic tumor is:",
    options: ["Ameloblastoma", "Odontoma", "Myxoma", "Fibroma"],
    answer: 1,
    explanation: "Odontoma is the most common odontogenic tumor. It is benign and hamartomatous."
  },
  {
    id: 261,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Ameloblastoma on radiograph shows:",
    options: ["Unilocular radiolucency", "Multilocular soap bubble appearance", "Sunburst appearance", "Ground glass appearance"],
    answer: 1,
    explanation: "It shows a multilocular radiolucency with soap bubble or honeycomb appearance. It is locally aggressive."
  },
  {
    id: 262,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Most common site for ameloblastoma is:",
    options: ["Maxilla", "Mandibular ramus", "Palate", "Lip"],
    answer: 1,
    explanation: "Eighty percent of ameloblastomas occur in the posterior mandible especially the ramus area."
  },
  {
    id: 263,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Osteosarcoma on radiograph shows:",
    options: ["Soap bubble appearance", "Sunburst appearance", "Ground glass appearance", "Honeycomb appearance"],
    answer: 1,
    explanation: "Sunburst appearance due to perpendicular spicules of bone. It is a malignant bone tumor."
  },
  {
    id: 264,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Fibrous dysplasia on radiograph shows:",
    options: ["Radiolucent lesion", "Radiopaque lesion", "Ground glass appearance", "Moth eaten appearance"],
    answer: 2,
    explanation: "Ground glass appearance. It is a benign fibro osseous lesion."
  },
  {
    id: 265,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Cherubism is a:",
    options: ["Infectious condition", "Hereditary fibro osseous condition", "Neoplastic condition", "Cystic condition"],
    answer: 1,
    explanation: "It is autosomal dominant. It causes bilateral multilocular radiolucencies giving a chubby cherub face."
  },
  {
    id: 266,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Most common benign bone tumor of jaw is:",
    options: ["Osteosarcoma", "Osteoma", "Osteoblastoma", "Chondrosarcoma"],
    answer: 1,
    explanation: "Osteoma is the most common benign bone tumor of the jaw. It usually occurs in the mandible."
  },
  {
    id: 267,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Multiple osteomas are seen in:",
    options: ["Paget disease", "Gardner syndrome", "Fibrous dysplasia", "Cherubism"],
    answer: 1,
    explanation: "Gardner syndrome has osteomas plus multiple intestinal polyps plus supernumerary teeth."
  },
  {
    id: 268,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Paget disease of bone shows:",
    options: ["Cotton wool appearance", "Ground glass appearance", "Soap bubble appearance", "Sunburst appearance"],
    answer: 0,
    explanation: "Cotton wool radiopacities due to disorganized bone formation. Alkaline phosphatase level is high."
  },
  {
    id: 269,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Most common malignant tumor of oral cavity is:",
    options: ["Adenocarcinoma", "Squamous cell carcinoma", "Melanoma", "Lymphoma"],
    answer: 1,
    explanation: "Squamous cell carcinoma accounts for more than 90 percent of oral malignancies."
  },
  {
    id: 270,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Most common site for oral squamous cell carcinoma is:",
    options: ["Tongue", "Floor of mouth", "Buccal mucosa", "Palate"],
    answer: 0,
    explanation: "Lateral border of the tongue is the most common site for oral squamous cell carcinoma."
  },
  {
    id: 271,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Risk factors for oral cancer include:",
    options: ["Tobacco", "Alcohol", "Human papilloma virus", "All of the above"],
    answer: 3,
    explanation: "Tobacco, alcohol, human papilloma virus and betel nut are major risk factors. Tobacco and alcohol have a combined effect."
  },
  {
    id: 272,
    module: "Oral Pathology",
    type: "MCQ",
    question: "T1 tumor size according to cancer staging is:",
    options: ["Less than 1 cm", "Less than or equal to 2 cm", "Less than 3 cm", "Less than 4 cm"],
    answer: 1,
    explanation: "T1 means tumor less than or equal to 2 cm. T2 is 2 to 4 cm. T3 is more than 4 cm."
  },
  {
    id: 273,
    module: "Oral Pathology",
    type: "MCQ",
    question: "First site of metastasis for oral cancer is:",
    options: ["Liver", "Lung", "Cervical lymph nodes", "Brain"],
    answer: 2,
    explanation: "Cervical lymph nodes are the first site of metastasis for oral cancer."
  },
  {
    id: 274,
    module: "Oral Pathology",
    type: "Practical",
    image: "",
    question: "White patch that cannot be wiped off is most likely:",
    options: ["Candidiasis", "Leukoplakia", "Lichen planus", "Geographic tongue"],
    answer: 1,
    explanation: "Leukoplakia is a non scrapable white patch. Biopsy is needed to rule out dysplasia."
  },
  {
    id: 275,
    module: "Oral Pathology",
    type: "Practical",
    image: "",
    question: "Red velvety patch on floor of mouth is most likely:",
    options: ["Erythroplakia", "Leukoplakia", "Candidiasis", "Aphthous ulcer"],
    answer: 0,
    explanation: "Erythroplakia has the highest malignant potential about 90 percent. It needs urgent biopsy."
  },
  {
    id: 276,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Kaposi sarcoma is associated with:",
    options: ["Human papilloma virus", "Human immunodeficiency virus", "Epstein Barr virus", "Herpes simplex virus"],
    answer: 1,
    explanation: "Kaposi sarcoma is seen in AIDS patients. It is a purple vascular lesion related to human herpes virus 8."
  },
  {
    id: 277,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Burkitt lymphoma is associated with:",
    options: ["Human papilloma virus", "Epstein Barr virus", "Human immunodeficiency virus", "Herpes simplex virus"],
    answer: 1,
    explanation: "Epstein Barr virus is associated. Jaw involvement is common in African children."
  },
  {
    id: 278,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Multiple myeloma on radiograph shows:",
    options: ["Soap bubble appearance", "Punch out lesions", "Sunburst appearance", "Ground glass appearance"],
    answer: 1,
    explanation: "Multiple punched out radiolucent lesions in the skull and jaw with no reactive bone formation."
  },
  {
    id: 279,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Diabetes mellitus can cause:",
    options: ["Increased caries", "Periodontal disease", "Candidiasis", "All of the above"],
    answer: 3,
    explanation: "Diabetes increases risk of caries, severe periodontal disease, candidiasis and delayed healing."
  },
  {
    id: 280,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Scurvy due to vitamin C deficiency causes:",
    options: ["Gingival bleeding", "Tooth mobility", "Delayed healing", "All of the above"],
    answer: 3,
    explanation: "Vitamin C deficiency causes bleeding gums, poor wound healing, anemia and petechiae."
  },
  {
    id: 281,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Most common cause of oral pigmentation is:",
    options: ["Smoking", "Amalgam tattoo", "Physiologic pigmentation", "Addison disease"],
    answer: 0,
    explanation: "Smoker melanosis is the most common cause of oral pigmentation."
  },
  {
    id: 282,
    module: "Oral Pathology",
    type: "MCQ",
    question: "Amalgam tattoo appears as a:",
    options: ["White lesion", "Red lesion", "Blue gray lesion", "Yellow lesion"],
    answer: 2,
    explanation: "Blue gray macule due to silver particles in the mucosa from a dental procedure. It is benign."
  },
// ===== 60 ORAL ANATOMY QUESTIONS - FINAL VERIFIED =====
{
    id: 283,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Total number of permanent teeth in human dentition is:",
    options: ["20", "28", "32", "36"],
    answer: 2,
    explanation: "Adult permanent dentition has 32 teeth. There are 16 teeth in each arch including 4 third molars."
  },
  {
    id: 284,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Total number of deciduous teeth is:",
    options: ["16", "20", "24", "28"],
    answer: 1,
    explanation: "Deciduous dentition has 20 teeth. There are 10 teeth in each arch. There are no premolars or third molars."
  },
  {
    id: 285,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Dental formula for permanent dentition is:",
    options: ["2 1 2 3 over 2 1 2 3", "2 1 2 2 over 2 1 2 2", "2 1 2 3 over 2 1 2 3", "2 1 3 3 over 2 1 3 3"],
    answer: 2,
    explanation: "Permanent dental formula is 2 incisors 1 canine 2 premolars 3 molars in each quadrant of the mouth."
  },
  {
    id: 286,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Dental formula for deciduous dentition is:",
    options: ["2 1 0 2 over 2 1 0 2", "2 1 1 2 over 2 1 1 2", "2 1 0 3 over 2 1 0 3", "2 1 2 2 over 2 1 2 2"],
    answer: 0,
    explanation: "Deciduous dental formula is 2 incisors 1 canine 0 premolars 2 molars in each quadrant of the mouth."
  },
  {
    id: 287,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Largest tooth in permanent dentition is:",
    options: ["Maxillary central incisor", "Maxillary canine", "Maxillary first molar", "Mandibular first molar"],
    answer: 3,
    explanation: "Mandibular first molar is the largest tooth in terms of crown size and root mass."
  },
  {
    id: 288,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Longest tooth in permanent dentition is:",
    options: ["Maxillary central incisor", "Maxillary canine", "Mandibular canine", "Maxillary premolar"],
    answer: 1,
    explanation: "Maxillary canine is the longest tooth due to its long root."
  },
  {
    id: 289,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Tooth with single cusp is:",
    options: ["Molar", "Premolar", "Canine", "Incisor"],
    answer: 3,
    explanation: "Incisors have a single cusp which is called incisal edge."
  },
  {
    id: 290,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Tooth that usually has single root and single canal is:",
    options: ["Maxillary molar", "Mandibular molar", "Maxillary premolar", "Maxillary central incisor"],
    answer: 3,
    explanation: "Maxillary central incisor usually has one root and one canal."
  },
  {
    id: 291,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Tooth that erupts first in permanent dentition is:",
    options: ["Maxillary central incisor", "Mandibular central incisor", "First molar", "Canine"],
    answer: 2,
    explanation: "First permanent molar erupts at 6 years of age. It is called the 6 year molar."
  },
  {
    id: 292,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Tooth that erupts last in permanent dentition is:",
    options: ["Second molar", "Third molar", "Second premolar", "Canine"],
    answer: 1,
    explanation: "Third molar erupts between 17 to 25 years of age. It is also called wisdom tooth."
  },
  {
    id: 293,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Enamel is thickest at:",
    options: ["Cervical region", "Cusp tip", "Middle third", "Root surface"],
    answer: 1,
    explanation: "Enamel is thickest at the cusp tips and incisal edges. It is thinnest at the cervical region."
  },
  {
    id: 294,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Dentin forms what percentage of tooth structure by volume:",
    options: ["50 percent", "60 percent", "70 percent", "80 percent"],
    answer: 2,
    explanation: "Dentin forms about 70 percent of the tooth structure by volume."
  },
  {
    id: 295,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Cells that form dentin are called:",
    options: ["Ameloblasts", "Odontoblasts", "Cementoblasts", "Osteoblasts"],
    answer: 1,
    explanation: "Odontoblasts form dentin. They are located at the periphery of the pulp."
  },
  {
    id: 296,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Cells that form enamel are called:",
    options: ["Ameloblasts", "Odontoblasts", "Cementoblasts", "Osteoblasts"],
    answer: 0,
    explanation: "Ameloblasts form enamel. They are present only during tooth development."
  },
  {
    id: 297,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Hardest tissue in the human body is:",
    options: ["Dentin", "Cementum", "Enamel", "Bone"],
    answer: 2,
    explanation: "Enamel is the hardest tissue in the human body due to high mineral content."
  },
  {
    id: 298,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Cementum covers:",
    options: ["Crown", "Root", "Both crown and root", "Neck of tooth"],
    answer: 1,
    explanation: "Cementum covers the root of the tooth and helps in attachment of periodontal ligament."
  },
  {
    id: 299,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Number of cusps on maxillary first molar is:",
    options: ["3", "4", "5", "6"],
    answer: 2,
    explanation: "Maxillary first molar has 5 cusps. There are 2 buccal cusps 2 palatal cusps and 1 distal cusp."
  },
  {
    id: 300,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Number of roots on maxillary first molar is:",
    options: ["1", "2", "3", "4"],
    answer: 2,
    explanation: "Maxillary first molar has 3 roots. There are 2 buccal roots and 1 palatal root."
  },
  {
    id: 301,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Number of roots on mandibular first molar is:",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "Mandibular first molar has 2 roots. There is 1 mesial root and 1 distal root."
  },
  {
    id: 302,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Contact area between two maxillary anterior teeth is located in:",
    options: ["Cervical third", "Middle third", "Incisal third", "No contact"],
    answer: 2,
    explanation: "Contact area between maxillary anterior teeth is located in the incisal third."
  },
  {
    id: 303,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Contact area between posterior teeth is located in:",
    options: ["Cervical third", "Middle third", "Occlusal third", "No contact"],
    answer: 1,
    explanation: "Contact area between posterior teeth is located in the middle third of the crown."
  },
  {
    id: 304,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Embrasure is the space:",
    options: ["Between two teeth", "Between tooth and gingiva", "Between two cusps", "In the pulp chamber"],
    answer: 0,
    explanation: "Embrasure is the V shaped space between two adjacent teeth."
  },
  {
    id: 305,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Curve of Spee is present in:",
    options: ["Maxillary arch", "Mandibular arch", "Both arches", "None"],
    answer: 1,
    explanation: "Curve of Spee is the anteroposterior curvature of the mandibular arch."
  },
  {
    id: 306,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Curve of Wilson is present in:",
    options: ["Anteroposterior direction", "Mediolateral direction", "Vertical direction", "None"],
    answer: 1,
    explanation: "Curve of Wilson is the mediolateral curvature of the occlusal plane."
  },
  {
    id: 307,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Overjet refers to:",
    options: ["Vertical overlap", "Horizontal overlap", "No overlap", "Lateral overlap"],
    answer: 1,
    explanation: "Overjet is the horizontal distance between upper and lower anterior teeth."
  },
  {
    id: 308,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Overbite refers to:",
    options: ["Vertical overlap", "Horizontal overlap", "No overlap", "Lateral overlap"],
    answer: 0,
    explanation: "Overbite is the vertical overlap of upper anterior teeth over lower anterior teeth."
  },
  {
    id: 309,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Normal overjet is about:",
    options: ["0 mm", "1 to 2 mm", "5 mm", "10 mm"],
    answer: 1,
    explanation: "Normal overjet is 1 to 2 millimeters."
  },
  {
    id: 310,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Normal overbite is about:",
    options: ["0 percent", "10 to 20 percent", "50 percent", "100 percent"],
    answer: 1,
    explanation: "Normal overbite is 10 to 20 percent of the lower incisor crown height."
  },
  {
    id: 311,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Primary function of enamel is:",
    options: ["Sensation", "Protection", "Nutrition", "Growth"],
    answer: 1,
    explanation: "Enamel protects the underlying dentin and pulp from mechanical and chemical injury."
  },
  {
    id: 312,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Dentinal tubules run from:",
    options: ["Pulp to enamel", "Enamel to pulp", "Cementum to dentin", "Bone to tooth"],
    answer: 0,
    explanation: "Dentinal tubules run from the pulp to the dentinoenamel junction."
  },
  {
    id: 313,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Pulp chamber is largest in:",
    options: ["Incisors", "Canines", "Premolars", "Molars"],
    answer: 3,
    explanation: "Pulp chamber is largest in molars due to their large crown size."
  },
  {
    id: 314,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Number of cusps on mandibular first premolar is:",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "Mandibular first premolar has 2 cusps. There is 1 large buccal cusp and 1 small lingual cusp."
  },
  {
    id: 315,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Number of cusps on maxillary first premolar is:",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "Maxillary first premolar has 2 cusps of almost equal size."
  },
  {
    id: 316,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Tooth with deepest developmental groove is:",
    options: ["Incisor", "Canine", "Premolar", "Molar"],
    answer: 3,
    explanation: "Molars have deep developmental grooves on the occlusal surface."
  },
  {
    id: 317,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Shovel shaped incisors are common in:",
    options: ["Caucasians", "Mongoloids", "Negroids", "All races"],
    answer: 1,
    explanation: "Shovel shaped incisors are common in Mongoloid races."
  },
  {
    id: 318,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Talon cusp is seen on:",
    options: ["Molar", "Premolar", "Canine", "Incisor"],
    answer: 3,
    explanation: "Talon cusp is an accessory cusp seen on the lingual surface of anterior teeth."
  },
  {
    id: 319,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Carabelli cusp is seen on:",
    options: ["Maxillary first molar", "Mandibular first molar", "Maxillary premolar", "Mandibular premolar"],
    answer: 0,
    explanation: "Carabelli cusp is an accessory cusp on the mesiopalatal cusp of maxillary first molar."
  },
  {
    id: 320,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Dens in dente is a developmental anomaly of:",
    options: ["Root", "Crown", "Pulp", "Cementum"],
    answer: 1,
    explanation: "Dens in dente is invagination of the crown during tooth development."
  },
  {
    id: 321,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Taurodontism refers to:",
    options: ["Short root", "Long root", "Large pulp chamber", "Small pulp chamber"],
    answer: 2,
    explanation: "Taurodontism is enlarged pulp chamber with short roots. It is seen in molars."
  },
  {
    id: 322,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Dilaceration refers to:",
    options: ["Bent root", "Extra root", "Missing root", "Short root"],
    answer: 0,
    explanation: "Dilaceration is a sharp bend in the root or crown of a tooth."
  },
  {
    id: 323,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Gemination results in:",
    options: ["Two separate teeth", "One tooth with bifid crown", "Missing tooth", "Extra cusp"],
    answer: 1,
    explanation: "Gemination is incomplete division of one tooth germ resulting in one tooth with bifid crown."
  },
  {
    id: 324,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Fusion results in:",
    options: ["Two separate teeth", "One large tooth", "Missing tooth", "Extra cusp"],
    answer: 1,
    explanation: "Fusion is union of two tooth germs resulting in one large tooth."
  },
  {
    id: 325,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Anodontia means:",
    options: ["Extra teeth", "Missing teeth", "Small teeth", "Large teeth"],
    answer: 1,
    explanation: "Anodontia is complete absence of teeth."
  },
  {
    id: 326,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Hypodontia means:",
    options: ["Extra teeth", "One to five missing teeth", "All teeth missing", "Small teeth"],
    answer: 1,
    explanation: "Hypodontia is absence of one to five teeth excluding third molars."
  },
  {
    id: 327,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Oligodontia means:",
    options: ["Extra teeth", "One to five missing teeth", "Six or more missing teeth", "Small teeth"],
    answer: 2,
    explanation: "Oligodontia is absence of six or more teeth excluding third molars."
  },
  {
    id: 328,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Macrodontia refers to:",
    options: ["Small teeth", "Large teeth", "Normal teeth", "Missing teeth"],
    answer: 1,
    explanation: "Macrodontia is abnormally large teeth."
  },
  {
    id: 329,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Microdontia refers to:",
    options: ["Small teeth", "Large teeth", "Normal teeth", "Missing teeth"],
    answer: 0,
    explanation: "Microdontia is abnormally small teeth. It is common in maxillary lateral incisors."
  },
  {
    id: 330,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Periodontal ligament attaches tooth to:",
    options: ["Gingiva", "Alveolar bone", "Cementum", "Pulp"],
    answer: 1,
    explanation: "Periodontal ligament attaches cementum of tooth to alveolar bone."
  },
  {
    id: 331,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Gingival sulcus depth in health is about:",
    options: ["0.5 mm", "2 to 3 mm", "5 mm", "10 mm"],
    answer: 1,
    explanation: "Normal gingival sulcus depth is 2 to 3 millimeters."
  },
  {
    id: 332,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Attached gingiva is:",
    options: ["Loose", "Firm and stippled", "Red and swollen", "Absent"],
    answer: 1,
    explanation: "Attached gingiva is firm, pale pink and stippled like orange peel."
  },
  {
    id: 333,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Interdental papilla has shape of:",
    options: ["Square", "Triangle", "Circle", "Rectangle"],
    answer: 1,
    explanation: "Interdental papilla is pyramidal or triangular in shape in the anterior region."
  },
  {
    id: 334,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Palate is divided into:",
    options: ["Hard and soft", "Anterior and posterior", "Left and right", "Upper and lower"],
    answer: 0,
    explanation: "Palate is divided into anterior hard palate and posterior soft palate."
  },
  {
    id: 335,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Rugae are present on:",
    options: ["Soft palate", "Hard palate", "Tongue", "Floor of mouth"],
    answer: 1,
    explanation: "Palatal rugae are ridges present on the anterior part of hard palate."
  },
  {
    id: 336,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Tongue is covered by:",
    options: ["Simple epithelium", "Stratified squamous epithelium", "Columnar epithelium", "Cuboidal epithelium"],
    answer: 1,
    explanation: "Tongue is covered by stratified squamous epithelium."
  },
  {
    id: 337,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Taste buds are most numerous on:",
    options: ["Tip of tongue", "Dorsum of tongue", "Circumvallate papillae", "Fungiform papillae"],
    answer: 2,
    explanation: "Circumvallate papillae contain the largest number of taste buds."
  },
  {
    id: 338,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Saliva is secreted mainly by:",
    options: ["Minor salivary glands", "Parotid gland", "Submandibular gland", "Sublingual gland"],
    answer: 1,
    explanation: "Parotid gland contributes about 50 percent of total saliva."
  },
  {
    id: 339,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Parotid duct opens opposite to:",
    options: ["Maxillary first molar", "Maxillary second molar", "Mandibular first molar", "Mandibular second molar"],
    answer: 1,
    explanation: "Parotid duct opens opposite the maxillary second molar."
  },
  {
    id: 340,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Wharton duct is duct of:",
    options: ["Parotid gland", "Submandibular gland", "Sublingual gland", "Minor salivary gland"],
    answer: 1,
    explanation: "Wharton duct is the duct of submandibular gland. It opens at the sublingual caruncle."
  },
  {
    id: 341,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Rivinus ducts are ducts of:",
    options: ["Parotid gland", "Submandibular gland", "Sublingual gland", "Minor salivary gland"],
    answer: 2,
    explanation: "Rivinus ducts are multiple ducts of sublingual gland."
  },
  {
    id: 342,
    module: "Oral Anatomy",
    type: "MCQ",
    question: "Universal numbering system for permanent teeth uses numbers from:",
    options: ["1 to 20", "1 to 28", "1 to 32", "1 to 36"],
    answer: 2,
    explanation: "Universal system numbers permanent teeth from 1 to 32 starting from maxillary right third molar."
  },

  
];

let score = 0;
let answered = 0;
let currentFilter = "all";

function renderQuestions() {
  const container = document.getElementById('quizContainer');
  const search = document.getElementById('searchInput').value.toLowerCase();
  
  const filtered = questions.filter(q => {
    const matchModule = currentFilter === "all" || q.module === currentFilter;
    const matchSearch = q.question.toLowerCase().includes(search) || q.module.toLowerCase().includes(search);
    return matchModule && matchSearch;
  });
  
  container.innerHTML = filtered.map(q => `
    <div class="quiz-card" data-id="${q.id}">
      <div class="meta">
        <span class="tag">${q.module}</span>
        <span class="tag ${q.type === 'Practical' ? 'practical' : ''}">${q.type}</span>
      </div>
      <div class="question">${q.id}. ${q.question}</div>
      ${q.image ? `<img src="${q.image}" class="quiz-img" alt="Dental image">` : ''}
      <div class="options">
        ${q.options.map((opt, i) => `<button onclick="checkAnswer(${q.id}, ${i}, this)">${String.fromCharCode(65+i)}. ${opt}</button>`).join('')}
      </div>
      <div class="explanation" id="exp-${q.id}">
        <strong>Explanation:</strong> ${q.explanation}
      </div>
    </div>
  `).join('');
}

function checkAnswer(qid, selected, btn) {
  const q = questions.find(x => x.id === qid);
  const card = btn.closest('.quiz-card');
  const buttons = card.querySelectorAll('.options button');
  
  buttons.forEach(b => b.disabled = true);
  
  if(selected === q.answer) {
    btn.classList.add('correct');
    score++;
  } else {
    btn.classList.add('wrong');
    buttons[q.answer].classList.add('correct');
  }
  
  answered++;
  document.getElementById('score').innerText = `Score: ${score} / ${answered}`;
  document.getElementById(`exp-${qid}`).classList.add('show');
}

// Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.module;
    renderQuestions();
  }
});

document.getElementById('searchInput').oninput = renderQuestions;

renderQuestions();