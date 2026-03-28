import { useState } from 'react'
import { siteMedia } from './siteMedia'

const officialTopItems = ['الرئيسية', 'الوزارة', 'المعرفة', 'التعليم', 'المركز الإعلامي', 'تواصل معنا', 'المشاركة الإلكترونية']

const officialMenus = {
  الوزارة: [
    {
      heading: 'عن الوزارة',
      items: [
        { label: 'نشأة الوزارة', href: 'https://moe.gov.sa/ar/aboutus/aboutministry/Pages/About.aspx', external: true },
        { label: 'الرؤية والرسالة والأهداف', href: 'https://moe.gov.sa/ar/aboutus/aboutministry/Pages/visionmissiongoals.aspx', external: true },
        { label: 'الهيكل التنظيمي', href: 'https://moe.gov.sa/ar/aboutus/aboutministry/Pages/organizationalchart.aspx', external: true },
        { label: 'الميزانية', href: 'https://moe.gov.sa/ar/aboutus/aboutministry/Pages/budget.aspx', external: true },
        { label: 'الأنظمة واللوائح', href: 'https://moe.gov.sa/ar/aboutus/Portal/Pages/TermsandConditions.aspx', external: true },
      ],
    },
    {
      heading: 'قطاعات الوزارة',
      items: [
        { label: 'معالي الوزير', href: './minister.html' },
        { label: 'القيادات', href: './leaders.html' },
        { label: 'الوكالات والإدارات', href: 'https://moe.gov.sa/ar/aboutus/sectors/Pages/departments.aspx', external: true },
        { label: 'المراكز', href: 'https://moe.gov.sa/ar/aboutus/sectors/Pages/centersandunits.aspx', external: true },
      ],
    },
    {
      heading: 'بوابة الوزارة',
      items: [
        { label: 'الشروط والأحكام والسياسات', href: 'https://moe.gov.sa/ar/aboutus/Portal/Pages/TermsandConditions.aspx', external: true },
        { label: 'تطبيقات الأجهزة الذكية', href: 'https://moe.gov.sa/ar/aboutus/Portal/Pages/MobilePhonesandSmart.aspx', external: true },
        { label: 'جد طريقك', href: 'https://moe.gov.sa/ar/aboutus/Portal/Pages/FindYourWay.aspx', external: true },
        { label: 'مساعدة ذوي الإعاقة', href: 'https://moe.gov.sa/ar/aboutus/Portal/Pages/SpecialNeeds.aspx', external: true },
        { label: 'الأسئلة المتكررة', href: 'https://moe.gov.sa/ar/aboutus/Portal/Pages/FAQs.aspx', external: true },
        { label: 'الموارد البشرية', href: './human-resources.html' },
        { label: 'سياسة حق الحصول على المعلومة', href: 'https://moe.gov.sa/ar/aboutus/Portal/Pages/DataSharingRegulations.aspx', external: true },
      ],
    },
  ],
  المعرفة: [
    {
      heading: 'الخدمات والنماذج الإلكترونية',
      items: [
        { label: 'دليل الخدمات', href: 'https://moe.gov.sa/ar/knowledgecenter/eservices/Pages/servicesguideline.aspx', external: true },
        { label: 'اتفاقية مستوى الخدمة', href: 'https://moe.gov.sa/ar/knowledgecenter/eservices/Pages/sla.aspx', external: true },
        { label: 'حول الخدمات الإلكترونية', href: 'https://moe.gov.sa/ar/knowledgecenter/eservices/Pages/abouteservices.aspx', external: true },
        { label: 'نماذج إلكترونية', href: 'https://moe.gov.sa/ar/knowledgecenter/eservices/Pages/Eforms.aspx', external: true },
        { label: 'مكتبة الوثائق', href: 'https://moe.gov.sa/ar/knowledgecenter/DecisionsAndPartnerships/Pages/DocumentCenter.aspx', external: true },
        { label: 'الخدمات والبرامج المجانية', href: 'https://moe.gov.sa/ar/knowledgecenter/eservices/Pages/FreeServicesandPrograms.aspx', external: true },
      ],
    },
    {
      heading: 'السياسات والشراكات',
      items: [
        { label: 'الشراكات الدولية', href: 'https://moe.gov.sa/ar/knowledgecenter/DecisionsAndPartnerships/Pages/InternationalPartnerships.aspx', external: true },
        { label: 'الشراكات المحلية', href: 'https://moe.gov.sa/ar/knowledgecenter/DecisionsAndPartnerships/Pages/LocalPartnerships.aspx', external: true },
        { label: 'كن شريك الوزارة', href: 'https://moe.gov.sa/ar/knowledgecenter/DecisionsAndPartnerships/Pages/BeAPartner.aspx', external: true },
      ],
    },
    {
      heading: 'البيانات والإحصاءات',
      items: [
        { label: 'البيانات المفتوحة', href: 'https://moe.gov.sa/ar/knowledgecenter/dataandstats/Pages/opendata.aspx', external: true },
        { label: 'معلومات وإحصاءات', href: 'https://moe.gov.sa/ar/knowledgecenter/dataandstats/Pages/infoandstats.aspx', external: true },
        { label: 'مؤشرات التعليم', href: 'https://moe.gov.sa/ar/knowledgecenter/dataandstats/Pages/educationindicators.aspx', external: true },
      ],
    },
    {
      heading: 'المبادرات والمشاريع',
      items: [
        { label: 'مشاريع قيد التنفيذ', href: 'https://moe.gov.sa/ar/knowledgecenter/projectsinitiatives/Pages/projectsinprogress.aspx', external: true },
        { label: 'بوابة الموردين', href: 'https://moe.gov.sa/ar/knowledgecenter/projectsinitiatives/Pages/SuppliersPortal.aspx', external: true },
        { label: 'دليل المستثمر', href: 'https://moe.gov.sa/ar/knowledgecenter/projectsinitiatives/Pages/InvestorGuide.aspx', external: true },
        { label: 'المبادرات', href: 'https://moe.gov.sa/ar/knowledgecenter/projectsinitiatives/Pages/Initiatives.aspx', external: true },
      ],
    },
  ],
  التعليم: [
    {
      heading: 'التعليم في المملكة',
      items: [
        { label: 'الأسس العامة', href: 'https://moe.gov.sa/ar/education/educationinksa/Pages/Generalfoundations.aspx', external: true },
        { label: 'غاية التعليم وأهدافه العامة', href: 'https://moe.gov.sa/ar/education/educationinksa/Pages/EducationObjectives.aspx', external: true },
        { label: 'الخارطة التعليمية للمدارس', href: 'https://moe.gov.sa/ar/education/educationinksa/Pages/GIS.aspx', external: true },
        { label: 'تسجيل الطلاب والطالبات المستجدين', href: 'https://moe.gov.sa/ar/education/educationinksa/Pages/Registration.aspx', external: true },
        { label: 'دعني أساعدك', href: 'https://moe.gov.sa/ar/LifeEvents/Pages/HelpYou.aspx', external: true },
        { label: 'الاختبارات الدولية', href: 'https://moe.gov.sa/ar/education/educationinksa/Pages/TnternationalTests.aspx', external: true },
      ],
    },
    {
      heading: 'التعليم العام',
      items: [
        { label: 'التقويم الدراسي', href: 'https://moe.gov.sa/ar/education/generaleducation/Pages/academicCalendar.aspx', external: true },
        { label: 'ذوو الإعاقة', href: 'https://moe.gov.sa/ar/education/generaleducation/Pages/PeopleWithSpecialNeeds.aspx', external: true },
        { label: 'الطفولة المبكرة', href: 'https://moe.gov.sa/ar/education/generaleducation/Pages/Kindergarten.aspx', external: true },
        { label: 'الصحة المدرسية', href: 'https://moe.gov.sa/ar/education/generaleducation/Pages/SchoolHealth.aspx', external: true },
      ],
    },
    {
      heading: 'التعليم الجامعي',
      items: [
        { label: 'الجامعات الحكومية', href: 'https://moe.gov.sa/ar/education/highereducation/Pages/UniversitiesList.aspx', external: true },
        { label: 'الجامعات والكليات الأهلية', href: 'https://moe.gov.sa/ar/education/highereducation/Pages/PrivateUniversity.aspx', external: true },
        { label: 'التعليم التقني والمهني', href: 'https://moe.gov.sa/ar/education/highereducation/Pages/TechnicalEducation.aspx', external: true },
        { label: 'الابتعاث', href: 'https://moe.gov.sa/ar/education/Pages/Scholarship.aspx', external: true },
        { label: 'البحث والابتكار', href: 'https://moe.gov.sa/ar/education/Pages/DRI.aspx', external: true },
      ],
    },
  ],
  'المركز الإعلامي': [
    {
      heading: 'المركز الإعلامي',
      items: [
        { label: 'الأخبار', href: 'https://moe.gov.sa/ar/mediacenter/MOEnews/Pages/default.aspx', external: true },
        { label: 'الفعاليات', href: 'https://moe.gov.sa/ar/mediacenter/events/Pages/default.aspx', external: true },
        { label: 'الوسائط المتعددة', href: 'https://moe.gov.sa/ar/mediacenter/multimedia', external: true },
        { label: 'الإعلانات', href: 'https://moe.gov.sa/ar/mediacenter/announcements/Pages/default.aspx', external: true },
        { label: 'مكتبة الصور', href: 'https://moe.gov.sa/ar/mediacenter/PhotoLibrary', external: true },
      ],
    },
  ],
  'تواصل معنا': [
    {
      heading: 'تواصل معنا',
      items: [
        { label: 'مقر الوزارة', href: 'https://moe.gov.sa/ar/contactus/Pages/ministrylocation.aspx', external: true },
        { label: 'تواصل', href: 'https://moe.gov.sa/ar/contactus/Pages/Tawasul.aspx', external: true },
        { label: 'الاقتراحات والشكاوى', href: 'https://moe.gov.sa/ar/contactus/Pages/complaints.aspx', external: true },
        { label: 'إدارات التعليم', href: 'https://moe.gov.sa/ar/contactus/Pages/edudepartments.aspx', external: true },
        { label: 'الملحقيات الثقافية', href: 'https://moe.gov.sa/ar/contactus/Pages/culturalmissions.aspx', external: true },
        { label: 'الدعم الفني', href: 'https://moe.gov.sa/ar/contactus/Pages/TechnicalSupport.aspx', external: true },
      ],
    },
  ],
  'المشاركة الإلكترونية': [
    {
      heading: 'المشاركة الإلكترونية',
      items: [
        { label: 'سياسات المشاركة المجتمعية', href: 'https://moe.gov.sa/ar/eparticipation/Pages/eparticipationpolicy.aspx', external: true },
        { label: 'الشروط والضوابط', href: 'https://moe.gov.sa/ar/eparticipation/Pages/termsandconditions.aspx', external: true },
        { label: 'الشبكات الاجتماعية', href: 'https://moe.gov.sa/ar/mediacenter/Pages/socialmedia.aspx', external: true },
        { label: 'المشاركة المجتمعية الإلكترونية', href: 'https://moe.gov.sa/ar/eparticipation/Pages/ElectronicCommunityParticipation.aspx', external: true },
        { label: 'الاستشارات الإلكترونية', href: 'https://moe.gov.sa/ar/eparticipation/eConsultation/Pages/default.aspx', external: true },
      ],
    },
  ],
}

