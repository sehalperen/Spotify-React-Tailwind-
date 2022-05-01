import Section from "components/Section";
import songs from "data/songs";


function Home() {


  return (
    <div className="grid gap-y-8">
        <Section
            title="Recently Played"
            more="/see-all"
            items={songs}
        />
        <Section
            title="Shows to Try" 
            more="/see-all"
            items={songs}
        />
        <Section
            title="Made For Seha Alperen"
            more="/see-all"
            items={songs}
        />

    </div>
  );
}

export default Home;