
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/home/Layout';

const Imprint = () => {
  return (
    <Layout>
      <Helmet>
        <title>Imprint | Urban Eats Club</title>
        <meta name="description" content="Legal information and company details for Urban Eats Club." />
      </Helmet>
      
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Imprint</h1>
          <p className="text-xl text-slate-600 mb-12">Legal information about Urban Eats Club</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
              <div className="space-y-3 text-slate-700">
                <p><strong>Company Name:</strong> Urban Eats Club GmbH</p>
                <p><strong>Legal Form:</strong> Limited Liability Company (GmbH)</p>
                <p><strong>Commercial Register:</strong> HRB 123456 at the Local Court of Berlin</p>
                <p><strong>VAT ID Number:</strong> DE123456789</p>
                <p><strong>Authorized Representatives:</strong> Maria Schmidt (CEO), Daniel Weber (COO)</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-3 text-slate-700">
                <p><strong>Address:</strong> Friedrichstraße 123, 10117 Berlin, Germany</p>
                <p><strong>Email:</strong> info@urbaneats.club</p>
                <p><strong>Phone:</strong> +49 30 1234567</p>
                <p><strong>Fax:</strong> +49 30 1234568</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Regulatory Information</h2>
              <div className="space-y-3 text-slate-700">
                <p><strong>Responsible for content according to § 55 Abs. 2 RStV:</strong></p>
                <p>Maria Schmidt<br />Friedrichstraße 123<br />10117 Berlin<br />Germany</p>
                <p className="mt-4"><strong>Data Protection Officer:</strong></p>
                <p>Thomas Müller<br />Email: privacy@urbaneats.club</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
              <div className="space-y-3 text-slate-700">
                <p>The European Commission provides a platform for online dispute resolution (OS) which is available at <a href="https://ec.europa.eu/consumers/odr/" className="text-urban-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>.</p>
                <p>We are not obliged and not willing to participate in dispute settlement proceedings before a consumer arbitration board.</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Liability for Content</h2>
              <div className="space-y-3 text-slate-700">
                <p>As a service provider, we are responsible for our own content on these pages according to Section 7, Paragraph 1 of the German Telemedia Act (TMG). According to Sections 8 to 10 of the TMG, however, we are not obligated to monitor transmitted or stored information from third parties or to investigate circumstances that indicate illegal activity.</p>
                <p>Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the moment of knowledge of a specific infringement. Upon notification of such violations, we will remove the content immediately.</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Copyright</h2>
              <div className="space-y-3 text-slate-700">
                <p>The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law requires the prior written consent of its respective author or creator.</p>
                <p>Downloads and copies of this site are only permitted for private, non-commercial use.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Imprint;
