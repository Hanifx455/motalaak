// تحديد العناصر الرئيسية في الصفحة
const rootElement = document.getElementById('root');

// إنشاء هيكل الصفحة
function createApp() {
    // إنشاء الهيدر
    const header = document.createElement('header');
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    
    // إنشاء اللوجو
    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.textContent = 'المتألق في التعليم';
    
    // إنشاء قائمة التنقل
    const navLinks = document.createElement('ul');
    navLinks.className = 'nav-links';
    
    const navItems = [
        { text: 'الرئيسية', href: '#' },
        { text: 'الدروس المجانية', href: '#free-lessons' },
        { text: 'الاشتراكات', href: '#subscriptions' },
        { text: 'المراحل التعليمية', href: '#education-levels' },
        { text: 'من نحن', href: '#about' },
        { text: 'اتصل بنا', href: '#contact' }
    ];
    
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        navLinks.appendChild(li);
    });
    
    // إنشاء أزرار تسجيل الدخول والتسجيل
    const authButtons = document.createElement('div');
    authButtons.className = 'auth-buttons';
    
    const loginBtn = document.createElement('button');
    loginBtn.className = 'login-btn';
    loginBtn.textContent = 'تسجيل الدخول';
    loginBtn.addEventListener('click', showLoginModal);
    
    const signupBtn = document.createElement('button');
    signupBtn.className = 'signup-btn';
    signupBtn.textContent = 'إنشاء حساب';
    signupBtn.addEventListener('click', showSignupModal);
    
    authButtons.appendChild(loginBtn);
    authButtons.appendChild(signupBtn);
    
    // تجميع عناصر الهيدر
    navbar.appendChild(logo);
    navbar.appendChild(navLinks);
    navbar.appendChild(authButtons);
    header.appendChild(navbar);
    
    // إنشاء القسم الرئيسي (Hero Section)
    const heroSection = document.createElement('section');
    heroSection.className = 'hero';
    
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'تعلم بطريقة مبتكرة مع المتألق في التعليم';
    
    const heroDescription = document.createElement('p');
    heroDescription.textContent = 'منصة تعليمية متكاملة لجميع المراحل التعليمية في الجزائر. دروس مجانية واشتراكات شهرية بأسعار مناسبة.';
    
    const ctaButton = document.createElement('button');
    ctaButton.className = 'cta-button';
    ctaButton.textContent = 'ابدأ التعلم الآن';
    ctaButton.addEventListener('click', () => {
        document.querySelector('#free-lessons').scrollIntoView({ behavior: 'smooth' });
    });
    
    heroSection.appendChild(heroTitle);
    heroSection.appendChild(heroDescription);
    heroSection.appendChild(ctaButton);
    
    // إنشاء قسم المميزات
    const featuresSection = document.createElement('section');
    featuresSection.className = 'section';
    featuresSection.id = 'features';
    
    const featuresTitle = document.createElement('h2');
    featuresTitle.className = 'section-title';
    featuresTitle.textContent = 'مميزات المنصة';
    
    const featuresContainer = document.createElement('div');
    featuresContainer.className = 'features';
    
    const featuresList = [
        {
            icon: 'icon-lessons',
            title: 'دروس مجانية',
            description: 'مجموعة متنوعة من الدروس المجانية لجميع المراحل التعليمية.'
        },
        {
            icon: 'icon-premium',
            title: 'محتوى حصري للمشتركين',
            description: 'محتوى تعليمي متميز وشروحات مفصلة للمشتركين في الخدمة المدفوعة.'
        },
        {
            icon: 'icon-quiz',
            title: 'اختبارات تفاعلية',
            description: 'اختبارات وتمارين تفاعلية لقياس مستوى التقدم وتثبيت المعلومات.'
        },
        {
            icon: 'icon-community',
            title: 'مجتمع تعليمي',
            description: 'منتدى للنقاش وتبادل المعلومات بين الطلاب والمعلمين.'
        },
        {
            icon: 'icon-devices',
            title: 'متوافق مع جميع الأجهزة',
            description: 'يمكنك الوصول إلى المنصة من أي جهاز: الكمبيوتر، الهاتف، أو اللوحة الإلكترونية.'
        },
        {
            icon: 'icon-progress',
            title: 'متابعة التقدم',
            description: 'نظام متكامل لمتابعة تقدم الطالب وتحديد نقاط القوة والضعف.'
        }
    ];
    
    featuresList.forEach(feature => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card';
        
        const featureIcon = document.createElement('div');
        featureIcon.className = 'feature-icon';
        featureIcon.innerHTML = `<svg><use href="images/feature-icons.svg#${feature.icon}"></use></svg>`;
        
        const featureTitle = document.createElement('h3');
        featureTitle.className = 'feature-title';
        featureTitle.textContent = feature.title;
        
        const featureDescription = document.createElement('p');
        featureDescription.textContent = feature.description;
        
        featureCard.appendChild(featureIcon);
        featureCard.appendChild(featureTitle);
        featureCard.appendChild(featureDescription);
        
        featuresContainer.appendChild(featureCard);
    });
    
    featuresSection.appendChild(featuresTitle);
    featuresSection.appendChild(featuresContainer);
    
    // إنشاء قسم الدروس المجانية
    const freeLessonsSection = document.createElement('section');
    freeLessonsSection.className = 'section';
    freeLessonsSection.id = 'free-lessons';
    freeLessonsSection.style.backgroundColor = '#eef5ff';
    
    const freeLessonsTitle = document.createElement('h2');
    freeLessonsTitle.className = 'section-title';
    freeLessonsTitle.textContent = 'الدروس المجانية';
    
    const freeLessonsDescription = document.createElement('p');
    freeLessonsDescription.style.textAlign = 'center';
    freeLessonsDescription.style.marginBottom = '2rem';
    freeLessonsDescription.textContent = 'استكشف مجموعة من الدروس المجانية المتاحة لجميع المراحل التعليمية';
    
    // هنا يمكن إضافة محتوى الدروس المجانية
    const freeLessonsPlaceholder = document.createElement('div');
    freeLessonsPlaceholder.style.textAlign = 'center';
    freeLessonsPlaceholder.style.padding = '3rem';
    freeLessonsPlaceholder.style.backgroundColor = '#fff';
    freeLessonsPlaceholder.style.borderRadius = '8px';
    freeLessonsPlaceholder.style.maxWidth = '800px';
    freeLessonsPlaceholder.style.margin = '0 auto';
    freeLessonsPlaceholder.innerHTML = '<h3>قريباً</h3><p>سيتم إضافة الدروس المجانية قريباً. ترقبونا!</p>';
    
    freeLessonsSection.appendChild(freeLessonsTitle);
    freeLessonsSection.appendChild(freeLessonsDescription);
    freeLessonsSection.appendChild(freeLessonsPlaceholder);
    
    // إنشاء قسم الاشتراكات
    const subscriptionsSection = document.createElement('section');
    subscriptionsSection.className = 'section';
    subscriptionsSection.id = 'subscriptions';
    
    const subscriptionsTitle = document.createElement('h2');
    subscriptionsTitle.className = 'section-title';
    subscriptionsTitle.textContent = 'خطط الاشتراك';
    
    const subscriptionsDescription = document.createElement('p');
    subscriptionsDescription.style.textAlign = 'center';
    subscriptionsDescription.style.marginBottom = '2rem';
    subscriptionsDescription.textContent = 'اختر خطة الاشتراك المناسبة لك واستمتع بمحتوى تعليمي متميز';
    
    // هنا يمكن إضافة خطط الاشتراك
    const subscriptionsPlaceholder = document.createElement('div');
    subscriptionsPlaceholder.style.textAlign = 'center';
    subscriptionsPlaceholder.style.padding = '3rem';
    subscriptionsPlaceholder.style.backgroundColor = '#fff';
    subscriptionsPlaceholder.style.borderRadius = '8px';
    subscriptionsPlaceholder.style.maxWidth = '800px';
    subscriptionsPlaceholder.style.margin = '0 auto';
    subscriptionsPlaceholder.innerHTML = '<h3>قريباً</h3><p>سيتم إضافة خطط الاشتراك قريباً. ترقبونا!</p>';
    
    subscriptionsSection.appendChild(subscriptionsTitle);
    subscriptionsSection.appendChild(subscriptionsDescription);
    subscriptionsSection.appendChild(subscriptionsPlaceholder);
    
    // إنشاء الفوتر
    const footer = document.createElement('footer');
    
    const footerContent = document.createElement('div');
    footerContent.className = 'footer-content';
    
    // قسم معلومات الاتصال
    const contactSection = document.createElement('div');
    contactSection.className = 'footer-section';
    
    const contactTitle = document.createElement('h3');
    contactTitle.textContent = 'اتصل بنا';
    
    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = 'البريد الإلكتروني: info@motalk.dz<br>الهاتف: +213 123 456 789';
    
    contactSection.appendChild(contactTitle);
    contactSection.appendChild(contactInfo);
    
    // قسم الروابط السريعة
    const linksSection = document.createElement('div');
    linksSection.className = 'footer-section';
    
    const linksTitle = document.createElement('h3');
    linksTitle.textContent = 'روابط سريعة';
    
    const quickLinks = document.createElement('ul');
    quickLinks.className = 'footer-links';
    
    const quickLinkItems = [
        { text: 'الرئيسية', href: '#' },
        { text: 'الدروس المجانية', href: '#free-lessons' },
        { text: 'الاشتراكات', href: '#subscriptions' },
        { text: 'المراحل التعليمية', href: '#education-levels' },
        { text: 'من نحن', href: '#about' }
    ];
    
    quickLinkItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        quickLinks.appendChild(li);
    });
    
    linksSection.appendChild(linksTitle);
    linksSection.appendChild(quickLinks);
    
    // قسم المراحل التعليمية
    const levelsSection = document.createElement('div');
    levelsSection.className = 'footer-section';
    
    const levelsTitle = document.createElement('h3');
    levelsTitle.textContent = 'المراحل التعليمية';
    
    const levelsList = document.createElement('ul');
    levelsList.className = 'footer-links';
    
    const educationLevels = [
        { text: 'المرحلة الابتدائية', href: '#primary' },
        { text: 'المرحلة المتوسطة', href: '#middle' },
        { text: 'المرحلة الثانوية', href: '#high' },
        { text: 'التعليم الجامعي', href: '#university' }
    ];
    
    educationLevels.forEach(level => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = level.href;
        a.textContent = level.text;
        li.appendChild(a);
        levelsList.appendChild(li);
    });
    
    levelsSection.appendChild(levelsTitle);
    levelsSection.appendChild(levelsList);
    
    // تجميع أقسام الفوتر
    footerContent.appendChild(contactSection);
    footerContent.appendChild(linksSection);
    footerContent.appendChild(levelsSection);
    
    // إضافة حقوق النشر
    const copyright = document.createElement('div');
    copyright.className = 'copyright';
    copyright.textContent = `© ${new Date().getFullYear()} المتألق في التعليم - جميع الحقوق محفوظة`;
    
    footer.appendChild(footerContent);
    footer.appendChild(copyright);
    
    // تجميع كل الأقسام في الصفحة
    rootElement.appendChild(header);
    rootElement.appendChild(heroSection);
    rootElement.appendChild(featuresSection);
    rootElement.appendChild(freeLessonsSection);
    rootElement.appendChild(subscriptionsSection);
    rootElement.appendChild(footer);
}

