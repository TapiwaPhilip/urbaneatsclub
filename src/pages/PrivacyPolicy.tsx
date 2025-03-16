
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/home/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | Urban Eats Club</title>
        <meta name="description" content="Information about how Urban Eats Club collects, uses, and protects your personal data." />
      </Helmet>
      
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-slate-600 mb-6">Last updated: November 1, 2023</p>
          
          <div className="prose prose-slate max-w-none">
            <p>At Urban Eats Club, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
            
            <h2>Information We Collect</h2>
            <p>We collect information that you provide directly to us, information we collect automatically when you use our services, and information from third parties.</p>
            
            <h3>Personal Data</h3>
            <p>We may collect the following types of personal data:</p>
            <ul>
              <li>Contact information (name, email address, phone number, company)</li>
              <li>Account credentials (username, password)</li>
              <li>Payment information (processed by our secure payment processors)</li>
              <li>Food preferences and dietary restrictions</li>
              <li>Employment information (company, position)</li>
              <li>Usage data and order history</li>
            </ul>
            
            <h3>Automatically Collected Information</h3>
            <p>When you access our website or use our services, we may automatically collect certain information, including:</p>
            <ul>
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Log data (pages visited, time spent, referring pages)</li>
              <li>Cookies and similar technologies</li>
              <li>Location information (with your consent)</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We use your information for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and manage your account</li>
              <li>Personalize your experience</li>
              <li>Communicate with you about our services</li>
              <li>Send administrative information</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2>Sharing Your Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Restaurant partners (to fulfill orders)</li>
              <li>Service providers (payment processors, analytics, customer service)</li>
              <li>Your employer (if using as part of a corporate plan)</li>
              <li>Legal authorities (when required by law)</li>
              <li>Business partners (with your consent)</li>
            </ul>
            
            <h2>Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
            
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
            <ul>
              <li>Access to your personal data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
              <li>Withdrawal of consent</li>
            </ul>
            
            <h2>Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
            
            <h2>Children's Privacy</h2>
            <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.</p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>Urban Eats Club GmbH<br />
            Attn: Privacy Officer<br />
            Friedrichstraße 123<br />
            10117 Berlin, Germany<br />
            Email: privacy@urbaneats.club</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
