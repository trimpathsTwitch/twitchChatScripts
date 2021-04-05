const responses = [
	[ "Did you know Trimpaths claims to be 5' tall when a doctor confirmed they are only 4'11\"?", 30 ],
	[ "PunOko", 10 ],
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