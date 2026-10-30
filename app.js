const SVG={
 phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
 copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
 star:'<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>'
};
const ic=(k,fill)=>`<svg viewBox="0 0 24 24" fill="${fill?'currentColor':'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${SVG[k]}</svg>`;
const DICONS={
 surgery:'<path d="M14.5 3.5l6 6L9 21H3v-6z"/><path d="M12 6l6 6"/>',
 icu:'<path d="M3 12h4l2-5 4 10 2-5h6"/>',
 cath:'<path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/><path d="M8 11h2l1.5-2 2 4 1.5-2h1"/>',
 vip:'<path d="M3 18V9l4 3 5-6 5 6 4-3v9z"/><path d="M3 21h18"/>',
 birth:'<circle cx="12" cy="6" r="3"/><path d="M6 21v-3a6 6 0 0 1 12 0v3"/><path d="M12 13v4"/>',
 physio:'<circle cx="13" cy="4" r="2"/><path d="M7 21l3-7 3 3v5"/><path d="M6 12l4-4 4 2 4-1"/>',
 scope:'<path d="M4 4h6a4 4 0 0 1 4 4v1a3 3 0 0 0 3 3h0a3 3 0 0 1 3 3v2"/><circle cx="20" cy="19" r="2"/>',
 nicu:'<rect x="3" y="10" width="18" height="9" rx="3"/><path d="M6 10V8a6 6 0 0 1 12 0v2"/><circle cx="12" cy="14.5" r="1.6"/>'
};
const DEPTS=['surgery','icu','cath','vip','birth','physio','scope','nicu'];
const CATS=['all','women','heart','internal','rheum','neuro','surgery','uro','dental','peds','derm','radio','lab'];

/* Doctors — Dr. Fatima first and featured */
let D=[
 {id:'fatima',c:'women',img:1,ph:['07503016370'],cr:['M.B.Ch.B.','C.A.B.O.G.','RCOG (UK)'],
  n:{ar:'د. فاطمة كمال خالد',en:'Dr. Fatima Kamal Khalid'},
  r:{ar:'أستاذ مساعد واستشارية النسائية والتوليد',ku:'پڕۆفیسۆرا هاریکار و نۆژدارا ڕاوێژکار یا ژنان و زاروکبوونێ',en:'Assistant Professor & Consultant in Obstetrics and Gynecology'},
  f:{ar:'اختصاص أمراض النسائية والتوليد والعقم · عضو مشارك في الكلية الملكية لأطباء النسائية والتوليد RCOG (المملكة المتحدة)',ku:'تایبەتمەندا نەخۆشیێن ژنان، زاروکبوون و نەزۆکیێ · ئەندامێ هاوبەش ل کۆلیژا شاهانە RCOG (بەریتانیا)',en:'Gynecology, obstetrics and infertility · Associate member of the Royal College of Obstetricians and Gynaecologists (UK)'}},
 {id:'suha',c:'women',img:1,ph:['07515105921'],cr:['M.B.Ch.B.','G.O.P'],
  n:{ar:'د. سهى طلب جارالله',en:'Dr. Suha Talab Jarullah'},
  r:{ar:'أخصائية الأمراض النسائية والتوليد',ku:'پسپۆرا نەخۆشیێن ژنان و زاروکبوونێ',en:'Obstetrician and Gynecologist'},
  f:{ar:'الأمراض النسائية والتوليد ومعالجة العقم',ku:'نەخۆشیێن ژنان، زاروکبوون و چارەسەریا نەزۆکیێ',en:'Gynecology, obstetrics and infertility treatment'}},
 {id:'nechirwan',c:'heart',img:1,ph:['07510333224'],cr:['M.B.Ch.B.','F.K.B.M.S.'],
  n:{ar:'د. نيچيروان اسماعيل حسين',en:'Dr. Nechirwan Ismael Hussein'},
  r:{ar:'اختصاص دقيق في أمراض القلب والقسطرة التداخلية',ku:'تایبەتمەندیا هویر (بۆرد) ب نەخۆشیێن دل، قەستەرە و ئیکۆ',en:'Interventional Cardiologist'},
  f:{ar:'القسطرة القلبية التداخلية، فحص القلب بجهاز الإيكو والدوبلر الملون، تخطيط القلب أثناء الجهد',ku:'قەستەرا دلی، پشکنینا دلی ب ئیکۆ و دۆپلەرا ڕەنگین، تخطیطا دلی د دەمێ ماندیبوونێ دا',en:'Interventional catheterization, echocardiography and color Doppler, stress ECG'}},
 {id:'brisik',c:'internal',img:1,ph:['07508968596'],cr:['M.B.Ch.B.','F.K.B.M.S.','F.R.C.P. (Edinburgh)'],
  n:{ar:'د. بريسك حيدر رشاد',en:'Dr. Brisik Haydar Rashad'},
  r:{ar:'أستاذ مساعد في الأمراض الباطنية',ku:'پڕۆفیسۆرێ هاریکار د نەخۆشیێن ناڤخۆیی دا',en:'Assistant Professor of Internal Medicine'},
  f:{ar:'القلب والأمراض الباطنية، الغدد الصماء وداء السكري · بورد (دكتوراه) · زميل الكلية الملكية البريطانية (أدنبرة)',ku:'دل و هناڤ، نەخۆشیێن غودە و ئێشێن شەکرێ · هەڤکارێ کۆلیژا شاهانە یا بەریتانی (ئەدنبرە)',en:'Cardiology and internal medicine, endocrinology and diabetes · Board doctorate · Fellow of the Royal College of Physicians of Edinburgh'}},
 {id:'azhin',c:'rheum',img:1,ph:['07500773327'],cr:['M.B.Ch.B.','FKHCMS (Rheumatology)'],
  n:{ar:'د. أژين كمال خالد',en:'Dr. Azhin Kamal Khalid'},
  r:{ar:'دكتوراه (بورد) أمراض المفاصل والروماتيزم',ku:'دکتۆرا (بۆرد) تایبەتمەندا نەخۆشیێن گەهان و ڕۆماتیزمێ',en:'Board-certified Rheumatologist'},
  f:{ar:'أمراض المفاصل والروماتيزم، الفقرات والعلاج الطبيعي',ku:'نەخۆشیێن گەهان و ڕۆماتیزمێ، بڕبڕا پشتێ و چارەسەریا سروشتی',en:'Joint diseases and rheumatism, spine and physiotherapy'}},
 {id:'nasraldin',c:'neuro',img:1,ph:['07502187388'],cr:['EEG','NCV'],
  n:{ar:'د. نصرالدين محمد خلف',en:'Dr. Nasraldin Muhammad Khalaf'},
  r:{ar:'الأخصائي في أمراض الجملة العصبية',ku:'تایبەتمەندێ کۆئەندامێ دەماران',en:'Neurologist'},
  f:{ar:'تخطيط الدماغ والأعصاب · شهادة مجازة من الرابطة العالمية للأمراض العصبية',ku:'تخطیطا مێشک و دەماران · بڕوانامە ژ کۆمەلەیا جیهانی یا نەخۆشیێن دەماران',en:'EEG and nerve conduction studies · Certified by the World Federation of Neurology'}},
 {id:'fawzi',c:'surgery',img:1,ph:['07503579098'],cr:['M.B.Ch.B.','F.K.B.M.S.'],
  n:{ar:'د. فوزي تحسين محمد',en:'Dr. Fawzi Tahsin Muhammad'},
  r:{ar:'دكتوراه (بورد) بالجراحة العامة',ku:'دکتۆرا (بۆرد) د نەشتەرگەریا گشتی دا',en:'Doctorate (Board) in General Surgery'},
  f:{ar:'جراحة الجهاز الهضمي والغدة الدرقية، عمليات الثدي ورفع الأورام، رفع المرارة بالناظور · زميل المجلس الكردستاني للاختصاصات الطبية',ku:'نەشتەرگەریا کۆئەندامێ هەرسێ و تیرۆئیدێ، مەمک و لابرنا گرێکان، لابرنا زراڤێ ب ناظوری · هەڤکارێ ئەنجومەنا کوردستانێ بۆ پسپۆریێن پزیشکی',en:'GI and thyroid surgery, breast surgery and tumor removal, laparoscopic gallbladder removal · Fellow of the Kurdistan Board for Medical Specialties'}},
 {id:'abdulkareem',c:'surgery',img:1,ph:['07504574120','07502218457'],cr:['M.B.Ch.B.','D.G.S.'],
  n:{ar:'د. محمد عبدالكريم الپالاني',en:'Dr. Muhammad Abdulkareem'},
  r:{ar:'جراح اختصاصي · دبلوم عالي في الجراحة العامة',ku:'نەشتەرگەرێ پسپۆر · دیپلۆما بلند د نەشتەرگەریا گشتی دا',en:'Specialist Surgeon · Higher Diploma in General Surgery'},
  f:{ar:'الجراحة العامة، جراحة الجهاز الهضمي، أمراض الغدة الدرقية، أمراض الثدي، الأورام، جراحة الكلية والمجاري البولية',ku:'نەشتەرگەریا گشتی، کۆئەندامێ هەرسێ، تیرۆئید، مەمک، گرێ، نەشتەرگەریا گورچیلک و ڕێکێن میزێ',en:'General and digestive surgery, thyroid, breast, tumors, kidney and urinary tract surgery'}},
 {id:'ahmed',c:'peds',img:1,ph:['07510953936'],cr:['M.B.Ch.B.','IPS','KPS'],
  n:{ar:'د. أحمد محمد رشيد سليفاني',en:'Dr. Ahmed Mohammed Rasheed'},
  r:{ar:'أخصائي الأطفال وحديثي الولادة والخدج',ku:'تایبەتمەندێ نەخۆشیێن زاروکان و نوی بوویان',en:'Pediatrician · Newborn and premature care'},
  f:{ar:'عضو جمعية أطباء الأطفال العراقية (IPS) وعضو جمعية أطباء الأطفال الكردستانية (KPS)',ku:'ئەندامێ کۆمەلەیا نۆژدارێن زاروکان یا عیراقێ (IPS) و کوردستانێ (KPS)',en:'Member of the Iraqi Pediatric Society (IPS) and the Kurdistan Pediatric Society (KPS)'}},
 {id:'rauf',c:'derm',img:1,ph:['07503756503'],cr:['M.B.Ch.B.','H.D.V.D. (Dermatology)'],
  n:{ar:'د. رؤوف خشمان',en:'Dr. Rauf Xshman'},
  r:{ar:'أخصائي الأمراض الجلدية والتناسلية',ku:'پسپۆرێ نەخۆشیێن پێستی',en:'Dermatologist'},
  f:{ar:'دبلوم عالي اختصاص العلاج بالليزر · عضو جمعية أطباء الجلدية كوردستان (أربيل) والجمعية العراقية (بغداد)',ku:'دیپلۆما بلند د چارەسەریا لێزەری دا · ئەندامێ کۆمەلەیا نۆژدارێن پێستی یا کوردستانێ و عیراقێ',en:'Higher diploma in laser therapy · Member of the Kurdistan (Erbil) and Iraqi (Baghdad) dermatology societies'}},
 {id:'tariq',c:'derm',img:1,ph:['07500337299'],cr:['Derma','Beauty','Laser'],
  n:{ar:'د. طارق أيوب',en:'Dr. Tariq Ayoub'},
  r:{ar:'طبيب الأمراض الجلدية والتجميل والليزر',ku:'نۆژدارێ نەخۆشیێن پێستی و جوانکاریێ ب لێزەرێ',en:'Dermatologist · Cosmetic and laser'},
  f:{ar:'الأمراض الجلدية، التجميل، العلاج بالليزر',ku:'نەخۆشیێن پێستی، جوانکاری، چارەسەریا لێزەری',en:'Skin conditions, cosmetic dermatology, laser treatment'}},
 {id:'sabah',c:'radio',img:1,ph:['07512045561'],cr:['Radiology','Ultrasound','Cairo'],
  n:{ar:'د. صباح محمد سعيد',en:'Dr. Sabah Mohammed Saeed'},
  r:{ar:'أخصائي الأشعة التشخيصية والسونار (القاهرة)',ku:'پسپۆرێ تیشک و سۆنارێ (قاهیرە)',en:'Radiology and Ultrasound Specialist (Cairo)'},
  f:{ar:'المفراس والرنين، سونار البطن والحوض والغدة الدرقية، سونار العضلات والمفاصل والخلع الولادي، سونار الدماغ للأطفال والتشوهات الولادية، سونار رباعي الأبعاد للجنين، الدوبلر الملون للأوعية الدموية ودوبلر الحوامل · العيادة: زاخو – مركز السوق – مجمع نوروز',ku:'سی تی و ئێم ئاڕ ئای، سۆنارا زک و حەوز و تیرۆئیدێ، سۆنارا ماسولکە و گەهان، سۆنارا مێشکێ زاروکان و کێماسیێن زکماکی، سۆنارا 4D بۆ کۆرپەلەی، دۆپلەرا ڕەنگین بۆ خوینبەران و ژنێن دووگیان · کلینیک: زاخۆ – سەنتەرێ بازاری – کۆمەلگەها نەورۆز',en:'CT and MRI; abdominal, pelvic and thyroid ultrasound; muscle, joint and hip-dysplasia ultrasound; infant brain and congenital anomaly scans; 4D fetal ultrasound; color Doppler for vessels and pregnancy · Clinic: Zakho, bazaar centre, Newroz complex'}},
 {id:'mayson',c:'radio',img:0,ini:'MT',ph:['07508115948'],cr:['M.B.Ch.B.','MD','Arab Board'],
  n:{ar:'د. ميسون طارق عبدالمحسن',en:'Dr. Mayson Tariq Abdulmuhsin'},
  r:{ar:'أخصائية الأشعة التشخيصية والسونار',ku:'تایبەتمەندا تیشک و سۆنارێ',en:'Specialist in Radiology and Ultrasonography'},
  f:{ar:'سونار، مفراس، رنين مغناطيسي، دوبلر (سونار ملون)، سونار رباعي الأبعاد 4D · دكتوراه (البورد العربي)',ku:'سۆنار، سی تی، ئێم ئاڕ ئای، دۆپلەرا ڕەنگین، سۆنارا 4D · دکتۆرا (بۆردا عەرەبی)',en:'Ultrasound, CT, MRI, color Doppler, 4D ultrasound · Doctorate (Arab Board)'}},
 {id:'bashar',c:'lab',img:1,ph:['07508593551'],cr:['MBChB','FICMS (Path)'],
  n:{ar:'أ.د. بشار عبدالجبار الحساوي',en:'Prof. Bashar Abduljabbar'},
  r:{ar:'بروفيسور · اختصاص علم الأمراض والنسيج المرضي',ku:'پڕۆفیسۆر · تایبەتمەندێ زانینێت نەخۆشیا',en:'Professor of Histopathology'},
  f:{ar:'التشخيص النسيجي والمرضي في مختبر نوروز · انستغرام: newroz_lab',ku:'دەستنیشانکرنا شانەیی ل تاقیگەها نەورۆز · ئینستاگرام: newroz_lab',en:'Tissue and pathology diagnosis at Newroz Lab · Instagram: newroz_lab'}},
 {id:'ali',c:'lab',img:1,ph:['07508593551'],cr:['Professor','Medical Microbiology'],
  n:{ar:'أ.د. علي يحيى سعيد',en:'Prof. Dr. Ali Yahya Saeed'},
  r:{ar:'بروفيسور في الأحياء المجهرية الطبية',ku:'پڕۆفیسۆر · تایبەتمەند د بوارێ مایکرۆبایۆلۆجیا پزیشکی دا',en:'Professor of Medical Microbiology'},
  f:{ar:'التحاليل الميكروبية والمختبرية في مختبر نوروز · انستغرام: newroz_lab',ku:'پشکنینێن مایکرۆبی و تاقیگەهێ ل تاقیگەها نەورۆز · ئینستاگرام: newroz_lab',en:'Microbiology and laboratory testing at Newroz Lab · Instagram: newroz_lab'}},
 {id:'mohammed',c:'uro',img:1,ph:['07507775046'],cr:['M.B.Ch.B.','K.B.M.S.'],
  n:{"ar": "د. محمد أحمد نعمت", "en": "Dr. Mohammed Ahmed Nemat"},
  r:{"ar": "أخصائي جراحة الكلى والمسالك البولية", "ku": "بسپور د بوارێ نشتەرگەریا گولچیسکا و جوبارێت دەست ئاڤێ", "en": "Urologist"},
  f:{"ar": "جراحة الكلى والمسالك البولية والعقم وغدة البروستات · إزالة حصى الكلى والمجاري البولية · جراحة الأمراض الخلقية للجهاز التناسلي والأورام", "ku": "بسپور د بوارێ نشتەرگەریا گولچیسکا و جوبارێت دەست ئاڤێ و نەزوکی و ڕژێنا پروستاتا، راکرنا بەرکێن گولچیسکا و جوبارێت میزێ و نشتەرگەریێن نەخوشیێن زکماکی یێن کوئەندامێ زاوزێ، شێرپەنجا", "en": "Kidney and urinary tract surgery, male infertility and prostate · Removal of kidney and urinary tract stones · Surgery for congenital conditions of the genital organs and cancers"}},
 {id:'meajer',c:'dental',img:1,ph:['07518818261'],cr:[],
  n:{"ar":"د. ميجر يحيى شيخو","en":"Dr. Meajer Yehya Sheaxo"},
  r:{"ar":"طبيب أسنان وأخصائي جراحة الفم والوجه والفكين","ku":"نۆژدارێ ددانان و پسپۆرێ نەشتەرگەریا دەڤ، ڕوو و ئەرزینکان","en":"Dentist and Oral & Maxillofacial Surgery Specialist"},
  f:{"ar":"طب الأسنان وجراحة الفم والوجه والفكين","ku":"ددان و نەشتەرگەریا دەڤ، ڕوو و ئەرزینکان","en":"Dentistry and oral & maxillofacial surgery"}}
];

