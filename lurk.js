const responses = [
	[ 'Have fun whatever you gonna do while lurking!', 45 ],
	[ 'Have a lovely lurk!', 45 ],
	[ 'lurk a lurk a lurk a lurk', 10 ]
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