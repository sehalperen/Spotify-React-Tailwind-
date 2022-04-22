import Section from "components/Section";


function Home() {

  const items = [
    {
      id: 1,
      title: 'Intouchables - Soundtrack',
      artist: 'The Police',
      description: 'Original Soundtrack',
      image:'https://i.scdn.co/image/ab67616100005174f0c20db5ef6c6fbe5135d2e4',
      type: 'album',
      src: 'https://freesound.org/data/previews/629/629030_10602027-lq.mp3'
    },
    {
      id: 2,
      title: 'Mellow Lofi',
      artist: 'Big Bang',
      description: 'Lofi Hip Hop',
      image:'https://i.scdn.co/image/ab67706c0000da84af1a23e0595870257d81779f',
      type: 'podcast',
      src: 'https://freesound.org/data/previews/629/629107_2282212-lq.mp3'      
    },
    {
      id: 3,
      title: 'New Music Friday Türkiye',
      artist: 'Flexx',
      description: 'Haftanın en iyi yeni çıkışları.',
      image:'https://i.scdn.co/image/ab67706f000000025e66a9be0152b3c5884af11f',
      type: 'artist',
      src: 'https://freesound.org/data/previews/629/629057_12946258-lq.mp3' 
    },
    {
      id: 4,
      title: 'Sisters',
      artist: 'Shawn Demnes',
      description: 'Pain of Salvation',
      image:'https://i.scdn.co/image/ab67616d00001e02b6db1b15fbf0d6a11de4b13c',
      type: 'album',
      src: 'https://freesound.org/data/previews/629/629120_868351-lq.mp3'
     },
     {
      id: 5,
      title: 'Peaceful Piano',
      artist: 'Ksillet',
      description: 'Relax and indulge with beautiful piano pieces',
      image:'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
      type: 'artist',
      src: 'https://freesound.org/data/previews/629/629055_1648170-lq.mp3' 
     },
  ]

  return (
    <div className="grid gap-y-8">
        <Section
            title="Recently Played"
            more="/see-all"
            items={items}
        />
        <Section
            title="Shows to Try" 
            more="/see-all"
            items={items}
        />
        <Section
            title="Made For Seha Alperen"
            more="/see-all"
            items={items}
        />

    </div>
  );
}

export default Home;