const T={
 ar:{dir:'rtl',hname:'مستشفى نوروز الأهلي',er:'طوارئ ٢٤ ساعة',erCard:'الطوارئ · مفتوحة ٢٤ ساعة',callHosp:'خابر المستشفى',eyebrow:'مستشفى ومجمع نوروز الأهلي · زاخو',
  h1:'أحسن الأطباء الاختصاص، <em>كلهم بمكان واحد</em>',lead:'أساتذة واستشاريين بالنسائية والقلب والجراحة والباطنية وغيرها، ويانا أقسام كاملة وطوارئ شغّالة ليل ونهار بقلب زاخو.',ctaDocs:'شوف أطباءنا',
  tagName:'د. فاطمة كمال خالد',tagRole:'أستاذ مساعد واستشارية النسائية والتوليد',
  fSpec:'الاختصاص',fName:'اسم الدكتور',fNamePh:'مثلاً: فاطمة',fGo:'دوّر على دكتور',
  openNow:'هسه مفتوح',zakho:'بتوقيت زاخو',navDocs:'الأطباء',navComplain:'الشكاوي',navTips:'نصايح صحية',navDepts:'الأقسام',navContact:'تواصل ويانا',
  sOpen:'طوارئ وخدمة ما تتوقف',sDocs:'دكتور اختصاص وأستاذ',sDepts:'أقسام تخصصية',sVip:'غرف خاصة للمرضى',
  docKicker:'الكادر الطبي',docTitle:'أطباؤنا',docSub:'اختار الدكتور وخابر عيادته مباشرة حتى تحجز موعد.',feat:'الطبيبة المميّزة',search:'دوّر باسم الدكتور أو الاختصاص',empty:'ماكو دكتور بهالاسم.',
  clinic:'رقم العيادة',doctor:'الدكتور',secretary:'السكرتير',lab:'مختبر نوروز',profile:'كل المعلومات',close:'سدّ',
  cats:{all:'الكل',women:'النسائية والتوليد',heart:'القلب',internal:'الباطنية والسكري',rheum:'المفاصل والروماتيزم',neuro:'الأعصاب',surgery:'الجراحة العامة',uro:'المسالك البولية',dental:'الأسنان والفكين',peds:'الأطفال',derm:'الجلدية والليزر',radio:'الأشعة والسونار',lab:'المختبر'},
  deptKicker:'خدماتنا',deptTitle:'أقسام المستشفى',deptSub:'ثمان أقسام اختصاص جاهزة تستقبلكم ليل ونهار.',
  d:{surgery:['قسم العمليات','صالات عمليات مجهزة للعمليات العامة والاختصاص.'],icu:['قسم الإنعاش','عناية مركزة ومراقبة طول الوقت للحالات الصعبة.'],cath:['قسم القسطرة القلبية','تشخيص وعلاج أمراض القلب والشرايين.'],vip:['غرف VIP','غرف خاصة ومريحة للمريض والمرافق.'],birth:['قسم الولادة الطبيعية','متابعة الأم والولادة الطبيعية بمكان آمن.'],physio:['قسم العلاج الطبيعي','جلسات تأهيل حتى ترجع الحركة.'],scope:['ناظور القولون والمعدة','فحص بالناظور للمعدة والقولون.'],nicu:['الخدج وحديثي الولادة','رعاية خاصة للأطفال الخدج والمواليد الجدد.']},
  contactKicker:'تعالوا زورونا',cTitle:'المشاكل والشكاوي',cText:'صارت عندك مشكلة، أو عندك شكوى أو اقتراح؟ تواصل ويا إدارة المستشفى مباشرة على هالرقم، وكل ملاحظة تهمنا.',waMsg:'هلو، أريد أقدم شكوى / ملاحظة لمستشفى نوروز:',contactTitle:'تواصل ويانا',phoneL:'تلفون المستشفى',call:'خابر',copy:'انسخ',copied:'تم نسخ الرقم',addrL:'العنوان',addr:'دهوك – زاخو – مقابل مديرية ماء زاخو',map:'افتح بالخريطة',followL:'تابعونا',follow:'آخر الأخبار والعروض على صفحاتنا.',footAddr:'زاخو، مقابل مديرية ماء زاخو'},
 ku:{dir:'rtl',hname:'نەخۆشخانا نەورۆز',er:'فریاکەفتن ٢٤ دەمژمێر',erCard:'فریاکەفتن · ٢٤ دەمژمێر ڤەکرییە',callHosp:'پەیوەندیێ ب نەخۆشخانێ بکە',eyebrow:'نەخۆشخانە و کۆمەلگەها نەورۆز · زاخۆ',
  h1:'باشترین نۆژدارێن پسپۆر، <em>ل بن ئێک بانی</em>',lead:'پڕۆفیسۆر و ڕاوێژکار د ژنان، دل، نەشتەرگەری، نەخۆشیێن ناڤخۆیی و پتر دا، دگەل پشکێن تەمام و فریاکەفتنا شەڤ و ڕۆژ ل دلێ زاخۆ.',ctaDocs:'نۆژدارێن مە بناسە',
  tagName:'د. فاطمە کمال خالد',tagRole:'پڕۆفیسۆرا هاریکار و نۆژدارا ڕاوێژکار',
  fSpec:'پسپۆری',fName:'ناڤێ نۆژداری',fNamePh:'نموونە: فاطمە',fGo:'ل نۆژداری بگەڕە',
  openNow:'نوکە ڤەکرییە',zakho:'دەمێ زاخۆ',navDocs:'نۆژدار',navComplain:'گازندە',navTips:'ئامۆژگاری',navDepts:'پشک',navContact:'پەیوەندی',
  sOpen:'فریاکەفتن و خزمەتا بەردەوام',sDocs:'نۆژدار و پڕۆفیسۆرێن پسپۆر',sDepts:'پشکێن پسپۆر',sVip:'ژوورێن تایبەت',
  docKicker:'ستافێ پزیشکی',docTitle:'نۆژدارێن مە',docSub:'نۆژداری هەلبژێرە و ڕاستەوخۆ پەیوەندیێ ب کلینیکا وی بکە بۆ نوبەگرتنێ.',feat:'نۆژدارا دیار',search:'ب ناڤێ نۆژداری یان پسپۆریێ بگەڕە',empty:'چ نۆژدار نەهاتنە دیتن.',
  clinic:'ژمارا کلینیکێ',doctor:'نۆژدار',secretary:'سکرتێر',lab:'تاقیگەها نەورۆز',profile:'پڕۆفایلێ تەمام',close:'گرتن',
  cats:{all:'هەمی',women:'ژنان و زاروکبوون',heart:'دل',internal:'ناڤخۆیی و شەکرە',rheum:'گەهـ و ڕۆماتیزم',neuro:'دەمار',surgery:'نەشتەرگەری',uro:'گورچیلک و جوبارێت میزێ',dental:'ددان و ئەرزینک',peds:'زاروک',derm:'پێست و لێزەر',radio:'تیشک و سۆنار',lab:'تاقیگەهـ'},
  deptKicker:'خزمەتگوزاری',deptTitle:'پشکێن نەخۆشخانێ',deptSub:'هەشت پشکێن پسپۆر یێن ئامادە شەڤ و ڕۆژ.',
  d:{surgery:['پشکا نەشتەرگەریێ','هۆلێن نەشتەرگەریێ یێن ئامادەکری.'],icu:['پشکا ئینعاشێ','چاڤدێریا چڕ بۆ نەخۆشێن ڕەوشا وان گران.'],cath:['پشکا قەستەرا دلی','دەستنیشانکرن و چارەسەریا نەخۆشیێن دلی.'],vip:['ژوورێن VIP','ژوورێن تایبەت بۆ نەخۆش و هەڤالێن وان.'],birth:['زایینا سروشتی','زایینا سروشتی د ژینگەهەکا پارێزراو دا.'],physio:['چارەسەریا سروشتی','دانیشتنێن ڤەگەڕاندنا لڤینێ.'],scope:['ناظورا گەدە و کۆلۆنێ','پشکنینا ناظوری بۆ گەدە و کۆلۆنێ.'],nicu:['زارۆکێن زوو بوویی و تازە بوویی','چاڤدێریا تایبەت بۆ زارۆکێن تازە.']},
  contactKicker:'سەرەدانا مە بکەن',cTitle:'کێشە و گازندە',cText:'کێشەیەک تە هەبوو یان گازندە یان پێشنیارەک؟ ڕاستەوخۆ ب ڕێڤەبەریا نەخۆشخانێ ڤە ل سەر ڤێ ژمارێ پەیوەندیێ بکە، ئەم گرنگیێ ب هەر تێبینیەکێ ددەین.',waMsg:'سلاڤ، دخوازم گازندەیەکێ / تێبینیەکێ پێشکێشی نەخۆشخانا نەورۆز بکەم:',contactTitle:'پەیوەندیێ ب مە بکەن',phoneL:'تەلەفۆنا نەخۆشخانێ',call:'پەیوەندی',copy:'کۆپی',copied:'ژمار هاتە کۆپیکرن',addrL:'ناڤ و نیشان',addr:'دهۆک – زاخۆ – بەرامبەر بنگەهێ ئاڤا زاخۆ',map:'ل سەر نەخشەی ڤەکە',followL:'مە فۆلۆ بکەن',follow:'نووترین هەواڵ ل سەر پەڕێن مە.',footAddr:'زاخۆ، بەرامبەر بنگەهێ ئاڤا زاخۆ'},
 en:{dir:'ltr',hname:'Nawroz Hospital',er:'24h Emergency',erCard:'Emergency · open 24 hours',callHosp:'Call the hospital',eyebrow:'Newroz Hospital & Complex · Zakho',
  h1:'Distinguished specialists, <em>under one roof</em>',lead:'Professors and consultants in women’s health, cardiology, surgery, internal medicine and more, with complete departments and round-the-clock emergency care in Zakho.',ctaDocs:'Meet our doctors',
  tagName:'Dr. Fatima Kamal Khalid',tagRole:'Assistant Professor & Consultant, Obstetrics and Gynecology',
  fSpec:'Specialty',fName:'Doctor’s name',fNamePh:'e.g. Fatima',fGo:'Find a doctor',
  openNow:'Open now',zakho:'Zakho time',navDocs:'Doctors',navComplain:'Complaints',navTips:'Health tips',navDepts:'Departments',navContact:'Contact',
  sOpen:'emergency and care',sDocs:'specialists and professors',sDepts:'specialist departments',sVip:'private patient rooms',
  docKicker:'Medical staff',docTitle:'Our doctors',docSub:'Choose a doctor and call their clinic directly to book an appointment.',feat:'Featured physician',search:'Search by name or specialty',empty:'No matching doctor.',
  clinic:'Clinic',doctor:'Doctor',secretary:'Secretary',lab:'Newroz Lab',profile:'Full profile',close:'Close',
  cats:{all:'All',women:'Women’s health',heart:'Cardiology',internal:'Internal medicine',rheum:'Rheumatology',neuro:'Neurology',surgery:'General surgery',uro:'Urology',dental:'Dental & Maxillofacial',peds:'Pediatrics',derm:'Dermatology',radio:'Radiology',lab:'Laboratory'},
  deptKicker:'Services',deptTitle:'Hospital departments',deptSub:'Eight specialist departments, ready day and night.',
  d:{surgery:['Operating Theatres','Equipped theatres for general and specialist surgery.'],icu:['Intensive Care','Continuous monitoring for critical patients.'],cath:['Cardiac Catheterization','Diagnosis and treatment of heart and artery disease.'],vip:['VIP Rooms','Private rooms with comfortable service for patients and companions.'],birth:['Natural Delivery','Maternity care and natural birth in a safe setting.'],physio:['Physiotherapy','Rehabilitation sessions to restore movement.'],scope:['GI Endoscopy','Endoscopic examination of the stomach and colon.'],nicu:['Neonatal Care','Dedicated care for premature and newborn babies.']},
  contactKicker:'Visit us',cTitle:'Problems and complaints',cText:'Had a problem, or have a complaint or suggestion? Contact the hospital administration directly on this number. Every comment is followed up.',waMsg:'Hello, I would like to submit a complaint / feedback to Nawroz Hospital:',contactTitle:'Contact us',phoneL:'Hospital phone',call:'Call',copy:'Copy',copied:'Number copied',addrL:'Address',addr:'Duhok – Zakho – opposite the Zakho Water Directorate',map:'Open in Maps',followL:'Follow us',follow:'News and updates on our pages.',footAddr:'Zakho, opposite the Water Directorate'}
};

