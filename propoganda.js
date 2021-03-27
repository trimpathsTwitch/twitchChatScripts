const responses = [
		[ "$(user) did you know Trimpaths claims to be 5' tall when they are really 4'11.75\"?", 1 ],
		[ "PunOko", 1 ],
		[ "BibleThump Trim is 5 ft tall BibleThump I'm not being threatened at all to say this BibleThump", 1 ]
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