const officialMenuWidths = {
  الوزارة: 'w-[1120px]',
  المعرفة: 'w-[1120px]',
  التعليم: 'w-[1120px]',
  'المركز الإعلامي': 'w-[360px]',
  'تواصل معنا': 'w-[380px]',
  'المشاركة الإلكترونية': 'w-[380px]',
}

const quickAccess = [
  {
    title: 'نظام نور',
    description: 'نظام المعلومات التعليمية الشامل للطلاب وأولياء الأمور والمعلمين والإدارات التعليمية.',
    href: 'https://noor.moe.gov.sa/',
  },
  {
    title: 'نظام فارس',
    description: 'الخدمات الذاتية والإدارية والمالية لمنسوبي وزارة التعليم عبر النظام الرسمي.',
    href: 'https://sshr.moe.gov.sa/',
  },
  {
    title: 'منصة مدرستي',
    description: 'منصة التعلم الإلكتروني الرسمية الداعمة لعمليات التعليم والتعلم والمقررات.',
    href: 'https://schools.madrasati.sa/',
  },
  {
    title: 'تواصل',
    description: 'منصة إيصال صوت المستفيد ورفع الطلبات والشكاوى والملاحظات إلى قطاعات الوزارة.',
    href: 'https://tawasul.moe.gov.sa/',
  },
  {
    title: 'معادلة الشهادات',
    description: 'خدمة إلكترونية لمعادلة الشهادات غير السعودية عبر لجان متخصصة وملحقيات ثقافية.',
    href: 'https://eqs.moe.gov.sa/Home/Landing?ReturnUrl=%2F',
  },
  {
    title: 'سفير',
    description: 'خدمات الدراسة بالخارج والابتعاث والتحول الرقمي للدارسين في الخارج.',
    href: 'https://safeer2.moe.gov.sa/Portal/',
  },
]

