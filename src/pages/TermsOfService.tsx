
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/home/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service | Urban Eats Club</title>
        <meta name="description" content="Terms and conditions for using Urban Eats Club services." />
      </Helmet>
      
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-slate-600 mb-6">Last updated: November 1, 2023</p>
          
          <div className="prose prose-slate max-w-none">
            <p>Please read these Terms of Service ("Terms") carefully as they contain important information about your legal rights, remedies, and obligations. By accessing or using Urban Eats Club's platform and services, you agree to comply with and be bound by these Terms.</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>By creating an account, accessing, or using the Urban Eats Club platform, you agree to be bound by these Terms, our Privacy Policy, and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.</p>
            
            <h2>2. Definitions</h2>
            <p>"Urban Eats Club," "we," "us," and "our" refer to Urban Eats Club GmbH.</p>
            <p>"You" and "your" refer to individuals who access or use our platform.</p>
            <p>"Platform" refers to our website, mobile applications, and related services.</p>
            <p>"Corporate Client" refers to companies that contract with Urban Eats Club to provide meal benefits to their employees.</p>
            <p>"Restaurant Partner" refers to restaurants or food service providers that offer meals through our platform.</p>
            
            <h2>3. Services</h2>
            <p>Urban Eats Club provides a platform connecting Corporate Clients and their employees with Restaurant Partners for meal ordering and delivery services. We do not prepare or deliver food ourselves but facilitate transactions between users and Restaurant Partners.</p>
            
            <h2>4. Account Registration</h2>
            <p>To use certain features of our platform, you must register for an account. You agree to provide accurate, current, and complete information and to update this information to keep it accurate, current, and complete. We reserve the right to suspend or terminate your account if any information provided is inaccurate, misleading, or incomplete.</p>
            
            <h2>5. Corporate Accounts</h2>
            <p>If you are using our services as part of a corporate meal program, your access and usage may be subject to additional terms set by your employer. Your employer may have access to certain information regarding your use of the platform, including order history and spending.</p>
            
            <h2>6. Ordering and Payment</h2>
            <p>When you place an order through our platform, you agree to pay the specified prices for the items ordered. If you are using our services as part of a corporate meal program, payment processing will occur according to the agreement between Urban Eats Club and your employer.</p>
            
            <h2>7. User Conduct</h2>
            <p>You agree not to use our platform for any illegal or unauthorized purpose. You agree not to violate any laws, regulations, or third-party rights.</p>
            
            <h2>8. Intellectual Property</h2>
            <p>All content, features, and functionality of our platform, including but not limited to text, graphics, logos, and software, are owned by Urban Eats Club or our licensors and are protected by intellectual property laws.</p>
            
            <h2>9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Urban Eats Club shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.</p>
            
            <h2>10. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Urban Eats Club and our officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of our services.</p>
            
            <h2>11. Termination</h2>
            <p>We may terminate or suspend your account and access to our services at our sole discretion, without notice, for any reason, including if you breach these Terms.</p>
            
            <h2>12. Changes to Terms</h2>
            <p>We may modify these Terms at any time. Any changes will be effective immediately upon posting the updated Terms. Your continued use of our platform after the posting of the updated Terms constitutes your agreement to the changes.</p>
            
            <h2>13. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of Germany, without regard to its conflict of law principles.</p>
            
            <h2>14. Dispute Resolution</h2>
            <p>Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Berlin, Germany.</p>
            
            <h2>15. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>Urban Eats Club GmbH<br />
            Friedrichstraße 123<br />
            10117 Berlin, Germany<br />
            Email: legal@urbaneats.club</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
