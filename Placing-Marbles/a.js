
function Main(input) {
	tmp1 = input.substring(0, 1);
	tmp2 = input.substring(1, 2);
	tmp3 = input.substring(2, 3);

  console.log(parseInt(tmp1, 10)+parseInt(tmp2, 10)+parseInt(tmp3, 10));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));