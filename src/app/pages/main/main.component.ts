import { Component, OnInit } from '@angular/core';

export interface Uni {
  city: string,
  name: string,
  homepage: string,
  apply: string,
  iscritti: string,
  region: string,
  statale: string,
  tipologia: string,
  ranking: string
}

export const universityStatistics = "Università degli studi di Torino,University,Yes,Torino,Nord,www.unito.it,https://en.unito.it/studying-unito/international-degree-seeking-students,77820,10\nPolitecnico di Torino,Polytechnic,Yes,Torino,Nord,www.polito.it,https://www.polito.it/en/education/international-students/exchange-students/admission-procedure/applypolito,33585,5\nUniversità degli studi del Piemonte orientale Amedeo Avogadro,University,Yes,Vercelli,Nord,www.uniupo.it,https://www.uniupo.it/en/international/students/you-want-come-upo,13939,Unknown\nUniversità di Scienze Gastronomiche,University,No,Bra,Nord,www.unisg.it,https://www.unisg.it/en/programs-admissions/three-year-undergraduate-degree/,352,Unknown\nUniversità della Valle d'Aosta,University,No,Aosta,Nord,www.univda.it,https://www.univda.it/servizi/diritto-allo-studio-e-tasse/studenti-stranieri-o-con-titolo-di-studio-conseguito-allestero/,984,Unknown\nUniversità degli studi di Genova,University,Yes,Genova,Nord,www.unige.it,https://corsi.unige.it/info/futuri-studenti-immatricolazioni,31860,16\nUniversità Carlo Cattaneo (LIUC),University,No,Castellanza,Nord,www.liuc.it,https://www.liuc.it/campus-ed-opportunita/international-office/incoming-students/,2850,Unknown\nUniversità degli Studi dell' Insubria,University,Yes,Varese,Nord,www.uninsubria.it,https://www.uninsubria.eu/profili/international-students,11776,Unknown\nUniversità telematica e-Campus di Novedrate (CO),Telematic university,No,Novedrate,Nord,www.uniecampus.it,https://www.uniecampus.it/en/registration/enrolment-and-registration-process/,36044,Unknown\nUniversità degli Studi di Milano,University,Yes,Milano,Nord,www.unimi.it,https://www.unimi.it/en/international/coming-abroad,60988,6\nPolitecnico di Milano,Polytechnic,Yes,Milano,Nord,www.polimi.it,https://www.polimi.it/en/exchange-students-incoming,46922,1\nUniversità Commerciale Luigi Bocconi di Milano,University,No,Milano,Nord,www.unibocconi.it,https://www.unibocconi.eu/wps/wcm/connect/bocconi/sitopubblico_en/navigation+tree/info/international+students,13743,Unknown\nUniversità Cattolica del Sacro Cuore,University,No,Milano,Nord,www.unicatt.it,https://www.unicatt.eu/enrolment-enrolling-in-the-undergraduate-or-integrated-degree-programmes,42183,15\nLibera Università di Lingue e Comunicazione (IULM),University,No,Milano,Nord,www.iulm.it,https://www.iulm.it/wps/wcm/connect/iulm/en/orientamento-iscrizioni/iscrizioni-per-studenti-stranieri,7389,Unknown\nLibera Università Vita-Salute San Raffaele di Milano,University,No,Milano,Nord,www.unisr.it,https://www.unisr.it/en/servizi/ammissioni,3881,18\nUniversità degli Studi di Milano - Bicocca,University,Yes,Milano,Nord,www.unimib.it,https://en.unimib.it/education/teaching/how-enrol-information-international-students,35207,13\nHumanitas University,University,No,Milano,Nord,https://www.hunimed.eu/,https://www.hunimed.eu/course/medtec-school/apply/,1446,Unknow\nUniversità degli Studi di Bergamo,University,Yes,Bergamo,Nord,www.unibg.it,https://en.unibg.it/study/enrollment/steps-for-enrollment,19947,42\nUniversità degli Studi di Brescia,University,Yes,Brescia,Nord,www.unibs.it,https://www.unibs.it/en/education/enrolling/orientation-and-selection-suitable-degree-course,15013,27\nUniversità degli Studi di Pavia,University,Yes,Pavia,Nord,www.unipv.it,https://internazionale.unipv.eu/en/mobility/come-to-pavia/,24379,12\nIstituto universitario di studi superiori di Pavia,High School with a special arrangement,Yes,Pavia,Nord,www.iusspavia.it,https://www.iusspavia.it/en/education/doctoral-programmes/cognitive-brain-sciences/call-application,Unknown,Unknown\nLibera Università di Bolzano,University,No,Bolzano,Nord,www.unibz.it,https://www.unibz.it/en/applicants/international/incoming-exchange-students/,4046,19\nUniversità degli Studi di Trento,University,Yes,Trento,Nord,www.unitn.it,https://international.unitn.it/incoming/online-opportunities,16534,11\nUniversità degli Studi di Verona,University,Yes,Verona,Nord,www.univr.it,https://www.univr.it/en/our-services/international-degree-seeking-students,23937,29\nUniversità degli studi Ca' Foscari di Venezia,University,Yes,Venezia,Nord,www.unive.it,https://www.unive.it/pag/16399/,20642,21\nUniversità Iuav di Venezia,University,Yes,Venezia,Nord,www.iuav.it,https://www.iuav.it/FUTURI-STU/STUDENTI-S/,4200,Unknown\nUniversità degli Studi di Padova,University,Yes,Padova,Nord,www.unipd.it,https://www.unipd.it/en/studying-padova-admission,66442,4\nUniversità degli Studi di Udine,University,Yes,Udine,Nord,www.uniud.it,https://www.uniud.it/en/uniud-international/International_Students?set_language=en,14569,40\nUniversità degli Studi di Trieste,University,Yes,Trieste,Nord,www.units.it,https://www.units.it/en/students/how-to,16179,23\nScuola Internazionale Superiore di Studi Avanzati di Trieste,High School with a special arrangement,Yes,Trieste,Nord,www.sissa.it,https://www.sissa.it/announcement/call-interests-positions-mathematics-sissa,Unknown,Unknown\nUniversità degli Studi di Parma,University,Yes,Parma,Nord,www.unipr.it,https://www.unipr.it/en/studenti-e-studentesse-extra-ue,29134,34\nUniversità degli Studi di Modena e Reggio Emilia,University,Yes,Modena,Nord,www.unimore.it,https://www.unimore.it/ammissione/immaisc.html,26755,20\nUniversità degli Studi di Bologna,University,Yes,Bologna,Nord,www.unibo.it,https://www.unibo.it/en/international/incoming-exchange-students,84242,3\nUniversità degli Studi di Ferrara,University,Yes,Ferrara,Nord,www.unife.it,https://www.unife.it/en/come-to-study/enroll,26253,31\nUniversità degli studi Carlo Bo di Urbino,University,Yes,Urbino,Center,www.uniurb.it,https://www.uniurb.it/international/regular-students/enrolment,14721,Unknown\nUniversità Politecnica delle Marche - Ancona,University,Yes,Ancona,Center,www.univpm.it,https://www.univpm.it/Entra/International/International_students/Immatricolazioni_studenti_internazionali,14650,24\nUniversità degli Studi di Macerata,University,Yes,Macerata,Center,www.unimc.it,https://www.unimc.it/en,9811,Unknown\nUniversità degli Studi di Camerino,University,Yes,Camerino,Center,www.unicam.it,https://www.unicam.it/international-student/study-at-unicam/admissions,5716,Unknown\nScuola IMT Alti Studi di Lucca,High School with a special arrangement,Yes,Lucca,Center,www.imtlucca.it,https://www.imtlucca.it/en/campus-servizi/faqs-eunon-eu-students/visa-application,Unknown,Unknown\nUniversità degli Studi di Firenze,University,Yes,Firenze,Center,www.unifi.it,https://www.unifi.it/vp-10338-non-eu-students.html#immatricolazione,53056,9\nUniversità degli Studi di Pisa,University,Yes,Pisa,Center,www.unipi.it,https://www.unipi.it/index.php/enrolment,43584,8\nScuola Normale Superiore di Pisa,High School with a special arrangement,Yes,Pisa,Center,www.sns.it,https://www.sns.it/en/soggiorni-e-tirocini-dallestero,Unknown,Unknown\nScuola Superiore di Studi Universitari e Perfezionamento S. Anna di Pisa,High School with a special arrangement,Yes,Pisa,Center,www.sssup.it,https://www.santannapisa.it/en/international-relations/santanna-international-profile,Unknown,Unknown\nUniversità degli Studi di Siena,University,Yes,Siena,Center,www.unisi.it,https://en.unisi.it/international/international-degree-seeking-students,15589,25\nUniversità per stranieri di Siena,University,Yes,Siena,Center,www.unistrasi.it,https://www.unistrasi.it/1/582/7101/Incoming_exchange_students.htm,1983,Unknown\nUniversità degli Studi di Perugia,University,Yes,Perugia,Center,www.unipg.it,https://www.unipg.it/en/international-students/incoming-exchange-students/practical-information-for-incoming-students,27585,22\nUniversità per stranieri di Perugia,University,Yes,Perugia,Center,www.unistrapg.it,https://www.unistrapg.it/en/international/international-students/foreign-students-access-to-degree-courses,1070,Unknown\nUniversità degli Studi della Tuscia,University,Yes,Viterbo,Center,www.unitus.it,https://www.unitus.it/en/unitus/enrolment/articolo/enrolment-for-extra-eu-students,7696,39\nUniversità degli Studi di Roma La Sapienza,University,Yes,Roma,Center,www.uniroma1.it,https://www.uniroma1.it/it/node/256794,107342,2\nUniversità degli Studi di Roma Tor Vergata,University,Yes,Roma,Center,www.uniroma2.it,https://web.uniroma2.it/en/percorso/admissions/sezione/how_to_enroll,27869,14\nLibera Università Maria SS.Assunta - (LUMSA) di Roma,University,No,Roma,Center,www.lumsa.it,https://www.lumsa.it/en/international_enrollment_LUMSA,7619,Unknown\nLibera Università internazionale degli studi sociali Guido Carli - (LUISS) di Roma,University,No,Roma,Center,https://www.luiss.it,https://www.luiss.edu/how-to-apply,9998,Unknown\nUniversità degli Studi Roma Tre,University,Yes,Roma,Center,www.uniroma3.it,https://portalestudente.uniroma3.it/en/enrollment/admission/guide-how-to-apply/,31381,35\nUniversità Campus Bio-medico di Roma,University,No,Roma,Center,www.unicampus.it,https://www.unicampus.it/en/degree-course-admissions/,2455,Unknown\nUniversità degli Studi Internazionali di Roma – UNINT,University,No,Roma,Center,www.luspio.it,https://www.unint.eu/en/international-students,1836,Unknown\nUniversità telematica Guglielmo Marconi di Roma,Telematic university,No,Roma,Center,www.unimarconi.it,https://www.unimarconi.com/admissions/,9946,Unknown\nUniversità telematica Unitelma Sapienza di Roma,Telematic university,No,Roma,Center,www.unitelma.it,https://www.unitelmasapienza.it/en/enrolment/,2766,Unknown\nUniversità Europea di Roma,University,No,Roma,Center,www.unier.it,https://www.universitaeuropeadiroma.it/en/admissions/,2063,Unknown\nUniversità telematica internazionale UNINETTUNO di Roma,Telematic university,No,Roma,Center,www.uninettunouniversity.net,https://www.uninettunouniversity.net/en/immatricolazione-studenti-stranieri.aspx,15101,Unknown\nUniversità telematica Niccolò Cusano di Roma,Telematic university,No,Roma,Center,www.unicusano.it,https://www.unicusano.it/en/facilities/instructions-for-non-eu-students-to-enroll-and-get-a-study-visa,26140,Unknown\nLink Campus University di Roma,University,No,Roma,Center,www.unilink.it,https://www.unilink.it/international/how-to-apply,514,Unknown\nUniversità degli Studi di Cassino e del Lazio Meridionale,University,Yes,Cassino,Center,www.unicas.it,http://www.eng.unicas.it/nodo.php?nodo=5,7186,Unknown\nUniversità degli Studi del Sannio,University,Yes,Benevento,Sud,www.unisannio.it,https://www.unisannio.it/en/studente/futuro-studente,3832,Unknown\nUniversità degli studi di Napoli Federico II,University,Yes,Napoli,Sud,www.unina.it,https://www.international.unina.it/education/admission-regulation/,73553,7\nUniversità degli Studi di Napoli - Parthenope,University,Yes,Napoli,Sud,www.uniparthenope.it,https://international.uniparthenope.it/how-to-enrol/,11222,38\nUniversità degli studi L'Orientale di Napoli,University,Yes,Napoli,Sud,www.unior.it,https://www.isu-services.it/en/universities/universita-degli-studi-di-napoli-l-orientale,11018,Unknown\nUniversità degli studi Suor Orsola Benincasa di Napoli,University,No,Napoli,Sud,www.unisob.na.it,https://www.unisob.na.it/universita/iscrizioniol/index.htm?vr=1&lg=en,8649,Unknown\nSeconda Università degli Studi di Napoli,University,Yes,Napoli,Sud,www.unicampania.it,https://international.unicampania.it/index.php/en/international/services-for-foreign-students/international-welcome-desk,22160,Unknown\nUniversita telematica Pegaso di Napoli,Telematic university,No,Napoli,Sud,www.unipegaso.it,https://www.unipegaso.it/studenti/studenti-stranieri,27887,Unknown\nUniversità degli Studi di Salerno,University,Yes,Salerno,Sud,www.unisa.it,https://web.unisa.it/en/international/enrollment-at-unisa/non-eu-citizens-in-italy,33332,28\nUniversità degli studi di L'Aquila,University,Yes,Aquila,Sud,www.univaq.it,https://www.univaq.it/section.php?id=1958&lang_s=en,16160,Unknown\nGran Sasso Science Institute - Scuola di dottorato internazionale dell'Aquila,High School with a special arrangement,Yes,Aquila,Sud,www.gssi.infn.it,https://www.gssi.it/communication/announcements/item/21717-phd-call-for-applications-2023-24-now-open,Unknown,Unknow\nUniversità degli Studi di Teramo,University,Yes,Teramo,Sud,www.unite.it,https://www.unite.it/English/Home_page/Enrolment_availability_to_international_students,5057,Unknown\nUniversità degli studi Gabriele D'Annunzio di Chieti e Pescara,University,Yes,Chieti,Sud,www.unich.it,https://www.unich.it/didattica/international/international-students/call-applications-50-scholarships-international,21694,37\nUniversità degli Studi del Molise,University,Yes,Campobasso,Sud,www.unimol.it,https://www.unimol.it/internazionale/nomepagina/,6649,Unknown\nUniversità degli Studi di Foggia,University,Yes,Foggia,Sud,www.unifg.it,https://www.unifg.it/en/students,12310,Unknown\nUniversità degli Studi di Bari,University,Yes,Bari,Sud,www.uniba.it,https://www.uniba.it/en/students/international-students,40530,26\nPolitecnico di Bari,Polytechnic,Yes,Bari,Sud,www.poliba.it,http://www.poliba.it/it/internazionale/studyingpoliba-international-students,9839,17\nUniversità del Salento,University,Yes,Lecce,Sud,www.unisalento.it,https://international.unisalento.it/how-to-apply,18100,41\nUniversità degli studi della Basilicata,University,Yes,Potenza,Sud,www.unibas.it,https://portale.unibas.it/site/en/home/students/how-to-apply.html,5871,Unknown\nUniversità della Calabria,University,Yes,Rende,Sud,www.unical.it,https://www.unical.it/internazionale/intenational-students/international-course-catalogue/,23416,36\nUniversità degli studi di Catanzaro - Magna Grecia,University,Yes,Catanzaro,Sud,www.unicz.it,https://web.unicz.it/en/page/85321,10889,Unknown\nUniversità degli studi Mediterranea di Reggio Calabria,University,Yes,Reggio di calabria,Sud,www.unirc.it,https://www.unirc.it/en/applyingto.php,4782,Unknown\nUniversità per stranieri Dante Alighieri di Reggio Calabria,University,No,Reggio di calabria,Sud,www.unistrada.it,https://www.unidarc.it/internazionale/,495,Unknown\nUniversità degli Studi di Palermo,University,Yes,Palermo,Sud,www.unipa.it,https://www.unipa.it/mobilita/en/new-students/new-students---enrolment/enrolment-procedures-for-extra-eu-foreign-students/,41610,33\nUniversità degli Studi di Messina,University,Yes,Messina,Sud,www.unime.it,https://international.unime.it/study-us/application-and-admission,23270,32\nLibera Università della Sicilia Centrale KORE di Enna,University,No,Enna,Sud,www.unikore.it,https://unikore.it/en/study/,4703,Unknown\nUniversità degli Studi di Catania,University,Yes,Catania,Sud,www.unict.it,https://www.unict.it/en/education/international-students,37602,30\nUniversità degli Studi di Sassari,University,Yes,Sassari,Sud,www.uniss.it,https://en.uniss.it/study/some-good-reasons-study-sassari/enrolment-procedures-international-students,12707,Unknown\nUniversità degli Studi di Cagliari,University,Yes,Cagliari,Sud,www.unica.it,https://www.unica.it/it/internazionale/studiare-unica/iscriversi-dallestero,24373,Unknown"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  unis: Uni[] = []
  activeUnis: Uni[] = []

  constructor() { }

  populationUni() {

    let universities = universityStatistics.split("\n")

    for (let uni of universities) {
      let statistics = uni.split(",");
      this.unis.push({
        name: statistics[0],
        tipologia: statistics[1],
        statale: statistics[2],
        city: statistics[3],
        region: statistics[4],
        homepage: 'https://' + statistics[5],
        apply: statistics[6],
        iscritti: statistics[7],
        ranking: statistics[8]
      })
    }
    
  }

  ngOnInit(): void {
    this.populationUni()
  }


  filterNord(): void {
    this.activeUnis = this.unis.filter((uni) => { return uni.region === "Nord" })
    this.activeUnis.sort((a,b)=>{return a.city > b.city ? 1 : -1})
  }

  filterCentro(): void {
    this.activeUnis = this.unis.filter((uni) => { return uni.region === "Center" })
    this.activeUnis.sort((a,b)=>{return a.city > b.city ? 1 : -1})
  }

  filterSud(): void {
    this.activeUnis = this.unis.filter((uni) => { return uni.region === "Sud" })
    this.activeUnis.sort((a,b)=>{return a.city > b.city ? 1 : -1})
  }

  
  filterCity(city:string): void {
    this.activeUnis = []
    if(city === '')
      return

    let search = city.toLowerCase()
    
    for(let uni of this.unis){
      let city = uni.city.toLowerCase();
      
      if(search.length > city.length)
        continue;

      let equals = true;
      for(let i=0;i<search.length;i++){
        if(search.charAt(i) !== city.charAt(i)){
          equals=false;
          break;
        }
      }

      if(equals)
        this.activeUnis.push(uni)

    }
    this.activeUnis.sort((a,b)=>{return a.city > b.city ? 1 : -1})
  }

  filterRanking(ranking: string): void {
    this.activeUnis = []
    if(ranking === '')
      return

    let range = +ranking;
    if(Number.isNaN(range))
      return


    if (range < 1 || range > 43)
      return;

    for(let uni of this.unis){
      if(Number.isNaN(uni.ranking) || Number.isNaN(range))
        continue;

      if(+uni.ranking <= range)
        this.activeUnis.push(uni)

    }

    this.activeUnis.sort((a,b) =>{return (+a.ranking)-(+b.ranking);})
    
  }

}
