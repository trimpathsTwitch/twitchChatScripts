let sneetches = ['plain-bellied', 'star-bellied'];
let sneetchType = sneetches[Math.floor(Math.random() * 2)];

const responses = [
  [ `We love ${sneetchType} sneetches here, and we are pleased to count ${params.userId} is among them! trimpaLove`, 10 ],
  [ `Malarchy! trimpaAngy ${params.userId} is no sneetch of mine 0_0`, 1 ],
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
respondMsg += JSON.stringify(params);
respondMsg;