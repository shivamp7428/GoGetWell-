import { Menu, X,Activity, BadgeCheck, Bubbles, ChartNoAxesCombined, ChartSpline, Clock, Database, FileChartColumnIncreasing, MailCheck, MailSearch, MessageSquareMore, Microscope, Package2, Phone, Search, SendHorizontal, Sun,  User,  Users} from 'lucide-react'
import React from 'react'
import { useState } from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaBars, FaTimes, FaInfoCircle, FaQuestionCircle, FaPhoneAlt } from 'react-icons/fa';
const faqs = [
  {
    question: "What is gogetwell.ai?",
    answer: "gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.",
  },
  {
    question: "What is the AI Front Office for Healthcare Agents?",
    answer: "The AI Front Office helps manage healthcare services more efficiently: handling leads, booking appointments, and building websites using AI.",
  },
  {
    question: "How does the AI Agent assist me in my healthcare business?",
    answer: "The AI Agent acts like a virtual assistant: answering patient questions, scheduling consultations, and managing appointments in real time.",
  },
  {
    question: "Can I customize the website for my healthcare services?",
    answer: "Yes, you can fully customize the website's design, features, and content to best represent your healthcare brand.",
  },
  {
    question: "How does this platform support independent healthcare facilitators?",
    answer: "It automates front-office tasks, manages patient leads, and even processes payments—perfect for independent or small healthcare teams.",
  },
  {
    question: "How does the platform help manage patient leads?",
    answer: "The AI captures, organizes, prioritizes, and follows up with patient leads, helping you maximize opportunities for providing care.",
  },
  {
    question: "Is it easy to integrate the platform with hospitals?",
    answer: "Yes, it easily connects with hospital systems, helping manage billing, communication, and partnerships without hassle.",
  },
  {
    question: "Is the platform secure and compliant with healthcare regulations?",
    answer: "Absolutely! It is built with strong security measures and healthcare compliance to keep patient data safe.",
  },
  {
    question: "How quickly can I get started with the platform?",
    answer: "You can set up your AI-powered front office and website quickly, with full support from the team.",
  },
  {
    question: "What kind of customer support is available?",
    answer: "You get 24/7 support, plus tutorials and live demos to help you maximize the platform.",
  },
  {
    question: "How does the platform help me attract more patients?",
    answer: "It helps build a strong online presence with an SEO-optimized website and great patient communication tools.",
  },
];
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
  return (
    <>
   <div className="min-h-screen bg-gradient-to-r from-blue-800 to-gray-800">
      <div className=" px-6 pt-15 md:px-12">
        <h1 className="text-3xl md:text-6xl font-bold text-[var(--primary)]">AI Front Office</h1>
        <h1 className="text-3xl md:text-6xl font-bold text-white mt-2">For Healthcare Agents</h1>
        <p className="text-white text-lg md:text-2xl mt-6">
          Create <span className="text-[var(--primary)]">AI Store</span> in 2 min
        </p>
        <p className="text-white text-lg md:text-2xl">
          Scale with <span className="text-[var(--primary)]">Digital Marketing</span>
        </p>
        <div className="bg-[var(--primary)] text-white p-3 mt-6 rounded-md w-36 text-center">
          <button className="font-semibold">Get Started</button>
        </div>
      </div>
   <div className="mt-16 px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-5 md:gap-20 text-white md:text-4xl text-2xl font-bold">
          <h1>2100<b className="text-[var(--primary)]">+</b></h1>
          <p className='text-xl md:hidden'>Qualified doctors</p>
          <h1>1000<b className="text-[var(--primary)]">+</b></h1>
          <p className='text-xl md:hidden'>Hospitals</p>
          <h1>800<b className="text-[var(--primary)]">+</b></h1>
          <p className='text-xl md:hidden'>Treatment Plans</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 text-white text-lg font-semibold mt-4">
          <p className='md:block hidden'>Qualified doctors</p>
          <p className='md:block hidden'> Hospitals</p>
          <p className='md:block hidden'>Treatment Plans</p>
        </div>
      </div>
 </div>


       <div className='bg-gray-100 p-1'>
           <h1 className='text-center md:text-4xl font-bold md:p-15  p-5 text-2xl'>Our Comprehensive Solutions</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:m-30 md:mt-5 m-5">
               <div className="bg-white border-b-4 border-blue-500 p-6 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
               <Microscope className="bg-blue-500 text-white p-2 rounded-full w-12 h-12" />
               <h1 className="text-xl font-semibold mt-4">Custom AI-Powered Website</h1>
               <p className="mt-2 text-gray-600">Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.</p>
             </div>

            <div className="bg-white border-b-4 border-[var(--primary)] p-6 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
               <Bubbles className="bg-[var(--primary)] text-white p-2 rounded-full w-12 h-12" />
               <h1 className="text-xl font-semibold mt-4">Enhanced Patient Conversion</h1>
               <p className="mt-2 text-gray-600">Smart conversion optimization tools to turn visitors into patients with personalized experiences.</p>
            </div>

            <div className="bg-white border-b-4 border-green-500 p-6 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
             <Package2 className="bg-green-500 text-white p-2 rounded-full w-12 h-12" />
              <h1 className="text-xl font-semibold mt-4">Real-Time Query Handling</h1>
             <p className="mt-2 text-gray-600">Instant response system for patient inquiries with AI-powered chat support.</p>
              </div>

            <div className="bg-white border-b-4 border-orange-500 p-6 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <FileChartColumnIncreasing className="bg-orange-500 text-white p-2 rounded-full w-12 h-12" />
                <h1 className="text-xl font-semibold mt-4">Medical Report Analysis</h1>
               <p className="mt-2 text-gray-600">Advanced AI analysis of medical reports for quick and accurate patient assessments.</p>
            </div>

        <div className="bg-white border-b-4 border-red-500 p-6 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <ChartNoAxesCombined className="bg-red-500 text-white p-2 rounded-full w-12 h-12" />
            <h1 className="text-xl font-semibold mt-4">Improved Lead Generation</h1>
             <p className="mt-2 text-gray-600">Data-driven lead generation strategies to attract and engage potential patients.</p>
         </div>

    <div className="bg-white border-b-4 border-blue-800 p-6 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
           <Database className="bg-blue-800 text-white p-2 rounded-full w-12 h-12" />
         <h1 className="text-xl font-semibold mt-4">Comprehensive Healthcare Database</h1>
         <p className="mt-2 text-gray-600">Extensive medical information database for accurate patient guidance and support.</p>
     </div>

 <div className="bg-white border-b-4 border-orange-800 p-6 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
       <Sun className="bg-orange-800 text-white p-2 rounded-full w-12 h-12" />
       <h1 className="text-xl font-semibold mt-4">Multilingual Support</h1>
       <p className="mt-2 text-gray-600">Breaking language barriers with comprehensive multilingual communication tools.</p>
    </div>

  <div className="bg-white border-b-4 border-green-300 p-6 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
      <MailSearch className="bg-green-300 text-white p-2 rounded-full w-12 h-12" />
      <h1 className="text-xl font-semibold mt-4">Seamless Payment Handling</h1>
      <p className="mt-2 text-gray-600">Secure and efficient payment processing for medical services globally.</p>
  </div>
  
  <div className="bg-white border-b-4 border-green-900 p-6 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
    <Search className="bg-green-900 text-white p-2 rounded-full w-12 h-12" />
    <h1 className="text-xl font-semibold mt-4">Marketing And SEO Support</h1>
    <p className="mt-2 text-gray-600">Optimized digital presence with advanced SEO and marketing strategies.</p>
  </div>
      </div>
     </div>
     {/* About */}
 <div className="bg-white flex flex-col md:flex-row m-2 items-center gap-8  md:p-12">
  
  <div className="flex-1 flex justify-center">
    <img src="About.gif" alt="About Us" className="md:w-90 w-72 h-auto rounded-lg" /> 
  </div>

  <div className="flex-1 space-y-6">
    <h1 className="text-3xl  font-bold">About Us</h1>
    <p className="text-gray-600">
      We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.
    </p>
    <p className="text-gray-600">
      Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.
    </p>

  
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-2 rounded-md">
          <Activity className="text-blue-600 w-8 h-8" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Modern Solutions</h2>
          <p className="text-gray-600">Leveraging AI technology for healthcare</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-2 rounded-md">
          <Users className="text-blue-600 w-8 h-8" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Patient-Centric</h2>
          <p className="text-gray-600">Personalized healthcare experiences</p>
        </div>
      </div>
    </div>
  </div>
  </div>
   {/* Our mission */}

<div className="bg-white mt-20 md:mt-0 flex flex-col md:flex-row md:m-20 m-2 items-center gap-8  md:p-12">
   <div className="flex-1 md:hidden flex justify-center">
    <img src="Our.gif" alt="About Us" className="md:w-120 w-72 h-auto rounded-lg" /> {/* Smaller image */}
  </div>

    <div className="flex-1 space-y-6">
    <h1 className="text-3xl  font-bold">Our Mission</h1>
    <p className="text-gray-600">
    Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.    </p>
    <p className="text-gray-600">
    We strive to become the leading platform for healthcare tourism management and digital transformation.
        </p>

  
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-2 rounded-md">
          <BadgeCheck className="text-blue-600 w-8 h-8" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">AI-Powered Solutions</h2>
          <p className="text-gray-600">Optimizing operations with advanced technology</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-2 rounded-md">
          <ChartSpline className="text-blue-600 w-8 h-8" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Growth Focus</h2>
          <p className="text-gray-600">Maximizing revenue and opportunities</p>
        </div>
      </div>
    </div>
    </div>
    
 <div className='hidden md:block'>
 <div className="flex-1  flex justify-center">
    <img src="Our.gif" alt="About Us" className="md:w-120 w-72 h-auto rounded-lg" /> {/* Smaller image */}
  </div>
 </div>
  </div>
{/* Chllenge */}
  <div className="bg-white flex flex-col md:flex-row m-2 items-center gap-8  md:p-12">
  
  <div className="flex-1 flex justify-center">
    <img src="Challenge.gif" alt="About Us" className="md:w-90 w-72 h-auto rounded-lg" /> 
  </div>

  <div className="flex-1 space-y-6">
    <h1 className="text-3xl  font-bold">The Challenges We Solve</h1>
    <p className="text-gray-600">
    Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities.    </p>
    <p className="text-gray-600">
    Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike.
    </p>
   <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-2 rounded-md">
          <Clock className="text-blue-600 w-8 h-8" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Efficient Operations</h2>
          <p className="text-gray-600">Streamlined booking and management</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-2 rounded-md">
          <MessageSquareMore className="text-blue-600 w-8 h-8" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Enhanced Support</h2>
          <p className="text-gray-600">Improved patient communication</p>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div className="bg-blue-50 min-h-screen p-6">
  <h1 className="text-3xl md:text-4xl font-bold my-10 text-center">Frequently Asked Questions</h1>

  <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-md shadow space-y-4">
    {faqs.map((faq, index) => (
      <div key={index} className="border-b border-gray-300 bg-white overflow-hidden">
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full flex justify-between items-center p-4 text-base md:text-lg font-medium hover:bg-gray-100 transition-all"
        >
          {faq.question}
          <span className="text-lg">{openIndex === index ? "▲" : "▼"}</span>
        </button>
        {openIndex === index && (
          <div className="px-4 pb-4 text-gray-600 text-sm md:text-base animate-fade">
            {faq.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</div>


{/* contact */}


<div className="flex flex-col md:flex-row md:m-30 items-start justify-between gap-10 md:p-6 p-2">

  <div className="flex-1 m-10 md:m-0 space-y-6">
    <div>
      <h1 className="text-4xl font-bold mb-2">Let's get in touch!</h1>
      <p className="text-gray-600 text-xl">Got questions about GoGetWell.AI? Our team is here to help. Contact us for quick and friendly support.</p>
    </div>

    <div className="flex items-center gap-4">
      <div className="p-3 rounded bg-[var(--primary)] text-white">
        <Phone />
      </div>
      <div>
        <p className="font-bold">Phone</p>
        <span>+91 xxxxxxxxxx</span>
      </div>
    </div>

    
    <div className="flex items-center gap-4">
      <div className="p-3 rounded bg-[var(--primary)] text-white">
        <MailCheck />
      </div>
      <div>
        <p className="font-bold">Email</p>
        <span>hello@gogetwell.ai</span>
      </div>
    </div>

   
    <div>
      <h1 className="text-2xl font-bold mb-2">Connect With Us</h1>
      <div className="flex gap-4">
        <div className="p-3 rounded bg-black text-white">
          <BsTwitter size={24} />
        </div>
        <div className="p-3 rounded bg-black text-white">
          <BsLinkedin size={24} />
        </div>
      </div>
    </div>
  </div>

  
  <div className="flex-1 m-10 md:m-0 bg-gray-100 p-6 rounded-lg shadow-md">
    <form className="space-y-6">
     
      <div className="flex items-center gap-4 bg-white p-3 rounded-lg">
        <User className="text-gray-500" />
        <input type="text" placeholder="Full Name" className="outline-none flex-1 bg-transparent" />
      </div>

      
      <div className="flex items-center gap-4 bg-white p-3 rounded-lg">
        <MailCheck className="text-gray-500" />
        <input type="email" placeholder="Email" className="outline-none flex-1 bg-transparent" />
      </div>

    
      <div className="bg-white p-3 rounded-lg">
        <textarea placeholder="Message" className="w-full outline-none bg-transparent resize-none h-32"></textarea>
      </div>

      <div className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white p-3 rounded-lg cursor-pointer">
        <button type="submit" className="font-semibold">Submit</button>
        <SendHorizontal />
      </div>
    </form>
  </div>
</div>


    </>
  )
}

export default Home
