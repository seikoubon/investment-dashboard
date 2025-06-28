
const Links = () => {
  const linkSections = [
    {
      title: 'Market Information',
      links: [
        { name: 'Yahoo! Finance Japan', url: 'https://finance.yahoo.co.jp/' },
        { name: 'Bloomberg Japan', url: 'https://www.bloomberg.co.jp/' },
        { name: 'Reuters Japan', url: 'https://jp.reuters.com/' },
        { name: 'Nikkei', url: 'https://www.nikkei.com/' },
      ]
    },
    {
      title: 'Stock Exchanges',
      links: [
        { name: 'Japan Exchange Group (JPX)', url: 'https://www.jpx.co.jp/' },
        { name: 'Tokyo Stock Exchange', url: 'https://www.jpx.co.jp/english/' },
        { name: 'New York Stock Exchange (NYSE)', url: 'https://www.nyse.com/' },
        { name: 'NASDAQ', url: 'https://www.nasdaq.com/' },
      ]
    },
    {
      title: 'Charting Tools',
      links: [
        { name: 'TradingView', url: 'https://www.tradingview.com/' },
      ]
    }
  ];

  return (
    <div>
      <h1>Useful Links</h1>
      {linkSections.map(section => (
        <div key={section.title} className="mb-4">
          <h3>{section.title}</h3>
          <ul className="list-group">
            {section.links.map(link => (
              <li key={link.name} className="list-group-item">
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Links;