const WAICON='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>';
const WAMSG={ar:'هلو، أريد أحجز موعد ويا',ku:'سلاڤ، دخوازم نوبەیەکێ بگرم دگەل',en:'Hello, I would like to book an appointment with'};
const waURL=(p,d)=>'https://wa.me/964'+String(p).replace(/\D/g,'').replace(/^0/,'')+'?text='+encodeURIComponent(WAMSG[lang]+' '+nm(d));
const fmt=p=>p.replace(/^(\d{4})(\d{3})(\d{4})$/,'$1 $2 $3');
const intl=p=>'+964'+p.slice(1);
const $=id=>document.getElementById(id);
let lang='ar',cat='all',q='';
try{const s=localStorage.getItem('newroz-lang');if(T[s])lang=s}catch(e){}
const nm=d=>lang==='en'?(d.n.en||d.n.ar):(d.n.ar||d.n.en);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pURL=d=>d.photo?(String(d.photo).startsWith('asset:')?'/_blob/'+String(d.photo).slice(6).replace(/[^a-zA-Z0-9]/g,''):String(d.photo)):(d.img?'img/'+d.id+'.webp':'');
const initials=d=>(d.ini||String(d.n.en||'').replace(/^(Prof\.?\s*)?(Dr\.?\s*)?/i,'').split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase()||'Dr');
const photo=d=>{const u=pURL(d);return u?`<img class="${d.cut===false?'cover':''}" src="${esc(u)}" alt="${esc(d.n.en)}" loading="lazy">`:`<div class="mono"><span>${esc(initials(d))}</span></div>`};
const tr=(o)=>o?(o[lang]||o.ar||o.en||''):'';
const creds=d=>`<div class="creds">${(d.cr||[]).map(c=>`<span>${esc(c)}</span>`).join('')}</div>`;
const lbl=(d,i,t)=>d.c==='lab'?t.lab:d.ph.length>1?(i?t.secretary:t.doctor):t.clinic;

function renderFeature(){
  const t=T[lang],d=D[0];if(!d||!d.ph[0])return;const p=d.ph[0];
  $('feature').innerHTML=`<div class="ph"><img src="img/${d.id}.webp" alt="${d.n.en}"></div><div class="body">
   <span class="badge">${ic('star',1)}${t.feat}</span>
   <h3>${esc(nm(d))}</h3><p class="role">${esc(tr(d.r))}</p><p class="focus">${esc(tr(d.f))}</p>${creds(d)}
   <div class="actions"><span class="phone">${fmt(p)}</span>
    <a class="btn btn-white" href="tel:${intl(p)}">${ic('phone')}${t.call}</a>
    <button class="btn btn-glass" type="button" data-copy="${p}">${ic('copy')}${t.copy}</button></div></div>`;
}
function match(d,s){return !s||[d.n.ar,d.n.en,d.r.ar,d.r.ku,d.r.en,T[lang].cats[d.c]].join(' ').toLowerCase().includes(s)}
function renderDocs(){
  const t=T[lang],s=q.trim().toLowerCase();
  const list=D.filter(d=>(cat==='all'||d.c===cat)&&match(d,s));
  const showFeat=false;
  $('feature').hidden=!showFeat;
  $('docs').innerHTML=list.length?list.map(d=>{const p=d.ph[0];return `<article class="doc">
    <button class="ph" type="button" data-open="${d.id}" aria-label="${esc(t.profile+': '+nm(d))}">${photo(d)}<span class="tag">${t.cats[d.c]}</span></button>
    <div class="body"><h3>${esc(nm(d))}</h3><p class="role">${esc(tr(d.r))}</p>${creds(d)}
     <button class="more" type="button" data-open="${d.id}">${t.profile}</button>
     <div class="foot"><div><small>${lbl(d,0,t)}</small><a class="num" href="tel:${intl(p)}">${fmt(p)}</a></div>
      <div class="icons"><button class="ib" type="button" data-copy="${p}" aria-label="${t.copy}">${ic('copy')}</button><a class="ib wa" href="${waURL(p,d)}" target="_blank" rel="noopener" aria-label="WhatsApp">${WAICON}</a><a class="ib solid" href="tel:${intl(p)}" aria-label="${t.call}">${ic('phone')}</a></div></div>
    </div></article>`}).join(''):(showFeat?'':`<p class="empty">${t.empty}</p>`);
}
function renderChips(){
  const t=T[lang];
  $('chips').innerHTML=CATS.map(c=>`<button type="button" data-c="${c}" aria-pressed="${c===cat}">${t.cats[c]}</button>`).join('');
  $('fspec').innerHTML=CATS.map(c=>`<option value="${c}"${c===cat?' selected':''}>${t.cats[c]}</option>`).join('');
}
function openDoc(id){
  const d=D.find(x=>x.id===id),t=T[lang];if(!d)return;
  $('dlgBody').innerHTML=`<div class="ph">${photo(d)}</div><div class="body">
    <span class="creds" style="direction:inherit"><span>${t.cats[d.c]}</span></span>
    <h3 id="dlgName">${esc(nm(d))}</h3><p class="role">${esc(tr(d.r))}</p><p class="focus">${esc(tr(d.f))}</p>${creds(d)}
    <div class="phones">${d.ph.map((p,i)=>`<div class="prow"><div><small>${lbl(d,i,t)}</small><a class="num" href="tel:${intl(p)}">${fmt(p)}</a></div><div class="icons"><button class="ib" type="button" data-copy="${p}" aria-label="${t.copy}">${ic('copy')}</button><a class="ib wa" href="${waURL(p,d)}" target="_blank" rel="noopener" aria-label="WhatsApp">${WAICON}</a><a class="ib solid" href="tel:${intl(p)}" aria-label="${t.call}">${ic('phone')}</a></div></div>`).join('')}</div></div>`;
  $('dlgX').setAttribute('aria-label',t.close);
  const dlg=$('dlg');
  try{dlg.showModal()}catch(e){dlg.setAttribute('open','')}
}
function closeDlg(){const dlg=$('dlg');try{dlg.close()}catch(e){dlg.removeAttribute('open')}}
function apply(l){
  lang=l;const t=T[l],r=document.documentElement;
  r.lang=l;r.dir=t.dir;
  document.querySelectorAll('[data-t]').forEach(el=>{if(t[el.dataset.t]!=null)el.textContent=t[el.dataset.t]});
  document.querySelectorAll('[data-h]').forEach(el=>el.innerHTML=t[el.dataset.h]);
  $('q').placeholder=t.search;$('fname').placeholder=t.fNamePh;
  $('dgrid').innerHTML=DEPTS.map(k=>`<article class="dept"><div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${DICONS[k]}</svg></div><h3>${t.d[k][0]}</h3><p>${t.d[k][1]}</p></article>`).join('');
  document.querySelectorAll('.langs button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===l));
  renderChips();renderFeature();renderDocs();
  try{localStorage.setItem('newroz-lang',l)}catch(e){}
}
$('docCount').textContent=D.length;
document.querySelectorAll('.langs button').forEach(b=>b.addEventListener('click',()=>apply(b.dataset.l)));
$('chips').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;cat=b.dataset.c;renderChips();renderDocs()});
$('q').addEventListener('input',e=>{q=e.target.value;renderDocs()});
$('finder').addEventListener('submit',e=>{
  e.preventDefault();cat=$('fspec').value;q=$('fname').value;$('q').value=q;
  renderChips();renderDocs();$('doctors').scrollIntoView({behavior:'smooth',block:'start'});
});
$('dlgX').addEventListener('click',closeDlg);
$('dlg').addEventListener('click',e=>{if(e.target===$('dlg'))closeDlg()});

const toast=$('toast');
function show(m){toast.textContent=m;toast.hidden=false;clearTimeout(show.t);show.t=setTimeout(()=>toast.hidden=true,1800)}
document.addEventListener('click',e=>{
  const o=e.target.closest('[data-open]');if(o){openDoc(o.dataset.open);return}
  const b=e.target.closest('[data-copy]');if(!b)return;
  const v=b.dataset.copy;
  navigator.clipboard?.writeText(v).then(()=>show(T[lang].copied+' · '+fmt(v))).catch(()=>show(fmt(v)));
});
function tick(){
  const z=new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Baghdad'}));
  $('clock').textContent=String(z.getHours()).padStart(2,'0')+':'+String(z.getMinutes()).padStart(2,'0');
}