const audienceServices = [
  {
    title: 'طالب',
    links: [
      { label: 'الصحة المدرسية', href: 'https://moe.gov.sa/ar/education/generaleducation/Pages/SchoolHealth.aspx', external: true },
      { label: 'التقويم الدراسي', href: 'https://moe.gov.sa/ar/education/generaleducation/Pages/academiccalendar.aspx', external: true },
      { label: 'تسجيل طالب جديد', href: 'https://moe.gov.sa/ar/education/generaleducation/Pages/newstudents.aspx', external: true },
      { label: 'ذوو الإعاقة', href: 'https://moe.gov.sa/ar/education/generaleducation/Pages/SpecialEducation.aspx', external: true },
    ],
  },
  {
    title: 'طالب جامعي',
    links: [
      { label: 'الجامعات والكليات', href: 'https://moe.gov.sa/ar/education/highereducation/Pages/UniversitiesList.aspx', external: true },
      { label: 'الابتعاث', href: 'https://sites.moe.gov.sa/scholarship/', external: true },
      { label: 'المنح الدراسية', href: 'https://moe.gov.sa/ar/education/highereducation/Pages/Scholarships-in-Public-Universities.aspx', external: true },
      { label: 'ذوو الإعاقة', href: 'https://moe.gov.sa/ar/education/highereducation/Pages/SpecialEducation.aspx', external: true },
    ],
  },
  {
    title: 'معلم / إداري',
    links: [
      { label: 'نظام نور', href: 'https://noor.moe.gov.sa/', external: true },
      { label: 'نظام فارس', href: 'https://sshr.moe.gov.sa/', external: true },
      { label: 'منصة مدرستي', href: 'https://schools.madrasati.sa/', external: true },
      { label: 'الخدمات والبرامج المجانية', href: 'https://moe.gov.sa/ar/knowledgecenter/eservices/Pages/Free-Services-and-Programs.aspx', external: true },
    ],
  },
  {
    title: 'باحث',
    links: [
      { label: 'البيانات المفتوحة', href: 'https://moe.gov.sa/ar/knowledgecenter/dataandstats/Pages/opendata.aspx', external: true },
      { label: 'مؤشرات التعليم', href: 'https://moe.gov.sa/ar/knowledgecenter/dataandstats/Pages/educationindicators.aspx', external: true },
      { label: 'إحصائيات الخدمات', href: 'https://moe.gov.sa/ar/knowledgecenter/eservices/Pages/eservicesstats.aspx', external: true },
      { label: 'المكتبة الرقمية', href: 'https://sdl.edu.sa/', external: true },
    ],
  },
  {
    title: 'مستثمر',
    links: [
      { label: 'كن شريك الوزارة', href: 'https://moe.gov.sa/ar/knowledgecenter/partnerships/Pages/partner.aspx', external: true },
      { label: 'المشاريع المنجزة', href: 'https://moe.gov.sa/ar/knowledgecenter/projects/Pages/DoneProjects.aspx', external: true },
      { label: 'بوابة الموردين', href: 'https://moe.gov.sa/ar/knowledgecenter/projects/Pages/SuppliersPortal.aspx', external: true },
      { label: 'دليل المستثمر', href: 'https://moe.gov.sa/ar/knowledgecenter/projects/Pages/InvestorGuide.aspx', external: true },
    ],
  },
]

const officialSections = [
  {
    title: 'الوزارة',
    description: 'محتوى تعريفي ورسمي يخص الوزارة وقطاعاتها واستراتيجياتها وبوابة المعلومات المؤسسية.',
    links: [
      { label: 'نشأة الوزارة', href: 'https://moe.gov.sa/ar/aboutus/aboutministry/Pages/ministryhistory.aspx', external: true },
      { label: 'الهيكل التنظيمي', href: 'https://moe.gov.sa/ar/aboutus/aboutministry/Pages/organizationalstructure.aspx', external: true },
      { label: 'الميزانية', href: 'https://moe.gov.sa/ar/aboutus/aboutministry/Pages/Budget.aspx', external: true },
      { label: 'الأنظمة واللوائح', href: 'https://moe.gov.sa/ar/aboutus/aboutministry/Pages/rulesandregulations.aspx', external: true },
    ],
  },
  {
    title: 'المعرفة',
    description: 'الخدمات الإلكترونية، البيانات، الإحصاءات، المشاريع، الشراكات، والوثائق المرجعية.',
    links: [
      { label: 'دليل الخدمات', href: 'https://moe.gov.sa/ar/knowledgecenter/eservices/Pages/servicesguideline.aspx', external: true },
      { label: 'نماذج إلكترونية', href: 'https://moe.gov.sa/ar/knowledgecenter/eservices/Pages/eforms.aspx', external: true },
      { label: 'البيانات المفتوحة', href: 'https://moe.gov.sa/ar/knowledgecenter/dataandstats/Pages/opendata.aspx', external: true },
      { label: 'مؤشرات التعليم', href: 'https://moe.gov.sa/ar/knowledgecenter/dataandstats/Pages/educationindicators.aspx', external: true },
    ],
  },
  {
    title: 'التعليم',
    description: 'خدمات تعليمية تخص الطلاب والطالبات والتعليم العام والتعليم الجامعي والمقيمين والزوار.',
    links: [
      { label: 'تسجيل الطلاب المستجدين', href: 'https://moe.gov.sa/ar/education/generaleducation/Pages/newstudents.aspx', external: true },
      { label: 'التقويم الدراسي', href: 'https://moe.gov.sa/ar/education/generaleducation/Pages/academiccalendar.aspx', external: true },
      { label: 'الاختبارات الدولية', href: 'https://moe.gov.sa/ar/education/generaleducation/Pages/InternationalTests.aspx', external: true },
      { label: 'البحث والابتكار', href: 'https://moe.gov.sa/ar/education/highereducation/Pages/Research-and-Innovation.aspx', external: true },
    ],
  },
  {
    title: 'المركز الإعلامي',
    description: 'الأخبار والفعاليات والملف الإعلامي والإعلانات والوسائط التابعة للوزارة.',
    links: [
      { label: 'الأخبار', href: 'https://moe.gov.sa/ar/mediacenter/MOEnews/Pages/default.aspx', external: true },
      { label: 'الفعاليات', href: 'https://moe.gov.sa/ar/mediacenter/events/Pages/default.aspx', external: true },
      { label: 'الإعلانات', href: 'https://moe.gov.sa/ar/mediacenter/advertisement/Pages/default.aspx', external: true },
      { label: 'مكتبة الصور', href: 'https://moe.gov.sa/ar/mediacenter/PhotoLibrary/Pages/default.aspx', external: true },
    ],
  },
]

