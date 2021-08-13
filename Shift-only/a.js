let cnt = 0;

function Main(input) {

	tmp = input.split('\n');
	var a = tmp[0];
	var b = tmp[1].split(' ');

  waru(b);

  console.log(cnt);
}

function waru(valList) {
  for(let i=0; i<valList.length; i++) {
    if((valList[i] % 2) === 1) return;

    valList[i] = valList[i] / 2;
  }
  cnt += 1;

  waru(valList);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./input.txt", "utf8"));
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));