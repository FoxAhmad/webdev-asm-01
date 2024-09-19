const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});



    // Translation object to store text in different languages
    const translations = {
        en: {
            greeting: "Hi, I'm Ahmad!",
            aboutMe: "I'm a CS student and a Teacher Assistant based in Lahore, Pakistan. Working towards creating softwares/websites/apps that make life easier and more meaningful.",
            interest: "I have a strong interest in Web Development and am constantly honing my skills in this area.",
            hobbies: "My hobbies include playing both indoor and outdoor games, going to the gym, and more. I enjoy staying active and exploring new activities.",
            growth: "I believe that you should never stop growing and that's what I strive to do. I am passionate about technology and always eager to push the limits of what is possible. I am excited to explore new opportunities in internships and jobs related to web development (any stack).",
            projectsTitle: "Projects",
            skillsTitle: "Core Skills",
            awardsTitle: "Awards and Certifications",
            educationTitle: "Education",
            videoTitle: "Video Content",
            socialMediaTitle: "Recent Social Media Updates",
        },
        ur: {
            greeting: "ہیلو، میں احمد ہوں!",
            aboutMe: "میں لاہور، پاکستان میں مقیم کمپیوٹر سائنس کا طالب علم اور ٹیچر اسسٹنٹ ہوں۔ میں ایسی سافٹ ویئر/ویب سائٹس/ایپس بنانے کی طرف کام کر رہا ہوں جو زندگی کو آسان اور بامعنی بناتے ہیں۔",
            interest: "مجھے ویب ڈویلپمنٹ میں گہری دلچسپی ہے اور میں اس شعبے میں مسلسل اپنی مہارتوں کو بہتر کر رہا ہوں۔",
            hobbies: "میرے مشاغل میں اندرونی اور بیرونی کھیل کھیلنا، جم جانا، اور بہت کچھ شامل ہیں۔ میں سرگرم رہنا اور نئی سرگرمیوں کو تلاش کرنا پسند کرتا ہوں۔",
            growth: "میرا ماننا ہے کہ آپ کو کبھی بھی بڑھنا نہیں چھوڑنا چاہیے اور میں یہی کرنے کی کوشش کرتا ہوں۔ میں ٹیکنالوجی کا شوقین ہوں اور ہمیشہ ممکنہ حدوں کو آگے بڑھانے کا شوقین ہوں۔",
            projectsTitle: "پروجیکٹس",
            skillsTitle: "اہم مہارتیں",
            awardsTitle: "ایوارڈز اور سرٹیفیکیشنز",
            educationTitle: "تعلیم",
            videoTitle: "ویڈیو مواد",
            socialMediaTitle: "حالیہ سوشل میڈیا اپڈیٹس",
        },
        ar: {
            greeting: "مرحبًا، أنا أحمد!",
            aboutMe: "أنا طالب علوم الحاسب ومساعد تدريس مقيم في لاهور، باكستان. أعمل على إنشاء برامج / مواقع ويب / تطبيقات تجعل الحياة أسهل وأكثر معنى.",
            interest: "لدي اهتمام كبير بتطوير الويب وأعمل باستمرار على تحسين مهاراتي في هذا المجال.",
            hobbies: "تشمل هواياتي ممارسة الألعاب داخلية وخارجية، والذهاب إلى الصالة الرياضية، والمزيد. أستمتع بالبقاء نشيطًا واستكشاف الأنشطة الجديدة.",
            growth: "أعتقد أنه يجب عليك ألا تتوقف أبدًا عن النمو، وهذا ما أسعى لتحقيقه. أنا شغوف بالتكنولوجيا وأتطلع دائمًا إلى دفع حدود ما هو ممكن.",
            projectsTitle: "المشاريع",
            skillsTitle: "المهارات الأساسية",
            awardsTitle: "الجوائز والشهادات",
            educationTitle: "التعليم",
            videoTitle: "محتوى الفيديو",
            socialMediaTitle: "أحدث تحديثات وسائل التواصل الاجتماعي",
        },
        fr: {
            greeting: "Salut, je suis Ahmad!",
            aboutMe: "Je suis étudiant en informatique et assistant d'enseignant basé à Lahore, Pakistan. Je travaille à la création de logiciels/sites web/applications qui rendent la vie plus facile et plus significative.",
            interest: "J'ai un grand intérêt pour le développement web et j'affine constamment mes compétences dans ce domaine.",
            hobbies: "Mes loisirs incluent la pratique de jeux intérieurs et extérieurs, aller à la salle de sport, et bien plus encore. J'aime rester actif et explorer de nouvelles activités.",
            growth: "Je crois qu'il ne faut jamais arrêter de grandir, et c'est ce que je m'efforce de faire. Je suis passionné par la technologie et toujours désireux de repousser les limites de ce qui est possible.",
            projectsTitle: "Projets",
            skillsTitle: "Compétences de base",
            awardsTitle: "Prix et certifications",
            educationTitle: "Éducation",
            videoTitle: "Contenu vidéo",
            socialMediaTitle: "Mises à jour récentes des réseaux sociaux",
        }
    };

    // Function to change the language
    function changeLanguage(lang) {
        document.getElementById('greeting').textContent = translations[lang].greeting;
        document.getElementById('aboutMe').textContent = translations[lang].aboutMe;
        document.getElementById('interest').textContent = translations[lang].interest;
        document.getElementById('hobbies').textContent = translations[lang].hobbies;
        document.getElementById('growth').textContent = translations[lang].growth;
        document.getElementById('projectsTitle').textContent = translations[lang].projectsTitle;
        document.getElementById('skillsTitle').textContent = translations[lang].skillsTitle;
        document.getElementById('awardsTitle').textContent = translations[lang].awardsTitle;
        document.getElementById('educationTitle').textContent = translations[lang].educationTitle;
        document.getElementById('videoTitle').textContent = translations[lang].videoTitle;
        document.getElementById('socialMediaTitle').textContent = translations[lang].socialMediaTitle;
    }

    // Event listeners for the buttons
    document.getElementById('lang-en').addEventListener('click', function() {
        changeLanguage('en');
    });

    document.getElementById('lang-ur').addEventListener('click', function() {
        changeLanguage('ur');
    });

    document.getElementById('lang-ar').addEventListener('click', function() {
        changeLanguage('ar');
    });

    document.getElementById('lang-fr').addEventListener('click', function() {
        changeLanguage('fr');
    });
