// Governorates data with coordinates (approximate centroids)
const governorates = [
    { id: 'cairo', name: 'القاهرة',namee: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { id: 'giza', name: 'الجيزة',namee: 'Giza', lat: 30.0131, lng: 31.2089 },
    { id: 'alexandria', name: 'الاسكندرية',namee: 'Alexandria', lat: 31.2001, lng: 29.9187 },
    { id: 'qalyubia', name: 'القليوبية',namee: 'Al-Qalyubia', lat: 30.4147, lng: 31.2015 },
    { id: 'monufia', name: 'المنوفية',namee: 'Monufia', lat: 30.5261, lng: 30.9865 },
    { id: 'sharqia', name: 'الشرقية',namee: 'Al-Sharqia', lat: 30.7063, lng: 31.6244 },
    { id: 'gharbia', name: 'الغربية',namee: 'Al-Gharbia', lat: 30.8754, lng: 31.0335 },
    { id: 'dakahlia', name: 'الدقهلية',namee: 'Al-Dakahlia', lat: 31.0506, lng: 31.3776 },
    { id: 'beheira', name: 'البحيرة',namee: 'Al-Beheira', lat: 30.8481, lng: 30.3435 },
    { id: 'damietta', name: 'دمياط',namee: 'Damietta', lat: 31.4175, lng: 31.8144 },
    { id: 'port_said', name: 'بورسعيد',namee: 'Port Said', lat: 31.2653, lng: 32.3019 },
    { id: 'ismailia', name: 'الإسماعيلية',namee: 'Ismailia', lat: 30.5965, lng: 32.2715 },
    { id: 'matrouh', name: 'مطروح',namee: 'Marsa Matrouh', lat: 31.3517, lng: 27.2373 },
    { id: 'north_sinai', name: 'شمال سيناء',namee: 'North Sinai', lat: 30.9326, lng: 33.7497 },
    { id: 'faiyum', name: 'الفيوم',namee: 'Faiyum', lat: 29.3084, lng: 30.8428 },
    { id: 'beni_suef', name: 'بني سويف',namee: 'beni suef', lat: 29.0761, lng: 31.0989 },
    { id: 'minya', name: 'المنيا',namee: 'Minya', lat: 28.1099, lng: 30.7503 },
    { id: 'asyut', name: 'أسيوط',namee: 'Assiut', lat: 27.1828, lng: 31.1828 },
    { id: 'sohag', name: 'سوهاج',namee: 'Sohag', lat: 26.5569, lng: 31.6948 },
    { id: 'qena', name: 'قنا',namee: 'Qena', lat: 26.1644, lng: 32.7267 },
    { id: 'luxor', name: 'الأقصر',namee: 'Luxor', lat: 25.6872, lng: 32.6396 },
    { id: 'aswan', name: 'أسوان',namee: 'Aswan', lat: 24.0889, lng: 32.8998 },
    { id: 'red_sea', name: 'البحر الأحمر',namee: 'Red Sea', lat: 25.5401, lng: 33.8249 },
];

// Updated course data with CCST Technician Support
const courseCategories = [
    {
        id: 'english',
        name: 'دورات اللغة الإنجليزية - English Courses',
        courses: [
            {
                id: 'english_for_it_1',
                title: 'English for IT 1',
                description: 'مقدمة في اللغة الإنجليزية المتخصصة في مجال تكنولوجيا المعلومات',
                level: 'متوسط - Intermediate'
            },
            {
                id: 'english_for_it_2',
                title: 'English for IT 2',
                description: 'تطوير مهارات اللغة الإنجليزية المتقدمة في مجال تكنولوجيا المعلومات',
                level: 'متوسط - Intermediate'
            }
        ]
    },
    {
        id: 'network_technician',
        name: 'دورات فني الشبكات - Network Technician Courses',
        courses: [
            {
                id: 'networking_basics',
                title: 'Networking Basics',
                description: 'أساسيات الشبكات ومبادئ الاتصالات',
                level: 'مبتدئ - Beginner'
            },
            {
                id: 'networking_devices',
                title: 'Networking devices and initial Configuration',
                description: 'تهيئة وتكوين أجهزة الشبكات الأساسية',
                level: 'مبتدئ - Beginner'
            },
            {
                id: 'network_addressing',
                title: 'Network Addressing and basic troubleshooting',
                description: 'عنونة الشبكات وحل المشكلات الأساسية',
                level: 'مبتدئ - Beginner'
            },
            {
                id: 'network_support',
                title: 'Network support and security',
                description: 'دعم الشبكات وأساسيات الأمان',
                level: 'مبتدئ - Beginner'
            }
        ]
    },
    {
        id: 'ccst_technician_support',
        name: 'الدعم الفني - Technician Support',
        courses: [
            {
                id: 'endpoint_security',
                title: 'Endpoint Security',
                description: 'أمن نقاط النهاية والحماية من التهديدات',
                level: 'مبتدئ - Beginner'
            },
            {
                id: 'network_defense',
                title: 'Network Defense',
                description: 'الدفاع عن الشبكات وحمايتها من الهجمات',
                level: 'مبتدئ - Beginner'
            },
            {
                id: 'cyber_threat',
                title: 'Cyber Threat Management',
                description: 'إدارة التهديدات السيبرانية والاستجابة للحوادث',
                level: 'مبتدئ - Beginner'
            }
        ]
    },
    {
        id: 'cybersecurity',
        name: 'محلل أمن سيبراني مبتدئ - Junior Cybersecurity Analyst',
        courses: [
            {
                id: 'intro_cybersecurity',
                title: 'Introduction to cybersecurity',
                description: 'مقدمة في أساسيات الأمن السيبراني',
                level: 'مبتدئ - Beginner'
            }
        ]
    },
    {
        id: 'ai',
        name: 'دورات الذكاء الاصطناعي - AI Courses',
        courses: [
            {
                id: 'intro_modern_ai',
                title: 'Introduction to Modern AI',
                description: 'مقدمة في الذكاء الاصطناعي الحديث وتطبيقاته',
                level: 'مبتدئ - Beginner'
            },
            {
                id: 'ai_fundamentals',
                title: 'AI Fundamentals with IBM SkillsBuild',
                description: 'أساسيات الذكاء الاصطناعي مع منصة IBM SkillsBuild',
                level: 'مبتدئ - Beginner'
            }
        ]
    }
];

const courseLinks = {
    beni_suef: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=a91f37ee-fa1d-48a1-912b-3d1b351c5b15',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=2e119ba5-39af-41c1-8948-eecd78b51fe0',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=2d9fa161-36b9-487c-b079-441f4d4e6e5d',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=192d9ee6-337b-45d7-b3be-d44e95440ac1',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=ad3f36f2-0200-487a-a35f-a589d8900694',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=c72f4a23-38b4-4623-b32c-c11a7b40a367',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=1beed087-d330-4b31-852d-cdcdfde76298',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=a03b7e40-2ce2-4ca4-bc52-894af84afefd',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=b2b71572-5657-46d6-9697-4631f348ab07',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=96c09c95-1ffc-49dc-bd34-d3944a2d5da9',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=a1a5b8bf-e715-4eae-bc0a-b92e56698015',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=54bba145-9b6c-4b1e-a76d-9ca42ad8467d'
    },
    cairo: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=f97a7aae-db86-4e15-8d50-3d2869f9aa1f',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=d017a982-90b8-428b-8d20-b5e473d29b43',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=9f20c416-810a-4d69-810a-5e9395aab8dd',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=5838b849-3ab1-4ffb-be2e-1ed9dbf70b3c',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=7c36cedc-5a9e-4bd8-ad40-0c27fff93496',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=02d50383-6615-4525-98be-db3b9e8209a1',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=dc8787da-9844-486c-a214-74587299d8b9',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=1fd58d10-b5a4-4b21-ab7f-cca9158c1042',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=7e1b8a39-6eca-4fee-9425-4dcc144116be',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=2662368b-c73b-454f-8e6c-747bf0c63a34',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=138a3f55-0ac0-41aa-9f41-16248a4ae75c',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=cac0bb35-9f3f-4bc1-bddd-978a797c71a4'
    },
    giza: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=4ebd7300-b56d-4a6d-9c5f-b4f89ab58471',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=edc43a74-d579-484c-b2e0-68653db00e53',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=d65fc868-93eb-4f7e-a251-8a36851e1b0d',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=a9b455c4-ce4b-4db9-a670-4bc19b29e16a',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=60c47756-99f3-4e96-b71e-8a581a9e46ec',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=f9348582-1039-48af-8cdd-b5ebcf009530',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=80736d33-6210-4b1b-981f-47187f4b8e19',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=b3dc90a2-dca6-4938-830b-d2042d68036f',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=e8922e50-e961-401d-acf3-0909185fbe13',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=5460ed10-2bb5-46dd-857f-1762d00a670c',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=fd25c948-8395-4232-a025-52012cb8c59b',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=d993bbce-21ad-4b91-8686-bf854726e49d'
    },
    north_sinai: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=b44c9b8d-d680-406a-84cc-3b85872dcf1b',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=7a7abc3f-9d8c-4ca9-96f1-808e5ad2fc52',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=1c285bb8-5baf-4455-a4b9-ef36aa451cef',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=66ea9f1b-826b-457c-a5c6-ed2ce7ce2219',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=b13999e7-7187-4a89-b23a-5ce9ea80b7b3',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=3f4fdc74-504c-4592-9b30-77a56cee6ca5',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=049049f1-9cbb-48c6-958c-196e1d298eb7',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=f9b811ce-8881-4e19-aaad-6d460f425a3b',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=d1f93465-6ae4-4123-915a-70bb668c5321',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=c0811395-6c00-460a-8f77-bd7d9d75a275',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=803ed02b-cffa-4ebd-9a9d-fb27a5b45c58',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=50aa844c-ece5-42bf-a3b2-804e627f546d'
    },
    alexandria: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=cea06659-38ee-4d9d-b4cb-e0866154839d',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=d2c1aff9-5de9-405c-a2ac-d6b971c00d78',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=17606d22-02b9-45c2-bc85-07f497fec4b3',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=18d4e648-7dca-4af8-9c3e-a52f61675dc8',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=7676a832-c4b5-4148-9e96-1b9bb3c211e6',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=7bf3387e-8212-4ce5-9f29-8de130db017b',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=632de7e5-8e9e-44f0-9c01-08a15f0cf055',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=733f16a4-4f82-4eef-8c5b-df7d3b9c401b',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=bc3f65c8-ec74-4375-b1f9-1cab21a344b0',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=441eeb1f-088c-4d8f-83ab-d981f8f578ec',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=ebe6d534-2654-4fbc-8009-6ff9aac6c80f',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=cae31281-3363-4031-b1b0-cf321e5e486d'
    },
    asyut: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=61696be7-289f-41af-87d2-b8edcbddc3dc',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=fa8b761f-ba36-419e-a19f-04f962bf52a3',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=ec5acfa4-f479-4f0f-b21f-5e9837a1e04a',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=c542b2cb-19ea-4293-ad97-bcd5f0249e29',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=9d24c038-b5fc-421d-a667-7bab14a5854e',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=fe2be5de-4de7-4d43-a643-f85d12e6d9c4',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=82e5ef90-6e7b-46e2-a3b9-f6d3b7434fac',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=3235b0e5-a018-4eda-bdde-2de7065882c5',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=4c47d47f-4d97-4b70-8efc-1905fd4031d5',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=99a2d58d-25cf-4082-83ed-4b9fefdfe3de',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=d8791855-5c5a-4d4c-a7b2-2672107773c0',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=d63cbfdc-fdf0-465d-95ce-7978b0727b2c'
    },
    aswan: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=cb1d0855-d032-486a-b8b4-746630e5e9f0',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=2abb0da2-5603-48c0-9470-bfc02bd0e29a',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=1ed4e8b2-3fa6-4eda-8cb7-986bdc90b965',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=7db93171-9516-45d8-81cf-88a7e096453e',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=51577224-44bb-4ab6-a990-fb12e97349c0',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=44da17be-89a9-4d94-9cc6-20b7513f6546',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=eb879bf3-de22-4e12-9875-83b9897d53ab',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=70c54809-5f90-4217-a104-319f073123b3',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=bcf18118-95d4-4eb9-85fb-a422695dc897',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=e608c692-3802-4cc5-8a34-8ed783b65720',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=b998f8ae-3a5c-4320-ab3b-01f4ebab8bb2',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=43556ee5-3c24-4968-892d-da751c1c96f9'
    },
    qalyubia: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=174e853a-b3b2-4e3e-bb69-a6de9670d493',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=ef31881a-0c49-4365-958f-170a0fa5db9d',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=610aedae-a6bb-4e72-b7b5-22412244decc',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=ea99935f-57fb-4e77-9782-96d1116c4d52',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=00feaf2d-e376-4bb5-bc41-87063ab32220',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=5ccca8c9-9c31-4088-ad0a-641b4c3a2f00',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=92efde9c-068b-47d4-a557-a7f28f726cc1',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=2f4e3f63-46a4-4682-b1fb-dd227143e6c3',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=a3780770-f31f-4222-8acb-1de076667641',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=f310fd38-ed6b-47ef-96e1-d2ec0c02fd63',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=397d5217-ed87-45c1-b8d3-841b08fb9126',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=e78db96b-99ad-4976-b2b8-94796309ff37'
    },
    beheira: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=cbbf68d7-eb25-4a99-baa3-8f438948c1ef',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=ba0b181c-b60d-4d45-b060-4f4421591dca',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=cfa9423f-5075-4697-b1a6-2ffbf8b25839',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=2462c186-9732-4be3-85ca-24c691c1869e',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=c20ed1cc-ac29-4a24-b712-12bc7bd284ec',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=ed833f31-1b46-4aad-b88c-dbc8a806eaa1',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=2694bcde-36ee-4044-9711-f944cfc3ad4d',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=b01ac685-ce06-4eaa-8ce3-17235d1090be',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=ab6ae814-bb2f-4576-9e33-e1274e78cebe',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=717a406c-4bc8-49ca-8536-47926bd7b2a4',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=319c3286-bf00-42bd-8580-00cf66cbed78',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=becbea40-dc95-46fd-8e92-22014dedbdc6'
    },
    damietta: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=9ea3a548-6d2a-4684-af96-095cc8162a91',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=fcf82d5f-4bdf-4a2b-b699-24d62a43f5eb',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=f936b071-f6cb-475a-b3db-d1dc9458099f',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=f764c6b6-dc0b-4694-a95c-f0168e0e3941',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=a5267b6a-289b-47bc-a8bd-3f0906dadfef',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=7882b11e-9dbe-475e-846d-491a90d46d03',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=47231f55-d1a3-476e-974e-d630b73ad233',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=470555e7-642a-40b1-86d1-04312a729085',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=d49cbbc9-a981-4084-a26a-c1bb6415c5e0',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=7131a4f9-ceae-4f4a-9ae0-10127e0a6423',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=8f1b285e-3207-474f-a447-8558b32d3588',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=fc0640b8-a2d7-4213-98ed-48d939988374'
    },
    faiyum: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=1b1deb62-2dcd-4eb1-9739-9aa4517ca5f2',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=7921f54c-c330-4193-bcd7-bd481f6940b0',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=ae987b69-adbb-43dc-bbfa-a1d594b9f62a',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=6c604059-cdc4-4ab7-8998-fb0a2714eac8',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=3e3fb6fd-d1e0-416d-82b1-fa1b29fb96d7',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=9efcac7f-dec8-43f1-bfdf-95bd392574a2',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=a57a1006-4e34-4c85-87f8-4172f81b1d6e',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=66ac2eac-a64f-48de-a9c6-cfef6d03d941',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=53a27388-10aa-4b0e-8b45-2d5074d51542',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=23784245-b956-4876-b5c2-03ad885dd5a8',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=eb96c182-827c-483f-9aa1-91e1475e3fee',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=71e1425d-0060-47ca-8929-6710993a18a3'
    },
    cairo_second: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=4123d2ae-7ef5-48f0-9459-8f86088cbf1c',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=110240da-cea5-49b4-a3e2-1b7be724653a',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=6d3090ed-5ce0-4964-bc32-08805c82f6f6',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=2a1485c4-393e-4f1c-9cff-2596e223b2b2',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=74327fdd-eab1-458e-b3a6-c3d3233643e9',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=5e389e6c-7a08-4246-8510-9ae22dffb36a',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=f105a023-5c0e-4b03-8b1c-9dc0b9d145b0',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=57a1ad4b-ed4d-4deb-9312-da344b6954d7',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=b3aaa8bf-1bb8-4f91-a1c3-cbbd4d20de5e',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=29e56a6a-799d-4efc-8fbc-94041b6095fa',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=76f47042-913a-43c8-b295-9f6b6c952b41',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=744e70ca-d459-4d84-9f10-2bf5476340c2'
    },
    red_sea: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=f3050944-7d82-4e4d-8a55-668a3e47b2bc',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=5cfb94aa-6d35-47f8-b80f-7359b4185124',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=c80cd27c-c2d3-4ecb-a0cd-f70d00e0dc78',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=1ff56afc-5760-4210-b1ca-266140e18d34',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=72502e7d-081d-4518-a66a-f497572d787e',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=58b5b6f8-4670-44b5-8329-50a02d519f06',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=8abcdc98-40cd-4633-8108-3804ef5e5edd',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=097156e7-25cd-4360-a8cf-4235c62479e7',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=458a0f1d-f23a-4714-b4f1-f289929c77e7',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=6fb40818-1c40-4557-acf7-5e029ff46e4f',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=032b0106-5be8-433b-af36-375c90283234',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=b3d07dfc-6765-41e3-abf2-425e58aced54'
    },
    luxor: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=235cf710-19df-4104-b32d-04a93de9a791',
        english_for_it_2: null,
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=438bdca9-0938-471b-82c0-b5a33e6b1177',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=923d0862-62dc-459c-a899-cd3971f4b0a8',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=8bd93b51-3484-4df4-9c3d-ef51e0866846',
        network_support: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=8bd93b51-3484-4df4-9c3d-ef51e0866846',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=1ec82199-312f-4736-bda2-da57598947f9',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=e853f8de-e555-40eb-9047-594c16373f78',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=6033c355-45e0-4884-abb2-c645d4741edf',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=eedd540c-c80d-4051-afeb-178f17e05c92',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=b248c5d0-2ed6-4fd8-a789-2897e33953bb',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=2811d647-aa2c-4a5e-bea3-018305d616c5'
    },
    dakahlia: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=c0600552-3e1f-47fb-a139-93da5c7d0574',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=aa687269-658c-4b5b-ab24-6040d72d9d6d',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=5c533213-e2ea-4530-b36a-2797af1497c1',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=6446b0d7-3116-46c4-a65b-71203b91d099',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=12c728c4-a94d-409c-ac53-0beb7f62a956',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=68cf341e-1f07-45f0-8294-c440baa1ac43',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=522d614c-b127-4bcd-a484-b3d7096aa4af',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=e400d56a-a67d-4bc8-ad48-e1c391324b90',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=4cf52fb9-5e45-4833-8e75-0aafc3ea8d50',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=984ecb49-26ff-4437-a1eb-ba24af84d22c',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=af0adcf7-3f88-4573-939a-23bc4d5dfe6f',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=75258cda-2508-41c3-bbc9-88d10c200c82'
    },
    matrouh: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=f4f52dec-c9f9-4d73-bfba-f050c87b4386',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=03f89e80-b002-466f-aa68-066e6943f7ce',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=1a1bb5ab-fc27-458c-856f-b7d1a00f7d8e',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=ccdc4003-ba85-4f03-9b2a-075bb15497e5',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=5d1e818e-8ae5-4b34-bbc9-c7a38f759940',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=c7a09ffe-6a52-4146-b0f2-d2afb5c85541',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=ea2a5c75-fec6-4953-abfe-e94715170ba3',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=e05d9f18-8ade-4825-aa89-67114fc5d405',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=df47f94f-0d3b-4f4e-b2c6-cf4ba46d11ec',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=752d3a4c-cd9e-4346-8a27-2fd3f2dbc2dc',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=efcc4a88-f353-4c0a-b008-4a883d2a308a',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=947d36fe-d976-4651-86c1-5501e7fe4579'
    },
    minya: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=d348ae05-14b1-4716-ae47-fbf0db245676',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=4c67b89e-00b7-405f-a480-31d9981cec3d',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=50955b6f-daeb-462a-8f12-2b63e3db544d',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=b43df25e-f521-4851-b2f3-6ff51bcca55c',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=82fb83c5-9475-4f47-a0fc-9a0165ebbb52',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=cae2e169-7af0-4de9-b3c0-5338d0ff910f',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=d7cc8fdb-0c62-48a3-b6d9-391b3b3da57a',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=60265ceb-f4cf-4323-ae97-6538b76524f6',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=ca064ba9-2386-46d8-bf90-a552d381047c',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=5cafe0b8-30c3-40be-ba59-37e94a7ea9cc',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=533f51ee-8320-4ad4-addf-06b5010ef58a',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=42c64039-7162-4933-b383-28def7a50b37'
    },
    port_said: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=707fbdd9-82cf-4e4e-8070-a2364be82321',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=d10350da-642c-4de8-b962-8adbb355d2af',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=0289bc8b-0c12-410f-adf9-3a9f5fb56dfd',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=87d1a4b3-6eb5-49ab-92a7-ed68a055377a',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=9c3c61a0-3856-4c5d-b0b4-61f68463d3b6',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=349a741c-7b51-4852-9c55-9da00d2af8c3',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=760d27fb-037a-4a5b-bf06-a461647bba74',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=398e4428-3994-42a8-9132-64d7ea5509a4',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=dc6420a5-7d2f-4dc6-9599-054cdaca971a',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=d7712e25-b527-454b-a811-d51e2d11692f',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=27d4ccdc-fade-43cb-8659-fa45b2b272cc',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=204c55c8-eddd-4202-ae4c-4eafb50d126f'
    },
    monufia: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=c09b005b-aa8d-4543-b6e4-db1c89e55518',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=678614b3-488a-4e72-9450-bc220af651b3',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=e17c6bdb-e4cc-4a63-8eb9-a504a68d5d24',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=7e1e1795-ae2c-450d-b810-d925785ca02e',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=1a991226-8595-4d18-8db6-5fb3eb7ac6a6',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=1935720d-5aa2-4649-a865-5fec61862125',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=04e4a890-ad98-4aab-8c53-01bf1d89a3d6',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=f4bc54da-eff9-4279-9a61-d37f5f94dfb5',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=154b51ff-9858-4ed4-a38b-453e2773765a',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=96c09c95-1ffc-49dc-bd34-d3944a2d5da9',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=689be794-1f8b-4d29-b8ad-d1d3c35d427f',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=b5f2c10e-c2fe-4a49-95bd-3ac28b54dbb7'
    },
    sohag: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=1fc3388f-de4a-4326-b1dc-7b3202c2fbce',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=18696ffa-6e31-408f-966c-bf210e546539',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=cc8f4ff8-8d32-47dd-a8f6-3407f57e6314',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=2adff83d-a51c-40a3-b376-308c0f58c2aa',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=713a746a-3e06-4ec3-a235-df99e6b3929b',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=e9f3e9a6-18e7-4b30-b739-df51a550a627',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=2a75731d-879d-49ed-8db2-51399d81bfc6',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=56518b59-14c9-4da4-8897-8bce3dbb88e9',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=0d5f6100-dcbe-4d2b-9689-cbccd38ba9ac',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=ae292286-f626-44d6-b4e6-2ad4c94e0c38',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=97f1c862-ebab-4c34-b938-0488dbd32f5e',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=17c8d8fe-e84f-4660-930c-b082aa25017a'
    },
    qena: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=ede53758-4e02-40af-9cee-6c1d82b8489d',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=71b61eee-7d2e-409a-a0d9-66776d9c69f9',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=2cdaa088-512e-41e9-a57f-75b9df07ae24',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=63f0692a-5e2e-4c94-8553-c9595283316b',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=463f2e4d-ea41-44df-ae6a-ae90ebf32f31',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=34028490-b19f-4fdf-8e7d-fdb86d2e6b04',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=5120cebd-3210-4317-a10b-fa4fd87360dc',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=3d4098fe-d4a5-4a4c-9f5e-98153c9fbdcc',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=ff29652f-7d26-42c3-bdfe-cfe24ec7b8fd',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=67a654f9-ce6d-408d-b127-7ffed8d63027',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=b4aada0a-af3e-4d8d-b78c-64354dca015a',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=e995baca-a90a-428a-9d39-88bd22c9f9bb'
    },
    ismailia: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=ccb439a3-bb30-4b45-991f-6a0ccaf4a3ad',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=af171399-9940-4e96-916d-03078e9dc45b',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=2757652d-0ac7-43ae-a6bb-1d7be2e4c581',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=474a3022-2fb9-4d8b-ae1e-63006c937d47',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=7295bcec-caf6-4012-b544-7954e50a61c8',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=4f7884b1-8dc3-4adc-b526-7cd64e4078db',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=1ffcbf25-4631-4dd2-a929-23936a8e3c0c',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=582e2e50-525f-414f-b7a7-ea5bf358219e',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=ffeec4b7-9102-4aed-9307-44fad22235f2',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=ba48236e-68ee-4261-a1cf-b8f5815349c9',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=95b6b412-bd03-42b3-a128-f24db16a45f7',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=8d356f54-b67e-4e16-81b2-fdf54d840667'
    },
    gharbia: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=a11ddb92-f245-431b-8a34-de9672cb56aa',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=e3deba78-84e5-4e93-bca7-5daf2d88b2ae',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=5f71f108-ae78-4c7a-b7ea-3d6761e4ca3a',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=6dc818bd-f19f-4a5b-bb04-89332eca0e68',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=b0e02c2b-8536-4bb5-afc4-4019290b79ec',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=69bb54e7-74c6-4d97-b9ce-a4ea870a1f6d',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=29f8721d-ea45-4f5d-a980-365d68e67107',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=71fd1b0d-d3b7-4cf8-b988-b0be9ab3fe18',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=e8838201-c536-420d-a72d-aa4fba3fae84',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=9fe92a1f-b67e-451f-b349-8a50aa66c740',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=10b005df-9bb3-499e-b658-011b563115a1',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=cc97016f-0a25-4dd1-b509-69a682128892'
    },
    sharqia: {
        english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=700b7fc9-8175-4d05-a376-ca19f9f9e506',
        english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=2467c9ee-1aea-4219-add6-71610cf22f1d',
        networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=cecd77da-0d4c-4467-ae3d-76eddc186a2a',
        networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=2258b92f-1978-4b6a-b80f-04da65527336',
        network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=550bf829-5c3d-40f6-a1ba-5d634a9d67d5',
        network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=881494dd-1a62-4548-9d02-7945310a53e9',
        endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=5d621637-140a-45c9-947c-c13b43cda402',
        network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=576e1b97-d365-49a0-bbac-fa56119dfcb5',
        cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=10009e85-0195-41fd-a5ce-a3f20e24b5f4',
        intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=d0618afc-f26c-42e6-99cd-8a0a43bed20e',
        intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=3e0a6b4e-8228-4f1a-a1f9-c7d1dbfb7bc6',
        ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=a7d00ca6-70b9-4b81-a9b6-45f069bcc296'
    }
};
// Global variables
let map;
let markers = {};
let selectedGovernorate = null;
let selectedCourseType = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    try {
        showLoading();
        initializeMap();
        populateDirectoratesGrid();
        populateGovernorateFilter();
        populateCourseTypeFilter();
        populateCoursesContainer();
        setupEventListeners();
        setupSmoothScrolling();
        hideLoading();
    } catch (error) {
        showError('حدث خطأ أثناء تحميل التطبيق: ' + error.message);
        hideLoading();
    }
});