/* Health tips — rotate automatically, start on today's tip */
const TIPS=[
 ['r',{ar:'ابدي يومك بگلاص ماي قبل كلشي.',ku:'ڕۆژا خۆ ب پەرداخەکا ئاڤێ دەست پێ بکە، بەری هەر تشتەکێ دی.',en:'Start your day with a glass of water before anything else.'}],
 ['h',{ar:'الوقاية أحسن من العلاج.',ku:'پاراستن ژ چارەسەریێ باشترە.',en:'Prevention is better than cure.'}],
 ['r',{ar:'امشي نص ساعة كل يوم، تحمي قلبك وتعدّل مزاجك.',ku:'٣٠ خولەک پیاسە ڕۆژانە دلێ تە دپارێزیت و دەروونێ تە خۆش دکەت.',en:'A 30-minute walk every day protects your heart and lifts your mood.'}],
 ['h',{ar:'خلّي نص صحنك خضرة وفواكه.',ku:'نیڤا تەبەقا خۆ بکە سەوزە و فێقی.',en:'Fill half your plate with vegetables and fruit.'}],
 ['r',{ar:'نام من ٧ لـ ٨ ساعات بالليل، هذا أساس الصحة.',ku:'خەوا ٧ هەتا ٨ دەمژمێران د شەڤێ دا بنگەهێ ساخلەمیێ یە.',en:'Seven to eight hours of sleep each night is the foundation of good health.'}],
 ['h',{ar:'قلّل الملح والشكر، قلبك وضغطك يشكرونك.',ku:'خوێ و شەکرێ کێم بکە، دل و زەختا تە دێ سوپاسیا تە کەن.',en:'Cut down on salt and sugar; your heart and blood pressure will thank you.'}],
 ['r',{ar:'لا تطفر الريوگ، هو طاقة يومك.',ku:'تێشتا خۆ بخۆ، ئەو هێزا ڕۆژا تە یە.',en:'Eat breakfast; it fuels your whole day.'}],
 ['h',{ar:'الفحص الدوري يكشف المرض قبل لا يكبر.',ku:'پشکنینا بەردەوام نەخۆشیێ بەری مەزن ببیت دیار دکەت.',en:'Regular check-ups catch illness before it grows.'}],
 ['r',{ar:'اشرب ماي طول اليوم، ولا تنتظر لمن تعطش.',ku:'د ناڤ ڕۆژێ دا ئاڤێ ڤەخۆ و چاڤەڕێی تێهنیبوونێ نەبە.',en:'Drink water throughout the day; don’t wait until you’re thirsty.'}],
 ['h',{ar:'غسّل إيدك زين، هي أول خط دفاع.',ku:'دەستێن خۆ باش بشۆ، ئەو هێلا ئێکێ یا بەرگریێ نە.',en:'Wash your hands well; they are your first line of defense.'}],
 ['r',{ar:'إذا شغلك كله گعدة، گوم وتحرّك كل ساعة.',ku:'ئەگەر کارێ تە ب ڕوینشتنێ یە، هەر دەمژمێرەکێ ڕابە و بلڤە.',en:'If you sit at work, get up and move every hour.'}],
 ['h',{ar:'ابتعد عن الجگاير، ماكو وقت متأخر حتى تبطّل.',ku:'ژ جگارێ دوور بکەڤە، چ دەم بۆ هێلانا وێ درەنگ نینە.',en:'Stay away from smoking; it is never too late to quit.'}],
 ['r',{ar:'عوف الموبايل والشاشات ساعة قبل النوم.',ku:'دەمژمێرەکێ بەری خەوێ ژ شاشەیان دوور بکەڤە.',en:'Put screens away an hour before bed.'}],
 ['h',{ar:'خمس دقايق تنفّس عميق تخفّف التوتر.',ku:'پێنج خولەک بێهنکێشانا کویر سترێسێ کێم دکەت.',en:'Five minutes of deep breathing eases stress.'}],
 ['r',{ar:'نام وگعد بنفس الوقت كل يوم.',ku:'هەر ڕۆژ د هەمان دەم دا بنڤە و ڕابە.',en:'Go to bed and wake up at the same time every day.'}],
 ['h',{ar:'لا تاخذ مضاد حيوي إلا بوصفة دكتور.',ku:'ئەنتیبایۆتیکان بێ ڕەچەتا نۆژداری نەخۆ.',en:'Take antibiotics only with a doctor’s prescription.'}],
 ['r',{ar:'خلّي وقت لأهلك وأصدقاءك، الصحة النفسية جزء من الصحة.',ku:'دەمەکی بۆ مالباتێ و هەڤالێن خۆ تەرخان بکە، ساخلەمیا دەروونی پشکەکە ژ ساخلەمیێ.',en:'Make time for family and friends; mental health is part of health.'}],
 ['h',{ar:'الضحكة دوا ببلاش للقلب.',ku:'بشکورین دەرمانەکێ بێ بەرامبەرە بۆ دلی.',en:'A smile is free medicine for the heart.'}]
];
const HABITS=[
 {i:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  t:{ar:['الصبح','ماي، ريوگ متوازن، وشوية شمس.'],ku:['سپێدە','ئاڤ، تێشتەکا هەڤسەنگ و ڕۆناهیا ڕۆژێ.'],en:['Morning','Water, a balanced breakfast and daylight.']}},
 {i:'<path d="M12 21c-4.4 0-8-3.6-8-8 0-5 4-9 8-11 4 2 8 6 8 11 0 4.4-3.6 8-8 8z"/><path d="M12 21V10"/>',
  t:{ar:['الأكل','خضرة وفواكه، ملح وشكر أقل.'],ku:['خوارن','سەوزە و فێقی، خوێ و شەکرا کێمتر.'],en:['Nutrition','More vegetables and fruit, less salt and sugar.']}},
 {i:'<circle cx="13" cy="4" r="2"/><path d="M7 21l3-7 3 3v5"/><path d="M6 12l4-4 4 2 4-1"/>',
  t:{ar:['الحركة','نص ساعة مشي باليوم.'],ku:['لڤین','٣٠ خولەک پیاسە د ڕۆژێ دا.'],en:['Movement','30 minutes of walking a day.']}},
 {i:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  t:{ar:['النوم','٧–٨ ساعات وبنفس الوقت.'],ku:['خەو','٧–٨ دەمژمێر د دەمەکێ جێگیر دا.'],en:['Sleep','7–8 hours on a regular schedule.']}}
];
const TIPL={ar:{kicker:'نصيحة صحية',r:'روتين يومي',h:'حياة صحية',today:'نصيحة اليوم',prev:'اللي قبلها',next:'اللي بعدها'},ku:{kicker:'ئامۆژگاریا ساخلەمیێ',r:'ڕۆتینا ڕۆژانە',h:'ژیانا ساخلەم',today:'ئامۆژگاریا ئەڤرۆ',prev:'یا بەری',next:'یا پاشتر'},en:{kicker:'Health tip',r:'Daily routine',h:'Healthy living',today:'Tip of the day',prev:'Previous',next:'Next'}};
const DAYIDX=Math.floor((Date.now()+3*3600e3)/864e5)%TIPS.length;
let ti=DAYIDX,tStart=performance.now(),tPaused=false;const TDUR=8000;
function drawTip(anim){
  const [k,txt]=TIPS[ti],L=TIPL[lang];
  $('tipTag').textContent=L[k];$('tipText').textContent=txt[lang];
  $('tipCount').textContent=(ti+1)+' / '+TIPS.length;
  $('tipDay').textContent=ti===DAYIDX?L.today:L.kicker;
  if(anim){const st=$('tipStage');st.classList.remove('swap');void st.offsetWidth;st.classList.add('swap')}
}
function goTip(d){ti=(ti+d+TIPS.length)%TIPS.length;tStart=performance.now();drawTip(true)}
function tipLoop(now){
  if(tPaused) tStart=now-(parseFloat($('tipBar').dataset.p||0)*TDUR);
  const p=Math.min((now-tStart)/TDUR,1);$('tipBar').style.width=(p*100)+'%';$('tipBar').dataset.p=p;
  if(p>=1&&!tPaused)goTip(1);
  requestAnimationFrame(tipLoop);
}
function drawTips(){
  const L=TIPL[lang];
  document.querySelector('[data-t="tipKicker"]').textContent=L.kicker;
  $('tipPrev').setAttribute('aria-label',L.prev);$('tipNext').setAttribute('aria-label',L.next);
  $('habits').innerHTML=HABITS.map(h=>`<div class="habit"><div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${h.i}</svg></div><div><b>${h.t[lang][0]}</b><span>${h.t[lang][1]}</span></div></div>`).join('');
  drawTip(false);
}
$('tipPrev').addEventListener('click',()=>goTip(-1));
$('tipNext').addEventListener('click',()=>goTip(1));
const tb=document.querySelector('.tipbox');
['mouseenter','focusin'].forEach(e=>tb.addEventListener(e,()=>tPaused=true));
['mouseleave','focusout'].forEach(e=>tb.addEventListener(e,()=>tPaused=false));
const _apply=apply;apply=function(l){_apply(l);drawTips()};

/* Hero lineup: cycle through every doctor with a photo, Dr. Fatima first */
let LU=[],lk=0;
function refreshLU(){LU=D.filter(d=>pURL(d)&&d.cut!==false);if(!LU.length)LU=D.slice(0,1);lk=lk%Math.max(LU.length,1);LU.forEach(d=>{const i=new Image();i.src=pURL(d)})}
refreshLU();
let slI=0,slT0=performance.now(),slPause=false;const SLD=5000;
function slDraw(dir){
  const st=$('slStage');if(!st||!LU.length)return;
  slI=(slI%LU.length+LU.length)%LU.length;const d=LU[slI],t=T[lang],p=d.ph[0];
  const img=document.createElement('img');img.src=pURL(d);img.alt=d.n.en||'';if(d.cut===false)img.className='cover';
  if(dir){img.classList.add(dir>0?'from-next':'from-prev');st.querySelectorAll('img').forEach(o=>{o.classList.add(dir>0?'to-prev':'to-next');setTimeout(()=>o.remove(),700)})}else{st.innerHTML=''}
  st.appendChild(img);
  if(dir)requestAnimationFrame(()=>requestAnimationFrame(()=>img.classList.remove('from-next','from-prev')));
  const info=$('slInfo');
  info.innerHTML=`<span class="sl-tag">${esc(t.cats[d.c]||'')}</span><b>${esc(nm(d))}</b><span class="sl-role">${esc(tr(d.r))}</span>`+
   `<button class="sl-more" type="button" data-open="${d.id}">${esc(t.profile)}</button>`;
  if(dir){info.classList.remove('swap');void info.offsetWidth;info.classList.add('swap')}
  $('slCount').textContent=(slI+1)+' / '+LU.length;
}
function slGo(dir){slI+=dir;slT0=performance.now();slDraw(dir)}
function slLoop(now){
  if(slPause)slT0=now-(parseFloat($('slBar').dataset.p||0)*SLD);
  const pr=Math.min((now-slT0)/SLD,1);$('slBar').style.width=(pr*100)+'%';$('slBar').dataset.p=pr;
  if(pr>=1&&!slPause&&!document.hidden)slGo(1);
  requestAnimationFrame(slLoop);
}
function luSet(){slDraw(0)}
$('slPrev').addEventListener('click',()=>slGo(-1));
$('slNext').addEventListener('click',()=>slGo(1));
['mouseenter','focusin'].forEach(e=>$('slider').addEventListener(e,()=>slPause=true));
['mouseleave','focusout'].forEach(e=>$('slider').addEventListener(e,()=>slPause=false));
requestAnimationFrame(slLoop);
const _apply2=apply;apply=function(l){_apply2(l);luSet();$('waLink').href='https://wa.me/9647508896565?text='+encodeURIComponent(T[l].waMsg)};

