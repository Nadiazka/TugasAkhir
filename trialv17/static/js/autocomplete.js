function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var wilayah = ["Andir", "Arcamanik", "Astana Anyar", "Babakan Ciparay", "Bandung Kidul",
"Bandung Kulon", "Bandung Wetan", "Batununggal", "Bojongloa Kaler", "Bojongloa Kidul",
"Cibeunying Kaler", "Cibeunying Kidul", "Cibeunying Kidul", "Cibiru", "Cicadas", "Cicendo",
"Cidadap", "Cinambo", "Coblong", "Gedebage", "Kiaracondong", "Lengkong", "Margacinta",
"Panyileukan", "Rancasari", "Regol", "Sukajadi", "Sukasari", "Sumur Bandung", "Ujung Berung",
"Puskesmas Ahmad Yani", "Puskesmas Antapani", "Puskesmas Arcamanik", "Puskesmas Astana Anyar",
"Puskesmas Babakan Sari", "Puskesmas Babakan Surabaya", "Puskesmas Babatan", "Puskesmas Balai Kota",
"Puskesmas Campaka Arum", "Puskesmas Caringin", "Puskesmas Cetarip", "Puskesmas Cibiru",
"Puskesmas Cibolerang", "Puskesmas Cibuntu", "Puskesmas Cigondewah", "Puskesmas Cijagra Baru",
"Puskesmas Cijagra Lama 1", "Puskesmas Cijagra Lama", "Puskesmas Cijerah", "Puskesmas Cikutra Lama",
"Puskesmas Cilengkrang", "Puskesmas Cinambo", "Puskesmas Cipadung", "Puskesmas Cipaku",
"Puskesmas Cipamokalan", "Puskesmas CIUMBULEUIT", "Puskesmas Dago", "Puskesmas Derawati",
"Puskesmas Garuda", "Puskesmas Girimande", "Puskesmas Griya Antapani", "Puskesmas Gumuruh",
"Puskesmas Ibrahim Aji 1", "Puskesmas Ibrahim Aji", "Puskesmas Jatihandap", "Puskesmas Jejaway",
"Puskesmas Karangsetra", "Puskesmas Kopo", "Puskesmas Kujangsari", "Puskesmas Ledeng", "Puskesmas LIOGETENG",
"Puskesmas Mandala Mekar", "Puskesmas Margahayu Raya", "Puskesmas Mengger", "Puskesmas Moh Ramdhan",
"Puskesmas Neglasari", "Puskesmas Padasuka", "Puskesmas Pagarsih", "Puskesmas Pamulang", "Puskesmas Panghegar",
"Puskesmas Panyileukan", "Puskesmas Pasawahan", "Puskesmas Pasir Kaliki", "Puskesmas Pasirlayung", "Puskesmas Pasirluyu", "Puskesmas Pasundan",
"Puskesmas Pelindung Hewan", "Puskesmas Puter", "Puskesmas Riung Bandung", "Puskesmas Rusunawa", "Puskesmas Salam",
"Puskesmas Sarijadi", "Puskesmas Sekejati", "Puskesmas Sekeloa", "Puskesmas Sindang Jaya", "Puskesmas Sukahaji",
"Puskesmas Sukajadi", "Puskesmas Sukapakir", "Puskesmas Sukarasa", "Puskesmas Sukawarna", "Puskesmas Suryalaya",
"Puskesmas Talaga Bodas", "Puskesmas Taman Sari", "Puskesmas Tamblong", "Puskesmas Ujung Berung Indah"];

