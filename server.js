const http = require('http');

const quotes = [
  { text: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", author: "Gandhi" },
  { text: "Le plus grand risque est de ne prendre aucun risque.", author: "Mark Zuckerberg" },
  { text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.", author: "Steve Jobs" },
  { text: "N'essayez pas de devenir un homme de succès, essayez de devenir un homme de valeur.", author: "Albert Einstein" },
  { text: "La connaissance s'acquiert par l'expérience, tout le reste n'est que de l'information.", author: "Albert Einstein" },
  { text: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.", author: "Albert Schweitzer" },
  { text: "La meilleure façon de prédire l'avenir est de le créer.", author: "Abraham Lincoln" },
  { text: "Le futur appartient à ceux qui croient à la beauté de leurs rêves.", author: "Eleanor Roosevelt" },
  { text: "La vie est 10% ce qui nous arrive et 90% comment nous y réagissons.", author: "Charles R. Swindoll" },
  { text: "Le succès, c'est se promener d'échecs en échecs sans perdre son enthousiasme.", author: "Winston Churchill" },
  { text: "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.", author: "Franklin D. Roosevelt" }
];

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const server = http.createServer((req, res) => {
  if (req.url === '/random-quote') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(getRandomQuote()));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page non trouvée');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});