/* ===== Live data + doctor panel (db / user / assets) ===== */
const BUILTIN=D.map((d,i)=>({...d,order:(i+1)*10}));
const A={
 ar:{fab:'لوحة الأطباء',title:'لوحة تحكم الأطباء',note:'أي تعديل يبين هسه لكل واحد يفتح الموقع.',add:'ضيف دكتور',edit:'عدّل',del:'امسح',sure:'متأكد؟ امسح',up:'فوگ',down:'جوّه',hidden:'مخفي',back:'رجوع',save:'احفظ',saved:'انحفظ',deleted:'انمسح',
  nameAr:'الاسم (عربي/كوردي)',nameEn:'الاسم (إنكليزي)',spec:'الاختصاص',role:'اللقب / الاختصاص',focus:'التفاصيل',phones:'أرقام التلفون (افصلها بفاصلة)',creds:'الشهادات (افصلها بفاصلة)',photo:'الصورة',upload:'نزّل صورة',remove:'شيل الصورة',cut:'صورة مگصوصة بدون خلفية',hide:'خفيه من الموقع',empty:'بعد ماكو أطباء.',import:'جيب الأطباء الحاليين',err:'ما انحفظ. تأكد عندك صلاحية تعديل وجرّب مرة لخ.',needName:'اكتب اسم الدكتور أول.',uploading:'دا تنزل الصورة…',noUpload:'تنزيل الصور بس للمحررين.',quota:'المساحة مليانة. امسح صور قديمة وجرّب.'},
 ku:{fab:'پانێلا نۆژداران',title:'پانێلا کۆنترۆلا نۆژداران',note:'گوهۆڕین یەکسەر بۆ هەمی کەسێن سایتی ڤەدکەن دیار دبن.',add:'نۆژدارەکێ نوی زێدە بکە',edit:'دەستکاری',del:'ژێبرن',sure:'پشتڕاستکرنا ژێبرنێ',up:'سەرەوە',down:'خوارەوە',hidden:'ڤەشارتی',back:'زڤڕین',save:'پاشەکەفت',saved:'هاتە پاشەکەفتکرن',deleted:'هاتە ژێبرن',
  nameAr:'ناڤ (عەرەبی/کوردی)',nameEn:'ناڤ (ئینگلیزی)',spec:'پسپۆری',role:'نازناڤ / پسپۆری',focus:'وردەکاری',phones:'ژمارێن تەلەفۆنێ (ب کۆما جودا بکە)',creds:'بڕوانامە (ب کۆما جودا بکە)',photo:'وێنە',upload:'وێنەی بار بکە',remove:'وێنەی لاببە',cut:'وێنەیێ بێ پاشبنەما',hide:'ژ سایتی ڤەشێرە',empty:'هێشتا چ نۆژدار نینن.',import:'نۆژدارێن نوکە ئیمپۆرت بکە',err:'پاشەکەفت سەرنەکەفت. دەستهەلاتا دەستکاریێ پشکنە و دووبارە هەول بدە.',needName:'پێشیێ ناڤێ نۆژداری بنڤیسە.',uploading:'وێنە بار دبیت…',noUpload:'بارکرنا وێنەیان تەنێ بۆ ئێدیتەرانە.',quota:'جه پڕ بوویە. وێنەیێن کەڤن ژێببە و دووبارە هەول بدە.'},
 en:{fab:'Doctor panel',title:'Doctor panel',note:'Changes appear immediately for everyone who opens the site.',add:'Add doctor',edit:'Edit',del:'Delete',sure:'Confirm delete',up:'Move up',down:'Move down',hidden:'Hidden',back:'Back',save:'Save',saved:'Saved',deleted:'Deleted',
  nameAr:'Name (Arabic/Kurdish)',nameEn:'Name (English)',spec:'Specialty',role:'Title / specialty',focus:'Details',phones:'Phone numbers (comma separated)',creds:'Credentials (comma separated)',photo:'Photo',upload:'Upload photo',remove:'Remove photo',cut:'Cut-out photo (no background)',hide:'Hide from site',empty:'No doctors yet.',import:'Import current doctors',err:'Could not save. Check that you can edit this page and try again.',needName:'Enter the doctor’s name first.',uploading:'Uploading photo…',noUpload:'Photo upload is for editors only.',quota:'Storage is full. Delete old photos and try again.'}
};
const LANGS=[['ar','عربي'],['ku','کوردی'],['en','English']];
let DB=null,USER=null,ASSETS=null,canAdmin=false,ALL=[],admView='list',admEdit=null,admPhoto=null,admBusy=false,delArm=null;
const clean=(x,i)=>{
  const o=x||{};const id=String(o.id||'').replace(/[^a-zA-Z0-9_-]/g,'')||('d'+i);
  const obj=v=>v&&typeof v==='object'?{ar:String(v.ar||''),ku:String(v.ku||''),en:String(v.en||'')}:{ar:'',ku:'',en:''};
  return {id,order:Number(o.order)||((i+1)*10),c:CATS.includes(o.c)&&o.c!=='all'?o.c:'internal',
    ph:(Array.isArray(o.ph)?o.ph:[]).map(p=>String(p).replace(/\D/g,'')).filter(p=>p.length>=7).slice(0,4),
    cr:(Array.isArray(o.cr)?o.cr:[]).map(String).filter(Boolean).slice(0,6),
    n:obj(o.n),r:obj(o.r),f:obj(o.f),photo:typeof o.photo==='string'?o.photo:'',cut:o.cut!==false,hidden:!!o.hidden,img:0,ini:o.ini?String(o.ini).slice(0,3):''};
};
function useData(list){
  ALL=list.slice().sort((a,b)=>a.order-b.order);
  D=ALL.filter(d=>!d.hidden&&(d.ph.length||true));
  if(!D.length)D=[];
  $('docCount').textContent=D.length;
  refreshLU();renderDocs();luSet();
  if($('adm').open&&admView==='list')admRender();
}
function aT(){return A[lang]||A.ar}
function admRender(){
  const a=aT(),b=$('admBody');$('admTitle').textContent=a.title;$('admFabTxt').textContent=a.fab;
  if(admView==='list'){
    b.innerHTML=`<div class="admbar"><p class="admnote">${esc(a.note)}</p><div style="display:flex;gap:8px;flex-wrap:wrap">${ALL.length?'':`<button class="abtn" type="button" data-a="import">${esc(a.import)}</button>`}<button class="abtn pri" type="button" data-a="add">${ic('star',0).replace(SVG.star,'<path d="M12 5v14M5 12h14"/>')}${esc(a.add)}</button></div></div>
    <div class="admlist">${ALL.length?ALL.map((d,i)=>`<div class="arow${d.hidden?' off':''}"><div class="th">${photo(d)}</div><div><b>${esc(nm(d))}</b><small>${esc(T[lang].cats[d.c]||'')}${d.hidden?' · '+esc(a.hidden):''}${d.ph[0]?' · '+fmt(d.ph[0]):''}</small></div>
      <div class="acts"><button class="abtn" type="button" data-a="up" data-id="${d.id}" aria-label="${esc(a.up)}"${i===0?' disabled':''}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg></button><button class="abtn" type="button" data-a="down" data-id="${d.id}" aria-label="${esc(a.down)}"${i===ALL.length-1?' disabled':''}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><button class="abtn" type="button" data-a="edit" data-id="${d.id}">${esc(a.edit)}</button><button class="abtn danger${delArm===d.id?' sure':''}" type="button" data-a="del" data-id="${d.id}">${esc(delArm===d.id?a.sure:a.del)}</button></div></div>`).join(''):`<p class="admnote">${esc(a.empty)}</p>`}</div>`;
    return;
  }
  const d=admEdit,L=k=>esc(a[k]);
  const field=(key,lg,ta)=>{const v=esc((d[key]||{})[lg]||'');const dir=lg==='en'?' class="ltr" dir="ltr"':' dir="rtl"';return ta?`<textarea id="f-${key}-${lg}"${dir}>${v}</textarea>`:`<input id="f-${key}-${lg}"${dir} value="${v}">`};
  b.innerHTML=`<form class="aform" id="aform">
    <label>${L('nameAr')}<input id="f-n-ar" dir="rtl" value="${esc(d.n.ar)}"></label>
    <label>${L('nameEn')}<input id="f-n-en" class="ltr" dir="ltr" value="${esc(d.n.en)}"></label>
    <label>${L('spec')}<select id="f-c">${CATS.filter(c=>c!=='all').map(c=>`<option value="${c}"${c===d.c?' selected':''}>${esc(T[lang].cats[c])}</option>`).join('')}</select></label>
    <label>${L('phones')}<input id="f-ph" class="ltr" dir="ltr" inputmode="tel" value="${esc(d.ph.join(', '))}"></label>
    <label class="full">${L('creds')}<input id="f-cr" class="ltr" dir="ltr" value="${esc(d.cr.join(', '))}"></label>
    <fieldset><legend>${L('role')}</legend>${LANGS.map(([lg,ln])=>`<label>${ln}${field('r',lg)}</label>`).join('')}</fieldset>
    <fieldset><legend>${L('focus')}</legend>${LANGS.map(([lg,ln])=>`<label>${ln}${field('f',lg,1)}</label>`).join('')}</fieldset>
    <div class="aphoto"><div class="th" id="f-th">${photo({...d,photo:admPhoto??d.photo})}</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="display:flex;gap:8px;flex-wrap:wrap">${ASSETS?`<label class="abtn" for="f-file">${L('upload')}</label><input id="f-file" type="file" accept="image/png,image/jpeg,image/webp" hidden>`:`<span class="admnote">${L('noUpload')}</span>`}<button class="abtn" type="button" data-a="nophoto">${L('remove')}</button></div>
        <label class="chk"><input id="f-cut" type="checkbox"${d.cut!==false?' checked':''}>${L('cut')}</label>
        <label class="chk"><input id="f-hide" type="checkbox"${d.hidden?' checked':''}>${L('hide')}</label>
      </div></div>
    <p class="aerr full" id="f-err" hidden></p>
  </form>
  <div class="afoot"><button class="abtn" type="button" data-a="back">${L('back')}</button><button class="abtn pri" type="button" data-a="save" id="f-save">${L('save')}</button></div>`;
  const fi=$('f-file');if(fi)fi.addEventListener('change',upPhoto);
}
async function upPhoto(e){
  const f=e.target.files&&e.target.files[0];if(!f||!ASSETS)return;const a=aT(),err=$('f-err');
  err.hidden=false;err.style.color='var(--muted)';err.textContent=a.uploading;
  try{const r=await ASSETS.upload(f,{type:['image/png','image/jpeg','image/webp'].includes(f.type)?f.type:'image/jpeg'});admPhoto=r.url||('asset:'+r.id);
    $('f-cut').checked=false;$('f-th').innerHTML=photo({...admEdit,photo:admPhoto,cut:false});err.hidden=true;err.style.color=''}
  catch(x){err.style.color='';err.textContent=x&&x.code==='quota_or_state'?a.quota:x&&x.code==='too_large'?'≤ 20 MB':a.err}
}
function collect(){
  const g=id=>($(id)?.value||'').trim();const d=admEdit;
  return {...d,n:{ar:g('f-n-ar'),ku:g('f-n-ar'),en:g('f-n-en')},c:g('f-c'),
    ph:g('f-ph').split(/[,،\n]+/).map(p=>p.replace(/\D/g,'')).filter(p=>p.length>=7),
    cr:g('f-cr').split(/[,،]+/).map(x=>x.trim()).filter(Boolean),
    r:{ar:g('f-r-ar'),ku:g('f-r-ku'),en:g('f-r-en')},f:{ar:g('f-f-ar'),ku:g('f-f-ku'),en:g('f-f-en')},
    photo:admPhoto??d.photo,cut:$('f-cut').checked,hidden:$('f-hide').checked};
}
const toDoc=d=>({order:d.order,c:d.c,ph:d.ph,cr:d.cr,n:d.n,r:d.r,f:d.f,photo:d.photo||'',cut:d.cut!==false,hidden:!!d.hidden});
async function saveDoc(){
  if(admBusy)return;const a=aT(),d=collect(),err=$('f-err');
  if(!d.n.ar&&!d.n.en){err.hidden=false;err.textContent=a.needName;return}
  admBusy=true;$('f-save').disabled=true;
  try{await DB.collection('doctors').doc(d.id).set(toDoc(d));admView='list';admEdit=null;admPhoto=null;show(a.saved);admRender()}
  catch(x){err.hidden=false;err.textContent=x&&x.code==='quota_exceeded'?a.quota:a.err;$('f-save').disabled=false}
  admBusy=false;
}
async function moveDoc(id,dir){
  if(admBusy)return;const i=ALL.findIndex(d=>d.id===id),j=i+dir;if(i<0||j<0||j>=ALL.length)return;
  admBusy=true;const x=ALL[i],y=ALL[j];let ox=x.order,oy=y.order;if(ox===oy){ox=(i+1)*10;oy=(j+1)*10}
  try{await DB.collection('doctors').doc(x.id).update({order:oy});await DB.collection('doctors').doc(y.id).update({order:ox})}catch(e){show(aT().err)}
  admBusy=false;
}
async function delDoc(id){
  if(delArm!==id){delArm=id;admRender();setTimeout(()=>{if(delArm===id){delArm=null;if(admView==='list')admRender()}},4000);return}
  delArm=null;try{await DB.collection('doctors').doc(id).delete();show(aT().deleted)}catch(e){show(aT().err)}
}
async function importBuiltin(){
  if(admBusy)return;admBusy=true;
  try{for(const d of BUILTIN){await DB.collection('doctors').doc(d.id).set(toDoc({...clean(d,0),order:d.order,photo:d.img?'img/'+d.id+'.webp':''}))}}catch(e){show(aT().err)}
  admBusy=false;
}
$('admBody').addEventListener('click',e=>{
  const b=e.target.closest('[data-a]');if(!b)return;const k=b.dataset.a,id=b.dataset.id;
  if(k==='add'){const nid='dr'+Date.now().toString(36);admEdit=clean({id:nid,order:(ALL.length?ALL[ALL.length-1].order:0)+10,c:'internal',cut:false},0);admPhoto=null;admView='edit';admRender()}
  else if(k==='edit'){admEdit=ALL.find(d=>d.id===id);admPhoto=null;admView='edit';admRender()}
  else if(k==='back'){admView='list';admEdit=null;admPhoto=null;admRender()}
  else if(k==='save')saveDoc();
  else if(k==='up')moveDoc(id,-1);
  else if(k==='down')moveDoc(id,1);
  else if(k==='del')delDoc(id);
  else if(k==='import')importBuiltin();
  else if(k==='nophoto'){admPhoto='';$('f-th').innerHTML=photo({...admEdit,photo:''})}
});
$('admOpen').addEventListener('click',()=>{admView='list';admRender();try{$('adm').showModal()}catch(e){$('adm').setAttribute('open','')}});
$('admX').addEventListener('click',()=>{try{$('adm').close()}catch(e){$('adm').removeAttribute('open')}});
(async()=>{
  if(!window.claude||!claude.use)return;
  const [db,user]=await Promise.all([claude.use('db'),claude.use('user')]);
  DB=db;USER=user;if(!DB)return;
  DB.collection('doctors').orderBy('order').onSnapshot(snap=>{
    if(snap.empty){ALL=[];if(canAdmin&&$('adm').open)admRender();return}
    useData(snap.docs.map((x,i)=>clean({...x.data(),id:x.id},i)));
  },()=>{});
  canAdmin=!!(USER&&await USER.canEdit());
  if(canAdmin){ASSETS=await claude.use('assets');$('admFabTxt').textContent=aT().fab;$('admOpen').hidden=false}
})();
const _apply3=apply;apply=function(l){_apply3(l);if($('admFabTxt'))$('admFabTxt').textContent=aT().fab;if($('adm').open)admRender()};