// Show loading spinner
function showLoading() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) spinner.style.display = 'block';
}

// Hide loading spinner
function hideLoading() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) spinner.style.display = 'none';
}

// Show error message
function showError(message) {
    const errorElement = document.getElementById('error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Hide error message
function hideError() {
    const errorElement = document.getElementById('error-message');
    if (errorElement) errorElement.style.display = 'none';
}

// Initialize the map
function initializeMap() {
    try {
        map = L.map('egypt-map').setView([26.8206, 30.8025], 6);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 20,
            minZoom: 5
        }).addTo(map);


        // Load governorates polygons
        loadEgyptGovernorates();

        // Add governorate markers
        governorates.forEach(gov => {
            const marker = L.circleMarker([gov.lat, gov.lng], {
                radius: 8,
                fillColor: '#0A2342',
                color: '#C8A04F',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8,
                className: 'governorate-marker'
            }).addTo(map);

            marker.bindPopup(`<b>${gov.name}</b><br>اختر للاطلاع على الدورات التدريبية`);
            
            marker.on('click', function() {
                selectGovernorate(gov.id);
            });

            marker.on('mouseover', function() {
                this.setStyle({
                    fillColor: '#C8A04F',
                    color: '#0A2342'
                });
            });

            marker.on('mouseout', function() {
                if (selectedGovernorate !== gov.id) {
                    this.setStyle({
                        fillColor: '#0A2342',
                        color: '#C8A04F'
                    });
                }
            });

            markers[gov.id] = marker;
        });
    } catch (error) {
        throw new Error('فشل في تحميل الخريطة: ' + error.message);
    }

    // Load Egypt Governorates GeoJSON
function loadEgyptGovernorates() {
    fetch("C:\Users\AHMED\Desktop\Cisco Platform\Code\geoBoundaries-EGY-ADM1.geojson")        // ضع هنا مسار الملف داخل موقعك
        .then(response => response.json())
        .then(data => {

            egyptLayer = L.geoJSON(data, {
                style: feature => ({
                    color: "#333",
                    weight: 1,
                    fillColor: "#0A2342",
                    fillOpacity: 0.4
                }),

                onEachFeature: function (feature, layer) {

                    // اسم المحافظة
                    const govName = feature.properties.shapeName 
                                  || feature.properties.ADMIN_NAME 
                                  || "محافظة";

                    // عند الضغط
                    layer.on("click", function () {
                        layer.setStyle({
                            fillColor: "#C8A04F",
                            fillOpacity: 0.7,
                            weight: 2
                        });

                        // تشغيل الدالة الخاصة بك
                        selectGovernorate(govName);

                        layer.bindPopup(`<b>${govName}</b>`).openPopup();
                    });

                    // hover
                    layer.on("mouseover", function () {
                        layer.setStyle({
                            fillOpacity: 0.7
                        });
                    });

                    layer.on("mouseout", function () {
                        layer.setStyle({
                            fillOpacity: 0.4
                        });
                    });
                }
            }).addTo(map);
        })
        .catch(error => console.error("GeoJSON Error: ", error));
}

}

