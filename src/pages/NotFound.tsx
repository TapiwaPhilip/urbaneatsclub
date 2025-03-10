
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Page Not Found | Urban Eats Club</title>
        <meta name="description" content="The page you are looking for does not exist. Return to the Urban Eats Club homepage." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t('notFound.title')}</h1>
        <p className="text-xl text-gray-600 mb-4">{t('notFound.message')}</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          {t('notFound.return')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
