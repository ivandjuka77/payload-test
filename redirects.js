const redirects = async () => {
  const internetExplorerRedirect = {
    destination: '/ie-incompatible.html',
    has: [
      {
        type: 'header',
        key: 'user-agent',
        value: '(.*Trident.*)', // all ie browsers
      },
    ],
    permanent: false,
    source: '/:path((?!ie-incompatible.html$).*)', // all pages except the incompatibility page
  }

  // Search Console reports /hydroxy-acids as a 404; the category lives under /products
  const hydroxyAcidsRedirect = {
    source: '/hydroxy-acids',
    destination: '/products/category/hydroxy-acids',
    permanent: true,
  }

  const redirects = [internetExplorerRedirect, hydroxyAcidsRedirect]

  return redirects
}

export default redirects