// دالة لإظهار نافذة تسجيل الدخول
function showLoginModal() {
    alert('سيتم إضافة نموذج تسجيل الدخول قريباً');
}

// دالة لإظهار نافذة إنشاء حساب
function showSignupModal() {
    alert('سيتم إضافة نموذج إنشاء حساب قريباً');
}

// إنشاء مكون الدردشة الآلية
function createChatbot() {
    // إنشاء عناصر الدردشة الآلية
    const chatbotContainer = document.createElement('div');
    chatbotContainer.className = 'chatbot-container';
    
    // زر فتح الدردشة
    const chatbotButton = document.createElement('button');
    chatbotButton.className = 'chatbot-button';
    chatbotButton.innerHTML = '<span>👨‍🎓</span>';
    chatbotButton.setAttribute('aria-label', 'فتح الدردشة الآلية');
    
    // نافذة الدردشة
    const chatbotWindow = document.createElement('div');
    chatbotWindow.className = 'chatbot-window';
    chatbotWindow.style.display = 'none';
    
    // رأس نافذة الدردشة
    const chatbotHeader = document.createElement('div');
    chatbotHeader.className = 'chatbot-header';
    
    const chatbotTitle = document.createElement('div');
    chatbotTitle.className = 'chatbot-title';
    chatbotTitle.textContent = 'مساعد المتألق';
    
    const chatbotCloseButton = document.createElement('button');
    chatbotCloseButton.className = 'chatbot-close';
    chatbotCloseButton.innerHTML = '&times;';
    chatbotCloseButton.setAttribute('aria-label', 'إغلاق الدردشة');
    
    chatbotHeader.appendChild(chatbotTitle);
    chatbotHeader.appendChild(chatbotCloseButton);
    
    // محتوى الدردشة
    const chatbotContent = document.createElement('div');
    chatbotContent.className = 'chatbot-content';
    
    // رسالة الترحيب
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'chatbot-message bot';
    welcomeMessage.textContent = 'مرحباً بك في المتألق في التعليم! كيف يمكنني مساعدتك اليوم؟';
    chatbotContent.appendChild(welcomeMessage);
    
    // إنشاء حاوية الاقتراحات السريعة
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'suggestions-container';
    
    // إضافة اقتراحات سريعة أولية
    const initialSuggestions = [
        'الاشتراكات والأسعار',
        'المواد الدراسية',
        'المراحل التعليمية',
        'كيفية التسجيل'
    ];
    
    // دالة لإضافة الاقتراحات
    function addSuggestions(suggestions) {
        // مسح الاقتراحات الحالية
        suggestionsContainer.innerHTML = '';
        
        // إضافة الاقتراحات الجديدة
        suggestions.forEach(suggestion => {
            const suggestionButton = document.createElement('button');
            suggestionButton.className = 'suggestion-button';
            suggestionButton.textContent = suggestion;
            suggestionsContainer.appendChild(suggestionButton);
            
            // إضافة مستمع حدث للنقر على زر الاقتراح
            suggestionButton.addEventListener('click', () => {
                // إضافة رسالة المستخدم
                addMessage(suggestion, 'user');
                
                // الحصول على رد الروبوت بعد تأخير قصير
                setTimeout(() => {
                    const botResponse = getBotResponse(suggestion);
                    addMessage(botResponse, 'bot');
                    
                    // تحديث الاقتراحات بناءً على الرسالة
                    updateSuggestions(suggestion);
                }, 500);
            });
        });
    }
    
    // دالة لتحديث الاقتراحات بناءً على سياق المحادثة
    function updateSuggestions(lastMessage) {
        // تحديد الاقتراحات الجديدة بناءً على آخر رسالة
        let newSuggestions = [];
        
        if (lastMessage.includes('اشتراك') || lastMessage.includes('سعر') || lastMessage.includes('تكلفة')) {
            newSuggestions = ['الخطة الأساسية', 'الخطة المتقدمة', 'كيفية الدفع', 'المواد الدراسية'];
        } else if (lastMessage.includes('مواد') || lastMessage.includes('دروس')) {
            newSuggestions = ['الرياضيات', 'الفيزياء', 'اللغة العربية', 'اللغة الفرنسية', 'اللغة الإنجليزية'];
        } else if (lastMessage.includes('مراحل') || lastMessage.includes('مستويات')) {
            newSuggestions = ['المرحلة الابتدائية', 'المرحلة المتوسطة', 'المرحلة الثانوية', 'المرحلة الجامعية'];
        } else if (lastMessage.includes('تسجيل') || lastMessage.includes('حساب')) {
            newSuggestions = ['مزايا الحساب', 'الاشتراكات المتاحة', 'المحتوى المجاني', 'التواصل مع الدعم'];
        } else if (lastMessage.includes('رياضيات')) {
            newSuggestions = ['دروس الجبر', 'دروس الهندسة', 'حساب المثلثات', 'التفاضل والتكامل'];
        } else if (lastMessage.includes('فيزياء') || lastMessage.includes('كيمياء') || lastMessage.includes('علوم')) {
            newSuggestions = ['الميكانيكا', 'الكهرباء', 'الكيمياء العضوية', 'الكيمياء غير العضوية'];
        } else if (lastMessage.includes('لغة عربية')) {
            newSuggestions = ['النحو', 'الصرف', 'البلاغة', 'الأدب العربي'];
        } else if (lastMessage.includes('شهادة') || lastMessage.includes('بكالوريا') || lastMessage.includes('بيام')) {
            newSuggestions = ['نماذج امتحانات', 'دروس مكثفة', 'نصائح للمراجعة', 'جدول المذاكرة'];
        } else {
            newSuggestions = ['الاشتراكات والأسعار', 'المواد الدراسية', 'المراحل التعليمية', 'كيفية التسجيل'];
        }
        
        // إضافة الاقتراحات الجديدة
        addSuggestions(newSuggestions);
    }
    
    // إضافة الاقتراحات الأولية
    addSuggestions(initialSuggestions);
    
    // نموذج إدخال الرسائل
    const chatbotForm = document.createElement('form');
    chatbotForm.className = 'chatbot-form';
    
    const chatbotInput = document.createElement('input');
    chatbotInput.type = 'text';
    chatbotInput.className = 'chatbot-input';
    chatbotInput.placeholder = 'اكتب رسالتك هنا...';
    chatbotInput.required = true;
    
    const chatbotSend = document.createElement('button');
    chatbotSend.type = 'submit';
    chatbotSend.className = 'chatbot-send';
    chatbotSend.innerHTML = '<span>&#10148;</span>';
    chatbotSend.setAttribute('aria-label', 'إرسال');
    
    chatbotForm.appendChild(chatbotInput);
    chatbotForm.appendChild(chatbotSend);
    
    // تجميع عناصر نافذة الدردشة
    chatbotWindow.appendChild(chatbotHeader);
    chatbotWindow.appendChild(chatbotContent);
    chatbotWindow.appendChild(suggestionsContainer);
    chatbotWindow.appendChild(chatbotForm);
    
    // تجميع كل عناصر الدردشة
    chatbotContainer.appendChild(chatbotButton);
    chatbotContainer.appendChild(chatbotWindow);
    
    // إضافة الدردشة إلى الصفحة
    document.body.appendChild(chatbotContainer);
    
    // إضافة وظائف التفاعل
    chatbotButton.addEventListener('click', () => {
        chatbotWindow.style.display = 'flex';
        chatbotButton.style.display = 'none';
        chatbotInput.focus();
    });
    
    chatbotCloseButton.addEventListener('click', () => {
        chatbotWindow.style.display = 'none';
        chatbotButton.style.display = 'flex';
    });
    
    chatbotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userMessage = chatbotInput.value.trim();
        
        if (userMessage) {
            // إضافة رسالة المستخدم
            addMessage(userMessage, 'user');
            chatbotInput.value = '';
            
            // محاكاة الرد من الروبوت بعد ثانية واحدة
            setTimeout(() => {
                const botResponse = getBotResponse(userMessage);
                addMessage(botResponse, 'bot');
                
                // تحديث الاقتراحات بناءً على الرسالة
                updateSuggestions(userMessage);
            }, 1000);
        }
    });
    
    // دالة لإضافة رسائل جديدة
    function addMessage(text, sender) {
        const message = document.createElement('div');
        message.className = `chatbot-message ${sender}`;
        message.textContent = text;
        chatbotContent.appendChild(message);
        
        // تمرير إلى آخر رسالة
        chatbotContent.scrollTop = chatbotContent.scrollHeight;
    }
    
    // دالة للحصول على رد الروبوت
    function getBotResponse(userMessage) {
        // تحويل النص إلى أحرف صغيرة للمقارنة بسهولة
        const message = userMessage.toLowerCase();
        
        // قائمة الردود المحتملة بناءً على الكلمات المفتاحية
        const responses = [
            {
                keywords: ['مرحبا', 'السلام عليكم', 'أهلا', 'صباح الخير', 'مساء الخير'],
                response: 'مرحباً بك! كيف يمكنني مساعدتك في رحلتك التعليمية؟'
            },
            {
                keywords: ['اشتراك', 'سعر', 'تكلفة', 'خطة', 'دفع', 'مدفوع'],
                response: 'نقدم خطط اشتراك متنوعة تبدأ من 1000 دج شهرياً. لدينا خطة أساسية بسعر 1000 دج شهرياً وخطة متقدمة بسعر 2000 دج شهرياً. يمكنك الاطلاع على التفاصيل في قسم الاشتراكات.'
            },
            {
                keywords: ['دروس', 'محتوى', 'تعلم', 'مواد'],
                response: 'نقدم دروساً في جميع المواد ولمختلف المراحل التعليمية بما في ذلك الرياضيات، الفيزياء، العلوم الطبيعية، اللغة العربية، اللغة الفرنسية، واللغة الإنجليزية. هل تبحث عن مادة معينة؟'
            },
            {
                keywords: ['رياضيات', 'حساب', 'جبر', 'هندسة'],
                response: 'نقدم دروساً شاملة في الرياضيات لجميع المستويات، بما في ذلك الجبر، الهندسة، حساب المثلثات، والتفاضل والتكامل. دروسنا مصممة لمساعدتك على فهم المفاهيم الأساسية وحل المسائل المعقدة.'
            },
            {
                keywords: ['فيزياء', 'كيمياء', 'علوم طبيعية', 'أحياء'],
                response: 'نقدم دروساً في العلوم الطبيعية تشمل الفيزياء، الكيمياء، والأحياء. نركز على شرح المفاهيم النظرية وتطبيقاتها العملية، مع توفير تمارين وأمثلة توضيحية.'
            },
            {
                keywords: ['لغة عربية', 'نحو', 'صرف', 'أدب', 'بلاغة'],
                response: 'نقدم دروساً متكاملة في اللغة العربية تشمل النحو، الصرف، البلاغة، والأدب. نهتم بتطوير مهارات القراءة والكتابة والتعبير لدى الطلاب.'
            },
            {
                keywords: ['لغة فرنسية', 'فرنسية'],
                response: 'نقدم دروساً في اللغة الفرنسية لجميع المستويات، من المبتدئين إلى المتقدمين. نركز على القواعد، المفردات، المحادثة، والكتابة.'
            },
            {
                keywords: ['لغة إنجليزية', 'إنجليزية', 'انجليزية'],
                response: 'نقدم دروساً في اللغة الإنجليزية لجميع المستويات، مع التركيز على تطوير مهارات التحدث، الاستماع، القراءة، والكتابة.'
            },
            {
                keywords: ['تسجيل', 'حساب', 'اشتراك'],
                response: 'يمكنك إنشاء حساب مجاني بالنقر على زر "إنشاء حساب" في أعلى الصفحة. بعد إنشاء الحساب، يمكنك الاشتراك في إحدى خططنا للوصول إلى المحتوى الحصري.'
            },
            {
                keywords: ['مراحل', 'مستويات', 'ابتدائي', 'متوسط', 'ثانوي', 'جامعي'],
                response: 'نقدم محتوى تعليمي لجميع المراحل التعليمية: الابتدائية، المتوسطة، الثانوية، والجامعية. يمكنك اختيار المرحلة والمستوى المناسب لك من قائمة المراحل التعليمية.'
            },
            {
                keywords: ['شهادة', 'بكالوريا', 'بيام', 'سانكيام'],
                response: 'نقدم دروساً خاصة للتحضير لشهادات التعليم الأساسي (السانكيام)، شهادة التعليم المتوسط (البيام)، وشهادة البكالوريا، مع نماذج امتحانات وحلول مفصلة.'
            },
            {
                keywords: ['معلم', 'أستاذ', 'مدرس'],
                response: 'يقدم المحتوى التعليمي على منصتنا نخبة من المعلمين والأساتذة ذوي الخبرة والكفاءة العالية. يمكنك الاطلاع على ملفات الأساتذة وتقييماتهم في قسم المعلمين.'
            },
            {
                keywords: ['تواصل', 'اتصال', 'مساعدة', 'دعم'],
                response: 'يمكنك التواصل معنا عبر البريد الإلكتروني: info@motalk.dz أو رقم الهاتف: +213 123 456 789. كما يمكنك زيارة صفحة "اتصل بنا" للمزيد من المعلومات.'
            },
            {
                keywords: ['شكرا', 'شكراً', 'ممتاز', 'رائع'],
                response: 'العفو! سعيد بمساعدتك. هل هناك شيء آخر تود معرفته؟'
            },
            {
                keywords: ['مع السلامة', 'وداعا', 'إلى اللقاء'],
                response: 'إلى اللقاء! نتمنى لك يوماً سعيداً ونجاحاً في رحلتك التعليمية.'
            },
            {
                keywords: ['كيف حالك', 'كيفك', 'أخبارك'],
                response: 'أنا بخير، شكراً على سؤالك! أنا هنا لمساعدتك في أي استفسار تعليمي. كيف يمكنني خدمتك اليوم؟'
            },
            {
                keywords: ['من أنت', 'ما اسمك', 'عرف بنفسك'],
                response: 'أنا مساعد المتألق الآلي، صُممت لمساعدتك في استخدام منصة المتألق في التعليم والإجابة عن استفساراتك حول المحتوى التعليمي والخدمات المقدمة.'
            }
        ];
        
        // البحث عن رد مناسب بناءً على الكلمات المفتاحية
        for (const item of responses) {
            if (item.keywords.some(keyword => message.includes(keyword))) {
                return item.response;
            }
        }
        
        // رد افتراضي إذا لم يتم العثور على كلمات مفتاحية
        return 'شكراً لتواصلك معنا. يمكنك طرح أسئلة حول الدروس، الاشتراكات، المراحل التعليمية، أو كيفية استخدام المنصة، وسأكون سعيداً بمساعدتك.';
    }
}

// تشغيل التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    createApp();
    createChatbot();
});