import React from 'react';
import { Container, Typography, Tab, Tabs, Box } from '@material-ui/core';

export default function News() {
  // Fetch news data from an API or any other data source
  // You can use the useEffect hook to fetch data asynchronously

  // Replace this with your actual news data
  const newsData = [
    {
      id: 1,
      category: 'Horror',
      title: 'MOVIES"The Morrigan" - "Deep Blue Sea" Star Saffron Burrows Returns to Horror in New Irish Haunter',
      content: 'Filming will take place in Northern Ireland late this year on a horror movie titled The Morrigan, Deadline reports today. Saffron Burrows (Deep Blue Sea) will lead the cast. Deadline details, “The film follows a successful archaeologist but absentee mother who travels to Ireland to excavate a centuries old tomb. However, within the site lurks a danger hidden from mankind for centuries. Once it is unleashed she must battle to save her rebellious teenage daughter from possession by a vengeful Pagan War Goddess.” That particular Goddess, you might have guessed, is known as “The Morrigan.”James Cosmo (Game Of Thrones) and Toby Stephens (Black Sails) also star in The Morrigan, which is written and directed by Colum Eastwood (Black Medicine). Deadline also notes, “AMP is handling worldwide sales and will be selling this month ahead of the AFM. The project has a SAG-AFTRA interim agreement.” AMP"s James Norrie said in a statement, “The Morrigan breathes new life into the demonic possession genre. With its rich pagan folklore it manages to be a balls to the wall horror, and a brilliant female-centric genre movie showcasing just how far a mother will go to protect her child. We are thrilled to be aboard."',
    },
    {
      id: 2,
      category: 'Sci-fi',
      title: 'Star Trek Just Undid One of Deep Space Nine’s Best Characters',
      content: 'Remember when we first met the Ferengi, way back in “The Last Outpost,” episode five of Star Trek: The Next Generation‘s first season? Gene Roddenberry and co. wanted so badly to make the Ferengi menacing, with their laser whips and hunched appearance. But despite Roddenberry’s plans, the Ferengi proved to be a terrible replacement for the Klingons as the Federation’s new big bads, and quickly found themselves reduced to occasional appearances throughout the rest of the series. But instead of letting the Ferengi go to waste, Michael Piller and the producers of Deep Space Nine followed Rule of Acquisition #292: “Only a fool passes up a business opportunity.” They added Quark to the main cast, bringing back “The Last Outpost” actor Armin Shimerman to play him, and added his brother Rom (Max Grodénchik) and nephew Nog (Aron Eisenberg). Over seven seasons, Deep Space Nine transformed the Ferengi from one-note annoyances to rich and multifaceted characters, especially Rom. Initially a bumbling punching bag for his brother and an embarrassment to his son, Rom grew to be a union leader, a skilled engineer, and by the series finale, Grand Nagus of Frenginar. And then Lower Decks flushed all that down the toilet.',
    },
    // Add more news items as needed
  ];

  const categories = ['All', 'Horror', 'Sci-fi'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredNewsData = selectedCategory === 'All' ? newsData : newsData.filter(news => news.category === selectedCategory);

  const handleTabChange = (event, category) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Latest News
      </Typography>

      <Tabs value={selectedCategory} onChange={handleTabChange} indicatorColor="primary" textColor="primary" centered>
        {categories.map(category => (
          <Tab key={category} label={category} value={category} />
        ))}
      </Tabs>

      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Box maxWidth="600px" p={3} borderRadius="50%" boxShadow={3} bgcolor="#212121" color="#FFFFFF">
          {filteredNewsData.map((newsItem) => (
            <div key={newsItem.id} style={{ marginBottom: '20px' }}>
              <Typography variant="h4" component="h2">
                {newsItem.title}
              </Typography>
              <Typography variant="body1">{newsItem.content}</Typography>
            </div>
          ))}
        </Box>
      </Box>
    </Container>
  );
}