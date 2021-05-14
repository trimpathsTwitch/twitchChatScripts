const responses = [
	[ "Did you know Trimpaths claims to be 5' tall when a doctor confirmed they are only 4'11\"? trimpaAngy trimpaAngy trimpaAngy", 30 ],
	[ "PowerUpL trimpaAngy PowerUpR", 10 ],
	[ "BibleThump Trim is 5 ft tall BibleThump I'm not being threatened at all to say this BibleThump", 1 ],
  [ "\"I don't have a lot to give vertically, but I make up for it in volume\" - TrimPaths", 10 ],
  [ "What are your specs? I'm 24, 2 and one half feet tall", 5 ]
];
const total = responses.reduce((total, option) => total + option[1], 0);
var pickScore = Math.floor(Math.random() * total);
var respondMsg = "i did something wrong o no";
for (var i = 0; i < responses.length; ++i)
{
	if (pickScore < responses[i][1])
	{
		respondMsg = responses[i][0];
		break;
	}
	pickScore -= responses[i][1];
}
respondMsg;