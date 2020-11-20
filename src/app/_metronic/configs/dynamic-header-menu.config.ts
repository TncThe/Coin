export const DynamicHeaderMenuConfig = {
  items: [
    {
      title: 'Home',
      translate: 'MENU.HOME',
      page: '/home',
      root: true
    },
    {
      title: 'Services',
      translate: 'MENU.SERVICES',
      page: '/services',
      submenu: [
        {
          title: 'Custody',
          translate: 'MENU.SERVICES_CUSTODY',
          page: '/services/custody',
          submenu: [
            {
              title: 'Wallet Platform',
              translate: 'MENU.SERVICES_CUSTODY_WALLET_PLATFORM',
              page: '/services/custody/wallet-platform',
            },
            {
              title: 'Qualified Custody',
              translate: 'MENU.SERVICES_CUSTODY_QUALIFIED',
              page: '/services/custody/qualified-custody',
            },
            {
              title: 'Self-Managed Custody',
              translate: 'MENU.SERVICES_CUSTODY_SELF_MANAGED',
              page: '/services/custody/self-managed-custody',
            }
          ]
        },
        {
          title: 'Prime Services',
          translate: 'MENU.SERVICES_PRIME_SERVICES',
          page: '/services/prime',
          submenu: [
            {
              title: 'Prime Trading',
              translate: 'MENU.SERVICES_PS_PRIME_TRADING',
              page: '/services/prime/prime-trading',
            },
            {
              title: 'Prime Landing',
              translate: 'MENU.SERVICES_PS_PRIME_LANDING',
              page: '/services/prime/prime-landing',
            },
            {
              title: 'Settlement',
              translate: 'MENU.SERVICES_PS_SETTLEMENT',
              page: '/services/prime/settlement',
            }
          ]
        },
        {
          title: 'Portfolio Tools',
          translate: 'MENU.SERVICES_PORTFOLIO_TOOLS',
          page: '/services/portfolio',
          submenu: [
            {
              title: 'Portfolio Management',
              translate: 'MENU.SERVICES_PT_PORTFOLIO_MANAGEMENT',
              page: '/services/portfolio/portfolio-management',
            },
            {
              title: 'Tax',
              translate: 'MENU.SERVICES_PT_TAX',
              page: '/services/portfolio/tax',
            }
          ]
        },
        {
          title: 'API',
          translate: 'MENU.SERVICES_API',
          page: '/api',
          submenu: [
            {
              title: 'Wallets SDK',
              translate: 'MENU.SERVICES_API_WALLETS_SDK',
              url: 'https://api.bitgo.com/docs',
              page: '/api/external'
            },
            {
              title: 'Trade Execution SDK',
              translate: 'MENU.SERVICES_API_TRADE_EXECUTION_SDK',
              url: 'https://api.bitgo.com/docs/#tag/Trade-REST-API',
              page: '/api/external'
            }
          ]
        }
      ]
    },
    {
      title: 'Who We Serve',
      translate: 'MENU.WHO_WE_SERVE',
      page: '/who-we-serve',
      submenu: [
        {
          title: 'Instutional Investors',
          translate: 'MENU.WWS_INS_INV',
          page: '/who-we-serve/instutional-investors',
        },
        {
          title: 'Service Providers',
          translate: 'MENU.WWS_SERVICE_PROV',
          page: '/who-we-serve/service-providers',
        },
      ]
    },
    {
      title: 'Resources',
      translate: 'MENU.RESOURCES',
      page: '/resources',
      submenu: [
        {
          title: 'Case Studies',
          translate: 'MENU.RESOURCES_CASE_STUDIES',
          page: '/resources/case-studies',
        },
        {
          title: 'Digital Asset Insurance',
          translate: 'MENU.RESOURCES_DIG_ASSET_INS',
          page: '/resources/digital-asset-insurance',
        },
        {
          title: 'Currencies & Integrations',
          translate: 'MENU.RESOURCES_CURR_AND_INTG',
          page: '/resources/integrations',
        },
        {
          title: 'Content Library',
          translate: 'MENU.RESOURCES_CONTENT_LIB',
          page: '/resources/content-library',
        },
        {
          title: 'Fork Policy',
          translate: 'MENU.RESOURCES_FORK_POLICY',
          page: '/resources/fork-policy',
        },
        {
          title: 'Price Feeds',
          translate: 'MENU.RESOURCES_PRICE_FEEDS',
          page: '/resources/price-feeds',
        },
      ]
    },
    {
      title: 'Company',
      translate: 'MENU.COMPANY',
      page: '/company',
      submenu: [
        {
          title: 'About',
          translate: 'MENU.COMPANY_ABOUT',
          page: '/company/about',
        },
        {
          title: 'Newsroom',
          translate: 'MENU.COMPANY_NEWSROOM',
          page: '/company/newsroom',
        }
        ,
        {
          title: 'Blog',
          translate: 'MENU.COMPANY_BLOG',
          page: '/company/blog',
        },
        {
          title: 'Career',
          translate: 'MENU.COMPANY_CAREER',
          page: '/company/career',
        }
      ]
    }
  ]
};
