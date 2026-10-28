export const siteData = {
  brand: {
    name: "Eye Hospital.com",
    tagline: "Clear Vision · Better Tomorrow",
    year: 2026,
    copyright: "© 2026 Eyehospital.com. All rights reserved.",
    footerDescription: "Committed to providing the highest quality eye care services with compassion, innovation and trust."
  },
  
  navigation: [
    { label: "Home", href: "#top" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Doctors", href: "#doctors" },
    { label: "Gallery", href: "#stories" },
    { label: "Contact", href: "#contact" }
  ],
  
  navCta: {
    label: "Book Appointment",
    href: "#book"
  },
  
  hero: {
    eyebrow: "Clear Vision · Better Tomorrow",
    titlePrefix: "Your Vision ",
    titleHighlight: "Our Priority",
    description: "At Eye Hospital.com, we provide world-class eye care with advanced technology, experienced specialists and a patient-first approach.",
    primaryCta: { label: "Book Appointment", href: "#book" },
    secondaryCta: { label: "Learn More", href: "#about" },
    image: {
      src: "/assets/images/hero.jpg",
      alt: "Close-up of an eye",
      width: 520,
      height: 400
    }
  },
  
  featureStrip: [
    { id: "chip", title: "Advanced Technology" },
    { id: "user", title: "Expert Doctors" },
    { id: "heart", title: "Personalized Care" },
    { id: "shield", title: "Trusted by Thousands" }
  ],
  
  about: {
    eyebrow: "About Us",
    title: "World-Class Eye Care Under One Roof",
    body: "Eye Hospital.com is a modern eye care center dedicated to providing comprehensive and compassionate care. We combine advanced technology with expert medical knowledge to ensure the best possible outcomes for your vision and eye health.",
    stats: [
      { value: "10+", label: "Years of Excellence" },
      { value: "50K+", label: "Happy Patients" },
      { value: "15+", label: "Specialist Doctors" }
    ],
    cta: {
      label: "Know More About Us",
      href: "#doctors"
    },
    image: {
      src: "/assets/images/reception.jpg",
      alt: "Hospital reception",
      width: 400,
      height: 320
    }
  },
  
  services: {
    eyebrow: "Our Services",
    title: "Comprehensive Eye Care Services",
    subtitle: "From routine check-ups to advanced treatments, we offer a full range of eye care services for all ages.",
    items: [
      {
        id: "checkup",
        title: "Eye Checkup",
        description: "Regular check-ups for better vision and eye health.",
        icon: "eye",
        link: "#book"
      },
      {
        id: "cataract",
        title: "Cataract Surgery",
        description: "Safe and advanced cataract surgery with quick recovery.",
        icon: "eye",
        link: "#book"
      },
      {
        id: "lasik",
        title: "LASIK Surgery",
        description: "Freedom from glasses and contact lenses.",
        icon: "bolt",
        link: "#book"
      },
      {
        id: "glaucoma",
        title: "Glaucoma Treatment",
        description: "Advanced care for long-term vision health.",
        icon: "pin",
        link: "#book"
      },
      {
        id: "retina",
        title: "Retina Care",
        description: "Specialized treatment for retinal disorders.",
        icon: "pulse",
        link: "#book"
      },
      {
        id: "pediatric",
        title: "Children’s Eye Care",
        description: "Gentle care for your child’s bright future.",
        icon: "heart",
        link: "#book"
      }
    ]
  },
  
  whyChooseUs: {
    eyebrow: "Why Choose Us",
    title: "Why Patients Choose Eye Hospital.com",
    points: [
      "State-of-the-art technology",
      "Experienced and specialized doctors",
      "Comfortable and modern facilities",
      "Affordable and transparent pricing"
    ],
    cta: {
      label: "Our Facilities",
      href: "#contact"
    },
    videoAction: "Watch Our Story",
    image: {
      src: "/assets/images/exam.jpg",
      alt: "Doctor examining a patient",
      width: 540,
      height: 400
    }
  },
  
  doctors: {
    title: "Our Expert Doctors",
    subtitle: "Meet our team of highly qualified and experienced eye specialists.",
    allDoctorsLink: { label: "View All Doctors ›", href: "#doctors" },
    list: [
      {
        id: "dr-ahmed",
        name: "Dr. Ahmed Rahman",
        specialty: "Ophthalmologist",
        image: {
          src: "/assets/images/doctor1.jpg",
          alt: "Dr. Ahmed Rahman - Ophthalmologist",
          width: 144,
          height: 94
        }
      },
      {
        id: "dr-sara",
        name: "Dr. Sara Khan",
        specialty: "Cataract Specialist",
        image: {
          src: "/assets/images/doctor2.jpg",
          alt: "Dr. Sara Khan - Cataract Specialist",
          width: 144,
          height: 94
        }
      },
      {
        id: "dr-nazmul",
        name: "Dr. Nazmul Hasan",
        specialty: "Retina Specialist",
        image: {
          src: "/assets/images/doctor3.jpg",
          alt: "Dr. Nazmul Hasan - Retina Specialist",
          width: 144,
          height: 94
        }
      },
      {
        id: "dr-fatema",
        name: "Dr. Fatema Akter",
        specialty: "Pediatric Ophthalmologist",
        image: {
          src: "/assets/images/doctor4.jpg",
          alt: "Dr. Fatema Akter - Pediatric Ophthalmologist",
          width: 144,
          height: 94
        }
      }
    ]
  },
  
  technology: {
    eyebrow: "Our Technology",
    title: "Advanced Technology for Better Results",
    body: "We use the latest diagnostic and surgical technology to provide accurate diagnosis and effective treatment with the highest safety standards.",
    cta: {
      label: "Explore Our Technology",
      href: "#about"
    },
    image: {
      src: "/assets/images/equipment.jpg",
      alt: "Eye examination equipment",
      width: 400,
      height: 300
    },
    features: [
      { title: "OCT Scan", subtitle: "High-resolution imaging", icon: "eye" },
      { title: "Femtosecond Laser", subtitle: "Precision & safety", icon: "bolt" },
      { title: "Digital Eye Testing", subtitle: "Fast & accurate", icon: "pulse" },
      { title: "Modern Operation Theatre", subtitle: "World-class facilities", icon: "bldg" }
    ]
  },
  
  testimonials: {
    eyebrow: "Patient Stories",
    title: "What Our Patients Say",
    subtitle: "Real stories. Real people. Genuine experiences.",
    items: [
      {
        quote: "“The team at Eye Hospital.com is truly amazing. My cataract surgery was smooth and I can see clearly now. Highly recommended!”",
        name: "Sarah Ahmed",
        location: "Dhaka"
      },
      {
        quote: "“Professional, friendly and very caring. The doctors took time to explain everything. I felt so much better now.”",
        name: "James Carter",
        location: "Dhaka"
      },
      {
        quote: "“Excellent service and modern facilities. The staff is very kind and supportive. Best eye hospital in the city!”",
        name: "Ayesha Rahman",
        location: "Dhaka"
      }
    ]
  },
  
  booking: {
    eyebrow: "Book an Appointment",
    title: "Take the First Step Towards Better Vision",
    body: "Schedule your appointment today and let our experts help you see the world more clearly.",
    cta: { label: "Book Appointment", href: "#book" },
    formTitle: "Book Your Appointment",
    submitText: "Submit Appointment"
  },
  
  contact: {
    eyebrow: "Get in Touch",
    title: "We’re Here to Help",
    subtitle: "Have a question or need assistance? Contact us directly or visit our clinic. We’re always happy to help.",
    details: [
      {
        type: "phone",
        label: "Call us",
        value: "+880 1234 567890",
        href: "tel:+8801234567890",
        icon: "phone"
      },
      {
        type: "email",
        label: "Email us",
        value: "info@eyehospital.com",
        href: "mailto:info@eyehospital.com",
        icon: "mail"
      },
      {
        type: "address",
        label: "Visit us",
        value: "House # 12, Road # 5, Dhanmondi, Dhaka 1209",
        href: "https://maps.google.com/?q=House+12+Road+5+Dhanmondi+Dhaka+1209",
        icon: "pin"
      }
    ],
    image: {
      src: "/assets/images/building.jpg",
      alt: "Hospital building",
      width: 480,
      height: 300
    }
  },
  
  footer: {
    quickLinks: [
      { label: "Home", href: "#top" },
      { label: "Services", href: "#services" },
      { label: "About Us", href: "#about" },
      { label: "Our Doctors", href: "#doctors" },
      { label: "Gallery", href: "#stories" },
      { label: "Contact", href: "#contact" }
    ],
    services: [
      "Eye Checkup",
      "Cataract Surgery",
      "LASIK Surgery",
      "Glaucoma Treatment",
      "Retina Care",
      "Children’s Eye Care"
    ],
    contactInfo: [
      "+880 1234 567890",
      "info@eyehospital.com",
      "Dhanmondi, Dhaka 1209"
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" }
    ]
  }
};
