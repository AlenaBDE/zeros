module.exports = function getZerosCount(number) {
        var count = 0;
        for (var i = 5; i < number + 1; i = i + 5) {
            if ((i % 5) == 0) {
                count++;
                if ((i / 5) % 5 == 0) {
                    var N = (i / 5);
                    var D = 5;
                    while (N > 1) {
                        if (N % D == 0) {
                            count++;
                            N = (N / D >> 0);
                        }
                        else {
                            N = 0;
                        }
                    }
                }
            }
        }
        return count;
    };