/* ===== AI assistant v2: Claude AI when available + built-in local engine for everyone ===== */
const AIT={
 ar:{fab:'المساعد الذكي',title:'مساعد نوروز الذكي',sub:'متوفر ٢٤ ساعة · يساعدك تلگى الدكتور المناسب',hello:'هلا بيك! آني المساعد الذكي لمستشفى نوروز. اكتبلي الأعراض أو الاختصاص اللي تدوره، أو اسألني عن العنوان والأرقام والأقسام.',
  ph:'اكتب سؤالك هنا…',send:'ارسل',stop:'وقّف',think:'دا أكتب…',clear:'محادثة جديدة',callH:'خابر المستشفى',mic:'تكلّم',listening:'دا أسمعك…',
  q:['أي دكتور للحمل والولادة؟','عندي صداع مستمر','ابني عنده حرارة','وين مكان المستشفى؟'],
  note:'المساعد يعطي معلومات عامة بس، ما يشخّص ولا يعوّض الطبيب. بالحالات الطارئة اتصل فوراً 0750 889 6565.',
  call:'اتصال',wa:'واتساب',map:'افتح الخريطة',er:'اتصل بالطوارئ',profile:'الملف',copy:'نسخ',copied:'انتسخ'},
 ku:{fab:'یاریدەدەرێ زیرەک',title:'یاریدەدەرێ زیرەک',sub:'٢٤ دەمژمێر ئامادەیە · نۆژدارێ گونجای بۆ تە دبینیت',hello:'بخێر بێی! ئەز یاریدەدەرێ زیرەکێ نەخۆشخانا نەورۆزم. نیشانێن نەخۆشیێ یان ئەو پسپۆریا تو لێ دگەڕێی بنڤیسە، یان پسیارا ناڤنیشان، ژمارە و پشکان ژ من بکە.',
  ph:'پسیارا خۆ ل ڤێرێ بنڤیسە…',send:'بهنێرە',stop:'ڕاوەستینە',think:'دنڤیسم…',clear:'گفتوگۆیا نوی',callH:'پەیوەندیێ ب نەخۆشخانێ بکە',mic:'باخڤە',listening:'گوهێ خۆ ددەمە تە…',
  q:['کیژ نۆژدار بۆ دووگیانیێ؟','سەرئێشانەکا بەردەوام هەیە','زاروکێ من تا هەیە','نەخۆشخانە ل کیرێیە؟'],
  note:'یاریدەدەر تەنێ زانیاریێن گشتی ددەت، دەستنیشان ناکەت و جهێ نۆژداری ناگریت. د بارێن لەزگین دا یەکسەر پەیوەندیێ ب 0750 889 6565 بکە.',
  call:'پەیوەندی',wa:'واتسئەپ',map:'نەخشێ ڤەکە',er:'پەیوەندیێ ب فریاکەفتنێ بکە',profile:'پرۆفایل',copy:'کۆپی',copied:'هاتە کۆپیکرن'},
 en:{fab:'AI assistant',title:'Newroz AI Assistant',sub:'Available 24/7 · finds the right doctor for you',hello:'Hello! I’m the Newroz Hospital AI assistant. Tell me your symptoms or the specialty you need, or ask about our address, numbers and departments.',
  ph:'Type your question…',send:'Send',stop:'Stop',think:'Typing…',clear:'New chat',callH:'Call the hospital',mic:'Speak',listening:'Listening…',
  q:['Which doctor for pregnancy?','I have a constant headache','My child has a fever','Where is the hospital?'],
  note:'The assistant gives general information only — it does not diagnose or replace a doctor. In an emergency call 0750 889 6565 immediately.',
  call:'Call',wa:'WhatsApp',map:'Open map',er:'Call emergency',profile:'Profile',copy:'Copy',copied:'Copied'}
};
/* local answers */
const AIR={
 ar:{spec:'لاختصاص {c} أنصحك بالأطباء هذول عدنا. تگدر تخابر العيادة أو تراسلهم واتساب مباشرة.',specOne:'لاختصاص {c} عدنا هذا الدكتور. تگدر تخابر العيادة أو تراسله واتساب مباشرة.',
  er:'⚠️ إذا الحالة طارئة لا تنتظر: تعال فوراً لطوارئ المستشفى (مفتوحة ٢٤ ساعة) أو خابر 0750 889 6565 هسه.',
  loc:'المستشفى بزاخو، مقابل مديرية ماء زاخو (دهوك – زاخو). الطوارئ مفتوحة ٢٤ ساعة.',
  phone:'رقم المستشفى الرئيسي 0750 889 6565، يشتغل اتصال وواتساب. لكل دكتور رقم عيادة خاص، اكتبلي الاختصاص وأطلعلك الرقم.',
  hours:'المستشفى والطوارئ مفتوحة ٢٤ ساعة، ٧ أيام بالأسبوع. أوقات عيادات الأطباء تختلف، خابر عيادة الدكتور حتى تتأكد من الموعد.',
  depts:'عدنا هالأقسام: {d}. وفوگها طوارئ ٢٤ ساعة.',complain:'نعتذر إذا صارت عندك مشكلة. تواصل ويا إدارة المستشفى مباشرة على 0750 889 6565 (اتصال أو واتساب)، وكل ملاحظة نهتم بيها.',
  greet:'هلا بيك! شلون أگدر أساعدك اليوم؟',thanks:'العفو! نتمنالك الصحة والعافية.',doc:'هذا الدكتور اللي تسأل عنه:',docs:'هذول الأطباء اللي يطابقون سؤالك:',
  appt:'للحجز خابر عيادة الدكتور مباشرة أو راسله واتساب. اكتبلي الاختصاص أو اسم الدكتور وأطلعلك رقمه.',price:'الأسعار تختلف حسب الدكتور والفحص، الأحسن تخابر 0750 889 6565 أو عيادة الدكتور وتسأل مباشرة.',
  social:'تابعونا: إنستغرام nawrozhospital، تيك توك @nawroz.hospital، وصفحتنا على فيسبوك.',
  fb:'ما فهمت سؤالك زين. اكتبلي الأعراض أو الاختصاص اللي تدوره (مثلاً: قلب، أطفال، حمل، جلدية)، أو خابر المستشفى على 0750 889 6565.',
  sug:{spec:['شنو أوقات الدوام؟','وين مكان المستشفى؟'],er:['وين مكان المستشفى؟','رقم المستشفى'],loc:['رقم المستشفى','شنو الأقسام الموجودة؟'],gen:['شنو الأقسام الموجودة؟','أي دكتور للقلب؟','وين مكان المستشفى؟']}},
 ku:{spec:'بۆ {c} ئەڤ نۆژدارە ل نک مە هەنە. دشێی ڕاستەوخۆ پەیوەندیێ ب کلینیکێ بکەی یان ل واتسئەپێ نامە بهنێری.',specOne:'بۆ {c} ئەڤ نۆژدارە ل نک مە هەیە. دشێی ڕاستەوخۆ پەیوەندیێ ب کلینیکێ بکەی یان ل واتسئەپێ نامە بهنێری.',
  er:'⚠️ ئەگەر بارێ لەزگینە چاڤەڕێ نەبە: یەکسەر وەرە فریاکەفتنا نەخۆشخانێ (٢٤ دەمژمێر ڤەکرییە) یان نوکە پەیوەندیێ ب 0750 889 6565 بکە.',
  loc:'نەخۆشخانە ل زاخۆیە، بەرامبەر بەڕێوەبەریا ئاڤا زاخۆ (دهۆک – زاخۆ). فریاکەفتن ٢٤ دەمژمێر ڤەکرییە.',
  phone:'ژمارا سەرەکی یا نەخۆشخانێ 0750 889 6565 ە، بۆ پەیوەندی و واتسئەپێ. هەر نۆژدارەکی ژمارا کلینیکا خۆ هەیە، پسپۆریێ بنڤیسە دا ژمارێ بدەمە تە.',
  hours:'نەخۆشخانە و فریاکەفتن ٢٤ دەمژمێر، ٧ ڕۆژێن حەفتیێ ڤەکرینە. دەمێن کلینیکێن نۆژداران جودانە، پەیوەندیێ ب کلینیکێ بکە دا پشتڕاست ببی.',
  depts:'ئەڤ پشکە ل نک مە هەنە: {d}. و فریاکەفتن ژی ٢٤ دەمژمێرە.',complain:'ببورە ئەگەر کێشەیەک بۆ تە چێبوو. ڕاستەوخۆ پەیوەندیێ ب ڕێڤەبەریا نەخۆشخانێ بکە ل سەر 0750 889 6565 (پەیوەندی یان واتسئەپ)، ئەم گرنگیێ ب هەمی تێبینیان ددەین.',
  greet:'سلاڤ! چاوا دشێم هاریکاریا تە بکەم ئەڤرۆ؟',thanks:'سەرچاڤا! ساخلەمی و سەلامەتی بۆ تە دخوازین.',doc:'ئەڤە ئەو نۆژدارە یێ تو پسیار دکەی:',docs:'ئەڤە ئەو نۆژدارن یێن دگەل پسیارا تە دگونجن:',
  appt:'بۆ گرتنا نوبەیێ ڕاستەوخۆ پەیوەندیێ ب کلینیکا نۆژداری بکە یان ل واتسئەپێ نامە بهنێرە. پسپۆری یان ناڤێ نۆژداری بنڤیسە دا ژمارا وی نیشا تە بدەم.',price:'بها ل دویڤ نۆژداری و پشکنینێ جودانە، باشترە پەیوەندیێ ب 0750 889 6565 یان کلینیکا نۆژداری بکەی و ڕاستەوخۆ پسیار بکەی.',
  social:'مە فۆلۆ بکەن: ئینستاگرام nawrozhospital، تیکتۆک @nawroz.hospital، و پەیجا مە ل فەیسبووکێ.',
  fb:'ئەز باش تێنەگەهشتم. نیشانێن نەخۆشیێ یان ئەو پسپۆریا تو لێ دگەڕێی بنڤیسە (بۆ نموونە: دل، زاروک، دووگیانی، پێست)، یان پەیوەندیێ ب 0750 889 6565 بکە.',
  sug:{spec:['دەمێن دەوامێ چنە؟','نەخۆشخانە ل کیرێیە؟'],er:['نەخۆشخانە ل کیرێیە؟','ژمارا نەخۆشخانێ'],loc:['ژمارا نەخۆشخانێ','کیژ پشک هەنە؟'],gen:['کیژ پشک هەنە؟','کیژ نۆژدار بۆ دلی؟','نەخۆشخانە ل کیرێیە؟']}},
 en:{spec:'For {c}, these are our specialists. You can call or WhatsApp their clinic directly.',specOne:'For {c}, this is our specialist. You can call or WhatsApp the clinic directly.',
  er:'⚠️ If this is an emergency, don’t wait: come to our 24-hour emergency department now or call 0750 889 6565.',
  loc:'We’re in Zakho, opposite the Zakho Water Directorate (Duhok – Zakho). The emergency department is open 24 hours.',
  phone:'Our main number is 0750 889 6565 (calls and WhatsApp). Each doctor also has a clinic number — tell me the specialty and I’ll show it.',
  hours:'The hospital and emergency department are open 24/7. Clinic hours differ per doctor — call the doctor’s clinic to confirm.',
  depts:'Our departments: {d} — plus a 24-hour emergency department.',complain:'Sorry to hear that. Please contact hospital administration directly on 0750 889 6565 (call or WhatsApp) — every note matters to us.',
  greet:'Hi! How can I help you today?',thanks:'You’re welcome! Wishing you good health.',doc:'Here’s the doctor you asked about:',docs:'These doctors match your question:',
  appt:'To book, call or WhatsApp the doctor’s clinic directly. Tell me the specialty or doctor’s name and I’ll show the number.',price:'Prices depend on the doctor and the test — best to call 0750 889 6565 or the doctor’s clinic and ask directly.',
  social:'Follow us: Instagram nawrozhospital, TikTok @nawroz.hospital, and our Facebook page.',
  fb:'I didn’t quite get that. Tell me your symptoms or the specialty you need (e.g. heart, children, pregnancy, skin), or call 0750 889 6565.',
  sug:{spec:['What are your opening hours?','Where is the hospital?'],er:['Where is the hospital?','Hospital phone number'],loc:['Hospital phone number','What departments do you have?'],gen:['What departments do you have?','Which doctor for the heart?','Where is the hospital?']}}
};
/* keyword lists (normalized) */
const KW={
 er:['الم بالصدر','الم في الصدر','وجع بالصدر','وجع صدر','ضيق نفس','ضيق تنفس','ما اگدر اتنفس','ما اقدر اتنفس','ما گدر اتنفس','نزيف','نزف','فاقد الوعي','فقد الوعي','اغماء','مغمى','جلطه','سكته','حادث','تسمم','حرق شديد','انتحار','اقتل نفسي','تشنج',
  'ئیشانا سنگی','ئیشا سنگی','سنگ دئیشیت','بینا من نایت','بینهلکیان','بینا من','خوینبەربوون','خوین دچیت','بیهوش','بێهۆش','جەلتە','جلطه','ڕوودان','ڕووداو','ژەهراوی','خۆکوشتن',
  'chest pain','cant breathe','can\'t breathe','cannot breathe','short of breath','shortness of breath','bleeding','unconscious','fainted','stroke','heart attack','accident','poison','overdose','suicide','kill myself','seizure','severe burn'],
 women:['حمل','حامل','حوامل','نسائيه','نسائية','ولاده','ولادة','توليد','الدوره','دوره شهريه','عقم','رحم','مبايض','اطفال انابيب','تاخر الحمل','سونار حمل',
  'دووگیان','دوگیان','حەمل','ژنان','زاروکبوون','نەزۆک','نەزوک','مالبچوک','سووڕا مەهانە','بێ زاروک',
  'pregnan','gyne','obstet','period','infertil','ivf','uterus','ovar','women'],
 heart:['قلب','ضغط','خفقان','دقات','شرايين','كوليسترول','قسطره',
  'دل','دلی','پەستان','پەستانا خوینێ','لێدانا دلی','شاددەمار',
  'heart','cardio','blood pressure','hypertension','palpitation','cholesterol','arter'],
 internal:['سكر','سكري','معده','معدة','باطنيه','باطنية','حراره','حرارة','سخونه','كحه','سعال','كبد','قولون','اسهال','امساك','غده','درقيه','فقر دم','تعب عام',
  'شەکرە','شەکر','گەدە','زک','تا','تایێ','کۆخک','کوخک','جگەر','سکچوون','قەبزی',
  'diabet','sugar','stomach','fever','cough','liver','colon','diarr','constipat','thyroid','anemi','internal','flu'],
 uro:['مسالك','كلى','كليه','كلية','حصى','حصوه','حصاة','بروستات','بروستاتا','مثانه','مثانة','ادرار','حرقة بول','عقم رجال','ضعف جنسي','خصيه',
  'گورچیلک','بەرکێن گورچیلکێ','بەرک','پرۆستات','پروستات','میز','میزدان','کیسکا میزێ','نەزۆکیا زەلامان',
  'kidney','stone','prostat','bladder','urin','urolog','male infertil','erectile','testic'],
 dental:['اسنان','أسنان','سن','ضرس','اضراس','فك','الفك','لثه','لثة','تسوس','حشوه','قلع','ضرس العقل','زراعة اسنان','تقويم',
  'ددان','دران','کەلبە','ئەرزینک','پوک','کرم ددان','ددانێ عەقلێ',
  'tooth','teeth','dental','dentist','jaw','gum','wisdom','implant','cavity','maxillofacial','oral surgery'],
 rheum:['مفاصل','روماتيزم','ظهر','ركبه','ركبة','ديسك','فقرات','نقرس','كتف','عظام',
  'جومگە','جومگ','پشت','چوک','ڕوماتیزم','هەستی','ملی',
  'joint','arthrit','rheuma','back pain','knee','gout','shoulder','bone'],
 neuro:['صداع','اعصاب','شقيقه','شقيقة','صرع','دوخه','دوخة','دوار','تنميل','خدر','نوم','ارق','ذاكره',
  'سەرئێش','سەری من','دەمار','گێژ','سڕبوون','خەو','بیرچوون',
  'headache','migraine','nerve','neuro','epilep','dizz','numb','insomnia','memory'],
 surgery:['عمليه','عملية','جراحه','جراحة','فتق','زائده','زائدة','مراره','مرارة','بواسير','كيس','ورم',
  'نەشتەرگەری','نەشتەر','ئۆپەراسیۆن','عەمەلیات','فتق','زیادە',
  'surgery','surgeon','operation','hernia','appendi','gallbladder','hemorrh','cyst','lump'],
 peds:['طفل','اطفال','رضيع','ابني','بنتي','وليدي','جاهل','جهال','بيبي',
  'زاروک','زارۆک','بچووک','ساڤا','کوڕێ من','کچا من','کورێ من',
  'child','baby','kids','infant','my son','daughter','pediat','paediat','toddler'],
 derm:['جلد','جلديه','بشره','حبوب','حب الشباب','شعر','تساقط','حكه','حكة','اكزيما','ليزر','تجميل','نمش','بقع',
  'پێست','پیست','خورین','پرچ','زیپک','لێزەر','جوانکاری',
  'skin','derma','acne','hair','itch','eczema','rash','laser','beauty','cosmetic'],
 radio:['اشعه','اشعة','سونار','رنين','مفراس','ايكو','تصوير',
  'تیشک','سۆنار','سونار','ڕەنین','وێنەگرتن',
  'x-ray','xray','ultrasound','sonar','mri','ct scan','scan','radiolog'],
 lab:['تحليل','تحاليل','فحص دم','مختبر','تحليلات',
  'پشکنین','تاقیگە','تاقیکرن','پشکنینا خوینێ',
  'blood test','lab','analysis','test'],
 loc:['وين','عنوان','مكان','موقع','خريطه','خريطة','شلون اوصل','الطريق',
  'کیرێ','ل کیرێ','کیرە','ناڤنیشان','جه','نەخشە','ڕێک',
  'where','address','location','map','directions','how to get'],
 phone:['رقم','تلفون','هاتف','اتصال','واتساب','تواصل',
  'ژمارە','ژمارا','تەلەفۆن','پەیوەندی','واتسئەپ',
  'phone','number','call','whatsapp','contact'],
 hours:['دوام','مفتوح','مفتوحين','ساعه','ساعات','وقت','يوم الجمعه','عطله',
  'دەوام','ڤەکری','ڤەکرییە','دەمژمێر','دەمێن','ئەینی',
  'open','hours','time','closing','friday','holiday'],
 depts:['اقسام','قسم','خدمات','شنو عدكم','شنو موجود',
  'پشک','پشکان','خزمەت',
  'department','service','what do you have','facilities'],
 complain:['شكوى','شكاوي','مشكله','مشكلة','زعلان','سيء',
  'گازندە','کێشە','نەڕازی',
  'complain','problem','bad service','unhappy'],
 appt:['موعد','حجز','احجز','مواعيد',
  'نوبە','نوبەی','نوبەیێ','وەرگرتن',
  'appointment','book','booking','reserve','visit'],
 price:['سعر','اسعار','كم سعر','فلوس','كلفه','تكلفه',
  'بها','نرخ','پارە','چەند',
  'price','cost','fee','how much'],
 social:['انستا','انستغرام','فيسبوك','تيك توك','سوشيال',
  'ئینستاگرام','فەیسبووک','تیکتۆک',
  'instagram','facebook','tiktok','social'],
 greet:['هلو','هلا','مرحبا','السلام','سلام','صباح','مساء','سلاڤ','ڕۆژباش','شەڤباش','hello','hi ','hey','good morning','good evening','salam'],
 thanks:['شكرا','مشكور','تسلم','عاشت','ممنون','سوپاس','دەستخۆش','thank','thanks','thx']
};
const aiNorm=s=>' '+String(s||'').toLowerCase().replace(/[ً-ٰٟـ]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/ی/g,'ي').replace(/ك/g,'ک').replace(/ک/g,'ك').replace(/ۆ/g,'و').replace(/[؟?!.,،؛:()"']/g,' ').replace(/\s+/g,' ')+' ';
const KWN={};Object.keys(KW).forEach(k=>KWN[k]=KW[k].map(w=>aiNorm(w).trim()).filter(Boolean));
const aiHas=(n,k)=>KWN[k].some(w=>w.length<=2?n.includes(' '+w+' '):/^[a-z0-9'\- ]+$/.test(w)?n.includes(' '+w):n.includes(w));
function aiLangOf(text){if(/[ڕڵێۆڤە]/.test(text))return 'ku';if(/(^|\s)(سوپاس|کیژ|چاوا|هەیە|دخوازم|ئەز|ژ|بکە|کا)(\s|$|؟)/.test(text)||(/[کی]/.test(text)&&!/[ةكيى]/.test(text)))return 'ku';if(/[؀-ۿ]/.test(text))return lang==='en'?'ar':lang;if(/[a-z]/i.test(text))return 'en';return lang}
function aiFindDocs(n){
  const hit=[];
  D.forEach(d=>{const parts=[d.n.en,d.n.ar].join(' ').replace(/(Prof\.?|Dr\.?|د\.|أ\.د\.|ا\.د\.)/gi,' ');
    const toks=aiNorm(parts).trim().split(' ').filter(w=>w.length>=3&&!['kamal','khalid','mohammed','muhammad','محمد','كمال','خالد'].includes(w));
    if(toks.some(w=>n.includes(' '+w+' ')))hit.push(d.id)});
  return hit;
}
function aiLocal(text){
  const L=aiLangOf(text),R=AIR[L],n=aiNorm(text),out=[],tags=[];let sug=R.sug.gen;
  const named=aiFindDocs(n);
  const cats=['women','heart','uro','dental','peds','neuro','internal','rheum','surgery','derm','radio','lab'].filter(c=>aiHas(n,c));
  const er=aiHas(n,'er');
  if(er){out.push(R.er);tags.push('[[act:er]]');sug=R.sug.er}
  if(named.length){out.push(named.length>1?R.docs:R.doc);named.slice(0,3).forEach(id=>tags.push(`[[doc:${id}]]`));sug=R.sug.spec}
  else if(cats.length){
    const c=cats[0],T2=T[L]||T[lang],list=D.filter(d=>d.c===c);
    const lbl=(T2.cats[c]||c);
    if(list.length){out.push((list.length>1?R.spec:R.specOne).replace('{c}',lbl));list.slice(0,3).forEach(d=>tags.push(`[[doc:${d.id}]]`))}
    if(!er)sug=R.sug.spec;
  }
  const add=(k,txt,t)=>{if(aiHas(n,k)){out.push(txt);if(t)tags.push(t);return true}return false};
  if(!er&&!named.length&&!cats.length){
    if(add('loc',R.loc,'[[act:map]]'))sug=R.sug.loc;
    add('appt',R.appt);add('price',R.price);
    if(add('phone',R.phone,'[[act:call]]'));
    add('hours',R.hours);
    if(aiHas(n,'depts')){out.push(R.depts.replace('{d}',DEPTS.map(k=>(T[L]||T[lang]).d[k][0]).join('، ')))}
    add('complain',R.complain,'[[act:wa]]');add('social',R.social);
  }
  if(!out.length){if(aiHas(n,'thanks'))out.push(R.thanks);else if(aiHas(n,'greet'))out.push(R.greet);else{out.push(R.fb);tags.push('[[act:call]]')}}
  return out.join('\n\n')+'\n'+tags.join('\n')+'\n'+sug.filter(q=>aiNorm(q)!==n).slice(0,3).map(q=>`[[q:${q}]]`).join('\n');
}
/* ---------- UI ---------- */
const ait=()=>AIT[lang]||AIT.ar;
let SAMPLE=undefined,aiTurns=[],aiCtl=null,aiBusy=false,aiRec=null;
const AIKEY='newroz-ai-chat';
function aiSave(){try{localStorage.setItem(AIKEY,JSON.stringify({at:Date.now(),turns:aiTurns.slice(-30)}))}catch(e){}}
function aiLoad(){try{const v=JSON.parse(localStorage.getItem(AIKEY)||'null');if(v&&Date.now()-v.at<864e5&&Array.isArray(v.turns))return v.turns.filter(t=>t&&(t.role==='user'||t.role==='assistant')&&typeof t.content==='string')}catch(e){}return []}
function aiKnowledge(){
  const t=T.en,ta=T.ar;
  const docs=D.map(d=>`- id=${d.id} | ${d.n.en||''} / ${d.n.ar||''} | specialty: ${t.cats[d.c]||d.c} | title: ${(d.r&&d.r.en)||(d.r&&d.r.ar)||''} | focus: ${(d.f&&d.f.en)||(d.f&&d.f.ar)||''} | phone: ${(d.ph||[]).join(', ')}`).join('\n');
  const depts=DEPTS.map(k=>`- ${t.d[k][0]} / ${ta.d[k][0]}: ${t.d[k][1]}`).join('\n');
  return `HOSPITAL: Newroz (Nawroz) Hospital & Complex, Zakho, Duhok, Kurdistan Region of Iraq. Address: Duhok – Zakho – opposite Zakho Water Directorate.
Open 24/7 with a 24-hour emergency department. Main number, WhatsApp and complaints: 0750 889 6565.
Social: Instagram nawrozhospital, TikTok @nawroz.hospital, Facebook.
Appointments: patients call or WhatsApp the doctor's clinic number listed below. Clinic hours differ per doctor. Prices: not published — ask the clinic.
DEPARTMENTS:\n${depts}\nDOCTORS:\n${docs}`;
}
function aiRules(){
  const L={ar:'Iraqi Arabic dialect (عراقي، مثل: هسه، شلونك، خابر)',ku:'Kurdish in the Duhok Badini (Behdînî) dialect, Arabic script',en:'English'}[lang];
  return `You are the friendly AI assistant on the website of Newroz Hospital & Complex in Zakho. Use ONLY the facts below about the hospital; never invent doctors, phone numbers, prices, schedules or services that are not listed. If you don't know, say so and give the main number 0750 889 6565.
Answer in the language the patient writes in; if unclear, use ${L}. Arabic answers: Iraqi dialect.
KURDISH: whenever you answer in Kurdish — whatever Kurdish dialect the patient writes in, Sorani included — write ONLY in the Duhok/Zakho Badini (Behdînî) dialect in Arabic script, the way people in Duhok speak. Never use Sorani forms. Use Badini words and grammar, for example: ئەز (not من), تو, ئەم, هوین; چاوانی (not چۆنی); چ (not چی); نوکە (not ئێستا); ڤێرێ, ئەڤە, ئەڤ; ژ (not لە); ل ڤێرێ; دگەل; بۆ; دڤێت / پێدڤییە; نەخۆشخانە; نۆژدار; پەیوەندیێ بکە; وەرە; دشێی; سوپاس. Verbs like دکەم، دچم، دبێژم، ناکەم; past like هاتە، چوو. Keep it natural and simple, like a friendly receptionist in Duhok.
Style: short (2-5 sentences), warm, clear. Plain text only — no markdown, no lists with asterisks, no headings. Ask one short follow-up question when the need is unclear (age, how long, which symptom).
Help patients pick the right specialist for their symptoms and tell them how to contact the clinic.
TAGS (put each on its own line at the very end; the website turns them into buttons — never explain them):
- [[doc:ID]] for each doctor you recommend (max 3, exact id). Don't repeat their phone numbers in the text.
- [[act:er]] when it may be an emergency; [[act:map]] when you give the address; [[act:call]] to offer calling the hospital; [[act:wa]] for hospital WhatsApp.
- [[q:...]] 2 or 3 short follow-up questions the patient might ask next, written in the patient's language.
Medical safety: you are not a doctor. Never diagnose, never prescribe or suggest medicine names or doses. For possible emergencies (chest pain, difficulty breathing, heavy bleeding, stroke signs, loss of consciousness, severe injury, pregnancy bleeding, high fever in a baby, poisoning, suicidal thoughts) your FIRST sentence tells them to come to the 24h emergency or call 0750 889 6565 immediately, and add [[act:er]]. For suicidal thoughts, also encourage them warmly to reach someone they trust now.
Stay on topics about health and this hospital; politely decline anything else.

${aiKnowledge()}`;
}
function aiLinks(s){return esc(s).replace(/(0\d{3})\s?(\d{3})\s?(\d{4})/g,(m,a,b,c)=>`<a class="num" href="tel:+964${(a+b+c).slice(1)}">${a} ${b} ${c}</a>`).replace(/\n/g,'<br>')}
function aiDocCard(id){
  const d=D.find(x=>x.id===id),a=ait();if(!d)return '';const p=(d.ph||[])[0];
  return `<div class="aidoc"><button class="th" type="button" data-open="${esc(d.id)}" aria-label="${esc(a.profile)}">${photo(d)}</button><div class="m"><button class="nmb" type="button" data-open="${esc(d.id)}">${esc(nm(d))}</button><small>${esc(tr(d.r))}</small>
    ${p?`<div class="r"><a class="aib pri" href="tel:${intl(p)}">${ic('phone')}${esc(a.call)}</a><a class="aib wa" href="${waURL(p,d)}" target="_blank" rel="noopener">${WAICON}${esc(a.wa)}</a></div>`:''}</div></div>`;
}
const MAPI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';
function aiAct(k){const a=ait();
  if(k==='er')return `<a class="aib aier" href="tel:+9647508896565">${ic('phone')}${esc(a.er)} · <span class="num">0750 889 6565</span></a>`;
  if(k==='call')return `<a class="aib pri" href="tel:+9647508896565">${ic('phone')}${esc(a.callH)}</a>`;
  if(k==='wa')return `<a class="aib wa" href="https://wa.me/9647508896565" target="_blank" rel="noopener">${WAICON}${esc(a.wa)} · <span class="num">0750 889 6565</span></a>`;
  if(k==='map')return `<a class="aib" href="https://www.google.com/maps/search/?api=1&query=Newroz+Hospital+Zakho" target="_blank" rel="noopener">${MAPI}${esc(a.map)}</a>`;
  return '';
}
function aiParse(text){
  const ids=[],acts=[],qs=[];
  const clean=String(text||'')
    .replace(/\[\[doc:([a-zA-Z0-9_-]+)\]\]/g,(m,id)=>{if(!ids.includes(id))ids.push(id);return ''})
    .replace(/\[\[act:([a-z]+)\]\]/g,(m,k)=>{if(!acts.includes(k))acts.push(k);return ''})
    .replace(/\[\[q:([^\]]{1,80})\]\]/g,(m,q)=>{if(qs.length<3)qs.push(q.trim());return ''})
    .replace(/\[\[[^\]]*$/,'').replace(/[*#`_]{1,3}/g,'').replace(/\n{3,}/g,'\n\n').trim();
  return {clean,ids,acts,qs};
}
function aiRenderMsg(el,text,final){
  const p=aiParse(text),a=ait();
  const acts=p.acts.includes('er')?['er',...p.acts.filter(x=>x!=='er')]:p.acts;
  el.innerHTML=`<div class="tx">${aiLinks(p.clean)}</div>${final&&acts.length?`<div class="aiacts">${acts.map(aiAct).join('')}</div>`:''}${final&&p.ids.length?`<div class="aidocs">${p.ids.slice(0,3).map(aiDocCard).join('')}</div>`:''}${final&&p.clean?`<button class="aicopy" type="button" data-copytx="${esc(p.clean)}" aria-label="${esc(a.copy)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>`:''}`;
  return p.qs;
}
function aiScroll(){const b=$('aiLog');b.scrollTop=b.scrollHeight}
function aiAdd(role,html){const m=document.createElement('div');m.className='aim '+role;m.innerHTML=html||'';$('aiLog').appendChild(m);aiScroll();return m}
function aiChips(qs){$('aiQ')?.remove();if(!qs||!qs.length)return;const q=document.createElement('div');q.className='aiq';q.id='aiQ';q.innerHTML=qs.map(x=>`<button type="button" data-q="${esc(x)}">${esc(x)}</button>`).join('');$('aiLog').appendChild(q);aiScroll()}
function aiHeader(){
  const a=ait();
  $('aiTitle').textContent=a.title;$('aiSub').textContent=a.sub;$('aiFabTxt').textContent=a.fab;$('aiIn').placeholder=aiRec?a.listening:a.ph;$('aiNote').textContent=a.note;
  $('aiClear').setAttribute('aria-label',a.clear);$('aiClear').title=a.clear;$('aiCall').setAttribute('aria-label',a.callH);$('aiCall').title=a.callH;
  $('aiGo').setAttribute('aria-label',aiBusy?a.stop:a.send);if($('aiMic')){$('aiMic').setAttribute('aria-label',a.mic);$('aiMic').title=a.mic}
}
function aiReset(keep){
  const a=ait();if(!keep){aiTurns=[];aiSave()}$('aiLog').innerHTML='';
  aiAdd('bot',`<div class="tx">${esc(a.hello)}</div>`);
  if(!aiTurns.length){aiChips(a.q);return}
  let last=[];
  aiTurns.forEach(t=>{if(t.role==='user')aiAdd('me',`<div class="tx">${esc(t.content)}</div>`);else last=aiRenderMsg(aiAdd('bot'),t.content,true)});
  aiChips(last);
}
async function aiAsk(text){
  text=String(text||'').trim();if(!text||aiBusy)return;const a=ait();
  $('aiQ')?.remove();
  aiAdd('me',`<div class="tx">${esc(text)}</div>`);
  aiTurns.push({role:'user',content:text});
  const nrm=aiNorm(text),isEr=aiHas(nrm,'er');
  if(isEr&&SAMPLE){const L=aiLangOf(text);aiRenderMsg(aiAdd('bot alert'),AIR[L].er+'\n[[act:er]]',true)}
  const bot=aiAdd('bot',`<div class="tx"><span class="dots"><i></i><i></i><i></i></span> ${esc(a.think)}</div>`);
  aiBusy=true;$('aiBox').classList.add('busy');aiHeader();
  let answer='';
  if(!SAMPLE){
    await new Promise(r=>setTimeout(r,450+Math.random()*350));
    answer=aiLocal(text);
  }else{
    aiCtl=new AbortController();
    const hist=aiTurns.slice(-12);while(hist.length&&hist[0].role!=='user')hist.shift();
    const input=[{role:'user',content:aiRules()+'\n\nReply "OK" to confirm.'},{role:'assistant',content:'OK'},...hist];
    try{
      const tier=(lang==='ku'||/[ڕڵێۆڤە]/.test(text))?'default':'quick';
      const r=await SAMPLE(input,{cache:false,modelTier:tier,signal:aiCtl.signal,onText:({text})=>{aiRenderMsg(bot,text,false);aiScroll()}});
      answer=r.text;
    }catch(e){
      if(e&&e.code==='cancelled'){answer=e.text||'';if(!answer){bot.remove();aiTurns.pop();aiDone();return}}
      else{if(e&&(e.code==='not_granted'||e.code==='sampling_disabled'||e.code==='not_declared'))SAMPLE=null;answer=aiLocal(text)}
    }
  }
  if(isEr&&SAMPLE)answer=answer.replace(/\[\[act:er\]\]/g,'');
  const qs=aiRenderMsg(bot,answer,true);aiTurns.push({role:'assistant',content:answer});aiSave();aiChips(qs);aiDone();
}
function aiDone(){aiBusy=false;aiCtl=null;$('aiBox').classList.remove('busy');aiHeader();aiScroll()}
function aiOpen(){const b=$('aiBox');b.hidden=false;requestAnimationFrame(()=>b.classList.add('on'));$('aiFab').setAttribute('aria-expanded','true');if(!$('aiLog').children.length){aiTurns=aiLoad();aiReset(true)}setTimeout(()=>{aiScroll();if(matchMedia('(min-width:641px)').matches)$('aiIn').focus()},250)}
function aiClose(){const b=$('aiBox');b.classList.remove('on');$('aiFab').setAttribute('aria-expanded','false');aiMicStop();setTimeout(()=>{if(!b.classList.contains('on'))b.hidden=true},250)}
/* voice input */
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
function aiMicStop(){if(aiRec){try{aiRec.stop()}catch(e){}aiRec=null;$('aiBox').classList.remove('rec');aiHeader()}}
function aiMicStart(){
  if(!SR)return;if(aiRec){aiMicStop();return}
  try{const r=new SR();r.lang=lang==='en'?'en-US':'ar-IQ';r.interimResults=true;r.maxAlternatives=1;
    const base=$('aiIn').value?$('aiIn').value+' ':'';
    r.onresult=e=>{let t='';for(const res of e.results)t+=res[0].transcript;$('aiIn').value=base+t;$('aiIn').dispatchEvent(new Event('input'))};
    r.onerror=e=>{if(e.error==='not-allowed'||e.error==='service-not-allowed')$('aiMic').hidden=true;aiMicStop()};
    r.onend=()=>{const had=!!aiRec;aiMicStop();if(had&&$('aiIn').value.trim())$('aiForm').requestSubmit()};
    aiRec=r;r.start();$('aiBox').classList.add('rec');aiHeader();
  }catch(e){$('aiMic').hidden=true;aiRec=null}
}
if(!SR&&$('aiMic'))$('aiMic').hidden=true;
$('aiMic')&&$('aiMic').addEventListener('click',aiMicStart);
$('aiFab').addEventListener('click',()=>{$('aiBox').hidden?aiOpen():aiClose()});
$('aiX').addEventListener('click',aiClose);
$('aiClear').addEventListener('click',()=>{if(aiCtl)aiCtl.abort();aiReset(false)});
$('aiForm').addEventListener('submit',e=>{e.preventDefault();if(aiBusy){aiCtl&&aiCtl.abort();return}aiMicStop();const v=$('aiIn').value;$('aiIn').value='';$('aiIn').style.height='';aiAsk(v)});
$('aiIn').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();$('aiForm').requestSubmit()}});
$('aiIn').addEventListener('input',e=>{const t=e.target;t.style.height='';t.style.height=Math.min(t.scrollHeight,120)+'px'});
$('aiLog').addEventListener('click',e=>{
  const q=e.target.closest('[data-q]');if(q){aiAsk(q.dataset.q);return}
  const c=e.target.closest('[data-copytx]');if(c){navigator.clipboard?.writeText(c.dataset.copytx).then(()=>show(ait().copied)).catch(()=>{})}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('aiBox').hidden&&!$('dlg').open&&!$('adm').open)aiClose()});
(async()=>{try{SAMPLE=window.claude&&claude.use?await claude.use('sample'):null}catch(e){SAMPLE=null}})();
const _apply5=apply;apply=function(l){_apply5(l);aiHeader();if(!aiTurns.length&&$('aiLog').children.length&&!aiBusy)aiReset(false)};

/* ===== Premium layer: copy, header state, reveal ===== */
Object.assign(T.ar,{staff:'دخول الإدارة'});Object.assign(T.ku,{staff:'ژوورا ڕێڤەبەریێ'});Object.assign(T.en,{staff:'Staff sign-in'});
Object.assign(T.ar,{erK:'طوارئ ٢٤ ساعة',erT:'حالة طارئة؟ إحنا وياك بكل لحظة',erP:'فريق الطوارئ والأطباء المختصين جاهزين ليل ونهار. خابرنا أو تعال للمستشفى مباشرة.',fLinks:'روابط سريعة',fRights:'كل الحقوق محفوظة'});
Object.assign(T.ku,{erK:'فریاکەفتن ٢٤ دەمژمێر',erT:'بارێ لەزگین؟ ئەم هەر دەم دگەل تە دانە',erP:'تیما فریاکەفتنێ و نۆژدارێن پسپۆر شەڤ و ڕۆژ ئامادەنە. پەیوەندیێ ب مە بکە یان ڕاستەوخۆ وەرە نەخۆشخانێ.',fLinks:'لینکێن خێرا',fRights:'هەمی ماف پاراستینە'});
Object.assign(T.en,{erK:'24-hour emergency',erT:'An emergency? We’re with you every minute',erP:'Our emergency team and specialists are ready day and night. Call us or come straight to the hospital.',fLinks:'Quick links',fRights:'All rights reserved'});
(()=>{
  const bar=document.querySelector('.bar');
  const onS=()=>bar&&bar.classList.toggle('scrolled',scrollY>8);addEventListener('scroll',onS,{passive:true});onS();
  if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px',threshold:.08});
  const mark=(sel,stagger)=>document.querySelectorAll(sel).forEach((el,i)=>{if(el.classList.contains('rv'))return;const r=el.getBoundingClientRect();if(r.top<innerHeight*.92)return;el.classList.add('rv');if(stagger)el.style.setProperty('--d',(i%4)*.08+'s');io.observe(el)});
  const run=()=>{mark('.head');mark('.tools');mark('.doc',1);mark('.tipbox');mark('.habits > *',1);mark('.dept',1);mark('.erb');mark('.complain');mark('.cbox',1);mark('.fcol',1)};
  requestAnimationFrame(run);
  new MutationObserver(()=>mark('.doc',1)).observe($('docs'),{childList:true});
})();

apply(lang);tick();setInterval(tick,30000);requestAnimationFrame(tipLoop);