// Populate directorates grid
function populateDirectoratesGrid() {
    const grid = document.getElementById('directorates-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    governorates.forEach(gov => {
        const item = document.createElement('div');
        item.className = 'directorate-item';
        item.textContent = gov.name;
        item.dataset.govId = gov.id;
        grid.appendChild(item);
    });
}

// Populate governorate filter
function populateGovernorateFilter() {
    const filter = document.getElementById('governorate-filter');
    if (!filter) return;
    
    filter.innerHTML = '<option value="">اختر المحافظة - Select Governorate</option>';
    
    governorates.forEach(gov => {
        const option = document.createElement('option');
        option.value = gov.id;
        option.textContent = gov.name;
        filter.appendChild(option);
    });
}

// Populate course type filter
function populateCourseTypeFilter() {
    const filter = document.getElementById('course-type-filter');
    if (!filter) return;
    
    filter.innerHTML = '<option value="">جميع الكورسات - All Courses</option>';
    
    courseCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        filter.appendChild(option);
    });
}

// Populate courses container with categories
function populateCoursesContainer() {
    const container = document.getElementById('courses-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    courseCategories.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.className = 'courses-category';
        categorySection.id = `category-${category.id}`;
        
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        categoryHeader.innerHTML = `<h3>${category.name}</h3>`;
        
        const coursesGrid = document.createElement('div');
        coursesGrid.className = 'courses-grid';
        
        category.courses.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.dataset.courseId = course.id;
            card.dataset.categoryId = category.id;
            card.innerHTML = `
                <div class="course-header">
                    <h4>${course.title}</h4>
                    <span class="course-level">${course.level}</span>
                </div>
                <div class="course-body">
                    <p class="course-description">${course.description}</p>
                    <button class="btn scroll-link" data-course-id="${course.id}" disabled>أختار المحافظة أولاً - Select Your Governrate First </button>
                </div>
            `;
            coursesGrid.appendChild(card);
        });
        
        categorySection.appendChild(categoryHeader);
        categorySection.appendChild(coursesGrid);
        container.appendChild(categorySection);
    });
    
    // Initially show all categories
    document.querySelectorAll('.courses-category').forEach(cat => {
        cat.classList.add('active');
    });
}