var penyakit = ["Kolera", "Kolera, tidak spesifik", "Demam Tifoid dan Paratifoid", "Demam Tifoid", 
"Paratyphoid fever A", "Paratyphoid fever B", "Paratyphoid fever C", "Paratyphoid fever, unspecified", 
"Infeksi salmonela lainnya", "Salmonella enteritis", "Salmonella septicaemia", "Localized salmonella infections",
 "Other specified salmonella infections", "Infeksi salmonela, tidak spesifik", "Sigelosis", 
 "Shigellosis due to Shigella dysenteriae", "Shigellosis due to Shigella flexneri", 
 "Shigellosis due to Shigella boydii", "Shigellosis due to Shigella sonnei", "Sigelosis lainnya", "Sigelosis, tidak spesifik",
  "Infeksi usus karena bakteri lainnya", "Enteropathogenic Escherichia coli infection", "Enterotoxigenic Escherichia coli infection",
  "Enteroinvasive Escherichia coli infection", "Enterohaemorrhagic Escherichia coli infection", "Other intestinal Escherichia coli infections",
   "Campylobacter enteritis", "Enteritis due to Yersinia enterocolitica", "Enterocolitis due to Clostridium difficile", 
   "Other specified bacterial intestinal infections", "Infeksi usus karena bakteri lainnya, tidak spesifik", "Keracunan makanan karena bakteri lainnya",
    "Foodborne staphylococcal intoxication", "Botulism", "Foodborne Clostridium perfringens [Clostridium welchii] into", 
    "Foodborne Vibrio parahaemolyticus intoxication", "Foodborne Bacillus cereus intoxication", "Other specified bacterial foodborne intoxications", 
    "Keracunan makanan karena bakteri lainnya, tidak spesifik", "Amubiasis, Disentri amuba", "Acute amoebic dysentery", "Chronic intestinal amoebiasis",
     "Amoebic nondysenteric colitis", "Amoeboma of intestine", "Amoebic liver abscess", "Amoebic lung abscess (J99.8*)", "Amoebic brain abscess (G07*)", 
     "Cutaneous amoebiasis", "Amoebic infection of other sites", "Amubiasis, tidak spesifik", "Other protozoal intestinal diseases", "Balantidiasis", 
     "Giardiasis [lambliasis]", "Cryptosporidiosis", "Isosporiasis", "Other specified protozoal intestinal diseases", "Protozoal intestinal disease, unspecified", 
     "Viral and other specified intestinal infections", "Rotaviral enteritis", "Acute gastroenteropathy due to Norwalk agent", "Adenoviral enteritis",
      "Other viral enteritis", "Viral intestinal infection, unspecified", "Infeksi usus spesifik lainnya", "Diarrhoea and gastroenteritis of presumed infectious origin", 
      "Respiratory tuberculosis, bacteriologically and histological", "Tuberculosis of lung, confirmed by sputum microscopy with or", "Tuberculosis of lung, confirmed by culture only", 
      "Tuberculosis of lung, confirmed histologically", "Tuberculosis of lung, confirmed by unspecified means", "Tuberculosis of intrathoracic lymph nodes, confirmed bacteri",
      "Tuberculosis of larynx, trachea and bronchus, confirmed", "Tuberculous pleurisy, confirmed bacteriologically and histol", "Primary respiratory tuberculosis, confirmed bacteriologicall",
      "Other respiratory tuberculosis, confirmed bacteriologically ", "Respiratory tuberculosis unspecified, confirmed bacteriologi", "Respiratory tuberculosis, not confirmed bacteriologically or",
      "TBC Klinis", "Tuberculosis of lung, bacteriological and histological exami", "Tuberculosis of lung, without mention of bacteriological or", 
      "Tuberculosis of intrathoracic lymph nodes, without mention o", "Tuberculosis of larynx, trachea and bronchus, without mentio", "Tuberculous pleurisy, without mention of bacteriological",
       "Primary respiratory tuberculosis without mention of bacterio", "Other respiratory tuberculosis, without mention of bacteriol", "Respiratory tuberculosis unspecified, without mention of", 
       "Tuberculosis of nervous system", "Meningitis Tuberkulosis", "Meningeal tuberculoma (G07*)", "Other tuberculosis of nervous system", "Tuberculosis of nervous system, unspecified (G99.8*)",
        "Tuberkulosis organ lainnya", "Tuberculosis of bones and joints", "Tuberculosis of genitourinary system", "Tuberculous peripheral lymphadenopathy", 
        "Tuberculosis of intestines, peritoneum and mesenteric glands", "Tuberculosis of skin and subcutaneous tissue", "Tuberculosis of eye", "Tuberculosis of ear", 
        "Tuberculosis of adrenal glands (E35.1*)", "Tuberculosis of other specified organs", "Tuberkulosis miliaris", "Acute miliary tuberculosis of a single specified site", 
        "Acute miliary tuberculosis of multiple sites", "Acute miliary tuberculosis, unspecified", "Other miliary tuberculosis", "Miliary tuberculosis, unspecified", 
        "Plague", "Bubonic plague", "Cellulocutaneous plague", "Pneumonic plague", "Plague meningitis", "Septicaemic plague", "Other forms of plague", "Pes/Sampar, tidak spesifik", 
        "Tularaemia", "Ulceroglandular tularaemia", "Oculoglandular tularaemia", "Pulmonary tularaemia", "Gastrointestinal tularaemia", "Generalized tularaemia", "Other forms of tularaemia",
        "Tularaemia, unspecified", "Anthrax", "Cutaneous anthrax", "Pulmonary anthrax", "Gastrointestinal anthrax", "Anthrax septicaemia", "Other forms of anthrax", "Antraks, tidak spesifik", 
        "Brucellosis", "Brucellosis due to Brucella melitensis", "Brucellosis due to Brucella abortus", "Brucellosis due to Brucella suis", "Brucellosis due to Brucella canis", "Other brucellosis", 
        "Brucellosis, unspecified", "Glanders and melioidosis", "Glanders", "Acute and fulminating melioidosis", "Subacute and chronic melioidosis", "Other melioidosis", "Melioidosis, unspecified", 
        "Rat-bite fevers", "Spirillosis", "Streptobacillosis", "Rat-bite fever, unspecified", "Erysipeloid", "Cutaneous erysipeloid", "Erysipelothrix septicaemia", "Other forms of erysipeloid", 
        "Erysipeloid, unspecified", "Leptospirosis", "Leptospirosis icterohaemorrhagica", "Other forms of leptospirosis", "Leptospirosis, tidak spesifik", 
        "Other zoonotic bacterial diseases, not elsewhere classified", "Pasteurellosis", "Cat-scratch disease", "Extraintestinal yersiniosis", "Other specified zoonotic bacterial diseases, not elsewhere c",
         "Zoonotic bacterial disease, unspecified", "Kusta ", "Kusta I/T (MB)", "Tuberculoid leprosy", "Borderline tuberculoid leprosy", "Borderline leprosy", "Borderline lepromatous leprosy", 
         "Kusta I/T B/L (PB)", "Other forms of leprosy", "Kusta, tidak spesifik", "Infection due to other mycobacteria", "Pulmonary mycobacterial infection", "Cutaneous mycobacterial infection", 
         "Other mycobacterial infections", "Mycobacterial infection, unspecified", "Listeriosis", "Cutaneous listeriosis", "Listerial meningitis and meningoencephalitis", "Listerial septicaemia", 
         "Other forms of listeriosis", "Listeriosis, unspecified", "Tetanus neonatorum", "Obstetrical tetanus", "Tetanus lainnya", "Difteri", "Pharyngeal diphtheria", "Nasopharyngeal diphtheria", 
         "Laryngeal diphtheria", "Cutaneous diphtheria", "Difteri lainnya", "Difteri, tidak spesifik", "Batuk rejan", "Whooping cough due to Bordetella pertussis", 
         "Whooping cough due to Bordetella parapertussis", "Whooping cough due to other Bordetella species", "Batuk rejan, tidak spesifik", "Scarlet fever", "Infeksi meningokok", 
         "Meningococcal meningitis (G01*)", "Waterhouse-Friderichsen syndrome (E35.1*)", "Acute meningococcaemia", "Chronic meningococcaemia", "Meningococcaemia, unspecified", "Meningococcal heart disease", 
         "Infeksi meningokok lainnya", "Infeksi meningokok, tidak spesifik", "Streptococcal septicaemia", "Septicaemia due to streptococcus, group A", "Septicaemia due to streptococcus, group B", 
         "Septicaemia due to streptococcus, group D", "Septicaemia due to Streptococcus pneumoniae", "Other streptococcal septicaemia", "Streptococcal septicaemia, unspecified", "Septisemia lainnya", 
         "Septicaemia due to Staphylococcus aureus", "Septicaemia due to other specified staphylococcus", "Septicaemia due to unspecified staphylococcus", "Septicaemia due to Haemophilus influenzae", 
         "Septicaemia due to anaerobes", "Septicaemia due to other Gram-negative organisms", "Septisemia spesifik lainnya", "Septisemia, tidak spesifik", "Actinomycosis", "Pulmonary actinomycosis", 
         "Abdominal actinomycosis", "Cervicofacial actinomycosis", "Actinomycotic septicaemia", "Other forms of actinomycosis", "Actinomycosis, unspecified", "Nocardiosis", "Pulmonary nocardiosis", 
         "Cutaneous nocardiosis", "Other forms of nocardiosis", "Nocardiosis, unspecified", "Bartonellosis", "Systemic bartonellosis", "Cutaneous and mucocutaneous bartonellosis", 
         "Other forms of bartonellosis", "Bartonellosis, unspecified", "Erysipelas", "Other bacterial diseases, not elsewhere classified", "Gas gangrene", "Legionnaires disease", 
         "Nonpneumonic Legionnaires disease [Pontiac fever]", "Toxic shock syndrome", "Brazilian purpuric fever", "Other specified bacterial diseases", "Bacterial infection of unspecified site", 
         "Staphylococcal infection, unspecified", "Streptococcal infection, unspecified", "Haemophilus influenzae infection, unspecified", "Mycoplasma infection, unspecified", 
         "Other bacterial infections of unspecified site", "Bacterial infection, unspecified", "Sifilis kongenital/bawaan", "Early congenital syphilis, symptomatic", "Early congenital syphilis, latent", 
         "Early congenital syphilis, unspecified", "Late congenital syphilitic oculopathy", "Late congenital neurosyphilis [juvenile neurosyphilis]", "Other late congenital syphilis, symptomatic", 
         "Late congenital syphilis, latent", "Late congenital syphilis, unspecified", "Sifilis kongenital, tidak spesifik", "Sifilis dini", "Primary genital syphilis", "Primary anal syphilis", 
         "Primary syphilis of other sites", "Secondary syphilis of skin and mucous membranes", "Other secondary syphilis", "Early syphilis, latent", "Sifilis dini, spesifik", "Late syphilis", 
         "Cardiovascular syphilis", "Symptomatic neurosyphilis", "Asymptomatic neurosyphilis", "Neurosyphilis, unspecified", "Other symptomatic late syphilis", "Late syphilis, latent", 
         "Late syphilis, unspecified", "Other and unspecified syphilis", "Latent syphilis, unspecified as early or late", "Sifilis lainnya, tidak spesifik", "Infeksi gonokok", 
         "Gonococcal infection of lower genitourinary tract without pe", "Gonococcal infection of lower genitourinary tract with periu", "Gonococcal pelviperitonitis and other gonococcal genitourina", 
         "Gonococcal infection of eye", "Gonococcal infection of musculoskeletal system", "Gonococcal pharyngitis", "Gonococcal infection of anus and rectum", "Infeksi gonokok lainnya", 
         "Infeksi gonokok, tidak spesifik", "Chlamydial lymphogranuloma (venereum)", "Other sexually transmitted chlamydial diseases", "Chlamydial infection of lower genitourinary tract", 
         "Chlamydial infection of pelviperitoneum and other genitourin", "Chlamydial infection of genitourinary tract, unspecified", "Chlamydial infection of anus and rectum", 
         "Chlamydial infection of pharynx", "Sexually transmitted chlamydial infection of other sites", "Chancroid", "Granuloma inguinale", "Trichomoniasis", "Urogenital trichomoniasis", 
         "Trichomoniasis of other sites", "Trichomoniasis, unspecified", "Herpes simplex genitalis", "Herpesviral infection of genitalia and urogenital tract", 
         "Herpesviral infection of perianal skin and rectum", "Herpes simplex genitalis, tidak spesifik", "Other predominantly sexually transmitted diseases, not elsew", 
         "Anogenital (venereal) warts", "Other specified predominantly sexually transmitted diseases", "Unspecified sexually transmitted disease", "Nonvenereal syphilis", "Frambusia", 
         "Initial lesions of yaws", "Multiple papillomata and wet crab yaws", "Other early skin lesions of yaws", "Hyperkeratosis of yaws", "Gummata and ulcers of yaws", "Gangosa", 
         "Bone and joint lesions of yaws", "Other manifestations of yaws", "Latent yaws", "Frambusia, tidak spesifik", "Pinta [carate]", "Primary lesions of pinta", 
         "Intermediate lesions of pinta", "Late lesions of pinta", "Mixed lesions of pinta", "Pinta, unspecified", "Relapsing fevers", "Louse-borne relapsing fever", "Tick-borne relapsing fever", 
         "Relapsing fever, unspecified", "Other spirochaetal infections", "Necrotizing ulcerative stomatitis", "Other Vincents infections", "Lyme disease", "Other specified spirochaetal infections", 
         "Spirochaetal infection, unspecified", "Chlamydia psittaci infection", "Trachoma", "Initial stage of trachoma", "Active stage of trachoma", "Trachoma, unspecified", 
         "Other diseases caused by chlamydiae", "Chlamydial conjunctivitis (H13.1*)", "Other chlamydial diseases", "Chlamydial infection, unspecified", "Typhus fever", 
         "Epidemic louse-borne typhus fever due to Rickettsia prowazek", "Recrudescent typhus [Brills disease]", "Typhus fever due to Rickettsia typhi", "Typhus fever due to Rickettsia tsutsugamushi", 
         "Typhus fever, unspecified", "Spotted fever [tick-borne rickettsioses]", "Spotted fever due to Rickettsia rickettsii", "Spotted fever due to Rickettsia conorii", 
         "Spotted fever due to Rickettsia sibirica", "Spotted fever due to Rickettsia australis", "Other spotted fevers", "Spotted fever, unspecified", "Q fever", "Other rickettsioses", "Trench fever", 
         "Rickettsialpox due to Rickettsia akari", "Other specified rickettsioses", "Rickettsiosis, unspecified", "Poliomielitis", "Acute paralytic poliomyelitis, vaccine-associated", 
         "Acute paralytic poliomyelitis, wild virus, imported", "Acute paralytic poliomyelitis, wild virus, indigenous", "Acute paralytic poliomyelitis, other and unspecified", "Acute nonparalytic poliomyelitis", 
         "Poliomielitis akut, tidak spesifik", "Slow virus infections of central nervous system", "Creutzfeldt-Jakob disease", "Subacute sclerosing panencephalitis", "Progressive multifocal leukoencephalopathy", 
         "Other slow virus infections of central nervous system", "Slow virus infection of central nervous system, unspecified", "Rabies", "Sylvatic rabies", "Urban rabies", "Rabies, tidak spesifik", 
         "Mosquito-borne viral encephalitis", "Japanese encephalitis", "Western equine encephalitis", "Eastern equine encephalitis", "St Louis encephalitis", "Australian encephalitis", "California encephalitis", 
         "Rocio virus disease", "Other mosquito-borne viral encephalitis", "Mosquito-borne viral encephalitis, unspecified", "Tick-borne viral encephalitis", "Far Eastern tick-borne encephalitis [Russian spring-summer", 
         "Central European tick-borne encephalitis", "Other tick-borne viral encephalitis", "Tick-borne viral encephalitis, unspecified", "Other viral encephalitis, not elsewhere classified", "Enteroviral encephalitis (G05.1*)", 
         "Adenoviral encephalitis (G05.1*)", "Arthropod-borne viral encephalitis, unspecified", "Other specified viral encephalitis", "Unspecified viral encephalitis", "Meningitis karena virus", "Enteroviral meningitis (G02.0*)", 
         "Adenoviral meningitis (G02.0*)", "Lymphocytic choriomeningitis", "Other viral meningitis", "Meningitis karena virus, tidak spesifik", "Other viral infections of central nervous system, not elsewh", 
         "Enteroviral exanthematous fever [Boston exanthem]", "Epidemic vertigo", "Other specified viral infections of central nervous system", "Unspecified viral infection of central nervous system", "Dengue fever [classical dengue]", 
         "Demam berdarah / DBD ", "Other mosquito-borne viral fevers", "Chikungunya", "Onyong-nyong fever", "Venezuelan equine fever", "West Nile fever", "Rift Valley fever", "Other specified mosquito-borne viral fevers", 
         "Mosquito-borne viral fever, unspecified", "Other arthropod-borne viral fevers, not elsewhere classified", "Oropouche virus disease", "Sandfly fever", "Colorado tick fever", "Other specified arthropod-borne viral fevers", 
         "Unspecified arthropod-borne viral fever", "Yellow fever", "Sylvatic yellow fever", "Urban yellow fever", "Yellow fever, unspecified", "Arenaviral haemorrhagic fever", "Junin haemorrhagic fever", "Machupo haemorrhagic fever", 
         "Lassa fever", "Other arenaviral haemorrhagic fevers", "Arenaviral haemorrhagic fever, unspecified", "Other viral haemorrhagic fevers, not elsewhere classified", "Crimean-Congo haemorrhagic fever", "Omsk haemorrhagic fever", 
         "Kyasanur Forest disease", "Marburg virus disease", "Ebola virus disease", "Haemorrhagic fever with renal syndrome", "Other specified viral haemorrhagic fevers", "Unspecified viral haemorrhagic fever", "cxvxz", 
         "Herpesviral [herpes simplex] infections", "Eczema herpeticum", "Herpesviral vesicular dermatitis", "Herpesviral gingivostomatitis and pharyngotonsillitis", "Herpesviral meningitis (G02.0*)", "Herpesviral encephalitis (G05.1*)", 
         "Herpesviral ocular disease", "Disseminated herpesviral disease", "Other forms of herpesviral infection", "Herpesviral infection, unspecified", "Varicella / Cacar air", "Varicella meningitis (G02.0*)", "Varicella encephalitis (G05.1*)", 
         "Varicella pneumonia (J17.1*)", "Varicella with other complications", "Cacar tanpa komplikasi", "Herpes zoster", "Zoster encephalitis (G05.1*)", "Zoster meningitis (G02.0*)", "Zoster with other nervous system involvement", 
         "Zoster ocular disease", "Disseminated zoster", "Zoster with other complications", "Zoster without complication", "Smallpox", "Monkeypox", "Campak", "Measles complicated by encephalitis (G05.1*)", "Measles complicated by meningitis (G02.0*)", 
         "Measles complicated by pneumonia (J17.1*)", "Measles complicated by otitis media (H67.1*)", "Measles with intestinal complications", "Measles with other complications", "Campak tanpa komplikasi", "Rubella [German measles]", 
         "Rubella with neurological complications", "Rubella with other complications", "Rubella without complication", "Viral warts", "Other viral infections characterized by skin and mucous memb", "Other orthopoxvirus infections", "Molluscum contagiosum", 
         "Exanthema subitum [sixth disease]", "Erythema infectiosum [fifth disease]", "Enteroviral vesicular stomatitis with exanthem", "Enteroviral vesicular pharyngitis", "Other specified viral infections characterized by skin and m", 
         "Unspecified viral infection characterized by skin and mucous", "Acute hepatitis A", "Hepatitis A with hepatic coma", "Hepatitis A without hepatic coma", "Acute hepatitis B", "Acute hepatitis B with delta-agent (coinfection) with hepati", 
         "Acute hepatitis B with delta-agent (coinfection) without hep", "Acute hepatitis B without delta-agent with hepatic coma", "Acute hepatitis B without delta-agent and without hepatic co", "Hapatitis karena virus akut", 
         "Acute delta-(super)infection of hepatitis B carrier", "Hepatitis Akut A", "Hepatitis Akut C", "Hepatitis akut karena virus lainnya", "Chronic viral hepatitis", "Chronic viral hepatitis B with delta-agent", "Chronic viral hepatitis B without delta-agent", 
         "Chronic viral hepatitis C", "Other chronic viral hepatitis", "Chronic viral hepatitis, unspecified", "Hepatitis Virus, tidak spesifik", "Unspecified viral hepatitis hepatic with coma", "Unspecified viral hepatitis without hepatic coma", 
         "Human immunodeficiency virus [HIV] disease resulting in infe", "HIV disease resulting in mycobacterial infection", "HIV disease resulting in other bacterial infections", "HIV disease resulting in cytomegaloviral disease", 
         "HIV disease resulting in other viral infections", "HIV disease resulting in candidiasis", "HIV disease resulting in other mycoses", "HIV disease resulting in Pneumocystis carinii pneumonia", "HIV disease resulting in multiple infections", 
         "HIV disease resulting in other infectious and parasitic dise", "HIV disease resulting in unspecified infectious or parasitic", "Human immunodeficiency virus [HIV] disease resulting in mali", "HIV disease resulting in Kaposis sarcoma", 
         "HIV disease resulting in Burkitts lymphoma", "HIV disease resulting in other types of non-Hodgkins lympho", "HIV disease resulting in other malignant neoplasms of lympho", "HIV disease resulting in multiple malignant neoplasms", 
         "HIV disease resulting in other malignant neoplasms", "HIV disease resulting in unspecified malignant neoplasm", "Human immunodeficiency virus [HIV] disease resulting in othe", "HIV disease resulting in encephalopathy", 
         "HIV disease resulting in lymphoid interstitial pneumonitis", "HIV disease resulting in wasting syndrome", "HIV disease resulting in multiple diseases classified elsewh", "Human immunodeficiency virus [HIV] disease resulting in othe", 
         "Acute HIV infection syndrome", "HIV disease resulting in (persistent) generalized lymphadeno", "HIV disease resulting in haematological and immunological", "HIV disease resulting in other specified conditions", "Penyakit HIV tidak spesifik", 
         "Cytomegaloviral disease", "Cytomegaloviral pneumonitis (J17.1*)", "Cytomegaloviral hepatitis (K77.0*)", "Cytomegaloviral pancreatitis (K87.1*)", "Other cytomegaloviral diseases", "Cytomegaloviral disease, unspecified", "Mumps", "Mumps orchitis (N51.1*)", 
         "Mumps meningitis (G02.0*)", "Mumps encephalitis (G05.1*)", "Mumps pancreatitis (K87.1*)", "Mumps dengan komplikasi", "Mumps tanpa komplikasi", "Infectious mononucleosis", "Gammaherpesviral mononucleosis", "Cytomegaloviral mononucleosis", "Other infectious mononucleosis", 
         "Infectious mononucleosis, unspecified", "Viral conjunctivitis", "Keratoconjunctivitis due to adenovirus (H19.2*)", "Conjunctivitis due to adenovirus (H13.1*)", "Viral pharyngoconjunctivitis", "Acute epidemic haemorrhagic conjunctivitis (enteroviral) (H1", 
         "Other viral conjunctivitis (H13.1*)", "Viral conjunctivitis, unspecified", "Other viral diseases, not elsewhere classified", "Epidemic myalgia", "Ross River disease", "Viral carditis", "Retrovirus infections, not elsewhere classified", "Other specified viral diseases", 
         "Viral infection of unspecified site", "Adenovirus infection, unspecified", "Enterovirus infection, unspecified", "Coronavirus infection, unspecified", "Parvovirus infection, unspecified", "Papovavirus infection, unspecified", "Other viral infections of unspecified site", 
         "Viral infection, unspecified", "Dermatophytosis", "Tinea barbae and tinea capitis", "Tinea unguium", "Tinea manuum", "Tinea pedis", "Tinea corporis", "Tinea imbricata", "Tinea cruris", "Other dermatophytoses", "Dermatophytosis, unspecified", "Other superficial mycoses", 
         "Pityriasis versicolor", "Tinea nigra", "White piedra", "Black piedra", "Other specified superficial mycoses", "Superficial mycosis, unspecified", "Candidiasis", "Candidal stomatitis", "Pulmonary candidiasis", "Candidiasis of skin and nail", 
         "Keputihan / Candidiasis of vulva and vagina (N77.1*)", "Candidiasis of other urogenital sites", "Candidal meningitis (G02.1*)", "Candidal endocarditis (I39.8*)", "Candidal septicaemia", "Candidiasis of other sites", "Candidiasis, unspecified", "Coccidioidomycosis", 
         "Acute pulmonary coccidioidomycosis", "Chronic pulmonary coccidioidomycosis", "Pulmonary coccidioidomycosis, unspecified", "Cutaneous coccidioidomycosis", "Coccidioidomycosis meningitis (G02.1*)", "Disseminated coccidioidomycosis", "Other forms of coccidioidomycosis", 
         "Coccidioidomycosis, unspecified", "Histoplasmosis", "Acute pulmonary histoplasmosis capsulati", "Chronic pulmonary histoplasmosis capsulati", "Pulmonary histoplasmosis capsulati, unspecified", "Disseminated histoplasmosis capsulati", "Histoplasmosis capsulati, unspecified", 
         "Histoplasmosis duboisii", "Histoplasmosis, unspecified", "Blastomycosis", "Acute pulmonary blastomycosis", "Chronic pulmonary blastomycosis", "Pulmonary blastomycosis, unspecified", "Cutaneous blastomycosis", "Disseminated blastomycosis", "Other forms of blastomycosis", 
         "Blastomycosis, unspecified", "Paracoccidioidomycosis", "Pulmonary paracoccidioidomycosis", "Disseminated paracoccidioidomycosis", "Other forms of paracoccidioidomycosis", "Paracoccidioidomycosis, unspecified", "Sporotrichosis", "Pulmonary sporotrichosis (J99.8*)", 
         "Lymphocutaneous sporotrichosis", "Disseminated sporotrichosis", "Other forms of sporotrichosis", "Sporotrichosis, unspecified", "Chromomycosis and phaeomycotic abscess", "Cutaneous chromomycosis", "Phaeomycotic brain abscess", "Subcutaneous phaeomycotic abscess and cyst", 
         "Other forms of chromomycosis", "Chromomycosis, unspecified", "Aspergillosis", "Invasive pulmonary aspergillosis", "Other pulmonary aspergillosis", "Tonsillar aspergillosis", "Disseminated aspergillosis", "Other forms of aspergillosis", "Aspergillosis, unspecified", 
         "Cryptococcosis", "Pulmonary cryptococcosis", "Cerebral cryptococcosis", "Cutaneous cryptococcosis", "Osseous cryptococcosis", "Disseminated cryptococcosis", "Other forms of cryptococcosis", "Cryptococcosis, unspecified", "Zygomycosis", "Pulmonary mucormycosis", 
         "Rhinocerebral mucormycosis", "Gastrointestinal mucormycosis", "Cutaneous mucormycosis", "Disseminated mucormycosis", "Mucormycosis, unspecified", "Other zygomycoses", "Zygomycosis, unspecified", "Mycetoma", "Eumycetoma", "Actinomycetoma", "Mycetoma, unspecified", 
         "Other mycoses, not elsewhere classified", "Lobomycosis", "Rhinosporidiosis", "Allescheriasis", "Geotrichosis", "Penicillosis", "Opportunistic mycoses", "Other specified mycoses", "Unspecified mycosis", "Malaria falsifarum / Malaria tropika", 
         "Plasmodium falciparum malaria with cerebral complications", "Other severe and complicated Plasmodium falciparum malaria", "Malaria falsifarum / Malaria tropika, tanpa komplikasi", "Malaria Vivak / Tertiana", "Plasmodium vivax malaria with rupture of spleen", 
         "Plasmodium vivax malaria with other complications", "Malaria Vivak / Tertiana, tanpa komplikasi", "Plasmodium malariae malaria", "Plasmodium malariae malaria with nephropathy", "Plasmodium malariae malaria with other complications", "Plasmodium malariae malaria without complication", 
         "Other parasitologically confirmed malaria", "Plasmodium ovale malaria", "Malaria due to simian plasmodia", "Malaria terbukti secara parasitologi lainnya, tidak spesifik", "Malaria, tidak spesifik", "Leishmaniasis", "Visceral leishmaniasis", "Cutaneous leishmaniasis", 
         "Mucocutaneous leishmaniasis", "Leishmaniasis, unspecified", "African trypanosomiasis", "Gambiense trypanosomiasis", "Rhodesiense trypanosomiasis", "African trypanosomiasis, unspecified", "Chagas disease", "Acute Chagas disease with heart involvement (I41.2*, I98.1*", 
         "Acute Chagas disease without heart involvement", "Chagas disease (chronic) with heart involvement (I41.2*, I9", "Chagas disease (chronic) with digestive system involvement", "Chagas disease (chronic) with nervous system involvement", "Chagas disease (chronic) with other organ involvement", 
         "Toxoplasmosis", "Toxoplasma oculopathy", "Toxoplasma hepatitis (K77.0*)", "Toxoplasma meningoencephalitis (G05.2*)", "Pulmonary toxoplasmosis (J17.3*)", "Toxoplasmosis with other organ involvement", "Toxoplasmosis, unspecified", "Pneumocystosis", "Other protozoal diseases, not elsewhere classified", 
         "Babesiosis", "Acanthamoebiasis", "Naegleriasis", "Other specified protozoal diseases", "Unspecified protozoal disease", "Schistosomiasis [bilharziasis]", "Schistosomiasis due to Schistosoma haematobium [urinary", "Schistosomiasis due to Schistosoma mansoni [intestinal", 
         "Schistosomiasis due to Schistosoma japonicum", "Cercarial dermatitis", "Other schistosomiases", "Schistosomiasis, unspecified", "Other fluke infections", "Opisthorchiasis", "Clonorchiasis", "Dicrocoeliasis", "Fascioliasis", "Paragonimiasis", "Fasciolopsiasis", "Other specified fluke infections", 
         "Fluke infection, unspecified", "Echinococcosis", "Echinococcus granulosus infection of liver", "Echinococcus granulosus infection of lung", "Echinococcus granulosus infection of bone", "Echinococcus granulosus infection, other and multiple sites", "Echinococcus granulosus infection, unspecified", 
         "Echinococcus multilocularis infection of liver", "Echinococcus multilocularis infection, other and multiple si", "Echinococcus multilocularis infection, unspecified", "Echinococcosis, unspecified, of liver", "Echinococcosis, other and unspecified", "Taeniasis", "Taenia solium taeniasis", 
         "Taenia saginata taeniasis", "Taeniasis, unspecified", "Cysticercosis", "Cysticercosis of central nervous system", "Cysticercosis of eye", "Cysticercosis of other sites", "Cysticercosis, unspecified", "Diphyllobothriasis and sparganosis", "Diphyllobothriasis", "Sparganosis", 
         "Other cestode infections", "Hymenolepiasis", "Dipylidiasis", "Other specified cestode infections", "Cestode infection, unspecified", "Dracunculiasis", "Onchocerciasis", "Filariasis", "Filariasis due to Wuchereria bancrofti", "Filariasis due to Brugia malayi", "Filariasis due to Brugia timori", 
         "Loiasis", "Mansonelliasis", "Other filariases", "Filariasis, tidak spesifik", "Trichinellosis", "Hookworm diseases", "Ancylostomiasis", "Necatoriasis", "Other hookworm diseases", "Hookworm disease, unspecified", "Skariasis / Penyakit cacing gelang", "Ascariasis with intestinal complications", 
         "Ascariasis with other complications", "Skariasis / Penyakit cacing gelang, tidak spesifik", "Strongyloidiasis", "Intestinal strongyloidiasis", "Cutaneous strongyloidiasis", "Disseminated strongyloidiasis", "Strongyloidiasis, unspecified", "Trikuriasis / Penyakit cacing cambuk", "Enterobiasis", 
         "Other intestinal helminthiases, not elsewhere classified", "Anisakiasis", "Intestinal capillariasis", "Trichostrongyliasis", "Intestinal angiostrongyliasis", "Mixed intestinal helminthiases", "Other specified intestinal helminthiases", "Unspecified intestinal parasitism", 
         "Intestinal helminthiasis, unspecified", "Intestinal parasitism, unspecified", "Other helminthiases", "Visceral larva migrans", "Gnathostomiasis", "Angiostrongyliasis due to Parastrongylus cantonensis", "Syngamiasis", "Internal hirudiniasis", "Other specified helminthiases", "Helminthiasis, unspecified", 
         "Pediculosis and phthiriasis", "Pediculosis due to Pediculus humanus capitis", "Pediculosis due to Pediculus humanus corporis", "Pediculosis, unspecified", "Phthiriasis", "Mixed pediculosis and phthiriasis", "Skabies", "Myiasis", "Cutaneous myiasis", "Wound myiasis", "Ocular myiasis", "Nasopharyngeal myiasis", 
         "Aural myiasis", "Myiasis of other sites", "Myiasis, unspecified", "Other infestations", "Other acariasis", "Tungiasis [sandflea infestation]", "Other arthropod infestations", "External hirudiniasis", "Other specified infestations", "Infestation, unspecified", "Unspecified parasitic disease", 
         "Sequelae of tuberculosis", "Sequelae of central nervous system tuberculosis", "Sequelae of genitourinary tuberculosis", "Sequelae of tuberculosis of bones and joints", "Sequelae of tuberculosis of other organs", "Sequelae of respiratory and unspecified tuberculosis", "Sequelae of poliomyelitis", "Sequelae of leprosy", 
         "Sequelae of other and unspecified infectious and parasitic d", "Sequelae of trachoma", "Sequelae of viral encephalitis", "Sequelae of viral hepatitis", "Sequelae of other specified infectious and parasitic disease", "Sequelae of unspecified infectious or parasitic disease", 
         "Streptococcus and staphylococcus as the cause of diseases cl", "Streptococcus, group A, as the cause of diseases classified ", "Streptococcus, group B, as the cause of diseases classified ", "Streptococcus, group D, as the cause of diseases classified ", "Streptococcus pneumoniae as the cause of diseases classified", 
         "Other streptococcus as the cause of diseases classified to o", "Unspecified streptococcus as the cause of diseases classifie", "Staphylococcus aureus as the cause of diseases classified to", "Other staphylococcus as the cause of diseases classified to ", "Unspecified staphylococcus as the cause of diseases classifi", 
         "Other bacterial agents as the cause of diseases classified t", "Mycoplasma pneumoniae [M. pneumoniae] as the cause of diseas", "Klebsiella pneumoniae [K. pneumoniae] as the cause of diseas", "Escherichia coli [E. coli] as the cause of diseases classifi", "Haemophilus influenzae [H. influenzae] as the cause of disea", 
         "Proteus (mirabilis)(morganii) as the cause of diseases class", "Pseudomonas (aeruginosa)(mallei)(pseudomallei) as the cause ", "Bacillus fragilis [B. fragilis] as the cause of diseases cla", "Clostridium perfringens [C. perfringens] as the cause of dis", "Other specified bacterial agents as the cause of diseases cl", 
         "Viral agents as the cause of diseases classified to other ch", "Adenovirus as the cause of diseases classified to other chap", "Enterovirus as the cause of diseases classified to other cha", "Coronavirus as the cause of diseases classified to other cha", "Retrovirus as the cause of diseases classified to other chap", 
         "Respiratory syncytial virus as the cause of diseases classif", "Reovirus as the cause of diseases classified to other chapte", "Parvovirus as the cause of diseases classified to other chap", "Papillomavirus as the cause of diseases classified to other ", "Other viral agents as the cause of diseases classified to ot", 
         "Other and unspecified infectious diseases", "Tumor ganas pada bibir", "External upper lip", "External lower lip", "External lip, unspecified", "Upper lip, inner aspect", "Lower lip, inner aspect", "Lip, unspecified, inner aspect", "Commissure of lip", "Overlapping lesion of lip", "Tumor ganas pada bibir, tidak spesifik", 
         "Tumor ganas pada lidah", "nasofaringitis akut", "hipertensi primer/essensial", "acute upper respiratory infections of multiple and unspecifi", "necrosis of pulp", "dispepsia"
]
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("InputWlyh"), wilayah);
autocomplete(document.getElementById("InputPnykt"), penyakit);