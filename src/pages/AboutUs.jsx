import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-8 text-center">About Us.</h1>
        
        <div className="space-y-6 text-gray-700">
          <p className="text-base">
            At Translink Express, based in Mumbai, we understand that in today's fast-paced business world, every second counts and time is money. With this in mind, we are committed to maintaining the highest service standards, aligning with the best benchmarks of the industry. In just 8 years, we have partnered with numerous corporate and semi-corporate companies to meet their domestic and international courier needs.
          </p>
          
          <p className="text-base">
            Our corporate vision is to be recognized as one of the leading logistics and courier companies of our time. We strive to not only meet but exceed the expectations of our valued customers, continuously improving our service quality.
          </p>
          
          <p className="text-base">
            As a prominent courier aggregator, we provide seamless, cost-effective solutions to connect you with destinations worldwide. We pride ourselves on delivering your packages punctually and in perfect condition, earning a reputation for reliability and excellence. We manage every aspect of the supply chain, from pickup and careful packaging to documentation, customs clearance, and final delivery.
          </p>
          
          <p className="text-base">
            Our services cater to a wide range of logistics needs, including domestic and international courier services for both documents and parcels. We also offer specialized services for commodities such as chemicals, bulk medicine, liquids, and machine components.
          </p>
          
          <p className="text-base font-medium mt-8">We offer:</p>
          
          <ul className="list-decimal pl-8 space-y-2">
            <li>Outstanding success rate in international package delivery.</li>
            <li>Proof of Delivery (POD) available on request for domestic shipments.</li>
            <li>Negotiable rates for bulk loads.</li>
            <li>Website tracking for real-time shipment updates.</li>
            <li>24/7 service, seven days a week.</li>
            <li>Nationwide and global coverage.</li>
          </ul>
          
          <p className="text-base">
            Our door-to-door services are designed to simplify your logistics challenges, offering tailored solutions for corporate executives, exporters, importers, small business owners, and individuals with specific shipping requirements.
          </p>
          
          <p className="text-base mt-6">
            At Translink Express, we know how to offer exceptional service—because if we don't, someone else will. Trust us to be your reliable partner in navigating the complexities of logistics and courier services.
          </p>
          
          <p className="text-base">
            For any issues or concerns, please contact our head office. We are here to assist you.
          </p>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Head Office</h3>
            <address className="not-italic">
              Translink Express<br />
              Shop No. F 24, 1st Floor,<br />
              Bonny Plaza Shopping Center,<br />
              S. V. Road,<br />
              Opp. Paneri Showroom,<br />
              Andheri West,<br />
              Mumbai 400058,<br />
              India.<br /><br />
              Mobile: +91 9833897003<br />
              Tel: +91 26217777<br />
              USA & Canada Toll-Free Number: +1-844-395-3333 (9:00 am to 11:00 pm India Time)<br />
              <a href="mailto:enquiry@translinkexp.com" className="text-purple-600">enquiry@translinkexp.com</a>
            </address>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-4 right-4 bg-purple-600 text-white rounded-full p-4 shadow-lg z-50">
        <a href="tel:+919833897003" className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +91-9833897003
        </a>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