const footerLinks = [
  { label: 'دليل الخدمات', href: 'https://moe.gov.sa/ar/knowledgecenter/eservices/Pages/servicesguideline.aspx', external: true },
  { label: 'تواصل', href: 'https://tawasul.moe.gov.sa/', external: true },
  { label: 'خريطة الموقع', href: 'https://moe.gov.sa/ar/pages/sitemap.aspx', external: true },
  { label: 'الأسئلة الشائعة', href: 'https://moe.gov.sa/ar/aboutus/PortalStatistics/Pages/FAQ.aspx', external: true },
  { label: 'إحصاءات البوابة والخدمات', href: 'https://moe.gov.sa/ar/aboutus/PortalStatistics/Pages/default.aspx', external: true },
  { label: 'سياسة حق الحصول على المعلومة', href: 'https://moe.gov.sa/ar/aboutus/Portal/Pages/DataSharingRegulations.aspx', external: true },
]

const newsItems = [
  {
    id: 'geneva-awards-2026',
    title: 'طلبة التعليم العام يحققون عدداً من الجوائز الكبرى والميداليات الذهبية في معرض جنيف الدولي للاختراعات 2026',
    category: 'طلبة التعليم العام',
    date: '1447-09-25',
    href: './news.html#geneva-awards-2026',
    external: false,
  },
  {
    id: 'geneva-innovations-135',
    title: 'منظومة التعليم والتدريب تشارك في معرض جنيف الدولي للاختراعات بـ135 ابتكاراً',
    category: 'ابتكار وبحث',
    date: '1447-09-23',
    href: './news.html#geneva-innovations-135',
    external: false,
  },
  {
    id: 'foundation-day-statement',
    title: 'في ذكرى يوم التأسيس.. وزير التعليم: منظومة التعليم تشهد نقلة نوعية في ظل قيادة تواصل مسيرة البناء والتنمية',
    category: 'تصريحات الوزير',
    date: '1447-09-05',
    href: './news.html#foundation-day-statement',
    external: false,
  },
]

const announcementItems = [
  { label: 'قناة عين', href: 'https://www.ientv.edu.sa/', external: true },
  { label: 'منافسة عملية طباعة وتوريد المقررات المدرسية', href: 'https://moe.gov.sa/ar/mediacenter/announcements/Pages/default.aspx', external: true },
  { label: 'خطة أعمال ومشتريات الوزارة', href: 'https://moe.gov.sa/ar/mediacenter/announcements/Pages/default.aspx', external: true },
  { label: 'تواصل', href: 'https://tawasul.moe.gov.sa/', external: true },
  { label: 'مدرستي', href: 'https://schools.madrasati.sa/', external: true },
]

const eventItems = [
  'استطلاع رأي عن التوقيت المناسب لبدء الدراسة عن بعد في شهر رمضان',
  'المؤتمر السادس عشر للتعلم والتكنولوجيا',
  'ساعة لصحتك',
]

const usefulLinks = [
  { label: 'وزارة المالية', href: 'https://www.mof.gov.sa/', external: true },
  { label: 'وزارة الموارد البشرية والتنمية الاجتماعية', href: 'https://www.hrsd.gov.sa/', external: true },
  { label: 'المنصة الوطنية الموحدة', href: 'https://my.gov.sa/', external: true },
  { label: 'المركز الوطني للتعليم الإلكتروني', href: 'https://nelc.gov.sa/', external: true },
  { label: 'البيانات المفتوحة', href: 'https://data.gov.sa/', external: true },
  { label: 'اعتماد', href: 'https://login.etimad.sa/', external: true },
]

const mostVisited = [
  { label: 'منصة مدرستي', href: 'https://schools.madrasati.sa/', external: true },
  { label: 'نظام سفير', href: 'https://safeer.moe.gov.sa/', external: true },
  { label: 'نظام نور', href: 'https://noor.moe.gov.sa/', external: true },
  { label: 'أخبار الوزارة', href: 'https://moe.gov.sa/ar/mediacenter/MOEnews/Pages/default.aspx', external: true },
  { label: 'قناة عين', href: 'https://www.ientv.edu.sa/', external: true },
]

const quickLinks = [
  { label: 'الإشتراك بالبوابة', href: 'https://moe.gov.sa/ar/Pages/Subscription.aspx', external: true },
  { label: 'إحصاءات البوابة والخدمات', href: 'https://moe.gov.sa/ar/aboutus/PortalStatistics/Pages/default.aspx', external: true },
  { label: 'الشروط والأحكام والسياسات', href: 'https://moe.gov.sa/ar/aboutus/Portal/Pages/TermsandConditions.aspx', external: true },
  { label: 'خريطة الموقع', href: 'https://moe.gov.sa/ar/pages/sitemap.aspx', external: true },
  { label: 'اتفاقيات ومستويات تقديم الخدمة', href: 'https://moe.gov.sa/ar/knowledgecenter/eservices/Pages/sla.aspx', external: true },
  { label: 'قنوات التواصل', href: 'https://moe.gov.sa/ar/contactus/Pages/ministrylocation.aspx', external: true },
]

const priorityActions = [
  {
    title: 'ابدأ كطالب أو ولي أمر',
    description: 'الوصول السريع إلى نظام نور والتسجيل والخدمات التعليمية الأكثر طلبًا.',
    href: 'https://noor.moe.gov.sa/',
    tag: 'الأكثر استخدامًا',
    external: true,
  },
  {
    title: 'خدمات الموظفين والمعلمين',
    description: 'الانتقال إلى فارس والموارد البشرية والخدمات التشغيلية المرتبطة بالمنسوبين.',
    href: './human-resources.html',
    tag: 'لمنسوبي الوزارة',
    external: false,
  },
  {
    title: 'الأخبار والإعلانات',
    description: 'متابعة أخبار الوزارة والإعلانات والفعاليات من صفحة مخصصة وواضحة.',
    href: './news.html',
    tag: 'محدث يوميًا',
    external: false,
  },
  {
    title: 'الوصول إلى الأدلة والبيانات',
    description: 'الدخول إلى الخدمات والنماذج والبيانات المفتوحة والمؤشرات التعليمية.',
    href: 'https://moe.gov.sa/ar/knowledgecenter/eservices/Pages/servicesguideline.aspx',
    tag: 'معلومات مرجعية',
    external: true,
  },
]

