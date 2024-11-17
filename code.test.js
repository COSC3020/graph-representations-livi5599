const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test =
    jsc.forall("array (array nat)", function(list) {
        list = list.map(sublist =>
            sublist.filter(neighbor => neighbor >= 0 && neighbor < list.length)
        );
        
        var max = list.length - 1;
        var expectedMatrix = [];
        for (var i = 0; i <= max; i++) {
            expectedMatrix[i] = [];
            for (var j = 0; j <= max; j++) {
                expectedMatrix[i][j] = list[i] && list[i].includes(j) ? 1:0;
            }
            
            list[i].sort(function(a, b) { return a - b; });
            list[i] = [...new Set(list[i])];
        }
        return JSON.stringify(expectedMatrix) == JSON.stringify(convertToAdjMatrix(list));
    });
jsc.assert(test, { tests: 1000 });
