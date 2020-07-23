import { Law } from "./models/Law";
import { Decision } from "./models/Decision";
import { Parliament } from "./models/Parliament";
import { Politician } from "./models/Politician";
import { People } from "./models/People";
import { User } from "./models/User";
import { FakeUser } from "./models/FakeUser";
import { CustomMap } from "./models/CustomMap";

// 1 parliament
let parliament = new Parliament(1, "Bundesrepublic", 300, 1);

// 2 parliamentary new law
let law = new Law(
  1,
  "Should there be a carbon tax on cars?",
  new Date(),
  new Date(),
  true
);

// 3 politician
let politician = new Politician(1, "Santi Pornavalai", 25, true, "Afd", {
  lat: 52.4930915,
  lng: 13.4930915,
});

// 4 peoples vote/decision
let people = new People(1, 75.5, 67.2, true);

// 5 individual user
let userLocation = {
  lat: 52.5137715,
  lng: 13.4930915,
};
let user = new User(1, "lisa axford", 55, 1, userLocation);

// 6 decision from a single person
let decision = new Decision(1, true, 1, 1, 1);

// 7 fake user
let fakeUser = new FakeUser(1);
let lat = fakeUser.location.lat;
let lng = fakeUser.location.lng;

// consoles

// 8 google map
const map = new CustomMap("map", lat, lng);
map.addMarker(user);
map.addMarker(politician);
map.addMarker(fakeUser);

const politicianDecision = (politician: Politician, law: Law): void => {
  const name = politician.name;
  const decision = politician.decision;
  const party = politician.party;
  const lawTitle = law.title;
  let decisionText = "disagreed";

  if (decision) {
    let decisionText = "agreed";
  }

  console.log(`
    Law Title: ${lawTitle}
    The politician: ${name}, working with the party ${party} gave the decision: ${decisionText}
    `);
};