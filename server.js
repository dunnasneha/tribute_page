const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const tributeData = {
  name: 'Marie Curie',
  hero: {
    eyebrow: 'Tribute to a pioneer',
    description: 'Physicist and chemist who changed science forever with her discovery of radioactivity.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80',
    alt: 'Portrait of Marie Curie'
  },
  about: {
    title: 'Early life and relentless curiosity',
    description: 'Marie Skłodowska Curie was the first woman to win a Nobel Prize and the only person to win Nobel Prizes in two different scientific fields: Physics and Chemistry. Her work laid the foundation for modern radiology and inspired generations of scientists and women around the world.',
    stats: [
      { value: '1867', label: 'Born in Warsaw, Poland' },
      { value: '2', label: 'Nobel Prizes' },
      { value: '7', label: 'Years of laboratory dedication' }
    ]
  },
  sections: [
    { title: 'Achievements', text: 'Marie Curie discovered polonium and radium, coined the term radioactivity, and built the world’s first mobile radiography units during WWI. She also founded the Curie Institutes in Paris and Warsaw.' },
    { title: 'Biography', text: 'After earning her doctorate in 1903, Curie became a professor at the University of Paris. She faced many challenges but remained focused on research, teaching, and developing new scientific techniques.' },
    { title: 'Awards', text: 'She won the Nobel Prize in Physics in 1903 and the Nobel Prize in Chemistry in 1911, plus numerous honors for her breakthroughs in science and public service.' },
    { title: 'Inspirational Quote', text: '"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."' }
  ],
  timeline: [
    { year: '1867', text: 'Born in Warsaw and grew up under Russian rule.' },
    { year: '1891', text: 'Moved to Paris to study physics and mathematics at the Sorbonne.' },
    { year: '1903', text: 'Shared the Nobel Prize in Physics with Pierre Curie and Henri Becquerel.' },
    { year: '1911', text: 'Awarded the Nobel Prize in Chemistry for the discovery of radium and polonium.' },
    { year: '1914', text: 'Opened her first radiological unit to help wounded soldiers in World War I.' }
  ],
  gallery: [
    { src: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80', alt: 'Vintage laboratory equipment', caption: 'Early research labs.' },
    { src: 'https://images.unsplash.com/photo-1517971071642-34a2a9b7052d?auto=format&fit=crop&w=800&q=80', alt: 'Historic portrait of a scientist', caption: 'Curie in Paris.' },
    { src: 'https://images.unsplash.com/photo-1531094463534-d38b8f4c2d54?auto=format&fit=crop&w=800&q=80', alt: 'Scientific notes and handwritten papers', caption: 'Discovery notes.' }
  ]
};

app.use(express.static(path.join(__dirname)));

app.get('/api/person', (req, res) => {
  res.json(tributeData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