const assistantSuggestions = [
  {
    label: 'أين أبدأ إذا كنت ولي أمر؟',
    answer: 'ابدأ من نظام نور، فهو المسار الأسرع لخدمات التسجيل والمتابعة للطلاب وأولياء الأمور.',
    href: 'https://noor.moe.gov.sa/',
    external: true,
  },
  {
    label: 'أريد خدمات الموظفين',
    answer: 'اذهب إلى صفحة الموارد البشرية للوصول إلى فارس والخدمات التشغيلية المرتبطة بمنسوبي الوزارة.',
    href: '/human-resources.html',
    external: false,
  },
  {
    label: 'أين أخبار الوزارة؟',
    answer: 'تم تخصيص صفحة أخبار أوضح تعرض أحدث أخبار الوزارة مع روابطها الرسمية مباشرة.',
    href: '/news.html',
    external: false,
  },
  {
    label: 'أحتاج الأدلة والبيانات',
    answer: 'قسم المعرفة هو الأنسب للوصول إلى دليل الخدمات والنماذج والبيانات المفتوحة ومؤشرات التعليم.',
    href: 'https://moe.gov.sa/ar/knowledgecenter/eservices/Pages/servicesguideline.aspx',
    external: true,
  },
]

function getAssistantReply(question) {
  const normalized = question.trim().toLowerCase()

  if (!normalized) {
    return {
      text: 'اكتب سؤالك باختصار مثل: كيف أصل إلى نظام نور؟ أو أين أجد الأخبار؟',
    }
  }

  if (normalized.includes('نور') || normalized.includes('ولي') || normalized.includes('طالب') || normalized.includes('تسجيل')) {
    return {
      text: 'إذا كنت تبحث عن خدمات الطلاب أو أولياء الأمور، فالمسار الأنسب هو نظام نور.',
      href: 'https://noor.moe.gov.sa/',
      action: 'فتح نظام نور',
      external: true,
    }
  }

  if (normalized.includes('فارس') || normalized.includes('موظف') || normalized.includes('معلم') || normalized.includes('منسوب') || normalized.includes('موارد بشرية')) {
    return {
      text: 'لخدمات الموظفين والمعلمين، انتقل إلى صفحة الموارد البشرية أو مباشرة إلى نظام فارس.',
      href: './human-resources.html',
      action: 'الذهاب إلى الموارد البشرية',
      external: false,
    }
  }

  if (normalized.includes('خبر') || normalized.includes('اخبار') || normalized.includes('إعلان') || normalized.includes('اعلان') || normalized.includes('فعالية')) {
    return {
      text: 'صفحة الأخبار المخصصة تعرض أخبار الوزارة والإعلانات والفعاليات بشكل أوضح.',
      href: './news.html',
      action: 'فتح صفحة الأخبار',
      external: false,
    }
  }

  if (normalized.includes('بيانات') || normalized.includes('دليل') || normalized.includes('نماذج') || normalized.includes('معرفة') || normalized.includes('مؤشرات')) {
    return {
      text: 'للوصول إلى الأدلة والبيانات والخدمات المرجعية، استخدم قسم المعرفة.',
      href: 'https://moe.gov.sa/ar/knowledgecenter/eservices/Pages/servicesguideline.aspx',
      action: 'فتح قسم المعرفة',
      external: true,
    }
  }

  if (normalized.includes('تواصل') || normalized.includes('شكوى') || normalized.includes('اقتراح') || normalized.includes('دعم')) {
    return {
      text: 'يمكنك استخدام منصة تواصل لرفع الطلبات أو الشكاوى أو الملاحظات.',
      href: 'https://tawasul.moe.gov.sa/',
      action: 'فتح منصة تواصل',
      external: true,
    }
  }

  return {
    text: 'لم أتعرف على الطلب بدقة، لكن يمكنك اختيار أحد المسارات الجاهزة أدناه أو الانتقال إلى الصفحة الرئيسية الرسمية للوزارة.',
    href: 'https://moe.gov.sa/ar/pages/default.aspx',
    action: 'فتح الصفحة الرسمية',
    external: true,
  }
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14" strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function OfficialTopNavMenu({ label, sections }) {
  const columnsClass =
    sections.length >= 4
      ? 'xl:grid-cols-4'
      : sections.length === 3
        ? 'xl:grid-cols-3'
        : sections.length === 2
          ? 'xl:grid-cols-2'
          : 'grid-cols-1'

  return (
    <div className="group relative">
      <button className="rounded-full px-3 py-1.5 transition hover:bg-[rgba(61,126,185,0.08)] hover:text-[var(--moe-green)]">
        {label}
      </button>
      <div className="pointer-events-none absolute right-0 top-full z-50 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className={`max-w-[calc(100vw-4rem)] rounded-[2rem] border border-[rgba(21,68,90,0.10)] bg-white/95 p-6 shadow-soft backdrop-blur-xl ${officialMenuWidths[label] || 'w-[920px]'}`}>
          <div className={`grid gap-5 ${columnsClass}`}>
            {sections.map((section) => (
              <div key={section.heading} className="rounded-[1.4rem] bg-[linear-gradient(180deg,#f8fbfb_0%,#f1f6f7_100%)] p-4 text-right">
                <h4 className="text-sm font-semibold text-[var(--moe-navy)]">{section.heading}</h4>
                <div className="mt-4 space-y-2.5">
                  {section.items.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      target={subItem.external ? '_blank' : undefined}
                      rel={subItem.external ? 'noreferrer' : undefined}
                      className="block text-sm leading-6 text-[var(--moe-slate)] transition hover:text-[var(--moe-green)]"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function LinkGroup({ title, description, links }) {
  return (
    <article className="rounded-[1.9rem] border border-[rgba(21,68,90,0.10)] bg-white p-6 shadow-panel">
      <div className="h-1.5 w-16 rounded-full bg-[var(--moe-green)]" />
      <h4 className="mt-5 text-xl font-bold text-[var(--moe-navy)]">{title}</h4>
      <p className="mt-3 text-sm leading-7 text-[var(--moe-slate)]">{description}</p>
      <div className="mt-5 space-y-3">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noreferrer' : undefined}
            className="block rounded-[1.1rem] bg-[linear-gradient(180deg,#f8fbfb_0%,#f3f7f6_100%)] px-4 py-3 text-sm text-[var(--moe-slate)] transition hover:bg-white hover:text-[var(--moe-green)]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </article>
  )
}

function NewsTicker({ items }) {
  const tickerItems = [...items, ...items]

  return (
    <section className="border-b border-[rgba(21,68,90,0.08)] bg-[linear-gradient(90deg,rgba(7,168,105,0.07),rgba(61,126,185,0.10),rgba(13,169,166,0.06))]">
      <div className="shell">
        <div className="flex flex-col gap-3 py-3 lg:flex-row lg:items-center">
          <div className="flex items-center gap-3 lg:min-w-fit">
            <div className="shrink-0 rounded-full bg-[var(--moe-green)] px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-white">
              أخبار
            </div>
            <p className="text-xs font-medium tracking-[0.14em] text-[var(--moe-blue)]">آخر مستجدات الوزارة</p>
            <a
              href="./news.html"
              className="hidden rounded-full border border-[rgba(21,68,90,0.10)] bg-white/80 px-3 py-1.5 text-xs font-medium text-[var(--moe-navy)] transition hover:border-[var(--moe-green)] hover:text-[var(--moe-green)] sm:inline-flex"
            >
              جميع الأخبار
            </a>
          </div>
          <div className="ticker-mask flex-1">
            <div className="ticker-track">
              {tickerItems.map((item, index) => (
                <a key={`${item.title}-${index}`} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined} className="ticker-card">
                  <span className="ticker-badge">{item.category}</span>
                  <span className="ticker-text">{item.title}</span>
                  <span className="ticker-meta">{item.date}</span>
                  <span className="ticker-arrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuickActionCard({ item }) {
  return (
    <a
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noreferrer' : undefined}
      className="group rounded-[1.7rem] border border-[rgba(21,68,90,0.08)] bg-white p-5 shadow-panel transition hover:-translate-y-1 hover:border-[rgba(7,168,105,0.24)]"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-[rgba(7,168,105,0.10)] px-3 py-1 text-xs font-medium text-[var(--moe-green)]">{item.tag}</span>
        <span className="rounded-full bg-[var(--moe-navy)] p-2 text-white transition group-hover:bg-[var(--moe-green)]">
          <ArrowIcon />
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-[var(--moe-navy)]">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--moe-slate)]">{item.description}</p>
    </a>
  )
}

function SmartAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'أهلًا، اكتب سؤالك وسأوجّهك إلى الخدمة أو الصفحة الأنسب داخل البوابة.',
    },
  ])

  const askAssistant = (question) => {
    const reply = getAssistantReply(question)

    setMessages((current) => [
      ...current,
      { role: 'user', text: question },
      { role: 'assistant', text: reply.text, href: reply.href, action: reply.action, external: reply.external },
    ])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const question = inputValue.trim()
    if (!question) return
    askAssistant(question)
    setInputValue('')
  }

  return (
    <div className="fixed bottom-5 left-5 z-[70] flex flex-col items-start gap-3">
      {isOpen ? (
        <div className="w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-[1.8rem] border border-[rgba(21,68,90,0.10)] bg-white/95 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl">
          <div className="bg-[linear-gradient(135deg,var(--moe-navy),var(--moe-blue))] p-5 text-white">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs tracking-[0.16em] text-white/72">MOE ASSIST</p>
                <h3 className="mt-2 text-lg font-bold">المساعد الذكي</h3>
                <p className="mt-2 text-sm leading-7 text-white/84">اسأل عن خدمة أو صفحة أو خبر، وسأقترح لك المسار الأنسب مباشرة.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white transition hover:bg-white/20"
              >
                إغلاق
              </button>
            </div>
          </div>

          <div className="space-y-3 p-4">
            <div className="max-h-[20rem] space-y-3 overflow-y-auto rounded-[1.4rem] bg-[var(--moe-cream)] p-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-[1.1rem] px-4 py-3 text-sm leading-7 ${
                    message.role === 'assistant'
                      ? 'bg-white text-[var(--moe-slate)]'
                      : 'mr-8 bg-[rgba(7,168,105,0.10)] text-[var(--moe-navy)]'
                  }`}
                >
                  <p>{message.text}</p>
                  {message.href ? (
                    <a
                      href={message.href}
                      target={message.external ? '_blank' : undefined}
                      rel={message.external ? 'noreferrer' : undefined}
                      className="mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--moe-green)] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[#068d5b]"
                    >
                      {message.action || 'انتقل الآن'}
                      <ArrowIcon />
                    </a>
                  ) : null}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <textarea
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                rows={3}
                placeholder="اكتب سؤالك هنا، مثل: أين أجد الأخبار؟"
                className="w-full resize-none rounded-[1rem] border border-[rgba(21,68,90,0.10)] bg-white px-4 py-3 text-sm text-[var(--moe-navy)] outline-none transition focus:border-[rgba(7,168,105,0.32)]"
              />
              <div className="flex flex-wrap gap-2">
                {assistantSuggestions.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => askAssistant(item.label)}
                    className="rounded-full border border-[rgba(21,68,90,0.08)] bg-white px-3 py-2 text-xs text-[var(--moe-slate)] transition hover:border-[rgba(7,168,105,0.24)] hover:text-[var(--moe-green)]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[linear-gradient(135deg,var(--moe-green),#0b8b80)] px-4 py-3 text-sm font-medium text-white transition hover:opacity-95"
              >
                إرسال السؤال
              </button>
            </form>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,var(--moe-navy),var(--moe-blue))] px-5 py-3 text-sm font-medium text-white shadow-[0_16px_34px_rgba(21,68,90,0.28)] transition hover:-translate-y-0.5"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/14">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 4c4.4 0 8 2.9 8 6.5S16.4 17 12 17c-.8 0-1.6-.1-2.3-.3L5 19l1.4-3.4C4.9 14.4 4 12.5 4 10.5 4 6.9 7.6 4 12 4Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span>المساعد الذكي</span>
      </button>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--moe-cream)] text-[var(--moe-navy)]">
      <header className="sticky top-0 z-50 border-b border-[rgba(21,68,90,0.08)] bg-[rgba(248,250,248,0.94)] backdrop-blur-xl">
        <div className="shell">
          <div className="flex flex-col gap-4 py-4 lg:py-5">
            <div className="flex items-center justify-between gap-6 border-b border-[rgba(21,68,90,0.08)] pb-4 text-sm text-[var(--moe-slate)]">
              <div className="hidden items-center gap-1 lg:flex">
                <a href="./" className="rounded-full bg-[rgba(7,168,105,0.10)] px-3 py-1.5 font-medium text-[var(--moe-green)] transition">
                  الرئيسية
                </a>
                {officialTopItems.slice(1).map((item) => (
                  <OfficialTopNavMenu key={item} label={item} sections={officialMenus[item]} />
                ))}
              </div>
              <div className="mr-auto hidden text-xs tracking-[0.24em] text-[var(--moe-blue)] sm:block">MINISTRY OF EDUCATION</div>
            </div>

            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <img src={siteMedia.logo.src} alt={siteMedia.logo.alt} className="h-16 w-16 object-contain sm:h-20 sm:w-20" />
                <div>
                  <h1 className="mt-1 text-2xl font-bold text-[var(--moe-navy)] sm:text-3xl">وزارة التعليم</h1>
                  <p className="mt-1 text-sm text-[var(--moe-blue)] sm:text-base">المملكة العربية السعودية</p>
                </div>
              </div>

              <div className="hidden md:flex">
                <a
                  href="https://moe.gov.sa/ar/pages/default.aspx"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[rgba(21,68,90,0.12)] bg-white px-4 py-2 text-sm font-medium text-[var(--moe-navy)] transition hover:border-[var(--moe-blue)] hover:text-[var(--moe-blue)]"
                >
                  الصفحة الرسمية
                </a>
              </div>
            </div>

            <div className="-mx-4 overflow-x-auto px-4 lg:hidden">
              <div className="flex min-w-max items-center gap-2 pb-1">
                <a href="./" className="rounded-full border border-[rgba(7,168,105,0.22)] bg-[rgba(7,168,105,0.10)] px-3 py-2 text-sm text-[var(--moe-green)]">
                  الرئيسية
                </a>
                {officialTopItems.slice(1).map((item) => (
                  <a
                    key={item}
                    href={officialMenus[item]?.[0]?.items?.[0]?.href || '/'}
                    target={officialMenus[item]?.[0]?.items?.[0]?.external ? '_blank' : undefined}
                    rel={officialMenus[item]?.[0]?.items?.[0]?.external ? 'noreferrer' : undefined}
                    className="rounded-full border border-[rgba(21,68,90,0.10)] bg-white px-3 py-2 text-sm text-[var(--moe-slate)] transition"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="https://moe.gov.sa/ar/pages/default.aspx"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[rgba(21,68,90,0.10)] bg-white px-3 py-2 text-sm text-[var(--moe-slate)] transition"
                >
                  الصفحة الرسمية
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <NewsTicker items={newsItems} />
      <SmartAssistant />

      <main>
        <section className="shell pt-8">
          <div className="rounded-[2rem] border border-[rgba(21,68,90,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,245,246,0.94))] p-6 shadow-panel sm:p-7">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-medium text-[var(--moe-blue)]">ابدأ من هنا</p>
                <h2 className="section-title mt-2">أوضح نقطة دخول للخدمات والمحتوى</h2>
                <p className="section-copy">بدل التنقل بين الأقسام، اختر المسار الأقرب لاحتياجك الحالي وابدأ مباشرة.</p>
              </div>
            </div>
            <div className="mt-7 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
              {priorityActions.map((item) => (
                <QuickActionCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="shell pt-8 sm:pt-10 lg:pt-12">
          <div className="overflow-hidden rounded-[2.4rem] border border-[rgba(21,68,90,0.10)] bg-white shadow-soft">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[520px] overflow-hidden">
                <img src={siteMedia.heroCampus.src} alt={siteMedia.heroCampus.alt} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,68,90,0.30),rgba(21,68,90,0.72))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(61,126,185,0.30),transparent_36%)]" />

                <div className="relative flex h-full flex-col justify-between p-7 sm:p-10 lg:p-12">
                  <div className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
                    البوابة الرسمية لوزارة التعليم
                  </div>

                  <div className="max-w-2xl text-white">
                    <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">تعليم متميز لبناء مجتمع معرفي منافس عالمياً</h2>
                    <p className="mt-5 max-w-xl text-base leading-8 text-white/84 sm:text-lg">
                      مدخل موحد لأقسام الوزارة، الخدمات الإلكترونية، المنتجات الرسمية، والأخبار والمعلومات المرتبطة بالتعليم في المملكة.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[var(--moe-navy)] transition hover:bg-[var(--moe-sand)]">
                        الخدمات الإلكترونية
                        <ArrowIcon />
                      </a>
                      <a href="#audiences" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15">
                        الخدمات حسب الفئة
                        <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[linear-gradient(180deg,#f8fbfb_0%,#edf4f5_100%)] p-7 sm:p-10 lg:p-12">
                <div className="rounded-[2rem] border border-[rgba(13,169,166,0.15)] bg-white p-6 shadow-panel">
                  <p className="text-sm font-medium text-[var(--moe-blue)]">الأكثر طلبًا الآن</p>
                  <h3 className="mt-3 text-2xl font-bold text-[var(--moe-navy)]">الوصول السريع إلى الأنظمة الأساسية</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--moe-slate)]">روابط مباشرة للأنظمة الرسمية الأكثر استخدامًا بدون الحاجة للبحث داخل الأقسام.</p>

                  <div className="mt-6 space-y-3">
                    {quickAccess.slice(0, 4).map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group block rounded-[1.4rem] border border-[rgba(21,68,90,0.08)] bg-[var(--moe-cream)] px-5 py-4 transition hover:border-[rgba(7,168,105,0.30)] hover:bg-white"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-bold text-[var(--moe-navy)]">{item.title}</h4>
                            <p className="mt-2 text-sm leading-7 text-[var(--moe-slate)]">{item.description}</p>
                          </div>
                          <div className="mt-1 rounded-full bg-[var(--moe-navy)] p-2 text-white transition group-hover:bg-[var(--moe-green)]">
                            <ArrowIcon />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="shell pt-16 sm:pt-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--moe-blue)]">المنتجات الإلكترونية</p>
              <h3 className="section-title mt-2">الأنظمة والتطبيقات</h3>
              <p className="section-copy">دليل للخدمات الإلكترونية المقدمة من الوزارة، مع أهم المنتجات الرسمية المرتبطة بالمستفيدين.</p>
            </div>
            <a
              href="https://moe.gov.sa/ar/pages/default.aspx"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[rgba(21,68,90,0.10)] bg-white px-4 py-2 text-sm text-[var(--moe-slate)] shadow-panel"
            >
              المصدر: الصفحة الرئيسية الرسمية
            </a>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {quickAccess.map((service) => (
              <a
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.8rem] border border-[rgba(21,68,90,0.10)] bg-white p-6 shadow-panel transition hover:-translate-y-1 hover:border-[rgba(7,168,105,0.30)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[rgba(13,169,166,0.10)] px-3 py-1 text-xs font-medium text-[var(--moe-blue)]">خدمة رسمية</span>
                  <span className="rounded-full bg-[var(--moe-navy)] p-2 text-white">
                    <ArrowIcon />
                  </span>
                </div>
                <h4 className="mt-5 text-xl font-bold text-[var(--moe-navy)]">{service.title}</h4>
                <p className="mt-3 text-sm leading-7 text-[var(--moe-slate)]">{service.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="audiences" className="shell pt-16 sm:pt-20">
          <div>
            <p className="text-sm font-medium text-[var(--moe-blue)]">الخدمات حسب الفئة</p>
            <h3 className="section-title mt-2">المسارات الموجودة في الصفحة الرسمية</h3>
            <p className="section-copy">الطالب، الطالب الجامعي، المعلم والإداري، الباحث، والمستثمر. كل مجموعة مرتبطة بخدماتها الفعلية كما وردت في بوابة الوزارة.</p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {audienceServices.map((group) => (
              <LinkGroup key={group.title} title={group.title} description="روابط مباشرة إلى الخدمات المرتبطة بهذه الفئة." links={group.links} />
            ))}
          </div>
        </section>

        <section id="official-sections" className="shell py-16 sm:py-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--moe-blue)]">أقسام البوابة</p>
              <h3 className="section-title mt-2">تنظيم الخدمات والمحتوى الرسمي</h3>
              <p className="section-copy">تلخيص منظم للأقسام العليا في بوابة الوزارة: الوزارة، المعرفة، التعليم، والمركز الإعلامي.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {officialSections.map((section) => (
              <LinkGroup key={section.title} title={section.title} description={section.description} links={section.links} />
            ))}
          </div>
        </section>

        <section className="shell pb-16 sm:pb-20">
          <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[2rem] border border-[rgba(21,68,90,0.10)] bg-white p-7 shadow-panel sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[var(--moe-blue)]">أخبار الوزارة</p>
                  <h3 className="mt-2 text-2xl font-bold text-[var(--moe-navy)]">آخر الأخبار</h3>
                </div>
                <a href="./news.html" className="text-sm text-[var(--moe-green)]">
                  المزيد
                </a>
              </div>
              <div className="mt-6 space-y-4">
                {newsItems.map((item) => (
                  <a key={item.title} href={item.href} className="block rounded-[1.3rem] bg-[var(--moe-cream)] px-5 py-4 transition hover:bg-white hover:shadow-panel">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[var(--moe-blue)]">{item.category}</span>
                      <span className="text-xs text-[var(--moe-slate)]">{item.date}</span>
                    </div>
                    <div className="mt-3 flex items-start justify-between gap-4">
                      <p className="text-sm leading-7 text-[var(--moe-slate)]">{item.title}</p>
                      <span className="mt-1 shrink-0 rounded-full bg-[var(--moe-navy)] p-2 text-white">
                        <ArrowIcon />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </article>

            <div className="grid gap-5">
              <article className="rounded-[2rem] border border-[rgba(21,68,90,0.10)] bg-white p-7 shadow-panel sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-[var(--moe-blue)]">الإعلانات</p>
                  <span className="rounded-full bg-[rgba(13,169,166,0.10)] px-3 py-1 text-xs font-medium text-[var(--moe-blue)]">{announcementItems.length} عناصر</span>
                </div>
                <div className="mt-5 space-y-3">
                  {announcementItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                      className="flex items-center justify-between gap-3 rounded-[1.2rem] bg-[var(--moe-cream)] px-4 py-3 text-sm text-[var(--moe-slate)] transition hover:bg-white hover:text-[var(--moe-green)]"
                    >
                      <span>{item.label}</span>
                      <span className="shrink-0 text-[var(--moe-blue)]">
                        <ArrowIcon />
                      </span>
                    </a>
                  ))}
                </div>
              </article>

              <article className="rounded-[2rem] border border-[rgba(21,68,90,0.10)] bg-white p-7 shadow-panel sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-[var(--moe-blue)]">الفعاليات</p>
                  <span className="rounded-full bg-[rgba(61,126,185,0.10)] px-3 py-1 text-xs font-medium text-[var(--moe-blue)]">{eventItems.length} فعاليات</span>
                </div>
                <div className="mt-5 space-y-3">
                  {eventItems.map((item, index) => (
                    <div key={item} className="flex items-start gap-3 rounded-[1.2rem] bg-[var(--moe-cream)] px-4 py-3 text-sm leading-7 text-[var(--moe-slate)]">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-[var(--moe-blue)]">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[rgba(21,68,90,0.10)] bg-white py-10 sm:py-12">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <img src={siteMedia.logo.src} alt={siteMedia.logo.alt} className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-lg font-bold text-[var(--moe-navy)]">وزارة التعليم</h3>
                <p className="text-sm text-[var(--moe-slate)]">جميع الحقوق محفوظة لوزارة التعليم - المملكة العربية السعودية</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[var(--moe-navy)]">روابط تهمك</h4>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-[var(--moe-slate)]">
              {usefulLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="transition hover:text-[var(--moe-green)]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[var(--moe-navy)]">الأكثر زيارة</h4>
            <div className="mt-4 space-y-3 text-sm text-[var(--moe-slate)]">
              {mostVisited.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="block transition hover:text-[var(--moe-green)]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[var(--moe-navy)]">الوصول السريع</h4>
            <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--moe-slate)]">
              {footerLinks.concat(quickLinks).slice(0, 6).map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="block transition hover:text-[var(--moe-green)]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