// Set up event listeners
function setupEventListeners() {
    // Directorate items click
    document.querySelectorAll('.directorate-item').forEach(item => {
        item.addEventListener('click', function() {
            selectGovernorate(this.dataset.govId);
        });
    });

    // Course buttons click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn') && e.target.dataset.courseId) {
            if (selectedGovernorate) {
                openCourse(e.target.dataset.courseId);
            } else {
                alert('يرجى اختيار محافظة أولاً - Please select a governorate first');
            }
        }
    });

    // Filter change events
    const governorateFilter = document.getElementById('governorate-filter');
    if (governorateFilter) {
        governorateFilter.addEventListener('change', function() {
            selectedGovernorate = this.value;
            applyFilters();
        });
    }

    const courseTypeFilter = document.getElementById('course-type-filter');
    if (courseTypeFilter) {
        courseTypeFilter.addEventListener('change', function() {
            selectedCourseType = this.value;
            applyFilters();
        });
    }

    // Reset filter button
    const resetButton = document.getElementById('filter-reset');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            resetFilters();
        });
    }
}

// Set up smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Select a governorate
function selectGovernorate(govId) {
    try {
        // Update selected governorate
        selectedGovernorate = govId;
        
        // Update filter dropdown
        const governorateFilter = document.getElementById('governorate-filter');
        if (governorateFilter) governorateFilter.value = govId;
        
        // Find governorate data
        const gov = governorates.find(g => g.id === govId);
        if (!gov) return;
        
        // Update directorate items
        document.querySelectorAll('.directorate-item').forEach(item => {
            if (item.dataset.govId === govId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // Update map view
        if (map) {
            map.setView([gov.lat, gov.lng], 8);
        }
        
        // Update markers
        Object.keys(markers).forEach(id => {
            if (id === govId) {
                markers[id].setStyle({
                    fillColor: '#C8A04F',
                    color: '#0A2342'
                });
            } else {
                markers[id].setStyle({
                    fillColor: '#0A2342',
                    color: '#C8A04F'
                });
            }
        });
        
        // Update selected governorate display
        const display = document.getElementById('selected-governorate-display');
        const govName = document.getElementById('selected-gov-name');
        
        if (govName) govName.textContent = gov.name;
        if (display) display.classList.add('active');
        
        // Apply filters to update course display
        applyFilters();
    } catch (error) {
        showError('حدث خطأ أثناء اختيار المحافظة: ' + error.message);
    }
}

// Apply filters to courses
function applyFilters() {
    try {
        const categories = document.querySelectorAll('.courses-category');
        let hasVisibleCourses = false;
        
        categories.forEach(category => {
            const categoryId = category.id.replace('category-', '');
            const courses = category.querySelectorAll('.course-card');
            let categoryHasVisibleCourses = false;
            
            courses.forEach(course => {
                const courseId = course.dataset.courseId;
                let shouldShow = true;
                
                // Filter by governorate
                if (selectedGovernorate && (!courseLinks[selectedGovernorate] || !courseLinks[selectedGovernorate][courseId])) {
                    shouldShow = false;
                }
                
                // Filter by course type
                if (selectedCourseType && categoryId !== selectedCourseType) {
                    shouldShow = false;
                }
                
                if (shouldShow) {
                    course.style.display = 'block';
                    categoryHasVisibleCourses = true;
                    hasVisibleCourses = true;
                    
                    // Update course button
                    const button = course.querySelector('.btn');
                    if (selectedGovernorate) {
                        const gov = governorates.find(g => g.id === selectedGovernorate);
                        if (button && gov) {
                            button.disabled = false;
                            button.textContent = `فتح الدورة لـ ${gov.name} - Open Course for ${gov.namee}`;
                        }
                    } else {
                        if (button) {
                            button.disabled = true;
                            button.textContent = 'فتح الدورة للمحافظة المختارة - Open Course for Selected Governorate';
                        }
                    }
                } else {
                    course.style.display = 'none';
                }
            });
            
            // Show/hide category based on whether it has visible courses
            if (categoryHasVisibleCourses) {
                category.classList.add('active');
            } else {
                category.classList.remove('active');
            }
        });
        
        // Show message if no courses match filters
        const coursesSection = document.getElementById('courses');
        if (!coursesSection) return;
        
        let noCoursesMessage = coursesSection.querySelector('.no-courses-message');
        
        if (!hasVisibleCourses) {
            if (!noCoursesMessage) {
                noCoursesMessage = document.createElement('div');
                noCoursesMessage.className = 'no-courses-message';
                noCoursesMessage.style.textAlign = 'center';
                noCoursesMessage.style.padding = '40px';
                noCoursesMessage.style.backgroundColor = 'var(--white)';
                noCoursesMessage.style.borderRadius = 'var(--border-radius)';
                noCoursesMessage.style.boxShadow = 'var(--shadow)';
                noCoursesMessage.innerHTML = `
                    <h3>لا توجد دورات متاحة - No Courses Available</h3>
                    <p>لا توجد دورات تطابق معايير البحث المحددة. حاول تغيير الفلاتر.</p>
                `;
                coursesSection.appendChild(noCoursesMessage);
            }
        } else if (noCoursesMessage) {
            noCoursesMessage.remove();
        }
    } catch (error) {
        showError('حدث خطأ أثناء تطبيق الفلاتر: ' + error.message);
    }
}

// Reset all filters
function resetFilters() {
    try {
        selectedGovernorate = null;
        selectedCourseType = null;
        
        const governorateFilter = document.getElementById('governorate-filter');
        if (governorateFilter) governorateFilter.value = '';
        
        const courseTypeFilter = document.getElementById('course-type-filter');
        if (courseTypeFilter) courseTypeFilter.value = '';
        
        document.querySelectorAll('.directorate-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const display = document.getElementById('selected-governorate-display');
        if (display) display.classList.remove('active');
        
        Object.keys(markers).forEach(id => {
            markers[id].setStyle({
                fillColor: '#0A2342',
                color: '#C8A04F'
            });
        });
        
        applyFilters();
    } catch (error) {
        showError('حدث خطأ أثناء إعادة تعيين الفلاتر: ' + error.message);
    }
}

// Open course for selected governorate
function openCourse(courseId) {
    try {
        if (!selectedGovernorate) {
            alert('يرجى اختيار محافظة أولاً - Please select a governorate first');
            return;
        }
        
        // Find course and governorate data
        const gov = governorates.find(g => g.id === selectedGovernorate);
        if (!gov) return;
        
        // Get the actual course link
        let courseUrl = '#';
        
        if (courseLinks[selectedGovernorate] && courseLinks[selectedGovernorate][courseId]) {
            courseUrl = courseLinks[selectedGovernorate][courseId];
            
            // Open the course in a new tab
            window.open(courseUrl, '_blank', 'noopener,noreferrer');
        } else {
            alert(`عذراً، الرابط غير متوفر حالياً للدورة في محافظة ${gov.name}`);
        }
    } catch (error) {
        showError('حدث خطأ أثناء فتح الدورة: ' + error.message);
    }


// Mobile sidebar functionality - إزالة لأن القائمة لن تستخدم في الهواتف
function initMobileSidebar() {
    // هذه الوظيفة لن تستخدم في الهواتف
    if (window.innerWidth >= 768) {
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const sidebar = document.getElementById('directorates-sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        
        if (mobileToggle && sidebar && overlay) {
            mobileToggle.addEventListener('click', function() {
                sidebar.classList.toggle('active');
                overlay.classList.toggle('active');
                this.classList.toggle('active');
            });
            
            overlay.addEventListener('click', function() {
                sidebar.classList.remove('active');
                this.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        }
    }
}

// تحسين اختيار المحافظة في الفلتر للهواتف
function enhanceMobileSelect() {
    const governorateFilter = document.getElementById('governorate-filter');
    
    if (governorateFilter && window.innerWidth <= 767) {
        // إضافة placeholder محسن للهواتف
        const defaultOption = governorateFilter.querySelector('option[value=""]');
        if (defaultOption) {
            defaultOption.textContent = '👆 اختر المحافظة - Select Governorate';
        }
        
        // تحسين تجربة المستخدم في الهواتف
        governorateFilter.addEventListener('focus', function() {
            this.style.backgroundColor = 'var(--light-gray)';
        });
        
        governorateFilter.addEventListener('blur', function() {
            this.style.backgroundColor = 'var(--white)';
        });
    }
}

// تحسين النافذة المنبثقة للكورسات
function enhanceCourseLinks() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn') && e.target.dataset.courseId) {
            if (!selectedGovernorate) {
                // تحسين رسالة التنبيه في الهواتف
                if (window.innerWidth <= 767) {
                    showMobileAlert('يرجى اختيار المحافظة أولاً من القائمة أعلاه');
                } else {
                    alert('يرجى اختيار محافظة أولاً - Please select a governorate first');
                }
                e.preventDefault();
                return;
            }
            
            // فتح الرابط في نافذة جديدة مع تحسينات للهواتف
            openCourse(e.target.dataset.courseId);
            e.preventDefault();
        }
    });
}

// وظيفة لعرض تنبيه محسن في الهواتف
function showMobileAlert(message) {
    // إنشاء عنصر التنبيه
    const alertDiv = document.createElement('div');
    alertDiv.className = 'mobile-alert';
    alertDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, var(--navy), #1a3a5f);
        color: var(--white);
        padding: 20px;
        border-radius: var(--border-radius);
        text-align: center;
        z-index: 3000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        max-width: 90%;
        width: 300px;
    `;
    
    alertDiv.innerHTML = `
        <h3 style="color: var(--gold); margin-bottom: 10px;">تنبيه</h3>
        <p style="margin-bottom: 15px;">${message}</p>
        <button class="btn" onclick="this.parentElement.remove()" style="background: var(--gold); color: var(--navy); border: none; padding: 10px 20px; border-radius: var(--border-radius); cursor: pointer;">
            حسناً
        </button>
    `;
    
    
    document.body.appendChild(alertDiv);
    
    // إزالة التنبيه تلقائياً بعد 5 ثواني
    setTimeout(() => {
        if (alertDiv.parentElement) {
            alertDiv.remove();
        }
    }, 5000);
}

// Update the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    try {
        showLoading();
        
        // Initialize EDF Guide
        initEDFGuide();
        
        // تهيئة الخريطة فقط في الشاشات الكبيرة
        if (window.innerWidth >= 768) {
            initializeMap();
            populateDirectoratesGrid();
            initMobileSidebar();
        } else {
            // إخفاء عناصر الخريطة في الهواتف
            const governoratesSection = document.getElementById('governorates');
            if (governoratesSection) {
                governoratesSection.style.display = 'none';
            }
        }
        
        populateGovernorateFilter();
        populateCourseTypeFilter();
        populateCoursesContainer();
        setupEventListeners();
        setupSmoothScrolling();
        enhanceMobileSelect();
        enhanceCourseLinks();
        
        hideLoading();
    } catch (error) {
        showError('حدث خطأ أثناء تحميل التطبيق: ' + error.message);
        hideLoading();
    }
});

// تحسين وظيفة openCourse للهواتف
function openCourse(courseId) {
    try {
        if (!selectedGovernorate) {
            if (window.innerWidth <= 767) {
                showMobileAlert('يرجى اختيار المحافظة أولاً من القائمة أعلاه');
            } else {
                alert('يرجى اختيار محافظة أولاً - Please select a governorate first');
            }
            return;
        }
        
        const gov = governorates.find(g => g.id === selectedGovernorate);
        if (!gov) return;
        
        let courseUrl = '#';
        
        if (courseLinks[selectedGovernorate] && courseLinks[selectedGovernorate][courseId]) {
            courseUrl = courseLinks[selectedGovernorate][courseId];
            
            // فتح الرابط في نافذة جديدة مع تحسينات للهواتف
            const newWindow = window.open(courseUrl, '_blank', 'noopener,noreferrer');
            
            // تحسين تجربة المستخدم في الهواتف
            if (window.innerWidth <= 767 && newWindow) {
                // إضافة رسالة تأكيد في الهواتف
                showMobileAlert('تم فتح الدورة في نافذة جديدة. قد تحتاج إلى السماح بالنوافذ المنبثقة إذا لم تفتح تلقائياً.');
            }
        } else {
            const message = `عذراً، الرابط غير متوفر حالياً للدورة في محافظة ${gov.name}`;
            if (window.innerWidth <= 767) {
                showMobileAlert(message);
            } else {
                alert(message);
            }
        }
    } catch (error) {
        const errorMessage = 'حدث خطأ أثناء فتح الدورة: ' + error.message;
        if (window.innerWidth <= 767) {
            showMobileAlert(errorMessage);
        } else {
            alert(errorMessage);
        }
    }
}

// تحسين applyFilters للهواتف
function applyFilters() {
    try {
        const categories = document.querySelectorAll('.courses-category');
        let hasVisibleCourses = false;
        
        categories.forEach(category => {
            const categoryId = category.id.replace('category-', '');
            const courses = category.querySelectorAll('.course-card');
            let categoryHasVisibleCourses = false;
            
            courses.forEach(course => {
                const courseId = course.dataset.courseId;
                let shouldShow = true;
                
                if (selectedGovernorate && (!courseLinks[selectedGovernorate] || !courseLinks[selectedGovernorate][courseId])) {
                    shouldShow = false;
                }
                
                if (selectedCourseType && categoryId !== selectedCourseType) {
                    shouldShow = false;
                }
                
                if (shouldShow) {
                    course.style.display = 'block';
                    categoryHasVisibleCourses = true;
                    hasVisibleCourses = true;
                    
                    const button = course.querySelector('.btn');
                    if (selectedGovernorate) {
                        const gov = governorates.find(g => g.id === selectedGovernorate);
                        if (button && gov) {
                            button.disabled = false;
                            // تحسين النص في الهواتف
                            if (window.innerWidth <= 767) {
                                button.textContent = `📖 فتح الدورة ل${gov.name}`;
                            } else {
                                button.textContent = `فتح الدورة ل${gov.name} - Open Course for ${gov.name}`;
                            }
                        }
                    } else {
                        if (button) {
                            button.disabled = true;
                            // تحسين النص في الهواتف
                            if (window.innerWidth <= 767) {
                                button.textContent = '👆 اختر المحافظة أولاً';
                            } else {
                                button.textContent = 'فتح الدورة للمحافظة المختارة - Open Course for Selected Governorate';
                            }
                        }
                    }
                } else {
                    course.style.display = 'none';
                }
            });
            
            if (categoryHasVisibleCourses) {
                category.classList.add('active');
            } else {
                category.classList.remove('active');
            }
        });
        
        // عرض رسالة في الهواتف عندما لا توجد كورسات
        const coursesSection = document.getElementById('courses');
        if (!coursesSection) return;
        
        let noCoursesMessage = coursesSection.querySelector('.no-courses-message');
        
        if (!hasVisibleCourses) {
            if (!noCoursesMessage) {
                noCoursesMessage = document.createElement('div');
                noCoursesMessage.className = 'no-courses-message mobile-alert';
                noCoursesMessage.style.textAlign = 'center';
                noCoursesMessage.style.padding = '20px';
                noCoursesMessage.style.backgroundColor = 'var(--white)';
                noCoursesMessage.style.borderRadius = 'var(--border-radius)';
                noCoursesMessage.style.boxShadow = 'var(--shadow)';
                noCoursesMessage.style.margin = '20px 0';
                
                if (window.innerWidth <= 767) {
                    noCoursesMessage.innerHTML = `
                        <h3 style="color: var(--navy); margin-bottom: 10px;">📭 لا توجد دورات</h3>
                        <p style="color: #666;">لا توجد دورات تطابق معايير البحث المحددة. حاول تغيير الفلاتر.</p>
                    `;
                } else {
                    noCoursesMessage.innerHTML = `
                        <h3>لا توجد دورات متاحة - No Courses Available</h3>
                        <p>لا توجد دورات تطابق معايير البحث المحددة. حاول تغيير الفلاتر.</p>
                    `;
                }
                coursesSection.appendChild(noCoursesMessage);
            }
        } else if (noCoursesMessage) {
            noCoursesMessage.remove();
        }
    } catch (error) {
        console.error('Error applying filters:', error);
    }
}

}
