


// var opts = {
//     popNum: *[number],//---报数排除号
//     monNum: *[number],//---最初猴子数
// }
//------------------------------------------------------------
window.queryKing = function(opts){
    var monNum = opts.monNum;
    var popNum = opts.popNum;//---报数排除号
    //********************************
    var monArr = [];//---猴子原始 序号数组
    for(var i = monNum;i--;){//---生成 猴子原始 序号数组
        monArr[i] = i + 1;
    }
    //********************************

    var residue = 0;//---模数
    var divi = 0;
    var spliceNum = 0;//---去除猴子下标



    if (monNum > 2){//---保证原始猴数 > 2在进 while循环
        if(popNum > monNum){//---周期数 超出 剩余猴数,,,此种情况一次只能 splice 一个数，，loop次数 影响 popNum
            while(monNum > 1){
                spliceNum = popNum % monNum - 1 - residue;//---为负数时，，，monNum - spliceNum
                spliceNum = (spliceNum < 0) ? (monNum + spliceNum) : spliceNum;
                console.log('删除第'+monArr.splice(spliceNum,1)+'只');
                residue = monNum - spliceNum - 1;
                monNum--;
            }
            console.log('王：'+monArr[0]);
            return monArr[0];
        }else{//---初始时没超猴数
            while(popNum <= monNum + residue || monNum > 2){//---报号数 大于 剩余猴数+上次loop余数，，不能批量删除,,
                divi = Math.floor((monNum + residue) / popNum);//---本次循环splice 数 int
                for (var i = divi;i--;){
                    monArr.splice(((i + 1) * popNum - 1 - residue),1);
                }
                residue = (monNum + residue) % popNum;//---本次loop没被操作到的余数
                monNum = monNum - divi;
            }

            if (monNum > 2){
                while(monNum > 1){
                    spliceNum = popNum % monNum - 1 - residue;//---为负数时，，，monNum - spliceNum
                    spliceNum = (spliceNum < 0) ? (monNum + spliceNum) : spliceNum;
                    console.log('删除第'+monArr.splice(spliceNum,1)+'只');
                    residue = monNum - spliceNum - 1;
                    monNum--;
                }
                console.log('王：'+monArrl[0]);

            }
        }

    }
    //---最后只剩2个数的特殊情况
    if (residue == 1){//---上次循环剩余一只时
        console.log('王:'+ monArr[1 - (popNum & 1)]);
        return monArr[1 - (popNum & 1)];
    }
    //---上次循环剩余2 或 0
    console.log('王:'+monArr[popNum & 1]);
    return monArr[popNum & 1];
};


queryKing({
    monNum:1000,
    popNum:1001,
});