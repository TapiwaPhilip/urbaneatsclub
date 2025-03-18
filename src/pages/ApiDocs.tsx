
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/home/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyBlock, dracula } from "react-code-blocks";

const ApiDocs = () => {
  const authExample = `const response = await fetch('https://api.urbaneats.club/v1/auth/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET'
  })
});

const { access_token } = await response.json();`;

  const restaurantsExample = `const response = await fetch('https://api.urbaneats.club/v1/restaurants', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + access_token
  }
});

const restaurants = await response.json();`;

  const ordersExample = `const response = await fetch('https://api.urbaneats.club/v1/orders', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + access_token,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    restaurant_id: 'restaurant_123',
    items: [
      { id: 'item_456', quantity: 1 }
    ],
    delivery_time: '2023-12-01T12:30:00Z'
  })
});

const order = await response.json();`;

  return (
    <Layout>
      <Helmet>
        <title>API Documentation | Urban Eats Club</title>
        <meta name="description" content="Technical documentation for the Urban Eats Club API." />
      </Helmet>
      
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">API Documentation</h1>
          <p className="text-xl text-slate-600 mb-12">Integrate Urban Eats Club with your existing systems using our RESTful API.</p>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-slate-600 mb-4">
              To use the Urban Eats Club API, you'll need to obtain API credentials from your account dashboard.
              These credentials are used to authenticate your requests to our API endpoints.
            </p>
            <p className="text-slate-600 mb-4">
              All API requests should be made to the base URL: <code className="bg-slate-100 px-2 py-1 rounded">https://api.urbaneats.club/v1</code>
            </p>
            <p className="text-slate-600">
              The API uses OAuth 2.0 for authentication. You'll need to exchange your client credentials for an access token,
              which you'll include in the Authorization header of your requests.
            </p>
          </div>
          
          <Tabs defaultValue="authentication" className="mb-12">
            <TabsList className="mb-6">
              <TabsTrigger value="authentication">Authentication</TabsTrigger>
              <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>
            
            <TabsContent value="authentication" className="space-y-6">
              <h3 className="text-xl font-medium">Authentication API</h3>
              <p className="text-slate-600">Generate an access token using your client credentials.</p>
              
              <div className="mt-4">
                <h4 className="text-lg font-medium mb-2">Request Example</h4>
                <div className="bg-slate-900 rounded-md overflow-hidden">
                  <CopyBlock
                    text={authExample}
                    language="javascript"
                    theme={dracula}
                    showLineNumbers={true}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="restaurants" className="space-y-6">
              <h3 className="text-xl font-medium">Restaurants API</h3>
              <p className="text-slate-600">Retrieve information about available restaurants and their menus.</p>
              
              <div className="mt-4">
                <h4 className="text-lg font-medium mb-2">Request Example</h4>
                <div className="bg-slate-900 rounded-md overflow-hidden">
                  <CopyBlock
                    text={restaurantsExample}
                    language="javascript"
                    theme={dracula}
                    showLineNumbers={true}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="orders" className="space-y-6">
              <h3 className="text-xl font-medium">Orders API</h3>
              <p className="text-slate-600">Create, retrieve, and manage food orders.</p>
              
              <div className="mt-4">
                <h4 className="text-lg font-medium mb-2">Request Example</h4>
                <div className="bg-slate-900 rounded-md overflow-hidden">
                  <CopyBlock
                    text={ordersExample}
                    language="javascript"
                    theme={dracula}
                    showLineNumbers={true}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Need Technical Help?</h2>
            <p className="text-slate-600 mb-6">Our developer support team is available to help with API integration questions.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:api-support@urbaneats.club" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Contact Developer Support
              </a>
              <a href="https://github.com/urbaneats/api-examples" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                View Example Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApiDocs;
