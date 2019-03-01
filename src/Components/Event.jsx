import React from "react";

const home = {
  name: "So you want to learn about Indian Weddings?",
  desc:
    "Click the links above to go through the events. This website is supposed to intruct you on everything you need to know for attending an Indian Wedding. Each event will follow the structure shown here, going through what the event is, my personal analysis of the event and what to wear for the event. I consider myself somewhat of an expert on the subject with a unique worldview. This site is currently sponsered by Bernardi. They make good reliable cars, that aren't flashy but they get you where you need to go",
  analysis:
    "Make sure you pre-game for these events because a lot of them can be dry. If they are dry, look for water bottles that are being carried by people. Sometimes they have vodka in them. Don't eat or drink anything that looks or smells weird. Don't eat food off the roadside either. That can get you sick. There are some places that will give you happy endings if you can find them. Make sure you ask them before you go, because otherwise its weird.",
  dress:
    "For weddings you'll need four to five good outfits. If you want to save money, be creative. Why buy white pants when you could wear white sweatpants? Don't waste money on stuff if you have similar things already. And if you want some shoes, email me I'll give you a good deal. I'll be more detailed for guys, but for girls I'll guess bro."
};

const mehndi = {
  name: "Mehndi",
  desc:
    "The Mehndi is an event for the girls side, but the bros side celebrates it too because tradition. You have to respect tradition, because if we don’t then we fail history. This is the ceremony where they write on your hands with liquid and you leave it for a long time so it makes a tattoo. Other than the tattoo, there's food and dancing which everyone likes. You can just come for the food, no one will judge you. There's also a rule where the girl doesn't have to cook or clean until the tattoo is gone. This is a celebration of our past and where we came from. If you don't know where you came from, how do you know where you're going?",
  analysis:
    "If the marriage lasts longer because of the tattoo, then why don’t people get real tattoos.  Also if the girl doesn’t cook and clean till its gone, then the marriage definitely wont last longer if the tattoo stays on too long. This doesn't make a lot of sense bro, but tradition bro. You can't spit on tradition, because it’s a concept, not a thing. Do you think these people were high when they wrote this?",
  dress:
    "Traditional Indian clothing works. Sometimes this event is outside, so prepare accordingly. If it is outdoor, wear a suit, but instead of the pants, wear jeans. Shorts are acceptable in the summer. You can also wear a t-shit instead of a collar, and sandals without socks if you have nice feet. For Women, wear something nice, but not too nice. This event is the best one to wear your worst outfit. People will forget what you wore here first. Also Indian food is really messy, so your white stuff will get stained. I recommend putting a stain on yourself so you dont have to worry about getting a stain on your clothes later."
};

const sangeet = {
  name: "Sangeet",
  desc:
    "In Indian, Sangeet means 'song', and so we sing at this event, but we also dance. This event is for the bros family to invite the girls family over to watch them dance to old music. It's unclear why this event exists, but it focuses on the present. Everyone dances for each other, and drinks and eats. Its basically a party where the host was too cheap to pay for entertainment so he makes the guests perform. You should go on stage at some point because I think that's how you contribute to society. The purpose of the event is also to take a break from the boring wedding events. I guess the best way to relax is to have another event to plan",
  analysis:
    "This is a singing and dancing event. It should be named something different to make that less confusing. It's a burden on the guests, and is one of the reasons to skip it. However, that's not what you do since you're part of society, you can't just not pitch in, so you should go on stage no matter what at some point. Otherwise you're basically evading taxes and that makes you Donald Trump dude. No one wants that, even though hes rich with a hot wife... People should want to be him right?",
  dress:
    "You should dress for the dance. I've seen many different things, but just buy a kurta, which is basically like a tablecloth with holes in your head and hands. If you have a canvas tablecloth, just bring that to a tailor and pay him like five dollars and you should be okay. Wear Jeans or Sweatpants under the tablecloth, or even just shorts if its summer. This event is also bring your own turban, but if you don't have one, just use a curtain."
};

const wedding = {
  name: "Wedding Ceremony",
  desc:
    "This is the actual wedding, and it symbolizes the sacred joining of two families by burning and chanting and fire. This whole thing is very similar to Harry Potter. It starts with people deciding the date of the wedding by looking at the sky. Then, they tie the bride and groom together and make them walk around fire, like a big fire. I think if you decide you dont want to get married, they push you in. Also the cloth comes really close to the fire so its dangerous. I think thats how god says no to a marriage, by setting them on fire. All in all a very boring ceremony. Theres some culture happening when they walk around the fire. Very cultural event. Bring a coat",
  analysis:
    "You watch people walk around a fire, I feel like after so much dancing and singing you end with something like this. The people who made the weddings didnt have internet. So they never saw the matrix and stuff. They don't know how to put on a show or a good event. I recommend bringing fireworks to this. If you start lighting them during the event people will get excited and you'll save the wedding. Fireworks are easily available in India and pretty cheap. Just dont blow someone up, especially from the bride/grooms family. Fireworks are way better than fire. Its like adding work to fire makes it better",
  dress:
    "You should dress good. At least a blazer with a t-shirt and pressed jeans. No sweatpants or anything like that. You can wear the tablecloth here too, but it should be a different one than the one from the Sangeet. "
};

var currentEvent = home;

export default class Event extends React.Component {
  handleEvent = () => {
    // debugger;
    if (this.props.event === "mehndi") {
      currentEvent = mehndi;
    } else if (this.props.event === "sangeet") {
      currentEvent = sangeet;
    } else if (this.props.event === "wedding") {
      currentEvent = wedding;
    }

    console.log("hello");
  };

  render() {
    return (
      <div className="event">
        {this.handleEvent(currentEvent)}
        <div className="text-block">
          <h1>
            <div className="eventTitle">{currentEvent.name}</div>
          </h1>
          <p className="eventText">
            <span className="title">What it is:</span> {currentEvent.desc}
          </p>
          <p className="eventText">
            <span className="title">Analysis:</span> {currentEvent.analysis}
          </p>
          <p className="eventText">
            <span className="title">Recommended Attire:</span>{" "}
            {currentEvent.dress}
          </p>
        </div>
      </div>
    );
  }
}
