function Main(input) {
	tmp = input.split(" ");
	var a = tmp[0];
	var b = tmp[1];

	var calc = a * b;

	if ((calc % 2) === 1) {
		console.log('Odd');
	} else {
		console.log('Even');
	}
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));