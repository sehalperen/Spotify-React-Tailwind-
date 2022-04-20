import Section from "components/Section";


function Home() {

  const items = [
    {
      id: 1,
      title: 'Intouchables - Soundtrack',
      description: 'Original Soundtrack',
      image:'https://i.scdn.co/image/ab67616100005174f0c20db5ef6c6fbe5135d2e4'
    },
    {
      id: 2,
      title: 'Intouchables - Soundtrack',
      description: 'Original Soundtrack',
      image:'https://i.scdn.co/image/ab67616100005174f0c20db5ef6c6fbe5135d2e4'
    },
    {
      id: 3,
      title: 'Intouchables - Soundtrack',
      description: 'Original Soundtrack',
      image:'https://i.scdn.co/image/ab67616100005174f0c20db5ef6c6fbe5135d2e4'
    },
    {
      id: 4,
      title: 'Intouchables - Soundtrack',
      description: 'Original Soundtrack',
      image:'https://i.scdn.co/image/ab67616100005174f0c20db5ef6c6fbe5135d2e4'
    },
    {
      id: 5,
      title: 'Intouchables - Soundtrack',
      description: 'Original Soundtrack',
      image:'https://i.scdn.co/image/ab67616100005174f0c20db5ef6c6fbe5135d2e4'
    },
  ]

  return (
    <div>
        <Section
            title="Recently Played"
            more="/see-all"
            items={items}
        />
    </div>
  );
}

export default Home;