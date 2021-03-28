/**
 * 크레인 인형뽑기 게임
 * https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
 * 
 * ex)
 * board [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
 * moves [1,5,3,5,1,2,1,4]
 * result 4
 * 
 * @param {*} board 인형이 담긴 2차원배열
 * @param {*} moves 크레인 작동시킨 위치가 담긴 배열
 * @returns 사라진 인형 수
 */
 
// 제출한 풀이
function solution(board, moves) {
    var answer = 0;
    var selected = [];

    for(var i=0; i<moves.length; i++) {
        var searchLine = moves[i]-1;
        
        for(var j=0; j<board.length; j++) {
            var searchVal = board[j][searchLine];

            if(searchVal == 0) continue;
        
            if(selected[selected.length-1] == searchVal) {
                answer += 2;
                selected.pop();  
            }
            else {
                selected.push(searchVal);
            }
            
            board[j][searchLine] = 0;
            break;
        }
    }
    return answer;
}

// 개선
function solution(board, moves) {
    let answer = 0;
    const selected = [];

    for(const move of moves) {
        const searchLine = move-1;
        
        for(const boardLine of board) {
            const searchVal = boardLine[searchLine];

            if(searchVal == 0) continue;
        
            if(selected[selected.length-1] == searchVal) {
                answer += 2;
                selected.pop();  
            }
            else {
                selected.push(searchVal);
            }
            
            boardLine[searchLine] = 0;
            break;
        }
    }

    return answer;
}